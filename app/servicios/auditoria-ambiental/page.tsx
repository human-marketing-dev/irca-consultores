import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Auditoría y Diagnóstico Ambiental",
  description: "Auditoría ambiental integral en México. Matrices de requerimientos legales, PGI, diagnóstico de cumplimiento normativo ante SEMARNAT, PROFEPA y CONAGUA. IRCA Consultores, Monterrey.",
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

/* ── audit hero card data ───────────────────────────── */

const findings = [
  { label: "LAU vigente",                     status: "Cumple",  palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "COA 2024 sin presentar",           status: "Crítico", palette: { bg: "var(--danger-bg)",  fg: "var(--danger)"  } },
  { label: "Bitácora de residuos incompleta",  status: "Alto",    palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Plan de contingencias",            status: "Medio",   palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={24} />,
    title: "Auditoría ambiental",
    desc: "Revisión integral del cumplimiento de tu instalación frente a la normatividad vigente. Evaluamos permisos, licencias, reportes y obligaciones operativas para determinar tu nivel real de conformidad, no el que se asume en papel.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" />
      </svg>
    ),
    title: "Diagnóstico ambiental integral",
    desc: "Una fotografía completa del estado ambiental de tu sitio: emisiones, descargas, residuos, suelo y obligaciones administrativas. El diagnóstico te da el punto de partida ordenado para tomar decisiones con datos y no con suposiciones.",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={24} />,
    title: "Matrices de requerimientos legales (SHE)",
    desc: "Construimos el inventario preciso de obligaciones ambientales, de seguridad y salud que aplican a tu operación según su giro y ubicación. Esta matriz es la columna vertebral del cumplimiento: lo que no está identificado, no se puede gestionar.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 6h10"/><path d="M11 12h10"/><path d="M11 18h10"/>
        <path d="M3 6l1.5 1.5L6 5"/><path d="M3 12l1.5 1.5L6 11"/><path d="M3 18l1.5 1.5L6 17"/>
      </svg>
    ),
    title: "Plan de gestión de incumplimientos (PGI)",
    desc: "Cada hallazgo se convierte en una acción concreta, con responsable, prioridad y horizonte de tiempo. El PGI ordena el camino para cerrar brechas de forma realista, atacando primero lo que representa mayor riesgo legal y operativo.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>
      </svg>
    ),
    title: "Calendario ambiental anual y seguimiento",
    desc: "Mapeamos todos tus vencimientos y obligaciones recurrentes en un calendario regulatorio claro. Así dejas de operar reaccionando a las fechas límite y pasas a anticiparlas con tiempo de maniobra.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Mirada técnica y jurídica en un solo equipo",
    body: "Una auditoría que solo ve la parte técnica deja descubierto el flanco legal, y viceversa. Combinamos ingeniería y derecho ambiental bajo un mismo techo, de modo que cada hallazgo se valora también por su exposición jurídica real ante la autoridad.",
  },
  {
    n: "02",
    title: "Más de 25 años leyendo a las autoridades",
    body: "Sabemos qué revisa cada dependencia, cómo se comporta en una visita de inspección y dónde suele concentrar su atención. Esa experiencia te permite prepararte para lo que de verdad importa, no para una lista genérica.",
  },
  {
    n: "03",
    title: "Conocimiento sectorial profundo",
    body: "Hemos auditado y acompañado plantas industriales, minas, fundiciones, acerías y desarrollos inmobiliarios. Entendemos la operación real de tu giro, lo que hace que el diagnóstico sea relevante y no una plantilla aplicada a la fuerza.",
  },
  {
    n: "04",
    title: "De la auditoría a la solución",
    body: "No te dejamos con una lista de hallazgos y un adiós. El Plan de Gestión de Incumplimientos prioriza y ordena el camino, y podemos acompañarte en la ejecución a través de nuestros servicios de trámites, ingeniería y defensa jurídica.",
  },
  {
    n: "05",
    title: "Representación efectiva ante la autoridad",
    body: "Cuando un hallazgo deriva en un procedimiento, contar con quien ya conoce tu expediente marca la diferencia. Nuestra capacidad de intermediación y litigio ambiental respalda el resultado de la auditoría.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Una auditoría ambiental es obligatoria?",
    a: "La auditoría como tal suele ser voluntaria, pero las obligaciones que evalúa no lo son. Realizarla te permite anticiparte a una inspección de la autoridad y corregir brechas antes de que generen una sanción.",
  },
  {
    q: "¿Cuánto tiempo toma una auditoría ambiental?",
    a: "Depende del tamaño y complejidad de la instalación. Tras una primera visita de alcance podemos darte un tiempo estimado realista; lo importante es que el resultado sea útil y accionable, no solo rápido.",
  },
  {
    q: "¿En qué se diferencia de la Auditoría de Industria Limpia de PROFEPA?",
    a: "La auditoría que hacemos es una evaluación interna de tu cumplimiento. La certificación de Industria Limpia es un programa formal ante PROFEPA. Frecuentemente nuestra auditoría es el primer paso para saber si estás listo para esa certificación.",
  },
  {
    q: "¿Qué recibo al final?",
    a: "Un diagnóstico claro de tu estado de cumplimiento, una matriz de requerimientos legales aplicable a tu operación y un Plan de Gestión de Incumplimientos priorizado, con acciones concretas para cerrar cada brecha.",
  },
  {
    q: "¿Trabajan con empresas fuera de Nuevo León?",
    a: "Sí. Aunque nuestra sede operativa está en Nuevo León, atendemos proyectos a nivel nacional, con experiencia documentada en Coahuila, Tamaulipas, Sonora, Guanajuato, Estado de México y más.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Trámites y Licencias Ambientales",
    desc: "Gestionamos tus LAU, COA, permisos CONAGUA y demás trámites para cerrar las brechas que detecta la auditoría y mantener tu operación en regla.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={22} />,
    title: "Derecho Ambiental y Defensa Jurídica",
    desc: "Representación y defensa ante PROFEPA, SEMARNAT y CONAGUA cuando un hallazgo deriva en inspección, emplazamiento o procedimiento administrativo.",
    href: "/servicios/derecho-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="flask" size={22} />,
    title: "Estudios Ambientales",
    desc: "Manifestaciones de Impacto Ambiental, Estudios de Riesgo y estudios técnicos justificativos para sustentar y regularizar tu operación.",
    href: "/servicios/estudios-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Certificación Industria Limpia (PROFEPA)",
    desc: "Acompañamiento integral para obtener el reconocimiento de Industria Limpia, partiendo del diagnóstico que arroja tu auditoría.",
    href: "/servicios/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function AuditoriaAmbiental() {
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
            <pattern id="topoSvc" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#C7E2F0" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#DCEFCB" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoSvc)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow color="var(--irca-blue-700)">Auditoría y Diagnóstico Ambiental</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Auditoría ambiental para empresas que no pueden permitirse una{" "}
              <span style={{ color: "var(--irca-green)" }}>multa</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Identificamos tus brechas de cumplimiento antes que la autoridad. Una radiografía técnica y legal del estado real de tu operación frente a SEMARNAT, PROFEPA, CONAGUA y normatividad estatal.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Saber dónde estás parado es el primer paso para operar tranquilo. Una auditoría bien hecha convierte la incertidumbre regulatoria en un plan de acción claro y priorizado.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--irca-green)", color: "#fff",
                  padding: "14px 26px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16,
                  borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
                }}
              >
                Solicitar información <Icon name="arrow-right" size={17} />
              </a>
              <a
                href="#incluye"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
                  padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16,
                  borderRadius: 10, textDecoration: "none",
                }}
              >
                Qué incluye
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              <span>SEMARNAT</span><span>PROFEPA</span><span>CONAGUA</span><span>Normatividad estatal</span>
            </div>
          </div>

          {/* Audit report card — hidden on mobile */}
          <div className="hidden md:block">
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-blue)", boxShadow: "0 0 0 4px var(--irca-blue-50)" }} />
                Resumen de diagnóstico
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Instalación · línea base
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 18 }}>
                <span style={{ fontSize: 12, color: "var(--fg-3)", fontWeight: 600 }}>Nivel de cumplimiento</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 34, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--irca-green)" }}>
                  72<span style={{ fontSize: 18 }}>%</span>
                </span>
              </div>
              <div style={{ height: 8, borderRadius: 999, background: "var(--ink-100)", marginTop: 10, overflow: "hidden" }}>
                <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg,var(--irca-blue),var(--irca-green))", borderRadius: 999 }} />
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {findings.map(({ label, status, palette }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-2)" }}>{label}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 9px", borderRadius: 999, background: palette.bg, color: palette.fg, fontSize: 11, fontWeight: 600, flexShrink: 0 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: palette.fg }} /> {status}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "14px 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--irca-blue-700)", fontSize: 13, fontWeight: 600 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 6h10"/><path d="M11 12h10"/><path d="M11 18h10"/>
                  <path d="M3 6l1.5 1.5L6 5"/><path d="M3 12l1.5 1.5L6 11"/><path d="M3 18l1.5 1.5L6 17"/>
                </svg>
                Cada brecha → Plan de Gestión de Incumplimientos
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
              Qué hace por ti una auditoría ambiental
            </h2>
            <ImgPlaceholder
              ratio="16/9"
              label="Diagnóstico técnico en sitio"
              sub="Reemplazar con foto real del equipo revisando permisos, descargas o residuos en planta."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              Una auditoría ambiental es la evaluación sistemática del grado en que tu instalación cumple con las obligaciones ambientales que le aplican: federales, estatales y municipales. La mayoría de las empresas no tiene una multa por mala fe, sino por desconocer una obligación, perder un vencimiento o asumir que un trámite estaba en regla cuando no lo estaba. Este servicio elimina esa zona ciega: te dice con precisión qué cumples, qué no cumples y qué representa cada brecha en términos de riesgo real.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores abordamos la auditoría desde nuestros dos frentes: el técnico y el jurídico. No nos limitamos a levantar un checklist; construimos una matriz de requerimientos legales aplicable a tu giro y operación específica, valoramos la criticidad de cada hallazgo y lo traducimos en un plan de gestión de incumplimientos accionable. Más de 25 años atendiendo sectores industrial, minero, energético e inmobiliario nos permiten anticipar qué revisa cada autoridad y cómo se comporta en campo durante una inspección.
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
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              ¿Qué incluye este servicio?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Cada auditoría se ajusta al tamaño, giro y madurez ambiental de tu operación. El alcance final se define contigo según el objetivo: preparar una inspección, sustentar una compraventa o establecer una línea base de cumplimiento.
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
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.2, margin: 0 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>{desc}</p>
              </article>
            ))}

            {/* Dark CTA card */}
            <article style={{ background: "linear-gradient(160deg,var(--bg-deep),#0f2c47)", border: "1px solid var(--bg-deep)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>El alcance se define contigo</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>No todas las auditorías son iguales. Cuéntanos tu objetivo y armamos el alcance correcto para tu operación.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Definir alcance <Icon name="arrow-right" size={16} />
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
              ¿Cuándo necesita tu empresa una auditoría ambiental?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              No es un trámite reservado para grandes corporativos. Es una herramienta de gestión de riesgo útil para cualquier organización cuya operación genere emisiones, descargas, residuos o requiera permisos ambientales. Es especialmente recomendable en estos escenarios:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Recibiste una notificación de inspección de PROFEPA, SEMARNAT o una autoridad estatal y necesitas saber qué encontrarán.</CheckItem>
              <CheckItem>Vas a comprar, vender o fusionar una instalación industrial y necesitas conocer sus pasivos ambientales.</CheckItem>
              <CheckItem>Heredaste la responsabilidad ambiental de una planta y no tienes claridad de su estatus de cumplimiento.</CheckItem>
              <CheckItem>Operas en un sector regulado (industrial, minero, energético, metalúrgico) y quieres establecer una línea base ordenada.</CheckItem>
              <CheckItem>Acumulas trámites dispersos, vencimientos olvidados o documentación incompleta y necesitas poner orden.</CheckItem>
              <CheckItem>Buscas obtener una certificación como Industria Limpia y necesitas conocer tu punto de partida.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Fotografía de campo / inspección"
              sub="Reemplazar con foto real del equipo en sitio (auditoría, recorrido, EPP)."
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>Tu tranquilidad ambiental — nuestra especialidad.</div>
              <a
                href="#contacto"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", border: "1px solid transparent", padding: "12px 20px", fontWeight: 600, fontSize: 14, borderRadius: 8, textDecoration: "none", alignSelf: "flex-start" }}
              >
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
            Preguntas frecuentes sobre auditoría ambiental
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
                <a
                  href={href}
                  style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: color === "blue" ? "var(--irca-blue-700)" : "var(--irca-green-700)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}
                >
                  Ver servicio <Icon name="arrow-right" size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FORM ───────────────────────────────── */}
      <ServiceContactSection
        headline={<>Deja de operar con <span style={{ color: "var(--irca-green)" }}>incertidumbre</span> regulatoria.</>}
        copy="Una auditoría ambiental es la inversión más rentable en tranquilidad operativa: te muestra exactamente dónde estás y qué hacer al respecto. Da el primer paso con un equipo que conoce tanto la norma como a quien la aplica."
        formTitle="Solicitar auditoría ambiental"
        motivoLabel="Motivo de la auditoría"
        motivoOptions={["Notificación de inspección", "Compraventa / fusión (due diligence)", "Línea base de cumplimiento", "Camino a Industria Limpia", "Otro"]}
      />
    </>
  );
}
