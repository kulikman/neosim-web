"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

import { FAQS } from "@/lib/data";
import { ROUTES } from "@/lib/constants";

export function Faq(): React.ReactElement {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="section-pad relative"
      style={{ background: "#00060f" }}
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-[800px] px-5 sm:px-8">
        <div className="mb-12">
          <p className="caption mb-4 text-[#66b7ff]">FAQ</p>
          <h2 className="text-[clamp(34px,5vw,62px)] font-bold leading-[1.05] tracking-[-1.8px]">
            The <span className="gradient-text">small print</span>, made plain.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass overflow-hidden rounded-[22px]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-semibold text-white">{f.q}</span>
                  <span
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-200"
                    style={{
                      background: isOpen ? "var(--accent)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="max-w-[700px] px-7 pb-6 text-[15px] leading-relaxed text-text-2">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-text-3">
          Still have questions?{" "}
          <Link href={ROUTES.contact} className="font-semibold text-[#66b7ff] hover:underline">
            Contact us
          </Link>{" "}
          or read the full{" "}
          <Link href={ROUTES.faq} className="font-semibold text-[#66b7ff] hover:underline">
            FAQ page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
