import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Estudios Ambientales",
  description: "MIA federal y estatal, ERA, ETJ forestal y Evaluación Ambiental Fase I y II. Estudios ambientales para proyectos industriales, energéticos y mineros en México. IRCA Consultores.",
};

/* ── shared helpers ─────────────────────────────────── */

function Eyebrow({ children, color = "var(--irca-green-700)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color }}>
      <span style={{ width: 24, height: 2, background: color, display: "inline-block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

function ImgPlaceholder({ ratio, label, sub, borderColor = "var(--border-strong)", bg = "var(--bg-2)" }: { ratio: string; label: string; sub: string; borderColor?: string; bg?: string }) {
  return (
    <div style={{ aspectRatio: ratio, border: `1.5px dashed ${borderColor}`, borderRadius: 14, background: bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "var(--fg-4)", textAlign: "center", padding: 24 }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-3)" }}>{label}</div>
      <div style={{ fontSize: 12, lineHeight: 1.5, maxWidth: "30ch" }}>{sub}</div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 999, background: "var(--irca-green-50)", color: "var(--irca-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
        <Icon name="check" size={14} stroke={2.4} />
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)" }}>{children}</span>
    </div>
  );
}

/* ── hero card data ─────────────────────────────────── */

const portfolio = [
  { label: "MIA Expansión industrial",  status: "En revisión",   palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "ERA Planta química",         status: "Aprobado",      palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "ETJ Desmonte 45 ha",         status: "En elaboración",palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Evaluación Fase I",          status: "Completado",    palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── subservicios ───────────────────────────────────── */

const subservicios = [
  {
    href: "/servicios/estudios-ambientales/estudio-de-impacto-ambiental/",
    color: "green",
    icon: <Icon name="shield-check" size={24} />,
    label: "MIA · 880 búsquedas/mes",
    title: "Estudio de Impacto Ambiental (MIA)",
    desc: "Manifestaciones de Impacto Ambiental federales y estatales ante SEMARNAT para proyectos que requieren autorización previa a su construcción u operación.",
  },
  {
    href: "/servicios/estudios-ambientales/estudio-de-riesgo-ambiental/",
    color: "blue",
    icon: <Icon name="flask" size={24} />,
    label: "ERA · 390 búsquedas/mes",
    title: "Estudio de Riesgo Ambiental (ERA)",
    desc: "Evaluación de riesgo ambiental para instalaciones que manejan sustancias peligrosas o procesos con potencial de accidente mayor, ante SEMARNAT.",
  },
  {
    href: "/servicios/estudios-ambientales/estudio-tecnico-justificativo/",
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2v20"/>
      </svg>
    ),
    label: "ETJ · 140 búsquedas/mes",
    title: "Estudio Técnico Justificativo Forestal (ETJ)",
    desc: "Estudios para autorizar el cambio de uso de suelo en terrenos forestales ante SEMARNAT y CONAFOR. Cubrimos desmontes, obras lineales y desarrollos en zonas con vegetación.",
  },
  {
    href: "/servicios/estudios-ambientales/evaluacion-ambiental-fase-1-y-2/",
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3"/><path d="M8 3h8"/><path d="M6 14h12"/>
      </svg>
    ),
    label: "ASTM E1527 · due diligence",
    title: "Evaluación Ambiental de Sitio Fase I y II",
    desc: "Evaluaciones de pasivo ambiental bajo metodología ASTM E1527-13 para adquisiciones, fusiones, financiamientos y due diligence inmobiliario e industrial.",
  },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={24} />,
    title: "MIA federal y estatal",
    desc: "Elaboramos Manifestaciones de Impacto Ambiental en modalidad particular o regional ante SEMARNAT federal y ante dependencias ambientales estatales, ajustadas a las guías sectoriales y al historial de revisión de cada unidad.",
  },
  {
    color: "blue",
    icon: <Icon name="flask" size={24} />,
    title: "Estudio de Riesgo Ambiental (ERA)",
    desc: "Evaluación de escenarios de accidente, análisis de consecuencias y medidas de seguridad para instalaciones con sustancias peligrosas. Incluye modelación de dispersión y planes de respuesta a emergencias.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2v20"/>
      </svg>
    ),
    title: "Estudio Técnico Justificativo (ETJ) forestal",
    desc: "Documento técnico para la autorización de cambio de uso de suelo en terrenos con vegetación forestal. Incluye inventario de recursos, análisis de impactos y medidas de compensación ante SEMARNAT o CONAFOR.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3"/><path d="M8 3h8"/><path d="M6 14h12"/>
      </svg>
    ),
    title: "Evaluación Ambiental Fase I y II (ASTM)",
    desc: "Evaluación de pasivo ambiental mediante metodología ASTM E1527-13 para operaciones de compraventa, fusión o financiamiento. La Fase II incorpora muestreo y análisis de suelo, subsuelo y agua subterránea.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>
        <path d="M9 3v18"/><path d="M15 3v18"/>
      </svg>
    ),
    title: "Planes de manejo de residuos",
    desc: "Planes de manejo para residuos de manejo especial, metalúrgicos y peligrosos, conforme a la LGPGIR y reglamentos aplicables. Incluimos bitácoras, manifiestos y rutas de disposición final.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Conocemos los criterios de revisión de la autoridad",
    body: "No elaboramos estudios genéricos. Nuestra experiencia acumulada con SEMARNAT, CONAGUA y CONAFOR nos permite anticipar qué revisa cada unidad evaluadora y estructurar los documentos de forma que respondan esos criterios desde la primera entrega.",
  },
  {
    n: "02",
    title: "Soporte técnico y jurídico en un mismo equipo",
    body: "Cuando la autoridad emite observaciones —o cuando el estudio deriva en un conflicto administrativo— contamos con la capacidad jurídica para responder, recurrir o negociar. No dependes de un abogado externo que no conoce el expediente.",
  },
  {
    n: "03",
    title: "Más de 25 años de estudios aprobados",
    body: "Hemos elaborado estudios para proyectos industriales, mineros, energéticos, acuícolas e inmobiliarios en todo el país. Ese historial se traduce en metodologías depuradas y en respuestas ágiles a las observaciones de la autoridad.",
  },
  {
    n: "04",
    title: "Continuidad hasta la autorización",
    body: "El estudio no termina cuando se entrega el documento. Hacemos el seguimiento ante la autoridad, respondemos observaciones, gestionamos plazos y, si es necesario, presentamos recursos. Nuestro objetivo es la resolución favorable, no el reporte.",
  },
  {
    n: "05",
    title: "Integración con otros servicios de cumplimiento",
    body: "Una vez que tu proyecto tiene la autorización, podemos continuar con los trámites operativos, el monitoreo de condicionantes o el seguimiento de obligaciones periódicas. Todo bajo el mismo equipo que elaboró el estudio original.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Qué diferencia hay entre una MIA federal y una estatal?",
    a: "La MIA federal la resuelve la SEMARNAT federal y aplica a proyectos listados en el artículo 28 de la LGEEPA (obra pública federal, proyectos energéticos, minería, entre otros). La MIA estatal la tramita la dependencia ambiental de cada entidad para proyectos de competencia local. En muchos casos ambas pueden requerirse. Evaluamos cuál aplica a tu proyecto desde la primera consulta.",
  },
  {
    q: "¿Cuánto tiempo tarda la resolución de una MIA?",
    a: "El plazo legal de resolución de la SEMARNAT es de 60 días hábiles para modalidad particular y 120 para regional, aunque en la práctica los plazos varían según la carga de trabajo de la unidad y la calidad del expediente. Un estudio bien estructurado reduce observaciones y acelera los tiempos reales.",
  },
  {
    q: "¿Qué pasa si la autoridad emite observaciones al estudio?",
    a: "Las observaciones son parte del proceso y no representan una negativa. Nuestro equipo responde la información adicional requerida en los plazos establecidos. En casos donde la resolución sea desfavorable, contamos con capacidad jurídica para interponer recursos administrativos o impugnar ante tribunales.",
  },
  {
    q: "¿Pueden hacer un estudio si el proyecto ya está en operación sin autorización?",
    a: "Sí. Trabajamos en procesos de regularización para instalaciones que operan sin la MIA, ERA o ETJ correspondiente. El proceso varía según el tipo de proyecto y su impacto, y puede involucrar medidas de compensación. Es recomendable atenderlo de forma proactiva antes de una inspección de la autoridad.",
  },
  {
    q: "¿Trabajan con proyectos fuera de Nuevo León?",
    a: "Sí. Contamos con experiencia documentada en proyectos a lo largo del país, incluyendo Coahuila, Tamaulipas, Sonora, Guanajuato, Estado de México, Baja California y Veracruz, entre otras entidades. El trabajo en campo incluye visitas al sitio del proyecto.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Evaluación del cumplimiento normativo de tu instalación antes o después de obtener la autorización de impacto ambiental.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Trámites y Licencias Ambientales",
    desc: "Gestión de LAU, COA, permisos CONAGUA y demás obligaciones operativas que se derivan de las condicionantes de tu autorización.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={22} />,
    title: "Derecho Ambiental",
    desc: "Representación y defensa jurídica cuando la autoridad emite resoluciones desfavorables, impone medidas correctivas o inicia procedimientos administrativos.",
    href: "/servicios/derecho-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="drone" size={22} />,
    title: "Ingeniería Ambiental",
    desc: "Soluciones técnicas para el control de emisiones, tratamiento de aguas y manejo de residuos que forman parte de las condicionantes del estudio.",
    href: "/servicios/ingenieria-ambiental/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function EstudiosAmbientales() {
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
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.22 }} aria-hidden="true">
          <defs>
            <pattern id="topoEstudios" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#C7E2F0" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#DCEFCB" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoEstudios)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow color="var(--irca-blue-700)">Estudios Ambientales</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Estudios ambientales para proyectos que requieren{" "}
              <span style={{ color: "var(--irca-green)" }}>autorización regulatoria</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              De la Manifestación de Impacto Ambiental al Estudio de Riesgo: elaboramos los documentos técnicos que la autoridad exige para aprobar, ampliar o regularizar tu proyecto.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Cada estudio se construye sobre el análisis real del sitio, el giro del proyecto y la normatividad aplicable ante SEMARNAT, CONAGUA y CONAFOR. No usamos plantillas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "14px 26px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)" }}
              >
                Solicitar información <Icon name="arrow-right" size={17} />
              </a>
              <a
                href="#subservicios"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none" }}
              >
                Ver estudios
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              <span>SEMARNAT</span><span>CONAGUA</span><span>CONAFOR</span><span>Normatividad estatal</span>
            </div>
          </div>

          {/* Project portfolio card — hidden on mobile */}
          <div className="hidden md:block">
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-green)", boxShadow: "0 0 0 4px var(--irca-green-50)" }} />
                Portafolio activo de estudios
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Proyectos en gestión · 2024
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {portfolio.map(({ label, status, palette }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-2)" }}>{label}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 9px", borderRadius: 999, background: palette.bg, color: palette.fg, fontSize: 11, fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: palette.fg }} /> {status}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "14px 0" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { label: "MIA", n: "4" },
                  { label: "ERA", n: "2" },
                  { label: "ETJ", n: "3" },
                  { label: "Fase I/II", n: "5" },
                ].map(({ label, n }) => (
                  <div key={label} style={{ background: "var(--bg-2)", borderRadius: 10, padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "var(--fg-3)", fontWeight: 500 }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "var(--irca-blue)" }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE EL SERVICIO ─────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Eyebrow>Sobre el Servicio</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
              Qué resuelve un estudio ambiental bien elaborado
            </h2>
            <ImgPlaceholder
              ratio="16/9"
              label="Trabajo de campo / revisión documental"
              sub="Reemplazar con foto real del equipo elaborando estudios, en campo o en gabinete."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              Un estudio ambiental es el documento técnico que la autoridad utiliza para evaluar si tu proyecto puede operar, expandirse o modificarse sin comprometer el entorno. No es un trámite menor: una MIA incompleta, un ERA sin los modelos correctos o un ETJ sin el sustento forestal adecuado puede detener tu proyecto durante meses o derivar en resoluciones desfavorables. El costo real no es el estudio; es el tiempo y la inversión paralizados mientras la autoridad regresa observaciones.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores elaboramos estudios ambientales con la misma rigurosidad técnica y jurídica que aplicamos en nuestra consultoría de cumplimiento. Nuestro equipo tiene experiencia directa con los criterios de evaluación de SEMARNAT, la metodología de revisión de CONAGUA y los requerimientos de CONAFOR para estudios forestales. Eso se traduce en documentos fundamentados, estructurados según lo que cada autoridad realmente revisa, y defendibles ante cualquier observación o impugnación.
            </p>
            <a
              href="#contacto"
              style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "13px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)" }}
            >
              Solicitar información <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SUBSERVICIOS (sección extra) ─────────────── */}
      <section id="subservicios" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Estudios especializados</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-4 mb-12">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0, color: "var(--ink-1000)" }}>
              Cuatro estudios, una sola firma especializada
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Cada tipo de estudio responde a una autoridad, una normatividad y un proceso de revisión distinto. Elaboramos los cuatro, y en proyectos complejos los coordinamos de forma simultánea para evitar cuellos de botella en la autorización.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {subservicios.map(({ href, color, icon, label, title, desc }) => (
              <a
                key={href}
                href={href}
                style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
              >
                <article style={{
                  background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16,
                  padding: 28, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 14,
                  height: "100%", transition: "box-shadow 150ms, border-color 150ms",
                  cursor: "pointer",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div style={{
                      width: 50, height: 50, borderRadius: 12, flexShrink: 0,
                      background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                      color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {icon}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)", background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)", padding: "4px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>
                      {label}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2, margin: 0 }}>{title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
                  <div style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)", fontWeight: 600, fontSize: 14 }}>
                    Ver estudio completo <Icon name="arrow-right" size={14} />
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALCANCE ───────────────────────────────────── */}
      <section id="incluye" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Alcance del servicio</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-11">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              ¿Qué incluyen los estudios ambientales de IRCA?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              El alcance varía según el tipo de proyecto, su localización, el régimen de impacto y la autoridad competente. Definimos el estudio correcto para tu caso desde la primera consulta, sin cobrar por la orientación inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {alcanceCards.map(({ color, icon, title, desc }) => (
              <article
                key={title}
                style={{ background: "var(--bg-2)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 14 }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 10,
                  background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                  color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.2, margin: 0 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
              </article>
            ))}

            {/* Dark CTA card */}
            <article style={{ background: "linear-gradient(160deg,var(--bg-deep),#0f2c47)", border: "1px solid var(--bg-deep)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>El tipo de estudio lo define el proyecto</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>Cuéntanos el alcance y la ubicación de tu proyecto y determinamos qué estudio requieres y ante qué autoridad.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Consultar sin costo <Icon name="arrow-right" size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── ¿CUÁNDO? ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
        <div
          className="grid grid-cols-1 md:[grid-template-columns:1.05fr_0.95fr] gap-10 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <div>
            <Eyebrow color="var(--irca-blue-700)">Para quién es</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
              ¿Cuándo necesita tu proyecto un estudio ambiental?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Cualquier proyecto que pueda generar impacto significativo en el entorno requiere algún tipo de autorización ambiental previa. Más allá de la obligación legal, contar con el estudio correcto desde el inicio protege la inversión, los plazos y la reputación de la operación. Es especialmente recomendable en estos escenarios:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Tu proyecto requiere autorización de impacto ambiental federal o estatal para arrancar, ampliar u operar.</CheckItem>
              <CheckItem>Vas a modificar instalaciones que generan emisiones, descargas, residuos peligrosos o actividades altamente riesgosas.</CheckItem>
              <CheckItem>Necesitas un ETJ para realizar obras en terrenos con vegetación forestal o en zonas de aprovechamiento regulado.</CheckItem>
              <CheckItem>Estás adquiriendo, vendiendo o financiando un activo industrial y necesitas cuantificar el pasivo ambiental del sitio.</CheckItem>
              <CheckItem>Quieres regularizar una operación que inició sin la MIA, ERA o ETJ correspondiente.</CheckItem>
              <CheckItem>Tu proyecto tiene condicionantes de resoluciones anteriores que requieren estudios complementarios o actualizaciones.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Trabajo de campo / muestreo"
              sub="Reemplazar con foto real del equipo en campo (muestreo de suelo, recorrido, documentación)."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: 0 }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
        </div>
      </section>

      {/* ── SOBRE IRCA ────────────────────────────────── */}
      <section id="nosotros" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--irca-green-50)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:[grid-template-columns:0.9fr_1.1fr] gap-10 md:gap-16 items-center">
            <div>
              <Eyebrow>Sobre la empresa</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
                Sobre IRCA Consultores
              </h2>
              <div style={{ border: "1.5px dashed var(--irca-green-700)", borderRadius: 14, background: "#fff", aspectRatio: "4/3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "var(--fg-4)", textAlign: "center", padding: 24 }}>
                <Icon name="building" size={32} />
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-3)" }}>Equipo / oficinas IRCA</div>
                <div style={{ fontSize: 12, lineHeight: 1.5, maxWidth: "30ch" }}>Reemplazar con foto real del equipo multidisciplinario o de las instalaciones de la firma.</div>
              </div>
              <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-2)", margin: 0 }}>
                IRCA Consultores es una firma de consultoría ambiental fundada en 1999, especializada en ingeniería ambiental y cumplimiento normativo. A lo largo de más de 25 años nos hemos consolidado como referente técnico-legal ambiental en el norte de México, con cobertura nacional y proyectos en sectores tan diversos como el industrial, minero, energético, acuícola, inmobiliario y gubernamental. Operamos bajo dos razones sociales —IRCA Ingeniería y Servicios, S.C. y Environmental North de México, S.C.— y conjugamos rigor técnico con solidez jurídica para representar a nuestros clientes ante SEMARNAT, PROFEPA, CONAGUA, STPS y demás autoridades. Nuestro equipo multidisciplinario acompaña cada proyecto de principio a fin: del diagnóstico a la resolución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ¿POR QUÉ IRCA? ───────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ position: "relative", overflow: "hidden", background: "var(--bg-deep)", color: "#fff" }}>
        <svg style={{ position: "absolute", right: -120, top: -120, opacity: 0.13, pointerEvents: "none" }} width="540" height="540" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {[5,10,15,20,25,30,35,40,45].map((r) => (
            <circle key={r} cx="50" cy="50" r={r} stroke="#fff" strokeWidth="0.4" />
          ))}
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="rgba(255,255,255,0.7)">Por qué IRCA</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "16px 0 48px", color: "#fff", maxWidth: "22ch" }}>
            ¿Por qué contratar a{" "}
            <span style={{ color: "var(--irca-green)" }}>IRCA Consultores</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-10">
            {pillars.map(({ n, title, body }) => (
              <div key={n} style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 22 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, marginBottom: 12 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "-0.015em", marginBottom: 10 }}>{title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.78 }}>{body}</div>
              </div>
            ))}
            {/* Glass CTA card */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>Tu proyecto no puede esperar a que la autoridad regrese observaciones.</div>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", border: "1px solid transparent", padding: "12px 20px", fontWeight: 600, fontSize: 14, borderRadius: 8, textDecoration: "none", alignSelf: "flex-start" }}>
                Solicitar información <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section id="faq" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Preguntas frecuentes</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 36px", color: "var(--ink-1000)" }}>
            Preguntas frecuentes sobre estudios ambientales
          </h2>
          <ServiceFAQ items={faqs} />
        </div>
      </section>

      {/* ── SERVICIOS RELACIONADOS ────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Servicios relacionados</Eyebrow>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,3vw,32px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "16px 0 40px", color: "var(--ink-1000)" }}>
            Otros servicios que pueden complementar este proyecto
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(({ color, icon, title, desc, href }) => (
              <article
                key={title}
                style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 22, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: color === "blue" ? "var(--irca-blue-50)" : "var(--irca-green-50)",
                  color: color === "blue" ? "var(--irca-blue-700)" : "var(--irca-green-700)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  {icon}
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em", color: "var(--fg-1)", margin: 0, lineHeight: 1.25 }}>{title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
                <a href={href} style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: color === "blue" ? "var(--irca-blue-700)" : "var(--irca-green-700)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}>
                  Ver servicio <Icon name="arrow-right" size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FORM ───────────────────────────────── */}
      <ServiceContactSection
        headline={<>Tu proyecto no puede esperar a que la autoridad regrese <span style={{ color: "var(--irca-green)" }}>observaciones</span>.</>}
        copy="Un estudio ambiental sólido desde el inicio previene retrasos, evita resoluciones desfavorables y protege la inversión. Cuéntanos el alcance de tu proyecto y te orientamos sobre el tipo de estudio que necesitas y el proceso ante la autoridad correspondiente."
        formTitle="Solicitar estudio ambiental"
        motivoLabel="Tipo de estudio requerido"
        motivoOptions={["Manifestación de Impacto Ambiental (MIA)", "Estudio de Riesgo Ambiental (ERA)", "Estudio Técnico Justificativo (ETJ)", "Evaluación Ambiental Fase I o II", "No estoy seguro / orientación general"]}
      />
    </>
  );
}
