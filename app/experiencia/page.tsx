import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiencia — IRCA Consultores",
  description: "Más de 500 proyectos en 25 años. Estudios de impacto ambiental, Phase I y II, control de ruido NOM-081 y seguimientos de largo plazo con Deacero, Vitromex, Frisa, Daltile y más.",
};

/* ── helpers ──────────────────────────────────────────── */

function Eyebrow({ children, color = "var(--irca-green-700)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color }}>
      <span style={{ width: 24, height: 2, background: color, display: "inline-block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

/* ── data ─────────────────────────────────────────────── */

const heroStats = [
  { n: "+25",  label: "Años de operación", sub: "Desde 1999" },
  { n: "+500", label: "Proyectos ejecutados", sub: "Estudios, trámites y litigios" },
  { n: "+50",  label: "Clientes activos", sub: "Nacionales e internacionales" },
  { n: "8",    label: "Sectores", sub: "Industrial · energético · minero · más" },
];

const longTermProjects = [
  { client: "Secretaría de Seguridad Pública — Complejo Penitenciario Islas Marías", services: "MIA, ETJ, PVA, Programas Específicos, Cumplimiento Ambiental en ANP (PROFEPA, SEMARNAT, CONAGUA, UNESCO)", period: "2009 – 2012", sector: "Gubernamental" },
  { client: "CONAPESCA — FONDEN (26 obras civiles)", services: "Avisos de obra emergente, PVA, Condiciones Iniciales, Programas de Cumplimiento y Medidas de Mitigación", period: "2013 – 2019", sector: "Acuícola" },
  { client: "Energía de Ramos SAPI de CV — Planta ciclo sencillo", services: "MIA y gestión, PVA, Programas Específicos y Seguimiento Ambiental", period: "2012 – 2016", sector: "Energético" },
  { client: "Energía de Celaya SA de CV — Planta Ciclo Combinado (Fisterra Energy)", services: "MIA, ERA, Modelación de Emisiones, PVA, Programas Específicos y Cumplimiento", period: "2016 – Vigente", sector: "Energético" },
  { client: "Deacero — Acería Ramos Arizpe", services: "MIA, PVA, Programas Específicos y Seguimiento Ambiental", period: "2010 – Vigente", sector: "Industrial" },
  { client: "Deacero Recycling SA de CV — Patios de Chatarra (nacional)", services: "MIA, Protección Civil, Residuos, Gestión Estatal, Seguimiento Técnico/Jurídico", period: "2017 – Vigente", sector: "Industrial" },
  { client: "Vitromex — Minas y Moliendas (4 moliendas, 12 bancos de material)", services: "MIA, ETJ, PVA, Seguimiento Ambiental y Técnico/Jurídico de Expedientes", period: "2012 – Vigente", sector: "Minero" },
  { client: "Frisa Forjados SA de CV (4 plantas)", services: "MIA, ERA, LAU, SHE, Seguimiento Técnico/Jurídico y Estudios Técnicos", period: "2019 – Vigente", sector: "Industrial" },
  { client: "Fundición Águilas SA de CV — FA Foundry", services: "MIA, ERA, Licencias Ambientales, SHE, Juicio de Amparo, Seguimiento T/J", period: "2018 – Vigente", sector: "Industrial" },
  { client: "Metal Technologies Inc. — Planta de Fundición", services: "MIA, Programas Específicos, Seguimiento Ambiental y Estudios Técnicos", period: "2017 – 2020", sector: "Industrial" },
  { client: "H. Ayuntamiento de San Pedro Garza García", services: "Asesoría normativa y MIA para proyectos urbanos", period: "2021 – Vigente", sector: "Gubernamental" },
  { client: "Coflex SA de CV (Planta Santa Catarina, NL)", services: "Regulación ambiental, MIA, ERA, Planes de Manejo de Residuos", period: "2024 – Vigente", sector: "Industrial" },
  { client: "Daltile México SA de CV (3 plantas, NL y Guanajuato)", services: "Regulación ambiental, MIA, ERA, Planes de Manejo de Residuos", period: "2023 – Vigente", sector: "Industrial" },
  { client: "Aquamex SA de CV (Planta Santa Catarina)", services: "MIA, Planes de Manejo, Permisos y Licencias Ambientales", period: "2024 – Vigente", sector: "Industrial" },
  { client: "Novocast Mexico S de RL de CV (El Carmen, NL)", services: "Regulación ambiental, MIA, ERA, Planes de Manejo", period: "2025 – Vigente", sector: "Industrial" },
  { client: "ASK Chemicals de México (Planta El Carmen, NL)", services: "Regulación en materia de cumplimiento normativo ambiental", period: "2025 – Vigente", sector: "Industrial" },
  { client: "Vesuvius México SA de CV (2 plantas)", services: "ERA, COA, LAU, Juicio de Amparo, Auditoría de Cumplimiento", period: "2021 – Vigente", sector: "Industrial" },
  { client: "Gobierno Municipal San Pedro Garza García", services: "Cumplimiento normativo y MIA para proyectos urbanos municipales", period: "2021 – Vigente", sector: "Gubernamental" },
];

const phaseStudies = [
  "REA Magnet Wire — Planta Ciénega de Flores (Technology Park)",
  "Manufacturas Vitromex SA de CV — Planta Saltillo (Phase I)",
  "Autotransportes MOR SA de CV — Ciénega de Flores (Phase I y II)",
  "Engine Power Components Inc. — Parque Industrial Las Américas, Torreón",
  "Bos Automotive Products — Irapuato, Gto.",
  "Pentair Technical Products — Parque Industrial del Norte, Reynosa (Phase I y II)",
  "Morrison Products Inc. — Parque Industrial La Silla, Apodaca",
  "Química RANA SA de CV — Santa Catarina, NL (Phase I y II)",
  "Carbone Lorraine — Guadalupe, NL",
  "Praxair — Tlalnepantla, Estado de México",
  "Terminal de Distribución — Complejo Penitenciario Islas Marías (Phase I, II y Caracterización)",
  "Keystone Automotive — Linares, NL",
];

const ruidoClientes = [
  "Hunter Douglas — Planta Apodaca",
  "Prolec GE — Campus II y Campus III",
  "Novocast S de RL de CV",
  "Vitromex — Planta Saltillo",
];

const sectores = [
  { label: "Industrial",    color: "green", desc: "Manufactura, fundición, química, cerámica y acería" },
  { label: "Energético",    color: "blue",  desc: "Plantas de generación ciclo sencillo y combinado" },
  { label: "Minero",        color: "green", desc: "Bancos de material, moliendas y minas a cielo abierto" },
  { label: "Acuícola",      color: "blue",  desc: "Obras de pesca e infraestructura portuaria pesquera" },
  { label: "Inmobiliario",  color: "green", desc: "Desarrollos urbanos, parques industriales y comercial" },
  { label: "Ferroviario",   color: "blue",  desc: "Derechos de vía e infraestructura de transporte" },
  { label: "Portuario",     color: "green", desc: "Terminales marítimas y logística costera" },
  { label: "Gubernamental", color: "blue",  desc: "Municipios, dependencias federales y estatales" },
];

const authorities = ["SEMARNAT", "PROFEPA", "CONAGUA", "STPS", "COFEPRIS", "CONANP", "Secretarías estatales"];

const vigentes = longTermProjects.filter(p => p.period.includes("Vigente")).length;
const completados = longTermProjects.length - vigentes;

/* ── page ─────────────────────────────────────────────── */

export default function Experiencia() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pt-16 md:pt-24 pb-0" style={{ background: "linear-gradient(180deg,#fff 0%,var(--bg-2) 100%)", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2, pointerEvents: "none" }} aria-hidden="true">
          <defs>
            <pattern id="topo-exp" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 12 20 20 T40 20" stroke="#C7E2F0" strokeWidth="1" fill="none"/>
              <path d="M0 30 Q10 22 20 30 T40 30" stroke="#DCEFCB" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-exp)"/>
        </svg>

        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Trayectoria comprobada</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(32px,4.5vw,56px)",
            letterSpacing: "-0.03em", lineHeight: 1.05,
            margin: "18px 0 20px", color: "var(--fg-1)", maxWidth: "22ch",
          }}>
            Más de 500 proyectos en{" "}
            <span style={{ color: "var(--irca-green)" }}>25 años de operación continua.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg-3)", maxWidth: "58ch", margin: "0 0 48px" }}>
            Estudios técnicos, trámites de licenciamiento, litigios ambientales y seguimientos de largo plazo
            en ocho sectores de la economía mexicana. Esta es parte de nuestra trayectoria.
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border-soft)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-2)" }}>
            {heroStats.map(({ n, label, sub }, i) => (
              <div key={n} style={{ background: "#fff", padding: "24px 22px" }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: "clamp(36px,4vw,52px)", letterSpacing: "-0.04em", lineHeight: 1,
                  color: i % 2 === 0 ? "var(--irca-green)" : "var(--irca-blue)",
                }}>{n}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-1)", marginTop: 8 }}>{label}</div>
                <div style={{ fontSize: 11, color: "var(--fg-4)", marginTop: 3 }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Status pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "24px 0 0", paddingBottom: 64 }}>
            <span style={{ padding: "6px 14px", borderRadius: 999, background: "var(--success-bg)", color: "var(--success)", fontSize: 13, fontWeight: 700 }}>
              {vigentes} proyectos vigentes
            </span>
            <span style={{ padding: "6px 14px", borderRadius: 999, background: "var(--bg-3)", color: "var(--fg-3)", fontSize: 13, fontWeight: 700 }}>
              {completados} proyectos completados (listados)
            </span>
          </div>
        </div>
      </section>

      {/* ── TABLA DE PROYECTOS ────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-10">
            <div>
              <Eyebrow>Proyectos representativos</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,38px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "14px 0 0", color: "var(--fg-1)" }}>
                Seguimientos ambientales de largo plazo
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>
                Los proyectos que se listan a continuación son una muestra representativa de nuestra trayectoria.
                Por acuerdo con nuestros clientes, el registro completo se mantiene de manera confidencial.
              </p>
            </div>
          </div>

          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid var(--border-soft)", boxShadow: "var(--shadow-1)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "var(--bg-2)", borderBottom: "2px solid var(--border-soft)" }}>
                  <th style={{ textAlign: "left", padding: "13px 18px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", whiteSpace: "nowrap" }}>Cliente / Proyecto</th>
                  <th style={{ textAlign: "left", padding: "13px 18px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)" }}>Servicios prestados</th>
                  <th style={{ textAlign: "left", padding: "13px 18px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", whiteSpace: "nowrap" }}>Sector</th>
                  <th style={{ textAlign: "right", padding: "13px 18px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", whiteSpace: "nowrap" }}>Período</th>
                </tr>
              </thead>
              <tbody>
                {longTermProjects.map(({ client, services, period, sector }, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border-soft)", background: i % 2 === 0 ? "#fff" : "var(--bg-2)" }}>
                    <td style={{ padding: "14px 18px", fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.35, verticalAlign: "top", minWidth: 220, maxWidth: 300 }}>{client}</td>
                    <td style={{ padding: "14px 18px", color: "var(--fg-3)", lineHeight: 1.5, verticalAlign: "top", maxWidth: 360 }}>{services}</td>
                    <td style={{ padding: "14px 18px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "var(--fg-4)" }}>{sector}</span>
                    </td>
                    <td style={{ padding: "14px 18px", whiteSpace: "nowrap", verticalAlign: "top", textAlign: "right" }}>
                      <span style={{
                        display: "inline-block", padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                        background: period.includes("Vigente") ? "var(--success-bg)" : "var(--bg-3)",
                        color: period.includes("Vigente") ? "var(--success)" : "var(--fg-4)",
                      }}>
                        {period}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CAPACIDADES ESPECIALIZADAS ────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-deep)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: -100, bottom: -100, opacity: 0.07, pointerEvents: "none" }} width="500" height="500" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {[5,10,15,20,25,30,35,40].map(r => <circle key={r} cx="50" cy="50" r={r} stroke="#fff" strokeWidth="0.5" />)}
        </svg>
        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow color="rgba(255,255,255,0.7)">Capacidades especializadas</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,42px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 48px", color: "#fff", maxWidth: "28ch" }}>
            Especialidades que distinguen la práctica de IRCA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Phase I & II */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 999, background: "rgba(0,128,192,0.15)", border: "1px solid rgba(0,128,192,0.3)", color: "var(--irca-blue)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 18 }}>
                ASTM E1527 · E1903
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 12px", color: "#fff" }}>
                Evaluación Ambiental de Sitio Phase I y II
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: "0 0 22px" }}>
                Amplia trayectoria en due diligence ambiental para fusiones, adquisiciones, cierres y
                cambios de uso de instalaciones industriales. Metodología ASTM, informe en español e inglés.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {phaseStudies.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: 999, background: "var(--irca-blue)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", lineHeight: 1.45 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ruido NOM-081 */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 999, background: "rgba(111,176,63,0.15)", border: "1px solid rgba(111,176,63,0.3)", color: "var(--irca-green)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 18 }}>
                NOM-081-SEMARNAT-1994
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 12px", color: "#fff" }}>
                Control de ruido perimetral
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: "0 0 22px" }}>
                Modelos propios de evaluación acústica, sonómetros calibrados y software de modelación de
                refracción. Informes con validez regulatoria ante SEMARNAT y PROFEPA.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
                {ruidoClientes.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "13px 16px", background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--irca-green)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{c}</span>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "8px 0 24px" }} />

              {/* Authorities */}
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                Autoridades ante las que actuamos
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {authorities.map(a => (
                  <span key={a} style={{ padding: "5px 12px", borderRadius: 999, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORES ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <Eyebrow>Alcance sectorial</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,38px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "14px 0 16px", color: "var(--fg-1)" }}>
                Ocho sectores. Una sola firma.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-3)", margin: "0 0 32px", maxWidth: "50ch" }}>
                La versatilidad técnico-jurídica de IRCA nos permite atender operaciones de sectores muy
                distintos entre sí, cada uno con su propia normatividad, calendario de cumplimiento y
                perfil de riesgo ambiental.
              </p>

              {/* Coverage chips */}
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 10 }}>
                Cobertura geográfica
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Nuevo León", "Coahuila", "Tamaulipas", "Sonora", "Guanajuato", "CDMX", "Nacional"].map(c => (
                  <span key={c} style={{ padding: "5px 12px", borderRadius: 999, background: "var(--irca-blue-50)", border: "1px solid var(--irca-blue-100)", fontSize: 12, fontWeight: 700, color: "var(--irca-blue-700)" }}>{c}</span>
                ))}
              </div>
            </div>

            {/* Sector cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sectores.map(({ label, color, desc }) => (
                <div key={label} style={{
                  background: "#fff", border: "1px solid var(--border-soft)",
                  borderRadius: 12, padding: "16px 18px",
                  display: "flex", flexDirection: "column", gap: 6,
                }}>
                  <div style={{
                    display: "inline-block", padding: "2px 10px", borderRadius: 999,
                    background: color === "green" ? "var(--irca-green-50)" : "var(--irca-blue-50)",
                    color: color === "green" ? "var(--irca-green-700)" : "var(--irca-blue-700)",
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", alignSelf: "flex-start",
                  }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--fg-3)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Eyebrow>¿Trabajamos juntos?</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,3.5vw,44px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "16px 0 12px", color: "var(--fg-1)", maxWidth: "26ch" }}>
            Tu operación merece la experiencia de una firma que ya conoce tu sector.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--fg-3)", maxWidth: "52ch", margin: "0 0 32px" }}>
            Cuéntanos sobre tu proyecto, el sector en que operas y el reto ambiental que enfrentas.
            Te respondemos en 24 horas hábiles.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/contacto/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--irca-green)", color: "#fff",
                padding: "14px 26px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                borderRadius: 10, textDecoration: "none", boxShadow: "var(--shadow-1)",
              }}
            >
              Solicitar información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link
              href="/sobre-nosotros/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)",
                padding: "14px 26px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                borderRadius: 10, textDecoration: "none",
              }}
            >
              Conoce al equipo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
