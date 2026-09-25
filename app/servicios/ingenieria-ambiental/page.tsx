import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Ingeniería Ambiental",
  description: "Evaluación de sitios contaminados ASTM Phase I y II, caracterización bajo normativa mexicana, balance hídrico, huella de carbono, análisis de ciclo de vida, diseño ambiental y monitoreo de emisiones. IRCA Consultores.",
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
  { label: "Phase I — predio industrial",   status: "Completado",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "Phase II — muestreo de suelo",  status: "En laboratorio", palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "Balance hídrico planta norte",  status: "En elaboración", palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Huella de carbono 2025",        status: "Verificada",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── subservicios ───────────────────────────────────── */

const subservicios = [
  {
    href: "/servicios/ingenieria-ambiental/evaluacion-ambiental-fase-1-y-2/",
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>
      </svg>
    ),
    label: "ASTM E1527 · due diligence",
    title: "Evaluación Ambiental de Sitio Fase I y II",
    desc: "Due diligence ambiental bajo estándar ASTM para compraventas, fusiones y financiamientos. La Fase I documenta el historial y los indicios de contaminación; la Fase II lo confirma con muestreo y análisis de laboratorio.",
  },
  {
    href: "/servicios/ingenieria-ambiental/remediacion-de-suelos-contaminados/",
    color: "green",
    icon: <Icon name="droplet" size={24} />,
    label: "Remediación de suelos",
    title: "Caracterización y remediación de sitios",
    desc: "Delimitación de la pluma de contaminación, propuesta de remediación ante PROFEPA y ejecución hasta alcanzar los niveles de limpieza autorizados en suelo y agua subterránea.",
  },
  {
    href: "/servicios/ingenieria-ambiental/control-de-ruido-perimetral/",
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>
      </svg>
    ),
    label: "Ruido NOM-081",
    title: "Monitoreo de ruido perimetral",
    desc: "Medición de ruido perimetral conforme a la NOM-081-SEMARNAT con sonómetros calibrados, y diseño de las medidas de control acústico cuando el resultado rebasa los límites permitidos.",
  },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>
      </svg>
    ),
    title: "Evaluación de sitios contaminados Phase I y II (ASTM)",
    desc: "Due diligence bajo estándar internacional ASTM E1527 y E1903. La Fase I identifica condiciones ambientales reconocidas a partir de historial, registros y recorrido; la Fase II las confirma o descarta con muestreo y analítica acreditada.",
  },
  {
    color: "green",
    icon: <Icon name="flask" size={24} />,
    title: "Caracterización de sitios bajo normativa mexicana",
    desc: "Estudios de caracterización conforme a las NOM-138, NOM-147 y demás normas aplicables, con delimitación horizontal y vertical de la afectación y comparación contra los niveles de referencia que exige PROFEPA.",
  },
  {
    color: "blue",
    icon: <Icon name="droplet" size={24} />,
    title: "Balance hídrico",
    desc: "Cuantificación de entradas, consumos, pérdidas y descargas de agua en la instalación. Sustenta títulos de concesión, permisos de descarga, proyectos de reúso y metas corporativas de reducción de consumo.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"/><path d="M12 15V7"/><path d="M12 7a4 4 0 0 1 4-4"/><path d="M12 10a4 4 0 0 0-4-4"/>
      </svg>
    ),
    title: "Huella de carbono y análisis de ciclo de vida",
    desc: "Inventario de emisiones de gases de efecto invernadero por alcances 1, 2 y 3, y evaluación del ciclo de vida de producto o proceso. Insumo para reportes de sostenibilidad, exigencias de cliente y metas de descarbonización.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M10 21v-6h4v6"/>
      </svg>
    ),
    title: "Diseño ambiental",
    desc: "Ingeniería de rellenos sanitarios y celdas de confinamiento, plantas de tratamiento de agua residual y sistemas de descontaminación. Del diseño conceptual al proyecto ejecutivo con memoria de cálculo.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>
      </svg>
    ),
    title: "Monitoreo de emisiones",
    desc: "Medición de emisiones a la atmósfera en fuentes fijas, monitoreo perimetral y de calidad del aire, y muestreo de descargas. Datos con trazabilidad para acreditar cumplimiento ante la autoridad.",
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
    q: "¿Cuál es la diferencia entre una evaluación Phase I y una caracterización bajo normativa mexicana?",
    a: "La evaluación Phase I sigue el estándar internacional ASTM y está orientada a decisiones de inversión: documenta el historial del sitio e identifica indicios de contaminación para limitar responsabilidad en una transacción. La caracterización bajo las NOM mexicanas es el procedimiento que PROFEPA reconoce para acreditar formalmente la afectación y sustentar una remediación. Es común que una Phase II derive en una caracterización formal.",
  },
  {
    q: "¿Qué incluye un balance hídrico y para qué sirve?",
    a: "Cuantifica todas las entradas, consumos, pérdidas y descargas de agua de la instalación, hasta cerrar el balance. Sirve para sustentar un título de concesión o un permiso de descarga ante CONAGUA, para dimensionar un proyecto de reúso y para fijar metas corporativas de reducción de consumo con una línea base defendible.",
  },
  {
    q: "¿Cómo se calcula la huella de carbono y qué alcances cubre?",
    a: "Se elabora un inventario de emisiones de gases de efecto invernadero por alcances: el 1 cubre las emisiones directas de la operación, el 2 las asociadas a la energía comprada y el 3 las de la cadena de valor. El alcance 3 es el más laborioso porque depende de información de proveedores y clientes, y suele definirse según lo que exija el corporativo, el cliente o el marco de reporte que se vaya a usar.",
  },
  {
    q: "¿Diseñan la solución o solo entregan el diagnóstico?",
    a: "Ambas cosas. Cuando el estudio revela un problema, diseñamos la solución técnica que sigue —remediación, planta de tratamiento, celda de confinamiento, control acústico o descontaminación— con memoria de cálculo y viabilidad de ejecución, no solo una recomendación genérica.",
  },
  {
    q: "¿Con qué equipo y laboratorios trabajan?",
    a: "Contamos con equipo propio de campo, incluidos sonómetros clase 1 con certificado de calibración vigente para los estudios de ruido. La parte analítica se procesa en laboratorios acreditados, que es lo que da validez al resultado frente a la autoridad y ante un tercero en una transacción.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental, Seguridad y Salud",
    desc: "Evaluación del cumplimiento normativo de tu instalación antes o después de obtener la autorización de impacto ambiental.",
    href: "/servicios/auditoria-ambiental-seguridad-y-salud/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Estudios, Trámites y Administración de Autorizaciones",
    desc: "Gestión de LAU, COA, permisos CONAGUA y demás obligaciones operativas que se derivan de las condicionantes de tu autorización.",
    href: "/servicios/tramites-y-autorizaciones-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={22} />,
    title: "Servicios Legales y Atención de Autoridades",
    desc: "Representación y defensa jurídica cuando la autoridad emite resoluciones desfavorables, impone medidas correctivas o inicia procedimientos administrativos.",
    href: "/servicios/servicios-legales-y-atencion-de-autoridades/",
  },
  {
    color: "blue",
    icon: <Icon name="drone" size={22} />,
    title: "Estudios de viabilidad",
    desc: "Soluciones técnicas para el control de emisiones, tratamiento de aguas y manejo de residuos que forman parte de las condicionantes del estudio.",
    href: "/servicios/estudios-de-viabilidad/",
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
          background: "linear-gradient(180deg,var(--bg-1) 0%,var(--bg-2) 100%)",
          paddingTop: "clamp(56px,8vw,92px)", paddingBottom: "clamp(48px,7vw,84px)",
        }}
      >
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.22 }} aria-hidden="true">
          <defs>
            <pattern id="topoEstudios" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" style={{ stroke: "var(--irca-blue-100)" }} strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" style={{ stroke: "var(--irca-green-100)" }} strokeWidth="1" fill="none" />
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
            <Eyebrow color="var(--irca-blue-700)">Ingeniería Ambiental</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Caracterizar el sitio, medir el impacto y{" "}
              <span style={{ color: "var(--irca-green)" }}>diseñar la solución</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Evaluación de sitios contaminados bajo metodología ASTM y normativa mexicana, balance hídrico, huella de carbono, análisis de ciclo de vida y diseño ambiental.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Estudios que sostienen decisiones de inversión y de remediación: cuánto pasivo hay, qué tan grave es y qué se hace al respecto. No usamos plantillas.
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
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg-1)", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none" }}
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
            <div style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
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
                  { label: "Phase I/II", n: "5" },
                  { label: "Caracterización", n: "3" },
                  { label: "Balance hídrico", n: "2" },
                  { label: "Huella de carbono", n: "4" },
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
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Eyebrow>Sobre el Servicio</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
              Qué resuelve un estudio ambiental bien elaborado
            </h2>
            <Photo
              ratio="16/9"
              src="/images/servicios/ingenieria-ambiental/servicio-ingenieria-ambiental-irca.webp"
              alt="Trabajo de ingeniería ambiental de IRCA Consultores en campo"
            />
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              Un estudio ambiental responde con datos lo que de otro modo se decide por intuición: qué contaminación existe en un predio y hasta dónde llega, cuánta agua consume realmente una planta, cuánto carbono emite una operación o qué tan viable es una solución de tratamiento. De esa evidencia dependen decisiones caras —comprar o no un activo, remediar o litigar, invertir o rediseñar— y equivocarse ahí cuesta mucho más que el estudio.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores trabajamos con estándar internacional ASTM y con la normativa mexicana aplicable, equipo propio de campo y laboratorios acreditados. Y no nos detenemos en el diagnóstico: cuando el estudio revela un problema, diseñamos la solución técnica que sigue —remediación, tratamiento, confinamiento o control— con memoria de cálculo y viabilidad de ejecución.
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
              Estudios especializados, una sola firma
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Caracterización de sitio, remediación de suelos, diseño de plantas de tratamiento y de celdas de confinamiento, control de ruido, balance hídrico, huella de carbono y análisis de ciclo de vida, entre otros. Cada estudio responde a una normatividad y un proceso de revisión distintos; en proyectos complejos los coordinamos de forma simultánea.
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
                  background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 16,
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
      <section id="incluye" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Alcance del servicio</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-11">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              ¿Qué incluyen los estudios ambientales de IRCA Consultores?
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
              ¿Cuándo necesitas respaldo ambiental especializado?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Cuando una inversión, autorización u operación depende de información ambiental verificable.
              IRCA Consultores determina el estudio, trámite o evidencia técnica aplicable para reducir
              contingencias, retrasos y costos innecesarios.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Compra, venta o financiamiento de activos industriales.</CheckItem>
              <CheckItem>Investigación de contaminación en suelo o agua subterránea.</CheckItem>
              <CheckItem>Huella de carbono, ciclo de vida y reportes de sostenibilidad.</CheckItem>
              <CheckItem>Concesiones, descargas, reúso y balances hídricos.</CheckItem>
              <CheckItem>Diseño de sistemas de tratamiento, manejo o descontaminación.</CheckItem>
              <CheckItem>Monitoreo de emisiones, descargas y ruido para acreditar cumplimiento.</CheckItem>
              <CheckItem>Modelación ambiental en aire, agua y suelo.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Photo
              ratio="4/3"
              src="/images/servicios/ingenieria-ambiental/para-quien-es-ingenieria-ambiental.webp"
              alt="Trabajo de ingeniería ambiental de IRCA Consultores en campo"
            />
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
              <Photo
                ratio="16/9"
                src="/images/nosotros/sobre-la-empresa-irca.webp"
                alt="Equipo multidisciplinario de IRCA Consultores"
              />
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-2)", margin: 0 }}>
                IRCA Consultores es una firma de consultoría ambiental fundada en 1999, especializada en ingeniería ambiental y cumplimiento normativo. A lo largo de más de 25 años nos hemos consolidado como referente técnico-legal ambiental en el norte de México, con cobertura nacional y proyectos en sectores tan diversos como el industrial, minero, energético, acuícola, inmobiliario y gubernamental. Operamos en regla con lo que le exigimos a nuestros clientes: contamos con registro <strong style={{ color: "var(--fg-1)", fontWeight: 600 }}>REPSE</strong> ante la STPS y mantenemos vigentes los <strong style={{ color: "var(--fg-1)", fontWeight: 600 }}>Registros de Prestador de Servicios</strong> en materia ambiental y de seguridad e higiene en los estados donde operamos. Conjugamos rigor técnico con solidez jurídica para representar a nuestros clientes ante SEMARNAT, PROFEPA, CONAGUA, STPS y demás autoridades. Nuestro equipo multidisciplinario acompaña cada proyecto de principio a fin: del diagnóstico a la resolución.
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
          <Eyebrow color="rgba(255,255,255,0.7)">Por qué IRCA Consultores</Eyebrow>
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
      <section id="faq" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
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
                style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 22, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12 }}
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
        headline={<>Decidir sin datos sobre un sitio <span style={{ color: "var(--irca-green)" }}>siempre sale más caro</span>.</>}
        copy="Cuéntanos qué necesitas resolver —un predio con historial dudoso, una meta corporativa de carbono, un balance de agua o el diseño de una solución de tratamiento— y te orientamos sobre el estudio que corresponde y su alcance real."
        formTitle="Solicitar estudio ambiental"
        motivoLabel="Tipo de estudio requerido"
        motivoOptions={["Evaluación de sitio Phase I o II (ASTM)", "Caracterización de sitio contaminado", "Balance hídrico", "Huella de carbono / ciclo de vida", "Diseño ambiental (relleno, PTAR)", "Monitoreo de emisiones o ruido", "No estoy seguro / orientación general"]}
      />
    </>
  );
}
