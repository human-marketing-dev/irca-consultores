export type IconName =
  | "shield-check"
  | "droplet"
  | "file-text"
  | "scale"
  | "building"
  | "hardhat"
  | "map-pin"
  | "mail"
  | "phone"
  | "globe"
  | "arrow-right"
  | "arrow-up-right"
  | "menu"
  | "x"
  | "check"
  | "drone"
  | "satellite"
  | "flask"
  | "whatsapp"
  | "calendar"
  | "eye"
  | "alert-triangle"
  | "graduation-cap"
  | "compass";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  stroke?: number;
  className?: string;
}

export default function Icon({ name, size = 20, color = "currentColor", stroke = 1.75, className }: IconProps) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "shield-check":
      return <svg {...p}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "droplet":
      return <svg {...p}><path d="M12 2C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-13z"/></svg>;
    case "file-text":
      return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h6"/></svg>;
    case "scale":
      return <svg {...p}><path d="M12 3v18"/><path d="M5 6h14"/><path d="M5 6l-3 8a4 4 0 0 0 8 0z"/><path d="M19 6l-3 8a4 4 0 0 0 8 0z"/></svg>;
    case "building":
      return <svg {...p}><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>;
    case "hardhat":
      return <svg {...p}><path d="M3 18a9 9 0 0 1 18 0"/><path d="M3 18h18"/><path d="M9 9V5h6v4"/></svg>;
    case "map-pin":
      return <svg {...p}><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z"/></svg>;
    case "mail":
      return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case "phone":
      return <svg {...p}><path d="M2 3h6l2 4-3 2c1 3 3 5 6 6l2-3 4 2v6c0 1-1 2-2 2A18 18 0 0 1 2 5c0-1 1-2 2-2z"/></svg>;
    case "globe":
      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/></svg>;
    case "arrow-right":
      return <svg {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case "arrow-up-right":
      return <svg {...p}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;
    case "menu":
      return <svg {...p}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>;
    case "x":
      return <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case "check":
      return <svg {...p}><polyline points="20 6 9 17 4 12"/></svg>;
    case "drone":
      return <svg {...p}><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M4 4l5 5"/><path d="M20 4l-5 5"/><path d="M4 20l5-5"/><path d="M20 20l-5-5"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></svg>;
    case "satellite":
      return <svg {...p}><path d="M5 12a7 7 0 0 1 7-7"/><path d="M8 15a4 4 0 0 1 4-4"/><circle cx="18" cy="6" r="1.5"/><path d="M14 14l7 7"/><circle cx="6" cy="18" r="3"/></svg>;
    case "flask":
      return <svg {...p}><path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3"/><path d="M8 3h8"/><path d="M6 14h12"/></svg>;
    case "eye":
      return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/></svg>;
    case "alert-triangle":
      return <svg {...p}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
    case "graduation-cap":
      return <svg {...p}><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>;
    case "compass":
      return <svg {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
    case "calendar":
      return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>;
    case "whatsapp":
      // Glifo sólido: no usa las props de trazo compartidas.
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      );
    default:
      return null;
  }
}
