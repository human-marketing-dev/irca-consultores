import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Seguridad y Salud Ocupacional (SHE / EHS)",
  description: "Auditorías de seguridad laboral, cumplimiento NOM-STPS, ISO 45001, análisis de riesgos laborales y Programas de Prevención de Accidentes para empresas en México. IRCA Consultores.",
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
  { label: "NOM-004 STPS (equipo de protección)",  status: "Cumple",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "NOM-017 STPS (equipo de seguridad)",   status: "Cumple",     palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "NOM-027 STPS (Comisión Mixta)",        status: "En proceso",  palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "PPA / Protección Civil",               status: "Pendiente",  palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Sistemas de gestión ISO 45001",
    desc: "Diseño, implementación y mantenimiento de Sistemas de Gestión de Seguridad y Salud en el Trabajo bajo la norma ISO 45001:2018. Desde el diagnóstico inicial de brechas hasta la preparación para la certificación con organismo acreditado.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Matrices de requerimientos legales en SST",
    desc: "Identificación, sistematización y actualización de todas las obligaciones aplicables en materia de seguridad y salud en el trabajo (NOM-STPS, reglamentos estatales, normas de emergencia). Base documental para auditorías e inspecciones de la STPS.",
  },
  {
    color: "blue",
    icon: <Icon name="hardhat" size={24} />,
    title: "Análisis y evaluación de riesgos laborales",
    desc: "Aplicación de metodologías AMEF, revisión de condiciones inseguras y evaluación de puestos de trabajo bajo NOM-004, NOM-005, NOM-017 y NOM-027 STPS. Identificación de controles prioritarios y seguimiento de acciones correctivas.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Programas de Prevención de Accidentes (PPA)",
    desc: "Elaboración del Programa de Prevención de Accidentes conforme a los requerimientos de la STPS: análisis de siniestralidad, identificación de factores de riesgo, medidas preventivas priorizadas y cronograma de implementación.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Comisiones Mixtas de Seguridad e Higiene (STPS)",
    desc: "Constitución, registro ante la STPS y capacitación de las Comisiones Mixtas de Seguridad e Higiene que exige la legislación laboral. Incluimos la elaboración del Reglamento Interior de Trabajo y los programas de verificación periódica.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Protección Civil y respuesta a emergencias",
    desc: "Elaboración del Programa Interno de Protección Civil (PIPC), análisis de riesgos de la instalación, planes de evacuación y respuesta a emergencias, formación de brigadas y simulacros conforme a la normatividad federal y estatal.",
  },
  {
    color: "blue",
    icon: <Icon name="shield-check" size={24} />,
    title: "Auditorías de cumplimiento normativo SHE",
    desc: "Diagnósticos integrales del sistema de seguridad y salud de la instalación frente al marco normativo STPS vigente. Identificación de brechas, priorización de hallazgos por nivel de riesgo y plan de acción con responsables y fechas.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Visión SHE integrada con el cumplimiento ambiental",
    body: "Muchas consultoras abordan la seguridad laboral en aislamiento. En IRCA trabajamos la gestión de riesgos como parte de un sistema integrado: cuando auditamos tu instalación revisamos simultáneamente las obligaciones ambientales y las de seguridad laboral. Eso evita duplicar esfuerzos y genera expedientes coherentes.",
  },
  {
    n: "02",
    title: "Conocimiento real del proceso de inspección STPS",
    body: "Sabemos cómo inspecciona la STPS, qué NOM revisan primero, qué documentos solicitan en campo y qué tipo de observaciones generan actas de incumplimiento. Preparamos tu instalación con ese conocimiento práctico, no solo con el texto de la norma.",
  },
  {
    n: "03",
    title: "Del diagnóstico a la implementación sin cambio de equipo",
    body: "Hacemos el diagnóstico, diseñamos el sistema, acompañamos la implementación y auditamos el resultado. No entregamos un documento y te dejamos solo. El mismo equipo que identificó los hallazgos es el que supervisa que se cierren.",
  },
  {
    n: "04",
    title: "Metodologías probadas en sector industrial y manufactura",
    body: "Tenemos experiencia en empresas de manufactura, químico, metalmecánico, acuícola, minero y construcción. Adaptamos las herramientas de análisis de riesgos al proceso real de cada planta, no a un checklist genérico.",
  },
  {
    n: "05",
    title: "Capacitación que genera cumplimiento sostenido",
    body: "Un sistema de gestión de seguridad sólo funciona si el personal lo entiende y lo aplica. Incluimos formación práctica para supervisores, brigadas y Comisiones Mixtas, con materiales adaptados al nivel de cada grupo.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Qué empresas están obligadas a tener un Programa de Prevención de Accidentes?",
    a: "El PPA es obligatorio para los centros de trabajo clasificados como de alta siniestralidad o que realizan actividades de alto riesgo conforme al Reglamento Federal de Seguridad y Salud en el Trabajo. Sin embargo, la STPS puede requerirlo a cualquier empresa durante una visita de inspección. Elaborar el PPA de forma proactiva reduce significativamente la exposición a sanciones y demuestra compromiso con la seguridad de los trabajadores.",
  },
  {
    q: "¿Qué es la Comisión Mixta de Seguridad e Higiene y cuándo es obligatoria?",
    a: "La Comisión Mixta de Seguridad e Higiene (CMSH) es un órgano paritario —integrado por representantes del patrón y de los trabajadores— que tiene por objeto investigar las causas de accidentes y enfermedades, proponer medidas preventivas y vigilar su cumplimiento. Es obligatoria para todos los centros de trabajo en México, sin importar el número de empleados. La STPS verifica su constitución, registro y funcionamiento activo durante las inspecciones.",
  },
  {
    q: "¿Cuál es la diferencia entre ISO 45001 y el cumplimiento NOM-STPS?",
    a: "Son marcos complementarios, no equivalentes. El cumplimiento NOM-STPS es obligatorio por ley: implica cumplir las normas oficiales mexicanas específicas (equipos de protección, instalaciones eléctricas, manejo de sustancias, etc.) y evitar sanciones. ISO 45001 es un estándar internacional voluntario de gestión sistémica: establece un marco de mejora continua del desempeño en seguridad y salud. Muchas empresas buscan ISO 45001 por exigencia de clientes o mercados internacionales, y su implementación suele facilitar el cumplimiento NOM-STPS como consecuencia.",
  },
  {
    q: "¿Qué NOM-STPS se revisan con mayor frecuencia durante inspecciones?",
    a: "Las NOM de mayor revisión en campo son: NOM-001 (instalaciones eléctricas), NOM-004 (sistemas y dispositivos de seguridad en maquinaria), NOM-005 (manejo y almacenamiento de sustancias químicas peligrosas), NOM-017 (equipo de protección personal), NOM-022 (electricidad estática) y NOM-027 (administración de la seguridad y salud —CMSH—). La NOM-030 sobre servicios preventivos de seguridad y salud también es frecuente en empresas medianas y grandes.",
  },
  {
    q: "¿Qué incluye un Programa Interno de Protección Civil?",
    a: "El PIPC incluye: identificación de riesgos internos y externos de la instalación, medidas de prevención y mitigación, organización de brigadas de emergencia (evacuación, primeros auxilios, prevención y combate de incendios, búsqueda y rescate), plan de evacuación con rutas y puntos de reunión, protocolos de comunicación interna y con autoridades, y programa de simulacros. Es exigido por la Ley General de Protección Civil y la normatividad estatal para instalaciones que rebasan ciertos umbrales de riesgo o número de personas.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Diagnóstico integral que cubre simultáneamente las obligaciones ambientales y de seguridad laboral, generando un solo plan de acción.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="file-text" size={22} />,
    title: "Trámites y Licencias Ambientales",
    desc: "Gestión de LAU, COA y certificaciones ambientales complementarias al sistema de gestión de seguridad y salud.",
    href: "/servicios/tramites-y-licencias-ambientales/",
  },
  {
    color: "green",
    icon: <Icon name="scale" size={22} />,
    title: "Derecho Ambiental",
    desc: "Defensa jurídica ante procedimientos de la STPS o impugnación de sanciones derivadas de inspecciones de seguridad laboral.",
    href: "/servicios/derecho-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="building" size={22} />,
    title: "Capacitación Ambiental",
    desc: "Formación en materia ambiental para el personal, complementaria a la capacitación en seguridad y salud ocupacional.",
    href: "/servicios/capacitacion-ambiental/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function SeguridadYSalud() {
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
            <Eyebrow>Seguridad y Salud Ocupacional · SHE</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Auditorías de seguridad laboral y cumplimiento{" "}
              <span style={{ color: "var(--irca-green)" }}>NOM-STPS</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Diagnóstico, implementación y seguimiento de sistemas de gestión en seguridad y salud ocupacional: desde las NOM-STPS hasta ISO 45001 y Protección Civil.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              La STPS inspecciona con criterios técnicos precisos. Conocer qué normas revisan, qué documentos solicitan y cómo se prioriza cada hallazgo marca la diferencia entre una inspección sin consecuencias y una sanción.
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
              label="Auditoría de seguridad / recorrido en planta"
              sub="Reemplazar con foto real del equipo en auditoría de campo, recorrido de instalaciones o análisis de riesgos."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              El cumplimiento en seguridad y salud laboral se aborda con demasiada frecuencia como una reacción a una inspección: se elaboran los documentos que faltan, se constituye la Comisión Mixta y se archiva el expediente hasta la próxima visita. Ese enfoque genera cumplimiento en papel que no refleja las condiciones reales de la planta —y que no resiste una inspección técnica detallada.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores diseñamos sistemas de gestión de seguridad y salud que funcionan en la operación diaria: matrices de obligaciones actualizadas, análisis de riesgos basados en los procesos reales de cada instalación, programas de prevención implementados y personal capacitado para mantenerlos. El resultado es una empresa que cumple porque tiene el sistema, no porque preparó el expediente.
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
              Cubrimos el ciclo completo de la gestión de seguridad y salud: diagnóstico, implementación, capacitación y auditoría. El alcance se adapta a la madurez del sistema de tu instalación y al sector de actividad.
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
              ¿Cuándo necesita tu empresa apoyo en seguridad y salud?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              La STPS inspecciona de forma periódica y no siempre con aviso previo. La mejor preparación es mantener el sistema activo, no activarlo cuando ya se recibió la notificación de visita.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Recibiste una notificación de inspección de la STPS y necesitas revisar tu estado de cumplimiento.</CheckItem>
              <CheckItem>Tuviste un accidente o incidente en planta y necesitas actualizar tu PPA y tu análisis de riesgos.</CheckItem>
              <CheckItem>Quieres implementar ISO 45001 por exigencia de un cliente, una certificación de cadena de suministro o un banco.</CheckItem>
              <CheckItem>Tu Comisión Mixta no está activa o no tiene su registro vigente ante la STPS.</CheckItem>
              <CheckItem>Tienes una empresa nueva o expansión y necesitas estructurar el sistema de seguridad desde cero.</CheckItem>
              <CheckItem>Tu Programa Interno de Protección Civil está vencido o nunca fue elaborado conforme a la norma vigente.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Capacitación de brigada / recorrido de seguridad"
              sub="Reemplazar con foto real de capacitación en planta, recorrido de seguridad o constitución de Comisión Mixta."
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
            Preguntas frecuentes sobre seguridad y salud ocupacional
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
        headline={<>Un sistema de seguridad que funciona en la operación diaria <span style={{ color: "var(--irca-green)" }}>resiste cualquier inspección</span>.</>}
        copy="Cuéntanos en qué estado está tu sistema de gestión de seguridad y salud y hacemos un diagnóstico inicial sin compromiso. Respondemos en 24 horas hábiles."
        formTitle="Consultar servicio SHE"
        motivoLabel="Necesidad principal"
        motivoOptions={["Diagnóstico NOM-STPS", "Implementar ISO 45001", "Programa de Prevención de Accidentes", "Comisión Mixta de Seguridad", "Protección Civil / PIPC", "Preparación para inspección STPS", "Otro"]}
      />
    </>
  );
}
