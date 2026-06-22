import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

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

function ImgPlaceholder({ ratio, label, sub }: { ratio: string; label: string; sub: string }) {
  return (
    <div style={{ aspectRatio: ratio, border: "1.5px dashed var(--border-strong)", borderRadius: 14, background: "var(--bg-2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "var(--fg-4)", textAlign: "center", padding: 24 }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-3)" }}>{label}</div>
      <div style={{ fontSize: 12, lineHeight: 1.5, maxWidth: "30ch" }}>{sub}</div>
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
  { icon: "shield-check", label: "Rigor técnico y científico", desc: "Cada estudio, diagnóstico y proyecto parte de metodologías verificables y datos de campo reales." },
  { icon: "check",        label: "Integridad y transparencia", desc: "Comunicación directa con el cliente sobre alcances, plazos, costos y resultados, sin intermediarios ni sorpresas." },
  { icon: "building",     label: "Compromiso con el cliente", desc: "Acompañamos cada proyecto de principio a fin. El expediente no se cierra hasta que el cliente tiene el resultado en mano." },
  { icon: "flask",        label: "Responsabilidad ambiental", desc: "Practicamos lo que aconsejamos: nuestros proyectos incorporan criterios de sostenibilidad más allá del mínimo normativo." },
  { icon: "drone",        label: "Innovación continua", desc: "Desarrollamos herramientas propias de gestión ambiental y adoptamos tecnología de campo (UAV, telemetría, software de modelación) para mejorar la calidad de nuestros entregables." },
  { icon: "scale",        label: "Excelencia ante autoridades", desc: "Conocemos los criterios reales de revisión de SEMARNAT, PROFEPA, CONAGUA y STPS. Eso se traduce en expedientes que se resuelven en tiempo." },
];

const directors = [
  {
    color: "green",
    name: "M.C. Ing. Juan Carlos Aguilar Ibarra",
    title: "Socio Fundador — Director General",
    bio: "Ingeniero Civil con posgrado en Ingeniería Ambiental y Licenciatura en Derecho con especialidad en Derecho Administrativo y Ambiental. Auditor Líder certificado en ISO 9001, ISO 14001 e ISO 45001. Más de 25 años de experiencia en cumplimiento normativo ambiental para empresas privadas, transnacionales, paraestatales y gobiernos federal y estatal. Director de la estrategia ambiental del Complejo Penitenciario Islas Marías (2009-2012) y de los estudios FONDEN para CONAPESCA (2013-2019). Conferencista en impacto ambiental, ISO 14001 y certificación Industria Limpia.",
    tags: ["ISO 9001", "ISO 14001", "ISO 45001", "Derecho Ambiental"],
  },
  {
    color: "blue",
    name: "C.P. Alma Patricia Fragoso Gutiérrez",
    title: "Socia Fundadora — Dirección Administrativa y Sistemas de Calidad",
    bio: "Contadora Pública y socia fundadora de IRCA Consultores. Amplia trayectoria en gestión administrativa dentro de la industria de transformación, en empresas de iniciativa privada y entidades de carácter nacional. Especialista en implementación y soporte de sistemas de calidad orientados a la administración empresarial, garantizando la solidez operativa, la trazabilidad financiera y el cumplimiento de estándares de gestión en todos los proyectos de IRCA.",
    tags: ["Sistemas de calidad", "Gestión financiera", "Auditoría contable"],
  },
  {
    color: "green",
    name: "M en G. Ing. Juan Gualberto Antonio Pérez",
    title: "Director de Operaciones",
    bio: "15 años de experiencia en proyectos de monitoreo de calidad ambiental, minimización de residuos, tratamiento de agua residual, manejo de cuencas hidrológicas y forestación. Especialista en implementación de sistemas de monitoreo atmosférico, inventario de emisiones, balances hídricos y gestión bajo estándares ISO 14001, OHSAS 18001 e ISO 50001.",
    tags: ["ISO 14001", "ISO 50001", "Monitoreo ambiental", "PTAR"],
  },
  {
    color: "blue",
    name: "Lic. Iveth Reyes Moreno",
    title: "Coordinadora Administrativa",
    bio: "Más de 15 años de experiencia en gestión administrativa. Responsable de la administración de cuentas, archivo contable, facturación, alta de proveedores, registros REPSE y programación de gastos. Garantiza la solidez operativa y fiscal de todos los proyectos de IRCA Consultores.",
    tags: ["Administración", "REPSE", "Facturación"],
  },
  {
    color: "green",
    name: "Lic. Esteban Benjamín Hernández Aguilar",
    title: "Coordinador de Estrategia Legal",
    bio: "Licenciado en Derecho por la UANL, especialista en normatividad de impacto ambiental federal, cambio de uso de suelo en terrenos forestales y litigio activo a nivel federal y estatal. Responsable del seguimiento y cumplimiento de términos y condicionantes en resolutivos ambientales, intermediación para regularización ambiental, atención de visitas de inspección y recursos de revisión ante autoridades ambientales.",
    tags: ["Litigio ambiental", "ETJ", "Recursos de revisión", "PROFEPA"],
  },
];

const projectLeads = [
  { name: "Ing. Xitlali Palomino Huerta",     spec: "Gestión de trámites MIA y federales"           },
  { name: "Ing. Diana Clark Morales",          spec: "Residuos, impacto ambiental y sector HC"        },
  { name: "Ing. Fernanda Reyna Raygoza",       spec: "Sistemas de gestión y salud ocupacional"        },
  { name: "Ing. Juan Clemente Cárdenas M.",    spec: "SHE, análisis de riesgos y trabajo de campo"   },
  { name: "Biol. Marcelo Guzmán de la Garza", spec: "Biología, SIG y análisis geoespacial"           },
  { name: "Lic. Luis A. Ortiz Hernández",      spec: "Seguridad en el trabajo y energías verdes"     },
  { name: "Ing. Jessica González Cruz",        spec: "Gestión integral de trámites ambientales"       },
  { name: "Ing. Luis Fernando Moo Chan",       spec: "Proyectos forestales y monitoreo de fauna"      },
  { name: "Lic. Edson Carrizales Ramos",       spec: "Logística y gestión de proyectos"              },
];

const longTermProjects = [
  { client: "Secretaría de Seguridad Pública — Complejo Penitenciario Islas Marías", services: "MIA, ETJ, PVA, Programas Específicos, Cumplimiento Ambiental en ANP (PROFEPA, SEMARNAT, CONAGUA, UNESCO)", period: "2009 – 2012" },
  { client: "CONAPESCA — FONDEN (26 obras civiles)",                                   services: "Avisos de obra emergente, PVA, Condiciones Iniciales, Programas de Cumplimiento y Medidas de Mitigación",     period: "2013 – 2019" },
  { client: "Energía de Ramos SAPI de CV — Planta ciclo sencillo",                    services: "MIA y gestión, PVA, Programas Específicos y Seguimiento Ambiental",                                              period: "2012 – 2016" },
  { client: "Energía de Celaya SA de CV — Planta Ciclo Combinado (Fisterra Energy)",  services: "MIA, ERA, Modelación de Emisiones, PVA, Programas Específicos y Cumplimiento",                                   period: "2016 – Vigente" },
  { client: "Deacero — Acería Ramos Arizpe",                                           services: "MIA, PVA, Programas Específicos y Seguimiento Ambiental",                                                         period: "2010 – Vigente" },
  { client: "Deacero Recycling SA de CV — Patios de Chatarra (nacional)",              services: "MIA, Protección Civil, Residuos, Gestión Estatal, Seguimiento Técnico/Jurídico",                                  period: "2017 – Vigente" },
  { client: "Vitromex — Minas y Moliendas (4 moliendas, 12 bancos de material)",      services: "MIA, ETJ, PVA, Seguimiento Ambiental y Técnico/Jurídico de Expedientes",                                         period: "2012 – Vigente" },
  { client: "Frisa Forjados SA de CV (4 plantas)",                                     services: "MIA, ERA, LAU, SHE, Seguimiento Técnico/Jurídico y Estudios Técnicos",                                           period: "2019 – Vigente" },
  { client: "Fundición Águilas SA de CV — FA Foundry",                                services: "MIA, ERA, Licencias Ambientales, SHE, Juicio de Amparo, Seguimiento T/J",                                        period: "2018 – Vigente" },
  { client: "Metal Technologies Inc. — Planta de Fundición",                           services: "MIA, Programas Específicos, Seguimiento Ambiental y Estudios Técnicos",                                          period: "2017 – 2020" },
  { client: "H. Ayuntamiento de San Pedro Garza García",                               services: "Asesoría normativa y MIA para proyectos urbanos",                                                                  period: "2021 – Vigente" },
  { client: "Coflex SA de CV (Planta Santa Catarina, NL)",                             services: "Regulación ambiental, MIA, ERA, Planes de Manejo de Residuos",                                                    period: "2024 – Vigente" },
  { client: "Daltile México SA de CV (3 plantas, NL y Guanajuato)",                   services: "Regulación ambiental, MIA, ERA, Planes de Manejo de Residuos",                                                    period: "2023 – Vigente" },
  { client: "Aquamex SA de CV (Planta Santa Catarina)",                                services: "MIA, Planes de Manejo, Permisos y Licencias Ambientales",                                                         period: "2024 – Vigente" },
  { client: "Novocast Mexico S de RL de CV (El Carmen, NL)",                           services: "Regulación ambiental, MIA, ERA, Planes de Manejo",                                                                period: "2025 – Vigente" },
  { client: "ASK Chemicals de México (Planta El Carmen, NL)",                          services: "Regulación en materia de cumplimiento normativo ambiental",                                                        period: "2025 – Vigente" },
  { client: "Vesuvius México SA de CV (2 plantas)",                                    services: "ERA, COA, LAU, Juicio de Amparo, Auditoría de Cumplimiento",                                                      period: "2021 – Vigente" },
  { client: "Gobierno Municipal San Pedro Garza García",                               services: "Cumplimiento normativo y MIA para proyectos urbanos municipales",                                                  period: "2021 – Vigente" },
];

const phaseStudies = [
  "REA Magnet Wire — Planta Ciénega de Flores (Technology Park)",
  "Manufacturas Vitromex SA de CV — Planta Saltillo (Phase I)",
  "Autotransportes MOR SA de CV — Ciénega de Flores (Phase I y II)",
  "Engine Power Components Inc. — Parque Industrial Las Américas, Torreón",
  "Bos Automotive Products — Irapuato, Gto.",
  "Pentair Technical Products — Parque Industrial del Norte, Reynosa (Phase I y II)",
  "Morrison Products Inc. — Parque Industrial La Silla, Apodaca",
  "Química RANA SA de CV — Santa Catarina, NL (Phase I y II)",
  "Carbone Lorraine — Guadalupe, NL",
  "Praxair — Tlalnepantla, Estado de México",
  "Terminal de Distribución — Complejo Penitenciario Islas Marías (Phase I, II y Caracterización)",
  "Keystone Automotive — Linares, NL",
];

const ruido = ["Hunter Douglas — Planta Apodaca", "Prolec (GE) — Campus II y Campus III", "Novocast S de RL de CV", "Vitromex — Planta Saltillo"];

const authorities = ["SEMARNAT", "PROFEPA", "CONAGUA", "STPS", "COFEPRIS", "CONANP", "Secretarías estatales"];
const coverage = ["Nuevo León — sede operativa", "Coahuila · Tamaulipas · Sonora", "Guanajuato · Estado de México · CDMX", "Cobertura nacional e internacional"];

const milieusFeatures = [
  "Gestión centralizada de obligaciones ambientales",
  "Alertas de vencimientos y calendario regulatorio",
  "Resguardo digital del expediente ambiental",
  "Indicadores de cumplimiento por instalación",
];

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
          background: "linear-gradient(180deg,#FFFFFF 0%,var(--bg-2) 100%)",
          paddingTop: "clamp(56px,8vw,92px)", paddingBottom: "clamp(48px,7vw,84px)",
        }}
      >
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} aria-hidden="true">
          <defs>
            <pattern id="topoNosotros" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#DCEFCB" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#C7E2F0" strokeWidth="1" fill="none" />
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
              <div key={label} style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: "20px 24px", boxShadow: "var(--shadow-1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", letterSpacing: "-0.03em", color: "var(--irca-green)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--fg-1)", marginTop: 8, lineHeight: 1.25 }}>{label}</div>
                <div style={{ fontSize: 12, color: "var(--fg-4)", marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Eyebrow>Nuestra historia</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
              Una firma construida sobre expedientes reales
            </h2>
            <ImgPlaceholder ratio="16/9" label="Equipo IRCA / oficinas" sub="Reemplazar con foto corporativa del equipo o las instalaciones de IRCA Consultores." />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico</p>
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
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 32, boxShadow: "var(--shadow-1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="check" size={18} stroke={2.5} />
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--fg-1)" }}>Misión</span>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
                Proporcionar soluciones integrales en materia de cumplimiento normativo ambiental, protegiendo los intereses de nuestros clientes mediante la combinación de rigor técnico, solidez jurídica y acompañamiento estratégico, contribuyendo al desarrollo sustentable de las organizaciones que atendemos.
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
                Ser la firma de consultoría ambiental líder en México, reconocida por la excelencia técnica, la innovación en gestión del cumplimiento normativo y la confianza que generamos en nuestros clientes como aliados estratégicos para la sostenibilidad operativa y reputacional de sus negocios.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {values.map(({ icon, label, desc }) => (
              <div key={label} style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={icon as any} size={20} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.25 }}>{label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO DIRECTIVO ──────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>El equipo</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mt-4 mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              Equipo directivo
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Más de 12 profesionales certificados en ingeniería ambiental, derecho, biología, geociencias y seguridad industrial. El liderazgo de IRCA combina experiencia de campo con solidez jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {directors.map(({ color, name, title, bio, tags }) => (
              <div
                key={name}
                style={{ background: "var(--bg-2)", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 28, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 14 }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                    color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, fontFamily: "var(--font-display)", fontWeight: 800,
                  }}>
                    {name.split(" ").filter(w => w.match(/^[A-Z]/) && !w.includes(".")).slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.2 }}>{name}</div>
                    <div style={{ fontSize: 13, color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)", fontWeight: 600, marginTop: 4 }}>{title}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>{bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {tags.map(t => (
                    <span key={t} style={{ padding: "3px 10px", borderRadius: 999, background: "#fff", border: "1px solid var(--border-soft)", fontSize: 11, fontWeight: 600, color: "var(--fg-3)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Project leads */}
          <Eyebrow color="var(--irca-blue-700)">Líderes de proyectos especializados</Eyebrow>
          <p style={{ fontSize: 15, color: "var(--fg-3)", margin: "14px 0 24px", maxWidth: "60ch" }}>
            El equipo operativo está conformado por profesionales en Ingeniería Ambiental, Química, Biología, Ciencias Ambientales y Derecho, egresados de instituciones de reconocida trayectoria en el país.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {projectLeads.map(({ name, spec }) => (
              <div key={name} style={{ background: "var(--bg-2)", border: "1px solid var(--border-soft)", borderRadius: 12, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--fg-1)" }}>{name}</div>
                <div style={{ fontSize: 13, color: "var(--fg-4)", lineHeight: 1.45 }}>{spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INNOVACIÓN ────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-deep)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", right: -100, top: -100, opacity: 0.1, pointerEvents: "none" }} width="500" height="500" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {[5,10,15,20,25,30,35,40].map((r) => (<circle key={r} cx="50" cy="50" r={r} stroke="#fff" strokeWidth="0.5" />))}
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="rgba(255,255,255,0.7)">Innovación tecnológica</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-6">
            {/* Milieus Pro */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "4px 12px", borderRadius: 999, background: "rgba(111,176,63,0.15)", border: "1px solid rgba(111,176,63,0.3)", color: "var(--irca-green)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 20 }}>
                EN BETA · Próximamente disponible
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 16px", color: "#fff" }}>
                Milieus Pro
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 0 28px" }}>
                Plataforma digital de gestión ambiental basada en internet, diseñada para que los responsables de SHE lleven un respaldo digital de su archivo ambiental y conozcan su nivel de cumplimiento normativo en tiempo real. Actualmente en etapa de prueba con integraciones piloto en proceso de validación operativa.
              </p>
              <div style={{ display: "grid", gap: 12 }}>
                {milieusFeatures.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 22, height: 22, borderRadius: 999, background: "rgba(111,176,63,0.2)", color: "var(--irca-green)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name="check" size={12} stroke={2.5} />
                    </span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.82)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", margin: "0 0 20px", color: "#fff" }}>
                Equipamiento de campo especializado
              </h3>
              <div style={{ display: "grid", gap: 8 }}>
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
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA — PROYECTOS LARGO PLAZO ──────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Trayectoria</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-4 mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              Proyectos de seguimiento ambiental de largo plazo
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Con 25 años de operación continua, IRCA Consultores ha desarrollado más de 500 estudios, proyectos y procedimientos legales. Estos son algunos de los clientes con relaciones de largo plazo.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "var(--bg-2)", borderBottom: "2px solid var(--border-soft)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", whiteSpace: "nowrap" }}>Cliente / Proyecto</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)" }}>Servicios prestados</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", whiteSpace: "nowrap" }}>Período</th>
                </tr>
              </thead>
              <tbody>
                {longTermProjects.map(({ client, services, period }, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-soft)", background: i % 2 === 0 ? "#fff" : "var(--bg-2)" }}>
                    <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.35, verticalAlign: "top", minWidth: 240, maxWidth: 320 }}>{client}</td>
                    <td style={{ padding: "14px 16px", color: "var(--fg-3)", lineHeight: 1.5, verticalAlign: "top" }}>{services}</td>
                    <td style={{ padding: "14px 16px", whiteSpace: "nowrap", verticalAlign: "top", textAlign: "right" }}>
                      <span style={{
                        display: "inline-block", padding: "3px 9px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                        background: period.includes("Vigente") ? "var(--success-bg)" : "var(--bg-3)",
                        color: period.includes("Vigente") ? "var(--success)" : "var(--fg-4)",
                      }}>
                        {period}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PHASE I / II + RUIDO ──────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Phase I & II */}
            <div>
              <Eyebrow color="var(--irca-blue-700)">Estudios de sitio</Eyebrow>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "16px 0 8px", color: "var(--ink-1000)" }}>
                Estudios Phase I y Phase II (ASTM E1527)
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 24px" }}>
                Amplia trayectoria en evaluaciones de condición ambiental de sitio para fusiones, adquisiciones, cierres y cambios de uso de instalaciones industriales y comerciales.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {phaseStudies.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: "#fff", borderRadius: 10, border: "1px solid var(--border-soft)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: 999, background: "var(--irca-blue)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.45 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ruido perimetral */}
            <div>
              <Eyebrow>Especialidad destacada</Eyebrow>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "16px 0 8px", color: "var(--ink-1000)" }}>
                Control de ruido perimetral (NOM-081)
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 24px" }}>
                Contamos con modelos propios de evaluación acústica, sonómetros calibrados y software de modelación de refracción. Clientes de alta exigencia confían en nuestra metodología y en la validez regulatoria de nuestros informes.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
                {ruido.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px", background: "#fff", borderRadius: 10, border: "1px solid var(--border-soft)" }}>
                    <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--irca-green)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-1)" }}>{c}</span>
                  </div>
                ))}
              </div>

              {/* Sectores + autoridades */}
              <Eyebrow color="var(--irca-blue-700)">Autoridades ante las que actuamos</Eyebrow>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {authorities.map(a => (
                  <span key={a} style={{ padding: "6px 14px", borderRadius: 999, background: "#fff", border: "1px solid var(--border-soft)", fontSize: 12, fontWeight: 700, color: "var(--fg-2)" }}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COBERTURA ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <ImgPlaceholder ratio="4/3" label="Mapa de cobertura / proyectos nacionales" sub="Reemplazar con mapa o infografía de cobertura nacional de IRCA Consultores." />
              <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: 0 }}>Placeholder · pendiente infografía de cobertura</p>
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
              Contactar a IRCA <Icon name="arrow-right" size={17} />
            </Link>
            <Link
              href="/servicios/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none" }}
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
