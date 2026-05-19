import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ROUTES } from "@/lib/constants";

export function Cta(): React.ReactElement {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Aurora */}
      <div className="aurora pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,127,255,0.22), transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <div
          className="glass-strong relative overflow-hidden rounded-[32px] px-10 py-20 text-center"
        >
          {/* Watermark */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(80px,14vw,200px)] font-black leading-none tracking-[-0.04em] text-white/[0.025]"
            aria-hidden
          >
            NEOSIM
          </div>

          <div className="relative">
            <p className="caption mb-6 text-[#66b7ff]">Get started free</p>
            <h2 className="mb-6 text-[clamp(36px,6vw,72px)] font-bold leading-[1.05] tracking-[-1.8px]">
              Land anywhere.
              <br />
              <span className="gradient-text">Connect instantly.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-[520px] text-base leading-7 text-text-2">
              One eSIM, 150+ countries, pay per GB. No subscriptions. No SIM
              swaps. No roaming bills. Your free eSIM is delivered in seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ROUTES.getEsim}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-bold text-[#000a17] transition-all hover:-translate-y-px hover:shadow-[0_10px_30px_rgba(255,255,255,0.22)]"
              >
                Get free eSIM <ArrowRight className="size-4" />
              </Link>
              <Link
                href={ROUTES.howItWorks}
                className="inline-flex h-14 items-center gap-2 rounded-full border border-white/8 bg-white/4 px-8 text-[15px] font-semibold text-white transition-colors hover:bg-white/8"
              >
                How it works
              </Link>
            </div>
            <p className="mt-6 font-mono text-xs text-text-3">
              Works on iPhone XS+ · Pixel 4+ · Galaxy S20+ · Most flagships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
