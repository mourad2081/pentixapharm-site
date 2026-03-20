"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero = dynamic(() => import("@/components/home/Hero").then(mod => mod.Hero), { ssr: false });
const TrustBar = dynamic(() => import("@/components/home/TrustBar").then(mod => mod.TrustBar), { ssr: false });
const ForWhom = dynamic(() => import("@/components/home/ForWhom").then(mod => mod.ForWhom), { ssr: false });
const ProductCards = dynamic(() => import("@/components/home/ProductCards").then(mod => mod.ProductCards), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(mod => mod.Testimonials), { ssr: false });
const Timeline = dynamic(() => import("@/components/home/Timeline").then(mod => mod.Timeline), { ssr: false });
const StatsSection = dynamic(() => import("@/components/home/StatsSection").then(mod => mod.StatsSection), { ssr: false });
const WhyMe = dynamic(() => import("@/components/home/WhyMe").then(mod => mod.WhyMe), { ssr: false });

const RevealSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="opacity-0">{children}</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

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
