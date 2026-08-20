import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Estudios de Seguridad y Salud",
  description: "Estudios de riesgos laborales y de equipos, manejo de sustancias peligrosas, metodologías SMART y DuPont y estándares ISO 45001 para operaciones industriales. IRCA Consultores, Monterrey.",
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
  { label: "Riesgo mecánico — prensa hidráulica", status: "Crítico",  palette: { bg: "var(--danger-bg)",  fg: "var(--danger)"  } },
  { label: "Exposición a sílice — área de corte", status: "Alto",     palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Trabajo en altura — mantenimiento",   status: "Medio",    palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "Almacén de sustancias — controlado",  status: "Aceptable",palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: <Icon name="alert-triangle" size={24} />,
    title: "Estudio de riesgos laborales",
    desc: "Identificación y evaluación sistemática de los riesgos por puesto y por área: mecánicos, eléctricos, químicos, ergonómicos, físicos y psicosociales. Cada riesgo se jerarquiza por probabilidad y severidad para definir qué se controla primero.",
  },
  {
    color: "green",
    icon: <Icon name="hardhat" size={24} />,
    title: "Análisis de equipos y maquinaria",
    desc: "Revisión de guardas, dispositivos de paro, sistemas de bloqueo y etiquetado, y condiciones de operación de maquinaria y equipo crítico. Determinamos qué equipos representan riesgo real y qué control técnico corresponde a cada uno.",
  },
  {
    color: "blue",
    icon: <Icon name="flask" size={24} />,
    title: "Manejo de sustancias químicas peligrosas",
    desc: "Inventario, clasificación y evaluación de la exposición a sustancias peligrosas: compatibilidades de almacenamiento, señalización, hojas de datos de seguridad, controles de ingeniería y equipo de protección requerido por tipo de agente.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>
      </svg>
    ),
    title: "Metodologías de cumplimiento (SMART, DuPont)",
    desc: "Aplicación de marcos reconocidos internacionalmente para medir madurez en seguridad y estructurar el plan de mejora. La metodología se elige según el punto de partida de la operación y el objetivo del corporativo.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Estándares internacionales ISO 45001",
    desc: "Evaluación del sistema de gestión de seguridad y salud contra los requisitos de ISO 45001:2018, con identificación de brechas y ruta de cierre. Base técnica para quien busca certificarse o sostener una certificación existente.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 6h10"/><path d="M11 12h10"/><path d="M11 18h10"/>
        <path d="M3 6l1.5 1.5L6 5"/><path d="M3 12l1.5 1.5L6 11"/><path d="M3 18l1.5 1.5L6 17"/>
      </svg>
    ),
    title: "Plan de control priorizado",
    desc: "El estudio no termina en el diagnóstico: cada riesgo relevante se traduce en un control concreto —de ingeniería, administrativo o de protección personal— con responsable, plazo y criterio de verificación.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Riesgo evaluado sobre el proceso real",
    body: "Un estudio de riesgos que se resuelve con una plantilla genérica describe una planta que no existe. Recorremos la operación, observamos las tareas como se ejecutan y evaluamos el riesgo sobre esa realidad, no sobre el procedimiento escrito.",
  },
  {
    n: "02",
    title: "Metodologías reconocidas, no criterios propios",
    body: "Trabajamos con marcos auditables —SMART, DuPont, ISO 45001— para que el resultado sea comparable, defendible ante un corporativo o un cliente, y sostenible entre una evaluación y la siguiente.",
  },
  {
    n: "03",
    title: "Jerarquía de controles aplicada con criterio",
    body: "El equipo de protección personal es el último recurso, no el primero. Proponemos controles de ingeniería y administrativos cuando son viables, y lo justificamos técnicamente frente al costo de implementación.",
  },
  {
    n: "04",
    title: "Lectura conjunta con el riesgo ambiental",
    body: "El manejo de sustancias, las emisiones y los residuos peligrosos son a la vez un problema laboral y ambiental. Evaluarlos con un solo equipo evita conclusiones que se contradicen entre el expediente de STPS y el de SEMARNAT.",
  },
  {
    n: "05",
    title: "Del estudio a la implementación",
    body: "Podemos acompañar el cierre de los controles identificados a través de nuestros servicios de auditoría de seguimiento y capacitación técnica, sin que tengas que explicar el diagnóstico a un proveedor nuevo.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿En qué se diferencia del servicio de auditoría de seguridad y salud?",
    a: "La auditoría mide cumplimiento: contrasta tu operación contra las NOM-STPS y los estándares aplicables para decir qué cumples y qué no. El estudio analiza riesgo: identifica qué puede lastimar a alguien, con qué probabilidad y severidad, y qué control corresponde. Es frecuente hacer ambos, pero responden preguntas distintas.",
  },
  {
    q: "¿Qué son las metodologías SMART y DuPont?",
    a: "Son marcos de referencia internacionales para evaluar y desarrollar la gestión de seguridad. El modelo DuPont —conocido por la Curva de Bradley— mide la madurez cultural en seguridad, desde el cumplimiento reactivo hasta la interdependencia entre trabajadores. Los criterios tipo SMART se usan para que cada acción del plan sea específica, medible, alcanzable, relevante y con fecha. Se eligen según el punto de partida y el objetivo del cliente.",
  },
  {
    q: "¿El estudio sirve para una inspección de la STPS?",
    a: "Sirve como sustento técnico. Varias NOM —entre ellas las de maquinaria, sustancias químicas y equipo de protección personal— exigen un análisis de riesgos documentado como base de las medidas adoptadas. Un estudio bien hecho es justamente esa evidencia. Aun así, la preparación integral para inspección corresponde al servicio de auditoría y diagnóstico.",
  },
  {
    q: "¿Cuánto tiempo toma un estudio de riesgos?",
    a: "Depende del número de puestos, áreas y equipos críticos. Tras un recorrido inicial de alcance podemos dar un tiempo estimado realista. Lo determinante no es el tamaño de la planta sino la diversidad de procesos: una operación con muchas tareas distintas exige más observación de campo que una línea repetitiva.",
  },
  {
    q: "¿Incluye la medición de agentes como ruido, iluminación o sustancias?",
    a: "El estudio identifica qué agentes requieren medición y bajo qué norma. Las mediciones específicas —ruido, iluminación, vibraciones, partículas o vapores— se cotizan como alcance complementario, ya que implican equipo calibrado y protocolos de muestreo definidos por cada NOM.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="hardhat" size={22} />,
    title: "Auditoría y Diagnóstico Seguridad y Salud",
    desc: "Evaluación de cumplimiento frente a las NOM-STPS y a los estándares de autogestión, complementaria al análisis de riesgo.",
    href: "/servicios/auditoria-seguridad-y-salud/",
  },
  {
    color: "blue",
    icon: <Icon name="graduation-cap" size={22} />,
    title: "Capacitación Técnica Especializada",
    desc: "Formación en normas STPS, manejo de sustancias y respuesta a emergencias para cerrar los controles administrativos del plan.",
    href: "/servicios/capacitacion-tecnica-especializada/",
  },
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Diagnóstico ambiental que se cruza con el riesgo laboral en manejo de sustancias, residuos peligrosos y emisiones.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="scale" size={22} />,
    title: "Servicios Legales y Atención de Autoridades",
    desc: "Defensa ante procedimientos de la STPS e impugnación de sanciones derivadas de inspecciones de seguridad laboral.",
    href: "/servicios/servicios-legales-y-atencion-de-autoridades/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function EstudiosDeSeguridadYSalud() {
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
            <Eyebrow>Estudios de Seguridad y Salud</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Saber qué puede{" "}
              <span style={{ color: "var(--danger)" }}>lastimar a alguien</span>{" "}
              antes de que ocurra.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Análisis de riesgos laborales, equipos y manejo de sustancias con metodologías reconocidas internacionalmente. Gestión integral del riesgo para operaciones industriales.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Un accidente rara vez sorprende a quien evaluó el riesgo. El estudio convierte lo que el personal ya intuye en evidencia técnica priorizada, con el control que corresponde a cada hallazgo.
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
              label="Análisis de riesgos en planta"
              sub="Reemplazar con foto real del equipo evaluando maquinaria, tareas de alto riesgo o almacén de sustancias."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              Un estudio de seguridad y salud responde una pregunta concreta: qué en esta operación puede lesionar a un trabajador, con qué probabilidad y con qué gravedad. No es un inventario de documentos faltantes ni un checklist de normas; es la evaluación técnica del riesgo real por puesto, por área y por equipo, incluida la exposición a sustancias químicas peligrosas.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores aplicamos metodologías reconocidas internacionalmente —SMART, DuPont y los requisitos de ISO 45001— sobre la operación como efectivamente se ejecuta, no como está descrita en el procedimiento. Cada riesgo relevante se jerarquiza y se traduce en un control concreto siguiendo la jerarquía correcta: primero ingeniería, luego administración y sólo al final equipo de protección personal.
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
              El alcance se define por el número de puestos, áreas y equipos críticos a evaluar, y por la metodología que requiera tu corporativo o tu cliente. Puede acotarse a un proceso específico o cubrir la instalación completa.
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
              Cuándo necesitas un estudio de seguridad y salud
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Varias NOM-STPS exigen un análisis de riesgos documentado como sustento de las medidas adoptadas. Más allá de la obligación, es la herramienta que evita que un incidente previsible se convierta en un accidente. Es especialmente recomendable en estos escenarios:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Tu operación implica trabajos de alto riesgo: altura, espacios confinados, energías peligrosas o maquinaria pesada.</CheckItem>
              <CheckItem>Tuviste un accidente o un cuasi accidente y necesitas entender la causa raíz y qué control faltaba.</CheckItem>
              <CheckItem>Almacenas o procesas sustancias químicas peligrosas y no tienes evaluada la exposición real del personal.</CheckItem>
              <CheckItem>Vas a instalar maquinaria nueva o modificar una línea y necesitas evaluar el riesgo antes de arrancar.</CheckItem>
              <CheckItem>Tu corporativo o tu cliente exige una evaluación bajo una metodología específica como DuPont o ISO 45001.</CheckItem>
              <CheckItem>Tu siniestralidad subió y necesitas datos para decidir dónde invertir en control de riesgo.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Evaluación de equipo y maquinaria"
              sub="Reemplazar con foto real de revisión de guardas, bloqueo y etiquetado o medición de agentes en campo."
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
            Preguntas frecuentes sobre estudios de seguridad y salud
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
        headline={<>El riesgo que nadie midió <span style={{ color: "var(--irca-green)" }}>es el que termina en accidente</span>.</>}
        copy="Cuéntanos qué procesos, equipos o sustancias quieres evaluar y bajo qué metodología te la piden. Con eso definimos el alcance del estudio y el trabajo de campo que implica."
        formTitle="Solicitar estudio de seguridad y salud"
        motivoLabel="Necesidad principal"
        motivoOptions={["Estudio de riesgos laborales", "Análisis de equipos y maquinaria", "Manejo de sustancias peligrosas", "Metodología DuPont / SMART", "Brechas ISO 45001", "Investigación de accidente", "Otro"]}
      />
    </>
  );
}
