import Icon, { type IconName } from "@/components/ui/Icon";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
      <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
      {children}
    </div>
  );
}

const services: { icon: IconName; accent: "green" | "blue"; title: string; desc: string }[] = [
  { icon: "shield-check", accent: "green", title: "Consultoría y diagnóstico",    desc: "Auditorías ISO 19011 y NMX-AA-162, matrices legales, PGI, RETC, emisiones." },
  { icon: "flask",        accent: "blue",  title: "Impacto, riesgo y especiales", desc: "MIA, ERA, ETJ, Phase I y II (ASTM E1527), caracterización de sitios." },
  { icon: "scale",        accent: "green", title: "Atención legal",               desc: "Litigio ambiental, amparo, defensa ante PROFEPA, SEMARNAT y CONAGUA." },
  { icon: "file-text",    accent: "blue",  title: "Trámites gubernamentales",     desc: "LAU, COA, concesiones CONAGUA, RETC, LLFF, PRCA, PMRP-RME." },
  { icon: "hardhat",      accent: "green", title: "Seguridad SHE / EHS",          desc: "ISO 14001, ISO 45001, Industria Limpia, PPA, Protección Civil (PIPC, PGC)." },
  { icon: "droplet",      accent: "blue",  title: "Ingeniería ambiental",         desc: "PTAR, remediación, control de ruido NOM-081, forestación, monitoreo." },
  { icon: "building",     accent: "green", title: "Capacitación",                 desc: "Residuos, ISO, legislación, inspecciones, seguimiento en obra (NAE-002/008/009)." },
  { icon: "satellite",    accent: "blue",  title: "Servicios geoespaciales",      desc: "DEM, ortofotomosaico, drones UAV, SIG, cartografía temática." },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--bg-2)", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Plataforma integral</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end", marginTop: 16, marginBottom: 44 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
            Cobertura completa del ciclo ambiental — del diagnóstico inicial a la resolución legal.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>
            Ocho áreas de especialidad ejecutadas por un equipo multidisciplinario de ingenieros, biólogos, geocientíficos y abogados ambientales certificados.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {services.map((s) => {
            const isGreen = s.accent === "green";
            return (
              <article
                key={s.title}
                style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 22, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: isGreen ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                  color: isGreen ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={s.icon} size={22} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.2 }}>{s.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-3)", flex: 1 }}>{s.desc}</div>
                <a
                  href="#contact"
                  style={{ color: "var(--irca-blue-700)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}
                >
                  Detalle <Icon name="arrow-right" size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
