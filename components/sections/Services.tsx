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
    desc: "Auditorías de diagnóstico y cumplimiento, Industria Limpia, inventarios de emisiones, corrientes de residuos, auditorías de cliente e ISO 14001.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    icon: "flask", accent: "blue",
    title: "Estudios ambientales",
    desc: "Evaluación de sitios contaminados (ASTM Phase I y II), balance hídrico, huella de carbono, ciclo de vida y diseño ambiental.",
    href: "/servicios/estudios-ambientales/",
  },
  {
    icon: "scale", accent: "green",
    title: "Servicios legales y atención de autoridades",
    desc: "Atención de inspecciones, procedimientos sancionadores, planes de cumplimiento, representación, litigio, recursos de revisión, juicios de nulidad y amparo.",
    href: "/servicios/derecho-ambiental/",
  },
  {
    icon: "file-text", accent: "blue",
    title: "Estudios, trámites y administración de autorizaciones",
    desc: "MIA, ERA, PPA, LAU, LFFF, CUSTF, planes de manejo y COAs ante SEMARNAT, STPS, COFEPRIS y CONAGUA.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    icon: "hardhat", accent: "green",
    title: "Auditoría y diagnóstico Seguridad y Salud",
    desc: "Auditorías de diagnóstico y cumplimiento, autogestión STPS, manejo de sustancias y estándares internacionales de autogestión ISO 45001.",
    href: "/servicios/seguridad-y-salud-ocupacional/",
  },
  {
    icon: "eye", accent: "blue",
    title: "Consultoría, administración y supervisión ambiental",
    desc: "Staff externo y acompañamiento, supervisión y vigilancia ambiental, seguimiento de términos y condicionantes de autorizaciones.",
    href: "/servicios/",
  },
  {
    icon: "alert-triangle", accent: "green",
    title: "Estudio de seguridad y salud",
    desc: "Auditorías de riesgos laborales y equipos, manejo de sustancias, metodologías de cumplimiento (SMART, DuPont) y estándares ISO 45001.",
    href: "/servicios/seguridad-y-salud-ocupacional/",
  },
  {
    icon: "graduation-cap", accent: "blue",
    title: "Capacitación técnica especializada",
    desc: "Sistemas de gestión ISO, atención a inspecciones, manejo de residuos, respuesta a emergencias y normas STPS y Protección Civil.",
    href: "/servicios/capacitacion-ambiental/",
  },
  {
    icon: "compass", accent: "green",
    title: "Estudios de ingeniería",
    desc: "Geología, geofísica, estabilidad de taludes, hidrología, geohidrología, tránsito y vialidad, topografía, agua potable y soluciones pluviales.",
    href: "/servicios/ingenieria-ambiental/",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Plataforma integral</Eyebrow>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end mt-4 mb-10">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.1, margin: 0, color: "var(--ink-1000)" }}>
            Cobertura completa del ciclo de cumplimiento normativo ambiental, de Seguridad y salud — Del diagnóstico inicial a la resolución legal.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>
            Nueve áreas de especialidad ejecutadas por un equipo multidisciplinario de ingenieros, biólogos, geocientíficos y abogados ambientales certificados.
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

          {/* CTA tile — ocupa el resto de la última fila (9 tarjetas + CTA = 3 filas exactas) */}
          <Link
            href="/servicios/"
            className="flex flex-col justify-between lg:col-span-3 lg:flex-row lg:items-center"
            style={{
              background: "var(--irca-green)", borderRadius: 14, padding: 22,
              textDecoration: "none", color: "#fff", minHeight: 160,
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
              Ver todos los servicios
            </div>
            <div className="mt-6 lg:mt-0" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 14 }}>
              Catálogo completo <Icon name="arrow-up-right" size={18} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
