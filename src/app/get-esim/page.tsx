"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, QrCode, Smartphone, Check } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export default function GetEsimPage(): React.ReactElement {
  const [type, setType] = useState<"digital" | "physical">("digital");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section style={{ paddingTop: 140, paddingBottom: 100, minHeight: "100vh", position: "relative" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="aurora" style={{ opacity: 0.4 }} aria-hidden />

      <div className="container" style={{ position: "relative", maxWidth: 720 }}>
        <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}>
          <ArrowLeft size={14} /> Back to home
        </Link>

        <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>Step 1 of 3</p>
        <h1 className="ty-1" style={{ margin: 0, marginBottom: 16 }}>
          Get your <span className="gradient-text">free eSIM</span>
        </h1>
        <p className="lead" style={{ marginBottom: 40, maxWidth: 540 }}>
          $0 to order. $0 monthly. You only pay for the gigabytes you actually use — plus a $2.50 welcome bonus.
        </p>

        <div className="glass-strong" style={{ padding: 36 }}>
          {/* delivery type */}
          <p className="caption" style={{ marginBottom: 12 }}>1 · Choose delivery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
            {([
              { id: "digital" as const, icon: <QrCode size={20} />, t: "Digital eSIM", s: "Instant · email QR code", tag: "Recommended" },
              { id: "physical" as const, icon: <Smartphone size={20} />, t: "Physical SIM", s: "Mailed in 3–5 days · $4.99", tag: null },
            ]).map((o) => (
              <button
                key={o.id}
                onClick={() => setType(o.id)}
                style={{
                  textAlign: "left", padding: 20, borderRadius: 18,
                  background: type === o.id ? "rgba(0,127,255,0.10)" : "rgba(255,255,255,0.02)",
                  border: type === o.id ? "1px solid rgba(0,127,255,0.4)" : "1px solid var(--border)",
                  color: "#fff", cursor: "pointer", position: "relative",
                }}
              >
                {o.tag && (
                  <span style={{ position: "absolute", top: 14, right: 14, fontSize: 10, fontWeight: 700, padding: "4px 8px", borderRadius: 999, background: "var(--mint)", color: "#000a17" }}>
                    {o.tag}
                  </span>
                )}
                <span className="icon-chip" style={{ width: 40, height: 40, borderRadius: 12, marginBottom: 14, display: "inline-flex" }}>{o.icon}</span>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{o.t}</div>
                <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>{o.s}</div>
              </button>
            ))}
          </div>

          {/* device check */}
          {type === "digital" && (
            <div style={{ padding: 16, borderRadius: 14, marginBottom: 28, background: "rgba(62,224,162,0.08)", border: "1px solid rgba(62,224,162,0.3)", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(62,224,162,0.15)", color: "var(--mint)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Check size={18} strokeWidth={2.5} />
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Your iPhone 15 Pro supports eSIM</div>
                <div style={{ fontSize: 12, color: "var(--text-3)" }}>Detected automatically · <a href="#" style={{ color: "var(--mint)" }}>Wrong device?</a></div>
              </div>
            </div>
          )}

          {/* form */}
          <p className="caption" style={{ marginBottom: 12 }}>2 · Where to send it</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
            <div className="field">
              <Smartphone size={18} />
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            </div>
            <div className="field">
              <span style={{ color: "var(--text-3)" }}>@</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" />
            </div>
          </div>

          <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 20 }}>
            By continuing you agree to our{" "}
            <Link href={ROUTES.terms} style={{ color: "var(--accent-light)" }}>Terms</Link> and{" "}
            <Link href={ROUTES.privacy} style={{ color: "var(--accent-light)" }}>Privacy Policy</Link>.
          </p>

          <Link
            href={ROUTES.getEsimSuccess}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, width: "100%", height: 60, borderRadius: 999, background: "#fff", color: "#000a17", fontSize: 16, fontWeight: 700, textDecoration: "none" }}
          >
            Send me my free eSIM <ArrowRight size={18} />
          </Link>

          <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-3)" }}>
            <span>🔒 Encrypted · GDPR compliant</span>
            <span>Free delivery · No card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
