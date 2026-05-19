import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { TrustBlock } from "@/components/sections/trust-block";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Travel tips, eSIM guides, and connectivity news from the NeoSIM team.",
};

export default function BlogPage(): React.ReactElement {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 100, position: "relative", overflow: "hidden", minHeight: "70vh" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <Link
            href={ROUTES.home}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>Blog</p>
          <h1 className="h-1" style={{ margin: 0, marginBottom: 16 }}>
            Travel smarter.<br />
            <span className="gradient-text">Stay connected.</span>
          </h1>
          <p className="lead" style={{ marginBottom: 48, maxWidth: 560 }}>
            Guides, tips, and stories for travelers who never want to be offline.
          </p>

          <div
            className="glass"
            style={{ padding: "48px 40px", textAlign: "center", maxWidth: 540 }}
          >
            <p style={{ fontSize: 32, marginBottom: 16 }}>✍️</p>
            <h2 className="h-3" style={{ marginBottom: 12 }}>Coming soon</h2>
            <p className="body" style={{ color: "var(--text-3)" }}>
              Our first articles are in the works. Subscribe to get notified when we publish.
            </p>
          </div>
        </div>
      </section>
      <TrustBlock />
    </>
  );
}
