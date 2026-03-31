"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { BarChart3, TrendingUp, Download, PieChart, FileText, Globe2, Layers, Building2, ArrowUpRight, ShieldCheck, Activity, Calendar, ExternalLink, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function InvestorPortalPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen text-white pb-32 pt-24 overflow-hidden selection:bg-[#00F2FF]/30 selection:text-white">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F2FF]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.4em] bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-10 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
               Institutional Investor Relations
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-semibold mb-8 leading-none tracking-tighter text-white drop-shadow-sm">
              Investment <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#7B61FF]">Fact-Sheet.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-16 px-12">
              Corporate transparency, financial performance monitoring, and clinical milestone updates for Pentixapharm Holding AG.
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-10 pt-8 border-t border-white/10 max-w-3xl mx-auto">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse shadow-[0_0_10px_#00F2FF]" />
                  <p className="text-[10px] font-heading font-semibold text-white/50 uppercase tracking-widest">Listed: Frankfurt (XETRA)</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <p className="text-[10px] font-heading font-semibold text-white/50 uppercase tracking-widest">Ticker: PTP.DE</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <p className="text-[10px] font-heading font-semibold text-white/50 uppercase tracking-widest">ISIN: DE000A40AEG0</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STOCK PERFORMANCE & STATS ───────────────────────────────────────── */}
      <section className="py-24 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-8 mb-24">
               {[
                 { icon: TrendingUp, label: "Market Segment", val: "Prime Standard", color: "text-[#00F2FF]" },
                 { icon: PieChart, label: "Shares Outstanding", val: "Common Stock", color: "text-[#00F2FF]" },
                 { icon: BarChart3, label: "Post-IPO Capital", val: "€105M (Approx)", color: "text-[#7B61FF]" },
                 { icon: Globe2, label: "Primary Exchange", val: "Deutsch Börse", color: "text-[#00F2FF]" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  whileHover={{y:-6}}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group transition-all hover:bg-white/10"
                 >
                    <div className="w-16 h-16 rounded-2xl bg-[#00F2FF]/10 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-[#00F2FF]/30 transition-all">
                       <item.icon className={`w-8 h-8 ${item.color} drop-shadow-[0_0_10px_currentColor]`} />
                    </div>
                    <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-xl font-heading font-semibold text-white tracking-tight">{item.val}</p>
                 </motion.div>
               ))}
            </div>

            {/* Simulated Live Performance Block */}
            <motion.div className="p-10 md:p-16 glass-panel rounded-[3rem] shadow-4xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-radial-gradient from-[#00F2FF]/10 via-transparent to-transparent opacity-40 z-0" />
               <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
                  <div>
                     <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.4em] mb-4 block">Consolidated Dynamics</span>
                     <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tighter leading-none">Share Price Velocity <span className="text-[#00F2FF]">(30D)</span></h2>
                  </div>
                  <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-right backdrop-blur-md">
                     <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-1 block">Current XETRA Quote</span>
                     <span className="text-3xl font-heading font-semibold text-[#00F2FF] leading-none">€8.42 <TrendingUp className="inline w-5 h-5 ml-2 text-[#00F2FF] animate-bounce" /></span>
                  </div>
               </div>

               {/* Area Graph Visual */}
               <div className="h-64 relative mb-10">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                     <defs>
                        <linearGradient id="chartGradientInv" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.3" />
                           <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                     <path d="M 0 160 L 50 140 L 100 155 L 150 120 L 200 130 L 250 100 L 300 115 L 350 85 L 400 95 L 450 70 L 500 85 L 550 55 L 600 65 L 650 40 L 700 50 L 750 25 L 800 35 L 850 15 L 900 20 L 950 5 L 1000 10 L 1000 200 L 0 200 Z" fill="url(#chartGradientInv)" />
                     <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2.5, ease: "easeInOut" }}
                       d="M 0 160 L 50 140 L 100 155 L 150 120 L 200 130 L 250 100 L 300 115 L 350 85 L 400 95 L 450 70 L 500 85 L 550 55 L 600 65 L 650 40 L 700 50 L 750 25 L 800 35 L 850 15 L 900 20 L 950 5 L 1000 10" 
                       fill="none" 
                       stroke="#00F2FF" 
                       strokeWidth="4" 
                       strokeLinecap="round" 
                     />
                  </svg>
               </div>
               
               <div className="flex flex-col sm:flex-row justify-between text-[10px] font-semibold text-white/40 uppercase tracking-widest opacity-80 gap-4">
                  <span>PTP (XETRA) 30-Day Trend</span>
                  <span>Pentixapharm Holding AG</span>
                  <span>Institutional Maturity Level</span>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ── REPOSITORY ──────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="flex-1">
               <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.5em] mb-6 block">Official Documentation</span>
               <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white leading-[1.1] tracking-tighter mb-8">Clinical & Digital <br/><span className="text-[#00F2FF]">Repository.</span></h2>
               <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mb-12">
                  Access statutory reporting, quarterly results, and strategic dossiers sanctioned by the executive board.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Annual Report 24", size: "3.4 MB", type: "PDF" },
                    { title: "IPO Prospectus", size: "8.9 MB", type: "PDF" },
                    { title: "Presentation Q1", size: "5.7 MB", type: "PPTX" },
                    { title: "Milestone Map", size: "1.1 MB", type: "PDF" }
                  ].map((doc, i) => (
                    <motion.button 
                      key={i} 
                      whileHover={{ scale: 1.02 }}
                      className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-start gap-4 hover:border-[#00F2FF]/30 hover:bg-white/10 transition-all text-left shadow-lg group"
                    >
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 group-hover:border-[#00F2FF]/40 transition-colors">
                          <Download className="w-5 h-5 text-[#00F2FF] group-hover:text-white" />
                       </div>
                       <h4 className="text-lg font-heading font-semibold text-white tracking-tight uppercase leading-none">{doc.title}</h4>
                       <span className="text-[10px] text-white/50 font-semibold uppercase tracking-widest">{doc.size} • {doc.type}</span>
                    </motion.button>
                  ))}
               </div>
            </div>

            <div className="w-full lg:w-[480px]">
               <div className="bg-[#7B61FF]/10 p-12 rounded-[3.5rem] text-white relative overflow-hidden border border-[#7B61FF]/20 group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform"><Activity className="w-48 h-48 text-[#7B61FF]" /></div>
                  <span className="text-[#7B61FF] text-[10px] font-heading font-semibold uppercase tracking-[0.4em] mb-10 block">Core Investment Values</span>
                  
                  <div className="space-y-8 relative z-10">
                     {[
                        { title: "Clinical Derisked", val: "Lead diagnostic entering Phase 3 with global enrollment data." },
                        { title: "Integrated Supply", val: "Just-in-time logistics infrastructure for radioisotope delivery." },
                        { title: "Prime Transparency", val: "Frankfurt Prime Standard governance and maturity." }
                     ].map((v, i) => (
                        <div key={i} className="flex gap-6 group/item">
                           <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover/item:border-[#7B61FF]/40 transition-all">
                              <ShieldCheck className="w-6 h-6 text-[#7B61FF]" />
                           </div>
                           <div className="space-y-1">
                              <h5 className="font-heading font-semibold text-white text-lg tracking-tight">{v.title}</h5>
                              <p className="text-xs font-light text-white/60 leading-relaxed">{v.val}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <Link href={`/${locale}/contact`} className="w-full mt-12 py-5 px-8 bg-[#7B61FF] text-white font-heading font-semibold rounded-full flex items-center justify-center gap-4 hover:bg-[#00F2FF] hover:text-[#0a0b16] transition-all shadow-[0_0_20px_rgba(123,97,255,0.4)] text-[10px] uppercase tracking-widest">
                     REQUEST ACCESS <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* ── FINANCIAL CALENDAR ───────────────────────────────────────────── */}
      <section className="py-24 bg-white/5 border-t border-white/10">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-20">
               <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.5em] mb-6 block">Corporate Roadshow</span>
               <h3 className="text-4xl md:text-6xl font-heading font-semibold text-white leading-[1.1] tracking-tighter">Event <span className="text-[#00F2FF]">Timeline.</span></h3>
            </div>
            <div className="space-y-6">
               {[
                 { date: "May 20, 26", m: "MAY", d: "20", event: "Q1 Financial Results Disclosure", t: "Conference Call" },
                 { date: "Jun 15, 26", m: "JUN", d: "15", event: "Annual General Meeting 2026", t: "Frankfurt / Live" },
                 { date: "Aug 28, 26", m: "AUG", d: "28", event: "Half-Year Report Publication", t: "Institutional Disclosure" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#00F2FF]/30 group transition-all duration-300"
                 >
                    <div className="flex flex-col items-center justify-center w-20 h-24 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#00F2FF]/30 transition-all">
                       <span className="text-[10px] font-heading font-semibold text-white/40 group-hover:text-[#00F2FF]">{item.m}</span>
                       <span className="text-3xl font-heading font-semibold text-white leading-none mt-2">{item.d}</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                       <span className="text-[10px] font-semibold text-white/40 group-hover:text-[#00F2FF] uppercase tracking-widest mb-3 block flex items-center justify-center md:justify-start gap-3">
                          <Calendar className="w-3 h-3" /> {item.t}
                       </span>
                       <h4 className="font-heading font-semibold text-white text-2xl tracking-tight leading-none">{item.event}</h4>
                    </div>
                    <button className="px-8 py-4 border border-white/20 rounded-full text-[10px] font-heading font-semibold uppercase tracking-widest text-white hover:bg-[#00F2FF] hover:text-[#0a0b16] hover:border-[#00F2FF] transition-all">Register</button>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
