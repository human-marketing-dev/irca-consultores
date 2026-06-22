import Icon from "@/components/ui/Icon";

const pillars = [
  {
    n: "01",
    title: "Rigor técnico",
    desc: "Estudios técnicos respaldados por más de 12 profesionales certificados en ingeniería y ciencias ambientales. Equipamiento propio de campo: HACH, sonómetros calibrados y drones UAV.",
  },
  {
    n: "02",
    title: "Solidez jurídica",
    desc: "Abogados especialistas en derecho ambiental, amparo, litigio federal y procedimientos administrativos. Representación directa ante PROFEPA, SEMARNAT, CONAGUA, STPS y COFEPRIS.",
  },
];

const milieusFeatures = [
  "Gestión centralizada de obligaciones ambientales",
  "Alertas de vencimientos y calendario regulatorio",
  "Resguardo digital del expediente ambiental",
  "Indicadores de cumplimiento por instalación",
];

export default function MissionStrip() {
  return (
    <section id="about" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-deep)", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Decorative concentric circles */}
      <svg style={{ position: "absolute", right: -120, top: -120, opacity: 0.08, pointerEvents: "none" }} width="540" height="540" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx="50" cy="50" r={5 + i * 5} stroke="#fff" strokeWidth="0.4" />
        ))}
      </svg>

      <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
          <span style={{ width: 24, height: 2, background: "rgba(255,255,255,0.6)", display: "inline-block" }} />
          Por qué IRCA
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px,4vw,56px)",
          letterSpacing: "-0.025em", lineHeight: 1.05,
          margin: "16px 0 48px", color: "#fff", maxWidth: "24ch",
        }}>
          La conjunción{" "}
          <span style={{ color: "var(--irca-green)" }}>técnico–jurídica</span>{" "}
          es nuestro diferenciador.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillars 01 and 02 */}
          {pillars.map(({ n, title, desc }) => (
            <div key={n} style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 22 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.55, marginBottom: 12 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.75 }}>{desc}</div>
            </div>
          ))}

          {/* Pillar 03 — Milieus Pro visual card */}
          <div style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(111,176,63,0.35)",
            borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 999, background: "rgba(111,176,63,0.15)", border: "1px solid rgba(111,176,63,0.3)", color: "var(--irca-green)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em" }}>
                EN BETA
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", color: "#fff", lineHeight: 1.2 }}>
                Milieus Pro
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>
                Plataforma de gestión ambiental digital
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {milieusFeatures.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 18, height: 18, borderRadius: 999, background: "rgba(111,176,63,0.2)", color: "var(--irca-green)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="check" size={10} stroke={2.5} />
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>
            <a
              href="/sobre-nosotros/"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--irca-green)", fontWeight: 600, fontSize: 13, textDecoration: "none", marginTop: "auto" }}
            >
              Más sobre IRCA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
