import type { Metadata } from "next";
import Image from "next/image";
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
      <section style={{ position: "relative", minHeight: 480, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>
        <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.45) 0%, rgba(0,6,15,0.25) 50%, rgba(0,10,23,0.65) 85%, var(--bg-deep) 100%)" }} aria-hidden />
        <div className="aurora" style={{ zIndex: 2, opacity: 0.4 }} aria-hidden />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2 }} aria-hidden />
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32, paddingBottom: 80 }}>
          <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 40, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>Blog</p>
          <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 640 }}>
            Travel smarter.<br />
            <span className="gradient-text">Stay connected.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
            Guides, tips, and stories for travelers who never want to be offline.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="container">
          <div className="glass" style={{ padding: "48px 40px", textAlign: "center", maxWidth: 540 }}>
            <p style={{ fontSize: 32, marginBottom: 16 }}>✍️</p>
            <h2 className="ty-3" style={{ marginBottom: 12 }}>Coming soon</h2>
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
