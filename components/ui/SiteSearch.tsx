"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { siteIndex, type SearchEntry } from "@/lib/site-index";

/** Quita acentos y baja a minúsculas para que "auditoria" encuentre "auditoría". */
const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const HAYSTACK = siteIndex.map((e) => ({
  entry: e,
  title: norm(e.title),
  rest: norm(`${e.desc} ${e.kw} ${e.href.replace(/[/-]/g, " ")}`),
}));

function search(q: string): SearchEntry[] {
  const terms = norm(q).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return HAYSTACK
    .map(({ entry, title, rest }) => {
      let score = 0;
      for (const t of terms) {
        if (title.startsWith(t)) score += 6;
        else if (title.includes(t)) score += 4;
        else if (rest.includes(t)) score += 1;
        else return null; // todos los términos deben aparecer
      }
      return { entry, score };
    })
    .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((r) => r.entry);
}

const SECTION_COLOR: Record<SearchEntry["section"], string> = {
  Servicio: "var(--irca-green-700)",
  Especialidad: "var(--irca-blue-700)",
  Empresa: "var(--fg-4)",
  Legal: "var(--fg-4)",
};

export default function SiteSearch({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => search(q), [q]);

  const close = useCallback(() => {
    setOpen(false);
    setQ("");
    setActive(0);
  }, []);

  // Atajo global: ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Enfocar el campo y bloquear el scroll de fondo mientras está abierto
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") return close();
    if (!results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => (i + 1) % results.length); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setActive((i) => (i - 1 + results.length) % results.length); }
    if (e.key === "Enter")     { e.preventDefault(); go(results[active].href); }
  }

  function go(href: string) {
    close();
    router.push(href);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Buscar en el sitio"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          height: compact ? 34 : 38, padding: compact ? "0 10px" : "0 12px",
          borderRadius: 10, cursor: "pointer",
          background: "var(--bg-1)", color: "var(--fg-4)",
          border: "1px solid var(--border-strong)",
          fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
        }}
      >
        <Icon name="search" size={15} />
        <span className={compact ? "sr-only" : "hidden lg:inline"}>Buscar</span>
        {!compact && (
          <kbd
            className="hidden lg:inline"
            style={{
              fontFamily: "var(--font-mono)", fontSize: 10, padding: "2px 5px",
              borderRadius: 5, background: "var(--bg-3)", color: "var(--fg-4)",
              border: "1px solid var(--border-soft)",
            }}
          >
            ⌘K
          </kbd>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Buscar en el sitio"
          onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(6,13,20,0.55)", backdropFilter: "blur(3px)",
            display: "flex", justifyContent: "center",
            padding: "12vh 16px 16px",
          }}
        >
          <div
            style={{
              width: "100%", maxWidth: 620, height: "fit-content", maxHeight: "70vh",
              background: "var(--bg-1)", border: "1px solid var(--border-strong)",
              borderRadius: 16, boxShadow: "var(--shadow-3)", overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderBottom: "1px solid var(--border-soft)" }}>
              <span style={{ color: "var(--fg-4)", flexShrink: 0 }}><Icon name="search" size={18} /></span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => { setQ(e.target.value); setActive(0); }}
                onKeyDown={onKeyDown}
                placeholder="Buscar servicios, trámites, estudios…"
                style={{
                  flex: 1, border: 0, outline: "none", background: "transparent",
                  fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-1)",
                }}
              />
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar búsqueda"
                style={{ background: "transparent", border: 0, cursor: "pointer", color: "var(--fg-4)", display: "inline-flex", flexShrink: 0 }}
              >
                <Icon name="x" size={17} />
              </button>
            </div>

            <div style={{ overflowY: "auto" }}>
              {q && !results.length && (
                <div style={{ padding: "28px 18px", textAlign: "center", fontSize: 14, color: "var(--fg-4)" }}>
                  Sin resultados para <strong style={{ color: "var(--fg-2)" }}>{q}</strong>.
                </div>
              )}

              {!q && (
                <div style={{ padding: "14px 18px 18px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 10 }}>
                    Búsquedas frecuentes
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {["Auditoría", "MIA", "Industria Limpia", "ISO 14001", "Ruido", "CUSTF", "Remediación", "STPS"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => { setQ(t); setActive(0); inputRef.current?.focus(); }}
                        style={{
                          padding: "5px 12px", borderRadius: 999, cursor: "pointer",
                          background: "var(--bg-2)", border: "1px solid var(--border-soft)",
                          color: "var(--fg-3)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results.map((r, i) => (
                <button
                  key={r.href}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r.href)}
                  style={{
                    display: "block", width: "100%", textAlign: "left", cursor: "pointer",
                    padding: "12px 18px", border: 0, borderBottom: "1px solid var(--border-soft)",
                    background: i === active ? "var(--bg-2)" : "transparent",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--fg-1)", lineHeight: 1.3 }}>
                      {r.title}
                    </span>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: SECTION_COLOR[r.section], flexShrink: 0 }}>
                      {r.section}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--fg-4)", marginTop: 3, lineHeight: 1.45, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {r.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
