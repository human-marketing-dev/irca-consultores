import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
      <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
      {children}
    </div>
  );
}

const services: { icon: IconName; accent: "green" | "blue"; title: string; desc: string; href: string }[] = [
  {
    icon: "shield-check", accent: "green",
    title: "Auditoría y diagnóstico ambiental",
    desc: "Auditorías ISO 19011, matrices de requerimientos legales, PGI, RETC, emisiones no conducidas y planes de manejo.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    icon: "flask", accent: "blue",
    title: "Estudios ambientales",
    desc: "MIA, ERA, ETJ forestales, Phase I y II (ASTM E1527-21), caracterización de sitios, estudios de daño ambiental.",
    href: "/servicios/estudios-ambientales/",
  },
  {
    icon: "scale", accent: "green",
    title: "Derecho ambiental y defensa jurídica",
    desc: "Litigio ambiental, amparo, defensa ante PROFEPA, SEMARNAT y CONAGUA, recursos de revisión y juicios de nulidad.",
    href: "/servicios/derecho-ambiental/",
  },
  {
    icon: "file-text", accent: "blue",
    title: "Trámites y licencias ambientales",
    desc: "LAU, COA, concesiones CONAGUA, RETC, LLFF, Industria Limpia (PROFEPA), ISO 14001 y sistemas de gestión.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    icon: "hardhat", accent: "green",
    title: "Seguridad y salud ocupacional",
    desc: "ISO 45001, matrices legales SST, análisis de riesgos, PPA, Comisiones Mixtas STPS, Protección Civil.",
    href: "/servicios/seguridad-y-salud-ocupacional/",
  },
  {
    icon: "droplet", accent: "blue",
    title: "Ingeniería ambiental",
    desc: "PTAR, remediación de suelos, control de ruido NOM-081, monitoreo, forestación y servicios geoespaciales UAV.",
    href: "/servicios/ingenieria-ambiental/",
  },
  {
    icon: "building", accent: "green",
    title: "Capacitación ambiental",
    desc: "Cursos ISO 14001 / ISO 45001, RETC, atención a inspecciones, manejo de residuos y respuesta a emergencias.",
    href: "/servicios/capacitacion-ambiental/",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Plataforma integral</Eyebrow>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end mt-4 mb-10">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0, color: "var(--ink-1000)" }}>
            Cobertura completa del ciclo ambiental — del diagnóstico inicial a la resolución legal.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>
            Siete áreas de especialidad ejecutadas por un equipo multidisciplinario de ingenieros, biólogos, geocientíficos y abogados ambientales certificados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {services.map((s) => {
            const isGreen = s.accent === "green";
            return (
              <article
                key={s.title}
                style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 22, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: isGreen ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                  color: isGreen ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={s.icon} size={22} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.2 }}>{s.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-3)", flex: 1 }}>{s.desc}</div>
                <Link
                  href={s.href}
                  style={{ color: "var(--irca-blue-700)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}
                >
                  Ver servicio <Icon name="arrow-right" size={14} />
                </Link>
              </article>
            );
          })}

          {/* CTA tile */}
          <Link
            href="/servicios/"
            className="flex flex-col justify-between"
            style={{
              background: "var(--irca-green)", borderRadius: 14, padding: 22,
              textDecoration: "none", color: "#fff", minHeight: 160,
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
              Ver todos los servicios
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, fontWeight: 600, fontSize: 14 }}>
              Catálogo completo <Icon name="arrow-up-right" size={18} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
