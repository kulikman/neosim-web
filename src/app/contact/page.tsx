import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NeoSIM support — available 24/7 via live chat or email.",
};

export default function ContactPage(): React.ReactElement {
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
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>Support</p>
          <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 640 }}>
            We&apos;re here<br />
            <span className="gradient-text">24 / 7.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
            Typical response time is under 2 minutes via live chat, or within 4 hours by email.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
            <div className="glass-strong" style={{ padding: "32px 28px" }}>
              <span className="icon-chip" style={{ marginBottom: 20, display: "inline-flex" }}>
                <MessageCircle className="size-5" />
              </span>
              <h2 className="ty-3" style={{ marginBottom: 8 }}>Live chat</h2>
              <p className="body-sm" style={{ marginBottom: 20, color: "var(--text-3)" }}>
                Open the app or click the chat button on any page. Available around the clock.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(62,224,162,0.12)", border: "1px solid rgba(62,224,162,0.3)", color: "var(--mint)", padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--mint)", display: "inline-block" }} />
                Online now
              </span>
            </div>
            <div className="glass-strong" style={{ padding: "32px 28px" }}>
              <span className="icon-chip" style={{ marginBottom: 20, display: "inline-flex" }}>
                <Mail className="size-5" />
              </span>
              <h2 className="ty-3" style={{ marginBottom: 8 }}>Email</h2>
              <p className="body-sm" style={{ marginBottom: 20, color: "var(--text-3)" }}>
                For account issues, billing questions, and detailed technical support.
              </p>
              <a href="mailto:support@neosim.com" style={{ color: "var(--accent-light)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                support@neosim.com →
              </a>
            </div>
          </div>
          <div style={{ padding: 24, borderRadius: 14, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", fontSize: 13, color: "var(--text-3)" }}>
            Before contacting support, check the{" "}
            <Link href={ROUTES.faq} style={{ color: "var(--accent-light)", textDecoration: "none" }}>FAQ</Link>
            {" "}— most questions are answered there instantly.
          </div>
        </div>
      </section>
    </>
  );
}
