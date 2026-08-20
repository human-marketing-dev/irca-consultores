import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceContactSection from "@/components/servicios/ServiceContactSection";

export const metadata: Metadata = {
  title: "Estudios, Trámites y Administración de Autorizaciones",
  description: "MIA, ERA, PPA, LAU, LFF, CUSTF, planes de manejo de residuos y COA ante SEMARNAT, STPS, COFEPRIS, CONAGUA y gobiernos estatales. Seguimiento hasta resolución favorable. IRCA Consultores.",
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
  { label: "MIA modalidad particular",        status: "En evaluación", palette: { bg: "var(--info-bg)",    fg: "var(--info)"    } },
  { label: "LAU Industria Química",           status: "Autorizada",    palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
  { label: "CUSTF — 4.2 ha",                  status: "En trámite",    palette: { bg: "var(--warning-bg)", fg: "var(--warning)" } },
  { label: "COA Federal 2025",                status: "Presentada",    palette: { bg: "var(--success-bg)", fg: "var(--success)" } },
];

/* ── subservicios ───────────────────────────────────── */

const subservicios = [
  {
    href: "/servicios/tramites-y-autorizaciones-ambientales/estudio-de-impacto-ambiental/",
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h6"/>
      </svg>
    ),
    label: "Impacto ambiental",
    title: "Manifestación de Impacto Ambiental (MIA)",
    desc: "El estudio que autoriza tu proyecto ante SEMARNAT o la autoridad estatal. Modalidad particular o regional, con la caracterización, la evaluación de impactos y las medidas de mitigación que sostienen el resolutivo.",
  },
  {
    href: "/servicios/tramites-y-autorizaciones-ambientales/estudio-de-riesgo-ambiental/",
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    label: "Riesgo ambiental",
    title: "Estudio de Riesgo Ambiental (ERA)",
    desc: "Obligatorio para actividades altamente riesgosas. Modelación de escenarios, radios de afectación y medidas preventivas, base técnica del Programa de Prevención de Accidentes ante SEMARNAT y Protección Civil.",
  },
  {
    href: "/servicios/tramites-y-autorizaciones-ambientales/estudio-tecnico-justificativo/",
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/><path d="M12 12c0-4 3-7 8-7 0 5-3 8-8 8z"/><path d="M12 14c0-3-2.5-5.5-6.5-5.5C5.5 12.5 8 15 12 15z"/>
      </svg>
    ),
    label: "Forestal",
    title: "Cambio de Uso de Suelo Forestal (ETJ / CUSTF)",
    desc: "Estudio Técnico Justificativo para remover vegetación forestal en terrenos con esa condición. Sin la autorización de CUSTF, ninguna obra sobre suelo forestal puede iniciar legalmente.",
  },
];

/* ── alcance cards ──────────────────────────────────── */

const alcanceCards = [
  {
    color: "green",
    icon: <Icon name="file-text" size={24} />,
    title: "Impacto Ambiental (MIA) y Riesgo Ambiental (ERA)",
    desc: "Los dos estudios que abren la puerta a la autorización federal o estatal de un proyecto. Elaboramos la manifestación y, cuando la actividad es altamente riesgosa, el estudio de riesgo que la acompaña, con la modelación y las medidas que exige la autoridad.",
  },
  {
    color: "blue",
    icon: <Icon name="alert-triangle" size={24} />,
    title: "Programa de Prevención de Accidentes (PPA)",
    desc: "Documento derivado del ERA que integra los escenarios de riesgo, las medidas preventivas y los protocolos de respuesta. Se presenta ante SEMARNAT y es requisito para operar actividades altamente riesgosas.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10"/><path d="M7 13h6"/>
      </svg>
    ),
    title: "Licencia Ambiental Única (LAU) y Licencia de Fuentes Fijas (LFF)",
    desc: "El permiso de operación en materia de atmósfera. Gestionamos la LAU federal para fuentes de jurisdicción federal y la licencia estatal de fuentes fijas, incluidas sus actualizaciones cuando cambia el proceso o la capacidad instalada.",
  },
  {
    color: "blue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/><path d="M12 12c0-4 3-7 8-7 0 5-3 8-8 8z"/><path d="M12 14c0-3-2.5-5.5-6.5-5.5C5.5 12.5 8 15 12 15z"/>
      </svg>
    ),
    title: "Cambio de Uso de Suelo Forestal (CUSTF)",
    desc: "Autorización indispensable para retirar vegetación forestal. Incluye el Estudio Técnico Justificativo, el cálculo de la compensación ambiental y el seguimiento del pago al Fondo Forestal Mexicano.",
  },
  {
    color: "green",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/><path d="M10 11v5"/><path d="M14 11v5"/>
      </svg>
    ),
    title: "Planes de Manejo de Residuos (PMR) y COA",
    desc: "Registro como generador, plan de manejo de residuos peligrosos y de manejo especial, y la Cédula de Operación Anual que consolida cada año emisiones, descargas, residuos y transferencias ante el RETC.",
  },
  {
    color: "blue",
    icon: <Icon name="building" size={24} />,
    title: "Trámites ante SEMARNAT, STPS, COFEPRIS, CONAGUA y estados",
    desc: "Concesiones y permisos de descarga de CONAGUA, registros ante COFEPRIS y STPS, licencias de uso de suelo, dictámenes de arbolado y demás autorizaciones estatales y municipales. Un solo interlocutor para todas las ventanillas.",
  },
  {
    color: "green",
    icon: <Icon name="calendar" size={24} />,
    title: "Administración del expediente en el tiempo",
    desc: "La autorización no termina cuando se emite: hay condicionantes que acreditar, informes que presentar y vigencias que renovar. Administramos el expediente completo para que ninguna obligación derivada se pierda de vista.",
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
    title: "Servicios Legales y Atención de Autoridades",
    desc: "Defensa jurídica cuando un trámite es impugnado, negado o cuando la autoridad inicia un procedimiento sancionador.",
    href: "/servicios/servicios-legales-y-atencion-de-autoridades/",
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
    title: "Auditoría y Diagnóstico Seguridad y Salud",
    desc: "Cumplimiento de obligaciones de seguridad y salud ante STPS, complementario a los trámites ambientales federales.",
    href: "/servicios/auditoria-seguridad-y-salud/",
  },
];

/* ══════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function TramitesYAutorizaciones() {
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
            <Eyebrow>Estudios, Trámites y Administración de Autorizaciones</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px,4.5vw,56px)", letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: "18px 0 20px", color: "var(--ink-1000)",
            }}>
              Del estudio a la autorización, y de la autorización{" "}
              <span style={{ color: "var(--irca-green)" }}>a su administración</span>.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 14px" }}>
              MIA, ERA, PPA, LAU, LFF, CUSTF, planes de manejo y COA ante SEMARNAT, STPS, COFEPRIS, CONAGUA y gobiernos estatales.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "54ch", margin: "0 0 32px" }}>
              Cada autorización tiene su estudio, su ventanilla y sus condicionantes. Seguimiento hasta resolución favorable y administración del expediente durante toda su vigencia.
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
          <Eyebrow color="var(--irca-blue-700)">Estudios especializados</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "var(--ink-1000)" }}>
              Los estudios que sustentan cada autorización
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
              Ninguna autorización relevante se resuelve solo con un formato. Detrás de cada una hay un estudio técnico que la autoridad evalúa, y de su calidad depende que el trámite avance o se detenga en prevención.
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
        headline={<>Un expediente bien armado desde el inicio <span style={{ color: "var(--irca-green)" }}>evita meses de prevención</span> y de espera.</>}
        copy="Cuéntanos qué proyecto quieres autorizar o qué obligaciones tienes vigentes —o si aún no sabes cuáles te aplican— y hacemos el diagnóstico de trámites que corresponde a tu operación."
        formTitle="Consultar estudios y autorizaciones"
        motivoLabel="Trámite de interés"
        motivoOptions={["Impacto Ambiental (MIA)", "Riesgo Ambiental (ERA) y PPA", "Licencia Ambiental Única (LAU) o LFF", "Cambio de Uso de Suelo Forestal (CUSTF)", "Plan de manejo de residuos o COA", "Trámite CONAGUA (agua)", "No sé qué trámites necesito", "Otro"]}
      />
    </>
  );
}
