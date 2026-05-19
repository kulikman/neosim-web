import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import { TrustBlock } from "@/components/sections/trust-block";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get free eSIM",
  description: "Get your free NeoSIM eSIM — instant delivery, no credit card required. Connect in 150+ countries.",
};

export default function GetEsimPage(): React.ReactElement {
  return (
    <>
      <Hero />
      <TrustBlock />
    </>
  );
}
