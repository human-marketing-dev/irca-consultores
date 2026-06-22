import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Servicios de Consultoría Ambiental — IRCA Consultores",
  description: "Siete áreas de especialidad ambiental: auditoría, estudios de impacto, derecho ambiental, trámites, seguridad ocupacional, ingeniería y capacitación. IRCA Consultores, Monterrey.",
};

/* ── helpers ──────────────────────────────────────────── */

function Eyebrow({ children, color = "var(--irca-green-700)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color }}>
      <span style={{ width: 24, height: 2, background: color, display: "inline-block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

/* ── data ─────────────────────────────────────────────── */

type Service = {
  icon: IconName;
  accent: "green" | "blue";
  number: string;
  title: string;
  desc: string;
  alcance: string[];
  subservicios?: { label: string; href: string }[];
  href: string;
};

const services: Service[] = [
  {
    icon: "shield-check", accent: "green", number: "01",
    title: "Auditoría y diagnóstico ambiental",
    desc: "Identificamos el perfil de cumplimiento de tu instalación ante SEMARNAT, PROFEPA, CONAGUA y STPS antes de que lo haga la autoridad. Punto de partida de cualquier estrategia ambiental seria.",
    alcance: [
      "Matrices de requerimientos legales aplicables",
      "Programas de Gestión Integral (PGI) y RETC",
      "Auditorías bajo norma ISO 19011",
      "Diagnóstico de emisiones no conducidas",
      "Planes de manejo de residuos industriales",
    ],
    href: "/servicios/auditoria-ambiental/",
  },
  {
    icon: "flask", accent: "blue", number: "02",
    title: "Estudios ambientales",
    desc: "Elaboramos los estudios técnicos que las autoridades requieren para autorizar, modificar o regularizar proyectos de inversión. Metodología verificable y expedientes que se resuelven.",
    alcance: [
      "Manifestación de Impacto Ambiental (MIA)",
      "Estudio de Riesgo Ambiental (ERA)",
      "Estudio Técnico Justificativo forestal (ETJ)",
      "Evaluación Ambiental de Sitio Phase I y II (ASTM)",
      "Caracterización y remediación de sitios contaminados",
    ],
    subservicios: [
      { label: "Impacto ambiental (MIA)", href: "/servicios/estudios-ambientales/estudio-de-impacto-ambiental/" },
      { label: "Riesgo ambiental (ERA)", href: "/servicios/estudios-ambientales/estudio-de-riesgo-ambiental/" },
      { label: "Forestal (ETJ)", href: "/servicios/estudios-ambientales/estudio-tecnico-justificativo/" },
      { label: "Phase I y II", href: "/servicios/estudios-ambientales/evaluacion-ambiental-fase-1-y-2/" },
    ],
    href: "/servicios/estudios-ambientales/",
  },
  {
    icon: "scale", accent: "green", number: "03",
    title: "Derecho ambiental y defensa jurídica",
    desc: "Defensa ante visitas de inspección, emplazamientos y sanciones de PROFEPA, SEMARNAT y CONAGUA. Litigio ambiental especializado con resultados comprobados.",
    alcance: [
      "Atención a visitas de inspección y actas circunstanciadas",
      "Recursos de revisión y juicios de nulidad",
      "Juicio de amparo en materia ambiental",
      "Medidas cautelares y suspensión de clausuras",
      "Defensa contra clausuras y sanciones económicas",
    ],
    href: "/servicios/derecho-ambiental/",
  },
  {
    icon: "file-text", accent: "blue", number: "04",
    title: "Trámites y licencias ambientales",
    desc: "Gestionamos los trámites de autorización ambiental federal y estatal: desde la LAU hasta la certificación Industria Limpia. Seguimiento hasta resolución favorable.",
    alcance: [
      "Licencia Ambiental Única (LAU) y COA",
      "Concesiones y permisos de descarga CONAGUA",
      "Registro federal de emisiones (RETC y LLFF)",
      "Certificación Industria Limpia (PROFEPA)",
      "Sistemas de gestión ISO 14001",
    ],
    subservicios: [
      { label: "Industria Limpia", href: "/servicios/tramites-y-licencias-ambientales/industria-limpia/" },
      { label: "ISO 14001", href: "/servicios/tramites-y-licencias-ambientales/iso-14001/" },
    ],
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    icon: "hardhat", accent: "green", number: "05",
    title: "Seguridad y salud ocupacional (SHE)",
    desc: "Auditorías de seguridad laboral, cumplimiento NOM-STPS e implementación de sistemas ISO 45001. Gestión integral del riesgo laboral para operaciones industriales.",
    alcance: [
      "Implementación y auditoría ISO 45001",
      "Matrices de requerimientos legales NOM-STPS",
      "Análisis de riesgos (AMEF) y NOM específicas",
      "Programa de Prevención de Accidentes (PPA)",
      "Comisiones Mixtas de Seguridad e Higiene",
      "Auditorías SHE y planes de Protección Civil",
    ],
    href: "/servicios/seguridad-y-salud-ocupacional/",
  },
  {
    icon: "droplet", accent: "blue", number: "06",
    title: "Ingeniería ambiental",
    desc: "Diseño, construcción y operación de sistemas de tratamiento de agua residual, remediación de suelos contaminados, control acústico y levantamientos geoespaciales con drones.",
    alcance: [
      "Diseño y operación de PTAR industriales",
      "Remediación de suelos y aguas subterráneas",
      "Control de ruido perimetral (NOM-081-SEMARNAT)",
      "Levantamientos fotogramétricos con drones UAV",
      "Modelos digitales de elevación (DEM) y SIG",
    ],
    subservicios: [
      { label: "Remediación de suelos", href: "/servicios/ingenieria-ambiental/remediacion-de-suelos-contaminados/" },
      { label: "Ruido NOM-081", href: "/servicios/ingenieria-ambiental/control-de-ruido-perimetral/" },
      { label: "Geoespaciales y UAV", href: "/servicios/ingenieria-ambiental/servicios-geoespaciales/" },
    ],
    href: "/servicios/ingenieria-ambiental/",
  },
  {
    icon: "building", accent: "green", number: "07",
    title: "Capacitación ambiental",
    desc: "Programas de capacitación impartidos por los mismos especialistas que ejecutan los proyectos. No solo teoría: instructores que conocen la realidad de la industria mexicana.",
    alcance: [
      "Manejo de residuos peligrosos e industriales",
      "ISO 14001 e ISO 45001 para equipos internos",
      "Atención a inspecciones ambientales y STPS",
      "Respuesta a contingencias y emergencias",
      "RETC, COA y legislación ambiental aplicada",
    ],
    href: "/servicios/capacitacion-ambiental/",
  },
];

const steps = [
  {
    n: "1",
    title: "Diagnóstico inicial",
    desc: "Revisión de permisos, licencias y obligaciones vigentes. Identificamos brechas de cumplimiento y riesgos prioritarios.",
    color: "green",
  },
  {
    n: "2",
    title: "Estudio técnico o tramitación",
    desc: "Elaboramos el estudio o gestionamos el trámite correspondiente, con seguimiento directo ante la autoridad.",
    color: "blue",
  },
  {
    n: "3",
    title: "Seguimiento y cumplimiento",
    desc: "Acompañamiento continuo: condicionantes, plazos de reporte, visitas de verificación y actualización de obligaciones.",
    color: "green",
  },
  {
    n: "4",
    title: "Defensa jurídica si se requiere",
    desc: "Cuando la autoridad actúa, el mismo equipo técnico respalda la defensa legal. Sin puentes ni intermediarios.",
    color: "blue",
  },
];

/* ── page ─────────────────────────────────────────────── */

export default function Servicios() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-20" style={{ background: "linear-gradient(180deg,#fff 0%,var(--bg-2) 100%)", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2, pointerEvents: "none" }} aria-hidden="true">
          <defs>
            <pattern id="topo-srv" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 12 20 20 T40 20" stroke="#C7E2F0" strokeWidth="1" fill="none"/>
              <path d="M0 30 Q10 22 20 30 T40 30" stroke="#DCEFCB" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-srv)"/>
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Catálogo de servicios</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-4">
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)",
              letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: 0, color: "var(--fg-1)",
            }}>
              Siete áreas de especialidad.{" "}
              <span style={{ color: "var(--irca-green)" }}>Un solo equipo.</span>
            </h1>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 24px" }}>
                IRCA Consultores cubre el ciclo ambiental completo: del diagnóstico inicial y los estudios
                técnicos hasta los trámites de licenciamiento, la capacitación interna y, cuando es necesario,
                la defensa jurídica ante autoridades federales.
              </p>
              <Link
                href="/contacto/"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--irca-green)", color: "#fff",
                  padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                  borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
                }}
              >
                Solicitar información
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LISTADO DE SERVICIOS ───────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 6 }}>
          {services.map((s, i) => {
            const isGreen = s.accent === "green";
            return (
              <article
                key={s.href}
                style={{
                  background: i % 2 === 0 ? "#fff" : "var(--bg-2)",
                  border: "1px solid var(--border-soft)",
                  borderRadius: 16, padding: "28px 30px",
                  display: "grid",
                }}
                className="grid grid-cols-1 md:[grid-template-columns:300px_1fr_220px] gap-6 md:gap-10 items-start"
              >
                {/* Left — icon + number + title */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: isGreen ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                      color: isGreen ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon name={s.icon} size={22} />
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-4)" }}>{s.number}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "-0.015em", lineHeight: 1.2, margin: 0, color: "var(--fg-1)" }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
                    {s.desc}
                  </p>
                </div>

                {/* Center — alcance */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 12 }}>
                    Incluye
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {s.alcance.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{
                          width: 18, height: 18, borderRadius: 999, flexShrink: 0, marginTop: 1,
                          background: isGreen ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                          color: isGreen ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon name="check" size={10} stroke={2.5} />
                        </span>
                        <span style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — links */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.subservicios && (
                    <>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 2 }}>
                        Especialidades
                      </div>
                      {s.subservicios.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            gap: 8, padding: "10px 14px", borderRadius: 10,
                            background: isGreen ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                            border: `1px solid ${isGreen ? "var(--irca-green-100)" : "var(--irca-blue-100)"}`,
                            color: isGreen ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                            fontSize: 13, fontWeight: 600, textDecoration: "none",
                          }}
                        >
                          {sub.label}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </Link>
                      ))}
                      <div style={{ height: 1, background: "var(--border-soft)", margin: "4px 0" }} />
                    </>
                  )}
                  <Link
                    href={s.href}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "11px 16px", borderRadius: 10,
                      background: isGreen ? "var(--irca-green)" : "var(--irca-blue)",
                      color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none",
                    }}
                  >
                    Ver servicio completo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ───────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-deep)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", right: -100, top: -100, opacity: 0.08, pointerEvents: "none" }} width="500" height="500" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {[5,10,15,20,25,30,35,40].map(r => <circle key={r} cx="50" cy="50" r={r} stroke="#fff" strokeWidth="0.5" />)}
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="rgba(255,255,255,0.6)">Metodología</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mt-4 mb-12">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,44px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0, color: "#fff" }}>
              Cómo acompañamos a un cliente de principio a fin
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: 0 }}>
              El modelo integrado de IRCA significa que el mismo equipo que hace el diagnóstico lleva el trámite
              y, si la autoridad actúa, se mantiene en la defensa jurídica. Sin transferencias ni pérdida de contexto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map(({ n, title, desc, color }) => (
              <div
                key={n}
                style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 14, padding: "22px 20px",
                  borderTop: `3px solid ${color === "green" ? "var(--irca-green)" : "var(--irca-blue)"}`,
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 36,
                  letterSpacing: "-0.04em", lineHeight: 1,
                  color: color === "green" ? "var(--irca-green)" : "var(--irca-blue)",
                  marginBottom: 16,
                }}>{n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>{title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>¿Por dónde empezamos?</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,3.5vw,44px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 16px", color: "var(--fg-1)" }}>
                Cuéntanos sobre tu operación y te decimos qué necesitas.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 28px", maxWidth: "50ch" }}>
                Sin compromiso. Revisamos tu situación actual, identificamos obligaciones pendientes
                y te presentamos un plan claro en 24 horas hábiles.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Link
                  href="/contacto/"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "var(--irca-green)", color: "#fff",
                    padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                    borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
                  }}
                >
                  Solicitar información
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link
                  href="/experiencia/"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
                    padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                    borderRadius: 10, textDecoration: "none",
                  }}
                >
                  Ver nuestra experiencia
                </Link>
              </div>
            </div>

            {/* Trust signals */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { n: "+25", label: "Años de trayectoria", color: "green" },
                { n: "+500", label: "Proyectos ejecutados", color: "blue" },
                { n: "+50", label: "Clientes activos", color: "green" },
                { n: "7", label: "Áreas de especialidad", color: "blue" },
              ].map(({ n, label, color }) => (
                <div key={label} style={{
                  background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                  border: `1px solid ${color === "green" ? "var(--irca-green-100)" : "var(--irca-blue-100)"}`,
                  borderRadius: 14, padding: "22px 20px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 900,
                    fontSize: "clamp(32px,3vw,44px)", letterSpacing: "-0.04em", lineHeight: 1,
                    color: color === "green" ? "var(--irca-green)" : "var(--irca-blue)",
                  }}>{n}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-2)", marginTop: 8, lineHeight: 1.3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
