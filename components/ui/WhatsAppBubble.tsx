"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const WHATSAPP_URL =
  "https://wa.me/528115059330?text=" +
  encodeURIComponent("Hola, me gustaría contactar a IRCA Consultores.");

/**
 * Burbuja flotante de WhatsApp. Aparece tras un pequeño scroll para no competir
 * con el CTA del hero, y se puede cerrar por sesión.
 */
export default function WhatsAppBubble() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed", right: 20, bottom: 20, zIndex: 60,
        display: "flex", alignItems: "center", gap: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.94)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 220ms var(--easing-standard), transform 220ms var(--easing-standard)",
      }}
    >
      <button
        type="button"
        aria-label="Ocultar el botón de WhatsApp"
        onClick={() => setDismissed(true)}
        style={{
          width: 26, height: 26, borderRadius: 999, cursor: "pointer",
          background: "var(--bg-1)", color: "var(--fg-4)",
          border: "1px solid var(--border-strong)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          boxShadow: "var(--shadow-1)",
        }}
      >
        <Icon name="x" size={13} stroke={2.4} />
      </button>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="group"
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "#25D366", color: "#fff",
          height: 56, borderRadius: 999, padding: "0 18px",
          textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
          boxShadow: "0 6px 20px -4px rgba(37,211,102,0.5), var(--shadow-2)",
        }}
      >
        <Icon name="whatsapp" size={26} />
        <span className="hidden sm:inline">Escríbenos</span>
      </a>
    </div>
  );
}
