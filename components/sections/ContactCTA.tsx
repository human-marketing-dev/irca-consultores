"use client";

import { useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";

const contactDetails: { icon: IconName; value: string }[] = [
  { icon: "phone",   value: "+52 81 1505‑9330 · 9332" },
  { icon: "mail",    value: "info@ircaconsultores.com" },
  { icon: "globe",   value: "www.ircaconsultores.com" },
  { icon: "map-pin", value: "Nuevo León · sede operativa principal" },
];

const fields = [
  { label: "Nombre completo", placeholder: "Ej. María Sánchez",  type: "text" },
  { label: "Empresa",          placeholder: "Razón social",        type: "text" },
  { label: "Correo",           placeholder: "tu@empresa.com",     type: "email" },
] as const;

const serviceOptions = [
  "Auditoría ambiental",
  "Estudios ambientales",
  "Estudios de ingeniería",
  "Permisos y autorizaciones",
  "Asesoría legal ambiental",
  "Atención de autoridades",
  "Seguridad y salud ocupacional",
  "Capacitación ambiental",
  "Otro / aún no lo sé",
];

const WHATSAPP_URL =
  "https://wa.me/528115059330?text=" +
  encodeURIComponent("Hola, tengo una situación ambiental urgente y necesito apoyo de IRCA Consultores.");

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--border-strong)", borderRadius: 8,
  padding: "10px 12px", fontFamily: "var(--font-body)", fontSize: 14,
  color: "var(--fg-1)", background: "#fff", width: "100%", boxSizing: "border-box",
  outline: "none",
};

export default function ContactCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "linear-gradient(180deg, var(--bg-2) 0%, #fff 100%)" }}>
      <div
        className="grid grid-cols-1 md:[grid-template-columns:1.05fr_1fr] gap-10 md:gap-16 items-start"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* Left column */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
            <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
            Hablemos de tu proyecto
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(28px,4vw,56px)",
            letterSpacing: "-0.03em", lineHeight: 1.05,
            margin: "16px 0 24px", color: "var(--ink-1000)",
          }}>
            Atención ambiental{" "}
            <span style={{ color: "var(--irca-green)" }}>técnica</span> y{" "}
            <span style={{ color: "var(--irca-blue)" }}>legal</span>{" "}
            para decisiones críticas.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "52ch", margin: "0 0 14px" }}>
            <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>Cuéntanos tu caso:</strong>{" "}
            cada situación ambiental requiere una respuesta distinta. No es lo mismo solicitar un
            estudio, atender una auditoría, responder un requerimiento o enfrentar una inspección
            o acción de autoridad.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "52ch", margin: "0 0 14px" }}>
            En IRCA Consultores analizamos el contexto operativo, la evidencia técnica, el marco
            normativo y los riesgos regulatorios para ayudarte a definir el siguiente paso con claridad.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "52ch", margin: "0 0 32px" }}>
            Para situaciones urgentes, contáctanos directamente por teléfono o WhatsApp. Para
            solicitudes ordinarias de propuesta, nuestro equipo procurará contactarte dentro del
            siguiente día hábil.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {contactDetails.map(({ icon, value }) => (
              <div key={value} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--fg-2)", fontSize: 15 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={icon} size={16} />
                </span>
                {value}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: "#25D366", color: "#fff", border: "1px solid #1EB855",
                padding: "12px 20px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
              }}
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp para emergencias
            </a>
            <a
              href="/contacto/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
                padding: "12px 20px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
                borderRadius: 10, textDecoration: "none",
              }}
            >
              <Icon name="calendar" size={17} />
              Agendar cita sin compromiso
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-2)" }}
        >
          {sent ? (
            <div style={{ padding: "40px 8px", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon name="check" size={28} stroke={2.4} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.015em" }}>
                Gracias, recibimos tu solicitud.
              </div>
              <div style={{ fontSize: 14, color: "var(--fg-3)", marginTop: 8 }}>
                Un coordinador procurará contactarte dentro del siguiente día hábil.
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 14 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--fg-1)", letterSpacing: "-0.015em" }}>
                Solicitar información
              </div>
              {fields.map(({ label, placeholder, type }) => (
                <label key={label} style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>
                  {label}
                  <input type={type} required placeholder={placeholder} style={inputStyle} />
                </label>
              ))}
              <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>
                Servicio de interés
                <select style={{ ...inputStyle, appearance: "none" }}>
                  {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>
                Descripción breve
                <textarea
                  rows={3}
                  placeholder="Cuéntanos del proyecto y la autoridad involucrada"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </label>
              <button
                type="submit"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "var(--irca-green)", color: "#fff", border: "none",
                  padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
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
