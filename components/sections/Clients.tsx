import Image from "next/image";
import Icon from "@/components/ui/Icon";

// El orden importa: la retícula es de 8 columnas en desktop, así que los
// índices 6–7 cierran la primera fila y los 14–15 cierran la segunda.
const clients = [
  { name: "Deacero",          logo: "/deacero-logo.webp" },
  { name: "Vitromex",         logo: "/vitromex-logo.webp" },
  { name: "Frisa",            logo: "/frisa-logo.webp" },
  { name: "Fundición Águilas",logo: "/fundicion-aguilas-logo.webp" },
  { name: "Daltile",          logo: "/daltile-logo.webp" },
  { name: "Vesuvius",         logo: "/vesuvius-logo.webp" },
  { name: "Daimler",          logo: "/daimler-logo.webp" },
  { name: "Sigma Alimentos",  logo: "/sigma-alimentos-logo.webp" },
  { name: "Prolec GE",        logo: "/prolec-logo.webp" },
  { name: "Hunter Douglas",   logo: "/hunter-douglas-logo.webp" },
  { name: "Fisterra Energy",  logo: "/fisterra-energy-logo.webp" },
  { name: "ASK Chemicals",    logo: "/ask-chemicals-logo.webp" },
  { name: "Coflex",           logo: "/coflex-logo.webp" },
  { name: "Novocast",         logo: "/novocast-logo.webp" },
  { name: "Saint-Gobain",     logo: "/saint-gobain-logo.webp" },
  { name: "CFE / Pemex",      logo: "/cfe-pemex-logo.webp" },
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

        {/* Client grid — 2 cols mobile, 4 tablet, 8 desktop (16 logos = 2 filas exactas) */}
        <div style={{ border: "1px solid var(--border-soft)", borderRadius: 12, overflow: "hidden" }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
            {clients.map(({ name, logo }, i) => {
              const edge = (cols: number) => ({
                lastCol: (i + 1) % cols === 0,
                lastRow: i >= clients.length - cols,
              });
              const sm = edge(2), md = edge(4), lg = edge(8);
              return (
                <div
                  key={name}
                  style={{ padding: "16px 12px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderColor: "var(--border-soft)" }}
                  className={[
                    sm.lastCol ? "border-r-0"     : "border-r",
                    sm.lastRow ? "border-b-0"     : "border-b",
                    md.lastCol ? "sm:border-r-0"  : "sm:border-r",
                    md.lastRow ? "sm:border-b-0"  : "sm:border-b",
                    lg.lastCol ? "md:border-r-0"  : "md:border-r",
                    lg.lastRow ? "md:border-b-0"  : "md:border-b",
                  ].join(" ")}
                >
                  <Image
                    src={logo}
                    alt={name}
                    width={120}
                    height={48}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-[92px] md:h-[76px]"
                    style={{ objectFit: "contain", width: "100%", maxWidth: 220 }}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
