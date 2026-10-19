"use client";

import { useActionState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Icon from "@/components/ui/Icon";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

// Cloudflare Turnstile: solo se activa si la llave pública está configurada.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

const labelStyle: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)",
};

interface Props {
  title: string;
  selectLabel: string;
  options: string[];
  descriptionPlaceholder: string;
  successMessage: string;
  /** Versión compacta (home y /contacto) o amplia (páginas de servicio). */
  compact?: boolean;
}

export default function ContactForm({ title, selectLabel, options, descriptionPlaceholder, successMessage, compact = false }: Props) {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const pathname = usePathname();
  const v = state.values;

  // Momento en que se mostró el formulario: el servidor rechaza envíos hechos en menos de 2.5 s.
  const mountedAt = useRef(0);
  useEffect(() => { mountedAt.current = Date.now(); }, []);

  // Prellenado desde la URL, p. ej. /contacto/?servicio=…&curso=… (enlaces de la página de capacitación)
  const selectRef = useRef<HTMLSelectElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");
    const curso = params.get("curso")?.slice(0, 200);
    if (servicio && selectRef.current && options.includes(servicio)) selectRef.current.value = servicio;
    if (curso && textareaRef.current && !textareaRef.current.value) {
      textareaRef.current.value = `Me interesa el curso: ${curso}.\n`;
    }
  }, [options]);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  function renderTurnstile() {
    if (!TURNSTILE_SITE_KEY || !window.turnstile || !turnstileRef.current || widgetId.current) return;
    widgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      appearance: "interaction-only",
      language: "es",
      theme: "auto",
    });
  }

  // El token de Turnstile es de un solo uso: se regenera después de cada intento fallido.
  useEffect(() => {
    if (state.status === "error" && widgetId.current) window.turnstile?.reset(widgetId.current);
  }, [state]);

  useEffect(() => () => {
    if (widgetId.current) window.turnstile?.remove(widgetId.current);
    widgetId.current = null;
  }, []);

  function submit(formData: FormData) {
    formData.set("elapsed", String(mountedAt.current ? Date.now() - mountedAt.current : 0));
    return formAction(formData);
  }

  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--border-strong)", borderRadius: 8,
    padding: compact ? "10px 12px" : "11px 12px", fontFamily: "var(--font-body)", fontSize: 14,
    color: "var(--fg-1)", background: "var(--bg-1)", width: "100%", boxSizing: "border-box", outline: "none",
  };

  return (
    <form
      action={submit}
      style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 16, padding: compact ? 24 : 28, boxShadow: "var(--shadow-2)" }}
    >
      {state.status === "success" ? (
        <div style={{ padding: "40px 8px", textAlign: "center" }} aria-live="polite">
          <div style={{ width: 56, height: 56, borderRadius: 999, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
            <Icon name="check" size={28} stroke={2.4} />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: compact ? 22 : 24, color: "var(--fg-1)", letterSpacing: "-0.015em" }}>
            Gracias, recibimos tu solicitud.
          </div>
          <div style={{ fontSize: 14, color: "var(--fg-3)", marginTop: 8 }}>{successMessage}</div>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: compact ? 20 : 22, color: "var(--fg-1)", letterSpacing: "-0.015em" }}>
            {title}
          </div>

          <input type="hidden" name="origen" value={`${title} · ${pathname}`} />
          {/* Honeypot anti-spam: oculto para personas, visible para bots */}
          <div aria-hidden="true" style={{ position: "absolute", left: -10000, width: 1, height: 1, overflow: "hidden" }}>
            <label>
              Sitio web
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <label style={labelStyle}>
            Nombre completo
            <input name="nombre" type="text" required autoComplete="name" placeholder="Ej. María Sánchez" defaultValue={v?.nombre} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Empresa
            <input name="empresa" type="text" required autoComplete="organization" placeholder="Razón social" defaultValue={v?.empresa} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Correo
            <input name="correo" type="email" required autoComplete="email" placeholder="tu@empresa.com" defaultValue={v?.correo} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            {selectLabel}
            <div style={{ position: "relative" }}>
              <select
                ref={selectRef}
                name="motivo"
                required
                defaultValue={v?.motivo ?? ""}
                style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 40, cursor: "pointer" }}
              >
                <option value="" disabled>Selecciona una opción</option>
                {options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--fg-3)" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </label>
          <label style={labelStyle}>
            Descripción breve
            <textarea
              ref={textareaRef}
              name="descripcion"
              rows={3}
              placeholder={descriptionPlaceholder}
              defaultValue={v?.descripcion}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </label>

          {TURNSTILE_SITE_KEY && (
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              strategy="afterInteractive"
              onReady={renderTurnstile}
            />
          )}
          <div ref={turnstileRef} />

          {state.status === "error" && (
            <div role="alert" style={{ fontSize: 13, lineHeight: 1.5, color: "var(--danger)", background: "var(--danger-bg)", borderRadius: 8, padding: "8px 10px" }}>
              {state.message} <a href="tel:+528115059330" style={{ color: "inherit", fontWeight: 600 }}>+52 81 1505-9330</a>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: "var(--irca-green)", color: "#fff", border: "none",
              padding: compact ? "13px 22px" : "14px 26px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: compact ? 15 : 16,
              borderRadius: 10, cursor: pending ? "wait" : "pointer", width: "100%", boxShadow: "var(--shadow-1)",
              opacity: pending ? 0.7 : 1,
            }}
          >
            {pending ? "Enviando…" : <>Enviar solicitud <Icon name="arrow-right" size={17} /></>}
          </button>
        </div>
      )}
    </form>
  );
}
