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
  | "flask";

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
    default:
      return null;
  }
}
