"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { BarChart3, TrendingUp, Download, PieChart, FileText, Globe2, Layers, Building2, ArrowUpRight, ShieldCheck, Activity, Calendar, ExternalLink, Briefcase, ChevronRight } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const HERO_BG = "investor_portal_bg_png_1774919885757.png";

export default function InvestorPortalPage() {
  const locale = useLocale();

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32 overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-56 pb-40 overflow-hidden bg-[#031835] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden scale-110 blur-[2px] opacity-60">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover animate-slow-zoom" alt="Investor Background" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#031835] via-[#031835]/50 to-transparent" />
           <div className="absolute inset-0 bg-[#031835]/40 backdrop-blur-sm" />
           <AnimatedBg />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.span variants={fadeUp} className="text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white/5 backdrop-blur-2xl px-12 py-4 rounded-full inline-block mb-12 border border-white/10 shadow-2xl italic">
               Institutional Investor Relations
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-7xl md:text-[8rem] font-heading font-extrabold mb-10 italic leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-cyan/30 drop-shadow-2xl">
              Investment <br /> <span className="text-cyan">Fact-Sheet</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-10 border-r-2 border-cyan/40">
              Corporate transparency, financial performance monitoring, and clinical milestone updates for Pentixapharm Holding AG.
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-12 pt-8 border-t border-white/10">
               <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_rgba(0,177,171,1)]" />
                  <p className="text-[10px] font-heading font-extrabold text-[#00B1AB] uppercase tracking-widest italic">Listed: Frankfurt (XETRA)</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white opacity-40" />
                  <p className="text-[10px] font-heading font-extrabold text-white/60 uppercase tracking-widest italic">Ticker: PTP.DE</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#00B1AB] opacity-40 shadow-[0_0_10px_rgba(0,177,171,1)]" />
                  <p className="text-[10px] font-heading font-extrabold text-cyan/70 uppercase tracking-widest italic">ISIN: DE000A40AEG0</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STOCK PERFORMANCE ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative z-20 shadow-2xl">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
               {[
                 { icon: TrendingUp, label: "Market Segment", val: "Prime Standard", color: "text-[#00B1AB]" },
                 { icon: PieChart, label: "Share Classification", val: "Common Stock", color: "text-cyan" },
                 { icon: BarChart3, label: "Post-IPO Capital", val: "€105M (Approx)", color: "text-[#031835]" },
                 { icon: Globe2, label: "Primary Listing", val: "Deutsch Börse", color: "text-emerald-500" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  initial={{opacity:0, y:20}}
                  whileHover={{y:-10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{delay: i*0.1}} 
                  className="p-12 rounded-[4rem] bg-[#F8FAFD] border border-slate-50 text-center group transition-all duration-500 hover:bg-white hover:shadow-3xl"
                 >
                    <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-12 group-hover:scale-110 transition-transform">
                       <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 italic opacity-60">{item.label}</p>
                    <p className="text-2xl font-heading font-extrabold text-[#031835] italic tracking-tight">{item.val}</p>
                 </motion.div>
               ))}
            </div>

            {/* NEW Share Price Graph Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-16 md:p-24 bg-[#031835] rounded-[5rem] shadow-4xl relative overflow-hidden group border border-white/5"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-[#031835] via-transparent to-cyan/10 opacity-40" />
               <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
                  <div>
                     <span className="text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-4 block italic">Live Market Dynamics</span>
                     <h2 className="text-5xl font-heading font-extrabold text-white italic tracking-tighter leading-none">Share Price Performance <span className="text-teal">(30D)</span></h2>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-full flex flex-col items-end">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 italic">Real-Time (XETRA)</span>
                        <span className="text-2xl font-heading font-extrabold text-cyan italic leading-none">€8.42 <TrendingUp className="inline w-5 h-5 ml-2 text-teal" /></span>
                     </div>
                  </div>
               </div>

               {/* Simulated SVG Graph */}
               <div className="h-64 relative mb-10">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                     <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#00B1AB" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#00B1AB" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                     {/* Area Path */}
                     <motion.path 
                       initial={{ d: "M 0 200 L 0 200 L 1000 200 L 1000 200 Z" }}
                       animate={{ d: "M 0 160 L 50 140 L 100 155 L 150 120 L 200 130 L 250 100 L 300 115 L 350 85 L 400 95 L 450 70 L 500 85 L 550 55 L 600 65 L 650 40 L 700 50 L 750 25 L 800 35 L 850 15 L 900 20 L 950 5 L 1000 10 L 1000 200 L 0 200 Z" }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                       fill="url(#chartGradient)" 
                     />
                     {/* Line Path */}
                     <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2.5, ease: "easeInOut" }}
                       d="M 0 160 L 50 140 L 100 155 L 150 120 L 200 130 L 250 100 L 300 115 L 350 85 L 400 95 L 450 70 L 500 85 L 550 55 L 600 65 L 650 40 L 700 50 L 750 25 L 800 35 L 850 15 L 900 20 L 950 5 L 1000 10" 
                       fill="none" 
                       stroke="#00B1AB" 
                       strokeWidth="4" 
                       strokeLinecap="round" 
                       strokeLinejoin="round"
                     />
                     {/* Dots for key points */}
                     <motion.circle initial={{scale:0}} animate={{scale:1}} transition={{delay:2.5}} cx="1000" cy="10" r="6" fill="#00B1AB" />
                  </svg>
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 border-b border-white/5 flex flex-col justify-between pointer-events-none opacity-20">
                     <div className="border-b border-white/5 w-full h-0" />
                     <div className="border-b border-white/5 w-full h-0" />
                     <div className="border-b border-white/5 w-full h-0" />
                  </div>
               </div>
               
               <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest italic opacity-60 relative z-10 px-4">
                  <span>Last 30 Tradings</span>
                  <span>Pentixapharm Prime Standard Performance</span>
                  <span>Q2 2026</span>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ── REPOSITORY ──────────────────────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFD] relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-24 items-start items-center">
               
               {/* Financial Resources List */}
               <div className="flex-1 space-y-16">
                  <div className="mb-14">
                     <span className="text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-6 block italic">Corporate Reporting</span>
                     <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#031835] italic tracking-tighter leading-tight">Digital <br/><span className="text-teal">Resources</span> Repository</h2>
                     <p className="text-slate-500 text-lg font-light italic leading-loose max-w-xl mt-8">
                        Centralized repository for all statutory reporting, financial results, and strategic company dossiers.
                     </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-10">
                     {[
                       { title: "Annual Report 2024", size: "3.4 MB", type: "PDF", link: "#" },
                       { title: "Quarterly Release Q3 2025", size: "1.2 MB", type: "PDF", link: "#" },
                       { title: "IPO Prospectus 2024", size: "8.9 MB", type: "PDF", link: "#" },
                       { title: "Investor Presentation", size: "5.7 MB", type: "PPTX", link: "#" }
                     ].map((doc, i) => (
                       <motion.button 
                        key={i} 
                        whileHover={{scale: 1.05}}
                        className="flex flex-col items-start p-12 bg-white border border-slate-100 rounded-[4rem] shadow-2xl hover:border-cyan/40 transition-all text-left group overflow-hidden relative"
                       >
                          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform"><FileText className="w-24 h-24" /></div>
                          <div className="w-12 h-12 bg-[#F8FAFD] rounded-full flex items-center justify-center mb-10 group-hover:bg-[#031835] group-hover:text-white transition-all transform group-hover:rotate-12 shadow-inner">
                            <Download className="w-5 h-5 text-slate-400 group-hover:text-cyan" />
                          </div>
                          <h4 className="text-2xl font-heading font-extrabold text-[#031835] mb-4 italic tracking-tight leading-snug">{doc.title}</h4>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-bold text-white bg-teal px-3 py-1 rounded-full">{doc.type}</span>
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{doc.size}</span>
                          </div>
                       </motion.button>
                     ))}
                  </div>
                  
                  <Link href={`/${locale}/news`} className="inline-flex items-center gap-6 px-12 py-5 border-2 border-[#031835] rounded-full text-[11px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#031835] hover:text-white transition-all italic scale-110 ml-8 shadow-xl">
                     Read Global Press Releases <ChevronRight className="w-5 h-5" />
                  </Link>
               </div>

               {/* Right Side: Fact-sheet Insight */}
               <div className="w-full lg:w-[460px] space-y-12">
                  <div className="bg-[#031835] text-white p-16 rounded-[5rem] shadow-[0_80px_160px_-40px_rgba(3,24,53,0.5)] relative overflow-hidden group border border-white/5">
                     <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform"><Activity className="w-64 h-64" /></div>
                     <span className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.5em] mb-12 block italic">Core Investment Values</span>
                     
                     <div className="space-y-12 relative z-10">
                        {[
                          { icon: ShieldCheck, title: "Clinical Derisked", val: "Lead diagnostic asset entering global Phase 3 enrollment with proven sensitivity across 2,600+ patients." },
                          { icon: Layers, title: "Platform Portfolio", val: "Highly differentiated portfolio covering both Ga-68 diagnostic imaging and Lu-177 therapeutic radiotherapy." },
                          { icon: Building2, title: "Financial Integrity", val: "Adhering to Frankfurt Prime Standard requirements, the most stringent transparency rules in Europe." }
                        ].map((v, i) => (
                           <div key={i} className="flex gap-8 items-start group/point">
                             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/point:bg-white/10 group-hover/point:scale-110 transition-all shadow-inner">
                               <v.icon className="w-6 h-6 text-cyan" />
                             </div>
                             <div className="space-y-2">
                               <h5 className="font-heading font-extrabold text-white text-lg italic tracking-tight">{v.title}</h5>
                               <p className="text-sm font-light italic text-slate-400 leading-relaxed">{v.val}</p>
                             </div>
                           </div>
                        ))}
                     </div>
                     
                      <button className="w-full mt-16 py-7 px-10 bg-cyan text-[#031835] font-heading font-extrabold rounded-full flex items-center justify-center gap-6 hover:bg-white transition-all shadow-3xl text-sm uppercase tracking-[0.3em] italic group/btn">
                        FULL CORPORATE DOSSIER <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-3 group-hover/btn:-translate-y-3 transition-transform" />
                     </button>
                  </div>

                  {/* IR Official */}
                  <div className="bg-white p-14 rounded-[5rem] border border-slate-100 shadow-[0_20px_60px_-20px_rgba(3,24,53,0.08)] relative overflow-hidden">
                     <div className="absolute bottom-[-2rem] right-[-2rem] p-10 opacity-[0.02] transform -rotate-12"><Briefcase className="w-48 h-48" /></div>
                     <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-8 block italic">Official Relations Lead</h4>
                     <div className="flex items-center gap-6 mb-10">
                        <div className="w-20 h-20 bg-[#031835] rounded-3xl flex items-center justify-center text-cyan font-heading font-extrabold text-2xl italic shadow-2xl">HK</div>
                        <div>
                           <p className="text-2xl font-heading font-extrabold text-[#031835] mb-1 italic tracking-tighter">Henner Kollenberg</p>
                           <p className="text-[10px] text-teal font-extrabold uppercase tracking-widest italic opacity-80">Chief Business Officer</p>
                        </div>
                     </div>
                     <a href="mailto:ir@pentixapharm.com" className="w-full py-5 bg-[#F8FAFD] border-2 border-[#031835]/5 rounded-full flex items-center justify-center gap-5 hover:bg-[#031835] hover:text-white transition-all text-sm font-bold shadow-sm">
                        ir@pentixapharm.com <ExternalLink className="w-4 h-4" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── FINANCIAL CALENDAR ───────────────────────────────────────────── */}
      <section className="py-40 bg-white border-t border-slate-100 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
         <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <span className="text-teal text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-6 block italic">Corporate Roadshow</span>
               <h3 className="text-5xl md:text-[5rem] font-heading font-extrabold text-[#031835] italic leading-none tracking-tighter">Financial <span className="text-cyan">Timeline</span> 2026</h3>
            </div>
            <div className="space-y-8">
               {[
                 { date: "May 20, 2026", month: "MAY", day: "20", event: "Q1 2026 Financial Release & Corporate Update", type: "Conference Call" },
                 { date: "June 15, 2026", month: "JUN", day: "15", event: "Annual General Meeting (Frankfurt)", type: "Presence Meeting" },
                 { date: "Aug 28, 2026", month: "AUG", day: "28", event: "Half-Year Report 2026 Publication", type: "Full Disclosure" },
                 { date: "Nov 14, 2026", month: "NOV", day: "14", event: "Q3 2026 Nine-Month Report", type: "Quarterly Brief" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  whileHover={{x: 20}}
                  className="flex flex-col md:flex-row md:items-center gap-10 p-12 bg-[#F8FAFD] border border-slate-100 rounded-[3.5rem] hover:bg-[#031835] group transition-all duration-500 shadow-xl"
                 >
                    <div className="shrink-0 flex items-center gap-8 border-r border-[#031835]/10 group-hover:border-white/10 pr-10">
                       <div className="flex flex-col items-center justify-center w-20 h-24 bg-white shadow-2xl rounded-3xl group-hover:bg-cyan transition-all transform group-hover:-rotate-3">
                          <span className="text-[10px] font-heading font-extrabold text-[#031835] italic opacity-40">{item.month}</span>
                          <span className="text-4xl font-heading font-extrabold text-[#031835] italic leading-none my-1 group-hover:scale-110 transition-transform">{item.day}</span>
                       </div>
                    </div>
                    <div className="flex-1">
                       <p className="text-[10px] font-bold text-slate-400 group-hover:text-cyan uppercase tracking-[0.4em] mb-4 italic transition-colors flex items-center gap-4"><Calendar className="w-3 h-3" /> {item.type}</p>
                       <p className="font-heading font-extrabold text-[#031835] group-hover:text-white text-3xl italic transition-colors leading-tight tracking-tight">{item.event}</p>
                    </div>
                    <Link href={`/${locale}/contact`} className="px-10 py-5 bg-white border border-[#031835]/10 rounded-full text-[10px] font-heading font-extrabold text-[#031835] uppercase tracking-widest hover:bg-cyan hover:border-cyan transition-all italic shadow-inner ml-auto group-hover:translate-x-[-10px] hidden lg:flex">
                       Register Interest
                    </Link>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
