import { Zap, Shield, TrendingUp, Gift } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Pay as you go", sub: "Billed in real time" },
  { icon: Shield, title: "No expiry", sub: "Balance never lapses" },
  { icon: TrendingUp, title: "Up to 60% cheaper", sub: "vs roaming" },
  { icon: Gift, title: "3% Miles back", sub: "Spend on future data" },
] as const;

const COMPARE_ROWS = [
  { name: "Carrier roaming", sub: "Pay-per-use", price: "84.00", dim: true, hl: false },
  { name: "Travel eSIM (5 GB pkg)", sub: "1 GB unused", price: "29.00", dim: true, hl: false },
  { name: "NeoSIM", sub: "4 GB · pay as you go", price: "7.20", dim: false, hl: true },
] as const;

export function Pricing(): React.ReactElement {
  return (
    <section id="pricing" className="section-pad">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: copy + feature grid */}
          <div>
            <p className="caption mb-4 text-[#66b7ff]">Pricing</p>
            <h2 className="mb-6 text-[clamp(26px,3.8vw,48px)] font-bold leading-[1.05] tracking-[-1.2px]">
              Pay for the gigabytes
              <br />
              you use.{" "}
              <span className="gradient-text">Nothing&nbsp;else.</span>
            </h2>
            <p className="mb-8 max-w-[540px] text-base leading-7 text-text-2">
              Traditional travel SIMs sell you 5 GB packages, charge again when they expire,
              and pocket the rest. NeoSIM bills as you go — so a 14-day trip and a 2-hour
              layover cost you exactly what they should.
            </p>

            <div className="grid max-w-[480px] grid-cols-2 gap-3.5">
              {FEATURES.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3 py-2.5">
                  <span className="icon-chip size-10 shrink-0 rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-0.5 text-[13px] text-text-3">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: receipt comparison card */}
          <div className="relative">
            {/* Background glow */}
            <div
              className="pointer-events-none absolute -inset-10 rounded-full"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(0,127,255,0.18), transparent 60%)",
                filter: "blur(40px)",
              }}
            />

            <div className="glass-strong relative rounded-[28px] p-8">
              {/* Card header */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[13px] text-text-2">14-day trip · Spain · 4 GB</span>
                <span className="rounded-full border border-[rgba(62,224,162,0.3)] bg-[rgba(62,224,162,0.12)] px-3 py-1.5 text-[11px] font-semibold text-mint">
                  You save $76.80
                </span>
              </div>

              {/* Comparison rows */}
              <div className="flex flex-col gap-3">
                {COMPARE_ROWS.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-2xl px-5 py-[18px]"
                    style={{
                      background: row.hl
                        ? "linear-gradient(90deg, rgba(0,127,255,0.18), rgba(0,127,255,0.05))"
                        : "rgba(255,255,255,0.02)",
                      border: row.hl
                        ? "1px solid rgba(0,127,255,0.4)"
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <p
                        className="text-[15px] font-semibold"
                        style={{
                          color: row.dim ? "rgba(255,255,255,0.72)" : "#fff",
                          textDecoration: row.dim ? "line-through" : "none",
                          textDecorationColor: "rgba(255,255,255,0.3)",
                        }}
                      >
                        {row.name}
                      </p>
                      <p className="mt-0.5 text-xs text-text-3">{row.sub}</p>
                    </div>
                    <p
                      className="text-[16px] font-bold tracking-[-0.4px]"
                      style={{
                        color: row.hl ? "#fff" : "rgba(255,255,255,0.72)",
                        textDecoration: row.dim ? "line-through" : "none",
                        textDecorationColor: "rgba(255,255,255,0.3)",
                      }}
                    >
                      ${row.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-border" />

              {/* Effective rate */}
              <div className="flex justify-between text-[13px] text-text-3">
                <span>Effective rate</span>
                <span className="font-mono text-white">$1.80 / GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
