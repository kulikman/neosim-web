import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NeoSIM terms of service — plain-English summary of your rights and responsibilities.",
};

const SECTIONS = [
  {
    t: "Service description",
    short: "NeoSIM provides pay-as-you-go eSIM data. No voice, no SMS.",
    long: "NeoSIM offers data-only eSIM connectivity for mobile devices in 150+ countries. The service does not include voice calls or SMS. Coverage and speeds depend on the local network operator and cannot be guaranteed.",
  },
  {
    t: "Account & balance",
    short: "Minimum $5 top-up. Balance never expires. Refundable unused balance.",
    long: "A minimum top-up of $5 is required to activate data. Your balance is held in your NeoSIM Wallet and is never subject to expiry. Upon account closure, any unused balance above $1 will be refunded to the original payment method within 14 business days.",
  },
  {
    t: "Fair use",
    short: "No throttling for normal use. Daily cap optional, set by you.",
    long: "NeoSIM does not apply traffic management policies for normal personal use. You may set a voluntary daily spend cap in the app settings. If a cap is reached, data speed is reduced to 64 kbps (sufficient for messaging) until midnight UTC.",
  },
  {
    t: "Prohibited uses",
    short: "No machine-to-machine, no tethering for commercial resale, no illegal activity.",
    long: "The eSIM may not be used in IoT/M2M devices, as a fixed broadband substitute, or for commercial resale of connectivity. Any use that violates applicable law or the terms of the underlying carrier is prohibited and may result in immediate suspension.",
  },
  {
    t: "Limitation of liability",
    short: "We are not liable for losses due to network outages or coverage gaps.",
    long: "NeoSIM's liability is limited to the balance held in your account at the time of any incident. We are not liable for consequential or indirect damages arising from loss of connectivity, including but not limited to missed flights, business losses, or data loss.",
  },
] as const;

export default function TermsPage(): React.ReactElement {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 100, position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container" style={{ position: "relative", maxWidth: 760 }}>
        <Link
          href={ROUTES.home}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
        <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>Legal</p>
        <h1 className="h-1" style={{ margin: 0, marginBottom: 16 }}>Terms of Service</h1>
        <p className="lead" style={{ marginBottom: 48, maxWidth: 640 }}>
          Last updated January 2026. Plain-English summary at the top of each section.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
          {SECTIONS.map((s, i) => (
            <div key={s.t} className="glass" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 16 }}>
                <div className="mono" style={{ minWidth: 40, color: "var(--text-3)", paddingTop: 2 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 className="h-4" style={{ margin: 0, marginBottom: 12 }}>{s.t}</h2>
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
        </div>
      </div>
    </section>
  );
}
