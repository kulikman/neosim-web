import { Hero } from "@/components/sections/hero";
import { TrustBlock } from "@/components/sections/trust-block";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Destinations } from "@/components/sections/destinations";
import { Pricing } from "@/components/sections/pricing";
import { Wallet } from "@/components/sections/wallet";
import { Faq } from "@/components/sections/faq";

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <TrustBlock />
      <HowItWorks />
      <Destinations />
      <Pricing />
      <Wallet />
      <Faq />
    </>
  );
}
