"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

const navItems = [
  { href: "/",                label: "Inicio" },
  { href: "/servicios/",      label: "Servicios" },
  { href: "/sobre-nosotros/", label: "Nosotros" },
  { href: "/experiencia/",    label: "Clientes" },
  { href: "/contacto/",       label: "Contacto" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <nav className="hidden md:flex gap-1 ml-3">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "inline-block",
                padding: "8px 14px", borderRadius: 8,
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                color: isActive(href, pathname) ? "var(--irca-green-700)" : "var(--fg-2)",
                textDecoration: "none",
                transition: "color var(--duration-fast)",
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
            Solicitar diagnóstico <Icon name="arrow-right" size={14} />
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
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 4px", borderBottom: "1px solid var(--border-soft)",
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
            Solicitar diagnóstico <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}
