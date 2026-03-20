import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ForWhom } from "@/components/home/ForWhom";
import { ProductCards } from "@/components/home/ProductCards";
import { Testimonials } from "@/components/home/Testimonials";
import { Timeline } from "@/components/home/Timeline";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyMe } from "@/components/home/WhyMe";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ForWhom />
      <ProductCards />
      <Testimonials />
      <Timeline />
      <StatsSection />
      <WhyMe />
    </main>
  );
}
