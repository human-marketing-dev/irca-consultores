"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Icon, { type IconName } from "@/components/ui/Icon";

/* ── services for the dropdown ───────────────────────────── */

const services: { href: string; label: string; icon: IconName }[] = [
  { href: "/servicios/auditoria-ambiental/",              label: "Auditoría y Diagnóstico Ambiental",  icon: "shield-check" },
  { href: "/servicios/estudios-ambientales/",             label: "Estudios Ambientales",                icon: "flask"        },
  { href: "/servicios/derecho-ambiental/",                label: "Derecho Ambiental",                   icon: "scale"        },
  { href: "/servicios/tramites-y-licencias-ambientales/", label: "Trámites y Licencias Ambientales",    icon: "file-text"    },
  { href: "/servicios/seguridad-y-salud-ocupacional/",    label: "SHE / Seguridad y Salud",             icon: "hardhat"      },
  { href: "/servicios/ingenieria-ambiental/",             label: "Ingeniería Ambiental",                icon: "drone"        },
  { href: "/servicios/capacitacion-ambiental/",           label: "Capacitación Ambiental",              icon: "building"     },
];

/* ── top-level nav (non-services) ────────────────────────── */

const navItems = [
  { href: "/",                label: "Inicio"    },
  { href: "/sobre-nosotros/", label: "Nosotros"  },
  { href: "/experiencia/",    label: "Experiencia"  },
  { href: "/contacto/",       label: "Contacto"  },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ═══════════════════════════════════════════════════════════ */

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen]                 = useState(false);
  const [servicesOpen, setServicesOpen]             = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setServicesOpen(true); };
  const closeServices = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 120); };

  const servicesActive = pathname.startsWith("/servicios");

  return (
    <header
      className="px-4 sm:px-6"
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(140%) blur(10px)",
        WebkitBackdropFilter: "saturate(140%) blur(10px)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div className="flex items-center gap-4 sm:gap-8 py-3.5" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Link href="/" style={{ display: "flex", flexShrink: 0 }}>
          <Image
            src="/logo-irca.png"
            alt="IRCA Consultores"
            width={500}
            height={246}
            priority
            style={{ height: 32, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1 ml-3 items-center">
          <Link
            href="/"
            style={{
              display: "inline-block", padding: "8px 14px", borderRadius: 8,
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
              color: isActive("/", pathname) ? "var(--irca-green-700)" : "var(--fg-2)",
              textDecoration: "none", transition: "color var(--duration-fast)",
            }}
          >
            Inicio
          </Link>

          {/* Servicios — with dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <Link
              href="/servicios/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                padding: "8px 14px", borderRadius: 8,
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                color: servicesActive ? "var(--irca-green-700)" : "var(--fg-2)",
                textDecoration: "none", transition: "color var(--duration-fast)",
              }}
            >
              Servicios
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ opacity: 0.6, transition: "transform 160ms", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div
                style={{
                  position: "absolute", top: "100%", left: 0,
                  paddingTop: 8, minWidth: 280, zIndex: 100,
                }}
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <div style={{
                  background: "#fff", borderRadius: 12, padding: "8px 6px",
                  boxShadow: "var(--shadow-3)", border: "1px solid var(--border-soft)",
                }}>
                {services.map(({ href, label, icon }) => {
                  const active = pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "9px 12px", borderRadius: 8, textDecoration: "none",
                        background: active ? "var(--irca-green-50)" : "transparent",
                        color: active ? "var(--irca-green-700)" : "var(--fg-2)",
                        fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
                        transition: "background 120ms",
                      }}
                      onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "var(--bg-2)"; }}
                      onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <span style={{
                        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                        background: active ? "var(--irca-green-100)" : "var(--bg-3)",
                        color: active ? "var(--irca-green-700)" : "var(--fg-4)",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        transition: "background 120ms",
                      }}>
                        <Icon name={icon} size={15} />
                      </span>
                      {label}
                    </Link>
                  );
                })}
                <div style={{ height: 1, background: "var(--border-soft)", margin: "6px 6px" }} />
                <Link
                  href="/servicios/"
                  onClick={() => setServicesOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "9px 12px", borderRadius: 8, textDecoration: "none",
                    color: "var(--irca-blue-700)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                  }}
                >
                  Ver todos los servicios <Icon name="arrow-right" size={13} />
                </Link>
                </div>
              </div>
            )}
          </div>

          {navItems.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "inline-block", padding: "8px 14px", borderRadius: 8,
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                color: isActive(href, pathname) ? "var(--irca-green-700)" : "var(--fg-2)",
                textDecoration: "none", transition: "color var(--duration-fast)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <a
            href="tel:+528115059330"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--fg-3)", textDecoration: "none", fontWeight: 600 }}
          >
            <Icon name="phone" size={14} /> +52 81 1505‑9330
          </a>
          <Link
            href="/contacto/"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--irca-green)", color: "#fff",
              padding: "7px 14px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
              borderRadius: 6, textDecoration: "none", boxShadow: "var(--shadow-1)",
            }}
          >
            Solicitar información <Icon name="arrow-right" size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden ml-auto"
          style={{ background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)", padding: 4 }}
          aria-label="Abrir menú"
        >
          <Icon name={mobileOpen ? "x" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--border-soft)", background: "#fff" }} className="px-6 pb-5 pt-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block", padding: "12px 4px", borderBottom: "1px solid var(--border-soft)",
              fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600,
              color: isActive("/", pathname) ? "var(--irca-green-700)" : "var(--fg-2)",
              textDecoration: "none",
            }}
          >
            Inicio
          </Link>

          {/* Mobile Servicios with sub-list */}
          <div style={{ borderBottom: "1px solid var(--border-soft)" }}>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "12px 4px", background: "none", border: 0, cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600,
                color: servicesActive ? "var(--irca-green-700)" : "var(--fg-2)",
                textAlign: "left",
              }}
            >
              Servicios
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ opacity: 0.5, transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 160ms" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div style={{ paddingBottom: 8, display: "grid", gap: 2 }}>
                {services.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "9px 4px", textDecoration: "none",
                      fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
                      color: pathname.startsWith(href) ? "var(--irca-green-700)" : "var(--fg-2)",
                    }}
                  >
                    <span style={{
                      width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                      background: pathname.startsWith(href) ? "var(--irca-green-50)" : "var(--bg-3)",
                      color: pathname.startsWith(href) ? "var(--irca-green-700)" : "var(--fg-4)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon name={icon} size={13} />
                    </span>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", padding: "12px 4px", borderBottom: "1px solid var(--border-soft)",
                fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600,
                color: isActive(href, pathname) ? "var(--irca-green-700)" : "var(--fg-2)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contacto/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 w-full"
            style={{
              background: "var(--irca-green)", color: "#fff",
              padding: "10px 18px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
              borderRadius: 6, textDecoration: "none",
            }}
          >
            Solicitar información <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}
