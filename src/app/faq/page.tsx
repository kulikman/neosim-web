import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Faq } from "@/components/sections/faq";
import { TrustBlock } from "@/components/sections/trust-block";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about NeoSIM eSIM — compatibility, top-ups, coverage, and more.",
};

export default function FaqPage(): React.ReactElement {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 0, position: "relative", overflow: "hidden" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <Link
            href={ROUTES.home}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>FAQ</p>
          <h1 className="ty-1" style={{ margin: 0, marginBottom: 16 }}>
            The <span className="gradient-text">small print</span>, made plain.
          </h1>
          <p className="lead" style={{ marginBottom: 0, maxWidth: 560 }}>
            Everything you need to know about NeoSIM — from eSIM installation to data top-ups and refunds.
          </p>
        </div>
      </section>

      <Faq />
      <TrustBlock />
    </>
  );
}
