const pillars = [
  {
    n: "01",
    title: "Rigor técnico",
    desc: "Estudios técnicos respaldados por más de 12 profesionales certificados en ingeniería y ciencias ambientales.",
  },
  {
    n: "02",
    title: "Solidez jurídica",
    desc: "Abogados especialistas en derecho ambiental, amparo, litigio federal y procedimientos administrativos.",
  },
  {
    n: "03",
    title: "Innovación propia",
    desc: "Milieus Pro, plataforma digital para la gestión y resguardo del archivo ambiental, actualmente en piloto.",
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
          Por qué IRCA
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px,4vw,56px)",
          letterSpacing: "-0.025em", lineHeight: 1.05,
          margin: "16px 0 40px", color: "#fff", maxWidth: "24ch",
        }}>
          La conjunción{" "}
          <span style={{ color: "var(--irca-green)" }}>técnico–jurídica</span>{" "}
          es nuestro diferenciador.
        </h2>

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
