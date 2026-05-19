import { Plane } from "lucide-react";

const TRUST_ITEMS = [
  { title: "GSMA member",          sub: "Approved global eSIM provider" },
  { title: "500+ tier-1 carriers", sub: "Direct IPX peering" },
  { title: "GDPR compliant",       sub: "EU data protection · servers in Frankfurt" },
  { title: "eKYC compliant",       sub: "EU & UK regulatory ready" },
] as const;

export function TrustBlock(): React.ReactElement {
  return (
    <section className="py-16 pb-8">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="glass rounded-[28px] px-10 py-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-10">

            {/* Travelers stat */}
            <div className="flex shrink-0 items-center gap-3.5">
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-[rgba(62,224,162,0.3)] bg-[rgba(62,224,162,0.12)]">
                <Plane className="size-5 text-mint" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-text-3">
                  Travelers connected today
                </p>
                <p className="text-[19px] font-extrabold leading-tight tracking-tight text-white">
                  across 150+ countries
                </p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-border lg:block" />

            {/* Trust items */}
            <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-0.5 text-xs text-text-3">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* 2SkyMobile badge */}
            <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-[rgba(0,127,255,0.25)] bg-[rgba(0,127,255,0.08)] px-3.5 py-2">
              <span className="font-mono text-[11px] text-[#9bc9ff]">Powered by</span>
              <span className="text-[13px] font-bold text-white">2SkyMobile</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
