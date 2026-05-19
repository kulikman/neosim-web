import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Destinations } from "@/components/sections/destinations";
import { TrustBlock } from "@/components/sections/trust-block";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Coverage",
  description: "NeoSIM covers 150+ countries and 500+ networks. Find your destination and see the per-GB rate.",
};

export default function CoveragePage(): React.ReactElement {
  return (
    <>
      <section style={{ position: "relative", minHeight: 520, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>
        <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.45) 0%, rgba(0,6,15,0.25) 50%, rgba(0,10,23,0.65) 85%, var(--bg-deep) 100%)" }} aria-hidden />
        <div className="aurora" style={{ zIndex: 2, opacity: 0.4 }} aria-hidden />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2 }} aria-hidden />
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32, paddingBottom: 88 }}>
          <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 40, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div>
              <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>Coverage</p>
              <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 640 }}>
                150+ countries.<br />
                <span className="gradient-text">One rate per GB.</span>
              </h1>
              <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
                Connect to the strongest local network automatically — no manual selection, no hidden fees.
              </p>
            </div>
            <Link
              href={ROUTES.getEsim}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 28px", borderRadius: 999, background: "#fff", color: "#000a17", fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Get free eSIM <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Destinations />
      <TrustBlock />
    </>
  );
}
