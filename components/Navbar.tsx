"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

const navItems = [
  { id: "home",     label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "about",    label: "Nosotros" },
  { id: "clients",  label: "Clientes" },
  { id: "contact",  label: "Contacto" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    scrollTo(id);
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "saturate(140%) blur(10px)",
      WebkitBackdropFilter: "saturate(140%) blur(10px)",
      borderBottom: "1px solid var(--border-soft)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", gap: 32 }}>
        <button
          onClick={() => handleNav("home")}
          style={{ background: "none", border: 0, padding: 0, cursor: "pointer", flexShrink: 0 }}
          aria-label="Ir al inicio"
        >
          <Image
            src="/logo-irca.png"
            alt="IRCA Consultores"
            width={500}
            height={246}
            priority
            style={{ height: 36, width: "auto", display: "block" }}
          />
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 4, marginLeft: 12 }} className="hidden md:flex">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              style={{
                background: "transparent", border: 0,
                padding: "8px 14px", borderRadius: 8,
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                color: active === id ? "var(--irca-green-700)" : "var(--fg-2)",
                cursor: "pointer",
                transition: "color var(--duration-fast)",
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" }} className="hidden md:flex">
          <a
            href="tel:+528115059330"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--fg-3)", textDecoration: "none", fontWeight: 600 }}
          >
            <Icon name="phone" size={14} /> +52 81 1505‑9330
          </a>
          <button
            onClick={() => handleNav("contact")}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--irca-green)", color: "#fff", border: "1px solid transparent",
              padding: "7px 14px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
              borderRadius: 6, cursor: "pointer", boxShadow: "var(--shadow-1)",
            }}
          >
            Solicitar diagnóstico <Icon name="arrow-right" size={14} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ marginLeft: "auto", background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)", padding: 4 }}
          className="flex md:hidden"
          aria-label="Abrir menú"
        >
          <Icon name={mobileOpen ? "x" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--border-soft)", background: "#fff", padding: "12px 24px 20px" }}>
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "transparent", border: 0,
                padding: "12px 4px", borderBottom: "1px solid var(--border-soft)",
                fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600,
                color: active === id ? "var(--irca-green-700)" : "var(--fg-2)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            style={{
              display: "flex", alignItems: "center", gap: 8, marginTop: 16,
              background: "var(--irca-green)", color: "#fff", border: "none",
              padding: "10px 18px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
              borderRadius: 6, cursor: "pointer", width: "100%", justifyContent: "center",
            }}
          >
            Solicitar diagnóstico <Icon name="arrow-right" size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
