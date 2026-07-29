import CoverageMap from "@/components/sections/CoverageMap";

type Differentiator = {
  icon: React.ReactNode;
  label: string;
  desc: string;
  color: "green" | "blue";
  extra?: React.ReactNode;
};

const differentiators: Differentiator[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Estrategia técnico-jurídica",
    desc: "Un despacho técnico entrega estudios y mediciones. Nosotros diseñamos la estrategia de cumplimiento: qué exige la norma, qué demuestra la evidencia técnica y cómo se sostiene ante la autoridad.",
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
    desc: "Uso de tecnología, desarrollos propios y equipos para evaluación de la contaminación en aire, agua, suelo y ruido.",
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
    desc: "Sede operativa en Monterrey y operación recurrente en los principales polos industriales del país.",
    color: "green",
    extra: <CoverageMap />,
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
            Desde 1999 acompañamos a la industria mexicana en los momentos en que lo ambiental deja
            de ser un trámite: una clausura, una auditoría, un requerimiento de PROFEPA, un proyecto
            que no puede detenerse. En ese recorrido hemos resuelto manifestaciones de impacto
            ambiental, estudios de riesgo, licencias y programas de cumplimiento para acerías,
            fundiciones, plantas de generación, desarrollos inmobiliarios y obra pública.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", marginBottom: 16, maxWidth: "58ch" }}>
            Ese trabajo nos obligó a construir herramientas propias:{" "}
            <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>metodologías internas</strong>{" "}
            de diagnóstico y evidencia, equipamiento de campo para aire, agua, suelo y ruido,{" "}
            <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>inteligencia artificial</strong>{" "}
            aplicada al análisis normativo y{" "}
            <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>Milieus Pro</strong>, nuestra
            plataforma para administrar el expediente ambiental y los vencimientos de cada instalación.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", marginBottom: 32, maxWidth: "58ch" }}>
            Y nos llevó a un modelo poco común en México: un despacho{" "}
            <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>50/50</strong>, con la misma
            profundidad en la ingeniería que en el derecho. Ingenieros y abogados trabajan sobre el
            mismo expediente, de modo que la medición sostiene el argumento jurídico y el argumento
            jurídico se construye sobre datos defendibles.
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
          {differentiators.map(({ icon, label, desc, color, extra }, i) => (
            <div
              key={label}
              style={{
                padding: "20px 22px",
                background: i === 1 ? "var(--bg-2)" : "#fff",
                borderRadius: i === 0 ? "12px 12px 0 0" : i === differentiators.length - 1 ? "0 0 12px 12px" : 0,
                border: "1px solid var(--border-soft)",
                marginTop: i > 0 ? -1 : 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
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
              {extra && <div style={{ marginTop: 16 }}>{extra}</div>}
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
