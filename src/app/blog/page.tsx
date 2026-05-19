"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import { ROUTES } from "@/lib/constants";
import { POSTS, CATS, avatarFor, catEmoji } from "@/lib/blog-data";

export default function BlogPage(): React.ReactElement {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? POSTS : POSTS.filter((p) => p.cat === cat);
  const [feature, ...rest] = filtered;

  return (
    <>
      {/* hero */}
      <section style={{ position: "relative", minHeight: 480, paddingTop: 96, overflow: "hidden", background: "#00040c" }}>
        <Image src="/assets/earth.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }} sizes="100vw" aria-hidden />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,6,15,0.45) 0%, rgba(0,6,15,0.25) 50%, rgba(0,10,23,0.65) 85%, var(--bg-deep) 100%)" }} aria-hidden />
        <div className="aurora" style={{ zIndex: 2, opacity: 0.4 }} aria-hidden />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: "linear-gradient(180deg, transparent, var(--bg-deep))", zIndex: 2 }} aria-hidden />
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: 32, paddingBottom: 80 }}>
          <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 40, textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to home
          </Link>
          <p className="caption" style={{ color: "#66b7ff", marginBottom: 20 }}>Field notes</p>
          <h1 className="ty-display" style={{ margin: 0, marginBottom: 24, maxWidth: 640 }}>
            The <span className="gradient-text">NeoSIM</span> blog
          </h1>
          <p className="lead" style={{ maxWidth: 520, margin: 0 }}>
            Travel data, eSIM tutorials, and the occasional industry exposé. Written by people who run the network.
          </p>
        </div>
      </section>

      {/* content */}
      <section style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="container">

          {/* category filter */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 40 }}>
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} style={{ padding: "8px 16px", fontSize: 13, fontWeight: 600, borderRadius: 999, border: `1px solid ${cat === c ? "#fff" : "rgba(255,255,255,0.08)"}`, background: cat === c ? "#fff" : "rgba(255,255,255,0.04)", color: cat === c ? "#000a17" : "#fff", cursor: "pointer" }}>
                {c}
              </button>
            ))}
          </div>

          {/* featured post */}
          {feature && (
            <Link href={`/blog/${feature.slug}`} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden", marginBottom: 32, color: "#fff", textDecoration: "none", borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
              <div style={{ aspectRatio: "16/10", background: "linear-gradient(135deg, rgba(0,127,255,0.3), rgba(62,224,162,0.15))", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
                <span style={{ fontSize: 96, opacity: 0.6 }}>📊</span>
                <span style={{ position: "absolute", top: 24, left: 24, padding: "6px 12px", borderRadius: 999, background: "rgba(0,5,15,0.7)", backdropFilter: "blur(8px)", fontSize: 11, fontWeight: 700, color: "#66b7ff", border: "1px solid rgba(0,127,255,0.3)" }}>
                  Featured · {feature.cat}
                </span>
              </div>
              <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 className="ty-2" style={{ margin: "0 0 16px" }}>{feature.title}</h2>
                <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 24 }}>{feature.excerpt}</p>
                <div style={{ display: "flex", gap: 14, fontSize: 13, color: "var(--text-3)", alignItems: "center" }}>
                  <span>{feature.author}</span><span>·</span>
                  <span>{feature.date}</span><span>·</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Clock size={12} />{feature.read}</span>
                </div>
              </div>
            </Link>
          )}

          {/* grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {rest.map((p) => {
              const a = avatarFor(p.author);
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ padding: 0, overflow: "hidden", color: "#fff", textDecoration: "none", display: "flex", flexDirection: "column", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                  <div style={{ aspectRatio: "16/10", background: `linear-gradient(135deg, hsla(${(p.title.charCodeAt(0) * 7) % 360}, 60%, 35%, 0.4), rgba(10,15,30,0.6))`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
                    <span style={{ position: "absolute", top: 16, left: 16, padding: "4px 10px", borderRadius: 999, background: "rgba(0,5,15,0.7)", fontSize: 11, fontWeight: 700, color: "#fff" }}>{p.cat}</span>
                    <span style={{ fontSize: 56, opacity: 0.5 }}>{catEmoji(p.cat)}</span>
                  </div>
                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="ty-4" style={{ margin: "0 0 8px" }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 18, flex: 1, lineHeight: 1.6 }}>{p.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                      <div style={{ width: 28, height: 28, borderRadius: 999, background: a.bg, color: a.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{a.initials}</div>
                      <div style={{ flex: 1, fontSize: 12, color: "var(--text-3)" }}>{p.author} · {p.date}</div>
                      <span style={{ fontSize: 12, color: "var(--text-3)" }}>{p.read}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
