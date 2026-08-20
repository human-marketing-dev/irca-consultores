import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ServiceFAQ, { type FAQItem } from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

/**
 * Plantilla corta para páginas de especialidad (subservicio).
 * Cuatro secciones: hero con ficha técnica, alcance + cuándo, FAQ y contacto.
 * Deliberadamente más breve que una página de servicio: no repite el discurso
 * institucional del padre, al que siempre enlaza.
 */

export type Subservice = {
  parent: { label: string; href: string };
  title: string;
  lead: string;
  body: string;
  facts: { label: string; value: string }[];
  incluye: string[];
  cuando: string[];
  faqs: FAQItem[];
  contacto: {
    headline: React.ReactNode;
    copy: string;
    formTitle: string;
    motivoLabel: string;
    motivoOptions: string[];
  };
};

function Bullet({ children, accent }: { children: React.ReactNode; accent: "green" | "blue" }) {
  const green = accent === "green";
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{
        flexShrink: 0, width: 22, height: 22, borderRadius: 999, marginTop: 1,
        background: green ? "var(--irca-green-50)" : "var(--irca-blue-50)",
        color: green ? "var(--irca-green-700)" : "var(--irca-blue-700)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name="check" size={12} stroke={2.5} />
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)" }}>{children}</span>
    </div>
  );
}

export default function SubservicePage({
  parent, title, lead, body, facts, incluye, cuando, faqs, contacto,
}: Subservice) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="px-4 sm:px-6"
        style={{
          position: "relative", overflow: "hidden",
          background: "linear-gradient(180deg,#FFFFFF 0%,var(--bg-2) 100%)",
          paddingTop: "clamp(48px,7vw,80px)", paddingBottom: "clamp(40px,6vw,68px)",
        }}
      >
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.22 }} aria-hidden="true">
          <defs>
            <pattern id="topoSub" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#C7E2F0" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#DCEFCB" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoSub)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.85fr] gap-10 md:gap-14 items-start"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <div>
            {/* Migaja al servicio padre */}
            <Link
              href={parent.href}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--irca-green-700)", textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              {parent.label}
            </Link>

            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.03em", lineHeight: 1.06,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              {title}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", maxWidth: "56ch", margin: "0 0 14px" }}>
              {lead}
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", maxWidth: "56ch", margin: "0 0 30px" }}>
              {body}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--irca-green)", color: "#fff",
                  padding: "13px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
                  borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
                }}
              >
                Solicitar información <Icon name="arrow-right" size={16} />
              </a>
              <Link
                href={parent.href}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
                  padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
                  borderRadius: 10, textDecoration: "none",
                }}
              >
                Ver el servicio completo
              </Link>
            </div>
          </div>

          {/* Ficha técnica */}
          <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-2)" }}>
            <div style={{ fontSize: 11, color: "var(--fg-4)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>
              Ficha técnica
            </div>
            {facts.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "13px 0", borderBottom: "1px solid var(--border-soft)" }}>
                <span style={{ fontSize: 13, color: "var(--fg-4)", fontWeight: 600, flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 14, color: "var(--fg-1)", fontWeight: 600, textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALCANCE + CUÁNDO ──────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,30px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "0 0 22px", color: "var(--ink-1000)" }}>
              Qué incluye
            </h2>
            <div style={{ display: "grid", gap: 13 }}>
              {incluye.map((t) => <Bullet key={t} accent="green">{t}</Bullet>)}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,30px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "0 0 22px", color: "var(--ink-1000)" }}>
              Cuándo lo necesitas
            </h2>
            <div style={{ display: "grid", gap: 13 }}>
              {cuando.map((t) => <Bullet key={t} accent="blue">{t}</Bullet>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" className="px-4 sm:px-6 py-16 md:py-20" style={{ background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "0 0 32px", color: "var(--ink-1000)" }}>
            Preguntas frecuentes
          </h2>
          <ServiceFAQ items={faqs} />
        </div>
      </section>

      {/* ── CTA + FORM ────────────────────────────────── */}
      <ServiceContactSection {...contacto} />
    </>
  );
}
