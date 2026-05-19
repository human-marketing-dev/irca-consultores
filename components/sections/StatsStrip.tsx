const stats = [
  { value: "+25",  title: "Años de experiencia",      sub: "Operación ininterrumpida desde 1999" },
  { value: "+500", title: "Estudios y proyectos",      sub: "Técnicos, jurídicos y de gestión" },
  { value: "+50",  title: "Clientes activos",          sub: "Nacionales e internacionales" },
  { value: "8",    title: "Sectores de especialidad",  sub: "Industrial · minero · energético · más" },
];

export default function StatsStrip() {
  return (
    <section className="px-4 sm:px-6" style={{ borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)", background: "#fff" }}>
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: 1280, margin: "0 auto" }}>
        {stats.map(({ value, title, sub }, i) => (
          <div
            key={value}
            className={i > 0 ? "border-l" : ""}
            style={{ padding: "28px 20px", borderColor: "var(--border-soft)" }}
          >
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(40px,5vw,56px)",
              letterSpacing: "-0.04em", lineHeight: 1,
              color: i % 2 === 0 ? "var(--irca-green)" : "var(--irca-blue)",
            }}>
              {value}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-1)", marginTop: 8 }}>{title}</div>
            <div style={{ fontSize: 11, color: "var(--fg-4)", marginTop: 3, lineHeight: 1.4 }}>{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
