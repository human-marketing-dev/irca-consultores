import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Ingeniería Ambiental",
  description: "Diseño de PTAR, remediación de suelos, control de ruido NOM-081, monitoreo ambiental, levantamientos con drones y proyectos hidrológicos y geofísicos. Ingeniería ambiental especializada en México. IRCA Consultores.",
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

const projects = [
  { label: "PTAR industria alimentaria 120 m³/día",  status: "En operación",    palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "Remediación suelos — derrame HC",         status: "En ejecución",   palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Monitoreo ruido NOM-081 Hunter Douglas",  status: "Completado",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "Levantamiento UAV cuenca hidrológica",    status: "En análisis",    palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
];

/* ── subservicios ───────────────────────────────────── */

const subservicios = [
  {
    href: "/servicios/ingenieria-ambiental/remediacion-de-suelos-contaminados/",
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/>
        <path d="M12 2v20"/>
      </svg>
    ),
    label: "Alta intención comercial",
    title: "Remediación de Suelos Contaminados",
    desc: "Evaluación del sitio contaminado, diseño de la estrategia de remediación (biorremediación, extracción de vapores, excavación), supervisión de trabajos y verificación del cumplimiento ante la autoridad.",
  },
  {
    href: "/servicios/ingenieria-ambiental/control-de-ruido-perimetral/",
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    ),
    label: "NOM-081-SEMARNAT · Sonometría",
    title: "Control de Ruido Perimetral (NOM-081)",
    desc: "Monitoreo de ruido perimetral con sonómetros de precisión y modelación acústica. Clientes como Hunter Douglas, Prolec, Novocast y Vitromex. Diagnóstico, plan de mitigación y verificación de cumplimiento.",
  },
  {
    href: "/servicios/ingenieria-ambiental/servicios-geoespaciales/",
    color: "green",
    icon: <Icon name="drone" size={24} />,
    label: "UAV · DEM · Ortofotomosaico · SIG",
    title: "Servicios Geoespaciales y Drones",
    desc: "Levantamientos fotogramétricos con drones (UAV), generación de Modelos Digitales de Elevaciones, ortofotomosaicos, curvas de nivel y capas SIG para proyectos ambientales, hidrológicos y de obra civil.",
  },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
    title: "Plantas de Tratamiento de Aguas Residuales (PTAR)",
    desc: "Diseño, ingeniería de detalle y supervisión de obra de PTAR municipales e industriales. Selección de tecnología según caudal, carga contaminante y parámetros de descarga requeridos por CONAGUA o por el sistema de alcantarillado receptor.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Celdas de confinamiento sanitarias e industriales",
    desc: "Diseño y supervisión de celdas de confinamiento para residuos sólidos urbanos y residuos industriales no peligrosos: geomembrana, lixiviados, gas, cobertura y control perimetral. Cumplimiento de NOM-083 y NOM-161.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    ),
    title: "Estudios y modelos de control de ruido (NOM-081)",
    desc: "Monitoreo de ruido perimetral bajo NOM-081-SEMARNAT con sonómetros de precisión calibrados, modelación acústica y diseño de barreras o medidas de mitigación. Informes con validez regulatoria ante SEMARNAT.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>
      </svg>
    ),
    title: "Monitoreo de calidad del aire, agua y suelo",
    desc: "Campañas de muestreo y análisis en campo y laboratorio para calidad del aire (emisiones, inmisiones), aguas superficiales y subterráneas, y suelos. Incluye diseño de la red de muestreo, cadena de custodia y reporte técnico.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>
        <path d="M6.6 8.4A7 7 0 0 0 5 12"/><path d="M17.4 8.4A7 7 0 0 1 19 12"/>
      </svg>
    ),
    title: "Forestación, reforestación y rescate de flora y fauna",
    desc: "Programas de rescate y reubicación de flora y fauna silvestres previos a obras con impacto ambiental, reforestación con especies nativas, viveros temporales y seguimiento de indicadores de supervivencia conforme a la autorización de la MIA.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Obra civil en ingeniería ambiental",
    desc: "Supervisión de trabajos de obra civil asociados a proyectos ambientales: zanjas de conducción, tanques de ecualización, estructuras de retención, bermas de contención, canales de escurrimiento y obras de estabilización de taludes.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: "Proyectos hidrológicos, geológicos y geofísicos",
    desc: "Estudios hidrológicos e hidráulicos para determinación de gastos de diseño y zonas de inundación, caracterización geológica y estructural del sitio, y prospección geofísica (sísmica, eléctrica, electromagnética) para evaluaciones de suelo y subsuelo.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Diseño propio, no especificaciones genéricas",
    body: "Cada proyecto de ingeniería ambiental es único: el caudal de la PTAR, el contaminante del suelo, el perfil de ruido de la planta. Dimensionamos desde cero con los datos reales de cada sitio, no adaptamos una solución de catálogo al problema del cliente.",
  },
  {
    n: "02",
    title: "Supervisión de obra con criterio ambiental",
    body: "Diseñar bien no es suficiente si la obra se ejecuta sin control técnico. Nuestro equipo supervisa la construcción de PTAR, celdas de confinamiento y obras de contención con el mismo rigor que el diseño —verificando materiales, procedimientos y tolerancias.",
  },
  {
    n: "03",
    title: "Equipamiento propio: sonómetros, drones, laboratorio de campo",
    body: "No dependemos de terceros para los monitoreos. Contamos con sonómetros de precisión para NOM-081, drones de levantamiento fotogramétrico y equipos de muestreo de agua, aire y suelo. Eso reduce tiempos, costos y la incertidumbre sobre la cadena de custodia.",
  },
  {
    n: "04",
    title: "25 años de proyectos en el norte de México",
    body: "Desde PTAR en plantas alimentarias hasta remediación de sitios con derrames de hidrocarburos, estudios hidrológicos para parques industriales y levantamientos geoespaciales en zonas mineras. El catálogo de proyectos de IRCA en ingeniería ambiental es uno de los más amplios del mercado regional.",
  },
  {
    n: "05",
    title: "Integración con el cumplimiento regulatorio",
    body: "Una PTAR bien diseñada solo es valiosa si cumple los parámetros de descarga de CONAGUA. Un estudio de ruido solo es útil si su metodología resiste una inspección de SEMARNAT. Diseñamos siempre con el marco normativo en vista, no como requisito adicional.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Qué tecnologías de tratamiento de aguas residuales usan para diseñar una PTAR?",
    a: "La selección de tecnología depende del caudal, la composición del agua residual (DBO, DQO, sólidos, nitrógeno, grasas), el espacio disponible y los parámetros de descarga exigidos. Trabajamos con sistemas de lodos activados, reactores biológicos de membrana (MBR), lagunas de oxidación, sistemas anaerobios (UASB, biodigestores) y tratamientos fisicoquímicos. El diseño parte siempre de una caracterización del afluente y de la normatividad de descarga aplicable.",
  },
  {
    q: "¿Cuánto tarda un proyecto de remediación de suelos contaminados?",
    a: "El plazo varía enormemente según el tipo y extensión de la contaminación, la tecnología seleccionada y los criterios de cierre exigidos por la autoridad. Una remediación por excavación de un sitio pequeño puede completarse en semanas; un proceso de biorremediación in situ de un derrame histórico de hidrocarburos puede requerir meses o años. El primer paso es siempre una Evaluación de Sitio (Fase II) que delimita el volumen de material contaminado y define la estrategia más efectiva.",
  },
  {
    q: "¿Qué mide el estudio de ruido bajo NOM-081-SEMARNAT y cuándo es obligatorio?",
    a: "La NOM-081 establece los límites máximos de emisión de ruido en el entorno inmediato de instalaciones industriales, medidos en los linderos del predio receptor. La norma fija límites diferenciados por horario (diurno/nocturno) y tipo de zona (habitacional, mixta, comercial, industrial). Es exigible cuando una autoridad ambiental —federal o estatal— lo solicita en el contexto de una LAU, una MIA, una denuncia vecinal o una visita de inspección. En IRCA realizamos el monitoreo con sonómetros de tipo 1 y elaboramos el informe con el formato que la autoridad acepta.",
  },
  {
    q: "¿Para qué sirven los levantamientos con drones en proyectos ambientales?",
    a: "Los vuelos UAV permiten obtener en horas lo que antes requería semanas de topografía tradicional: modelos digitales de elevaciones, ortofotomosaicos de alta resolución, curvas de nivel y mapas de cobertura vegetal. En proyectos ambientales los usamos para delimitación de zonas de inundación, cálculo de volúmenes de excavación en remediaciones, seguimiento de obras de confinamiento, reconocimiento de vegetación para ETJ y MIA, y monitoreo de avance de reforestaciones.",
  },
  {
    q: "¿En qué se diferencian los estudios hidrológicos y geofísicos que realizan?",
    a: "Los estudios hidrológicos calculan el comportamiento del agua en superficie: cuánto escurre, con qué velocidad, cuáles son los caudales de diseño para una obra de drenaje o un sistema de retención. Los estudios geofísicos investigan el subsuelo sin excavar: mediante métodos sísmicos, de resistividad eléctrica o electromagnéticos podemos identificar la profundidad del nivel freático, zonas de fractura, la extensión de un plume de contaminación o la estabilidad de un sitio para una obra de confinamiento. Los dos estudios son frecuentemente complementarios en proyectos de remediación y obra civil ambiental.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="flask" size={22} />,
    title: "Estudios Ambientales",
    desc: "MIA, ERA y ETJ que soportan técnicamente los proyectos de ingeniería ambiental ante SEMARNAT, CONAFOR y CONAGUA.",
    href: "/servicios/estudios-ambientales/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Trámites y Licencias Ambientales",
    desc: "Gestión de concesiones CONAGUA para aprovechamiento de agua, permisos de descarga y autorizaciones de obra.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Diagnóstico técnico que identifica los proyectos de ingeniería necesarios para cerrar brechas de cumplimiento.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="scale" size={22} />,
    title: "Derecho Ambiental",
    desc: "Defensa jurídica cuando un proyecto de remediación o una PTAR son objeto de un procedimiento ante la autoridad.",
    href: "/servicios/derecho-ambiental/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function IngenieriaAmbiental() {
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
            <pattern id="topoIng" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#DCEFCB" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#C7E2F0" strokeWidth="1" fill="none" />
              <path d="M0 11 Q11 2 22 11 T44 11"  stroke="#DCEFCB" strokeWidth="0.6" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoIng)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow>Ingeniería Ambiental</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Ingeniería ambiental aplicada:{" "}
              <span style={{ color: "var(--irca-green)" }}>PTAR, remediación, ruido y geoespacial</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Diseño, construcción y supervisión de soluciones de ingeniería ambiental: desde plantas de tratamiento de aguas residuales hasta levantamientos fotogramétricos con drones y proyectos de remediación de suelos.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Cada proyecto parte de los datos reales del sitio, no de soluciones de catálogo. Y cada entregable está diseñado para resistir el escrutinio de la autoridad ambiental.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "14px 26px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)" }}
              >
                Solicitar información <Icon name="arrow-right" size={17} />
              </a>
              <a
                href="#incluye"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none" }}
              >
                Qué incluye
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              <span>PTAR</span><span>NOM-081</span><span>Remediación</span><span>UAV · SIG</span>
            </div>
          </div>

          {/* Projects status card */}
          <div className="hidden md:block">
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-green)", boxShadow: "0 0 0 4px var(--irca-green-50)" }} />
                Proyectos activos
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Ingeniería en campo y gabinete
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {projects.map(({ label, status, palette }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-2)" }}>{label}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 9px", borderRadius: 999, background: palette.bg, color: palette.fg, fontSize: 11, fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: palette.fg }} /> {status}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "14px 0" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { label: "PTAR diseñadas", n: "18" },
                  { label: "Sitios remediad.", n: "12" },
                  { label: "Vuelos UAV",      n: "45+" },
                  { label: "Estudios ruido",  n: "30+" },
                ].map(({ label, n }) => (
                  <div key={label} style={{ background: "var(--bg-2)", borderRadius: 10, padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "var(--fg-3)", fontWeight: 500 }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", color: "var(--irca-green)" }}>{n}</span>
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
              Ingeniería que resuelve el problema, no solo el expediente
            </h2>
            <ImgPlaceholder
              ratio="16/9"
              label="Proyecto de ingeniería ambiental / trabajo de campo"
              sub="Reemplazar con foto real de PTAR, remediación en sitio, monitoreo de ruido o vuelo con dron."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              En ingeniería ambiental la distancia entre el papel y el campo puede ser enorme. Una PTAR bien diseñada en gabinete que no toma en cuenta la variabilidad estacional del afluente, un estudio de ruido hecho con equipo sin calibrar o una remediación dimensionada sin caracterizar realmente la extensión del plume son proyectos que no funcionan —y que pueden generar más problemas regulatorios de los que resuelven.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores la ingeniería ambiental parte siempre del sitio: muestreos, caracterizaciones, levantamientos y recorridos de campo antes de abrir el software de diseño. Contamos con laboratorio propio de campo, equipos de monitoreo calibrados, drones para levantamientos geoespaciales y 25 años de proyectos ejecutados en el norte de México —desde pequeñas PTAR industriales hasta grandes proyectos de remediación y obras de confinamiento.
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

      {/* ── ESPECIALIDADES (subservicios) ─────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Especialidades destacadas</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              Tres servicios con página propia por su profundidad técnica
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Remediación de suelos, control de ruido y servicios geoespaciales son disciplinas con equipamiento propio, metodología específica y clientes que buscan exactamente esa especialidad —merecen su propio espacio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subservicios.map(({ href, color, icon, label, title, desc }) => (
              <a
                key={href}
                href={href}
                style={{ display: "flex", flexDirection: "column", gap: 16, background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 28, boxShadow: "var(--shadow-1)", textDecoration: "none" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                    color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ display: "inline-block", padding: "2px 8px", borderRadius: 999, background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)", color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                      {label}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", color: "var(--fg-1)", margin: 0, lineHeight: 1.2 }}>{title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)", fontWeight: 600, fontSize: 14, marginTop: "auto" }}>
                  Ver servicio <Icon name="arrow-right" size={14} />
                </div>
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
              ¿Qué proyectos de ingeniería ambiental realizamos?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Cubrimos el espectro completo de la ingeniería ambiental aplicada: tratamiento de agua, confinamiento de residuos, control acústico, monitoreo, vegetación y obra civil con criterio ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {alcanceCards.map(({ color, icon, title, desc }) => (
              <article
                key={title}
                style={{ background: "var(--bg-2)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 14 }}
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
            <article style={{ background: "linear-gradient(160deg,var(--bg-deep),#0f2c47)", border: "1px solid var(--bg-deep)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>El diseño empieza siempre en el campo</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>Cuéntanos el problema técnico y hacemos una visita de reconocimiento inicial sin costo.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Solicitar información <Icon name="arrow-right" size={16} />
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
            <Eyebrow>Para quién es</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
              ¿Cuándo necesita tu empresa ingeniería ambiental?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Los proyectos de ingeniería ambiental surgen tanto en contextos de cumplimiento regulatorio como de expansión, modernización o respuesta a contingencias. En todos los casos, la calidad técnica del proyecto define si la solución funciona —y si la autoridad la acepta.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Tu instalación genera aguas residuales y CONAGUA requiere que cumplas parámetros de descarga.</CheckItem>
              <CheckItem>Ocurrió un derrame de hidrocarburos u otro contaminante y necesitas una evaluación de daño y plan de remediación.</CheckItem>
              <CheckItem>Recibiste quejas de vecinos por ruido y la autoridad ambiental te requirió un estudio bajo NOM-081.</CheckItem>
              <CheckItem>Tu proyecto de construcción requiere un levantamiento topográfico georreferenciado o un modelo de cuenca para la MIA.</CheckItem>
              <CheckItem>Tu autorización ambiental incluye compromisos de reforestación o rescate de flora y fauna que debes ejecutar y documentar.</CheckItem>
              <CheckItem>Necesitas caracterizar el subsuelo de un sitio para diseñar una obra de confinamiento o evaluar la extensión de una contaminación.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Trabajo de campo / levantamiento / monitoreo"
              sub="Reemplazar con foto real de campo: monitoreo de ruido, vuelo con dron, muestreo de suelo o supervisión de PTAR."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: 0 }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
        </div>
      </section>

      {/* ── SOBRE IRCA ────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:[grid-template-columns:0.9fr_1.1fr] gap-10 md:gap-16 items-center">
            <div>
              <Eyebrow>Sobre la empresa</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
                Sobre IRCA Consultores
              </h2>
              <div style={{ border: "1.5px dashed var(--irca-green-700)", borderRadius: 14, background: "var(--bg-2)", aspectRatio: "4/3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "var(--fg-4)", textAlign: "center", padding: 24 }}>
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
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>Una solución diseñada en gabinete sin datos de campo es una apuesta.</div>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "12px 20px", fontWeight: 600, fontSize: 14, borderRadius: 8, textDecoration: "none", alignSelf: "flex-start" }}>
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
            Preguntas frecuentes sobre ingeniería ambiental
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
        headline={<>Los mejores proyectos de ingeniería ambiental empiezan <span style={{ color: "var(--irca-green)" }}>con los datos correctos del sitio</span>.</>}
        copy="Cuéntanos el reto técnico que tienes —tratamiento de agua, contaminación de suelo, ruido, levantamiento o monitoreo— y hacemos una evaluación inicial sin compromiso."
        formTitle="Consultar proyecto de ingeniería ambiental"
        motivoLabel="Tipo de proyecto"
        motivoOptions={["PTAR / Tratamiento de aguas residuales", "Remediación de suelos contaminados", "Control de ruido (NOM-081)", "Monitoreo de calidad ambiental", "Levantamiento geoespacial / UAV", "Proyecto hidrológico o geofísico", "Forestación / Rescate de flora y fauna", "Otro"]}
      />
    </>
  );
}
