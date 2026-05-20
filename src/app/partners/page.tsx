"use client";

import { useState } from "react";
import { ArrowRight, Globe, Zap, Wallet } from "lucide-react";

import { TrustBlock } from "@/components/sections/trust-block";

type CodeTab = "iframe" | "js" | "api" | "link";

const SNIPPETS: Record<CodeTab, string> = {
  iframe: `<!-- Drop anywhere in your HTML -->
<iframe
  src="https://widget.neosim.com/embed
    ?partner=YOUR_ID
    &theme=dark
    &lang=en"
  width="100%"
  height="640"
  style="border:0; border-radius:24px;"
  allow="payment">
</iframe>`,
  js: `<script src="https://cdn.neosim.com/widget.js" async></script>

<div id="neosim-widget"></div>

<script>
  NeoSIM.mount('#neosim-widget', {
    partnerId: 'YOUR_ID',
    theme:     'dark',
    countries: ['JP','TH','US'],
    onPurchase(esim) {
      // gtag, segment, etc.
    }
  });
</script>`,
  api: `curl https://api.neosim.com/v1/esims \\
  -H "Authorization: Bearer sk_live_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "country":    "JP",
    "data_mb":    1024,
    "customer":   { "email": "alice@example.com" },
    "partner_ref":"trip-789"
  }'

# Returns
{
  "id": "esim_01H...",
  "qr_code": "https://...",
  "activation_code": "LPA:1$...",
  "partner_commission_usd": 4.50
}`,
  link: `https://neosim.com/?ref=YOUR_ID

# With country pre-selected
https://neosim.com/jp?ref=YOUR_ID

# With UTM tracking
https://neosim.com/?ref=YOUR_ID
  &utm_campaign=summer_blog
  &utm_source=instagram`,
};

const FILE_LABELS: Record<CodeTab, string> = {
  iframe: "index.html",
  js: "app.js",
  api: "POST /v1/esims",
  link: "partner.url",
};

const INTEGRATION_TYPES = [
  {
    icon: <Globe size={20} />,
    t: "Embeddable widget",
    s: "iFrame or JS snippet. Drops into any website or web-app. Theme it to your brand.",
    tag: "No-code",
  },
  {
    icon: <Zap size={20} />,
    t: "REST API",
    s: "Full programmatic access — issue eSIMs, top-ups, manage users from your stack.",
    tag: "Devs",
  },
  {
    icon: <Wallet size={20} />,
    t: "Affiliate links",
    s: "Just want a referral link? Get a tracked URL with your share code in 30 seconds.",
    tag: "Easiest",
  },
] as const;

export default function PartnersPage(): React.ReactElement {
  const [tab, setTab] = useState<CodeTab>("iframe");
  const [traffic, setTraffic] = useState(50000);
  const [conv, setConv] = useState(2.4);

  const orders = Math.round(traffic * (conv / 100));
  const revenue = Math.round(orders * 18 * 0.25);

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
                NeoSIM partner program
              </p>
              <h1 className="ty-display" style={{ margin: 0, marginBottom: 20, maxWidth: 560 }}>
                Sell eSIMs on your site.
                <br />
                <span className="gradient-text">No store, no SDK.</span>
              </h1>
              <p className="lead" style={{ marginBottom: 32, maxWidth: 540 }}>
                Embed our checkout widget in 60 seconds. Travel blogs, booking platforms, airline
                apps, OTA sites — turn your traffic into recurring revenue with one line of code.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <a
                  href="#apply"
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
                  Become a partner <ArrowRight size={16} />
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
                  Estimate revenue
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
                {[
                  "✓ 25% revenue share",
                  "✓ 5-min approval",
                  "✓ Net-30 payouts",
                  "✓ White-label option",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* widget preview */}
            <div className="glass-strong" style={{ padding: 28 }}>
              <p
                className="caption"
                style={{
                  color: "#66b7ff",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: "var(--mint)",
                    boxShadow: "0 0 8px var(--mint)",
                  }}
                />
                Live widget · embed preview
              </p>
              <div
                style={{
                  borderRadius: 14,
                  padding: 20,
                  background: "linear-gradient(180deg, rgba(0,127,255,0.12), rgba(0,127,255,0.02))",
                  border: "1px solid rgba(0,127,255,0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: "linear-gradient(135deg,#007FFF,#1a90ff)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Globe size={12} strokeWidth={2.5} color="#fff" />
                  </span>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>NeoSIM checkout</div>
                  <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--text-3)" }}>
                    by partner
                  </span>
                </div>
                <div style={{ marginBottom: 10, fontSize: 12, color: "var(--text-3)" }}>
                  Destination
                </div>
                <div className="field" style={{ marginBottom: 12, padding: 12 }}>
                  <span style={{ fontSize: 18 }}>🇯🇵</span>
                  <div style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>Japan</div>
                  <span style={{ fontSize: 11, color: "var(--text-3)" }}>$0.024 / MB</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderTop: "1px dashed rgba(255,255,255,0.08)",
                    borderBottom: "1px dashed rgba(255,255,255,0.08)",
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 11, color: "var(--text-3)" }}>Starter pack · 1 GB</div>
                    <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.5px" }}>
                      $24.00
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "var(--mint)" }}>Your share</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--mint)" }}>
                      +$6.00
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    width: "100%",
                    height: 44,
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
                    gap: 6,
                  }}
                >
                  Get eSIM <ArrowRight size={14} />
                </button>
              </div>
              <p
                style={{ marginTop: 12, fontSize: 11, color: "var(--text-3)", textAlign: "center" }}
              >
                Renders inline · responsive · Apple/Google Pay built-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* integration types */}
      <section style={{ padding: "40px 0 60px" }}>
        <div className="container">
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 12 }}>
            What you get
          </p>
          <h2 className="ty-2" style={{ margin: 0, marginBottom: 8 }}>
            Three ways to plug in.
          </h2>
          <p className="body-sm" style={{ marginBottom: 40, maxWidth: 600 }}>
            Pick the one that matches your team — or combine all three.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {INTEGRATION_TYPES.map((f) => (
              <div key={f.t} className="glass" style={{ padding: 28 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 18,
                  }}
                >
                  <span className="icon-chip">{f.icon}</span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--text-3)",
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <h3 className="ty-4" style={{ margin: 0, marginBottom: 10 }}>
                  {f.t}
                </h3>
                <p className="body-sm" style={{ margin: 0 }}>
                  {f.s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* code snippets */}
      <section style={{ padding: "60px 0", position: "relative" }}>
        <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 12 }}>
            Integrate in 60 seconds
          </p>
          <h2 className="ty-2" style={{ margin: 0, marginBottom: 8 }}>
            One snippet. Live in minutes.
          </h2>
          <p className="body-sm" style={{ marginBottom: 28, maxWidth: 600 }}>
            Pick your integration style — copy, paste, ship.
          </p>

          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {(["iframe", "js", "api", "link"] as CodeTab[]).map((id) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  background: tab === id ? "rgba(0,127,255,0.15)" : "rgba(255,255,255,0.04)",
                  border: tab === id ? "1px solid rgba(0,127,255,0.4)" : "1px solid var(--border)",
                  color: tab === id ? "#66b7ff" : "var(--text-2)",
                }}
              >
                {id === "js"
                  ? "JS widget"
                  : id === "link"
                    ? "Affiliate link"
                    : id === "api"
                      ? "REST API"
                      : "iframe"}
              </button>
            ))}
          </div>

          <div className="glass" style={{ padding: 0, overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {(["#ff5f57", "#febc2e", "#28c840"] as const).map((c) => (
                  <span
                    key={c}
                    style={{ width: 11, height: 11, borderRadius: 999, background: c }}
                  />
                ))}
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
                {FILE_LABELS[tab]}
              </div>
              <button
                style={{
                  fontSize: 11,
                  color: "var(--text-2)",
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
                onClick={() => navigator.clipboard.writeText(SNIPPETS[tab])}
              >
                Copy
              </button>
            </div>
            <pre
              style={{
                margin: 0,
                padding: 24,
                fontSize: 13,
                lineHeight: 1.7,
                color: "#cfe1ff",
                overflow: "auto",
                minHeight: 280,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {SNIPPETS[tab]}
            </pre>
          </div>
        </div>
      </section>

      {/* revenue calculator */}
      <section id="calc" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="glass-strong" style={{ padding: 48 }}>
            <p className="caption" style={{ color: "#66b7ff", marginBottom: 12 }}>
              Revenue calculator
            </p>
            <h2 className="ty-2" style={{ marginTop: 0, marginBottom: 32 }}>
              How much can you earn?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}
                  >
                    <span style={{ fontSize: 13, color: "var(--text-2)" }}>Monthly visitors</span>
                    <span className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
                      {traffic.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={traffic}
                    onChange={(e) => setTraffic(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#007FFF" }}
                  />
                </div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}
                  >
                    <span style={{ fontSize: 13, color: "var(--text-2)" }}>Conversion rate</span>
                    <span className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
                      {conv}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="8"
                    step="0.1"
                    value={conv}
                    onChange={(e) => setConv(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#007FFF" }}
                  />
                  <p
                    style={{ fontSize: 11, color: "var(--text-3)", marginTop: 8, marginBottom: 0 }}
                  >
                    Travel-niche partners average 2–4%
                  </p>
                </div>
              </div>
              <div
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  paddingLeft: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      margin: 0,
                    }}
                  >
                    Monthly orders
                  </p>
                  <div
                    style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.6px", marginTop: 4 }}
                  >
                    {orders.toLocaleString()}
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      margin: 0,
                    }}
                  >
                    Avg. order value
                  </p>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>$18.00</div>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      margin: 0,
                    }}
                  >
                    Monthly revenue
                  </p>
                  <div
                    style={{
                      fontSize: 44,
                      fontWeight: 800,
                      letterSpacing: "-1px",
                      color: "var(--mint)",
                      marginTop: 4,
                    }}
                  >
                    ${revenue.toLocaleString()}
                  </div>
                  <p
                    style={{ fontSize: 11, color: "var(--text-3)", marginTop: 6, marginBottom: 0 }}
                  >
                    25% rev share · paid monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* apply CTA */}
      <section id="apply" style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div
            className="glass-strong"
            style={{ padding: 48, textAlign: "center", maxWidth: 600, margin: "0 auto" }}
          >
            <h2 className="ty-2" style={{ marginTop: 0, marginBottom: 12 }}>
              Ready to start earning?
            </h2>
            <p className="body" style={{ marginBottom: 32, color: "var(--text-2)" }}>
              Approval takes 5 minutes. First commission paid in 30 days.
            </p>
            <a
              href="mailto:partners@neosim.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 56,
                padding: "0 32px",
                borderRadius: 999,
                background: "#fff",
                color: "#000a17",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Apply now <ArrowRight size={16} />
            </a>
            <p style={{ marginTop: 20, fontSize: 12, color: "var(--text-3)" }}>
              partners@neosim.com · Avg. reply in 2h
            </p>
          </div>
        </div>
      </section>

      <TrustBlock />
    </>
  );
}
