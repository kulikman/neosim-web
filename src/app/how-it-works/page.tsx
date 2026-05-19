import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { HowItWorks } from "@/components/sections/how-it-works";
import { TrustBlock } from "@/components/sections/trust-block";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How it works",
  description: "Get a free eSIM in minutes. No SIM cards, no contracts — connect in 150+ countries automatically.",
};

export default function HowItWorksPage(): React.ReactElement {
  return (
    <>
      {/* Page hero */}
      <section style={{ paddingTop: 140, paddingBottom: 0, position: "relative", overflow: "hidden" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <Link
            href={ROUTES.home}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--text-3)", fontSize: 13, marginBottom: 32,
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>How it works</p>
          <h1 className="ty-1" style={{ margin: 0, marginBottom: 16 }}>
            From order to online<br />
            <span className="gradient-text">in under 2 minutes.</span>
          </h1>
          <p className="lead" style={{ marginBottom: 0, maxWidth: 560 }}>
            No SIM cards. No store visits. No roaming contracts. Scan a QR code, connect automatically in 150+ countries, and pay only for data you actually use.
          </p>
        </div>
      </section>

      <HowItWorks hideHeader />
      <TrustBlock />
    </>
  );
}
