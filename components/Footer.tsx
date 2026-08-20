import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

type FooterLink = { label: string; href: string };

const links: { title: string; items: FooterLink[] }[] = [
  {
    title: "Servicios",
    items: [
      { label: "Auditoría y diagnóstico ambiental",          href: "/servicios/auditoria-ambiental/" },
      { label: "Estudios ambientales",                        href: "/servicios/estudios-ambientales/" },
      { label: "Estudios, trámites y autorizaciones",         href: "/servicios/tramites-y-autorizaciones-ambientales/" },
      { label: "Servicios legales y atención de autoridades", href: "/servicios/servicios-legales-y-atencion-de-autoridades/" },
      { label: "Consultoría y supervisión ambiental",         href: "/servicios/consultoria-y-supervision-ambiental/" },
      { label: "Auditoría y diagnóstico de seguridad y salud",href: "/servicios/auditoria-seguridad-y-salud/" },
      { label: "Estudios de seguridad y salud",               href: "/servicios/estudios-de-seguridad-y-salud/" },
      { label: "Estudios de ingeniería",                      href: "/servicios/estudios-de-ingenieria/" },
      { label: "Capacitación técnica especializada",          href: "/servicios/capacitacion-tecnica-especializada/" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Quiénes somos",     href: "/sobre-nosotros/" },
      { label: "Equipo",            href: "/sobre-nosotros/#nosotros" },
      { label: "Experiencia",       href: "/experiencia/" },
      { label: "Clientes",          href: "/#clients" },
      { label: "Todos los servicios", href: "/servicios/" },
      { label: "Contacto",          href: "/contacto/" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "+52 81 1505‑9330",          href: "tel:+528115059330" },
      { label: "+52 81 1505‑9332",          href: "tel:+528115059332" },
      { label: "info@ircaconsultores.com",  href: "mailto:info@ircaconsultores.com" },
      { label: "Nuevo León, México",        href: "/contacto/" },
    ],
  },
];

const legal: FooterLink[] = [
  { label: "Aviso de privacidad",    href: "/aviso-de-privacidad/" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones/" },
];

const linkStyle: React.CSSProperties = {
  fontSize: 13, lineHeight: 1.4, textDecoration: "none",
};

/** El color vive en clases, no en el style inline: si no, el inline gana y el hover no aplica. */
const linkClass = "text-white/65 hover:text-white transition-colors duration-200";

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
              {items.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith("/") ? (
                    <Link href={href} style={linkStyle} className={linkClass}>{label}</Link>
                  ) : (
                    <a href={href} style={linkStyle} className={linkClass}>{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-12 md:mt-14 pt-6"
        style={{
          maxWidth: 1280,
          // marginLeft/Right en vez del shorthand `margin`: el shorthand fijaría
          // margin-top:0 y anularía la clase mt-* que da el aire sobre el divisor.
          marginLeft: "auto", marginRight: "auto",
          borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>© 1999–2026 IRCA Consultores®</span>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {legal.map(({ label, href }) => (
            <Link key={href} href={href} style={{ textDecoration: "none" }} className="text-white/55 hover:text-white transition-colors duration-200">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
