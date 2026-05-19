import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      {/* Hero — Earth background, matches homepage */}
      <section style={{ position: "relative", minHeight: 620, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>

        <Image
          src="/assets/earth.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }}
          sizes="100vw"
          aria-hidden
        />

        <div
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(180deg, rgba(0,6,15,0.45) 0%, rgba(0,6,15,0.25) 50%, rgba(0,10,23,0.65) 85%, var(--bg-deep) 100%)",
          }}
          aria-hidden
        />

        <div className="aurora" style={{ zIndex: 2, opacity: 0.4 }} aria-hidden />

        <div
          style={{
            position: "absolute", left: 0, right: 0, bottom: 0, height: 200,
            background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2,
          }}
          aria-hidden
        />

        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32, paddingBottom: 88 }}>

          <Link
            href={ROUTES.home}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 40,
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div>
              <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>How it works</p>
              <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 700 }}>
                From order to online<br />
                <span className="gradient-text">in under 2 minutes.</span>
              </h1>
              <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
                No SIM swap, no waiting at airport kiosks, no roaming surprises.<br />
                Four steps, then you forget it exists.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", paddingBottom: 2 }}>
              <Link
                href={ROUTES.getEsim}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  height: 52, padding: "0 28px", borderRadius: 999,
                  background: "#fff", color: "#000a17",
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Get free eSIM <ArrowRight size={16} />
              </Link>
              <Link
                href={ROUTES.coverage}
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.75)",
                  textDecoration: "underline", textUnderlineOffset: 3,
                  textDecorationColor: "rgba(255,255,255,0.3)",
                  paddingLeft: 4,
                }}
              >
                Browse coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks hideHeader />
      <TrustBlock />
    </>
  );
}
