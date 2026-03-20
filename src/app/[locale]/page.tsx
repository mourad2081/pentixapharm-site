import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CompanyLogos } from "@/components/home/CompanyLogos";
import { ForWhom } from "@/components/home/ForWhom";
import { ProductCards } from "@/components/home/ProductCards";
import { Testimonials } from "@/components/home/Testimonials";
import { Timeline } from "@/components/home/Timeline";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyMe } from "@/components/home/WhyMe";
import { motion } from "framer-motion";

const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <TrustBar />
      <SectionReveal><CompanyLogos /></SectionReveal>
      <SectionReveal><ForWhom /></SectionReveal>
      <SectionReveal><ProductCards /></SectionReveal>
      <SectionReveal><Testimonials /></SectionReveal>
      <SectionReveal><Timeline /></SectionReveal>
      <SectionReveal><StatsSection /></SectionReveal>
      <SectionReveal><WhyMe /></SectionReveal>
    </main>
  );
}
