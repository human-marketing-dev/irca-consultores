import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Capacitación Técnica Especializada",
  description: "Cursos de sistemas de gestión ISO, atención de visitas de inspección, manejo de residuos, respuesta a emergencias, auditorías de cliente, legislación SHE y normas STPS y Protección Civil. IRCA Consultores.",
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

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Sistemas de gestión (ISO)",
    desc: "Interpretación de requisitos, implementación y formación de auditores internos en ISO 14001 e ISO 45001. Programas dirigidos tanto al equipo que sostiene el sistema como a la dirección que debe revisarlo.",
  },
  {
    color: "blue",
    icon: <Icon name="shield-check" size={24} />,
    title: "Atención de visitas de inspección",
    desc: "Qué facultades tiene el inspector, qué puede y qué no puede solicitarse, cómo se firma un acta circunstanciada y qué consecuencias tiene cada manifestación. Formación práctica para quien recibe a la autoridad en la puerta.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/><path d="M10 11v5"/><path d="M14 11v5"/>
      </svg>
    ),
    title: "Manejo de residuos y respuesta a emergencias",
    desc: "Clasificación, envasado, señalización, bitácoras y manifiestos de residuos peligrosos y de manejo especial; y formación de brigadas para atención de derrames, fugas, incendio y evacuación, con simulacros documentados.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>
      </svg>
    ),
    title: "Auditorías de cliente y de servicios",
    desc: "Preparación del personal para las auditorías de segunda parte que ejecutan clientes y corporativos: qué evidencia se solicita, cómo se responde un hallazgo y cómo se documenta el cierre de una no conformidad.",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={24} />,
    title: "Legislación aplicable en materia de SHE",
    desc: "Marco normativo ambiental, de seguridad y de salud en el trabajo aplicado a la operación real: qué obliga a quién, qué se reporta, en qué plazos y qué consecuencias tiene el incumplimiento en cada materia.",
  },
  {
    color: "blue",
    icon: <Icon name="hardhat" size={24} />,
    title: "Normas STPS y Protección Civil",
    desc: "Cursos para acreditar los requisitos de capacitación que exigen las NOM-STPS —trabajos en altura, espacios confinados, sustancias químicas, bloqueo y etiquetado, electricidad— y la formación que requiere el Programa Interno de Protección Civil.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Instructores que hacen el trabajo, no solo lo enseñan",
    body: "Nuestros instructores son los mismos consultores que realizan auditorías, tramitan licencias y defienden clientes ante PROFEPA. Eso significa que los casos, los ejemplos y las situaciones que presentan en clase son reales —incluyendo lo que salió mal y cómo se resolvió.",
  },
  {
    n: "02",
    title: "Contenido actualizado con la norma vigente",
    body: "La legislación ambiental en México se modifica con frecuencia: NOM actualizadas, nuevos criterios de la autoridad, cambios en formatos de reporte. Actualizamos el contenido de cada curso antes de impartirlo, no de forma anual.",
  },
  {
    n: "03",
    title: "Cursos in company adaptados a tu instalación",
    body: "Los cursos abiertos enseñan el marco general. Los cursos in company adaptan los ejercicios, los ejemplos y los simulacros a los procesos, residuos y riesgos específicos de tu planta. El aprendizaje es más rápido y el impacto en la operación es inmediato.",
  },
  {
    n: "04",
    title: "Documentación con validez ante la autoridad",
    body: "Emitimos constancias de participación con los datos del curso y del instructor, en el formato que STPS acepta para acreditar cumplimiento de la obligación de capacitación. Entregamos también la evidencia documental del evento para tu expediente.",
  },
  {
    n: "05",
    title: "Capacitación conectada con el resto del sistema",
    body: "La capacitación tiene más valor cuando forma parte de un sistema: una auditoría que identificó brechas de conocimiento, una implementación de ISO 14001 que requiere que el personal entienda sus responsabilidades, o una preparación para una inspección que se aproxima. Podemos diseñar el plan de capacitación dentro de un proyecto mayor.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Qué cursos ofrece IRCA Consultores?",
    a: "Contamos con programas en regulación y cumplimiento ambiental, prevención de accidentes, minimización de residuos industriales, auditoría ambiental, elaboración y control de planes integrales de manejo de residuos, implementación de ISO 14001, atención de visitas de inspección y control de polvos en obras de construcción.",
  },
  {
    q: "¿Los cursos están registrados ante la STPS?",
    a: "Nuestro personal capacitador está registrado como agente capacitador externo ante la Secretaría del Trabajo y Previsión Social (STPS), junto con los programas señalados. Antes de contratar, se especifica el alcance del curso y el tipo de constancia que corresponde emitir. La participación en un curso no implica, por sí sola, la expedición automática de una constancia DC-3.",
  },
  {
    q: "¿Qué documentación recibe la empresa?",
    a: "Se entrega la constancia correspondiente, el temario, la duración del curso y la relación de participantes. Cuando resulte procedente conforme al programa impartido y a los requisitos laborales y documentales aplicables, se integra la Constancia de Competencias o de Habilidades Laborales DC-3.",
  },
  {
    q: "¿Los cursos pueden adaptarse a nuestra empresa?",
    a: "Sí. Podemos incorporar procesos, instalaciones, obligaciones y casos relacionados con la operación del cliente. En los cursos registrados se conserva el objetivo y contenido esencial; cuando se requiere una modificación sustancial, se estructura un programa específico y se define previamente la documentación aplicable.",
  },
  {
    q: "¿Qué modalidades de capacitación manejan?",
    a: "Los cursos pueden impartirse in company, en las instalaciones del cliente, o mediante grupos abiertos programados por IRCA Consultores. La modalidad se determina de acuerdo con el tema, la ubicación, el número de participantes y los ejercicios requeridos.",
  },
  {
    q: "¿Cuánto duran los cursos?",
    a: "La duración depende del programa. Los cursos registrados tienen cargas de entre 5 y 16 horas. La capacitación puede organizarse en una sola jornada o distribuirse en varias sesiones, sin reducir los contenidos ni las actividades de evaluación.",
  },
  {
    q: "¿Qué incluye el curso de atención de visitas de inspección?",
    a: "Aborda la preparación documental, recepción de inspectores, identificación del alcance de la orden, acompañamiento del recorrido, formulación de observaciones, manejo de evidencias y seguimiento posterior. El objetivo es que el personal conozca sus responsabilidades y evite errores que puedan agravar un procedimiento administrativo.",
  },
  {
    q: "¿La capacitación incluye ejercicios y casos prácticos?",
    a: "Sí. Los contenidos se apoyan en situaciones derivadas de auditorías, trámites y procedimientos reales, utilizando información reservada y datos anonimizados. Los participantes trabajan con ejemplos, documentos y decisiones semejantes a las que pueden enfrentar en su operación.",
  },
  {
    q: "¿Quiénes deberían participar?",
    a: "Responsables ambientales, personal de seguridad y salud en el trabajo, supervisores, residentes de obra, responsables de mantenimiento, recursos humanos, áreas jurídicas y directivos con funciones relacionadas con el cumplimiento normativo.",
  },
  {
    q: "¿Qué información necesitan para preparar una cotización?",
    a: "Se requiere conocer el curso de interés, objetivo de la capacitación, número de participantes, ubicación, sector de la empresa, modalidad solicitada y fechas tentativas.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental, Seguridad y Salud",
    desc: "Una auditoría identifica las brechas de conocimiento del personal —la capacitación cierra esas brechas con el mismo diagnóstico como base.",
    href: "/servicios/auditoria-ambiental-seguridad-y-salud/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Estudios, Trámites y Administración de Autorizaciones",
    desc: "Conocer el proceso de gestión de trámites facilita que el personal de la empresa aporte la información correcta en tiempo y forma.",
    href: "/servicios/tramites-y-autorizaciones-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="hardhat" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental, Seguridad y Salud",
    desc: "Los sistemas ISO 45001 y los programas de prevención requieren capacitación específica para brigadas, supervisores y Comisiones Mixtas.",
    href: "/servicios/auditoria-ambiental-seguridad-y-salud/",
  },
  {
    color: "blue",
    icon: <Icon name="scale" size={22} />,
    title: "Servicios Legales y Atención de Autoridades",
    desc: "Saber cómo atender una inspección y qué derechos tiene el inspeccionado es la primera línea de defensa jurídica ambiental.",
    href: "/servicios/servicios-legales-y-atencion-de-autoridades/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function CapacitacionTecnicaEspecializada() {
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
            <pattern id="topoCap" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" style={{ stroke: "var(--irca-green-100)" }} strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" style={{ stroke: "var(--irca-blue-100)" }} strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoCap)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow>Capacitación Técnica Especializada</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Capacitación técnica con{" "}
              <span style={{ color: "var(--irca-green)" }}>registro ante la STPS</span>{" "}
              y experiencia en campo.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Registrados como agente capacitador externo ante la Secretaría del Trabajo y Previsión Social (STPS), con cursos en regulación y cumplimiento ambiental, prevención de accidentes, minimización de residuos industriales, elaboración y control de planes integrales de manejo de residuos, implementación de ISO 14001, atención de visitas de inspección y control de polvos en obras. La capacitación se imparte in company o en grupos abiertos, con un enfoque práctico que convierte las obligaciones normativas en procedimientos aplicables a la operación.
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
                Ver catálogo
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-4)" }}>
              <span>ISO 14001</span><span>ISO 45001</span><span>RETC · COA</span><span>In company</span>
            </div>
          </div>

          {/* Hero photo */}
          <div>
            <Photo
              ratio="3/2"
              priority
              src="/images/servicios/capacitacion-tecnica-especializada/capacitacion-irca-consultores.webp"
              alt="Curso de capacitación técnica impartido por IRCA Consultores"
            />
          </div>
        </div>
      </section>

      {/* ── SOBRE EL SERVICIO ─────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Eyebrow>Sobre el servicio</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 28px", color: "var(--ink-1000)" }}>
              Formación técnica respaldada por experiencia real
            </h2>
            <Photo
              ratio="16/9"
              src="/images/servicios/capacitacion-tecnica-especializada/servicio-capacitacion-tecnica-irca.webp"
              alt="Sesión de capacitación técnica impartida por especialistas de IRCA Consultores"
            />
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              La capacitación ambiental que genera resultados no se limita a repetir la norma. Explica su propósito, los criterios con los que la autoridad verifica su cumplimiento y la manera de incorporarla a los procedimientos, controles y evidencias de cada operación. El objetivo no es únicamente acreditar la asistencia, sino desarrollar la capacidad de aplicar lo aprendido.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores, los cursos son impartidos por profesionales que realizan auditorías de cumplimiento, gestionan autorizaciones y acompañan a empresas durante visitas de inspección y procedimientos administrativos. Los contenidos incorporan casos reales —con datos debidamente reservados— para analizar decisiones, errores recurrentes y soluciones técnica y jurídicamente defendibles.
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

      {/* ── CATÁLOGO DE CURSOS ────────────────────────── */}
      <section id="incluye" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Catálogo de cursos</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-11">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              ¿Qué cursos y talleres ofrecemos?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Todos los cursos están disponibles en modalidad in company (en tus instalaciones, adaptados a tu proceso) y en grupos abiertos con otras empresas. Puedes combinar módulos para construir un programa de formación a medida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {alcanceCards.map(({ color, icon, title, desc }) => (
              <article
                key={title}
                style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 14 }}
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>¿Necesitas un programa a la medida de tu empresa?</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>Diseñamos el plan de capacitación con base en los resultados de tu auditoría o en las brechas que ya identificaste.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Solicitar información <Icon name="arrow-right" size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── ¿CUÁNDO? ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-1)" }}>
        <div
          className="grid grid-cols-1 md:[grid-template-columns:1.05fr_0.95fr] gap-10 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <div>
            <Eyebrow>Para quién es</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
              ¿Cuándo necesitas capacitación técnica en tu empresa?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              La capacitación ambiental tiene más valor cuando es oportuna: antes de una inspección, durante una implementación de sistema de gestión, o justo después de identificar que el equipo no sabe cómo responder a una situación regulatoria. Estos son los momentos más comunes:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Tu responsable ambiental es nuevo y necesita dominar rápidamente el marco normativo y las obligaciones de la instalación.</CheckItem>
              <CheckItem>Estás implementando ISO 14001 o ISO 45001 y el personal que operará el sistema necesita formación práctica.</CheckItem>
              <CheckItem>Se aproxima la temporada de COA y nadie en el equipo tiene claro cómo armar correctamente el inventario de emisiones para el RETC.</CheckItem>
              <CheckItem>Recibiste una notificación de inspección y el personal no sabe cómo actuar cuando la autoridad llega a las instalaciones.</CheckItem>
              <CheckItem>Ocurrió un incidente ambiental y la auditoría posterior reveló que el personal no estaba capacitado en los protocolos de emergencia.</CheckItem>
              <CheckItem>La STPS te requirió evidencia de cumplimiento con las obligaciones de capacitación en materia de seguridad y residuos peligrosos.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Photo
              ratio="4/3"
              src="/images/servicios/capacitacion-tecnica-especializada/para-quien-es-capacitacion-tecnica-irca.webp"
              alt="Sesión de capacitación técnica impartida por IRCA Consultores"
            />
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>El mejor instructor es el que hizo el trabajo la semana pasada.</div>
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
            Preguntas frecuentes sobre capacitación técnica y ambiental
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
        headline={<>La capacitación que cambia comportamientos <span style={{ color: "var(--irca-green)" }}>la imparte alguien que conoce el terreno</span>.</>}
        copy="Cuéntanos qué necesita aprender tu equipo —o qué situación regulatoria se aproxima— y diseñamos un programa específico para tu empresa, impartido por los mismos especialistas que ejecutan los proyectos."
        formTitle="Solicitar información sobre cursos"
        motivoLabel="Curso de interés"
        motivoOptions={["Sistemas de gestión ISO", "Atención de visitas de inspección", "Manejo de residuos", "Respuesta a emergencias y brigadas", "Auditorías de cliente y de servicios", "Legislación aplicable en SHE", "Normas STPS y Protección Civil", "Programa a la medida"]}
      />
    </>
  );
}
