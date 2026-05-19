import Link from "next/link";
import { ArrowRight, Globe, QrCode } from "lucide-react";

import { ROUTES } from "@/lib/constants";

const SOCIAL = ["X", "in", "Ig", "Tg"] as const;

const FOOTER_COLS = [
  {
    t: "Product",
    l: [
      ["Coverage", ROUTES.coverage],
      ["How it works", ROUTES.howItWorks],
      ["Loyalty", ROUTES.home],
      ["Referral", ROUTES.home],
      ["Family Wallet", ROUTES.home],
      ["Get free eSIM", ROUTES.getEsim],
      ["Top up", ROUTES.topup],
    ],
  },
  {
    t: "Company",
    l: [
      ["About", ROUTES.about],
      ["Privacy Manifesto", ROUTES.privacy],
      ["Press", ROUTES.contact],
      ["Careers", ROUTES.home],
      ["Contact", ROUTES.contact],
    ],
  },
  {
    t: "Support",
    l: [
      ["FAQ", ROUTES.faq],
      ["eSIM compatibility", ROUTES.faq],
      ["Network status", ROUTES.home],
      ["Terms", ROUTES.terms],
      ["Privacy Policy", ROUTES.privacy],
    ],
  },
] as const;

/** Site footer — mega CTA block + 4-col grid + copyright. */
export function Footer(): React.ReactElement {
  return (
    <footer style={{ position: "relative", overflow: "hidden", paddingTop: 100, paddingBottom: 32 }}>
      <div className="aurora" style={{ opacity: 0.6 }} />
      <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      <div className="container" style={{ position: "relative" }}>

        {/* Mega CTA */}
        <div
          className="glass-strong"
          style={{
            padding: "52px 44px",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, rgba(0,127,255,0.18), rgba(0,127,255,0.04))",
            border: "1px solid rgba(0,127,255,0.3)",
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              right: -100,
              top: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,127,255,0.4), transparent 60%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="cta-grid"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <h2 className="h-1" style={{ margin: 0, marginBottom: 16 }}>
                Your next trip<br />
                <span className="gradient-text">starts on NeoSIM</span>
              </h2>
              <p className="lead" style={{ maxWidth: 540 }}>
                Free eSIM. Free delivery. Pay only for the gigabytes you use, in 150+ countries.{" "}
                <span style={{ color: "var(--mint)" }}>+ $2.50 welcome bonus on first connection.</span>
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href={ROUTES.getEsim}
                className="btn btn-primary"
                style={{ height: 52, fontSize: 15 }}
              >
                Get my free eSIM <ArrowRight size={16} />
              </Link>
              <Link
                href={ROUTES.coverage}
                className="btn btn-ghost"
                style={{ height: 52, fontSize: 15 }}
              >
                <QrCode size={16} /> See coverage map
              </Link>
            </div>
          </div>
        </div>

        {/* 4-col footer grid */}
        <div
          className="footer-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 40,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 800,
                fontSize: 19,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #007FFF, #1a90ff)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Globe size={18} strokeWidth={2.2} />
              </span>
              NeoSIM
            </div>
            <p className="body-sm" style={{ maxWidth: 320, marginBottom: 20 }}>
              The world&apos;s first fully digital mobile operator for travelers. Powered by 2SkyMobile wholesale infrastructure.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIAL.map((s) => (
                <button
                  key={s}
                  className="btn-icon"
                  style={{ width: 36, height: 36, fontSize: 11, fontWeight: 600, borderRadius: 999 }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.t}>
              <div className="caption" style={{ color: "var(--text-3)", marginBottom: 16 }}>{col.t}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map(([txt, url]) => (
                  <li key={txt}>
                    <Link href={url} style={{ color: "var(--text-2)", fontSize: 14, textDecoration: "none" }}>
                      {txt}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: "48px 0 20px" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 12,
            color: "var(--text-3)",
          }}
        >
          <span>© 2026 NeoSIM</span>
          <span>Made for travelers · Built by 2SkyMobile</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
