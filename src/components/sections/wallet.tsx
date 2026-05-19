"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, Wallet as WalletIcon, Zap, Plus, Gift } from "lucide-react";

import { ROUTES } from "@/lib/constants";

type ScreenId = "home" | "wallet" | "speed" | "plans";

const SCREENS: { id: ScreenId; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", icon: <Globe className="size-3" /> },
  { id: "wallet", label: "Wallet", icon: <WalletIcon className="size-3" /> },
  { id: "speed", label: "Speed", icon: <Zap className="size-3" /> },
  { id: "plans", label: "Plans", icon: <Plus className="size-3" /> },
];

const SCREEN_THEMES: Record<ScreenId, { glow: string; accent: string }> = {
  home: { glow: "rgba(0,127,255,0.32)", accent: "#007fff" },
  wallet: { glow: "rgba(62,224,162,0.30)", accent: "#3ee0a2" },
  speed: { glow: "rgba(255,140,40,0.30)", accent: "#ff8c28" },
  plans: { glow: "rgba(160,100,255,0.32)", accent: "#a064ff" },
};

const FEATURES = [
  {
    icon: WalletIcon,
    title: "Live usage tracking",
    body: "Watch your balance update with each MB. Set spend caps and instant alerts.",
  },
  {
    icon: Gift,
    title: "3% Miles back, always",
    body: "Redeem as free data. Top-ups via Apple/Google Pay or card earn Miles automatically.",
  },
  {
    icon: Zap,
    title: "One-tap top-ups",
    body: "Apple Pay, Google Pay, Visa, Mastercard, USDT. From $5.",
  },
] as const;

function PhoneHome(): React.ReactElement {
  return (
    <div className="flex h-full flex-col gap-3 p-5 pt-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-extrabold tracking-tight">NeoSIM</span>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/8">
          <Plus className="size-3" />
        </span>
      </div>
      <div>
        <p className="text-xl font-extrabold leading-tight tracking-tight">
          Connect
          <br />& Travel
        </p>
        <p className="mt-1.5 text-[10px] text-white/50">One eSIM · 150+ countries</p>
      </div>
      <div
        className="flex-1 rounded-[18px] p-4"
        style={{
          background: "radial-gradient(circle at 70% 80%, rgba(0,127,255,0.45), rgba(0,15,45,0.9))",
          border: "1px solid rgba(0,127,255,0.3)",
        }}
      >
        <p className="mb-3 text-[11px] font-bold">Popular</p>
        <div
          className="flex items-center gap-2 rounded-2xl p-2.5"
          style={{ background: "rgba(8,16,32,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-base">🇯🇵</span>
          <span className="text-[11px] font-semibold">Tokyo, Japan</span>
        </div>
        <div className="mt-4 text-right">
          <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold text-[#000a17]">
            $2.40<span className="font-medium text-[rgba(0,10,23,0.6)]">/GB</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function PhoneWallet(): React.ReactElement {
  const rows = [
    { flag: "🇮🇹", city: "Rome", mb: "1.2 GB", amt: "−$22.10", hl: false },
    { flag: "🇪🇸", city: "Barcelona", mb: "480 MB", amt: "−$8.76", hl: false },
    { flag: "+", city: "Apple Pay", mb: "+3% Miles back", amt: "+$50.00", hl: true },
    { flag: "🇯🇵", city: "Tokyo", mb: "320 MB", amt: "−$6.12", hl: false },
  ];
  return (
    <div className="flex h-full flex-col p-5 pt-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-extrabold">Wallet</span>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/8">
          <Plus className="size-3" />
        </span>
      </div>
      <p className="mb-0.5 text-[10px] text-white/50">Available balance</p>
      <p className="mb-4 text-3xl font-extrabold tracking-[-1px]">
        $48.<span className="text-white/40 font-semibold">27</span>
      </p>
      <div className="mb-4 flex gap-2">
        <button className="h-9 flex-1 rounded-xl bg-white text-[11px] font-bold text-[#000a17]">
          Top up
        </button>
        <button
          className="h-9 flex-1 rounded-xl text-[11px] font-semibold text-white"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          Send
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg px-2 py-2">
            <span
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg text-[11px]"
              style={{
                background: r.hl ? "rgba(62,224,162,0.15)" : "rgba(255,255,255,0.05)",
                color: r.hl ? "#3ee0a2" : "#fff",
              }}
            >
              {r.flag}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold">{r.city}</p>
              <p className="text-[9px]" style={{ color: r.hl ? "#3ee0a2" : "rgba(255,255,255,0.5)" }}>
                {r.mb}
              </p>
            </div>
            <span
              className="font-mono text-[10px] font-bold"
              style={{ color: r.hl ? "#3ee0a2" : "#fff" }}
            >
              {r.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneSpeed(): React.ReactElement {
  return (
    <div className="flex h-full flex-col p-5 pt-3">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-extrabold">Speed test</span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#3ee0a2]">
          <span className="size-1.5 rounded-full bg-[#3ee0a2]" style={{ boxShadow: "0 0 6px #3ee0a2" }} />
          LIVE
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative size-40">
          <svg viewBox="0 0 180 180" className="absolute inset-0">
            <circle cx="90" cy="90" r="78" stroke="rgba(255,255,255,0.06)" strokeWidth="10" fill="none" />
            <circle
              cx="90"
              cy="90"
              r="78"
              stroke="url(#speedGrad)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="490"
              strokeDashoffset="120"
              transform="rotate(-90 90 90)"
            />
            <defs>
              <linearGradient id="speedGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff8c28" />
                <stop offset="100%" stopColor="#3ee0a2" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold tracking-[-1.5px]">184</span>
            <span className="text-[10px] text-white/50">Mbps · 5G</span>
          </div>
        </div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          {[
            { l: "Down", v: "184", u: "Mbps" },
            { l: "Up", v: "42", u: "Mbps" },
            { l: "Ping", v: "47", u: "ms" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl p-2.5 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-[8px] uppercase tracking-widest text-white/50">{s.l}</p>
              <p className="mt-1 text-base font-extrabold">
                {s.v} <span className="text-[8px] text-white/50">{s.u}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhonePlans(): React.ReactElement {
  const items = [
    { flag: "🇫🇷", city: "Paris", net: "Orange · 5G", price: "$1.80", active: false },
    { flag: "🇩🇪", city: "Berlin", net: "Vodafone · 5G", price: "$1.80", active: true },
    { flag: "🇯🇵", city: "Tokyo", net: "NTT · 5G", price: "$3.73", active: false },
    { flag: "🇺🇸", city: "New York", net: "T-Mobile · 5G", price: "$2.07", active: false },
    { flag: "🇬🇧", city: "London", net: "EE · 5G", price: "$1.80", active: false },
  ];
  return (
    <div className="flex h-full flex-col p-5 pt-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-extrabold">Plans</span>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/8">
          <Globe className="size-3" />
        </span>
      </div>
      <div
        className="mb-3 flex h-8 items-center gap-2 rounded-full px-3 text-[10px] text-white/50"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Globe className="size-2.5" /> Search 150+ countries
      </div>
      <div className="flex flex-col gap-1">
        {items.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-xl px-2.5 py-2"
            style={{
              background: p.active ? "rgba(160,100,255,0.12)" : "transparent",
              border: p.active ? "1px solid rgba(160,100,255,0.3)" : "1px solid transparent",
            }}
          >
            <span className="text-base">{p.flag}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold">{p.city}</p>
              <p className="text-[9px] text-white/50">{p.net}</p>
            </div>
            <span className="font-mono text-[10px] font-bold">
              {p.price}<span className="text-[8px] text-white/50">/GB</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Wallet(): React.ReactElement {
  const [screen, setScreen] = useState<ScreenId>("home");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setScreen((s) => {
        const idx = SCREENS.findIndex((x) => x.id === s);
        return SCREENS[(idx + 1) % SCREENS.length].id;
      });
    }, 4000);
    return () => clearTimeout(t);
  }, [screen, paused]);

  const theme = SCREEN_THEMES[screen];

  return (
    <section
      id="wallet"
      className="section-pad relative overflow-hidden"
      style={{ background: "#00060f" }}
    >
      <div className="aurora pointer-events-none absolute inset-0 opacity-45" aria-hidden />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      {/* Dynamic glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${theme.glow}, transparent 60%)`,
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1140px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="caption mb-4 text-[#66b7ff]">Wallet app</p>
          <h2 className="text-[clamp(26px,3.8vw,48px)] font-bold leading-[1.05] tracking-[-1.2px]">
            One wallet. 150+ countries.
            <br />
            <span className="gradient-text">Every trip.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-base leading-7 text-text-2">
            Tap any screen below — see how every megabyte, top-up and speed update
            flows through the app in real time.
          </p>
        </div>

        {/* Screen tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {SCREENS.map((s) => (
            <button
              key={s.id}
              onClick={() => setScreen(s.id)}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-150"
              style={{
                background: screen === s.id ? "#fff" : "rgba(255,255,255,0.04)",
                color: screen === s.id ? "#000a17" : "rgba(255,255,255,0.72)",
                borderColor: screen === s.id ? "#fff" : "rgba(255,255,255,0.08)",
              }}
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>

        {/* Phone mock */}
        <div className="flex justify-center">
          <div
            className="relative overflow-hidden rounded-[44px]"
            style={{
              width: 280,
              height: 580,
              background: "linear-gradient(180deg, #0a1424, #02060f)",
              border: "2px solid rgba(255,255,255,0.08)",
              boxShadow: `0 30px 80px ${theme.glow}, 0 0 0 1px ${theme.accent}33, inset 0 1px 0 rgba(255,255,255,0.08)`,
              padding: 8,
              transition: "box-shadow 0.6s ease",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-[36px]"
              style={{
                background: "linear-gradient(180deg, #050d20 0%, #0a1830 60%, #001033 100%)",
              }}
            >
              {/* Notch */}
              <div className="absolute left-1/2 top-2 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />

              {/* Status bar */}
              <div className="flex justify-between px-5 pt-4 text-[11px] font-semibold">
                <span>9:41</span>
                <div className="flex items-center gap-1 text-white/60">
                  <svg viewBox="0 0 24 24" className="size-3 fill-current">
                    <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="size-3 fill-current">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="size-3.5 fill-current">
                    <rect x="2" y="7" width="16" height="10" rx="2" /><path d="M22 11v2" />
                  </svg>
                </div>
              </div>

              {/* Active screen */}
              <div key={screen} className="h-[calc(100%-36px)] animate-[fadeUp_0.35s_ease]">
                {screen === "home" && <PhoneHome />}
                {screen === "wallet" && <PhoneWallet />}
                {screen === "speed" && <PhoneSpeed />}
                {screen === "plans" && <PhonePlans />}
              </div>

              {/* Bottom nav */}
              <div
                className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1 rounded-full p-1 backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {SCREENS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScreen(s.id)}
                    className="inline-flex h-7 w-9 items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      background: screen === s.id ? "#fff" : "transparent",
                      color: screen === s.id ? "#000a17" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass rounded-[22px] p-7">
              <span className="icon-chip mb-5 inline-flex">
                <Icon className="size-5" />
              </span>
              <p className="mb-2 text-[15px] font-bold">{title}</p>
              <p className="text-sm leading-relaxed text-text-2">{body}</p>
            </div>
          ))}
        </div>

        {/* App store CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href={ROUTES.appDownload}
            className="inline-flex h-[52px] items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#000a17] transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
          >
            <svg viewBox="0 0 24 24" className="size-[18px] fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.14 1.25-2.12 3.73.03 2.97 2.6 3.96 2.63 3.97-.03.07-.41 1.41-1.36 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </Link>
          <Link
            href={ROUTES.appDownload}
            className="inline-flex h-[52px] items-center gap-2 rounded-full border border-white/8 bg-white/4 px-6 text-sm font-bold text-white transition-colors hover:bg-white/8"
          >
            <svg viewBox="0 0 24 24" className="size-[18px] fill-current">
              <path d="M3.18 23.76c.3.17.64.22.97.15L14.76 12 3.18.09C2.84.02 2.5.07 2.2.24 1.6.58 1.2 1.24 1.2 2.01v19.98c0 .77.4 1.43 1 1.77zM16.59 13.41l2.94-2.94-2.94-2.94L14.76 12l1.83 1.41zM4.05 22.46l11.2-6.46L12.9 13.66 4.05 22.46zM4.05 1.54l8.85 8.8 2.35-2.34L4.05 1.54z" />
            </svg>
            Google Play
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
