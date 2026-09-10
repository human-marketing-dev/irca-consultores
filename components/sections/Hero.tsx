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
    <section id="home" className="px-4 sm:px-6" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%)" }}>
      {/* Topographic wave pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} aria-hidden="true">
        <defs>
          <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q10 12 20 20 T40 20" style={{ stroke: "var(--irca-blue-100)" }} strokeWidth="1" fill="none"/>
            <path d="M0 30 Q10 22 20 30 T40 30" style={{ stroke: "var(--irca-green-100)" }} strokeWidth="1" fill="none"/>
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
                background: "var(--bg-1)", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
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
                className="logo-mono"
                style={{ objectFit: "contain", height: 96, width: "auto" }}
              />
            ))}
          </div>
        </div>

        {/* Photo — hidden on mobile */}
        <div className="relative hidden md:block">
          <div
            style={{
              position: "relative", aspectRatio: "4/3",
              borderRadius: 20, overflow: "hidden",
              background: "var(--bg-2)", border: "1px solid var(--border-soft)",
              boxShadow: "var(--shadow-2)",
            }}
          >
            <Image
              src="/images/home/home-hero-equipo-irca.webp"
              alt="Equipo de IRCA Consultores en trabajo de campo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
