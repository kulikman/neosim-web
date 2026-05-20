"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { Check, ArrowUpRight } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export default function GetEsimSuccessPage(): React.ReactElement {
  const [status, setStatus] = useState<"activating" | "ready">("activating");
  const [tab, setTab] = useState<"install" | "qr" | "manual">("install");

  useEffect(() => {
    const t = setTimeout(() => setStatus("ready"), 2400);
    return () => clearTimeout(t);
  }, []);

  const qrCells = useMemo(
    () =>
      Array.from({ length: 21 * 21 }, (_, i) => {
        // deterministic pseudo-random based on index — pure, no Math.random
        const h = Math.sin(i * 9301 + 49297) * 233280;
        return h - Math.floor(h) > 0.5;
      }),
    []
  );

  return (
    <section
      style={{ paddingTop: 140, paddingBottom: 100, minHeight: "100vh", position: "relative" }}
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="aurora" style={{ opacity: 0.4 }} aria-hidden />

      <div className="container" style={{ position: "relative", maxWidth: 880 }}>
        {/* status banner */}
        <div
          className="glass"
          style={{
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: status === "ready" ? "rgba(62,224,162,0.15)" : "rgba(0,127,255,0.15)",
              color: status === "ready" ? "var(--mint)" : "#66b7ff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {status === "ready" ? (
              <Check size={22} strokeWidth={2.5} />
            ) : (
              <span
                style={{
                  width: 14,
                  height: 14,
                  border: "2px solid currentColor",
                  borderTopColor: "transparent",
                  borderRadius: 999,
                  animation: "spin 0.9s linear infinite",
                }}
              />
            )}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>
              {status === "ready" ? "Your eSIM is ready to install" : "Activating your eSIM…"}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>
              Order #NEO-2026-04-A8F2D · Sent to your email
            </div>
          </div>
          <span
            className="mono"
            style={{ color: status === "ready" ? "var(--mint)" : "#66b7ff", fontSize: 12 }}
          >
            {status === "ready" ? "READY" : "POLLING"}
          </span>
        </div>

        <h1 className="ty-1" style={{ margin: 0, marginBottom: 12 }}>
          Welcome aboard. <span className="gradient-text">Let&apos;s connect.</span>
        </h1>
        <p className="lead" style={{ marginBottom: 40, maxWidth: 600 }}>
          Pick your install method — easiest is the one-tap button on the device that received the
          email.
        </p>

        {/* tabs */}
        <div className="seg" style={{ marginBottom: 24 }}>
          {[
            { id: "install" as const, t: "One-tap install", d: "iOS 17.4+ · Recommended" },
            { id: "qr" as const, t: "QR code", d: "Scan from another device" },
            { id: "manual" as const, t: "Manual setup", d: "SM-DP+ address" },
          ].map((o) => (
            <button
              key={o.id}
              onClick={() => setTab(o.id)}
              className={tab === o.id ? "active" : ""}
            >
              <span className="dot" /> {o.t}
            </button>
          ))}
        </div>

        <div className="glass-strong" style={{ padding: 36, minHeight: 420 }}>
          {tab === "install" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "center",
              }}
            >
              <div>
                <p className="caption" style={{ color: "#66b7ff", marginBottom: 12 }}>
                  Method 1 · Easiest
                </p>
                <h2 className="ty-3" style={{ margin: 0, marginBottom: 16 }}>
                  Install with one tap
                </h2>
                <p className="body-sm" style={{ marginBottom: 24 }}>
                  Tap the button below on the same iPhone you want NeoSIM on. iOS will open Settings
                  and walk you through.
                </p>
                <ol
                  style={{
                    paddingLeft: 18,
                    fontSize: 14,
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  <li>Tap &ldquo;Install eSIM&rdquo;</li>
                  <li>Confirm in Settings</li>
                  <li>Label the line &ldquo;NeoSIM&rdquo;</li>
                  <li>Done — keep both lines on</li>
                </ol>
                <button
                  disabled={status !== "ready"}
                  style={{
                    width: "100%",
                    height: 60,
                    borderRadius: 999,
                    border: "none",
                    background: status !== "ready" ? "rgba(255,255,255,0.1)" : "#fff",
                    color: status !== "ready" ? "var(--text-3)" : "#000a17",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: status !== "ready" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  {status === "ready" ? (
                    <>
                      <span>Install eSIM</span> <ArrowUpRight size={18} />
                    </>
                  ) : (
                    "Activating…"
                  )}
                </button>
              </div>
              {/* phone mockup */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1/1.4",
                  borderRadius: 28,
                  background: "linear-gradient(180deg, rgba(0,127,255,0.15), rgba(0,127,255,0.02))",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 160,
                    height: 300,
                    borderRadius: 32,
                    background: "#000a17",
                    border: "6px solid #1a2942",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(0,127,255,0.2)",
                  }}
                >
                  <div style={{ textAlign: "center", padding: 16 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "linear-gradient(135deg,#007FFF,#1a90ff)",
                        margin: "0 auto 12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={24} color="#fff" strokeWidth={2.5} />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4 }}>NeoSIM</div>
                    <div style={{ fontSize: 9, color: "var(--text-3)" }}>Ready to install</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "qr" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
                paddingTop: 16,
              }}
            >
              <div>
                <p
                  className="caption"
                  style={{ color: "#66b7ff", marginBottom: 8, textAlign: "center" }}
                >
                  Method 2 · QR Code
                </p>
                <h2 className="ty-3" style={{ margin: 0, textAlign: "center", marginBottom: 8 }}>
                  Scan with your phone
                </h2>
                <p
                  className="body-sm"
                  style={{ color: "var(--text-3)", textAlign: "center", maxWidth: 400 }}
                >
                  Open Settings → Cellular → Add eSIM → Use QR Code on your device, then scan this.
                </p>
              </div>
              {/* decorative QR */}
              <div
                style={{
                  padding: 20,
                  background: "#fff",
                  borderRadius: 16,
                  display: "inline-block",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(21, 10px)", gap: 1 }}>
                  {qrCells.map((filled, i) => (
                    <div
                      key={i}
                      style={{
                        width: 10,
                        height: 10,
                        background: filled ? "#000" : "#fff",
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-3)" }}>
                This QR code expires in 24 hours · Also sent to your email
              </p>
            </div>
          )}

          {tab === "manual" && (
            <div style={{ maxWidth: 560 }}>
              <p className="caption" style={{ color: "#66b7ff", marginBottom: 12 }}>
                Method 3 · Manual entry
              </p>
              <h2 className="ty-3" style={{ margin: 0, marginBottom: 16 }}>
                Enter SM-DP+ address
              </h2>
              <p className="body-sm" style={{ marginBottom: 24 }}>
                Settings → Cellular → Add eSIM → Enter Details Manually. Use the codes below.
              </p>
              {[
                { l: "SM-DP+ address", v: "esim.neosim.com" },
                { l: "Activation code", v: "LPA:1$esim.neosim.com$A8F2D-4X7P-DEMO" },
                { l: "Confirmation code", v: "NEO-2026-A8F2" },
              ].map(({ l, v }) => (
                <div key={l} style={{ marginBottom: 16 }}>
                  <p className="caption" style={{ color: "var(--text-3)", marginBottom: 6 }}>
                    {l}
                  </p>
                  <div className="field" style={{ fontFamily: "monospace", fontSize: 13 }}>
                    <span style={{ flex: 1 }}>{v}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <Link
            href={ROUTES.topup}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 44,
              padding: "0 20px",
              borderRadius: 999,
              background: "rgba(0,127,255,0.12)",
              border: "1px solid rgba(0,127,255,0.25)",
              color: "#66b7ff",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Top up wallet →
          </Link>
          <Link
            href={ROUTES.home}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 44,
              padding: "0 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
