import Icon from "@/components/ui/Icon";

const clients = [
  "Deacero", "Vitromex", "Frisa", "Fundición Águilas",
  "Daltile", "Vesuvius", "Prolec GE", "Hunter Douglas",
  "Fisterra Energy", "ASK Chemicals", "Coflex", "Novocast",
];

const caseStudies = [
  { proj: "SSP — Islas Marías",            svc: "MIA, ETJ, PVA, ANP",                period: "2009 – 2012" },
  { proj: "CONAPESCA · FONDEN",            svc: "Avisos de obra, PVA, mitigación",   period: "2013 – 2018" },
  { proj: "Energía de Celaya · Fisterra",  svc: "MIA, ERA, modelación de emisiones", period: "2016 – Vigente" },
  { proj: "Deacero — Acería Ramos Arizpe", svc: "MIA, PVA, programas específicos",   period: "2010 – Vigente" },
  { proj: "Frisa Forjados (4 plantas)",    svc: "MIA, ERA, LAU, SHE",                period: "2019 – Vigente" },
  { proj: "San Pedro Garza García",        svc: "MIA municipal, asesoría normativa", period: "2021 – Vigente" },
];

export default function Clients() {
  return (
    <section id="clients" style={{ padding: "88px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, marginBottom: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-blue-700)" }}>
              <span style={{ width: 24, height: 2, background: "var(--irca-blue-700)", display: "inline-block" }} />
              Trayectoria comprobada
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.022em", lineHeight: 1.1, margin: "16px 0 0", color: "var(--ink-1000)", maxWidth: "22ch" }}>
              Clientes que renovaron su confianza, año tras año.
            </h2>
          </div>
          <a
            href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "10px 18px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, borderRadius: 8, textDecoration: "none" }}
          >
            Casos de estudio <Icon name="arrow-up-right" size={15} />
          </a>
        </div>

        {/* Client logo grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, border: "1px solid var(--border-soft)", borderRadius: 12, overflow: "hidden" }}>
          {clients.map((c, i) => (
            <div
              key={c}
              style={{
                padding: "28px 16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRight: i % 6 === 5 ? 0 : "1px solid var(--border-soft)",
                borderBottom: i < 6 ? "1px solid var(--border-soft)" : 0,
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                color: "var(--fg-3)", letterSpacing: "-0.01em", background: "#fff",
                textAlign: "center",
              }}
            >
              {c}
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 32 }}>
          {caseStudies.map(({ proj, svc, period }) => (
            <article
              key={proj}
              style={{ background: "var(--bg-2)", borderRadius: 12, padding: 20, border: "1px solid var(--border-soft)" }}
            >
              <div style={{ fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{period}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.015em", marginTop: 8, color: "var(--fg-1)" }}>{proj}</div>
              <div style={{ fontSize: 13, color: "var(--fg-3)", marginTop: 6, lineHeight: 1.5 }}>{svc}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
