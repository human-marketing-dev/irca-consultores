"use client";

import { useSyncExternalStore } from "react";
import Icon from "@/components/ui/Icon";

type Theme = "light" | "dark";

/** Debe coincidir con la clave que lee el script inline de app/layout.tsx. */
export const THEME_KEY = "irca-theme";

/**
 * El tema vive fuera de React: en el atributo data-theme del <html>, que el
 * script inline fija antes del primer pintado. Se lee con useSyncExternalStore
 * para no arrastrar un setState dentro de un efecto ni desincronizar la hidratación.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

function getSnapshot(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** En el servidor el tema es desconocido: se renderiza el botón sin icono. */
const getServerSnapshot = (): Theme | null => null;

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* modo privado o almacenamiento bloqueado: el cambio vale para esta vista */
    }
  }

  const isDark = theme === "dark";
  const size = compact ? 34 : 38;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      style={{
        width: size, height: size, borderRadius: 10, flexShrink: 0,
        background: "var(--bg-1)", color: "var(--fg-3)",
        border: "1px solid var(--border-strong)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "color var(--duration) var(--easing-standard)",
      }}
    >
      {theme === null ? <span style={{ width: 17, height: 17 }} /> : <Icon name={isDark ? "sun" : "moon"} size={17} />}
    </button>
  );
}
