import Link from "next/link";
import Icon from "@/components/ui/Icon";

/**
 * Plantilla para páginas legales (aviso de privacidad, términos y condiciones).
 * Estructura mínima: encabezado con fecha de actualización y cuerpo en prosa.
 */

export type LegalSection = {
  h: string;
  /** Cada string es un párrafo; los arrays anidados se renderizan como lista. */
  body: (string | string[])[];
};

export default function LegalPage({
  eyebrow, title, updated, intro, sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section
        className="px-4 sm:px-6"
        style={{
          background: "linear-gradient(180deg,#FFFFFF 0%,var(--bg-2) 100%)",
          borderBottom: "1px solid var(--border-soft)",
          paddingTop: "clamp(48px,7vw,80px)", paddingBottom: "clamp(32px,5vw,56px)",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
            <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
            {eyebrow}
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(28px,4vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.07,
            margin: "18px 0 16px", color: "var(--ink-1000)",
          }}>
            {title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 20px" }}>
            {intro}
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
            <Icon name="calendar" size={13} />
            Última actualización: {updated}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 md:py-20" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {sections.map(({ h, body }, i) => (
            <section key={h} style={{ marginTop: i === 0 ? 0 : 40 }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(19px,2.4vw,24px)",
                letterSpacing: "-0.018em", lineHeight: 1.25, margin: "0 0 14px", color: "var(--ink-1000)",
              }}>
                {i + 1}. {h}
              </h2>
              {body.map((b, j) =>
                Array.isArray(b) ? (
                  <ul key={j} style={{ margin: "0 0 14px", paddingLeft: 0, listStyle: "none", display: "grid", gap: 9 }}>
                    {b.map((li) => (
                      <li key={li} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                        <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: 999, background: "var(--irca-green)", marginTop: 9 }} />
                        <span style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)" }}>{li}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={j} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg-3)", margin: "0 0 14px" }}>{b}</p>
                )
              )}
            </section>
          ))}

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border-soft)", display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/contacto/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "11px 20px", borderRadius: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none", boxShadow: "var(--shadow-1)" }}
            >
              Contactar a IRCA Consultores <Icon name="arrow-right" size={15} />
            </Link>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "11px 20px", borderRadius: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
