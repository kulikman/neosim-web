"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Wallet,
  Headphones,
} from "lucide-react";

import { type Country, COUNTRIES, DESTINATIONS } from "@/lib/data";
import { ROUTES } from "@/lib/constants";

const PAYMENT_ICONS = [
  {
    label: "Apple Pay",
    svg: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.14 1.25-2.12 3.73.03 2.97 2.6 3.96 2.63 3.97-.03.07-.41 1.41-1.36 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    label: "Google Pay",
    svg: (
      <svg viewBox="0 0 24 24" className="size-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    label: "Visa",
    svg: <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.5px" }}>VISA</span>,
  },
  {
    label: "Mastercard",
    svg: (
      <svg viewBox="0 0 38 24" className="h-4 w-auto">
        <circle cx="15" cy="12" r="10" fill="#eb001b" />
        <circle cx="23" cy="12" r="10" fill="#f79e1b" />
        <path d="M19 5.4a10 10 0 0 1 0 13.2A10 10 0 0 1 19 5.4z" fill="#ff5f00" />
      </svg>
    ),
  },
  {
    label: "Crypto",
    svg: <Wallet size={18} />,
  },
] as const;

const STATS = [
  { v: "150+", l: "Countries" },
  { v: "500+", l: "Networks" },
  { v: "24/7", l: "Support" },
  { v: "$0", l: "eSIM fee" },
] as const;

const VTABS = [
  { id: "data" as const, icon: <Wifi size={26} />, label: "Data" },
  { id: "wallet" as const, icon: <Wallet size={22} />, label: "Wallet" },
  { id: "help" as const, icon: <Headphones size={22} />, label: "Support" },
];

export function Hero(): React.ReactElement {
  const [tab, setTab] = useState<"data" | "wallet" | "help">("data");
  const [country, setCountry] = useState<Country>(COUNTRIES[2]); // United Kingdom (matches design default)
  const [gb, setGb] = useState(3);
  const [showDropdown, setShowDropdown] = useState(false);
  const [agree, setAgree] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pricePerGB = (country.priceMb * 1024).toFixed(2);
  const total = (country.priceMb * 1024 * gb).toFixed(2);

  useEffect(() => {
    function handler(e: MouseEvent): void {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: 800, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>

      {/* Earth photo background */}
      <Image
        src="/assets/earth.jpg"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }}
        sizes="100vw"
        aria-hidden
      />

      {/* Tint overlay */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(180deg, rgba(0,6,15,0.35) 0%, rgba(0,6,15,0.15) 50%, rgba(0,10,23,0.55) 85%, var(--bg-deep) 100%)",
        }}
        aria-hidden
      />

      {/* Aurora */}
      <div className="aurora" style={{ zIndex: 2, opacity: 0.5 }} aria-hidden />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: 240,
          background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2,
        }}
        aria-hidden
      />

      <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32 }}>

        {/* 3-col hero grid */}
        <div
          className="hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1.05fr 88px 1fr", gap: 40, alignItems: "start", paddingTop: 16 }}
        >

          {/* LEFT — headline + features */}
          <div>
            <h1 className="h-display" style={{ margin: 0, marginBottom: 24 }}>
              One eSIM<br />
              <span className="gradient-text">150+ countries</span><br />
              Pay only for what you use
            </h1>
            <p className="lead" style={{ maxWidth: 480, marginBottom: 28 }}>
              Land anywhere on Earth and connect to the strongest local network — automatically.
              No SIM swaps, no expiring packages, no roaming bills.
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
              <Link href={ROUTES.getEsim} className="btn btn-primary">
                Get free eSIM <ArrowRight size={16} />
              </Link>
              <Link href={ROUTES.howItWorks} className="btn btn-ghost">
                How it works
              </Link>
            </div>

            <div className="mono" style={{ marginBottom: 36, color: "var(--text-3)", fontSize: 12 }}>
              ✓ Works on iPhone XS+ · Pixel 4+ · Galaxy S20+ · Most flagships
            </div>

            {/* Payment icons */}
            <div style={{ marginBottom: 36 }}>
              <div className="caption" style={{ marginBottom: 14 }}>Top up with</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {PAYMENT_ICONS.map(({ label, svg }) => (
                  <div
                    key={label}
                    title={label}
                    className="pill-icon"
                    style={{ width: 44, height: 44 }}
                  >
                    {svg}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats strip */}
            <div style={{ display: "flex", gap: 28, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
              {STATS.map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.6px" }}>{v}</div>
                  <div className="caption" style={{ marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE — vertical tabs */}
          <div
            className="hero-tabs"
            style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 8 }}
          >
            {VTABS.map((t) => (
              <button
                key={t.id}
                className={`vtab${tab === t.id ? " active" : ""}`}
                onClick={() => setTab(t.id)}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* RIGHT — configurator card */}
          <div className="glass-strong" style={{ padding: 28, position: "relative" }}>
            {/* Gradient border top */}
            <div
              style={{
                position: "absolute", inset: 0, borderRadius: 28, padding: 1,
                background: "linear-gradient(180deg, rgba(0,127,255,0.4), transparent 50%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              }}
              aria-hidden
            />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <h3 className="h-3" style={{ margin: 0 }}>Build your plan</h3>
                <span className="mono" style={{ color: "var(--mint)" }}>+ free eSIM</span>
              </div>
              <p className="body-sm" style={{ marginTop: 0, marginBottom: 26 }}>
                Pay per gigabyte. No subscriptions, no expiry.{" "}
                <span style={{ color: "var(--mint)" }}>+ $2.50 welcome bonus.</span>
              </p>

              {/* Segment control */}
              <div className="seg" style={{ marginBottom: 18 }}>
                <button className="active"><span className="dot" /> Single trip</button>
                <button>Multi-trip</button>
              </div>

              {/* Country picker */}
              <div style={{ position: "relative", marginBottom: 12 }} ref={dropdownRef}>
                <button
                  className="field"
                  onClick={() => setShowDropdown((s) => !s)}
                >
                  <span style={{ fontSize: 22 }}>{country.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: "#fff" }}>{country.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>{country.networks}</div>
                  </div>
                  <ChevronDown
                    size={16}
                    style={{
                      color: "var(--text-3)",
                      transform: showDropdown ? "rotate(180deg)" : "none",
                      transition: "transform .2s",
                    }}
                  />
                </button>

                {showDropdown && (
                  <div
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 20,
                      background: "rgba(5,12,26,0.88)", backdropFilter: "blur(52px)", WebkitBackdropFilter: "blur(52px)",
                      border: "1px solid rgba(255,255,255,0.10)", borderRadius: 18,
                      padding: 8, maxHeight: 320, overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                    }}
                  >
                    {COUNTRIES.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => { setCountry(c); setShowDropdown(false); }}
                        style={{
                          display: "flex", alignItems: "center", gap: 12, width: "100%",
                          padding: "10px 12px", borderRadius: 12, textAlign: "left",
                          background: country.code === c.code ? "rgba(0,127,255,0.12)" : "transparent",
                          color: "#fff", fontSize: 14, border: "none", cursor: "pointer",
                        }}
                        onMouseEnter={(e) => { if (country.code !== c.code) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={(e) => { if (country.code !== c.code) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <span style={{ fontSize: 20 }}>{c.flag}</span>
                        <span style={{ flex: 1 }}>{c.name}</span>
                        <span className="mono" style={{ color: "var(--text-3)", fontSize: 12 }}>
                          ${(c.priceMb * 1024).toFixed(2)}/GB
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* GB slider */}
              <div className="field" style={{ marginBottom: 12, flexDirection: "column", alignItems: "stretch", gap: 14, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>Estimated data</div>
                    <div style={{ fontWeight: 700, fontSize: 18 }}>{gb} GB</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>Per GB</div>
                    <div className="mono" style={{ color: "#fff", fontSize: 13 }}>${pricePerGB}</div>
                  </div>
                </div>
                <div style={{ position: "relative", height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 999 }}>
                  <div
                    style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: `${(gb / 15) * 100}%`,
                      background: "linear-gradient(90deg, var(--accent), var(--accent-light))", borderRadius: 999,
                    }}
                  />
                  <input
                    type="range" min={1} max={15} step={0.5} value={gb}
                    onChange={(e) => setGb(parseFloat(e.target.value))}
                    style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer", width: "100%" }}
                    aria-label="Estimated data in GB"
                  />
                  <div
                    style={{
                      position: "absolute", left: `calc(${(gb / 15) * 100}% - 10px)`, top: -7,
                      width: 20, height: 20, borderRadius: 999,
                      background: "#fff", boxShadow: "0 0 0 4px rgba(0,127,255,0.25), 0 4px 12px rgba(0,0,0,0.4)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Agree */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, fontSize: 13, color: "var(--text-2)" }}>
                <button
                  onClick={() => setAgree((v) => !v)}
                  className={`cb-dot${agree ? " on" : ""}`}
                  style={{ position: "relative" }}
                  aria-checked={agree}
                  role="checkbox"
                  aria-label="I agree to data processing"
                >
                  {agree && <span style={{ position: "absolute", inset: 3, borderRadius: 999, background: "#fff" }} />}
                </button>
                I agree to the processing of personal data
              </div>

              {/* CTA row */}
              <div style={{ display: "flex", gap: 10 }}>
                <Link
                  href={ROUTES.getEsim}
                  className="btn btn-primary"
                  style={{ flex: 1, height: 52, fontSize: 15 }}
                >
                  Get my eSIM — ${total}
                </Link>
                <Link
                  href={ROUTES.getEsim}
                  className="btn-icon"
                  style={{ width: 52, height: 52, borderRadius: 14, background: "#000a17" }}
                  aria-label="Get eSIM"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>

              <div className="mono" style={{ marginTop: 14, textAlign: "center", color: "var(--text-3)", fontSize: 11, lineHeight: 1.6 }}>
                $5 minimum top-up · cancel anytime · refund unused balance<br />
                <span style={{ color: "var(--mint)" }}>+ $2.50 welcome bonus on first connection abroad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular destinations */}
        <div style={{ marginTop: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 className="h-3" style={{ margin: 0, fontSize: 28, letterSpacing: "-0.6px" }}>Popular this month</h2>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-icon" style={{ width: 40, height: 40, borderRadius: 999 }} aria-label="Previous">
                <ChevronLeft size={16} />
              </button>
              <button className="btn-icon" style={{ width: 40, height: 40, borderRadius: 999 }} aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="popular-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}
          >
            {DESTINATIONS.slice(0, 4).map((d) => (
              <div key={d.code} className="dest-card" style={{ aspectRatio: "4/4.6" }}>
                <div className="dest-img" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="dest-content" style={{ justifyContent: "flex-end", gap: 0 }}>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{d.country}</div>
                    <div className="h-4" style={{ marginTop: 2 }}>{d.city}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.92)", color: "#000a17",
                        padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600,
                      }}
                    >
                      ${(d.priceMb * 1024).toFixed(2)}
                      <span style={{ color: "rgba(0,10,23,0.6)", fontWeight: 500 }}>/GB</span>
                    </div>
                    <button
                      className="btn-icon"
                      style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(0,10,23,0.6)", backdropFilter: "blur(8px)" }}
                      aria-label={`View ${d.city}`}
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1180px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-tabs { flex-direction: row !important; }
        }
        @media (max-width: 720px) {
          .popular-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
