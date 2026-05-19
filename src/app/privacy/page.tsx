import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NeoSIM privacy policy — plain-English summary of how we handle your data.",
};

const SECTIONS = [
  {
    t: "What we collect",
    short: "Only what's needed to deliver the service: email, device ID, usage data.",
    long: "We collect your email address for account management, your device eSIM identifier (EID) to provision the SIM, and anonymous usage data (bytes sent/received, country of connection) for billing and network optimisation. We do not collect your browsing history, location in real time, or contact list.",
  },
  {
    t: "How we use your data",
    short: "Billing, support, and improving the service. Never sold to third parties.",
    long: "Your data is used to calculate your balance, display usage history in the app, provide customer support, and improve network routing. We do not sell, rent, or trade personal data to third parties for marketing purposes.",
  },
  {
    t: "Data storage & security",
    short: "Servers in Frankfurt, Germany. Encrypted at rest and in transit.",
    long: "All data is stored on EU-based servers (Frankfurt, Germany) operated by certified data centres. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). Access is restricted to authorised personnel with MFA enforced.",
  },
  {
    t: "Your rights under GDPR",
    short: "Access, correct, export, or delete your data at any time.",
    long: "As an EU/UK resident you have the right to access, rectify, erase, restrict, or port your personal data. You may object to processing and withdraw consent at any time. Submit requests to privacy@neosim.com — we respond within 30 days.",
  },
  {
    t: "Cookies",
    short: "Essential cookies only. No tracking or advertising cookies.",
    long: "We use only technically necessary cookies for session management and security (CSRF). We do not use advertising, analytics tracking, or third-party retargeting cookies. No cookie consent banner is required as we use no non-essential cookies.",
  },
] as const;

export default function PrivacyPage(): React.ReactElement {
  return (
    <>
      <section style={{ position: "relative", minHeight: 440, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>
        <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.45) 0%, rgba(0,6,15,0.25) 50%, rgba(0,10,23,0.65) 85%, var(--bg-deep) 100%)" }} aria-hidden />
        <div className="aurora" style={{ zIndex: 2, opacity: 0.4 }} aria-hidden />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2 }} aria-hidden />
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32, paddingBottom: 80 }}>
          <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 40, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>Legal</p>
          <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 640 }}>
            Privacy Policy
          </h1>
          <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
            Last updated January 2026. Plain-English summary at the top of each section.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {SECTIONS.map((s, i) => (
              <div key={s.t} className="glass" style={{ padding: 28 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <div className="mono" style={{ minWidth: 40, color: "var(--text-3)", paddingTop: 2 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 className="ty-4" style={{ margin: 0, marginBottom: 12 }}>{s.t}</h2>
                    <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(0,127,255,0.08)", border: "1px solid rgba(0,127,255,0.2)", marginBottom: 12 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#66b7ff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Plain-English</span>
                      <p style={{ fontSize: 14, color: "var(--text-2)", margin: "4px 0 0" }}>{s.short}</p>
                    </div>
                    <p className="body-sm" style={{ margin: 0 }}>{s.long}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 24, borderRadius: 14, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", fontSize: 13, color: "var(--text-3)" }}>
            Questions? Email{" "}
            <a href="mailto:legal@neosim.com" style={{ color: "var(--accent-light)" }}>legal@neosim.com</a>.
            {" "}We respond within 30 days under GDPR Article 12.
          </div>
        </div>
      </section>
    </>
  );
}
