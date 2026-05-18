const stats = [
  { value: "+25", title: "Años de experiencia",      sub: "Operación ininterrumpida desde 1999" },
  { value: "+500", title: "Estudios y proyectos",    sub: "Técnicos, jurídicos y de gestión" },
  { value: "+50", title: "Clientes activos",          sub: "Nacionales e internacionales" },
  { value: "8",   title: "Sectores de especialidad", sub: "Industrial · minero · energético · más" },
];

export default function StatsStrip() {
  return (
    <section style={{ borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map(({ value, title, sub }, i) => (
          <div
            key={value}
            style={{
              padding: "36px 28px",
              borderLeft: i === 0 ? 0 : "1px solid var(--border-soft)",
            }}
          >
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56,
              letterSpacing: "-0.04em", lineHeight: 1,
              color: i % 2 === 0 ? "var(--irca-green)" : "var(--irca-blue)",
            }}>
              {value}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-1)", marginTop: 10 }}>{title}</div>
            <div style={{ fontSize: 12, color: "var(--fg-4)", marginTop: 4 }}>{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
