"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">
            Visual Guides
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mb-5 tracking-tight">
            Product <span className="text-teal">Infographics</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Clear, visual breakdowns of each ERGO product — click any to view full size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infographics.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br ${item.color} rounded-3xl border ${item.border} overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setLightbox(index)}
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-widest border border-white/50">
                {item.tag}
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 z-10 bg-navy/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
              </div>

              {/* Text */}
              <div className="p-8">
                <h3 className="font-heading font-black text-navy text-xl mb-2 group-hover:text-teal transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-navy/98 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110]" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110]" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all z-[110]" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-6xl h-full flex items-center justify-center animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            <Image
              src={infographics[lightbox].src}
              alt={infographics[lightbox].title}
              width={1600}
              height={1000}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-2xl border border-white/5"
            />
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-4">
            <span className="text-white font-black text-sm">{lightbox + 1} / {infographics.length}</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-teal font-black text-sm uppercase tracking-widest">{infographics[lightbox].title}</span>
          </div>
        </div>
      )}
    </section>
  );
}
