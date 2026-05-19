"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency } from "@/lib/currency";

/** Compact currency selector for the navigation bar. */
export function CurrencyPicker(): React.ReactElement {
  const { cur, set, all } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          height: 36,
          padding: "0 12px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
          color: "#fff",
          fontSize: 13,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <span>{cur.flag}</span>
        <span>{cur.code}</span>
        <ChevronDown size={12} />
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 60 }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              zIndex: 61,
              minWidth: 220,
              padding: 6,
              maxHeight: 320,
              overflowY: "auto",
              background: "rgba(10,15,30,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {all.map((c) => (
              <button
                key={c.code}
                onClick={() => { set(c.code); setOpen(false); }}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: cur.code === c.code ? "rgba(0,127,255,0.15)" : "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (cur.code !== c.code)
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  if (cur.code !== c.code)
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span style={{ fontSize: 18 }}>{c.flag}</span>
                <span style={{ flex: 1 }}>{c.name}</span>
                <span className="mono" style={{ color: "var(--text-3)" }}>{c.code}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
