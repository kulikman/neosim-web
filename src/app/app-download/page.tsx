import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone, Wifi, Wallet, Gift, Users, Shield, Zap, Check, Signal } from "lucide-react";

import { ROUTES } from "@/lib/constants";
import { TrustBlock } from "@/components/sections/trust-block";

function PhoneMock({ screen, scale = 1, rotate = 0, glowColor = "rgba(0,127,255,0.5)" }: { screen: React.ReactNode; scale?: number; rotate?: number; glowColor?: string }): React.ReactElement {
  return (
    <div style={{ width: 240 * scale, height: 490 * scale, borderRadius: 44 * scale, background: "linear-gradient(180deg, #0a1424, #02060f)", border: "2px solid rgba(255,255,255,0.08)", boxShadow: `0 30px 80px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.08)`, padding: 7 * scale, transform: `rotate(${rotate}deg)`, flexShrink: 0 }}>
      <div style={{ width: "100%", height: "100%", borderRadius: 38 * scale, overflow: "hidden", background: "linear-gradient(180deg, #050d20 0%, #0a1830 60%, #001033 100%)", position: "relative" }}>
        <div style={{ position: "absolute", top: 7 * scale, left: "50%", transform: "translateX(-50%)", width: 76 * scale, height: 18 * scale, borderRadius: 999, background: "#000", zIndex: 5 }} />
        <div style={{ display: "flex", justifyContent: "space-between", padding: `${12 * scale}px ${18 * scale}px 0`, fontSize: 10 * scale, fontWeight: 600 }}>
          <span>9:41</span>
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Signal size={9 * scale} /><Wifi size={9 * scale} />
          </div>
        </div>
        <div style={{ height: `calc(100% - ${22 * scale}px)` }}>{screen}</div>
      </div>
    </div>
  );
}

function HomeScreen(): React.ReactElement {
  return (
    <div style={{ padding: "10px 16px 0" }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>NeoSIM</div>
      <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: 6 }}>Connect<br />&amp; Travel</div>
      <div style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 12 }}>One eSIM · 150+ countries</div>
      <div style={{ borderRadius: 16, padding: 12, background: "rgba(0,127,255,0.12)", border: "1px solid rgba(0,127,255,0.25)", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 16 }}>🇩🇪</span>
          <div style={{ fontWeight: 700, fontSize: 12 }}>Germany</div>
          <span style={{ marginLeft: "auto", fontSize: 9, color: "var(--mint)", fontWeight: 600 }}>ACTIVE</span>
        </div>
        <div style={{ fontSize: 10, color: "var(--text-3)" }}>Vodafone · 5G · $1.80/GB</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
        <div style={{ fontSize: 10, color: "var(--text-3)" }}>Balance</div>
        <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>$48.27</div>
      </div>
    </div>
  );
}

function WalletScreen(): React.ReactElement {
  return (
    <div style={{ padding: "10px 16px 0" }}>
      <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 2 }}>Wallet</div>
      <div style={{ fontSize: 10, color: "var(--text-3)" }}>Available balance</div>
      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px", marginBottom: 10 }}>$48.<span style={{ color: "var(--text-3)", fontWeight: 600 }}>27</span></div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <button style={{ flex: 1, height: 30, borderRadius: 10, background: "#fff", color: "#000a17", fontSize: 10, fontWeight: 700, border: "none" }}>Top up</button>
        <button style={{ flex: 1, height: 30, borderRadius: 10, background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 10, fontWeight: 600, border: "1px solid rgba(255,255,255,0.08)" }}>History</button>
      </div>
      {[
        { flag: "🇫🇷", city: "Paris",     amt: "−$14.20", sub: "1.1 GB",  hl: false },
        { flag: "🇮🇹", city: "Rome",      amt: "−$8.44",  sub: "640 MB", hl: false },
        { flag: "+",   city: "Apple Pay", amt: "+$50.00", sub: "+3% Miles", hl: true },
      ].map((r) => (
        <div key={r.city} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
          <span style={{ width: 24, height: 24, borderRadius: 7, background: r.hl ? "rgba(62,224,162,0.15)" : "rgba(255,255,255,0.05)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: r.hl ? "var(--mint)" : "#fff" }}>{r.flag}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 11 }}>{r.city}</div>
            <div style={{ fontSize: 9, color: r.hl ? "var(--mint)" : "var(--text-3)" }}>{r.sub}</div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: r.hl ? "var(--mint)" : "#fff" }}>{r.amt}</div>
        </div>
      ))}
    </div>
  );
}

function MilesScreen(): React.ReactElement {
  return (
    <div style={{ padding: "10px 16px 0" }}>
      <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 8 }}>NeoSIM Miles</div>
      <div style={{ padding: 12, borderRadius: 14, background: "linear-gradient(135deg, rgba(0,127,255,0.3), rgba(62,224,162,0.15))", border: "1px solid rgba(0,127,255,0.3)", marginBottom: 10 }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>YOUR TIER</div>
        <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2 }}>Traveler</div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>$50–$149/yr · 5% back</div>
      </div>
      <div style={{ fontSize: 9, color: "var(--text-3)", marginBottom: 4 }}>Progress to Globetrotter</div>
      <div style={{ height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 999, marginBottom: 8, overflow: "hidden" }}>
        <div style={{ width: "62%", height: "100%", background: "linear-gradient(90deg, #007fff, #3ee0a2)", borderRadius: 999 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ fontSize: 9, color: "var(--text-3)" }}>Miles earned</div>
        <div style={{ fontWeight: 800, fontSize: 20, color: "var(--mint)", letterSpacing: "-0.5px" }}>$12.40</div>
      </div>
      <div style={{ fontSize: 9, color: "var(--text-3)", marginTop: 2 }}>Redeemable as free data</div>
    </div>
  );
}

const FEATURES = [
  { icon: <Wifi size={22} />,       t: "Auto-connect",  d: "Land anywhere. We pick the strongest local network in seconds. No manual setup." },
  { icon: <Wallet size={22} />,     t: "One balance",   d: "Top up once. Spend across 150+ countries. Balance never expires." },
  { icon: <Gift size={22} />,       t: "NeoSIM Miles",  d: "3% Miles back on every GB. Redeem as free data on your next trip." },
  { icon: <Users size={22} />,      t: "Family Wallet", d: "Share one balance across 6 devices. Set per-person daily limits." },
  { icon: <Shield size={22} />,     t: "Privacy-first", d: "No ad profiles. No data sales. Connection logs deleted after 90 days." },
  { icon: <Zap size={22} />,        t: "Smart alerts",  d: "Push at 50%, 80%, 100% balance. Daily cap when you want it." },
] as const;

const STEPS = [
  { n: "01", t: "Download the app",  s: "Search NeoSIM on App Store or Google Play. Free." },
  { n: "02", t: "Get your free eSIM", s: "Tap Install eSIM inside the app. Scan QR or install with one tap. $2.50 welcome bonus activates on first connection." },
  { n: "03", t: "Land & connect",    s: "Touch down anywhere in 150+ countries. NeoSIM auto-connects. You're online in seconds." },
] as const;

export default function AppDownloadPage(): React.ReactElement {
  return (
    <>
      {/* hero */}
      <section style={{ position: "relative", minHeight: 680, paddingTop: 140, paddingBottom: 100, display: "flex", alignItems: "center", overflow: "hidden", background: "#00040c" }}>
        <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.6) 0%, rgba(0,6,15,0.35) 50%, rgba(0,10,23,0.7) 85%, var(--bg-deep) 100%)" }} aria-hidden />
        <div className="aurora" style={{ zIndex: 2, opacity: 0.55 }} aria-hidden />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 200, background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2 }} aria-hidden />

        <div className="container" style={{ position: "relative", zIndex: 3, textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 18, letterSpacing: "0.12em" }}>NEOSIM APP</p>
          <h1 className="ty-display" style={{ margin: "0 0 24px", lineHeight: 1.08 }}>
            Your global eSIM.<br />
            <span className="gradient-text">In your pocket.</span>
          </h1>
          <p className="lead" style={{ marginBottom: 36, maxWidth: 540, margin: "0 auto 36px" }}>
            Auto-connect in 150+ countries. Live balance. Miles rewards. All in one app. Free to download.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
            <a href="#" style={{ height: 52, padding: "0 24px", borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <Apple size={18} /> Download on App Store
            </a>
            <a href="#" style={{ height: 52, padding: "0 24px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <Smartphone size={18} /> Get it on Google Play
            </a>
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 20 }}>
            iOS 16+ · Android 10+ · Free · No subscription
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: 16 }}>⭐</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>4.9</span>
            <span style={{ color: "var(--text-3)", fontSize: 13 }}>· 12k reviews</span>
          </div>
        </div>
      </section>

      {/* phone screenshots */}
      <section style={{ padding: "80px 0", background: "#00060f", position: "relative", overflow: "hidden" }}>
        <div className="aurora" style={{ opacity: 0.4 }} aria-hidden />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16, letterSpacing: "0.12em" }}>THE APP</p>
          <h2 className="ty-2" style={{ margin: "0 auto 56px", maxWidth: 600 }}>
            Everything you need.<br /><span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 56 }}>
            <div style={{ opacity: 0.85, marginTop: 40 }}><PhoneMock screen={<HomeScreen />} scale={0.85} rotate={-8} glowColor="rgba(0,127,255,0.3)" /></div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -60, borderRadius: "50%", background: "radial-gradient(circle, rgba(62,224,162,0.25), transparent 60%)", filter: "blur(30px)", pointerEvents: "none" }} />
              <PhoneMock screen={<WalletScreen />} scale={1} rotate={0} glowColor="rgba(62,224,162,0.45)" />
            </div>
            <div style={{ opacity: 0.85, marginTop: 40 }}><PhoneMock screen={<MilesScreen />} scale={0.85} rotate={8} glowColor="rgba(160,100,255,0.3)" /></div>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[{ e: "🌍", t: "150+ Countries" }, { e: "⚡", t: "Live balance" }, { e: "🎁", t: "Miles rewards" }, { e: "🔒", t: "Privacy-first" }].map((p) => (
              <div key={p.t} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 14, fontWeight: 600 }}>
                <span>{p.e}</span> {p.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* features grid */}
      <section style={{ padding: "80px 0", background: "#000a17", position: "relative" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16, letterSpacing: "0.12em" }}>FEATURES</p>
          <h2 className="ty-2" style={{ margin: "0 0 56px", maxWidth: 640 }}>
            Built for travelers.<br /><span className="gradient-text">Designed for simplicity.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {FEATURES.map((f) => (
              <div key={f.t} className="glass" style={{ padding: 28 }}>
                <span className="icon-chip" style={{ marginBottom: 20 }}>{f.icon}</span>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{f.t}</div>
                <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how to install */}
      <section style={{ padding: "80px 0", background: "#00060f", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16, letterSpacing: "0.12em" }}>INSTALLATION</p>
          <h2 className="ty-2" style={{ margin: "0 0 56px" }}>
            3 minutes. <span className="gradient-text">Once. Forever.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "#007fff", letterSpacing: "-1px", lineHeight: 1, flexShrink: 0, width: 48 }}>{s.n}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{s.t}</div>
                    <div style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.6 }}>{s.s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-strong" style={{ padding: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: -40, background: "radial-gradient(circle at 60% 40%, rgba(0,127,255,0.2), transparent 60%)", pointerEvents: "none" }} />
              <div style={{ background: "#fff", padding: 16, borderRadius: 16, boxShadow: "0 20px 60px rgba(0,127,255,0.3)", position: "relative" }}>
                <div style={{ width: 160, height: 160, display: "grid", gridTemplateColumns: "repeat(13,1fr)", gap: 2 }}>
                  {Array.from({ length: 169 }, (_, i) => {
                    const r = Math.floor(i / 13), c = i % 13;
                    const anchor = (r < 3 && c < 3) || (r < 3 && c > 9) || (r > 9 && c < 3);
                    return <span key={i} style={{ background: anchor ? "#000" : (i % 2 === 0 ? "#000" : "#fff"), borderRadius: 1 }} />;
                  })}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 999, background: "rgba(62,224,162,0.12)", border: "1px solid rgba(62,224,162,0.3)" }}>
                  <Check size={16} style={{ color: "var(--mint)" }} strokeWidth={2.5} />
                  <span style={{ fontWeight: 700, fontSize: 14, color: "var(--mint)" }}>eSIM installed successfully</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 12 }}>Scan with your iPhone or Android camera</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* device compatibility */}
      <section style={{ padding: "80px 0", background: "#000a17", position: "relative" }}>
        <div className="container">
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16, letterSpacing: "0.12em" }}>COMPATIBILITY</p>
          <h2 className="ty-2" style={{ margin: "0 0 12px" }}>Works on your phone.</h2>
          <p style={{ fontSize: 15, color: "var(--text-2)", marginBottom: 40, maxWidth: 540, lineHeight: 1.6 }}>
            NeoSIM requires eSIM support. Compatible with most flagships released after 2018.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, maxWidth: 720, marginBottom: 28 }}>
            {[
              { icon: <Apple size={28} />, title: "iPhone", items: ["iPhone XS and newer", "All iPhone 12 / 13 / 14 / 15 / 16 series", "iPad Pro (M1+)"] },
              { icon: <Smartphone size={26} />, title: "Android", items: ["Google Pixel 4 and newer", "Samsung Galaxy S20 and newer", "Most 2019+ flagships"] },
            ].map((c) => (
              <div key={c.title} className="glass" style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <span className="icon-chip" style={{ width: 48, height: 48, borderRadius: 14 }}>{c.icon}</span>
                  <div style={{ fontWeight: 700, fontSize: 20 }}>{c.title}</div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-2)" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: "#007fff", flexShrink: 0 }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mono" style={{ fontSize: 13, color: "var(--text-3)" }}>
            Not sure about your device?{" "}
            <Link href={ROUTES.faq} style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Check full compatibility list →</Link>
          </p>
        </div>
      </section>

      {/* download CTA */}
      <section style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <div className="aurora" style={{ opacity: 0.6 }} aria-hidden />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <div className="glass-strong" style={{ padding: "64px 56px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(0,127,255,0.18), rgba(0,127,255,0.04))", border: "1px solid rgba(0,127,255,0.3)" }}>
            <div style={{ position: "absolute", right: -120, top: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,127,255,0.4), transparent 60%)", filter: "blur(60px)", pointerEvents: "none" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center", position: "relative" }}>
              <div>
                <h2 className="ty-2" style={{ margin: "0 0 16px" }}>
                  Ready to travel smarter?<br />
                  <span className="gradient-text">Download NeoSIM free.</span>
                </h2>
                <p className="lead" style={{ marginBottom: 20, maxWidth: 480 }}>
                  No subscription. No packages. Pay only for the GB you use. <span style={{ color: "var(--mint)" }}>$2.50 welcome bonus</span> on first connection.
                </p>
                <p className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
                  150+ countries · Auto-connect · Miles rewards · Privacy-first
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#" style={{ height: 56, borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none" }}>
                  <Apple size={18} /> Download on App Store
                </a>
                <a href="#" style={{ height: 56, borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none" }}>
                  <Smartphone size={18} /> Get it on Google Play
                </a>
                <div style={{ textAlign: "center", paddingTop: 8 }}>
                  <div style={{ display: "inline-block", background: "#fff", padding: 10, borderRadius: 12, marginBottom: 8 }}>
                    <div style={{ width: 80, height: 80, display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 1 }}>
                      {Array.from({ length: 64 }, (_, i) => {
                        const r = Math.floor(i / 8), c = i % 8;
                        const anchor = (r < 3 && c < 3) || (r < 3 && c > 4) || (r > 4 && c < 3);
                        return <span key={i} style={{ background: anchor ? "#000" : (i % 3 === 0 ? "#000" : "#fff") }} />;
                      })}
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-3)" }}>Scan to download</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBlock />
    </>
  );
}
