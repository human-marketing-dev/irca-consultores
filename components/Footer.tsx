import Image from "next/image";
import Icon from "@/components/ui/Icon";

const links = [
  {
    title: "Servicios",
    items: ["Consultoría y diagnóstico", "Impacto y riesgo", "Atención legal", "Trámites gubernamentales", "SHE / EHS", "Geoespaciales"],
  },
  {
    title: "Empresa",
    items: ["Quiénes somos", "Equipo", "Clientes", "Currículo (PDF)", "Milieus Pro"],
  },
  {
    title: "Contacto",
    items: ["+52 81 1505‑9330", "+52 81 1505‑9332", "info@ircaconsultores.com", "Nuevo León, México"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0B1118", color: "rgba(255,255,255,0.7)", padding: "64px 32px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ background: "#fff", display: "inline-block", padding: "8px 10px", borderRadius: 8 }}>
            <Image
              src="/logo-irca.png"
              alt="IRCA Consultores"
              width={500}
              height={246}
              style={{ height: 32, width: "auto", display: "block" }}
            />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, marginTop: 20, maxWidth: "42ch", color: "rgba(255,255,255,0.6)" }}>
            IRCA Ingeniería y Servicios, S.C. (IIS) · Environmental North de México, S.C. (ENM).
            Capacidad de contratación como servicios especializados (REPSE). Línea de fianzas disponible.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {[
              { icon: "phone" as const, href: "tel:+528115059330" },
              { icon: "mail" as const,  href: "mailto:info@ircaconsultores.com" },
              { icon: "globe" as const, href: "https://ircaconsultores.com" },
            ].map(({ icon, href }) => (
              <a
                key={icon}
                href={href}
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.08)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none",
                }}
              >
                <Icon name={icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        {links.map(({ title, items }) => (
          <div key={title}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>
              {title}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {items.map((item) => (
                <li key={item} style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: 1280, margin: "48px auto 0", paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        fontSize: 12, color: "rgba(255,255,255,0.45)",
      }}>
        <span>© 1999–2026 IRCA Consultores®</span>
        <span>Tu tranquilidad ambiental — nuestra especialidad.</span>
      </div>
    </footer>
  );
}
