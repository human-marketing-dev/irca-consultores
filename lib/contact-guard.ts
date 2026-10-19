/* Protecciones anti-spam del formulario de contacto (solo servidor). */

import { resolveMx, resolve4 } from "node:dns/promises";

/* ── Límite de envíos ──────────────────────────────────
 * En memoria: funciona por instancia del servidor. En hosting serverless cada
 * instancia lleva su propio conteo, así que es una barrera parcial; Turnstile y
 * las reglas del firewall del hosting son la protección principal. */

const PER_IP_LIMIT = 5;
const PER_IP_WINDOW_MS = 15 * 60 * 1000;
const GLOBAL_LIMIT = 60;
const GLOBAL_WINDOW_MS = 60 * 60 * 1000;

const hits = new Map<string, number[]>();
let globalHits: number[] = [];

export function rateLimit(ip: string): boolean {
  const now = Date.now();

  globalHits = globalHits.filter((t) => now - t < GLOBAL_WINDOW_MS);
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < PER_IP_WINDOW_MS);

  if (recent.length >= PER_IP_LIMIT || globalHits.length >= GLOBAL_LIMIT) {
    hits.set(ip, recent);
    return false;
  }

  recent.push(now);
  hits.set(ip, recent);
  globalHits.push(now);

  // Evita que el mapa crezca sin límite
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= PER_IP_WINDOW_MS)) hits.delete(key);
    }
  }
  return true;
}

/* ── Limpieza de campos ─────────────────────────────── */

/** Quita caracteres de control y saltos de línea de campos de una sola línea. */
export function cleanLine(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]+/g, " ").replace(/\s{2,}/g, " ").trim();
}

/** Quita caracteres de control salvo saltos de línea y tabuladores. */
export function cleanText(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
}

/* ── Heurísticas de contenido ───────────────────────── */

const URL_RE = /(https?:\/\/|www\.)\S+/i;
const URL_RE_ALL = /(https?:\/\/|www\.)\S+/gi;
const CYRILLIC_CJK_RE = /[Ѐ-ӿ぀-ヿ一-鿿가-힯]/;

/** Devuelve un motivo si el contenido parece spam, o null si es aceptable. */
export function spamReason(fields: { nombre: string; empresa: string; descripcion: string }): string | null {
  const { nombre, empresa, descripcion } = fields;
  if (URL_RE.test(nombre) || URL_RE.test(empresa)) return "enlace en nombre o empresa";
  if ((descripcion.match(URL_RE_ALL) ?? []).length > 2) return "demasiados enlaces";
  if (CYRILLIC_CJK_RE.test(nombre + empresa + descripcion)) return "alfabeto no esperado";
  if (/<\s*(a|script|iframe)\b|\[url=|\[link=/i.test(descripcion)) return "marcado HTML/BBCode";
  return null;
}

/* ── Dominio del correo ─────────────────────────────── */

/** Verifica que el dominio del correo pueda recibir correo. Si DNS tarda, no bloquea. */
export async function emailDomainExists(email: string): Promise<boolean> {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;

  const lookup = (async () => {
    try {
      const mx = await resolveMx(domain);
      if (mx.length > 0) return true;
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code !== "ENODATA" && code !== "ENOTFOUND") return true; // error de red: no bloquear
    }
    try {
      return (await resolve4(domain)).length > 0;
    } catch {
      return false;
    }
  })();

  const timeout = new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 3000));
  return Promise.race([lookup, timeout]);
}

/* ── Cloudflare Turnstile ───────────────────────────── */

export async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile no configurado
  if (!token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, ...(ip !== "unknown" && { remoteip: ip }) }),
      cache: "no-store",
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[contacto] No se pudo verificar Turnstile", err);
    return false;
  }
}
