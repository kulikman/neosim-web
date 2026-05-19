import type { Metadata } from "next";
import Image from "next/image";
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
      <section style={{ position: "relative", minHeight: 480, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>
        <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.45) 0%, rgba(0,6,15,0.25) 50%, rgba(0,10,23,0.65) 85%, var(--bg-deep) 100%)" }} aria-hidden />
        <div className="aurora" style={{ zIndex: 2, opacity: 0.4 }} aria-hidden />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2 }} aria-hidden />
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32, paddingBottom: 80 }}>
          <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 40, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>About</p>
          <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 640 }}>
            Built for travelers.<br />
            <span className="gradient-text">Powered by 2SkyMobile.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
            A GSMA-certified carrier connecting travelers in 150+ countries — no contracts, no expiry.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 100, position: "relative" }}>
        <div className="container" style={{ maxWidth: 760 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
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
