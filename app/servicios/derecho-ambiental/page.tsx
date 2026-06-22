import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Derecho Ambiental y Defensa Jurídica",
  description: "Despacho de derecho ambiental y defensa jurídica ante PROFEPA, SEMARNAT y CONAGUA. Litigio ambiental, amparo indirecto, recursos de revisión y procedimientos administrativos en México. IRCA Consultores.",
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
      <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 999, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
        <Icon name="check" size={14} stroke={2.4} />
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)" }}>{children}</span>
    </div>
  );
}

/* ── hero card data ─────────────────────────────────── */

const proceedings = [
  { label: "Visita de verificación PROFEPA", status: "En atención",        palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "Procedimiento administrativo",   status: "Plazo de pruebas",   palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Recurso de revisión",            status: "Resolución favorable",palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "Amparo indirecto",               status: "Sentencia pendiente", palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/>
      </svg>
    ),
    title: "Atención en visitas de inspección",
    desc: "Presencia jurídica y técnica desde el momento en que la autoridad llega a tus instalaciones. Orientamos al personal, supervisamos el levantamiento de actas y protegemos tus derechos procedimentales desde el primer minuto.",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={24} />,
    title: "Litigio ambiental y solución de controversias",
    desc: "Defensa en procedimientos contenciosos ante tribunales administrativos y federales. Evaluamos la vía más efectiva —negociación, recurso o litigio— según el expediente, el monto de la sanción y los antecedentes de la autoridad.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h6"/>
      </svg>
    ),
    title: "Procedimientos administrativos y emplazamientos",
    desc: "Elaboración y presentación de respuestas a emplazamientos, ofrecimiento de pruebas y alegatos dentro de los procedimientos sancionadores de PROFEPA, SEMARNAT, CONAGUA y dependencias estatales.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/>
      </svg>
    ),
    title: "Recursos de revisión y juicios de nulidad",
    desc: "Interposición y seguimiento de recursos de revisión ante la misma autoridad y demandas de nulidad ante el Tribunal Federal de Justicia Administrativa cuando una resolución viola derechos o contiene vicios de procedimiento.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Juicio de Amparo Indirecto",
    desc: "Elaboración, presentación y seguimiento de amparos indirectos cuando actos de autoridad ambiental violan garantías constitucionales. Incluye suspensión provisional y definitiva del acto reclamado cuando procede.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: "Estrategias jurídico-ambientales preventivas",
    desc: "Diseño de esquemas de cumplimiento que reducen la exposición legal antes de que llegue la autoridad: matrices de requerimientos, planes de atención a hallazgos y protocolos de respuesta a inspecciones.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Intermediación con autoridades federales y estatales",
    desc: "Gestión directa ante PROFEPA, SEMARNAT, CONAGUA, STPS y dependencias ambientales estatales para negociar plazos, términos de regularización o acuerdos que eviten la escalada del procedimiento.",
  },
  {
    color: "green",
    icon: <Icon name="shield-check" size={24} />,
    title: "Defensa ante PROFEPA, SEMARNAT y CONAGUA",
    desc: "Representación especializada en las principales dependencias de fiscalización ambiental federal. Conocemos sus procesos internos, sus criterios de sanción y los argumentos que efectivamente inciden en sus resoluciones.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "El abogado y el ingeniero conocen el mismo expediente",
    body: "En la mayoría de los despachos, el abogado ambiental depende de un perito externo para entender la parte técnica. En IRCA, el equipo que elaboró tus estudios, gestionó tus trámites o hizo tu auditoría es el mismo que defiende tu caso. Eso elimina la brecha entre argumento y evidencia.",
  },
  {
    n: "02",
    title: "25 años frente a las mismas autoridades",
    body: "Sabemos cómo opera PROFEPA en campo, qué criterios usa SEMARNAT para valorar pruebas y cómo negocia CONAGUA. Esa experiencia acumulada no se improvisa y marca la diferencia entre una resolución de sanción y un sobreseimiento.",
  },
  {
    n: "03",
    title: "Reacción inmediata desde el primer contacto",
    body: "Cuando la autoridad está en la puerta, cada hora cuenta. Contamos con protocolos de respuesta inmediata para visitas de inspección no anunciadas: presencia jurídica en sitio, orientación al personal y control del acta desde el levantamiento.",
  },
  {
    n: "04",
    title: "Estrategia, no solo reacción",
    body: "Evaluamos todas las vías posibles —negociación, recurso administrativo, juicio de nulidad, amparo— y recomendamos la que mejor combina velocidad, costo y probabilidad de resultado favorable. No escalamos innecesariamente ni cedemos sin analizar.",
  },
  {
    n: "05",
    title: "Continuidad más allá del fallo",
    body: "Una resolución favorable no termina el trabajo: hay condicionantes que cumplir, plazos que monitorear y expedientes que cerrar. Continuamos el acompañamiento hasta que el caso está efectivamente resuelto y tu operación está fuera de riesgo.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Qué hago si recibo una orden de inspección de PROFEPA?",
    a: "Lo primero es no obstruir la visita ni proporcionar información más allá de lo que el acta requiere. Contáctanos de inmediato —podemos presentarnos en el sitio o guiar al responsable por teléfono durante el levantamiento. El acta de inspección es el documento más importante del procedimiento: lo que quede asentado en ella define las opciones de defensa.",
  },
  {
    q: "¿Cuánto tiempo tengo para responder a un emplazamiento?",
    a: "La Ley Federal de Procedimiento Administrativo establece un plazo de 15 días hábiles para ofrecer pruebas y alegatos en procedimientos sancionadores de PROFEPA. Ese plazo es fatal: vencido sin respuesta, la autoridad puede resolver con los elementos que tenga. Actuar rápido desde el emplazamiento es crítico.",
  },
  {
    q: "¿Vale la pena interponer un recurso de revisión?",
    a: "Depende del monto de la sanción, los vicios del procedimiento y la solidez de los argumentos disponibles. El recurso de revisión suspende la ejecutoriedad de la multa mientras se resuelve y, en muchos casos, es el primer paso necesario antes de acudir al Tribunal o al amparo. Lo evaluamos con base en el expediente concreto.",
  },
  {
    q: "¿Pueden representarme si ya hay una sanción firme?",
    a: "Si la sanción ya causó firmeza, las opciones de impugnación se reducen, pero pueden no estar agotadas: existen mecanismos de condonación, pago en parcialidades y en algunos casos todavía es posible acudir al amparo directo. Lo importante es actuar antes de que la autoridad inicie el procedimiento de ejecución.",
  },
  {
    q: "¿Qué diferencia hace que el abogado conozca la parte técnica del caso?",
    a: "En el derecho ambiental, los argumentos más sólidos son los que combinan la norma con la evidencia técnica: mediciones, estudios, registros de monitoreo. Un abogado que no entiende esa evidencia no puede valorarla ni presentarla de forma efectiva ante la autoridad. En IRCA, el equipo técnico y el jurídico trabajan sobre el mismo expediente.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Identifica las brechas de cumplimiento antes de que lo haga la autoridad. Una auditoría preventiva es la mejor preparación para una inspección.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Trámites y Licencias Ambientales",
    desc: "Regulariza la situación de tu instalación obteniendo los permisos y licencias que cierran las brechas detectadas en un procedimiento.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="flask" size={22} />,
    title: "Estudios Ambientales",
    desc: "MIA, ERA y evaluaciones de sitio que sirven como evidencia técnica en procedimientos administrativos o para sustentar medidas de regularización.",
    href: "/servicios/estudios-ambientales/",
  },
  {
    color: "blue",
    icon: <Icon name="hardhat" size={22} />,
    title: "SHE / Seguridad y Salud Ocupacional",
    desc: "Cumplimiento de obligaciones de seguridad y salud que reduce la exposición a procedimientos de la STPS, complementando la defensa ambiental.",
    href: "/servicios/seguridad-y-salud-ocupacional/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function DerechoAmbiental() {
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
            <pattern id="topoDerecho" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#C7E2F0" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#DCEFCB" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoDerecho)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow color="var(--irca-blue-700)">Derecho Ambiental y Defensa Jurídica</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Defensa jurídica ambiental ante PROFEPA, SEMARNAT y{" "}
              <span style={{ color: "var(--irca-green)" }}>CONAGUA</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Representación legal especializada cuando la autoridad ya está en la puerta —y estrategia preventiva para que no llegue a sancionar.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              El derecho ambiental combina normatividad administrativa, procesal y constitucional con conocimiento técnico del sector regulado. Nuestro equipo domina los dos frentes.
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
              <span>PROFEPA</span><span>SEMARNAT</span><span>CONAGUA</span><span>STPS</span>
            </div>
          </div>

          {/* Proceedings status card — hidden on mobile */}
          <div className="hidden md:block">
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-blue)", boxShadow: "0 0 0 4px var(--irca-blue-50)" }} />
                Expedientes activos
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Seguimiento jurídico en tiempo real
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {proceedings.map(({ label, status, palette }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-2)" }}>{label}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 9px", borderRadius: 999, background: palette.bg, color: palette.fg, fontSize: 11, fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: palette.fg }} /> {status}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "14px 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--irca-blue-700)", fontSize: 13, fontWeight: 600 }}>
                <Icon name="scale" size={16} />
                Defensa técnica y jurídica en un solo expediente
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
              Por qué la defensa ambiental requiere doble capacidad
            </h2>
            <ImgPlaceholder
              ratio="16/9"
              label="Representación ante autoridad / revisión de expediente"
              sub="Reemplazar con foto real del equipo en reunión jurídica, revisando expediente o en gestión ante autoridad."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              El derecho ambiental en México combina normatividad administrativa, procesal y constitucional con un profundo conocimiento técnico del sector regulado. Cuando una empresa recibe una visita de inspección, un emplazamiento o una resolución sancionadora, el resultado no depende solo de la norma: depende de quién interpreta el expediente, cómo se presentan los argumentos y qué tan rápido se reacciona. Un error procesal en los primeros días puede limitar las opciones de defensa durante meses.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores la práctica jurídica ambiental no está separada de la ingeniería: el mismo equipo que conoce tu instalación, tu expediente y tu historial de cumplimiento es el que defiende tu caso ante la autoridad. Esa integración elimina la brecha entre lo que dice el perito y lo que argumenta el abogado —una brecha que en litigios ambientales suele ser costosa.
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
              ¿Qué incluye la defensa jurídica ambiental?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Cubrimos todas las etapas del proceso: desde la atención inmediata en la visita de inspección hasta la resolución final en tribunales. El alcance se define con base en la etapa procesal y el tipo de procedimiento.
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>Cada procedimiento es diferente</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>Cuéntanos en qué etapa estás y evaluamos la mejor estrategia sin compromiso.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Consultar sin costo <Icon name="arrow-right" size={16} />
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
              ¿Cuándo necesita tu empresa defensa jurídica ambiental?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              La defensa jurídica ambiental no es solo para empresas en crisis. También es una herramienta preventiva que reduce la exposición legal antes de que la autoridad inicie un procedimiento. Es especialmente urgente o recomendable en estos escenarios:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Recibiste una orden de visita de verificación de PROFEPA, SEMARNAT, CONAGUA o una autoridad estatal.</CheckItem>
              <CheckItem>Te llegó un emplazamiento o resolución sancionadora y no sabes si impugnar ni en qué plazo.</CheckItem>
              <CheckItem>Tienes una multa firme y quieres explorar opciones de reducción, pago en parcialidades o condonación.</CheckItem>
              <CheckItem>Operación detenida o clausurada y necesitas levantar la medida de seguridad lo antes posible.</CheckItem>
              <CheckItem>Quieres diseñar una estrategia preventiva antes de la próxima inspección basada en tu expediente real.</CheckItem>
              <CheckItem>Compraste una empresa con antecedentes ambientales y necesitas limpiar el expediente ante la autoridad.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Reunión con autoridad / gestión jurídica"
              sub="Reemplazar con foto real del equipo en gestión ante autoridad, tribunal o revisión de expediente."
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
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>Cuando la autoridad está en la puerta, cada hora cuenta.</div>
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
            Preguntas frecuentes sobre derecho ambiental
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
        headline={<>Cuando la autoridad ya actuó, la rapidez de <span style={{ color: "var(--irca-green)" }}>respuesta</span> define el resultado.</>}
        copy="Un procedimiento ambiental mal atendido puede derivar en sanciones, clausuras o antecedentes que complican futuras operaciones. Da el primer paso: cuéntanos en qué etapa estás y evaluamos tus opciones sin compromiso."
        formTitle="Consultar caso ambiental"
        motivoLabel="Situación actual"
        motivoOptions={["Visita de inspección recibida", "Emplazamiento o procedimiento activo", "Sanción o multa impuesta", "Estrategia preventiva", "Clausura o medida de seguridad", "Otro"]}
      />
    </>
  );
}
