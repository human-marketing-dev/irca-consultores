import Image from "next/image";
import Icon from "@/components/ui/Icon";

const authorities = [
  { name: "SEMARNAT", logo: "/semarnat-logo.webp" },
  { name: "PROFEPA",  logo: "/profepa-logo.webp" },
  { name: "CONAGUA",  logo: "/conagua-logo.webp" },
  { name: "STPS",     logo: "/stps-logo.webp" },
  { name: "COFEPRIS", logo: "/cofepris-logo.webp" },
];

function Eyebrow({ children, color = "var(--irca-green-700)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color }}>
      <span style={{ width: 24, height: 2, background: color, display: "inline-block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

const statuses: Array<[string, "success" | "info" | "warning", string]> = [
  ["MIA Federal", "success", "Vigente"],
  ["ERA Estatal",  "info",    "En revisión"],
  ["COA Anual",   "warning", "Por vencer · 49 d"],
  ["LAU Edomex",  "success", "Vigente"],
];

const palette = {
  success: { bg: "var(--success-bg)", fg: "var(--success)" },
  info:    { bg: "var(--info-bg)",    fg: "var(--info)" },
  warning: { bg: "var(--warning-bg)", fg: "var(--warning)" },
};

const chartBars = [78, 92, 64, 88, 73, 95];

export default function Hero() {
  return (
    <section id="home" className="px-4 sm:px-6" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FFFFFF 0%, var(--bg-2) 100%)" }}>
      {/* Topographic wave pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} aria-hidden="true">
        <defs>
          <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q10 12 20 20 T40 20" stroke="#C7E2F0" strokeWidth="1" fill="none"/>
            <path d="M0 30 Q10 22 20 30 T40 30" stroke="#DCEFCB" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)"/>
      </svg>

      <div
        className="relative grid grid-cols-1 md:[grid-template-columns:1.2fr_1fr] gap-12 md:gap-16 items-center py-16 md:py-24"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* Copy */}
        <div>
          <Eyebrow color="var(--irca-blue-700)">Consultoría Ambiental en Monterrey · desde 1999</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(36px, 5vw + 8px, 84px)",
            letterSpacing: "-0.03em", lineHeight: 1.02,
            margin: "20px 0 22px", color: "var(--fg-1)",
          }}>
            Tu tranquilidad ambiental,{" "}
            <span style={{ color: "var(--irca-green)" }}>nuestra especialidad.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-3)", maxWidth: "52ch", margin: "0 0 32px" }}>
            Soluciones integrales en cumplimiento normativo ambiental.
            Rigor técnico, solidez jurídica y acompañamiento estratégico
            para la sostenibilidad operativa y reputacional de tu operación.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contacto/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--irca-green)", color: "#fff",
                padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
                borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
              }}
            >
              Solicitar diagnóstico <Icon name="arrow-right" size={17} />
            </a>
            <a
              href="/servicios/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
                padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
                borderRadius: 10, textDecoration: "none",
              }}
            >
              Ver servicios
            </a>
          </div>
          <div className="hidden sm:flex flex-wrap items-center gap-5 mt-9">
            {authorities.map(({ name, logo }) => (
              <Image
                key={name}
                src={logo}
                alt={name}
                width={80}
                height={32}
                className="grayscale opacity-50"
                style={{ objectFit: "contain", height: 96, width: "auto" }}
              />
            ))}
          </div>
        </div>

        {/* Card stack — hidden on mobile */}
        <div className="relative hidden md:block" style={{ height: 460 }}>
          {/* Compliance tracker card */}
          <div style={{
            position: "absolute", top: 0, right: 0, width: 360,
            background: "#fff", border: "1px solid var(--border-soft)",
            borderRadius: 16, padding: 22, boxShadow: "var(--shadow-3)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-green)", boxShadow: "0 0 0 4px var(--irca-green-50)" }} />
              Cumplimiento normativo
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
              Planta Saltillo
            </div>
            <div style={{ fontSize: 13, color: "var(--fg-3)", marginTop: 4 }}>Vitromex · seguimiento 2012 – Vigente</div>
            <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
            {statuses.map(([label, type, status]) => {
              const c = palette[type];
              return (
                <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-2)" }}>{label}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 9px", borderRadius: 999, background: c.bg, color: c.fg, fontSize: 11, fontWeight: 600 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: c.fg }} /> {status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Milieus Pro mini chart card */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, width: 320,
            background: "var(--bg-deep)", borderRadius: 16, padding: 22,
            color: "#fff", boxShadow: "var(--shadow-3)",
          }}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
              Milieus Pro · piloto
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, marginTop: 12, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Tu archivo ambiental,<br />en tiempo real.
            </div>
            <div className="flex items-end gap-2 mt-4">
              {chartBars.map((h, i) => (
                <div key={i} style={{ width: 14, height: h * 0.7, background: i % 2 === 0 ? "var(--irca-green)" : "var(--irca-blue)", borderRadius: 3 }} />
              ))}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>
              Cumplimiento por instalación · últimos 6 meses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
