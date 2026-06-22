import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Trámites y Licencias Ambientales",
  description: "Licencia Ambiental Única (LAU), Cédula de Operación Anual (COA), trámites CONAGUA, permisos de residuos y certificaciones ambientales ante SEMARNAT, PROFEPA y dependencias estatales. IRCA Consultores.",
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

const tramitesList = [
  { label: "LAU Industria Química",          status: "En revisión",  palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "COA Federal 2025",               status: "Presentada",   palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "Concesión CONAGUA agua subterr.", status: "En trámite",  palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "Industria Limpia PROFEPA",       status: "Certificado",  palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── subservicios ───────────────────────────────────── */

const subservicios = [
  {
    href: "/servicios/tramites-y-licencias-ambientales/industria-limpia/",
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    label: "Industria Limpia · 590 búsquedas/mes",
    title: "Certificación Industria Limpia (PROFEPA)",
    desc: "Obtén o renueva el Certificado de Industria Limpia ante PROFEPA. El programa reconoce el desempeño ambiental sobresaliente y reduce tu exposición a inspecciones y procedimientos sancionadores.",
  },
  {
    href: "/servicios/tramites-y-licencias-ambientales/iso-14001/",
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    label: "ISO 14001 · 480 búsquedas/mes",
    title: "ISO 14001 y Sistemas de Gestión Ambiental",
    desc: "Implementación, mantenimiento y auditoría de Sistemas de Gestión Ambiental bajo ISO 14001:2015. Desde el diagnóstico de brechas hasta la certificación con organismo acreditado.",
  },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "green",
    icon: <Icon name="file-text" size={24} />,
    title: "Licencia Ambiental Única (LAU) federal y estatal",
    desc: "Obtención y renovación de la LAU ante SEMARNAT y dependencias ambientales estatales. Aplicamos el conocimiento de los criterios de evaluación de cada unidad para estructurar expedientes sólidos y reducir el tiempo de resolución.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h8"/>
      </svg>
    ),
    title: "Cédula de Operación Anual (COA) federal y estatal",
    desc: "Elaboración y presentación de la COA en tiempo y forma, federal (SEMARNAT) y estatal según corresponda. Incluimos validación de datos de emisiones, residuos y consumos con base en tu información operativa real.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
    title: "Trámites CONAGUA: permisos y concesiones",
    desc: "Gestión de permisos de descarga de aguas residuales, títulos de concesión de agua superficial y subterránea, y modificaciones a concesiones existentes ante la Comisión Nacional del Agua.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
      </svg>
    ),
    title: "Permisos de recolección y transporte de residuos",
    desc: "Obtención de autorizaciones para el manejo, recolección, transporte y disposición final de residuos peligrosos y de manejo especial ante SEMARNAT y autoridades estatales.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Licencias de uso de suelo y dictámenes de arbolado",
    desc: "Trámites de compatibilidad de uso de suelo ante municipios y estados, incluyendo dictámenes técnicos de arbolado urbano para proyectos que requieren remoción o afectación de vegetación en zonas urbanas.",
  },
];

/* ── ¿por qué irca? pillars ─────────────────────────── */

const pillars = [
  {
    n: "01",
    title: "Conocemos los criterios reales de cada ventanilla",
    body: "No interpretamos la norma en abstracto: sabemos qué revisa cada unidad de SEMARNAT, cuáles son los requisitos no escritos de CONAGUA en cada cuenca y cuánto tarda en promedio cada trámite. Eso nos permite estructurar el expediente correcto desde el primer envío.",
  },
  {
    n: "02",
    title: "25 años gestionando trámites en México",
    body: "Desde 1999 hemos tramitado LAU, COA, concesiones de agua, autorizaciones de residuos y certificaciones ante prácticamente todas las dependencias ambientales federales y de los estados del norte del país.",
  },
  {
    n: "03",
    title: "El mismo equipo que auditó, tramita",
    body: "Si ya hiciste una auditoría con nosotros, el expediente técnico de tu instalación ya está en nuestras manos. Eso elimina la curva de aprendizaje y reduce el tiempo de preparación de documentos.",
  },
  {
    n: "04",
    title: "Seguimiento hasta resolución, no hasta entrega",
    body: "Entregamos el expediente y lo seguimos. Respondemos observaciones de la autoridad, aportamos información complementaria y reportamos el estatus del trámite hasta que tienes el documento en mano.",
  },
  {
    n: "05",
    title: "Trazabilidad completa del trámite",
    body: "Documentamos cada paso del proceso: fechas de presentación, folios, observaciones recibidas, respuestas enviadas. Si en el futuro la autoridad pide historial del trámite o surge una impugnación, el expediente está completo.",
  },
];

/* ── faq data ───────────────────────────────────────── */

const faqs = [
  {
    q: "¿Qué instalaciones necesitan Licencia Ambiental Única (LAU)?",
    a: "La LAU es obligatoria para todas las instalaciones incluidas en el listado de actividades de competencia federal de la LGEEPA. Incluye industria química, petroquímica, pinturas y tintas, automotriz, electrónica, cemento, papel, azúcar, bebidas, tratamiento de residuos peligrosos, entre otras. Muchos estados tienen su propio listado para instalaciones de competencia estatal. Si tienes dudas sobre si tu instalación requiere LAU, podemos revisarlo sin costo.",
  },
  {
    q: "¿Cuándo se presenta la Cédula de Operación Anual (COA)?",
    a: "La COA federal se presenta durante el mes de enero de cada año, reportando los datos del año anterior. El incumplimiento puede derivar en sanciones de PROFEPA. Las COA estatales tienen calendarios propios que varían por entidad. En IRCA te ayudamos a identificar todas las obligaciones de reporte que aplican a tu instalación —federal y estatal— y a presentarlas en tiempo.",
  },
  {
    q: "¿Cuánto tarda obtener una concesión de agua de CONAGUA?",
    a: "Los plazos varían según el tipo de aprovechamiento (superficial o subterráneo), la cuenca hidrológica y la disponibilidad de agua declarada. En condiciones normales, una nueva concesión puede tardar entre 6 y 18 meses. Las modificaciones a concesiones existentes suelen ser más rápidas. CONAGUA puede emitir suspensiones provisionales del aprovechamiento mientras resuelve el trámite, lo que hace crítico iniciar antes de que expire la concesión vigente.",
  },
  {
    q: "¿Cuál es la diferencia entre la Licencia Ambiental Única y el permiso de funcionamiento municipal?",
    a: "Son trámites distintos con distintas autoridades. La LAU la emite SEMARNAT o la dependencia ambiental estatal y acredita el cumplimiento de la normatividad ambiental. El permiso de funcionamiento lo emite el municipio y se refiere a uso de suelo y zonificación. Para operar legalmente, en general se necesitan ambos. Hay instalaciones que también requieren dictámenes de protección civil y visto bueno de otras dependencias.",
  },
  {
    q: "¿Qué ventajas tiene la certificación Industria Limpia más allá del reconocimiento?",
    a: "El Certificado de Industria Limpia de PROFEPA tiene beneficios operativos concretos: reduce la frecuencia de visitas de inspección no programadas, puede usarse como diferenciador en licitaciones públicas y cadenas de suministro, facilita acceso a ciertos créditos verdes y mejora la relación con la autoridad reguladora. Además, el proceso de certificación suele identificar oportunidades de eficiencia que se traducen en ahorro real.",
  },
];

/* ── related services ───────────────────────────────── */

const related = [
  {
    color: "green",
    icon: <Icon name="shield-check" size={22} />,
    title: "Auditoría y Diagnóstico Ambiental",
    desc: "Diagnóstico previo que identifica los trámites pendientes y las brechas de cumplimiento antes de que llegue la autoridad.",
    href: "/servicios/auditoria-ambiental/",
  },
  {
    color: "blue",
    icon: <Icon name="scale" size={22} />,
    title: "Derecho Ambiental",
    desc: "Defensa jurídica cuando un trámite es impugnado, negado o cuando la autoridad inicia un procedimiento sancionador.",
    href: "/servicios/derecho-ambiental/",
  },
  {
    color: "green",
    icon: <Icon name="flask" size={22} />,
    title: "Estudios Ambientales",
    desc: "MIA, ERA y ETJ que soportan técnicamente los trámites de autorización ante SEMARNAT y otras dependencias.",
    href: "/servicios/estudios-ambientales/",
  },
  {
    color: "blue",
    icon: <Icon name="hardhat" size={22} />,
    title: "SHE / Seguridad y Salud Ocupacional",
    desc: "Cumplimiento de obligaciones de seguridad y salud ante STPS, complementario a los trámites ambientales federales.",
    href: "/servicios/seguridad-y-salud-ocupacional/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function TramitesYLicencias() {
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
            <pattern id="topoTramites" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M0 22 Q11 13 22 22 T44 22" stroke="#DCEFCB" strokeWidth="1" fill="none" />
              <path d="M0 33 Q11 24 22 33 T44 33" stroke="#C7E2F0" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topoTramites)" />
        </svg>

        <div
          className="relative grid grid-cols-1 md:[grid-template-columns:1.15fr_0.95fr] gap-12 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Copy */}
          <div>
            <Eyebrow>Trámites y Licencias Ambientales</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Licencia ambiental única y trámites ante{" "}
              <span style={{ color: "var(--irca-green)" }}>SEMARNAT, PROFEPA y CONAGUA</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              Gestionamos todos los trámites ambientales de tu instalación: LAU, COA, concesiones de agua, permisos de residuos y certificaciones de desempeño ambiental.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Cada trámite tiene sus tiempos, sus requisitos y su ventanilla. Un expediente mal integrado puede retrasar meses una operación. Nosotros lo hacemos bien desde el primer envío.
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
              <span>SEMARNAT</span><span>PROFEPA</span><span>CONAGUA</span><span>LAU · COA</span>
            </div>
          </div>

          {/* Trámites status card */}
          <div className="hidden md:block">
            <div style={{ background: "#fff", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 24, boxShadow: "var(--shadow-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--irca-green)", boxShadow: "0 0 0 4px var(--irca-green-50)" }} />
                Trámites en gestión
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.02em", marginTop: 14, lineHeight: 1.15 }}>
                Seguimiento activo de expedientes
              </div>
              <div style={{ height: 1, background: "var(--border-soft)", margin: "18px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {tramitesList.map(({ label, status, palette }) => (
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
                  { label: "LAU activas",  n: "12" },
                  { label: "COA anuales",  n: "28" },
                  { label: "Concesiones",  n: "7"  },
                  { label: "Certificados", n: "9"  },
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
              Por qué los trámites ambientales fallan y cómo evitarlo
            </h2>
            <ImgPlaceholder
              ratio="16/9"
              label="Gestión de trámites / revisión de expediente"
              sub="Reemplazar con foto real del equipo revisando documentos, en gestión ante ventanilla o en reunión con la autoridad."
            />
            <p style={{ fontSize: 11, color: "var(--fg-4)", letterSpacing: "0.04em", margin: "8px 0 0" }}>Placeholder · pendiente material fotográfico del cliente</p>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 22px" }}>
              La mayoría de los retrasos en trámites ambientales no ocurren por falta de voluntad de la autoridad: ocurren por expedientes incompletos, datos inconsistentes con reportes previos, argumentos mal dirigidos o formatos desactualizados. La autoridad regresa el expediente con observaciones, el trámite se reinicia y el reloj corre —semanas o meses— mientras la operación espera o se expone a una irregularidad.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-3)", margin: 0 }}>
              En IRCA Consultores llevamos más de 25 años gestionando trámites ambientales ante SEMARNAT, PROFEPA, CONAGUA y dependencias estatales. Conocemos el proceso desde adentro: qué documentos realmente revisan, qué inconsistencias generan observaciones y cuáles son los tiempos reales de resolución en cada dependencia. Eso nos permite preparar expedientes que se resuelven en tiempo y sin retrocesos innecesarios.
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

      {/* ── CERTIFICACIONES ESPECIALIZADAS (subservicios) ─ */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="var(--irca-blue-700)">Certificaciones especializadas</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              Más allá del cumplimiento: diferénciate con una certificación
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              La Licencia Ambiental Única y la COA son el mínimo exigido. Las certificaciones de desempeño ambiental van más allá: demuestran a clientes, socios e inversionistas que tu operación supera los estándares regulatorios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", color: "var(--fg-1)", margin: 0, lineHeight: 1.2 }}>{title}</h3>
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
              ¿Qué trámites y licencias gestionamos?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Cubrimos el universo completo de obligaciones y autorizaciones ambientales de una instalación industrial en México: desde las licencias de operación hasta los permisos de transporte de residuos y los dictámenes de arbolado urbano.
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.25 }}>¿No sabes qué trámites necesita tu instalación?</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>Hacemos un diagnóstico de obligaciones sin costo para que conozcas exactamente qué está pendiente.</p>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
                Consultar sin costo <Icon name="arrow-right" size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── ¿CUÁNDO? ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--irca-green-50)" }}>
        <div
          className="grid grid-cols-1 md:[grid-template-columns:1.05fr_0.95fr] gap-10 md:gap-16 items-center"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <div>
            <Eyebrow>Para quién es</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 20px", color: "var(--ink-1000)" }}>
              ¿Cuándo necesitas gestionar o regularizar tus trámites?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: "0 0 28px" }}>
              Hay momentos en que los trámites ambientales se vuelven urgentes: una inspección inminente, una fusión que requiere due diligence, o simplemente la detección de una obligación vencida. En todos los casos, cuanto antes se actúa, más opciones hay.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              <CheckItem>Vas a iniciar operaciones o construir y necesitas las autorizaciones previas.</CheckItem>
              <CheckItem>Tu LAU venció o fue modificada y necesitas actualizarla ante la autoridad competente.</CheckItem>
              <CheckItem>Tienes una COA pendiente de presentar o detectaste errores en reportes anteriores.</CheckItem>
              <CheckItem>Tu concesión de agua está próxima a vencer y necesitas renovarla o modificarla.</CheckItem>
              <CheckItem>Recibiste una observación de PROFEPA sobre falta de permisos o licencias vigentes.</CheckItem>
              <CheckItem>Quieres impulsar una certificación de desempeño ambiental para diferenciarte o cumplir con un cliente.</CheckItem>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ImgPlaceholder
              ratio="4/3"
              label="Gestión ante ventanilla / presentación de expediente"
              sub="Reemplazar con foto real del equipo en gestión, reunión con la autoridad o revisión de expediente."
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.25 }}>Un expediente mal integrado puede costar meses de operación.</div>
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
            Preguntas frecuentes sobre trámites y licencias ambientales
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
        headline={<>Un trámite bien gestionado desde el inicio <span style={{ color: "var(--irca-green)" }}>evita meses de espera</span> y exposición a sanciones.</>}
        copy="Cuéntanos qué licencias o trámites necesitas —o no sabes si necesitas— y hacemos un diagnóstico de obligaciones sin costo. Sin compromiso, con respuesta en 24 horas hábiles."
        formTitle="Consultar trámite ambiental"
        motivoLabel="Trámite de interés"
        motivoOptions={["Licencia Ambiental Única (LAU)", "Cédula de Operación Anual (COA)", "Trámite CONAGUA (agua)", "Permiso de residuos peligrosos", "Certificación Industria Limpia", "ISO 14001", "No sé qué trámites necesito", "Otro"]}
      />
    </>
  );
}
