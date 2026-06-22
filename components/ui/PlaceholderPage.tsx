import Link from "next/link";
import Icon from "@/components/ui/Icon";

interface PlaceholderPageProps {
  eyebrow?: string;
  title: string;
  description?: string;
  keyword?: string;
}

export default function PlaceholderPage({ eyebrow, title, description, keyword }: PlaceholderPageProps) {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 640, textAlign: "center" }}>
        {eyebrow && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)", marginBottom: 20 }}>
            <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
            {eyebrow}
          </div>
        )}
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--ink-1000)", margin: "0 0 20px" }}>
          {title}
        </h1>
        {description && (
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-3)", margin: "0 0 32px" }}>{description}</p>
        )}
        {keyword && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 32 }}>
            Keyword: {keyword}
          </div>
        )}
        <div style={{ height: 1, background: "var(--border-soft)", margin: "32px 0" }} />
        <p style={{ fontSize: 14, color: "var(--fg-4)", marginBottom: 24 }}>Contenido en desarrollo — esta página se completará próximamente.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contacto/"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--irca-green)", color: "#fff", padding: "10px 20px", borderRadius: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none", boxShadow: "var(--shadow-1)" }}
          >
            Solicitar información <Icon name="arrow-right" size={15} />
          </Link>
          <Link
            href="/servicios/"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "10px 20px", borderRadius: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
