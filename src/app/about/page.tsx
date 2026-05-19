import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { TrustBlock } from "@/components/sections/trust-block";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "NeoSIM is the world's first fully digital mobile operator for travelers, powered by 2SkyMobile.",
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />
        <div className="container" style={{ position: "relative", maxWidth: 760 }}>
          <Link
            href={ROUTES.home}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>About</p>
          <h1 className="ty-1" style={{ margin: 0, marginBottom: 24 }}>
            Built for travelers.<br />
            <span className="gradient-text">Powered by 2SkyMobile.</span>
          </h1>
          <div className="glass" style={{ padding: "40px 36px", marginBottom: 24 }}>
            <p className="body" style={{ marginBottom: 20 }}>
              NeoSIM is the consumer face of <strong style={{ color: "#fff" }}>2SkyMobile</strong> — a GSMA-certified wholesale carrier with direct IPX peering to 500+ tier-1 networks across 150+ countries.
            </p>
            <p className="body" style={{ marginBottom: 20 }}>
              We built NeoSIM because travelers deserve a better deal. Traditional SIM cards expire, roaming packages waste money, and airport kiosks are a tax on being unprepared. We charge per gigabyte, carry your balance forward, and connect you automatically to the strongest local network.
            </p>
            <p className="body">
              NeoSIM is GDPR compliant, eKYC-ready, and operated from Frankfurt, Germany.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {[
              { v: "150+", l: "Countries covered" },
              { v: "500+", l: "Tier-1 networks" },
              { v: "GSMA", l: "Certified member" },
            ].map(({ v, l }) => (
              <div key={l} className="glass" style={{ padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 6 }}>{v}</div>
                <div className="caption" style={{ color: "var(--text-3)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBlock />
    </>
  );
}
