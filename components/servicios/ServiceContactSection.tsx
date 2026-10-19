import Icon from "@/components/ui/Icon";
import ContactForm from "@/components/ui/ContactForm";

interface Props {
  headline: React.ReactNode;
  copy: string;
  formTitle: string;
  motivoLabel?: string;
  motivoOptions: string[];
}

export default function ServiceContactSection({ headline, copy, formTitle, motivoLabel = "Motivo", motivoOptions }: Props) {
  return (
    <section id="contacto" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
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
        <ContactForm
          title={formTitle}
          selectLabel={motivoLabel}
          options={motivoOptions}
          descriptionPlaceholder="Cuéntanos del proyecto, la planta o la autoridad involucrada"
          successMessage="Un coordinador te contactará en menos de 24 horas hábiles."
        />
      </div>
    </section>
  );
}
