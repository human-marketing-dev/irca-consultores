import Image from "next/image";

/**
 * Fotografía enmarcada con la misma caja que usaban los placeholders:
 * misma proporción, radio y borde, para que sustituirlos no altere el layout.
 */
export default function Photo({
  src, alt, ratio = "16/9", priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
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
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
    </div>
  );
}
