const sectores = [
  {
    label: "Industrial",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    label: "Minero",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22 L12 2 L22 22"/><line x1="6" y1="14" x2="18" y2="14"/>
      </svg>
    ),
  },
  {
    label: "Energético",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: "Acuícola",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    label: "Inmobiliario",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: "Ferroviario",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="14" rx="2"/>
        <line x1="4" y1="10" x2="20" y2="10"/>
        <line x1="9" y1="3" x2="9" y2="10"/>
        <line x1="15" y1="3" x2="15" y2="10"/>
        <path d="M8 21l2-4h4l2 4"/>
        <line x1="6" y1="21" x2="18" y2="21"/>
      </svg>
    ),
  },
  {
    label: "Portuario",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V10l7-7 7 7v10"/>
        <path d="M9 20v-5h6v5"/>
      </svg>
    ),
  },
  {
    label: "Gubernamental",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V8l9-7 9 7v13"/><path d="M9 21v-8h6v8"/>
      </svg>
    ),
  },
];

const entities = [
  { label: "IRCA Ingeniería y Servicios, S.C.", color: "green" },
  { label: "Environmental North de México, S.C.", color: "blue" },
];

const coverage = ["Nuevo León", "Coahuila", "Tamaulipas", "Sonora", "Guanajuato", "CDMX", "Nacional"];

export default function SectoresStrip() {
  return (
    <section className="px-4 sm:px-6 py-14 md:py-20" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
              <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
              Presencia multisectorial
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "12px 0 0", color: "var(--ink-1000)" }}>
              25 años de experiencia en ocho sectores de la economía mexicana
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flexShrink: 0 }}>
            {coverage.map(c => (
              <span key={c} style={{ padding: "5px 12px", borderRadius: 999, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", fontSize: 12, fontWeight: 700 }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-10">
          {sectores.map(({ label, icon }, i) => (
            <div
              key={label}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                padding: "18px 8px", borderRadius: 12,
                background: "var(--bg-2)", border: "1px solid var(--border-soft)",
                textAlign: "center",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: i % 2 === 0 ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                color: i % 2 === 0 ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>
                {icon}
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--fg-2)", lineHeight: 1.3, letterSpacing: "0.02em" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Legal entities callout */}
        <div style={{ height: 1, background: "var(--border-soft)", marginBottom: 20 }} />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", flexShrink: 0 }}>
            Razones sociales
          </span>
          <div className="flex flex-wrap gap-3">
            {entities.map(({ label, color }) => (
              <span key={label} style={{
                padding: "6px 14px", borderRadius: 999,
                background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                fontSize: 12, fontWeight: 700, border: `1px solid ${color === "green" ? "var(--irca-green-100)" : "var(--irca-blue-100)"}`,
              }}>
                {label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
