"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import SocialIcon from "@/components/ui/SocialIcon";

/*
 * Últimos reels de @ircaambiental con el embed oficial de Instagram (sin API ni login).
 * Para actualizar: sustituir los IDs. El ID es la parte de la URL después de /reel/,
 * p. ej. https://www.instagram.com/reel/DerwTkgFONL/ → "DerwTkgFONL".
 */
const REELS = ["DerwTkgFONL", "DekB4ACiSl7", "Dehc2utD-iB"];

const PROFILE_URL = "https://www.instagram.com/ircaambiental/";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/** Marcado que embed.js convierte en iframe. Se inserta como HTML para que React no
 *  intente reconciliar los nodos que el script reemplaza. */
function embedHtml(id: string) {
  const url = `https://www.instagram.com/reel/${id}/`;
  return `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"
    style="background:#fff;border:0;border-radius:12px;margin:0;max-width:540px;min-width:326px;width:100%;padding:0;">
    <a href="${url}" target="_blank" rel="noopener noreferrer"
      style="display:flex;align-items:center;justify-content:center;aspect-ratio:9/14;font:600 14px/1.4 sans-serif;color:#0080c0;text-decoration:none;">
      Ver este reel en Instagram
    </a>
  </blockquote>`;
}

export default function InstagramReels() {
  // Carrusel en móvil: índice del reel visible para los puntos indicadores
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function step() {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
  }

  function onScroll() {
    const s = step();
    if (s) setActive(Math.min(REELS.length - 1, Math.round(scroller.current!.scrollLeft / s)));
  }

  function goTo(i: number) {
    scroller.current?.scrollTo({ left: i * step(), behavior: "smooth" });
  }

  return (
    <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
              <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
              Instagram
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "14px 0 0", color: "var(--ink-1000)", maxWidth: "24ch" }}>
              Lo más reciente en @ircaambiental
            </h2>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg-1)", color: "var(--fg-1)", border: "1px solid var(--border-strong)", padding: "10px 18px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            <SocialIcon name="instagram" size={16} /> Seguir en Instagram
          </a>
        </div>

        {/* Móvil: carrusel deslizable con snap. Desde md: cuadrícula. */}
        <div
          ref={scroller}
          onScroll={onScroll}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6 md:overflow-visible md:justify-items-center md:items-start"
        >
          {REELS.map((id, i) => (
            <div
              key={id}
              aria-roledescription="diapositiva"
              aria-label={`Reel ${i + 1} de ${REELS.length}`}
              className="w-[326px] shrink-0 snap-start md:w-full md:max-w-[420px]"
              dangerouslySetInnerHTML={{ __html: embedHtml(id) }}
            />
          ))}
        </div>

        {/* Indicadores del carrusel (solo móvil) */}
        <div className="flex md:hidden justify-center gap-2 mt-5">
          {REELS.map((id, i) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver reel ${i + 1}`}
              aria-current={active === i}
              style={{
                width: active === i ? 22 : 8, height: 8, borderRadius: 999, border: "none", padding: 0, cursor: "pointer",
                background: active === i ? "var(--irca-green)" : "var(--border-strong)",
                transition: "width 200ms ease, background 200ms ease",
              }}
            />
          ))}
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </section>
  );
}
