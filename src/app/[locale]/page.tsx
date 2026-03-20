"use client";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ForWhom } from "@/components/home/ForWhom";
import { ProductCards } from "@/components/home/ProductCards";
import { Testimonials } from "@/components/home/Testimonials";
import { Timeline } from "@/components/home/Timeline";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyMe } from "@/components/home/WhyMe";
import { motion } from "framer-motion";

const RevealSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.section>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <RevealSection delay={0.1}><ForWhom /></RevealSection>
      <RevealSection delay={0.2}><ProductCards /></RevealSection>
      <RevealSection delay={0.2}><Testimonials /></RevealSection>
      <RevealSection delay={0.1}><Timeline /></RevealSection>
      <RevealSection delay={0.2}><StatsSection /></RevealSection>
      <RevealSection delay={0.1}><WhyMe /></RevealSection>
    </main>
  );
}

