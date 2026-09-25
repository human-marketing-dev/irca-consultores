const sectores = [
  {
    label: "Manufactura y transformación",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21V10l6 4V10l6 4V7l6 3v11z"/><line x1="7" y1="17" x2="7" y2="18"/><line x1="12" y1="17" x2="12" y2="18"/><line x1="17" y1="17" x2="17" y2="18"/>
      </svg>
    ),
  },
  {
    label: "Química, materiales y procesos especiales",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3"/><path d="M8 3h8"/><path d="M6 14h12"/>
      </svg>
    ),
  },
  {
    label: "Construcción e infraestructura",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>
      </svg>
    ),
  },
  {
    label: "Energía, hidrocarburos y minería",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: "Logística y parques industriales",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 10h4l3 3v4h-7"/>
        <circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>
      </svg>
    ),
  },
  {
    label: "Marítimo, portuario y acuícola",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v12"/><circle cx="12" cy="3.4" r="1.6"/><path d="M8.5 8.5h7"/>
        <path d="M5 13a7 7 0 0 0 14 0"/>
      </svg>
    ),
  },
  {
    label: "Salud, alimentario, servicios e instituciones",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M2 21h20"/>
        <path d="M12 9v6"/><path d="M9 12h6"/>
      </svg>
    ),
  },
  {
    label: "Gobierno, municipios y desarrollo urbano",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-7h6v7"/><line x1="12" y1="4" x2="12" y2="2"/>
      </svg>
    ),
  },
];

const coverage = ["Nuevo León", "Coahuila", "Tamaulipas", "San Luis Potosí", "Sonora", "Guanajuato", "CDMX", "Nacional"];

export default function SectoresStrip() {
  return (
    <section className="px-4 sm:px-6 py-14 md:py-20" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
              <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
              Presencia multisectorial
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "12px 0 0", color: "var(--ink-1000)" }}>
              Más de 25 años de experiencia en los sectores productivos de la economía mexicana
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flexShrink: 0 }}>
            {coverage.map(c => (
              <span key={c} style={{ padding: "5px 12px", borderRadius: 999, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", fontSize: 12, fontWeight: 700 }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
          {sectores.map(({ label, icon }, i) => (
            <div
              key={label}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                padding: "18px 12px", borderRadius: 12,
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
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--fg-2)", lineHeight: 1.35, letterSpacing: "0.01em", textWrap: "balance" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Registro ante la STPS */}
        <div style={{ height: 1, background: "var(--border-soft)", marginBottom: 20 }} />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", flexShrink: 0 }}>
            Registro vigente
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <span style={{
              padding: "6px 14px", borderRadius: 999,
              background: "var(--irca-green-50)", color: "var(--irca-green-700)",
              fontSize: 12, fontWeight: 700, border: "1px solid var(--irca-green-100)",
            }}>
              REPSE
            </span>
            <span style={{ fontSize: 13, color: "var(--fg-3)", lineHeight: 1.5 }}>
              Registro de Prestadoras de Servicios Especializados u Obras Especializadas
              ante la <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>STPS</strong>.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
