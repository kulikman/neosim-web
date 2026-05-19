import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Signal, Compass, Sparkles, Check } from "lucide-react";
import type { Metadata } from "next";

import { ROUTES } from "@/lib/constants";
import { COUNTRIES, getCountrySeg } from "@/lib/countries-data";
import { TrustBlock } from "@/components/sections/trust-block";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams(): Promise<{ country: string }[]> {
  return COUNTRIES.map((c) => ({ country: c.code.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const country = COUNTRIES.find((c) => c.code.toLowerCase() === slug.toLowerCase());
  if (!country) return {};
  return {
    title: `eSIM for ${country.name}`,
    description: `$${(country.price * 1024).toFixed(2)}/GB on ${country.networks}. Free eSIM, instant activation, no roaming surprises.`,
  };
}

export default async function CountryPage({ params }: Props): Promise<React.ReactElement> {
  const { country: slug } = await params;
  const country = COUNTRIES.find((c) => c.code.toLowerCase() === slug.toLowerCase());
  if (!country) notFound();

  const seg = getCountrySeg(country.code, country);
  const gbPrice = (country.price * 1024).toFixed(2);
  const dayCost = (country.price * 200).toFixed(2);
  const weekCost = (country.price * 200 * 7).toFixed(2);
  const is5g = country.tech.includes("5G");

  return (
    <>
      {/* hero */}
      <section style={{ padding: "140px 0 60px", position: "relative" }}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="aurora" style={{ opacity: 0.4 }} aria-hidden />
        <div className="container" style={{ position: "relative" }}>
          <Link href={ROUTES.coverage} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 24, textDecoration: "none" }}>
            <ArrowLeft size={14} /> All countries
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 999, background: "rgba(0,127,255,0.12)", border: "1px solid rgba(0,127,255,0.3)", marginBottom: 24 }}>
                <span style={{ fontSize: 18 }}>{country.flag}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Coverage · {country.name}</span>
              </div>
              <h1 className="ty-1" style={{ margin: "0 0 18px" }}>
                eSIM for <span className="gradient-text">{seg.trip}</span><br />
                — pay {is5g ? "5G prices" : "4G prices"} for tier-1 service.
              </h1>
              <p className="lead" style={{ marginBottom: 32, maxWidth: 540 }}>
                ${gbPrice}/GB on {country.networks}. Free eSIM, free signup, $5 minimum top-up.{" "}
                <span style={{ color: "var(--mint)" }}>+ $2.50 welcome bonus.</span>
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                <Link href={ROUTES.getEsim} style={{ height: 56, padding: "0 24px", borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                  Get my {country.name} eSIM <ArrowRight size={16} />
                </Link>
                <Link href={ROUTES.coverage} style={{ height: 56, padding: "0 24px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
                  See all 150+ countries
                </Link>
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: 13, color: "var(--text-2)" }}>
                <span>✓ Native carrier · no roaming surcharge</span>
                <span>✓ Hotspot included</span>
                <span>✓ Balance never expires</span>
              </div>
            </div>

            {/* rate card */}
            <div className="glass-strong" style={{ padding: 32 }}>
              <p className="caption" style={{ color: "#66b7ff", marginBottom: 16 }}>Live rates · {country.name}</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 28 }}>
                <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-2px" }}>${gbPrice}</span>
                <span style={{ fontSize: 14, color: "var(--text-3)", paddingBottom: 12 }}>/ GB</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { l: "A typical day (≈200 MB)", v: `$${dayCost}` },
                  { l: "A week of travel",        v: `$${weekCost}` },
                  { l: "Heavy use (1 GB)",        v: `$${gbPrice}` },
                ].map((r) => (
                  <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: 13, color: "var(--text-2)" }}>{r.l}</span>
                    <span className="mono" style={{ color: "#fff" }}>{r.v}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: 14, borderRadius: 12, background: "rgba(62,224,162,0.08)", border: "1px solid rgba(62,224,162,0.25)", fontSize: 13, color: "var(--text-2)" }}>
                <span style={{ color: "var(--mint)", fontWeight: 700 }}>3% Miles back</span> automatically applied to top-ups
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* details grid */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <div className="glass" style={{ padding: 28 }}>
              <span className="icon-chip" style={{ marginBottom: 16 }}><Signal size={20} /></span>
              <h3 className="ty-4" style={{ margin: "0 0 8px" }}>Networks &amp; tech</h3>
              <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 16, lineHeight: 1.6 }}>
                {country.networks}. {is5g ? "Native 5G in major cities, full LTE elsewhere." : "4G/LTE nationwide."}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {[country.tech, "VoLTE", "Hotspot"].map((t) => (
                  <span key={t} style={{ padding: "4px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", fontSize: 12, color: "var(--text-2)" }}>{t}</span>
                ))}
              </div>
            </div>
            {seg.neighborhoods.length > 0 && (
              <div className="glass" style={{ padding: 28 }}>
                <span className="icon-chip" style={{ marginBottom: 16 }}><Compass size={20} /></span>
                <h3 className="ty-4" style={{ margin: "0 0 8px" }}>Where it works best</h3>
                <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 16, lineHeight: 1.6 }}>Tested coverage in {seg.neighborhoods.length} areas this quarter.</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {seg.neighborhoods.map((n) => (
                    <span key={n} style={{ padding: "4px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", fontSize: 12, color: "var(--text-2)" }}>{n}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="glass" style={{ padding: 28 }}>
              <span className="icon-chip" style={{ marginBottom: 16 }}><Sparkles size={20} /></span>
              <h3 className="ty-4" style={{ margin: "0 0 8px" }}>Local pro tip</h3>
              <p style={{ fontSize: 14, color: "var(--text-2)", margin: 0, lineHeight: 1.6 }}>{seg.tip}</p>
            </div>
          </div>
        </div>
      </section>

      {/* highlights */}
      {seg.highlights.length > 0 && (
        <section style={{ padding: "40px 0" }}>
          <div className="container">
            <h2 className="ty-2" style={{ marginTop: 0, marginBottom: 24 }}>What you get in {country.name}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {seg.highlights.map((h) => (
                <div key={h} className="glass" style={{ padding: 28, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(62,224,162,0.15)", color: "var(--mint)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{h}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <h2 className="ty-2" style={{ marginTop: 0, marginBottom: 24 }}>Common questions about {country.name}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 760 }}>
            {[
              { q: `How much will I spend in ${country.name}?`,  a: `Typical travelers use 1–2 GB per week (~$${weekCost}). Map-heavy itineraries push closer to 3 GB. Heavy streamers should plan for 5 GB+.` },
              { q: "Will it work the moment I land?",            a: `Yes. As long as you've installed the eSIM beforehand, your phone will lock onto ${country.networks.split(",")[0]} the moment airplane mode goes off.` },
              { q: "Can I tether to my laptop?",                 a: "Hotspot is included on every plan in every country. Tethered MB count exactly the same." },
              { q: "What if I run out of credit mid-trip?",      a: "Top up from the app in 30 seconds with Apple/Google Pay. New balance is usable instantly, no re-provisioning." },
            ].map((item) => (
              <details key={item.q} className="glass" style={{ padding: 24 }}>
                <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{item.q}</span>
                  <span style={{ color: "var(--text-3)", fontSize: 18, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ paddingTop: 14, fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <TrustBlock />
    </>
  );
}
