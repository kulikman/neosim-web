import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NeoSIM support — available 24/7 via live chat or email.",
};

export default function ContactPage(): React.ReactElement {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 100, position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
      <div className="container" style={{ position: "relative", maxWidth: 760 }}>
        <Link
          href={ROUTES.home}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
        <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>Support</p>
        <h1 className="h-1" style={{ margin: 0, marginBottom: 16 }}>
          We&apos;re here<br />
          <span className="gradient-text">24 / 7.</span>
        </h1>
        <p className="lead" style={{ marginBottom: 48, maxWidth: 560 }}>
          Typical response time is under 2 minutes via live chat, or within 4 hours by email.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          <div className="glass-strong" style={{ padding: "32px 28px" }}>
            <span className="icon-chip" style={{ marginBottom: 20, display: "inline-flex" }}>
              <MessageCircle className="size-5" />
            </span>
            <h2 className="h-3" style={{ marginBottom: 8 }}>Live chat</h2>
            <p className="body-sm" style={{ marginBottom: 20, color: "var(--text-3)" }}>
              Open the app or click the chat button on any page. Available around the clock.
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(62,224,162,0.12)",
                border: "1px solid rgba(62,224,162,0.3)",
                color: "var(--mint)",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--mint)", display: "inline-block" }} />
              Online now
            </span>
          </div>

          <div className="glass-strong" style={{ padding: "32px 28px" }}>
            <span className="icon-chip" style={{ marginBottom: 20, display: "inline-flex" }}>
              <Mail className="size-5" />
            </span>
            <h2 className="h-3" style={{ marginBottom: 8 }}>Email</h2>
            <p className="body-sm" style={{ marginBottom: 20, color: "var(--text-3)" }}>
              For account issues, billing questions, and detailed technical support.
            </p>
            <a
              href="mailto:support@neosim.com"
              style={{ color: "var(--accent-light)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
            >
              support@neosim.com →
            </a>
          </div>
        </div>

        <div style={{ padding: 24, borderRadius: 14, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", fontSize: 13, color: "var(--text-3)" }}>
          Before contacting support, check the{" "}
          <Link href={ROUTES.faq} style={{ color: "var(--accent-light)", textDecoration: "none" }}>
            FAQ
          </Link>
          {" "}— most questions are answered there instantly.
        </div>
      </div>
    </section>
  );
}
