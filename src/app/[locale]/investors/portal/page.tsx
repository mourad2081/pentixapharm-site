"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { BarChart3, TrendingUp, Download, PieChart, FileText, Globe2, Layers, Building2, ArrowUpRight, ShieldCheck, Activity, Calendar, ExternalLink, Briefcase, ChevronRight } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const HERO_BG = "investor_portal_bg_png_1774919885757.png";

export default function InvestorPortalPage() {
  const locale = useLocale();

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-32 overflow-hidden selection:bg-[#00BDD5] selection:text-white">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-48 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover animate-slow-zoom grayscale" alt="Investor Background" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent" />
           <AnimatedBg />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full mb-12 border border-slate-100 shadow-xl italic mt-10">
               Institutional Investor Relations
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold mb-12 leading-[0.75] tracking-tighter text-[#001533] italic drop-shadow-sm">
              Investment <br /> <span className="text-[#00BDD5] underline decoration-[#00BDD5]/10 underline-offset-10 px-4">Fact-Sheet.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              Corporate transparency, financial performance monitoring, and clinical milestone updates for Pentixapharm Holding AG.
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-12 pt-8 border-t border-slate-100 max-w-3xl mx-auto">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#00BDD5] animate-pulse shadow-2xl" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Listed: Frankfurt (XETRA)</p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Ticker: PTP.DE</p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">ISIN: DE000A40AEG0</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STOCK PERFORMANCE & STATS ───────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFC]">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-12 mb-24">
               {[
                 { icon: TrendingUp, label: "Market Segment", val: "Prime Standard", color: "text-[#00BDD5]" },
                 { icon: PieChart, label: "Shares Outstanding", val: "Common Stock", color: "text-[#00BDD5]" },
                 { icon: BarChart3, label: "Post-IPO Capital", val: "€105M (Approx)", color: "text-[#001533]" },
                 { icon: Globe2, label: "Primary Exchange", val: "Deutsch Börse", color: "text-emerald-500" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  whileHover={{y:-10}}
                  className="p-12 rounded-[4rem] bg-white border border-slate-100 text-center group transition-all duration-700 hover:shadow-3xl"
                 >
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-10 group-hover:bg-[#001533] group-hover:rotate-12 transition-all shadow-inner">
                       <item.icon className={`w-8 h-8 ${item.color} group-hover:text-white`} />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 italic opacity-60">{item.label}</p>
                    <p className="text-2xl font-heading font-extrabold text-[#001533] italic tracking-tight">{item.val}</p>
                 </motion.div>
               ))}
            </div>

            {/* Simulated Live Performance Block */}
            <motion.div 
              className="p-16 md:p-24 bg-[#001533] rounded-[6rem] shadow-4xl relative overflow-hidden group border border-white/5"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-[#001533] via-[#00BDD5]/5 to-transparent opacity-40 z-0" />
               <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
                  <div>
                     <span className="text-[#00BDD5] text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-4 block italic">Consolidated Dynamics</span>
                     <h2 className="text-5xl font-heading font-extrabold text-white italic tracking-tighter leading-none">Share Price Velocity <span className="text-[#00BDD5]">(30D)</span></h2>
                  </div>
                  <div className="px-10 py-6 bg-white/5 border border-white/10 rounded-[3rem] text-right backdrop-blur-3xl">
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 italic block">Current XETRA Quote</span>
                     <span className="text-4xl font-heading font-extrabold text-[#00BDD5] italic leading-none">€8.42 <TrendingUp className="inline w-6 h-6 ml-2 text-[#00BDD5] animate-bounce" /></span>
                  </div>
               </div>

               {/* Area Graph Visual */}
               <div className="h-64 relative mb-12">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                     <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#00BDD5" stopOpacity="0.3" />
                           <stop offset="100%" stopColor="#00BDD5" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                     <path d="M 0 160 L 50 140 L 100 155 L 150 120 L 200 130 L 250 100 L 300 115 L 350 85 L 400 95 L 450 70 L 500 85 L 550 55 L 600 65 L 650 40 L 700 50 L 750 25 L 800 35 L 850 15 L 900 20 L 950 5 L 1000 10 L 1000 200 L 0 200 Z" fill="url(#chartGradient)" />
                     <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2.5, ease: "easeInOut" }}
                       d="M 0 160 L 50 140 L 100 155 L 150 120 L 200 130 L 250 100 L 300 115 L 350 85 L 400 95 L 450 70 L 500 85 L 550 55 L 600 65 L 650 40 L 700 50 L 750 25 L 800 35 L 850 15 L 900 20 L 950 5 L 1000 10" 
                       fill="none" 
                       stroke="#00BDD5" 
                       strokeWidth="4" 
                       strokeLinecap="round" 
                     />
                  </svg>
               </div>
               
               <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-widest italic opacity-40 px-8">
                  <span>PTP (XETRA) 30-Day Trend</span>
                  <span>Pentixapharm Holding AG</span>
                  <span>Institutional Maturity Level</span>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ── REPOSITORY ──────────────────────────────────────────────────────── */}
      <section className="py-48 bg-white border-y border-slate-100 relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-32 items-center">
            
            <div className="flex-1">
               <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.8em] mb-8 block italic">Official Documentation</span>
               <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] italic leading-[0.8] tracking-tighter mb-12">Clinical & Digital <br/><span className="text-[#00BDD5]">Repository.</span></h2>
               <p className="text-slate-500 text-2xl font-light italic leading-relaxed max-w-2xl mb-16">
                  Access statutory reporting, quarterly results, and strategic dossiers sanctioned by the executive board.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: "Annual Report 24", size: "3.4 MB", type: "PDF" },
                    { title: "IPO Prospectus", size: "8.9 MB", type: "PDF" },
                    { title: "Presentation Q1", size: "5.7 MB", type: "PPTX" },
                    { title: "Milestone Map", size: "1.1 MB", type: "PDF" }
                  ].map((doc, i) => (
                    <motion.button 
                      key={i} 
                      whileHover={{ scale: 1.05 }}
                      className="p-10 bg-slate-50 border border-slate-100 rounded-[3.5rem] flex flex-col items-start gap-6 hover:bg-[#001533] group transition-all text-left shadow-xl"
                    >
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#00BDD5] transition-all">
                          <Download className="w-5 h-5 text-slate-400 group-hover:text-white" />
                       </div>
                       <h4 className="text-xl font-heading font-extrabold text-[#001533] group-hover:text-white italic tracking-tight uppercase leading-none">{doc.title}</h4>
                       <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.size} • {doc.type}</span>
                    </motion.button>
                  ))}
               </div>
            </div>

            <div className="w-full lg:w-[480px]">
               <div className="bg-[#001533] p-16 rounded-[6rem] shadow-4xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform"><Activity className="w-64 h-64" /></div>
                  <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] mb-12 block italic">Core Investment Values</span>
                  
                  <div className="space-y-12 relative z-10">
                     {[
                        { title: "Clinical Derisked", val: "Lead diagnostic entering Phase 3 with global enrollment data." },
                        { title: "Integrated Supply", val: "Just-in-time logistics infrastructure for radioisotope delivery." },
                        { title: "Prime Transparency", val: "Frankfurt Prime Standard governance and maturity." }
                     ].map((v, i) => (
                        <div key={i} className="flex gap-8 group/item">
                           <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover/item:border-[#00BDD5] transition-all">
                              <ShieldCheck className="w-6 h-6 text-[#00BDD5]" />
                           </div>
                           <div className="space-y-2">
                              <h5 className="font-heading font-extrabold text-white text-xl italic tracking-tight">{v.title}</h5>
                              <p className="text-sm font-light italic text-slate-400 leading-relaxed">{v.val}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <Link href={`/${locale}/contact`} className="w-full mt-16 py-8 px-10 bg-[#00BDD5] text-[#001533] font-heading font-extrabold rounded-full flex items-center justify-center gap-6 hover:bg-white transition-all shadow-3xl text-[11px] uppercase tracking-[0.5em] italic">
                     REQUEST ACCESS <ArrowUpRight className="w-6 h-6" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* ── FINANCIAL CALENDAR ───────────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFC]">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-32">
               <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[1em] mb-8 block italic">Corporate Roadshow</span>
               <h3 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] italic leading-[0.8] tracking-tighter">Event <br/><span className="text-[#00BDD5]">Timeline.</span></h3>
            </div>
            <div className="space-y-8">
               {[
                 { date: "May 20, 26", m: "MAY", d: "20", event: "Q1 Financial Results Disclosure", t: "Conference Call" },
                 { date: "Jun 15, 26", m: "JUN", d: "15", event: "Annual General Meeting 2026", t: "Frankfurt / Live" },
                 { date: "Aug 28, 26", m: "AUG", d: "28", event: "Half-Year Report Publication", t: "Institutional Disclosure" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  whileHover={{ x: 30 }}
                  className="flex flex-col md:flex-row items-center gap-12 p-12 bg-white border border-slate-100 rounded-[4rem] hover:bg-[#001533] group transition-all duration-700 shadow-xl"
                 >
                    <div className="flex flex-col items-center justify-center w-24 h-28 bg-slate-50 rounded-3xl group-hover:bg-[#00BDD5] transition-all transform group-hover:rotate-6">
                       <span className="text-[10px] font-heading font-extrabold text-[#001533] italic opacity-40 group-hover:text-white">{item.m}</span>
                       <span className="text-4xl font-heading font-extrabold text-[#001533] italic group-hover:text-white leading-none mt-2">{item.d}</span>
                    </div>
                    <div className="flex-1">
                       <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#00BDD5] uppercase tracking-[0.5em] mb-4 block italic flex items-center gap-4">
                          <Calendar className="w-3 h-3" /> {item.t}
                       </span>
                       <h4 className="font-heading font-extrabold text-[#001533] group-hover:text-white text-3xl italic tracking-tight leading-none">{item.event}</h4>
                    </div>
                    <button className="px-10 py-5 border border-slate-100 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest text-slate-400 group-hover:bg-[#00BDD5] group-hover:text-white group-hover:border-[#00BDD5] transition-all italic">Register</button>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
