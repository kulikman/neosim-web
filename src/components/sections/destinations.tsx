"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DESTINATIONS } from "@/lib/data";
import { ROUTES } from "@/lib/constants";

const FILTERS = ["All", "Europe", "Asia", "Americas", "Middle East"] as const;
type Filter = (typeof FILTERS)[number];

const REGION_MAP: Record<string, Filter> = {
  GB: "Europe",
  FR: "Europe",
  DE: "Europe",
  IT: "Europe",
  ES: "Europe",
  TR: "Europe",
  JP: "Asia",
  TH: "Asia",
  SG: "Asia",
  ID: "Asia",
  KR: "Asia",
  US: "Americas",
  MX: "Americas",
  BR: "Americas",
  AE: "Middle East",
  SA: "Middle East",
};

function getRegion(code: string): Filter {
  return REGION_MAP[code] ?? "All";
}

export function Destinations(): React.ReactElement {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => getRegion(d.code) === filter);

  return (
    <section
      id="coverage"
      className="section-pad relative overflow-hidden"
      style={{ background: "#00060f" }}
    >
      {/* Dot grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-[1140px] px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="caption mb-4 text-[#66b7ff]">Coverage</p>
            <h2 className="text-[clamp(34px,5vw,62px)] font-bold leading-[1.05] tracking-[-1.8px]">
              150+ countries
              <br />
              <span className="gradient-text">One transparent rate per GB.</span>
            </h2>
          </div>
          <Link
            href={ROUTES.coverage}
            className="inline-flex h-13 items-center gap-2 rounded-full border border-white/8 bg-white/4 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/8"
          >
            All destinations <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="pill cursor-pointer text-sm font-semibold transition-all duration-150"
              style={{
                padding: "10px 20px",
                background: filter === f ? "#fff" : "rgba(255,255,255,0.04)",
                color: filter === f ? "#000a17" : "rgba(255,255,255,0.85)",
                borderColor: filter === f ? "#fff" : "rgba(255,255,255,0.08)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Destination cards grid */}
        <div className="grid gap-[18px] grid-cols-2 lg:grid-cols-4">
          {visible.map((d) => {
            const priceGb = (d.priceMb * 1024).toFixed(2);
            return (
              <div
                key={d.code}
                className="group relative overflow-hidden rounded-[22px]"
                style={{ minHeight: 280 }}
              >
                {/* Background image */}
                <Image
                  src={d.img}
                  alt={`${d.city}, ${d.country}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,10,23,0.90) 0%, rgba(0,10,23,0.30) 55%, transparent 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  {/* Top: country label + popular badge */}
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[13px] text-white/85">{d.country}</p>
                      <p className="text-xl font-bold leading-tight tracking-tight text-white">
                        {d.city}
                      </p>
                    </div>
                    {d.popular && (
                      <span className="shrink-0 rounded-full border border-[rgba(0,127,255,0.3)] bg-[rgba(0,127,255,0.18)] px-2.5 py-1 text-[11px] font-semibold text-[#9bc9ff] backdrop-blur-sm">
                        {d.popular}
                      </span>
                    )}
                  </div>

                  {/* Bottom: price + arrow */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/92 px-3.5 py-2 text-[13px] font-semibold text-[#000a17]">
                      ${priceGb}
                      <span className="font-medium text-[rgba(0,10,23,0.6)]">/GB</span>
                    </span>
                    <Link
                      href={`${ROUTES.coverage}/${d.code.toLowerCase()}`}
                      className="inline-flex size-10 items-center justify-center rounded-full text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      style={{ background: "rgba(0,10,23,0.6)" }}
                      aria-label={`View ${d.city} coverage`}
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
