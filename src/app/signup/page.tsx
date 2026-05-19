"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Lock, User, Apple, Smartphone, Check } from "lucide-react";

import { ROUTES } from "@/lib/constants";

const PERKS = [
  "$2.50 welcome bonus on first connection",
  "3% Miles back on every top-up",
  "Free eSIM — no physical SIM needed",
  "150+ countries, one balance",
] as const;

export default function SignupPage(): React.ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
  }

  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, minHeight: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="aurora" style={{ opacity: 0.35 }} aria-hidden />

      <div className="container" style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

          {/* left — perks */}
          <div>
            <Link href={ROUTES.home} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40, textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #007FFF, #1a90ff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>N</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>NeoSIM</span>
            </Link>

            <h1 className="ty-1" style={{ margin: "0 0 16px" }}>
              Connect anywhere.<br />
              <span className="gradient-text">Start free.</span>
            </h1>
            <p style={{ fontSize: 15, color: "var(--text-2)", marginBottom: 36, lineHeight: 1.6 }}>
              One account, every country. No subscription, no hidden fees — pay only for the data you use.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PERKS.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(62,224,162,0.15)", color: "var(--mint)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span style={{ fontSize: 14, color: "var(--text-2)" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right — form */}
          <div>
            <div className="glass-strong" style={{ padding: 40 }}>
              <h2 className="ty-3" style={{ margin: "0 0 6px" }}>Create account</h2>
              <p style={{ fontSize: 14, color: "var(--text-3)", marginBottom: 28 }}>Free forever. No card required.</p>

              {/* social */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                <button type="button" style={{ height: 48, borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <Apple size={18} /> Continue with Apple
                </button>
                <button type="button" style={{ height: 48, borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <Smartphone size={18} /> Continue with Google
                </button>
              </div>

              {/* divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                <span style={{ fontSize: 12, color: "var(--text-3)" }}>or email</span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </div>

              {/* form */}
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="field">
                  <User size={16} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <Mail size={16} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <Lock size={16} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password (min 8 chars)"
                    minLength={8}
                    required
                    autoComplete="new-password"
                  />
                </div>

                <button type="submit" style={{ height: 52, borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 4 }}>
                  Create free account <ArrowRight size={16} />
                </button>
              </form>

              <p style={{ textAlign: "center", fontSize: 12, color: "var(--text-3)", marginTop: 20, lineHeight: 1.5 }}>
                By creating an account you agree to our{" "}
                <Link href={ROUTES.terms} style={{ color: "var(--accent-light)" }}>Terms</Link>{" "}and{" "}
                <Link href={ROUTES.privacy} style={{ color: "var(--accent-light)" }}>Privacy Policy</Link>.
              </p>
            </div>

            <p style={{ textAlign: "center", fontSize: 14, color: "var(--text-3)", marginTop: 20 }}>
              Already have an account?{" "}
              <Link href={ROUTES.login} style={{ color: "var(--accent-light)", fontWeight: 600, textDecoration: "none" }}>
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
