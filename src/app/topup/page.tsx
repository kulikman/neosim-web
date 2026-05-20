"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Gift, Wallet } from "lucide-react";

import { ROUTES } from "@/lib/constants";

const PRESETS = [5, 10, 25, 50, 100] as const;

type Method = "apple" | "google" | "card" | "crypto";

export default function TopupPage(): React.ReactElement {
  const [amount, setAmount] = useState(25);
  const [method, setMethod] = useState<Method>("apple");

  const miles = (amount * 0.03).toFixed(2);
  const credit = (amount + amount * 0.03).toFixed(2);

  return (
    <section
      style={{ paddingTop: 140, paddingBottom: 100, minHeight: "100vh", position: "relative" }}
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="aurora" style={{ opacity: 0.4 }} aria-hidden />

      <div className="container" style={{ position: "relative", maxWidth: 1080 }}>
        <Link
          href={ROUTES.home}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--text-3)",
            fontSize: 13,
            marginBottom: 32,
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40 }}>
          {/* left */}
          <div>
            <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>
              Wallet · Top up
            </p>
            <h1 className="ty-1" style={{ margin: 0, marginBottom: 16 }}>
              Add credit to <span className="gradient-text">your wallet</span>
            </h1>
            <p className="lead" style={{ marginBottom: 32, maxWidth: 480 }}>
              Balance never expires. 3% Miles back on every top-up, redeemable as data.
            </p>

            {/* balance card */}
            <div
              className="glass-strong"
              style={{ padding: 28, marginBottom: 28, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -60,
                  top: -60,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,127,255,0.3), transparent 60%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div className="mono" style={{ marginBottom: 4 }}>
                      Current balance
                    </div>
                    <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-1.2px" }}>
                      $48.<span style={{ color: "var(--text-3)" }}>27</span>
                    </div>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "rgba(62,224,162,0.12)",
                      color: "var(--mint)",
                      fontSize: 12,
                      fontWeight: 600,
                      border: "1px solid rgba(62,224,162,0.3)",
                    }}
                  >
                    <span
                      style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }}
                    />{" "}
                    Active in France
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 24,
                    paddingTop: 20,
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>This month</div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>1.7 GB</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>Avg / day</div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>284 MB</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>Miles earned</div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "var(--mint)" }}>$4.18</div>
                  </div>
                </div>
              </div>
            </div>

            {/* amount */}
            <p className="caption" style={{ marginBottom: 12 }}>
              1 · Choose amount
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 10,
                marginBottom: 12,
              }}
            >
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  style={{
                    padding: "20px 0",
                    borderRadius: 16,
                    fontSize: 18,
                    fontWeight: 700,
                    background: amount === p ? "rgba(0,127,255,0.15)" : "rgba(255,255,255,0.02)",
                    border:
                      amount === p ? "1px solid rgba(0,127,255,0.5)" : "1px solid var(--border)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  ${p}
                </button>
              ))}
            </div>
            <div className="field" style={{ marginBottom: 32 }}>
              <span style={{ color: "var(--text-3)", fontSize: 18 }}>$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                placeholder="Custom amount"
                min="5"
              />
              <span className="mono">USD</span>
            </div>

            {/* payment method */}
            <p className="caption" style={{ marginBottom: 12 }}>
              2 · Payment method
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
                marginBottom: 32,
              }}
            >
              {[
                {
                  id: "apple" as Method,
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      style={{ width: 20, height: 20, fill: "currentColor" }}
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.14 1.25-2.12 3.73.03 2.97 2.6 3.96 2.63 3.97-.03.07-.41 1.41-1.36 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ),
                  t: "Apple Pay",
                },
                {
                  id: "google" as Method,
                  icon: (
                    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  ),
                  t: "Google Pay",
                },
                { id: "card" as Method, icon: <Wallet size={18} />, t: "Card" },
                {
                  id: "crypto" as Method,
                  icon: <span style={{ fontWeight: 700, fontSize: 11 }}>USDT</span>,
                  t: "Crypto",
                },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  style={{
                    padding: "16px 12px",
                    borderRadius: 14,
                    background: method === m.id ? "rgba(0,127,255,0.12)" : "rgba(255,255,255,0.02)",
                    border:
                      method === m.id ? "1px solid rgba(0,127,255,0.4)" : "1px solid var(--border)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {m.icon}
                  <span style={{ fontSize: 12 }}>{m.t}</span>
                </button>
              ))}
            </div>
          </div>

          {/* right — summary */}
          <div>
            <div style={{ position: "sticky", top: 100 }}>
              <div className="glass-strong" style={{ padding: 28 }}>
                <h3 className="ty-4" style={{ margin: 0, marginBottom: 20 }}>
                  Order summary
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 14, color: "var(--text-2)" }}>Top up</span>
                    <span className="mono" style={{ color: "#fff", fontSize: 14 }}>
                      ${amount.toFixed(2)}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 14, color: "var(--mint)" }}>+ 3% Miles back</span>
                    <span className="mono" style={{ color: "var(--mint)", fontSize: 14 }}>
                      +${miles}
                    </span>
                  </div>
                </div>
                <div
                  style={{ paddingTop: 16, borderTop: "1px solid var(--border)", marginBottom: 20 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ fontSize: 14, color: "var(--text-2)" }}>Wallet credit</span>
                    <span style={{ fontSize: 22, fontWeight: 700 }}>${credit}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, color: "var(--text-3)" }}>You pay today</span>
                    <span className="mono" style={{ color: "var(--text-3)" }}>
                      ${amount.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  style={{
                    width: "100%",
                    height: 56,
                    borderRadius: 999,
                    border: "none",
                    background: "#fff",
                    color: "#000a17",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  Pay ${amount.toFixed(2)}
                </button>
                <p
                  style={{
                    marginTop: 14,
                    fontSize: 11,
                    color: "var(--text-3)",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  🔒 Stripe Checkout · Refundable balance · No monthly fee
                </p>
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: 18,
                  borderRadius: 14,
                  background: "rgba(62,224,162,0.06)",
                  border: "1px solid rgba(62,224,162,0.2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <Gift size={16} style={{ color: "var(--mint)" }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--mint)" }}>
                    Miles never expire
                  </span>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-2)", margin: 0 }}>
                  Earn 3% on every top-up. Redeem as free data — 1 Mile = $1 of usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
