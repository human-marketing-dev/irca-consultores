import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Servicios de Consultoría Ambiental — IRCA Consultores",
  description: "Nueve áreas de especialidad ambiental y de seguridad y salud: auditoría, estudios ambientales, trámites y autorizaciones, servicios legales, supervisión, estudios de ingeniería y capacitación. IRCA Consultores, Monterrey.",
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
    desc: "Identificamos el perfil de cumplimiento de tu instalación ante SEMARNAT, PROFEPA y CONAGUA antes de que lo haga la autoridad. Punto de partida de cualquier estrategia ambiental seria.",
    alcance: [
      "Auditorías de diagnóstico y de cumplimiento",
      "Auditoría voluntaria de Industria Limpia (PROFEPA)",
      "Inventarios de emisiones y corrientes de residuos",
      "Auditorías de cliente y de producto",
      "Estándares internacionales de autogestión (ISO 14001)",
    ],
    subservicios: [
      { label: "Industria Limpia", href: "/servicios/auditoria-ambiental/industria-limpia/" },
      { label: "ISO 14001", href: "/servicios/auditoria-ambiental/iso-14001/" },
    ],
    href: "/servicios/auditoria-ambiental/",
  },
  {
    icon: "flask", accent: "blue", number: "02",
    title: "Estudios ambientales",
    desc: "Caracterizamos y evaluamos sitios e instalaciones bajo normativa mexicana y metodología ASTM, y diseñamos la solución técnica que sigue. Estudios que sostienen decisiones de inversión y de remediación.",
    alcance: [
      "Evaluación de sitios contaminados Phase I y II (ASTM)",
      "Caracterización de sitios contaminados (normativa mexicana)",
      "Balance hídrico, huella de carbono y análisis de ciclo de vida",
      "Diseño ambiental: rellenos sanitarios, plantas de tratamiento y descontaminación",
      "Monitoreo de emisiones",
    ],
    subservicios: [
      { label: "Phase I y II", href: "/servicios/estudios-ambientales/evaluacion-ambiental-fase-1-y-2/" },
      { label: "Remediación de suelos", href: "/servicios/estudios-ambientales/remediacion-de-suelos-contaminados/" },
      { label: "Ruido NOM-081", href: "/servicios/estudios-ambientales/control-de-ruido-perimetral/" },
    ],
    href: "/servicios/estudios-ambientales/",
  },
  {
    icon: "file-text", accent: "green", number: "03",
    title: "Estudios, trámites y administración de autorizaciones",
    desc: "Elaboramos los estudios y gestionamos las autorizaciones federales y estatales que tu proyecto necesita para operar. Seguimiento hasta resolución favorable y administración del expediente en el tiempo.",
    alcance: [
      "Impacto Ambiental (MIA) y Riesgo Ambiental (ERA)",
      "Programa de Prevención de Accidentes (PPA)",
      "Licencia Ambiental Única (LAU) y Licencia de Fuentes Fijas (LFF)",
      "Cambio de Uso de Suelo Forestal (CUSTF)",
      "Planes de Manejo de Residuos (PMR) y Cédulas de Operación Anual (COA)",
      "Trámites ante SEMARNAT, STPS, COFEPRIS, CONAGUA y gobiernos estatales",
    ],
    subservicios: [
      { label: "Impacto ambiental (MIA)", href: "/servicios/tramites-y-autorizaciones-ambientales/estudio-de-impacto-ambiental/" },
      { label: "Riesgo ambiental (ERA)", href: "/servicios/tramites-y-autorizaciones-ambientales/estudio-de-riesgo-ambiental/" },
      { label: "Forestal (ETJ / CUSTF)", href: "/servicios/tramites-y-autorizaciones-ambientales/estudio-tecnico-justificativo/" },
    ],
    href: "/servicios/tramites-y-autorizaciones-ambientales/",
  },
  {
    icon: "scale", accent: "blue", number: "04",
    title: "Servicios legales y atención de autoridades",
    desc: "Atendemos inspecciones, procedimientos sancionadores y litigio ante PROFEPA, SEMARNAT, CONAGUA y STPS. Defensa técnica y jurídica desde el acta circunstanciada hasta el amparo.",
    alcance: [
      "Atención de visitas de inspección y procedimiento administrativo sancionador",
      "Planes estratégicos de cumplimiento, intermediación y representación",
      "Defensa de estudios, trámites, multas y sanciones",
      "Recursos de revisión y juicios de nulidad",
      "Juicio de amparo en materia ambiental",
    ],
    href: "/servicios/servicios-legales-y-atencion-de-autoridades/",
  },
  {
    icon: "eye", accent: "green", number: "05",
    title: "Consultoría, administración y supervisión ambiental",
    desc: "Operamos como tu área ambiental externa: acompañamiento continuo, supervisión en campo y control de los compromisos adquiridos ante la autoridad. Cumplimiento sostenido, no solo el trámite resuelto.",
    alcance: [
      "Consultoría y staff externo con acompañamiento permanente",
      "Supervisión y vigilancia ambiental",
      "Seguimiento de términos y condicionantes de autorizaciones",
      "Control documental y calendario de obligaciones",
    ],
    href: "/servicios/consultoria-y-supervision-ambiental/",
  },
  {
    icon: "hardhat", accent: "blue", number: "06",
    title: "Auditoría y diagnóstico Seguridad y Salud",
    desc: "Evaluamos el cumplimiento de tu operación frente a las NOM-STPS y a los estándares internacionales de gestión. Diagnóstico previo a cualquier inspección o proceso de certificación.",
    alcance: [
      "Auditorías de diagnóstico y de cumplimiento",
      "Auditoría de autogestión (STPS)",
      "Auditoría de manejo de sustancias",
      "Estándares internacionales de autogestión (ISO 45001)",
    ],
    href: "/servicios/auditoria-seguridad-y-salud/",
  },
  {
    icon: "alert-triangle", accent: "green", number: "07",
    title: "Estudio de seguridad y salud",
    desc: "Analizamos riesgos laborales, equipos y manejo de sustancias con metodologías reconocidas internacionalmente. Gestión integral del riesgo para operaciones industriales.",
    alcance: [
      "Auditorías de riesgos laborales y de equipos",
      "Manejo de sustancias peligrosas",
      "Metodologías de cumplimiento (SMART, DuPont, entre otras)",
      "Estándares internacionales de gestión de seguridad y salud (ISO 45001)",
    ],
    href: "/servicios/estudios-de-seguridad-y-salud/",
  },
  {
    icon: "compass", accent: "blue", number: "08",
    title: "Estudios de ingeniería",
    desc: "Resolvemos la ingeniería de soporte que los proyectos ambientales y de infraestructura requieren, del subsuelo a la red hidráulica. Estudios ejecutables, no solo entregables.",
    alcance: [
      "Geología, geofísica y estabilidad de taludes",
      "Estudios hidrológicos y geohidrológicos",
      "Tránsito y vialidad",
      "Topografía",
      "Ingeniería de agua potable y alcantarillado sanitario",
      "Soluciones pluviales e hidráulicas",
    ],
    subservicios: [
      { label: "Geoespaciales y UAV", href: "/servicios/estudios-de-ingenieria/servicios-geoespaciales/" },
    ],
    href: "/servicios/estudios-de-ingenieria/",
  },
  {
    icon: "graduation-cap", accent: "green", number: "09",
    title: "Capacitación técnica especializada",
    desc: "Programas impartidos por los mismos especialistas que ejecutan los proyectos. No solo teoría: instructores que conocen la realidad de la industria mexicana.",
    alcance: [
      "Sistemas de gestión (ISO)",
      "Atención de visitas de inspección",
      "Manejo de residuos y respuesta a emergencias",
      "Auditorías de cliente y de servicios",
      "Legislación aplicable en materia de SHE",
      "Cursos para cumplimiento de normas STPS y Protección Civil",
    ],
    href: "/servicios/capacitacion-tecnica-especializada/",
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
              Nueve áreas de especialidad.{" "}
              <span style={{ color: "var(--irca-green)" }}>Un solo equipo.</span>
            </h1>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 24px" }}>
                IRCA Consultores cubre el ciclo ambiental completo: el diagnóstico inicial, la estrategia
                de cumplimiento, los estudios técnicos, los trámites de licenciamiento, la capacitación
                interna especializada y, cuando es necesario, la defensa jurídica y la intermediación
                ante autoridades de los tres niveles de gobierno.
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
                key={s.number}
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
