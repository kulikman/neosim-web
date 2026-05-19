"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Lock, Apple, Smartphone } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export default function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
  }

  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, minHeight: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="aurora" style={{ opacity: 0.35 }} aria-hidden />

      <div className="container" style={{ position: "relative", maxWidth: 440, margin: "0 auto" }}>

        {/* logo */}
        <Link href={ROUTES.home} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40, textDecoration: "none", justifyContent: "center" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #007FFF, #1a90ff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>N</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>NeoSIM</span>
        </Link>

        <div className="glass-strong" style={{ padding: 40 }}>
          <h1 className="ty-2" style={{ margin: "0 0 8px", textAlign: "center" }}>Welcome back</h1>
          <p style={{ fontSize: 14, color: "var(--text-3)", textAlign: "center", marginBottom: 32 }}>
            Sign in to your account
          </p>

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
                placeholder="Password"
                required
                autoComplete="current-password"
              />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}>
              <Link href={`${ROUTES.comingSoon}?feature=app`} style={{ fontSize: 13, color: "var(--accent-light)", textDecoration: "none" }}>
                Forgot password?
              </Link>
            </div>

            <button type="submit" style={{ height: 52, borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              Sign in <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <p style={{ textAlign: "center", fontSize: 14, color: "var(--text-3)", marginTop: 24 }}>
          Don&apos;t have an account?{" "}
          <Link href={ROUTES.signup} style={{ color: "var(--accent-light)", fontWeight: 600, textDecoration: "none" }}>
            Sign up free
          </Link>
        </p>

      </div>
    </section>
  );
}
