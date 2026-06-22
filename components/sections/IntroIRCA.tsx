const differentiators = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Firma técnico-jurídica",
    desc: "Combinamos ingeniería ambiental y derecho en un solo equipo. No necesitas contratar dos despachos.",
    color: "green",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    label: "Equipamiento propio de campo",
    desc: "Sonómetros calibrados, equipos HACH para agua y drones UAV para levantamientos fotogramétricos.",
    color: "blue",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: "Presencia nacional",
    desc: "Oficinas en Monterrey con cobertura en Coahuila, Tamaulipas, Sonora, Guanajuato y CDMX.",
    color: "green",
  },
];

export default function IntroIRCA() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderBottom: "1px solid var(--border-soft)" }}>
      <div className="grid grid-cols-1 md:[grid-template-columns:1fr_420px] gap-12 md:gap-20 items-start" style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Left — copy */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
            <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
            Sobre IRCA
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(28px,3.5vw,48px)",
            letterSpacing: "-0.025em", lineHeight: 1.08,
            margin: "16px 0 24px", color: "var(--fg-1)", maxWidth: "22ch",
          }}>
            Consultoría ambiental con{" "}
            <span style={{ color: "var(--irca-green)" }}>más de 25 años</span>{" "}
            acompañando operaciones en México.
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", marginBottom: 16, maxWidth: "58ch" }}>
            Desde 1999, IRCA Consultores opera como la conjunción entre ingeniería ambiental y
            derecho ambiental. Nuestro modelo integrado permite que un solo equipo atienda desde
            el estudio técnico de impacto hasta la defensa jurídica ante PROFEPA, SEMARNAT o CONAGUA.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", marginBottom: 32, maxWidth: "58ch" }}>
            Somos dos razones sociales —<strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>IRCA Ingeniería y Servicios, S.C.</strong> y{" "}
            <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>Environmental North de México, S.C.</strong>—
            con más de 12 profesionales certificados, equipamiento propio de campo y cobertura
            en los principales polos industriales del país.
          </p>

          <a
            href="/sobre-nosotros/"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--irca-blue-700)", fontWeight: 700, fontSize: 15,
              textDecoration: "none",
            }}
          >
            Conoce al equipo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Right — differentiators */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {differentiators.map(({ icon, label, desc, color }, i) => (
            <div
              key={label}
              style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                padding: "20px 22px",
                background: i === 1 ? "var(--bg-2)" : "#fff",
                borderRadius: i === 0 ? "12px 12px 0 0" : i === differentiators.length - 1 ? "0 0 12px 12px" : 0,
                border: "1px solid var(--border-soft)",
                marginTop: i > 0 ? -1 : 0,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--fg-1)", marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--fg-3)" }}>
                  {desc}
                </div>
              </div>
            </div>
          ))}

          {/* Founded chip */}
          <div style={{
            marginTop: 16, display: "flex", alignItems: "center", gap: 10,
            padding: "10px 16px", borderRadius: 10,
            background: "var(--irca-green-50)", border: "1px solid var(--irca-green-100)",
          }}>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28,
              letterSpacing: "-0.04em", color: "var(--irca-green)",
            }}>1999</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--irca-green-700)", lineHeight: 1.2 }}>Año de fundación</div>
              <div style={{ fontSize: 12, color: "var(--irca-green-700)", opacity: 0.75 }}>Monterrey, Nuevo León</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
