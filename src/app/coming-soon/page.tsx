"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { ArrowLeft, ArrowRight, Check, Mail, Smartphone, Globe, Gift, Share2, Users, Zap, Signal } from "lucide-react";

import { ROUTES } from "@/lib/constants";

const FEATURE_MAP: Record<string, { label: string; icon: React.ReactNode; eta: string }> = {
  compatibility: { label: "Device Compatibility", icon: <Smartphone size={32} />, eta: "Q3 2026" },
  app:           { label: "NeoSIM App",            icon: <Smartphone size={32} />, eta: "Q3 2026" },
  status:        { label: "Network Status",         icon: <Signal size={32} />,    eta: "Q3 2026" },
  "neo-companion": { label: "AI Trip Companion",   icon: <Globe size={32} />,     eta: "Q4 2026" },
  loyalty:       { label: "NeoSIM Miles",           icon: <Gift size={32} />,      eta: "Q3 2026" },
  referral:      { label: "Invite & Earn",          icon: <Share2 size={32} />,    eta: "Q3 2026" },
  family:        { label: "Family Wallet",          icon: <Users size={32} />,     eta: "Q3 2026" },
};

const STAGES = ["Design", "Build", "Test", "Launch"] as const;

function ComingSoonContent(): React.ReactElement {
  const params = useSearchParams();
  const feature = params.get("feature") ?? "app";
  const info = FEATURE_MAP[feature] ?? { label: "New features", icon: <Zap size={32} />, eta: "Q3 2026" };

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (email) setSent(true);
  }

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#00040c" }}>
      <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.75) 0%, rgba(0,6,15,0.55) 50%, rgba(0,10,23,0.85) 100%)" }} aria-hidden />
      <div className="aurora" style={{ zIndex: 2, opacity: 0.6 }} aria-hidden />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-35" style={{ zIndex: 2 }} aria-hidden />

      <div className="container" style={{ position: "relative", zIndex: 3, textAlign: "center", maxWidth: 640, padding: "140px 24px 80px" }}>

        {/* icon */}
        <div style={{ width: 80, height: 80, borderRadius: 24, margin: "0 auto 32px", background: "rgba(0,127,255,0.12)", border: "1px solid rgba(0,127,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#66b7ff", boxShadow: "0 0 40px rgba(0,127,255,0.2)" }}>
          {info.icon}
        </div>

        {/* ETA badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, marginBottom: 24, background: "rgba(62,224,162,0.10)", border: "1px solid rgba(62,224,162,0.3)", color: "var(--mint)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--mint)", boxShadow: "0 0 8px var(--mint)" }} />
          {info.eta}
        </div>

        <h1 className="ty-1" style={{ margin: "0 0 16px" }}>
          {info.label}<br />
          <span className="gradient-text">coming soon.</span>
        </h1>

        <p className="lead" style={{ marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
          We&apos;re building this. Drop your email and we&apos;ll tell you the moment it&apos;s live.
        </p>

        {/* email form */}
        {!sent ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto 32px", flexWrap: "wrap", justifyContent: "center" }}>
            <div className="field" style={{ flex: 1, minWidth: 220 }}>
              <Mail size={16} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
            </div>
            <button type="submit" style={{ height: 52, padding: "0 24px", borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              Notify me <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 28px", borderRadius: 999, marginBottom: 32, background: "rgba(62,224,162,0.10)", border: "1px solid rgba(62,224,162,0.3)" }}>
            <Check size={18} style={{ color: "var(--mint)" }} strokeWidth={2.5} />
            <span style={{ fontWeight: 600, color: "var(--mint)" }}>You&apos;re on the list — we&apos;ll be in touch.</span>
          </div>
        )}

        {/* back link */}
        <div style={{ marginTop: sent ? 32 : 0 }}>
          <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 14, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
        </div>

        {/* progress dots */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 64 }}>
          {STAGES.map((s, i) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: i === 1 ? "#007fff" : i === 0 ? "var(--mint)" : "rgba(255,255,255,0.15)", boxShadow: i === 1 ? "0 0 12px #007fff" : i === 0 ? "0 0 10px var(--mint)" : "none" }} />
              <span style={{ fontSize: 10, color: i < 2 ? "var(--text-2)" : "var(--text-3)" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ComingSoonPage(): React.ReactElement {
  return (
    <Suspense>
      <ComingSoonContent />
    </Suspense>
  );
}
