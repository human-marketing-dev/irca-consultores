"use client";

import { useState } from "react";

export type FAQItem = { q: string; a: string };

export default function ServiceFAQ({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div style={{ borderTop: "1px solid var(--border-soft)" }}>
      {items.map(({ q, a }, i) => {
        const open = openIdx === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border-soft)" }}>
            <button
              onClick={() => setOpenIdx(open ? -1 : i)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
                width: "100%", background: "transparent", border: 0,
                padding: "22px 0", cursor: "pointer", textAlign: "left",
              }}
            >
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19,
                letterSpacing: "-0.01em", color: open ? "var(--ink-1000)" : "var(--fg-1)",
                lineHeight: 1.3, textAlign: "left",
              }}>
                {q}
              </span>
              <span style={{
                flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: 999,
                background: open ? "var(--irca-green-50)" : "var(--bg-3)",
                color: open ? "var(--irca-green-700)" : "var(--fg-4)",
                transform: open ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 200ms cubic-bezier(0.2,0.6,0.2,1), background 200ms, color 200ms",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div style={{
              overflow: "hidden",
              maxHeight: open ? 360 : 0,
              opacity: open ? 1 : 0,
              transition: "max-height 360ms cubic-bezier(0.2,0.6,0.2,1), opacity 200ms cubic-bezier(0.2,0.6,0.2,1)",
            }}>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-3)", margin: 0, padding: "0 0 24px", maxWidth: "70ch" }}>
                {a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
