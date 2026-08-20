import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Consultoría, Administración y Supervisión Ambiental",
  description: "Staff ambiental externo, supervisión y vigilancia en campo, seguimiento de términos y condicionantes de autorizaciones y control documental de obligaciones. IRCA Consultores, Monterrey.",
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

const nomItems = [
  { label: "Condicionantes MIA vigentes",        status: "Al día",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "COA — vence en 34 días",             status: "Próximo",    palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Informe de cumplimiento semestral",  status: "En proceso", palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "Bitácora de residuos — semana 32",   status: "Cerrada",    palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Consultoría y staff externo",
    desc: "Un especialista asignado a tu operación, con acompañamiento permanente y disponibilidad para resolver las decisiones ambientales del día a día. Funcionas con capacidad técnica propia sin sostener la estructura interna que eso implicaría.",
  },
  {
    color: "green",
    icon: <Icon name="eye" size={24} />,
    title: "Supervisión y vigilancia ambiental",
    desc: "Presencia en campo durante obra u operación para verificar que lo autorizado sea lo que efectivamente ocurre: manejo de residuos, control de emisiones y descargas, afectación a vegetación y fauna, y condiciones del frente de trabajo.",
  },
  {
    color: "blue",
    icon: <Icon name="check" size={24} stroke={2.2} />,
    title: "Seguimiento de términos y condicionantes",
    desc: "Cada autorización llega con condicionantes que hay que cumplir, documentar y reportar. Las traducimos en responsables, entregables y fechas, y damos seguimiento hasta que cada una queda acreditada ante la autoridad.",
  },
  {
    color: "green",
    icon: <Icon name="calendar" size={24} />,
    title: "Calendario de obligaciones",
    desc: "Todos tus vencimientos recurrentes —COA, informes, renovaciones, monitoreos, reportes de condicionantes— en un solo calendario regulatorio, con alertas anticipadas para que ninguna fecha se resuelva a última hora.",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={24} />,
    title: "Control documental del expediente",
    desc: "Resguardo ordenado de autorizaciones, licencias, bitácoras, manifiestos, reportes y evidencia de cumplimiento. Cuando llega una inspección, el expediente está completo y localizable, no disperso entre áreas.",
  },
  {
    color: "green",
    icon: <Icon name="shield-check" size={24} />,
    title: "Preparación permanente ante inspección",
    desc: "Revisiones periódicas del estado de cumplimiento y simulacros de inspección para detectar brechas antes que la autoridad. El objetivo es que una visita no requiera preparación extraordinaria.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Continuidad, no intervenciones aisladas",
    body: "El incumplimiento rara vez nace de un error grave: nace de un vencimiento que nadie vio, un condicionante que quedó sin evidencia o una bitácora que dejó de llenarse. La supervisión continua ataca exactamente ese tipo de fallas.",
  },
  {
    n: "02",
    title: "El mismo equipo que tramitó, supervisa",
    body: "Quien gestionó tu autorización conoce sus condicionantes de memoria. Eso elimina la curva de aprendizaje y evita que el seguimiento se convierta en una relectura del resolutivo cada trimestre.",
  },
  {
    n: "03",
    title: "Respaldo técnico y jurídico inmediato",
    body: "Si aparece un requerimiento, una inspección o una controversia, no hay que contratar a nadie ni explicar el historial desde cero. El área legal ya tiene el expediente y el contexto operativo.",
  },
  {
    n: "04",
    title: "Costo previsible frente a estructura interna",
    body: "Un esquema de acompañamiento cuesta una fracción de un área ambiental propia y te da acceso a especialistas en impacto, residuos, agua, aire y derecho ambiental sin contratar a cada uno.",
  },
  {
    n: "05",
    title: "Evidencia lista, no reconstruida",
    body: "Documentamos el cumplimiento conforme ocurre. Cuando la autoridad lo pide, la evidencia ya existe con su fecha y su respaldo, en lugar de armarse contra reloj cuando llega el requerimiento.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿En qué se diferencia de contratar servicios por proyecto?",
    a: "Un servicio por proyecto termina cuando se entrega el estudio o se obtiene el permiso. La consultoría y supervisión es un acompañamiento continuo: sostiene el cumplimiento después de la autorización, que es justamente donde se acumula la mayoría de los incumplimientos. No sustituye a los servicios por proyecto, los administra en el tiempo.",
  },
  {
    q: "¿Sustituye a nuestro personal ambiental interno?",
    a: "Puede operar de las dos formas. En empresas sin área ambiental, funcionamos como esa área. En empresas que ya tienen personal, trabajamos como respaldo especializado: aportamos las disciplinas que no están cubiertas internamente y liberamos al equipo de la carga documental y de seguimiento.",
  },
  {
    q: "¿Con qué frecuencia hay presencia en sitio?",
    a: "Depende del riesgo y la etapa. Una obra con condicionantes activas puede requerir supervisión semanal o permanente durante el frente de trabajo; una planta en operación estable suele resolverse con visitas mensuales y seguimiento remoto. La frecuencia se define en el alcance y se ajusta si cambian las condiciones.",
  },
  {
    q: "¿Qué pasa si llega una inspección durante el acompañamiento?",
    a: "Atendemos la visita contigo. El expediente ya está integrado y conocemos el estado de cada obligación, lo que permite responder en el momento en lugar de pedir prórrogas. Si el asunto deriva en un procedimiento, el área legal lo toma con todo el contexto documentado.",
  },
  {
    q: "¿Se puede contratar solo la supervisión de obra?",
    a: "Sí. La supervisión y vigilancia ambiental de obra es un alcance frecuente por sí solo, sobre todo cuando la MIA impone condicionantes de rescate de flora y fauna, manejo de residuos de construcción o control de emisiones durante la ejecución.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="file-text" size={22} />,
    title: "Estudios, Trámites y Administración de Autorizaciones",
    desc: "Obtención de las autorizaciones cuyos términos y condicionantes damos seguimiento durante toda su vigencia.",
    href: "/servicios/tramites-y-autorizaciones-ambientales/",
  },
  {
    color: "blue",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Línea base de cumplimiento con la que arranca el acompañamiento: qué se cumple, qué no y qué riesgo representa cada brecha.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={22} />,
    title: "Servicios Legales y Atención de Autoridades",
    desc: "Respaldo jurídico inmediato cuando una inspección o un requerimiento escala a procedimiento administrativo.",
    href: "/servicios/servicios-legales-y-atencion-de-autoridades/",
  },
  {
    color: "blue",
    icon: <Icon name="graduation-cap" size={22} />,
    title: "Capacitación Técnica Especializada",
    desc: "Formación del personal interno para que el cumplimiento se sostenga desde la operación y no dependa solo del consultor.",
    href: "/servicios/capacitacion-tecnica-especializada/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function ConsultoriaYSupervisionAmbiental() {
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
            <pattern id="topoSHE" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#DCEFCB" strokeWidth="1" fill="none" />
              <path d="M0 11 Q11 2 22 11 T44 11"  stroke="#C7E2F0" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoSHE)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow>Consultoría, Administración y Supervisión Ambiental</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Tu área ambiental externa: el cumplimiento{" "}
              <span style={{ color: "var(--irca-green)" }}>se sostiene</span>{" "}
              después del permiso.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Acompañamiento permanente, supervisión en campo y control de los compromisos adquiridos ante la autoridad. Staff especializado sin el costo de un área interna.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              La mayoría de los incumplimientos no ocurre al tramitar, sino después: un condicionante sin evidencia, un informe que no se presentó, un vencimiento que nadie vio. Ahí es donde trabajamos.
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
              <span>STPS</span><span>ISO 45001</span><span>NOM-004</span><span>NOM-017</span><span>NOM-027</span>
            </div>
          </div>

          {/* NOM compliance card */}
          <div className="hidden md:block">
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-green)", boxShadow: "0 0 0 4px var(--irca-green-50)" }} />
                Diagnóstico NOM-STPS
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Estado de cumplimiento por norma
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {nomItems.map(({ label, status, palette }) => (
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
                  { label: "NOM auditadas", n: "12" },
                  { label: "Cumplimiento",  n: "89%" },
                  { label: "PPA activos",   n: "6"   },
                  { label: "CMSH vigentes", n: "11"  },
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
              Cumplimiento NOM-STPS que se sostiene más allá de la inspección
            </h2>
            <ImgPlaceholder
              ratio="16/9"
              label="Supervisión ambiental en campo"
              sub="Reemplazar con foto real del equipo supervisando obra, verificando condicionantes o revisando bitácoras en sitio."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              Obtener la autorización es el principio, no el final. Cada resolutivo llega con términos y condicionantes que deben cumplirse, documentarse y reportarse durante toda la vida del proyecto. Cuando nadie administra ese seguimiento, el expediente se degrada en silencio: informes que no se presentaron, evidencia que no se levantó, vencimientos que pasaron. La instalación opera creyendo que cumple porque en su momento obtuvo el permiso.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores operamos como el área ambiental de tu empresa: un especialista asignado, supervisión en campo cuando la operación lo exige, un calendario vivo de obligaciones y un expediente ordenado que se actualiza conforme ocurren los hechos. Cuando llega una inspección o un requerimiento, la evidencia ya existe —con su fecha y su respaldo— en lugar de reconstruirse contra reloj.
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

      {/* ── ALCANCE ───────────────────────────────────── */}
      <section id="incluye" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Alcance del servicio</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-11">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              ¿Qué incluye el servicio SHE / EHS?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              El alcance se define según la etapa del proyecto, el número de instalaciones y la carga de condicionantes vigentes. Puede ir del seguimiento documental remoto hasta la supervisión permanente de un frente de obra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {alcanceCards.map(({ color, icon, title, desc }) => (
              <article
                key={title}
                style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 14 }}
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>Cada instalación tiene su propio perfil de riesgo</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>Cuéntanos tu sector y número de trabajadores y hacemos un diagnóstico inicial sin costo.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Solicitar diagnóstico <Icon name="arrow-right" size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── ¿CUÁNDO? ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
        <div
          className="grid grid-cols-1 md:[grid-template-columns:1.05fr_0.95fr] gap-10 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <div>
            <Eyebrow>Para quién es</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
              Cuándo conviene un esquema de acompañamiento continuo
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              No es un servicio para grandes corporativos únicamente. Aplica a cualquier operación con autorizaciones vigentes, condicionantes que cumplir u obligaciones recurrentes que hoy dependen de que alguien se acuerde. Es especialmente recomendable en estos escenarios:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>No tienes un área ambiental interna y las obligaciones se reparten entre personas que ya tienen otras funciones.</CheckItem>
              <CheckItem>Obtuviste una MIA o una autorización con condicionantes y nadie está dando seguimiento formal a su cumplimiento.</CheckItem>
              <CheckItem>Vas a ejecutar una obra que requiere supervisión y vigilancia ambiental durante todo el frente de trabajo.</CheckItem>
              <CheckItem>Operas varias instalaciones y no tienes visibilidad consolidada de qué cumple cada una y con qué vigencia.</CheckItem>
              <CheckItem>Ya te pasó que un vencimiento se resolvió a última hora o de plano se dejó pasar.</CheckItem>
              <CheckItem>Tu corporativo o tus clientes te piden evidencia periódica de cumplimiento ambiental y hoy armarla toma semanas.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Expediente y calendario de obligaciones"
              sub="Reemplazar con foto real del equipo en revisión documental, junta de seguimiento o verificación de condicionantes."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: 0 }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
        </div>
      </section>

      {/* ── SOBRE IRCA ────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--irca-green-50)" }}>
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>Cumplimiento en papel no resiste una inspección técnica detallada.</div>
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
            Preguntas frecuentes sobre consultoría y supervisión ambiental
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
        headline={<>Deja de perseguir vencimientos: <span style={{ color: "var(--irca-green)" }}>que alguien los administre</span> por ti.</>}
        copy="Cuéntanos cuántas instalaciones tienes, qué autorizaciones están vigentes y cómo llevas hoy el seguimiento. Con eso definimos el alcance del acompañamiento y su periodicidad."
        formTitle="Solicitar acompañamiento ambiental"
        motivoLabel="Necesidad principal"
        motivoOptions={["Staff ambiental externo", "Supervisión y vigilancia de obra", "Seguimiento de condicionantes", "Calendario de obligaciones", "Control documental del expediente", "Varias instalaciones", "Otro"]}
      />
    </>
  );
}
