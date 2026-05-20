"use client";

import { useState } from "react";
import { ArrowRight, Users, Lock, FileText, Globe, Shield, Headphones } from "lucide-react";

import { TrustBlock } from "@/components/sections/trust-block";

const FEATURES = [
  {
    icon: <Users size={20} />,
    t: "Pooled data",
    d: "1 shared bucket across the team. No per-seat plans, no overages, no 'who used too much' Slack threads.",
  },
  {
    icon: <Lock size={20} />,
    t: "SAML + SCIM",
    d: "Provision and de-provision via Okta, Azure AD, or Google. Offboard a leaver and their eSIM dies in seconds.",
  },
  {
    icon: <FileText size={20} />,
    t: "Real receipts",
    d: "Per-trip, per-employee, per-country line items. CSV export, NetSuite/Coupa hooks, GL coding.",
  },
  {
    icon: <Globe size={20} />,
    t: "150+ countries",
    d: "Same wholesale rates everywhere. No 'high-cost destination' surcharge for sending people to Switzerland.",
  },
  {
    icon: <Shield size={20} />,
    t: "SOC 2 Type II",
    d: "Full audit report under NDA. PCI-DSS for payments, GDPR-compliant data handling, EU-only data residency option.",
  },
  {
    icon: <Headphones size={20} />,
    t: "Named CSM",
    d: "A real human in your timezone, not a ticket queue. SLA-backed response on plans over 50 seats.",
  },
] as const;

const BRANDS = [
  "Atlas",
  "Helix",
  "Northwind",
  "Procyon",
  "Vega",
  "Lumen",
  "Caldera",
  "Onyx",
  "Foxtrot",
  "Meridian",
  "Stratus",
  "Vellum",
] as const;

const EMPLOYEES = [
  { name: "Aiko Tanaka", country: "🇯🇵 Tokyo", usage: "1.2 GB", active: true },
  { name: "Marco Rossi", country: "🇮🇹 Milan", usage: "0.8 GB", active: true },
  { name: "Sarah Chen", country: "🇸🇬 Singapore", usage: "2.4 GB", active: true },
  { name: "Lukas Müller", country: "🇩🇪 Berlin", usage: "0.4 GB", active: false },
] as const;

export default function BusinessPage(): React.ReactElement {
  const [seats, setSeats] = useState(50);
  const [trips, setTrips] = useState(4);
  const [gb, setGb] = useState(3);

  const cost = (seats * trips * gb * 4).toFixed(0);
  const savings = Math.round(parseInt(cost) * 6.5);
  const monthly = ((seats * trips * gb * 4) / 12).toFixed(0);

  return (
    <>
      {/* hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, position: "relative" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="aurora" style={{ opacity: 0.4 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <p className="caption" style={{ color: "#66b7ff", marginBottom: 18 }}>
                NeoSIM for business
              </p>
              <h1 className="ty-display" style={{ margin: 0, marginBottom: 20, maxWidth: 560 }}>
                Travel data your CFO
                <br />
                <span className="gradient-text">won&apos;t yell about.</span>
              </h1>
              <p className="lead" style={{ marginBottom: 32, maxWidth: 540 }}>
                One dashboard, every employee, every country. Pooled data, central billing, zero
                roaming surprises. Used by 600+ teams from 5-person startups to Fortune 500.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    height: 56,
                    padding: "0 24px",
                    borderRadius: 999,
                    background: "#fff",
                    color: "#000a17",
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Talk to sales <ArrowRight size={16} />
                </a>
                <a
                  href="#calc"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: 56,
                    padding: "0 24px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  See the savings
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 28,
                  flexWrap: "wrap",
                  fontSize: 13,
                  color: "var(--text-2)",
                }}
              >
                {["✓ SOC 2 Type II", "✓ SAML SSO", "✓ Net-30 invoicing", "✓ SCIM provisioning"].map(
                  (t) => (
                    <span key={t}>{t}</span>
                  )
                )}
              </div>
            </div>

            {/* live dashboard card */}
            <div className="glass-strong" style={{ padding: 32 }}>
              <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>
                Q3 2025 fleet · live demo
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 24,
                  paddingBottom: 20,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {[
                  { l: "Active eSIMs", v: "247", c: "#fff" },
                  { l: "This month", v: "$3.4k", c: "var(--mint)" },
                  { l: "vs roaming", v: "−84%", c: "var(--mint)" },
                ].map(({ l, v, c }) => (
                  <div key={l}>
                    <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>{l}</div>
                    <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px", color: c }}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {EMPLOYEES.map((r) => (
                  <div
                    key={r.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "8px 0",
                      fontSize: 13,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: r.active ? "var(--mint)" : "var(--text-3)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ flex: 1, fontWeight: 600 }}>{r.name}</span>
                    <span style={{ color: "var(--text-3)" }}>{r.country}</span>
                    <span className="mono" style={{ width: 56, textAlign: "right" }}>
                      {r.usage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section style={{ padding: "40px 0 60px" }}>
        <div className="container">
          <h2 className="ty-2" style={{ margin: 0, marginBottom: 8 }}>
            Everything finance and IT need.
          </h2>
          <p className="body-sm" style={{ marginBottom: 40, maxWidth: 600 }}>
            Built for the way distributed teams actually travel — not the way carriers think they
            do.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {FEATURES.map((c) => (
              <div key={c.t} className="glass" style={{ padding: 28 }}>
                <span className="icon-chip" style={{ marginBottom: 18 }}>
                  {c.icon}
                </span>
                <h3 className="ty-4" style={{ margin: 0, marginBottom: 10 }}>
                  {c.t}
                </h3>
                <p className="body-sm" style={{ margin: 0 }}>
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* calculator */}
      <section id="calc" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="glass-strong" style={{ padding: 48 }}>
            <p className="caption" style={{ color: "#66b7ff", marginBottom: 12 }}>
              Savings calculator
            </p>
            <h2 className="ty-2" style={{ marginTop: 0, marginBottom: 32 }}>
              How much will you stop spending on roaming?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {(
                  [
                    {
                      l: "Traveling employees",
                      v: seats,
                      set: setSeats,
                      min: 5,
                      max: 500,
                      step: 5,
                      suffix: "people",
                    },
                    {
                      l: "International trips per person, per year",
                      v: trips,
                      set: setTrips,
                      min: 1,
                      max: 24,
                      step: 1,
                      suffix: "trips",
                    },
                    {
                      l: "Data per trip",
                      v: gb,
                      set: setGb,
                      min: 1,
                      max: 20,
                      step: 1,
                      suffix: "GB",
                    },
                  ] as const
                ).map((s) => (
                  <div key={s.l}>
                    <div
                      style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}
                    >
                      <span style={{ fontSize: 14, color: "var(--text-2)" }}>{s.l}</span>
                      <span className="mono" style={{ fontWeight: 700 }}>
                        {s.v} {s.suffix}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={s.min}
                      max={s.max}
                      step={s.step}
                      value={s.v}
                      onChange={(e) => s.set(parseInt(e.target.value))}
                      style={{ width: "100%", accentColor: "#007FFF" }}
                    />
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 16,
                  padding: 32,
                  borderRadius: 16,
                  background: "rgba(62,224,162,0.06)",
                  border: "1px solid rgba(62,224,162,0.25)",
                }}
              >
                <div>
                  <p className="caption" style={{ color: "var(--text-3)", marginBottom: 6 }}>
                    Annual NeoSIM cost
                  </p>
                  <div
                    style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-1px", color: "#fff" }}
                  >
                    ${parseInt(cost).toLocaleString()}
                  </div>
                </div>
                <div>
                  <p className="caption" style={{ color: "var(--text-3)", marginBottom: 6 }}>
                    Annual savings vs roaming
                  </p>
                  <div
                    style={{
                      fontSize: 56,
                      fontWeight: 800,
                      letterSpacing: "-1.5px",
                      color: "var(--mint)",
                    }}
                  >
                    ${savings.toLocaleString()}
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-3)", margin: 0 }}>
                  vs. $30/GB blended carrier roaming · {monthly} GB pooled monthly avg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brand logos */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <p
            className="caption"
            style={{ color: "var(--text-3)", marginBottom: 24, textAlign: "center" }}
          >
            Companies using NeoSIM for business
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
            {BRANDS.map((b) => (
              <div
                key={b}
                style={{
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-2)",
                  letterSpacing: "0.5px",
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div
            className="glass-strong"
            style={{ padding: 48, display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48 }}
          >
            <div>
              <h2 className="ty-2" style={{ marginTop: 0, marginBottom: 16 }}>
                Talk to sales
              </h2>
              <p className="body-sm" style={{ marginBottom: 28 }}>
                30-minute call. We&apos;ll review your travel patterns and quote a pooled plan. No
                PDF deck.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  fontSize: 13,
                  color: "var(--text-2)",
                }}
              >
                <div>📧 business@neosim.io</div>
                <div>📞 +31 20 808 0303</div>
                <div>🕐 Avg. response · 2h, M–F</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="field">
                <input placeholder="Full name" />
              </div>
              <div className="field">
                <input placeholder="Work email" />
              </div>
              <div className="field">
                <input placeholder="Company" />
              </div>
              <div className="field">
                <input placeholder="# of travelers" />
              </div>
              <textarea
                className="field"
                style={{
                  gridColumn: "1 / -1",
                  width: "100%",
                  minHeight: 100,
                  padding: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
                placeholder="Where do you travel most?"
              />
              <button
                style={{
                  gridColumn: "1 / -1",
                  height: 52,
                  borderRadius: 999,
                  border: "none",
                  background: "#fff",
                  color: "#000a17",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Request a demo <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <TrustBlock />
    </>
  );
}
