"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, Activity, Globe2, ScanFace, 
  MapPin, Send, Cpu, Dna, FlaskConical, Target
} from "lucide-react";

// Common animation variants
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("common");

  // Organic background elements
  const OrganicBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="organic-bg" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00F2FF] opacity-10 blur-[150px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#7B61FF] opacity-10 blur-[200px] mix-blend-screen" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0b16] text-white overflow-hidden relative selection:bg-[#00F2FF]/30 selection:text-white">
      <OrganicBackground />
      
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[105vh] flex items-center pt-24 px-6 z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-8 shadow-[0_0_20px_rgba(0,242,255,0.05)]">
              <div className="w-2 h-2 bg-[#00F2FF] rounded-full animate-pulse shadow-[0_0_12px_rgba(0,242,255,1)]" />
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.3em] text-white/80">
                Phase III Clinical Strategy
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-semibold leading-[1.05] tracking-tight mb-8">
              PRECISION RADIOPHARMACEUTICALS: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] via-white to-[#7B61FF] animate-gradient-shift">
                FIND & FIGHT CANCER.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/50 leading-relaxed font-light mb-12 max-w-2xl">
              Our CXCR4 platform is inspired by precision molecular architecture, enabling an incredibly efficient computational diagnostic and therapeutic pipeline.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-center">
              <Link href={`/${locale}/technology`} className="btn-glass btn-cyan w-full sm:w-auto text-center flex justify-center items-center gap-3">
                PARTNER WITH US
              </Link>
              <Link href={`/${locale}/contact`} className="btn-glass btn-violet w-full sm:w-auto text-center flex justify-center items-center gap-3">
                CONTACT US
              </Link>
            </motion.div>
          </motion.div>

          {/* Abstract 3D Cell Mass representation using Framer Motion & CSS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative lg:h-[600px] flex items-center justify-center pt-20 lg:pt-0"
          >
            {/* The core shape */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#00F2FF]/20 rounded-full blur-[80px]" />
              
              {/* Complex Rotating Base */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-[40%] bg-gradient-to-tr from-[#002A54] to-[#1a1444] border-4 border-white/5 shadow-2xl mix-blend-screen backdrop-blur-3xl overflow-hidden"
              />
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-[45%] bg-gradient-to-br from-[#00F2FF]/10 to-[#7B61FF]/10 border-2 border-[#00F2FF]/20 mix-blend-screen backdrop-blur-xl"
              />

              {/* Cyan Receptor Nodes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                  className="absolute w-4 h-4 bg-[#00F2FF] rounded-full shadow-[0_0_20px_#00F2FF] z-10"
                  style={{
                    top: `${40 + 40 * Math.sin(i * (Math.PI / 4))}%`,
                    left: `${40 + 40 * Math.cos(i * (Math.PI / 4))}%`,
                  }}
                />
              ))}

              {/* Central Glowing Core */}
              <div className="absolute inset-1/4 rounded-full bg-radial-gradient from-[#00F2FF]/40 to-transparent blur-2xl animate-pulseGlow" />

              {/* Label 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                className="absolute -left-12 top-1/3 glass-panel p-3 text-xs w-36 z-20"
              >
                <div className="text-[#00F2FF] font-semibold mb-1">CXCR4 receptor</div>
                <div className="text-white/60 text-[10px]">Ligand tracer binding</div>
              </motion.div>
              
              {/* Label 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}
                className="absolute -right-8 bottom-1/4 glass-panel glass-panel-violet p-3 text-xs w-40 z-20"
              >
                <div className="text-[#7B61FF] font-semibold mb-1">Therapeutic Payload</div>
                <div className="text-white/60 text-[10px]">Targeted isotope decay</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 2. PRODUCT GRID ─────────────────────────────────────────────────── */}
      <section className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* FIND (Cyan) */}
            <motion.div variants={fadeUp} className="glass-panel p-8 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#00F2FF]/10 blur-[50px] rounded-full group-hover:bg-[#00F2FF]/20 transition-all font-heading" />
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#00F2FF]/10 mb-6 border border-[#00F2FF]/30 group-hover:scale-110 transition-transform">
                <Dna className="w-7 h-7 text-[#00F2FF]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#00F2FF] transition-colors">PentixaFor</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed mb-8 flex-grow">
                High-precision diagnostic tracer for sensitive imaging, optimizing patient selection through visual validation.
              </p>
              <Link href={`/${locale}/pipeline`} className="flex items-center text-xs font-semibold tracking-widest text-[#00F2FF] uppercase mt-auto">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-panel p-8 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#00F2FF]/10 blur-[50px] rounded-full group-hover:bg-[#00F2FF]/20 transition-all" />
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#00F2FF]/10 mb-6 border border-[#00F2FF]/30 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-[#00F2FF]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#00F2FF] transition-colors">PentixaCheck</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed mb-8 flex-grow">
                Validating the presence of CXCR4 targets to streamline the theranostic workflow securely.
              </p>
              <Link href={`/${locale}/pipeline`} className="flex items-center text-xs font-semibold tracking-widest text-[#00F2FF] uppercase mt-auto">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* FIGHT (Violet) */}
            <motion.div variants={fadeUp} className="glass-panel glass-panel-violet p-8 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#7B61FF]/10 blur-[50px] rounded-full group-hover:bg-[#7B61FF]/20 transition-all font-heading" />
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#7B61FF]/10 mb-6 border border-[#7B61FF]/30 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-[#7B61FF]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#7B61FF] transition-colors">PentixaTher</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed mb-8 flex-grow">
                Targeted therapeutic isotope vector delivering localized radiation to destroy cancerous structures.
              </p>
              <Link href={`/${locale}/pipeline`} className="flex items-center text-xs font-semibold tracking-widest text-[#7B61FF] uppercase mt-auto">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-panel glass-panel-violet p-8 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#7B61FF]/10 blur-[50px] rounded-full group-hover:bg-[#7B61FF]/20 transition-all" />
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#7B61FF]/10 mb-6 border border-[#7B61FF]/30 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-[#7B61FF]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#7B61FF] transition-colors">PentixaPulse</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed mb-8 flex-grow">
                Accelerated particle therapy tracking for complex metastatic pathways and dynamic interventions.
              </p>
              <Link href={`/${locale}/pipeline`} className="flex items-center text-xs font-semibold tracking-widest text-[#7B61FF] uppercase mt-auto">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. THE PIPELINE ─────────────────────────────────────────────────── */}
      <section className="relative py-24 z-10 border-t border-white/5 bg-[#0a0b16]/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-semibold mb-6">Pentixapharm <span className="text-[#00F2FF]">Research Pipeline</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light">Progressing from in-vitro concepts through rigorous Phase I-III clinical evaluation stages globally.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* 3D Orbital Isotope Chart (Left Side Diagram) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[400px]">
              <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-orbit-slow" />
              <div className="absolute w-[300px] h-[300px] border border-[#00F2FF]/20 rounded-full animate-orbit" />
              <div className="absolute w-[200px] h-[200px] border border-[#7B61FF]/40 rounded-full animate-orbit-fast" />
              
              <div className="absolute bg-[#00F2FF]/30 w-[120px] h-[120px] rounded-full blur-[30px]" />
              <div className="absolute bg-[#0a0b16] border-2 border-[#00F2FF]/50 w-[80px] h-[80px] rounded-[30%] animate-spin-slow flex items-center justify-center shadow-[0_0_30px_#00F2FF]" >
                 <AtomIcon className="w-8 h-8 text-[#00F2FF]" />
              </div>

              {/* Orbiting particles */}
              <div className="absolute opacity-80" style={{ transform: 'translate(-150px, 0)' }}>
                <div className="w-6 h-6 rounded-full bg-[#00F2FF] shadow-[0_0_15px_#00F2FF]" />
                <span className="absolute top-8 -left-2 text-[10px] text-[#00F2FF]">Phase I</span>
              </div>
              <div className="absolute opacity-80" style={{ transform: 'translate(100px, -100px)' }}>
                <div className="w-8 h-8 rounded-full bg-[#7B61FF] shadow-[0_0_15px_#7B61FF]" />
                <span className="absolute top-10 -left-2 text-[10px] text-[#7B61FF]">Phase II</span>
              </div>
              <div className="absolute opacity-80" style={{ transform: 'translate(200px, 50px)' }}>
                <div className="w-10 h-10 rounded-full bg-white shadow-[0_0_20px_white]" />
                <span className="absolute top-12 left-0 text-[10px] text-white">Phase III</span>
              </div>
            </div>

            {/* Data Table */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
               {[
                 { nm: "PentixaFor", ind: "Neuroendocrine Tumors", ph: "III", p: "85%", c: "cyan" },
                 { nm: "PentixaCheck", ind: "Prostate Cancer", ph: "II", p: "60%", c: "cyan" },
                 { nm: "PentixaTher", ind: "Glioblastoma", ph: "II", p: "45%", c: "violet" },
                 { nm: "PentixaPulse", ind: "Pancreatic Cancer", ph: "I", p: "25%", c: "violet" },
                 { nm: "PentixaPulse", ind: "Pancreatic Cancer", ph: "I", p: "15%", c: "violet" },
                 { nm: "PentixaFor", ind: "Prostate Cancer", ph: "III", p: "70%", c: "cyan" },
               ].map((item, i) => (
                 <div key={i} className={`glass-panel ${item.c === 'violet' ? 'glass-panel-violet' : ''} px-6 py-4 flex items-center justify-between group`}>
                   <div className="flex-1 min-w-0 pr-4">
                     <p className="font-semibold text-white text-sm">{item.nm}</p>
                     <p className="text-white/40 font-light text-xs truncate">{item.ind}</p>
                   </div>
                   <div className="w-12 text-center text-xs font-semibold px-2">
                     {item.ph}
                   </div>
                   <div className="flex-1 px-4">
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                         <div 
                           className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${
                             item.c === 'cyan' 
                               ? 'bg-gradient-to-r from-transparent to-[#00F2FF] shadow-[0_0_10px_#00F2FF]' 
                               : 'bg-gradient-to-r from-transparent to-[#7B61FF] shadow-[0_0_10px_#7B61FF]'
                           }`} 
                           style={{ width: item.p }} 
                         />
                      </div>
                   </div>
                   <div>
                     <button className={`text-[10px] font-semibold px-4 py-2 rounded-full border border-white/20 transition-all ${
                       item.c === 'cyan' ? 'hover:bg-[#00F2FF]/20 hover:text-[#00F2FF] hover:border-[#00F2FF]' : 'hover:bg-[#7B61FF]/20 hover:text-[#7B61FF] hover:border-[#7B61FF]'
                     }`}>
                       VIEW DATA
                     </button>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. LEADERSHIP ───────────────────────────────────────────────────── */}
      <section className="relative py-24 z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#7B61FF]/5 blur-[150px] rounded-full point-events-none" />
        
        <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-semibold mb-20">LEADERSHIP</h2>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {[
              { n: "Dr. Evelyn Reed", t: "CEO & Co-founder", e: "20+ years experience", img: "/molecular_interaction_cxcr4_1774918246066.png" }, // reusing hero img conceptually or just an abstract gradient as fallback since we don't have portrait images
              { n: "Erik Merten", t: "Chief Technology Officer", e: "15+ years experience", img: "/home_hero_dna_animated_png_1774941098595.png" },
              { n: "Dr. Sarah Lin", t: "Head of R&D", e: "Ph.D in Radiochemistry", img: "" },
              { n: "James Thorne", t: "Chief Medical Officer", e: "Oncology Specialist", img: "" },
            ].map((usr, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                {/* Circular Profile Card */}
                <div className="relative w-40 h-40 mb-6">
                   {/* Glowing Halo */}
                   <div className={`absolute inset-0 rounded-full blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                     i % 2 === 0 ? 'bg-[#00F2FF]' : 'bg-[#7B61FF]'
                   }`} />
                   <div className={`absolute inset-1 rounded-full border border-white/10 z-10 overflow-hidden bg-[#121428] flex items-center justify-center transition-transform group-hover:scale-105 duration-500`}>
                      {usr.img ? (
                        <div className="w-full h-full bg-white/5 bg-cover bg-center mix-blend-screen opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: `url(${usr.img})`}} />
                      ) : (
                        <ScanFace className="w-12 h-12 text-white/20" />
                      )}
                      
                   </div>
                   <div className="absolute inset-1 rounded-full border-2 border-transparent group-hover:border-white/20 z-20 transition-all" />
                </div>
                
                {/* Text Info */}
                <div className="glass-panel px-6 py-4 min-w-[200px] border-white/5 opacity-80 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                  <h4 className="text-white font-semibold text-lg">{usr.n}</h4>
                  <p className="text-[#00F2FF] text-xs font-semibold mb-1 uppercase tracking-wider">{usr.t}</p>
                  <p className="text-white/40 text-[10px]">{usr.e}</p>
                  <button className="mt-3 text-[10px] uppercase font-bold text-white/60 group-hover:text-white flex items-center justify-center w-full gap-1">
                    Learn More <ChevronIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT & GLOBAL REACH ────────────────────────────────────────── */}
      <section className="relative py-32 z-10 border-t border-white/5 bg-[#0a0b16]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-16 text-center lg:text-left">Contact & Partnerships</h2>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Contact Form */}
            <div className="glass-panel p-10 flex flex-col gap-6 relative overflow-hidden">
               <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#7B61FF]/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#00F2FF]/10 blur-[100px] rounded-full pointer-events-none" />
               
               <div className="grid grid-cols-2 gap-6 relative z-10">
                 <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00F2FF]/50 transition-colors placeholder:text-white/30" />
                 <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00F2FF]/50 transition-colors placeholder:text-white/30" />
               </div>
               <input type="text" placeholder="Subject" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00F2FF]/50 transition-colors placeholder:text-white/30 relative z-10" />
               <textarea placeholder="Message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00F2FF]/50 transition-colors placeholder:text-white/30 resize-none relative z-10" />
               
               <div className="flex justify-center mt-4 relative z-10">
                 <button className="btn-glass btn-cyan flex items-center gap-3 w-full sm:w-auto px-12 py-4 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                   <Send className="w-4 h-4" /> SEND MESSAGE
                 </button>
               </div>
            </div>

            {/* Interactive Globe / Network Map area */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
               <div className="absolute inset-0 bg-radial-gradient from-[#00F2FF]/5 to-transparent blur-3xl rounded-full scale-150 pointer-events-none" />
               
               {/* Globe Base */}
               <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full overflow-hidden shadow-[inset_0_0_60px_rgba(0,242,255,0.1)]">
                 {/* Longitude / Latitude lines simulated */}
                 {[...Array(6)].map((_, i) => (
                   <div key={`lon-${i}`} className="absolute top-0 left-0 w-full h-full border border-white/5 rounded-full" style={{ transform: `scaleX(${Math.max(0.1, i/6)})` }} />
                 ))}
                 {[...Array(6)].map((_, i) => (
                   <div key={`lat-${i}`} className="absolute top-0 left-0 w-full h-full border border-white/5 rounded-full" style={{ transform: `scaleY(${Math.max(0.1, i/6)})` }} />
                 ))}
               </div>

               {/* Globe Glow */}
               <div className="absolute w-[400px] h-[400px] rounded-full shadow-[0_0_80px_rgba(0,242,255,0.15)] pointer-events-none border border-[#00F2FF]/20" />

               {/* Connection Lines (SVGs overlay) */}
               <svg className="absolute w-[400px] h-[400px] pointer-events-none overflow-visible" viewBox="0 0 400 400">
                  <path d="M 120 180 Q 200 50 280 150" fill="none" stroke="rgba(0,242,255,0.4)" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 120 180 Q 200 300 320 250" fill="none" stroke="rgba(123,97,255,0.4)" strokeWidth="1.5" />
                  <path d="M 280 150 Q 300 200 320 250" fill="none" stroke="rgba(0,242,255,0.3)" strokeWidth="1" />
               </svg>

               {/* Pins */}
               <div className="absolute w-4 h-4 rounded-full bg-[#00F2FF] shadow-[0_0_15px_#00F2FF] z-10" style={{ top: '35%', left: '25%' }}>
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap">Global HQ</div>
               </div>
               
               <div className="absolute w-4 h-4 rounded-full bg-[#7B61FF] shadow-[0_0_15px_#7B61FF] z-10" style={{ top: '30%', left: '68%' }}>
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap">EU Operations</div>
               </div>
               
               <div className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white] z-10 animate-pulse" style={{ top: '60%', left: '78%' }}>
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-[#00F2FF] whitespace-nowrap font-bold">Partner Locations</div>
               </div>
            </div>

          </div>

          {/* Sub-cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="glass-panel p-6 flex items-start gap-4 hover:border-[#00F2FF]/30 transition-colors">
              <FlaskConical className="w-8 h-8 text-[#00F2FF]" />
              <div>
                <h4 className="text-sm font-semibold mb-2">R&D COLLABORATION</h4>
                <p className="text-xs text-white/50 mb-2">Explore the latest strategic advancements and cross-industry innovations.</p>
                <Link href="#" className="text-xs text-[#00F2FF] font-semibold hover:underline">LEARN MORE</Link>
              </div>
            </div>
            
            <div className="glass-panel glass-panel-violet p-6 flex items-start gap-4">
              <Cpu className="w-8 h-8 text-[#7B61FF]" />
              <div>
                <h4 className="text-sm font-semibold mb-2">CLINICAL SUPPLY</h4>
                <p className="text-xs text-white/50 mb-2">Secured isotope sourcing and production timelines worldwide.</p>
                <Link href="#" className="text-xs text-[#7B61FF] font-semibold hover:underline">LEARN MORE</Link>
              </div>
            </div>
            
            <div className="glass-panel p-6 flex items-start gap-4 hover:border-white/30 transition-colors">
              <MapPin className="w-8 h-8 text-yellow-500" />
              <div>
                <h4 className="text-sm font-semibold mb-2 text-yellow-500">COMMERCIALIZATION</h4>
                <p className="text-xs text-white/50 mb-2">Global deployment paths for therapeutic pipelines to main markets.</p>
                <Link href="#" className="text-xs text-yellow-500 font-semibold hover:underline">LEARN MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Simple internal icon helpers
const AtomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/>
  </svg>
)

const ChevronIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)
