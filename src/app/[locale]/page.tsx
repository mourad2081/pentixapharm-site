import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductCards } from "@/components/home/ProductCards";
import { StatsSection } from "@/components/home/StatsSection";
import { InfographicsSection } from "@/components/home/InfographicsSection";
import { WhyMe } from "@/components/home/WhyMe";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProductCards />
      <StatsSection />
      <InfographicsSection />
      <WhyMe />
    </main>
  );
}
