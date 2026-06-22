"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--border-strong)", borderRadius: 8,
  padding: "11px 12px", fontFamily: "var(--font-body)", fontSize: 14,
  color: "var(--fg-1)", background: "#fff", width: "100%", boxSizing: "border-box", outline: "none",
};

interface Props {
  headline: React.ReactNode;
  copy: string;
  formTitle: string;
  motivoLabel?: string;
  motivoOptions: string[];
}

export default function ServiceContactSection({ headline, copy, formTitle, motivoLabel = "Motivo", motivoOptions }: Props) {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
      <div
        className="grid grid-cols-1 md:[grid-template-columns:1.05fr_1fr] gap-10 md:gap-16 items-start"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* Left column */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
            <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
            Hablemos de tu operación
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(32px,4vw,54px)",
            letterSpacing: "-0.03em", lineHeight: 1.03,
            margin: "16px 0 24px", color: "var(--ink-1000)",
          }}>
            {headline}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", maxWidth: "50ch", margin: "0 0 32px" }}>
            {copy}
          </p>
          <div style={{ display: "grid", gap: 14 }}>
            {[
              { icon: "phone" as const,   text: "+52 81 1505‑9330 · 9332" },
              { icon: "mail" as const,    text: "info@ircaconsultores.com" },
              { icon: "map-pin" as const, text: "Nuevo León · cobertura nacional" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--fg-2)", fontSize: 15 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={icon} size={16} />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 28, boxShadow: "var(--shadow-2)" }}
        >
          {sent ? (
            <div style={{ padding: "40px 8px", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon name="check" size={28} stroke={2.4} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--fg-1)", letterSpacing: "-0.015em" }}>
                Gracias, recibimos tu solicitud.
              </div>
              <div style={{ fontSize: 14, color: "var(--fg-3)", marginTop: 8 }}>
                Un coordinador te contactará en menos de 24 horas hábiles.
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 14 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.015em" }}>
                {formTitle}
              </div>
              {[
                { label: "Nombre completo", placeholder: "Ej. María Sánchez", type: "text" },
                { label: "Empresa",          placeholder: "Razón social",       type: "text" },
                { label: "Correo",           placeholder: "tu@empresa.com",    type: "email" },
              ].map(({ label, placeholder, type }) => (
                <label key={label} style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>
                  {label}
                  <input type={type} required placeholder={placeholder} style={inputStyle} />
                </label>
              ))}
              <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>
                {motivoLabel}
                <select style={{ ...inputStyle, appearance: "none" }}>
                  {motivoOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>
                Descripción breve
                <textarea
                  rows={3}
                  placeholder="Cuéntanos del proyecto, la planta o la autoridad involucrada"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </label>
              <button
                type="submit"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "var(--irca-green)", color: "#fff", border: "none",
                  padding: "14px 26px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16,
                  borderRadius: 10, cursor: "pointer", width: "100%", boxShadow: "var(--shadow-1)",
                }}
              >
                Enviar solicitud <Icon name="arrow-right" size={17} />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
