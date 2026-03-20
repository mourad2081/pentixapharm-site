"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";

const infographics = [
  {
    id: "dental",
    title: "Dental Insurance",
    subtitle: "Your Best Smile, Fully Protected",
    description: "See exactly how ERGO Dental coverage eliminates massive out-of-pocket costs — real €7,420 savings example.",
    src: "/infographic-dental.webp",
    tag: "Dental",
    color: "from-teal/20 to-cyan-300/20",
    border: "border-teal/20",
  },
  {
    id: "accident",
    title: "Accident Insurance",
    subtitle: "Your Life Uninterrupted, Fully Protected",
    description: "24/7 worldwide protection with lifelong pension options and immediate cash payouts from €500.",
    src: "/infographic-accident.webp",
    tag: "Accident",
    color: "from-blue-400/20 to-indigo-400/20",
    border: "border-blue-300/20",
  },
  {
    id: "dental2",
    title: "Dental Protection Plans",
    subtitle: "Premium Dental Coverage Breakdown",
    description: "Compare Dental-Schutz 75, 90, and 100 — find the plan that gives you €0 out-of-pocket dental costs.",
    src: "/infographic-dental2.webp",
    tag: "Dental",
    color: "from-emerald-400/20 to-teal/20",
    border: "border-emerald-300/20",
  },
  {
    id: "legal",
    title: "Legal Protection",
    subtitle: "Your German Rights, Secured",
    description: "Navigate German courts and legal disputes with zero financial risk — tailored for expats.",
    src: "/infographic-legal.webp",
    tag: "Legal",
    color: "from-purple-400/20 to-pink-400/20",
    border: "border-purple-300/20",
  },
];

export function InfographicsSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((l) => (l === null ? null : (l - 1 + infographics.length) % infographics.length));
  const next = () => setLightbox((l) => (l === null ? null : (l + 1) % infographics.length));

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal font-bold uppercase tracking-widest text-sm mb-4">
            Visual Guides
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-navy mb-5 tracking-tight">
            Product Infographics
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Clear, visual breakdowns of each ERGO product — click any to view full size.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infographics.map((item, index) => (
            <Magnetic key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${item.color} rounded-3xl border ${item.border} overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500`}
                onClick={() => setLightbox(index)}
              >
                {/* Tag */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-navy text-xs font-black px-3 py-1.5 rounded-full shadow">
                  {item.tag}
                </div>
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-navy" />
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    onError={() => {}} // graceful fallback
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="font-heading font-black text-navy text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy/95 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-7 h-7" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={infographics[lightbox].src}
              alt={infographics[lightbox].title}
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightbox + 1} / {infographics.length} — {infographics[lightbox].title}
          </p>
        </motion.div>
      )}
    </section>
  );
}
