import Image from "next/image";
import Icon from "@/components/ui/Icon";

const clients = [
  { name: "Deacero",          logo: "/deacero-logo.webp" },
  { name: "Vitromex",         logo: "/vitromex-logo.webp" },
  { name: "Frisa",            logo: "/frisa-logo.webp" },
  { name: "Fundición Águilas",logo: "/fundicion-aguilas-logo.webp" },
  { name: "Daltile",          logo: "/daltile-logo.webp" },
  { name: "Vesuvius",         logo: "/vesuvius-logo.webp" },
  { name: "Prolec GE",        logo: "/prolec-logo.webp" },
  { name: "Hunter Douglas",   logo: "/hunter-douglas-logo.webp" },
  { name: "Fisterra Energy",  logo: "/fisterra-energy-logo.webp" },
  { name: "ASK Chemicals",    logo: "/ask-chemicals-logo.webp" },
  { name: "Coflex",           logo: "/coflex-logo.webp" },
  { name: "Novocast",         logo: "/novocast-logo.webp" },
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
    <section id="clients" className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-blue-700)" }}>
              <span style={{ width: 24, height: 2, background: "var(--irca-blue-700)", display: "inline-block" }} />
              Trayectoria comprobada
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.022em", lineHeight: 1.1, margin: "14px 0 0", color: "var(--ink-1000)", maxWidth: "22ch" }}>
              Clientes que renovaron su confianza, año tras año.
            </h2>
          </div>
          <a
            href="/experiencia/"
            className="self-start md:self-auto"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "10px 18px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Casos de estudio <Icon name="arrow-up-right" size={15} />
          </a>
        </div>

        {/* Client grid — 3 cols mobile, 6 desktop */}
        <div style={{ border: "1px solid var(--border-soft)", borderRadius: 12, overflow: "hidden" }}>
          <div className="grid grid-cols-3 md:grid-cols-6">
            {clients.map(({ name, logo }, i) => {
              const mobileLastCol  = (i + 1) % 3 === 0;
              const desktopLastCol = (i + 1) % 6 === 0;
              const mobileLastRow  = i >= clients.length - 3;
              const desktopLastRow = i >= clients.length - 6;
              return (
                <div
                  key={name}
                  style={{ padding: "20px 16px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderColor: "var(--border-soft)" }}
                  className={[
                    mobileLastCol  ? "border-r-0"    : "border-r",
                    mobileLastRow  ? "border-b-0"    : "border-b",
                    desktopLastCol ? "md:border-r-0" : "md:border-r",
                    desktopLastRow ? "md:border-b-0" : "md:border-b",
                  ].join(" ")}
                >
                  <Image
                    src={logo}
                    alt={name}
                    width={120}
                    height={48}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{ objectFit: "contain", width: "100%", maxWidth: 220, height: 110 }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-8">
          {caseStudies.map(({ proj, svc, period }) => (
            <article
              key={proj}
              style={{ background: "var(--bg-2)", borderRadius: 12, padding: 20, border: "1px solid var(--border-soft)" }}
            >
              <div style={{ fontSize: 11, color: "var(--fg-4)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{period}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.015em", marginTop: 8, color: "var(--fg-1)" }}>{proj}</div>
              <div style={{ fontSize: 13, color: "var(--fg-3)", marginTop: 6, lineHeight: 1.5 }}>{svc}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
