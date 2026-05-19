"use client";

import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

import { STEPS } from "@/lib/data";
import { ROUTES } from "@/lib/constants";

const STEP_TAGS = [
  ["Free signup", "No credit card", "Instant delivery"],
  ["1-tap iOS", "Universal QR", "Android ready"],
  ["150+ countries", "5G/4G native", "Auto-connect"],
  ["Pay per GB", "Daily cap", "Never expires"],
] as const;

interface HowItWorksProps {
  hideHeader?: boolean;
}

export function HowItWorks({ hideHeader = false }: HowItWorksProps): React.ReactElement {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="section-pad relative overflow-hidden">
      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(120px,18vw,240px)] font-black leading-none tracking-[-0.04em] text-white/[0.025]"
        aria-hidden
      >
        NEOSIM
      </div>

      <div className="relative mx-auto max-w-[1140px] px-5 sm:px-8">
        {/* Header */}
        {!hideHeader && (
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="caption mb-4 text-[#66b7ff]">How it works</p>
            <h2 className="text-[clamp(26px,3.8vw,48px)] font-bold leading-[1.05] tracking-[-1.2px]">
              From order to online
              <br />
              <span className="gradient-text">in under 2 minutes.</span>
            </h2>
          </div>
          <div className="flex gap-2.5">
            <Link
              href={ROUTES.getEsim}
              className="inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#000a17] transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
            >
              Get free eSIM <ArrowRight className="size-4" />
            </Link>
            <Link
              href={ROUTES.howItWorks}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-white/8 bg-white/4 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/8"
            >
              Learn more
            </Link>
          </div>
        </div>
        )}

        {/* Interactive steps grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: step list */}
          <div className="flex flex-col gap-1">
            {STEPS.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActive(i)}
                className="group flex items-start gap-6 rounded-2xl border px-8 py-7 text-left transition-all duration-200"
                style={{
                  background: active === i ? "rgba(0,127,255,0.10)" : "transparent",
                  borderColor: active === i ? "rgba(0,127,255,0.30)" : "transparent",
                }}
              >
                <span
                  className="min-w-[28px] pt-1 font-mono text-[13px] font-bold tracking-[0.05em] transition-colors duration-200"
                  style={{ color: active === i ? "#66b7ff" : "rgba(255,255,255,0.25)" }}
                >
                  {step.n}
                </span>
                <div className="flex-1">
                  <p
                    className="mb-1.5 text-xl font-bold transition-colors duration-200"
                    style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.55)" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed transition-colors duration-200"
                    style={{ color: active === i ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.25)" }}
                  >
                    {step.body}
                  </p>
                </div>
                <ArrowRight
                  className="mt-1 size-4.5 shrink-0 text-[#66b7ff] transition-opacity duration-200"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              </button>
            ))}
          </div>

          {/* Right: active step card (sticky) */}
          <div className="top-28 lg:sticky">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className="glass-strong relative overflow-hidden rounded-[28px] p-10"
                style={{ display: active === i ? "block" : "none" }}
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(0,127,255,0.22), transparent 60%)",
                    filter: "blur(40px)",
                  }}
                />

                <div className="relative">
                  {/* Big step number */}
                  <p
                    className="mb-6 text-[64px] font-black leading-none tracking-[-4px]"
                    style={{
                      background: "linear-gradient(135deg, #007fff, rgba(0,127,255,0.3))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.n}
                  </p>
                  <h3 className="mb-4 text-[20px] font-extrabold tracking-tight">{step.title}</h3>
                  <p className="text-base leading-7 text-text-2">{step.body}</p>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {STEP_TAGS[i].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(0,127,255,0.25)] bg-[rgba(0,127,255,0.10)] px-3.5 py-1.5 text-xs font-semibold text-[#9bc9ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-8 flex gap-1.5">
                    {STEPS.map((_, j) => (
                      <button
                        key={j}
                        onClick={() => setActive(j)}
                        className="h-[3px] rounded-full transition-all duration-300"
                        style={{
                          flex: j === i ? 3 : 1,
                          background:
                            j <= i
                              ? "linear-gradient(90deg, #007fff, #3ee0a2)"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily cap callout */}
        <div className="mt-14 flex flex-wrap items-center gap-4 rounded-2xl border border-[rgba(62,224,162,0.2)] bg-[rgba(62,224,162,0.06)] px-7 py-5">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(62,224,162,0.12)] text-mint">
            <Shield className="size-4.5" />
          </span>
          <p className="flex-1 text-sm leading-relaxed text-text-2">
            <span className="font-bold text-mint">Daily Cap —</span>{" "}
            Set a daily spending limit in app settings. When reached, speed drops to 64 kbps —
            you stay connected, never cut off. Resets midnight UTC.
          </p>
          <Link
            href={ROUTES.getEsim}
            className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-mint transition-opacity hover:opacity-80"
          >
            Try it free <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
