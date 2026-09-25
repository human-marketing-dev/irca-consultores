import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Estudios de viabilidad",
  description: "Geología, geofísica, estabilidad de taludes, estudios hidrológicos y geohidrológicos, tránsito y vialidad, topografía, agua potable, alcantarillado y soluciones pluviales. IRCA Consultores, Monterrey.",
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

const projects = [
  { label: "Geohidrología — acuífero regional",     status: "En análisis",   palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "Estabilidad de taludes — corte 18 m",   status: "En ejecución",  palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Estudio hidrológico de cuenca",         status: "Entregado",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "Topografía y levantamiento UAV",        status: "Completado",    palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── fotogrametría y percepción remota ─────────────── */

const aplicacionesFotogrametria = [
  "Levantamientos topográficos y cartografía de precisión.",
  "Modelación de escurrimientos, cuencas y zonas inundables.",
  "Cálculo de superficies, pendientes, cortes, rellenos y volúmenes.",
  "Seguimiento del avance de obras y modificaciones del terreno.",
  "Evaluación de vegetación y cambios de uso de suelo.",
  "Inspección de infraestructura y detección de anomalías.",
  "Integración de información para estudios ambientales y proyectos ejecutivos.",
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M4 20l7-13 4 7 2-3 3 9"/>
      </svg>
    ),
    title: "Geología, geofísica y estabilidad de taludes",
    desc: "Caracterización del subsuelo mediante métodos geológicos y geofísicos —resistividad, sísmica de refracción, tomografía eléctrica— y análisis de estabilidad de taludes naturales y de corte, con factores de seguridad y medidas de estabilización.",
  },
  {
    color: "green",
    icon: <Icon name="droplet" size={24} />,
    title: "Estudios hidrológicos y geohidrológicos",
    desc: "Modelación de cuencas, cálculo de gastos de diseño y periodos de retorno, delimitación de zonas federales y estudios de acuífero: recarga, abatimiento y disponibilidad. Sustento técnico para concesiones de CONAGUA y para el diseño de obra hidráulica.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="12" rx="2"/><path d="M16 10h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>
      </svg>
    ),
    title: "Tránsito y vialidad",
    desc: "Aforos vehiculares, análisis de capacidad y nivel de servicio, y estudios de impacto vial para desarrollos que generan atracción de viajes. Documento requerido por autoridades municipales y estatales para autorizar proyectos de gran escala.",
  },
  {
    color: "green",
    icon: <Icon name="compass" size={24} />,
    title: "Topografía",
    desc: "Levantamientos topográficos con estación total y GNSS de precisión, poligonales, secciones, curvas de nivel y cálculo de volúmenes de corte y relleno. Apoyados en fotogrametría con UAV cuando la superficie o el acceso lo justifican.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-7 4 14 3-7h4"/>
      </svg>
    ),
    title: "Ingeniería de agua potable y alcantarillado sanitario",
    desc: "Diseño de redes de distribución y de recolección, líneas de conducción, tanques, rebombeos y cárcamos. Modelación hidráulica con memoria de cálculo y proyecto ejecutivo listo para revisión del organismo operador.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.9A5 5 0 0 1 7 6a6 6 0 0 1 11.5 1.5 4.5 4.5 0 0 1 .5 8.9"/><path d="M8 19l-1 3"/><path d="M12 19l-1 3"/><path d="M16 19l-1 3"/>
      </svg>
    ),
    title: "Soluciones pluviales e hidráulicas",
    desc: "Drenaje pluvial, obras de captación y conducción, lagunas de regulación, cruces y estructuras de descarga. Diseño dimensionado contra el evento de lluvia de proyecto, no contra la sección disponible.",
  },
  {
    color: "blue",
    icon: <Icon name="hardhat" size={24} />,
    title: "Proyecto ejecutivo y supervisión de obra",
    desc: "Planos constructivos, memorias de cálculo, especificaciones, catálogo de conceptos y volúmenes. Cuando el proyecto entra a construcción, podemos supervisar que se ejecute conforme al diseño autorizado.",
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
    title: "Equipamiento de campo y laboratorios acreditados",
    body: "Contamos con sonómetros, drones y equipos de medición y muestreo para obtener información rápida directamente en campo. Cuando el proyecto requiere análisis especializados o resultados con validez oficial, incorporamos laboratorios reconocidos en México, acreditados por la entidad mexicana de acreditación (ema) y, según el alcance, registrados o aprobados ante la Procuraduría Federal de Protección al Ambiente (PROFEPA). Así combinamos rapidez operativa con precisión analítica, cadena de custodia y respaldo técnico.",
  },
  {
    n: "04",
    title: "25 años de proyectos en el norte de México",
    body: "Desde PTAR en plantas alimentarias hasta remediación de sitios con derrames de hidrocarburos, estudios hidrológicos para parques industriales y levantamientos geoespaciales en zonas mineras. El catálogo de proyectos de IRCA Consultores en ingeniería ambiental es uno de los más amplios del mercado regional.",
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
    q: "¿Qué estudios especializados puede integrar IRCA Consultores?",
    a: "Coordinamos estudios de geología, geofísica, geotecnia, estabilidad de taludes, hidrología, hidrogeología, topografía, tránsito y vialidad. También integramos proyectos de agua potable, alcantarillado sanitario, drenaje pluvial y redes hidráulicas.",
  },
  {
    q: "¿Los estudios son realizados directamente por IRCA Consultores?",
    a: "IRCA Consultores define el alcance, coordina a los especialistas, revisa los resultados e integra cada disciplina al proyecto general. Cuando se requiere una especialidad externa, seleccionamos al proveedor conforme a su experiencia, capacidad técnica y responsabilidad profesional.",
  },
  {
    q: "¿Qué productos se obtienen mediante fotogrametría con drones?",
    a: "Según el objetivo del levantamiento, pueden generarse ortofotomosaicos georreferenciados, modelos digitales de elevación y superficie, nubes de puntos, curvas de nivel, modelos tridimensionales, cálculos de áreas y volúmenes, y cartografía para Sistemas de Información Geográfica (SIG).",
  },
  {
    q: "¿Cuándo conviene utilizar drones en lugar de topografía convencional?",
    a: "Los drones son especialmente útiles en superficies extensas, terrenos de difícil acceso, seguimiento de obras y proyectos que requieren información visual y altimétrica detallada. No siempre sustituyen a la topografía convencional: ambas técnicas pueden complementarse mediante puntos de control y verificación en campo.",
  },
  {
    q: "¿Qué precisión puede alcanzar un levantamiento con drones?",
    a: "La precisión depende de la altura de vuelo, el sensor, la resolución requerida, las condiciones del terreno, el posicionamiento GNSS y los puntos de control utilizados. Antes del levantamiento se define la precisión necesaria conforme al uso que tendrán los resultados.",
  },
  {
    q: "¿Para qué se utiliza la percepción remota?",
    a: "Permite identificar y comparar condiciones del terreno, cobertura vegetal, humedad, drenaje, cambios de uso de suelo y anomalías térmicas. Dependiendo del proyecto, se emplean sensores RGB, multiespectrales o térmicos.",
  },
  {
    q: "¿Los resultados pueden utilizarse para diseño, construcción o trámites?",
    a: "Sí, siempre que el levantamiento se planee desde el inicio conforme al uso previsto. IRCA Consultores define los entregables, sistemas de coordenadas, formatos, precisión y responsables técnicos necesarios para que la información sea compatible con el diseño, la autorización o la construcción.",
  },
  {
    q: "¿Los equipos de campo sustituyen los análisis de laboratorio?",
    a: "No. Los equipos de campo permiten obtener datos rápidos, orientar el muestreo y tomar decisiones preliminares. Cuando se requieren resultados analíticos o con validez oficial, incorporamos laboratorios acreditados por la entidad mexicana de acreditación (ema) y, según corresponda, aprobados o registrados ante la PROFEPA.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="flask" size={22} />,
    title: "Ingeniería Ambiental",
    desc: "Caracterización de sitios, balance hídrico y diseño ambiental que se apoyan en la ingeniería de soporte de esta área.",
    href: "/servicios/ingenieria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Estudios, Trámites y Administración de Autorizaciones",
    desc: "MIA, CUSTF y concesiones de agua que se sustentan en los estudios hidrológicos, geohidrológicos y topográficos.",
    href: "/servicios/tramites-y-autorizaciones-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="eye" size={22} />,
    title: "Consultoría, Administración y Supervisión Ambiental",
    desc: "Supervisión y vigilancia durante la ejecución de la obra proyectada, con seguimiento de condicionantes en campo.",
    href: "/servicios/consultoria-y-supervision-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental, Seguridad y Salud",
    desc: "Diagnóstico de cumplimiento que identifica qué obras o adecuaciones de ingeniería requiere tu instalación.",
    href: "/servicios/auditoria-ambiental-seguridad-y-salud/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function EstudiosDeIngenieria() {
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
            <pattern id="topoIng" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" style={{ stroke: "var(--irca-green-100)" }} strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" style={{ stroke: "var(--irca-blue-100)" }} strokeWidth="1" fill="none" />
              <path d="M0 11 Q11 2 22 11 T44 11"  style={{ stroke: "var(--irca-green-100)" }} strokeWidth="0.6" fill="none" />
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
            <Eyebrow>Estudios de viabilidad</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Ingeniería especializada para{" "}
              <span style={{ color: "var(--irca-green)" }}>completar tu proyecto</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              IRCA Consultores coordina e integra servicios elaborados por especialistas externos: geología, geofísica, geotecnia, estabilidad de taludes, hidrología, hidrogeología, topografía, tránsito y vialidad.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              También desarrollamos, mediante equipos especializados, proyectos de agua potable, alcantarillado sanitario, drenaje pluvial y redes hidráulicas.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Cada estudio se revisa e integra al proyecto general para asegurar que sea útil en el diseño, la autorización, la construcción y la toma de decisiones.
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
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg-1)", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, borderRadius: 10, textDecoration: "none" }}
              >
                Qué incluye
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              <span>Geología</span><span>Geotecnia</span><span>Hidrología</span><span>Topografía</span><span>Vialidad</span><span>Infraestructura hidráulica</span>
            </div>
          </div>

          {/* Projects status card */}
          <div className="hidden md:block">
            <div style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-green)", boxShadow: "0 0 0 4px var(--irca-green-50)" }} />
                Proyectos activos
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Estudios en campo y gabinete
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
                  { label: "Estudios hidrol.", n: "24" },
                  { label: "Taludes analiz.",  n: "16" },
                  { label: "Vuelos UAV",       n: "45+" },
                  { label: "Levant. topogr.",  n: "60+" },
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
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Eyebrow>Sobre el Servicio</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
              Ingeniería que resuelve el problema, no solo el expediente
            </h2>
            <Photo
              ratio="16/9"
              src="/images/servicios/estudios-de-viabilidad/servicio-estudios-viabilidad-irca.webp"
              alt="Levantamiento de campo para estudios de viabilidad de IRCA Consultores"
            />
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              Detrás de casi todo proyecto ambiental o de infraestructura hay una pregunta de ingeniería que alguien tiene que responder: cómo se comporta el subsuelo, cuánta agua escurre en una lluvia extraordinaria, si el talud aguanta, cuánto tránsito genera el desarrollo, por dónde va la red. Cuando esas respuestas se estiman en lugar de calcularse, el problema no aparece en el escritorio: aparece en obra o en la revisión de la autoridad.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores los estudios de ingeniería parten siempre del sitio: sondeos, levantamientos y aforos antes de abrir el software. Contamos con equipo propio de campo, estación total, GNSS y drones para fotogrametría, y entregamos memoria de cálculo y planos con el nivel de detalle que exige una revisión técnica —no un documento que sólo sirve para cumplir un requisito.
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

      {/* ── FOTOGRAMETRÍA Y PERCEPCIÓN REMOTA ─────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
        <div
          className="grid grid-cols-1 md:[grid-template-columns:1.05fr_0.95fr] gap-10 md:gap-16 items-start"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <div>
            <Eyebrow color="var(--irca-blue-700)">Fotogrametría y percepción remota</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
              Convertimos imágenes aéreas en información técnica para decidir
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 16px" }}>
              Realizamos levantamientos con drones para documentar terrenos, infraestructura y cambios en el territorio con alta resolución espacial. Procesamos la información obtenida para generar ortofotomosaicos georreferenciados, modelos digitales de elevación y superficie, nubes de puntos, curvas de nivel, cálculos volumétricos y cartografía integrada en Sistemas de Información Geográfica (SIG).
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Según las necesidades del proyecto, incorporamos sensores RGB, multiespectrales o térmicos para analizar cobertura vegetal, humedad, drenaje, anomalías térmicas y otras condiciones ambientales.
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.2, margin: "0 0 16px" }}>
              Aplicaciones
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {aplicacionesFotogrametria.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </div>
            <a
              href="/servicios/estudios-de-viabilidad/servicios-geoespaciales/"
              style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8, color: "var(--irca-blue-700)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}
            >
              Ver servicios geoespaciales <Icon name="arrow-right" size={16} />
            </a>
          </div>
          <div className="md:sticky md:top-24">
            <Photo
              ratio="16/9"
              src="/images/servicios/estudios-de-viabilidad/fotogrametria-y-percepcion-remota.webp"
              alt="Levantamiento con dron y ortofotomosaico georreferenciado de IRCA Consultores"
            />
          </div>
        </div>
      </section>

      {/* ── ALCANCE ───────────────────────────────────── */}
      <section id="incluye" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
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
              ¿Cuándo necesitas un estudio de ingeniería?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Los proyectos de ingeniería ambiental surgen tanto en contextos de cumplimiento regulatorio como de expansión, modernización o respuesta a contingencias. En todos los casos, la calidad técnica del proyecto define si la solución funciona —y si la autoridad la acepta.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Vas a construir sobre un terreno cuyo subsuelo no está caracterizado y necesitas saber qué hay debajo.</CheckItem>
              <CheckItem>Tienes un talud natural o de corte con señales de inestabilidad y requieres el factor de seguridad y su estabilización.</CheckItem>
              <CheckItem>La autoridad te pide un estudio hidrológico o de impacto vial para autorizar el proyecto.</CheckItem>
              <CheckItem>Necesitas un levantamiento topográfico georreferenciado o volúmenes de corte y relleno confiables.</CheckItem>
              <CheckItem>Vas a tramitar una concesión de agua subterránea y requieres el estudio geohidrológico que la sustente.</CheckItem>
              <CheckItem>Tu desarrollo requiere red de agua potable, alcantarillado sanitario o una solución de drenaje pluvial.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Photo
              ratio="4/3"
              src="/images/servicios/estudios-de-viabilidad/para-quien-es-estudios-viabilidad-irca.webp"
              alt="Levantamiento de campo para estudios de viabilidad de IRCA Consultores"
            />
          </div>
        </div>
      </section>

      {/* ── SOBRE IRCA ────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
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
      <section id="faq" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Preguntas frecuentes</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 36px", color: "var(--ink-1000)" }}>
            Preguntas frecuentes sobre estudios de ingeniería
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
        headline={<>Un proyecto sólido empieza <span style={{ color: "var(--irca-green)" }}>con los datos correctos del sitio</span>.</>}
        copy="Cuéntanos el reto técnico que tienes —subsuelo, taludes, escurrimientos, vialidad, topografía o red hidráulica— y definimos el estudio que corresponde y el trabajo de campo que implica."
        formTitle="Consultar estudio de ingeniería"
        motivoLabel="Tipo de proyecto"
        motivoOptions={["Geología, geofísica o taludes", "Estudio hidrológico", "Estudio geohidrológico", "Tránsito y vialidad", "Topografía / levantamiento UAV", "Agua potable y alcantarillado", "Soluciones pluviales", "Otro"]}
      />
    </>
  );
}
