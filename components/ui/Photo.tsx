import Image from "next/image";

/**
 * Fotografía enmarcada con la misma caja que usaban los placeholders:
 * misma proporción, radio y borde, para que sustituirlos no altere el layout.
 * Sin `src` se muestra un placeholder con el `alt` como descripción de la foto pendiente.
 */
export default function Photo({
  src, alt, ratio = "16/9", priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src?: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      style={{
        position: "relative", aspectRatio: ratio,
        borderRadius: 14, overflow: "hidden",
        background: "var(--bg-2)", border: "1px solid var(--border-soft)",
      }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      ) : (
        <div
          role="img"
          aria-label={alt}
          style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
            padding: 24, textAlign: "center",
            backgroundImage: "repeating-linear-gradient(135deg, var(--bg-3) 0 1px, transparent 1px 14px)",
            color: "var(--fg-4)",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="M21 15l-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Foto pendiente</span>
          <span style={{ fontSize: 13, lineHeight: 1.45, maxWidth: "36ch" }}>{alt}</span>
        </div>
      )}
    </div>
  );
}
