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
        className="relative grid grid-cols-1 md:[grid-template-columns:1.1fr_0.9fr] gap-12 md:gap-16 items-center py-16 md:py-24"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* Copy */}
        <div>
          <Eyebrow color="var(--irca-blue-700)">Consultoría Ambiental · Monterrey · desde 1999</Eyebrow>
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
              Hablar con un especialista <Icon name="arrow-right" size={17} />
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

        {/* Photo — hidden on mobile */}
        <div className="relative hidden md:flex flex-col gap-3">
          <div style={{
            aspectRatio: "4/3", border: "1.5px dashed var(--border-strong)",
            borderRadius: 20, background: "var(--bg-2)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 12, color: "var(--fg-4)", textAlign: "center", padding: 32,
            boxShadow: "var(--shadow-2)",
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-3)", lineHeight: 1.4 }}>
              Foto del equipo o instalaciones
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.5, maxWidth: "28ch", color: "var(--fg-4)" }}>
              Reemplazar con fotografía corporativa del equipo IRCA o trabajo de campo
            </div>
          </div>
          <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
            Placeholder · pendiente material fotográfico del cliente
          </p>
        </div>
      </div>
    </section>
  );
}
