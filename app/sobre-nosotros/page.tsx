import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import CoverageMap from "@/components/sections/CoverageMap";
import Clients from "@/components/sections/Clients";
import GoogleReviews from "@/components/sections/GoogleReviews";

export const metadata: Metadata = {
  title: "Sobre Nosotros — IRCA Consultores",
  description: "25 años de ingeniería ambiental y cumplimiento normativo en México. Conoce al equipo, la experiencia y los proyectos de largo plazo de IRCA Consultores.",
};

/* ── helpers ────────────────────────────────────────── */

function Eyebrow({ children, color = "var(--irca-green-700)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color }}>
      <span style={{ width: 24, height: 2, background: color, display: "inline-block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

/* ── data ───────────────────────────────────────────── */

const stats = [
  { n: "+25",    label: "Años de trayectoria", sub: "Desde 1999" },
  { n: "+500",   label: "Proyectos ejecutados", sub: "Estudios, trámites y litigios" },
  { n: "+50",    label: "Clientes activos", sub: "Nacionales e internacionales" },
  { n: "+12",    label: "Profesionales certificados", sub: "Equipo multidisciplinario" },
];

const values = [
  { icon: "shield-check", label: "Integridad",       desc: "Privilegiar el respeto al medio ambiente, a la seguridad, a la legalidad y a la ética de trabajo." },
  { icon: "building",     label: "Trabajo en equipo", desc: "Promover el compañerismo, el sentido de pertenencia y el respeto al personal, al cliente y a las autoridades con las que interactuamos." },
  { icon: "satellite",    label: "Innovación",       desc: "Desarrollar estrategias, productos y servicios de cumplimiento, así como promover nuevas tecnologías (IA) que aumenten la eficiencia de nuestros servicios." },
  { icon: "check",        label: "Eficiencia",       desc: "Ofrecer SIEMPRE la mejor estrategia de cumplimiento al cliente: “nunca vender lo que no necesite”." },
];

const timeline = [
  { period: "1998 – 1999", title: "Auditoría ambiental" },
  { period: "1999",        title: "Origen en Sonora" },
  { period: "2004",        title: "Marca en Monterrey" },
  { period: "2008 – 2009", title: "Dedicación plena y formalización" },
  { period: "2009 – 2012", title: "Proyecto Islas Marías" },
  { period: "2012 – 2019", title: "Integración jurídica" },
  { period: "2014 – 2018", title: "CONAPESCA y FONDEN" },
  { period: "2020",        title: "Nueva estructura corporativa" },
];

const coverage = ["Nuevo León — sede operativa", "Coahuila · Tamaulipas · Sonora", "Guanajuato · Estado de México · CDMX", "Cobertura nacional e internacional"];

const equipment = [
  { label: "Equipos HACH", desc: "Diagnóstico fisicoquímico instantáneo de agua y suelo en campo" },
  { label: "Análisis HTP",  desc: "Hidrocarburos Totales de Petróleo en agua y suelo" },
  { label: "Detección PCB", desc: "Bifenilos Policlorados en suelo y agua" },
  { label: "Monitoreo de agua", desc: "Parámetros generales de calidad fisicoquímica en campo" },
  { label: "Sonómetros",    desc: "Medición y modelación de refracción acústica (NOM-081)" },
  { label: "Drones UAV",    desc: "Reconocimiento, vigilancia y levantamiento fotogramétrico" },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function SobreNosotros() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="px-4 sm:px-6"
        style={{
          position: "relative", overflow: "hidden",
          background: "linear-gradient(180deg,var(--bg-1) 0%,var(--bg-2) 100%)",
          paddingTop: "clamp(56px,8vw,92px)", paddingBottom: "clamp(48px,7vw,84px)",
        }}
      >
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} aria-hidden="true">
          <defs>
            <pattern id="topoNosotros" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" style={{ stroke: "var(--irca-green-100)" }} strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" style={{ stroke: "var(--irca-blue-100)" }} strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoNosotros)" />
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Quiénes somos</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
            margin: "18px 0 28px", color: "var(--ink-1000)", maxWidth: "22ch",
          }}>
            25 años de rigor técnico y{" "}
            <span style={{ color: "var(--irca-green)" }}>solidez jurídica ambiental</span>.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--fg-3)", maxWidth: "58ch", marginBottom: 48 }}>
            IRCA Consultores es la firma de consultoría ambiental referente en el norte de México. Desde 1999 acompañamos a empresas, gobiernos y organismos en el cumplimiento normativo ambiental —de la auditoría al litigio, del estudio a la obra.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map(({ n, label, sub }) => (
              <div key={label} style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: "20px 24px", boxShadow: "var(--shadow-1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", letterSpacing: "-0.03em", color: "var(--irca-green)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--fg-1)", marginTop: 8, lineHeight: 1.25 }}>{label}</div>
                <div style={{ fontSize: 12, color: "var(--fg-4)", marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Eyebrow>Nuestra historia</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
              Una firma construida sobre expedientes reales
            </h2>
            <Photo
              ratio="16/9"
              src="/images/nosotros/sobre-la-empresa-irca.webp"
              alt="Equipo de IRCA Consultores"
            />
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 20px" }}>
              Fundada en 1999, IRCA Consultores opera bajo dos razones sociales —<strong style={{ color: "var(--fg-1)" }}>IRCA Ingeniería y Servicios, S.C. (IIS)</strong> y <strong style={{ color: "var(--fg-1)" }}>Environmental North de México, S.C. (ENM)</strong>— que en conjunto ofrecen una plataforma integral de servicios técnicos, legales y de gestión ambiental para empresas privadas, paraestatales y entidades de gobierno.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 20px" }}>
              Con más de 25 años de trayectoria ininterrumpida, nos hemos consolidado como el referente técnico-legal ambiental en el norte de México, con proyectos documentados en sectores tan diversos como el industrial, minero, energético, acuícola, inmobiliario, ferroviario y portuario —y con alcance nacional e internacional.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Nuestra propuesta de valor se sustenta en el conocimiento técnico especializado, un equipo multidisciplinario de más de 12 profesionales certificados, innovación tecnológica propia y la capacidad de representar a nuestros clientes de forma efectiva ante autoridades ambientales federales y estatales.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div style={{ padding: "8px 14px", borderRadius: 8, background: "var(--irca-green-50)", color: "var(--irca-green-700)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>IIS · IRCA Ingeniería y Servicios S.C.</div>
              <div style={{ padding: "8px 14px", borderRadius: 8, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>ENM · Environmental North de México S.C.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISIÓN, VISIÓN Y VALORES ──────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Propósito y cultura</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "16px 0 40px", color: "var(--ink-1000)" }}>
            Misión, visión y valores
          </h2>

          {/* Misión + Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 32, boxShadow: "var(--shadow-1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="check" size={18} stroke={2.5} />
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--fg-1)" }}>Misión</span>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
                Ofrecer y proveer conocimientos de cumplimiento normativo y consultoría en ingeniería ambiental, seguridad industrial y control de contaminación a la industria nacional, mediante estrategias técnico-legales que soporten la viabilidad y operabilidad del negocio y disminuyan sus costos.
              </p>
            </div>
            <div style={{ background: "var(--bg-deep)", border: "1px solid transparent", borderRadius: 14, padding: 32, boxShadow: "var(--shadow-1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(111,176,63,0.2)", color: "var(--irca-green)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="arrow-right" size={18} stroke={2.5} />
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#fff" }}>Visión</span>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.78)", margin: 0 }}>
                Ser la empresa líder en consultoría ESG en México, con una estrategia de administración de la calidad y servicio al cliente en nuestros procesos, y con presencia y reconocimiento nacional e internacional a través de nuestros clientes y cámaras industriales.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map(({ icon, label, desc }) => (
              <div key={label} style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={icon as any} size={20} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.25 }}>{label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Lema */}
          <div style={{ marginTop: 32, padding: "28px 32px", borderRadius: 14, background: "var(--irca-green-50)", border: "1px solid var(--irca-green-100)", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.6vw,30px)", letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--ink-1000)", margin: 0 }}>
              No vendemos estudios,{" "}
              <span style={{ color: "var(--irca-green-700)" }}>vendemos tranquilidad y viabilidad</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── EQUIPO DIRECTIVO ──────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Línea del tiempo */}
          <Eyebrow>Nuestra trayectoria</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 36px", color: "var(--ink-1000)" }}>
            Hitos que definieron a IRCA Consultores
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {timeline.map(({ period, title }, i) => (
              <li key={period + title} style={{ position: "relative", borderTop: "2px solid var(--border-soft)", paddingTop: 20 }}>
                <span style={{
                  position: "absolute", top: -7, left: 0, width: 12, height: 12, borderRadius: 999,
                  background: i % 2 === 0 ? "var(--irca-green)" : "var(--irca-blue)",
                  boxShadow: "0 0 0 4px var(--bg-1)",
                }} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, color: i % 2 === 0 ? "var(--irca-green-700)" : "var(--irca-blue-700)", marginBottom: 6 }}>{period}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", lineHeight: 1.25, color: "var(--fg-1)" }}>{title}</div>
              </li>
            ))}
          </ol>

          <div style={{ height: 1, background: "var(--border-soft)", margin: "56px 0 40px" }} />

          <Eyebrow>Semblanza del director</Eyebrow>
          <div className="grid grid-cols-1 md:[grid-template-columns:1fr_0.85fr] gap-10 md:gap-16 items-start mt-4">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "0 0 24px", color: "var(--ink-1000)" }}>
                Juan Carlos Aguilar Ibarra y la formación de IRCA Consultores
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 32px" }}>
                IRCA Consultores nació en 1999 de una convicción formada por Juan Carlos Aguilar Ibarra
                durante sus primeros años como auditor ambiental: identificar incumplimientos no era
                suficiente. La industria necesitaba convertir los hallazgos en soluciones técnicas viables,
                jurídicamente correctas y verificables en la operación.
              </p>

              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(19px,2.4vw,24px)", letterSpacing: "-0.018em", lineHeight: 1.25, margin: "0 0 14px", color: "var(--ink-1000)" }}>
                De la auditoría a la consultoría
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg-3)", margin: "0 0 16px" }}>
                Ingeniero civil y maestro en ciencias con especialidad en Ingeniería Ambiental por el
                Tecnológico de Monterrey, Juan Carlos participó entre 1998 y 1999 como auditor líder y
                responsable del auditor coordinador dentro del Programa Nacional de Auditoría Ambiental.
                Intervino en auditorías de Industria Limpia para Petróleos Mexicanos, la Comisión Federal
                de Electricidad, PYOSA y otras organizaciones, incluyendo las terminales de Topolobampo y
                Rosarito y el poliducto Tuxpan-Cerro Hermoso.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg-3)", margin: 0 }}>
                Esa experiencia le mostró que numerosos estudios terminaban como documentos aislados:
                describían problemas, pero no siempre indicaban cómo resolverlos ni aseguraban un beneficio
                ambiental real. En 1999 inició servicios independientes dentro de Ingeniería y
                Representaciones Comerciales Aguilar, S.A. de C.V.; de ese nombre surgió el acrónimo{" "}
                <strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>IRCA</strong>. Desde su casa y con
                dos colaboradores atendió en Sonora proyectos acuícolas, escolleras, desarrollos
                urbanísticos, procesos industriales y estudios de impacto ambiental.
              </p>
            </div>

            {/* Ficha del director */}
            <div style={{ background: "var(--bg-2)", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 28, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: "var(--irca-green-50)", color: "var(--irca-green-700)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontFamily: "var(--font-display)", fontWeight: 800,
                }}>
                  JC
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.25 }}>
                    M.C. Ing. Juan Carlos Aguilar Ibarra
                  </div>
                  <div style={{ fontSize: 13, color: "var(--irca-green-700)", fontWeight: 600, marginTop: 4 }}>
                    Socio Fundador — Director General
                  </div>
                </div>
              </div>
              <div style={{ height: 1, background: "var(--border-soft)" }} />
              <div style={{ display: "grid", gap: 11 }}>
                {[
                  ["Formación", "Ingeniero Civil · M.C. en Ingeniería Ambiental (ITESM) · Lic. en Derecho"],
                  ["Certificaciones", "Auditor Líder ISO 9001, ISO 14001 e ISO 45001"],
                  ["Trayectoria", "Auditor líder del Programa Nacional de Auditoría Ambiental (1998-1999)"],
                  ["Proyectos", "Complejo Penitenciario Islas Marías (2009-2012) · FONDEN para CONAPESCA (2013-2019)"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 3 }}>{k}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--fg-2)" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["ISO 9001", "ISO 14001", "ISO 45001", "Derecho Ambiental"].map(t => (
                  <span key={t} style={{ padding: "3px 10px", borderRadius: 999, background: "var(--bg-1)", border: "1px solid var(--border-soft)", fontSize: 11, fontWeight: 600, color: "var(--fg-3)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── EQUIPAMIENTO ─────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-deep)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", right: -100, top: -100, opacity: 0.1, pointerEvents: "none" }} width="500" height="500" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {[5,10,15,20,25,30,35,40].map((r) => (<circle key={r} cx="50" cy="50" r={r} stroke="#fff" strokeWidth="0.5" />))}
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="rgba(255,255,255,0.7)">Innovación tecnológica</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 32px", color: "#fff" }}>
            Equipamiento de campo especializado
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {equipment.map(({ label, desc }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--irca-green)", flexShrink: 0, marginTop: 5 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.45 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES + RESEÑAS ────────────────────────── */}
      <Clients />
      <GoogleReviews />

      {/* ── COBERTURA ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <Eyebrow>Dónde operamos</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
                Sede en Nuevo León, alcance nacional e internacional
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
                Nuestra base operativa está en el norte de México, con presencia directa en Nuevo León, Coahuila, Tamaulipas y Sonora. A lo largo de 25 años hemos extendido nuestra operación a Guanajuato, Estado de México, CDMX y proyectos internacionales.
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {coverage.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name="check" size={12} stroke={2.5} />
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--fg-1)" }}>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <div style={{ padding: "10px 18px", borderRadius: 10, background: "var(--bg-2)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--irca-green)", letterSpacing: "-0.03em" }}>+500</div>
                  <div style={{ fontSize: 12, color: "var(--fg-4)", fontWeight: 600 }}>Proyectos ejecutados</div>
                </div>
                <div style={{ padding: "10px 18px", borderRadius: 10, background: "var(--bg-2)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--irca-blue)", letterSpacing: "-0.03em" }}>7</div>
                  <div style={{ fontSize: 12, color: "var(--fg-4)", fontWeight: 600 }}>Autoridades federales</div>
                </div>
                <div style={{ padding: "10px 18px", borderRadius: 10, background: "var(--bg-2)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--irca-green)", letterSpacing: "-0.03em" }}>8+</div>
                  <div style={{ fontSize: 12, color: "var(--fg-4)", fontWeight: 600 }}>Sectores de industria</div>
                </div>
              </div>
            </div>
            <div style={{ border: "1px solid var(--border-soft)", borderRadius: 14, background: "var(--bg-1)", padding: "22px 24px" }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 14 }}>
                Mapa de cobertura
              </div>
              <CoverageMap />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--irca-green-50)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow color="var(--irca-green-700)">Trabaja con nosotros</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "18px auto 20px", color: "var(--ink-1000)", maxWidth: "24ch" }}>
            Tu tranquilidad ambiental —{" "}
            <span style={{ color: "var(--irca-green)" }}>nuestra especialidad</span>.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 auto 36px", maxWidth: "50ch" }}>
            Más de 25 años resolviendo los retos de cumplimiento normativo más complejos de la industria mexicana. Cuéntanos tu caso y encontramos la solución.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "14px 28px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-2)" }}
            >
              Contactar a IRCA Consultores <Icon name="arrow-right" size={17} />
            </Link>
            <Link
              href="/servicios/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg-1)", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none" }}
            >
              Ver todos los servicios
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-12" style={{ fontSize: 13, color: "var(--fg-4)" }}>
            <a href="tel:+528115059330" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg-3)", textDecoration: "none", fontWeight: 600 }}>
              <Icon name="phone" size={15} /> +52 81 1505-9330
            </a>
            <a href="tel:+528115059332" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg-3)", textDecoration: "none", fontWeight: 600 }}>
              <Icon name="phone" size={15} /> +52 81 1505-9332
            </a>
            <a href="mailto:info@ircaconsultores.com" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg-3)", textDecoration: "none", fontWeight: 600 }}>
              <Icon name="mail" size={15} /> info@ircaconsultores.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
