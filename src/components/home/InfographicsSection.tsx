"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export function InfographicsSection() {
  const t = useTranslations("InfographicsSection");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const infographics = [
    { id: "dental", title: t('i1Title'), subtitle: t('i1Sub'), description: t('i1Desc'), src: "/infographic-dental.webp", tag: "Dental", color: "from-teal/20 to-cyan-300/20", border: "border-teal/20" },
    { id: "accident", title: t('i2Title'), subtitle: t('i2Sub'), description: t('i2Desc'), src: "/infographic-accident.webp", tag: "Accident", color: "from-blue-400/20 to-indigo-400/20", border: "border-blue-300/20" },
    { id: "dental2", title: t('i3Title'), subtitle: t('i3Sub'), description: t('i3Desc'), src: "/infographic-dental2.webp", tag: "Dental", color: "from-emerald-400/20 to-teal/20", border: "border-emerald-300/20" },
    { id: "legal", title: t('i4Title'), subtitle: t('i4Sub'), description: t('i4Desc'), src: "/infographic-legal.webp", tag: "Legal", color: "from-purple-400/20 to-pink-400/20", border: "border-purple-300/20" },
  ];

  const prev = () => setLightbox((l) => (l === null ? null : (l - 1 + infographics.length) % infographics.length));
  const next = () => setLightbox((l) => (l === null ? null : (l + 1) % infographics.length));

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">{t('subtitle')}</p>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight leading-tight">
            {t('title').split(' ')[0]} <span className="text-teal">{t('title').split(' ')[1]}</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infographics.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative bg-gradient-to-br ${item.color} rounded-[2.5rem] border ${item.border} overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500`}
              onClick={() => setLightbox(index)}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-widest border border-white/50">
                {item.tag}
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 z-10 bg-navy/90 backdrop-blur-sm p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="p-10 text-left">
                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="font-heading font-black text-navy text-2xl group-hover:text-teal transition-colors tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-teal font-bold text-xs uppercase tracking-widest">{item.subtitle}</p>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/98 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-10"
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

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={infographics[lightbox].src}
                alt={infographics[lightbox].title}
                width={1600}
                height={1000}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-2xl border border-white/5"
              />
            </motion.div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-4">
              <span className="text-white font-black text-sm">{lightbox + 1} / {infographics.length}</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-teal font-black text-sm uppercase tracking-widest">{infographics[lightbox].title}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
