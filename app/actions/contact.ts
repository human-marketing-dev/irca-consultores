"use server";

import { headers } from "next/headers";
import { rateLimit, cleanLine, cleanText, spamReason, emailDomainExists, verifyTurnstile } from "@/lib/contact-guard";

/* Envío del formulario de contacto mediante la API transaccional de Brevo.
 * Variables requeridas en el entorno: BREVO_API_KEY, CONTACT_FROM_EMAIL,
 * CONTACT_FROM_NAME y CONTACT_TO_EMAIL (admite varios correos separados por coma).
 * El remitente debe estar verificado en Brevo (Senders, Domains & Dedicated IPs).
 * Anti-spam opcional: TURNSTILE_SECRET_KEY + NEXT_PUBLIC_TURNSTILE_SITE_KEY (Cloudflare). */

export type ContactValues = {
  nombre: string;
  empresa: string;
  correo: string;
  motivo: string;
  descripcion: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  values?: ContactValues;
};

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";
const EMAIL_RE = /^[^\s@<>"(),;:]+@[^\s@<>"(),;:]+\.[a-z]{2,}$/i;
const MIN_FILL_MS = 2500;
const MAX_FILL_MS = 24 * 60 * 60 * 1000;
const GENERIC_ERROR = "No pudimos enviar tu solicitud. Intenta de nuevo o llámanos.";

function field(formData: FormData, name: string, max: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.slice(0, max) : "";
}

async function clientIp() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values: ContactValues = {
    nombre:      cleanLine(field(formData, "nombre", 120)),
    empresa:     cleanLine(field(formData, "empresa", 160)),
    correo:      cleanLine(field(formData, "correo", 160)).toLowerCase(),
    motivo:      cleanLine(field(formData, "motivo", 160)),
    descripcion: cleanText(field(formData, "descripcion", 4000)),
  };
  const origen = cleanLine(field(formData, "origen", 300));
  const ip = await clientIp();

  // 1. Honeypot: los bots llenan el campo oculto; respondemos como si se hubiera enviado.
  if (field(formData, "website", 200)) {
    console.warn("[contacto] descartado: honeypot");
    return { status: "success" };
  }

  // 2. Límite de envíos por IP y global
  if (!rateLimit(ip)) {
    console.warn("[contacto] bloqueado: límite de envíos");
    return { status: "error", message: "Recibimos demasiados intentos. Espera unos minutos o llámanos.", values };
  }

  // 3. Trampa de tiempo: tiempo entre que se mostró el formulario y el envío
  const elapsed = Number(field(formData, "elapsed", 20));
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    console.warn("[contacto] bloqueado: tiempo de llenado", elapsed);
    return { status: "error", message: "No pudimos validar el envío. Revisa tus datos e intenta de nuevo.", values };
  }

  // 4. Validación de campos
  if (!values.nombre || !values.empresa || !EMAIL_RE.test(values.correo)) {
    return { status: "error", message: "Revisa tu nombre, empresa y correo antes de enviar.", values };
  }

  // 5. Contenido típico de spam: se descarta sin avisar al bot
  const reason = spamReason(values);
  if (reason) {
    console.warn("[contacto] descartado:", reason);
    return { status: "success" };
  }

  // 6. Captcha invisible (Cloudflare Turnstile), si está configurado
  if (!(await verifyTurnstile(field(formData, "cf-turnstile-response", 2048), ip))) {
    return { status: "error", message: "No pudimos verificar que no eres un robot. Intenta de nuevo.", values };
  }

  // 7. El dominio del correo debe existir
  if (!(await emailDomainExists(values.correo))) {
    return { status: "error", message: "El dominio de tu correo no parece válido. Revísalo e intenta de nuevo.", values };
  }

  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME || "IRCA Consultores";
  const to = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email) => ({ email }));

  if (!apiKey || !fromEmail || to.length === 0) {
    console.error("[contacto] Faltan variables de entorno de Brevo.");
    return { status: "error", message: GENERIC_ERROR, values };
  }

  const rows: [string, string][] = [
    ["Nombre", values.nombre],
    ["Empresa", values.empresa],
    ["Correo", values.correo],
    ["Motivo", values.motivo || "—"],
    ["Descripción", values.descripcion || "—"],
    ["Origen", origen || "—"],
  ];

  const htmlContent = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a">
      <h2 style="margin:0 0 16px;font-size:18px">Nueva solicitud desde el sitio web</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        ${rows
          .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #eee">${k}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
          .join("")}
      </table>
    </div>`;
  const textContent = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch(BREVO_URL, {
      method: "POST",
      headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { email: fromEmail, name: fromName },
        to,
        replyTo: { email: values.correo, name: values.nombre },
        subject: `Nueva solicitud: ${values.motivo || "Contacto"} — ${values.empresa}`,
        htmlContent,
        textContent,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("[contacto] Brevo respondió", res.status, await res.text());
      return { status: "error", message: GENERIC_ERROR, values };
    }
  } catch (err) {
    console.error("[contacto] Error de red con Brevo", err);
    return { status: "error", message: GENERIC_ERROR, values };
  }

  return { status: "success" };
}
