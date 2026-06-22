import Image from "next/image";
import Icon from "@/components/ui/Icon";

const links = [
  {
    title: "Servicios",
    items: ["Auditoría ambiental", "Estudios ambientales", "Derecho ambiental", "Trámites y licencias", "SHE / EHS", "Ingeniería ambiental"],
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
    <footer className="px-4 sm:px-6 pt-14 pb-8" style={{ background: "#0B1118", color: "rgba(255,255,255,0.7)" }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Brand col — spans 2 on mobile */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo-irca-consultores-blanco.webp"
            alt="IRCA Consultores"
            width={300}
            height={120}
            style={{ height: 32, width: "auto", display: "block" }}
          />
          <p style={{ fontSize: 13, lineHeight: 1.65, marginTop: 16, maxWidth: "42ch", color: "rgba(255,255,255,0.6)" }}>
            IRCA Ingeniería y Servicios, S.C. (IIS) · Environmental North de México, S.C. (ENM).
            Capacidad de contratación como servicios especializados (REPSE).
          </p>
          <div className="flex gap-3 mt-4 mb-4">
            {[
              { icon: "phone" as const, href: "tel:+528115059330" },
              { icon: "mail" as const,  href: "mailto:info@ircaconsultores.com" },
              { icon: "globe" as const, href: "https://ircaconsultores.com" },
            ].map(({ icon, href }) => (
              <a
                key={icon}
                href={href}
                style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: "rgba(255,255,255,0.08)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none",
                }}
              >
                <Icon name={icon} size={15} />
              </a>
            ))}
          </div>
        </div>

        {links.map(({ title, items }) => (
          <div key={title}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", marginBottom: 14 }}>
              {title}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {items.map((item) => (
                <li key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-16 pt-6"
        style={{ maxWidth: 1280, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "rgba(255,255,255,0.4)" }}
      >
        <span>© 1999–2026 IRCA Consultores®</span>
        <span>Tu tranquilidad ambiental — nuestra especialidad.</span>
      </div>
    </footer>
  );
}
