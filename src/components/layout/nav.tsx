"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  ChevronDown,
  ArrowRight,
  Compass,
  Smartphone,
  Users,
  Gift,
  Share2,
  Shield,
  Plane,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

import { ROUTES } from "@/lib/constants";
import { CurrencyPicker } from "@/components/ui/currency-picker";

interface MenuItem {
  t: string;
  s: string;
  href: string;
  icon: React.ReactNode;
}

interface NavMenu {
  id: string;
  label: string;
  items: MenuItem[];
}

const MENUS: NavMenu[] = [
  {
    id: "product",
    label: "Product",
    items: [
      { t: "How it works", s: "From order to online in 2 min", href: ROUTES.howItWorks, icon: <Compass size={16} /> },
      { t: "Coverage", s: "150+ countries · 500+ networks", href: ROUTES.coverage, icon: <Globe size={16} /> },
      { t: "Compatibility checker", s: "Will my phone work?", href: ROUTES.faq, icon: <Smartphone size={16} /> },
      { t: "Download app", s: "iOS · Android", href: ROUTES.appDownload, icon: <Smartphone size={16} /> },
    ],
  },
  {
    id: "features",
    label: "Features",
    items: [
      { t: "Family Wallet", s: "One balance, up to 6 devices", href: ROUTES.home, icon: <Users size={16} /> },
      { t: "NeoSIM Miles", s: "Earn free data on every trip", href: ROUTES.home, icon: <Gift size={16} /> },
      { t: "Invite & Earn", s: "5% of friends' top-ups, forever", href: ROUTES.home, icon: <Share2 size={16} /> },
      { t: "Privacy Manifesto", s: "8 commitments to every user", href: ROUTES.privacy, icon: <Shield size={16} /> },
    ],
  },
  {
    id: "foryou",
    label: "For you",
    items: [
      { t: "For travelers", s: "Leisure, nomad, frequent flyer", href: ROUTES.home, icon: <Plane size={16} /> },
      { t: "For business", s: "Teams, fleets, expats", href: ROUTES.business, icon: <TrendingUp size={16} /> },
      { t: "For partners", s: "Resellers & affiliates", href: ROUTES.partners, icon: <Share2 size={16} /> },
    ],
  },
];

/** Fixed site navigation with scroll-aware glass blur and dropdown menus. */
export function Nav(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all .3s ease",
        background: scrolled ? "rgba(0,10,23,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", height: 68, gap: 24 }}>

        {/* Logo */}
        <Link
          href={ROUTES.home}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#fff",
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "-0.5px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "linear-gradient(135deg, #007FFF, #1a90ff)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(0,127,255,0.5)",
            }}
          >
            <Globe size={18} strokeWidth={2.2} />
          </span>
          NeoSIM
        </Link>

        {/* Desktop dropdown nav */}
        <nav
          className="nav-links"
          style={{ display: "flex", gap: 4, marginLeft: 28, position: "relative" }}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {MENUS.map((m) => (
            <div key={m.id} style={{ position: "relative" }} onMouseEnter={() => setOpenMenu(m.id)}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 16px",
                  fontSize: 14,
                  cursor: "pointer",
                  color: openMenu === m.id ? "#fff" : "rgba(255,255,255,0.7)",
                  borderRadius: 999,
                  transition: "color .2s",
                  background: "transparent",
                  border: "none",
                }}
              >
                {m.label}
                <ChevronDown
                  size={12}
                  style={{
                    transform: openMenu === m.id ? "rotate(180deg)" : "none",
                    transition: "transform .2s",
                  }}
                />
              </button>

              {openMenu === m.id && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    minWidth: 320,
                    paddingTop: 10,
                    zIndex: 70,
                    animation: "navFade 0.18s ease",
                  }}
                >
                  <div
                    style={{
                      padding: 8,
                      background: "rgba(10,15,30,0.92)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 18,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    }}
                  >
                    {m.items.map((it) => (
                      <Link
                        key={it.t}
                        href={it.href}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "12px 14px",
                          borderRadius: 12,
                          color: "#fff",
                          textDecoration: "none",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <span
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            flexShrink: 0,
                            background: "rgba(0,127,255,0.12)",
                            color: "#66b7ff",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {it.icon}
                        </span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>{it.t}</div>
                          <div style={{ fontSize: 12, color: "var(--ns-text-3)", marginTop: 2 }}>{it.s}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href={ROUTES.blog}
            style={{
              padding: "10px 16px",
              fontSize: 14,
              color: pathname === "/blog" ? "#fff" : "rgba(255,255,255,0.7)",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Blog
          </Link>
        </nav>

        <div style={{ flex: 1 }} />

        {/* Desktop CTA */}
        <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CurrencyPicker />
          <Link
            href={ROUTES.getEsim}
            className="btn btn-primary"
            style={{ height: 44, padding: "0 20px", fontSize: 14 }}
          >
            Get free eSIM <ArrowRight size={16} />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: "none",
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: "80px 0 0 0",
            zIndex: 49,
            background: "rgba(0,10,23,0.96)",
            backdropFilter: "blur(20px)",
            padding: 24,
            overflowY: "auto",
          }}
        >
          {MENUS.map((m) => (
            <div key={m.id} style={{ marginBottom: 24 }}>
              <div className="caption" style={{ color: "var(--ns-text-3)", marginBottom: 10 }}>{m.label}</div>
              {m.items.map((it) => (
                <Link
                  key={it.t}
                  href={it.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    color: "#fff",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#66b7ff" }}>{it.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{it.t}</span>
                </Link>
              ))}
            </div>
          ))}
          <Link
            href={ROUTES.blog}
            onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "12px 0", color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 16, textDecoration: "none" }}
          >
            Blog →
          </Link>
          <Link
            href={ROUTES.getEsim}
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ width: "100%", height: 52 }}
          >
            Get free eSIM <ArrowRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @keyframes navFade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1100px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: inline-flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}
