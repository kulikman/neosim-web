import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";

import { ROUTES } from "@/lib/constants";
import { POSTS, avatarFor, catEmoji } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = post.body ?? [post.excerpt, "Full article coming soon. Subscribe to the newsletter for the full version when it ships next week."];
  const a = avatarFor(post.author);
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <section style={{ paddingTop: 140, paddingBottom: 100, position: "relative" }}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="aurora" style={{ opacity: 0.3 }} aria-hidden />

      <div className="container" style={{ position: "relative", maxWidth: 760 }}>
        <Link href={ROUTES.blog} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 13, marginBottom: 32, textDecoration: "none" }}>
          <ArrowLeft size={14} /> All articles
        </Link>

        {/* meta */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center", fontSize: 13, color: "var(--text-3)" }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(0,127,255,0.12)", color: "#66b7ff", fontWeight: 700, fontSize: 11 }}>{post.cat}</span>
          <span>{post.date}</span>
          <span>·</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Clock size={12} />{post.read} read</span>
        </div>

        <h1 className="ty-1" style={{ margin: "0 0 24px" }}>{post.title}</h1>
        <p className="lead" style={{ marginBottom: 36 }}>{post.excerpt}</p>

        {/* author */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 32, borderBottom: "1px solid var(--border)", marginBottom: 40 }}>
          <div style={{ width: 48, height: 48, borderRadius: 999, background: a.bg, color: a.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, flexShrink: 0 }}>{a.initials}</div>
          <div>
            <div style={{ fontWeight: 700 }}>{post.author}</div>
            <div style={{ fontSize: 12, color: "var(--text-3)" }}>{post.authorRole}</div>
          </div>
        </div>

        {/* cover */}
        <div style={{ aspectRatio: "16/9", borderRadius: 20, marginBottom: 40, background: "linear-gradient(135deg, rgba(0,127,255,0.3), rgba(62,224,162,0.15))", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <span style={{ fontSize: 120, opacity: 0.6 }}>{catEmoji(post.cat)}</span>
        </div>

        {/* body */}
        <article style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-1)" }}>
          {body.map((para, i) => (
            <p key={i} style={{ marginBottom: 24 }}>{para}</p>
          ))}
        </article>

        {/* newsletter */}
        <div className="glass-strong" style={{ padding: 32, marginTop: 56 }}>
          <h3 className="ty-4" style={{ margin: "0 0 12px" }}>Get articles like this in your inbox</h3>
          <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 20, lineHeight: 1.6 }}>One email a month. No spam, no upsells. Just data and the occasional rant.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <div className="field" style={{ flex: 1, minWidth: 220 }}>
              <Mail size={16} />
              <input placeholder="your@email.com" />
            </div>
            <button style={{ height: 48, padding: "0 20px", borderRadius: 999, border: "none", background: "#fff", color: "#000a17", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* related */}
        <div style={{ marginTop: 56 }}>
          <h3 className="ty-4" style={{ margin: "0 0 20px" }}>More articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ padding: 20, display: "flex", gap: 14, alignItems: "center", color: "#fff", textDecoration: "none", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ fontSize: 28 }}>{catEmoji(p.cat)}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)" }}>{p.cat} · {p.read}</div>
                </div>
                <ArrowRight size={16} style={{ color: "var(--text-3)", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
