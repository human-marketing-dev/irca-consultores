import Icon, { type IconName } from "@/components/ui/Icon";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { ircaSocial } from "@/lib/social";

const contactDetails: { icon: IconName; value: string }[] = [
  { icon: "phone",   value: "+52 81 1505‑9330 · 9332" },
  { icon: "mail",    value: "info@ircaconsultores.com" },
  { icon: "globe",   value: "www.ircaconsultores.com" },
  { icon: "map-pin", value: "Nuevo León · sede operativa principal" },
];

const serviceOptions = [
  "Auditoría y diagnóstico ambiental",
  "Estudios ambientales",
  "Estudios, trámites y autorizaciones",
  "Servicios legales y atención de autoridades",
  "Consultoría y supervisión ambiental",
  "Auditoría y diagnóstico de seguridad y salud",
  "Estudios de seguridad y salud",
  "Estudios de ingeniería",
  "Capacitación técnica especializada",
  "Otro / aún no lo sé",
];

const WHATSAPP_URL =
  "https://wa.me/528115059330?text=" +
  encodeURIComponent("Hola, tengo una situación ambiental urgente y necesito apoyo de IRCA Consultores.");

export default function ContactCTA() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%)" }}>
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

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              Síguenos
            </span>
            {ircaSocial.map(({ icon, href, label }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} de IRCA Consultores`}
                title={label}
                className="bg-[color:var(--irca-blue-50)] text-[color:var(--irca-blue-700)] hover:bg-[color:var(--irca-blue-700)] hover:text-white transition-colors"
                style={{ width: 36, height: 36, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <SocialIcon name={icon} size={16} />
              </a>
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
                background: "var(--bg-1)", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
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
        <ContactForm
          compact
          title="Solicitar información"
          selectLabel="Servicio de interés"
          options={serviceOptions}
          descriptionPlaceholder="Cuéntanos del proyecto y la autoridad involucrada"
          successMessage="Un coordinador procurará contactarte dentro del siguiente día hábil."
        />
      </div>
    </section>
  );
}
