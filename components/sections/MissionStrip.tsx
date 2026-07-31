const pillars = [
  {
    n: "01",
    title: "Consultoría técnica",
    desc: "No elaboramos estudios como documentos aislados. Interpretamos procesos, mediciones, instalaciones, riesgos ambientales y condiciones reales de operación para traducirlos en criterios de cumplimiento y rutas de acción.",
  },
  {
    n: "02",
    title: "Asesoría legal",
    desc: "No analizamos la norma en abstracto. La conectamos con evidencia técnica y el criterio de ingeniería, operación industrial, expedientes, autorizaciones, obligaciones ambientales y criterios de inspección de las autoridades.",
  },
  {
    n: "03",
    title: "Soluciones defendibles",
    desc: "El resultado son estrategias, permisos, informes y respuestas que pueden sostenerse técnicamente en campo y jurídicamente ante una autoridad, una auditoría, una inspección o una controversia administrativa.",
  },
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
          Por qué IRCA Consultores
        </div>
        <div className="grid grid-cols-1 md:[grid-template-columns:1fr_1fr] gap-8 md:gap-16 items-start" style={{ margin: "16px 0 48px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px,4vw,52px)",
            letterSpacing: "-0.025em", lineHeight: 1.05,
            margin: 0, color: "#fff", maxWidth: "20ch",
          }}>
            La diferencia está en integrar lo{" "}
            <span style={{ color: "var(--irca-green)" }}>técnico</span> con lo{" "}
            <span style={{ color: "var(--irca-blue)" }}>jurídico</span>.
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", margin: 0 }}>
              La mayoría de las consultorías ambientales resuelve desde el estudio técnico. Muchos
              despachos legales resuelven desde la interpretación normativa. IRCA Consultores integra
              ambas visiones para construir soluciones ambientales técnicamente sustentadas,
              jurídicamente defendibles y operativamente viables.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", margin: 0 }}>
              Nuestro valor no está solo en elaborar documentos, permisos o estrategias legales, sino
              en entender cómo se relacionan la operación real de una empresa, la evidencia técnica,
              la norma aplicable y el criterio de la autoridad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ n, title, desc }) => (
            <div key={n} style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 22 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.55, marginBottom: 12 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.75 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
