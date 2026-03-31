"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { BarChart3, TrendingUp, Download, PieChart, FileText, Globe2, Layers, Building2, ArrowUpRight, ShieldCheck, Activity } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function InvestorPortalPage() {
  const locale = useLocale();

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#002A54] text-white">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-white/10 px-8 py-3 rounded-full inline-block mb-10 border border-white/20 italic">For Institutional & Retail Investors</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold mb-8 italic drop-shadow-2xl">Investor <span className="text-cyan">Fact-Sheet</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl leading-relaxed font-light italic max-w-3xl mx-auto mb-10">
              Real-time capital market monitoring, financial reporting, and the strategic roadmap of Pentixapharm Holding AG (PTP.DE).
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STOCK STATISTICS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-4 gap-10">
               {[
                 { icon: TrendingUp, label: "Ticker Symbol", val: "PTP.DE", color: "text-[#00B1AB]" },
                 { icon: PieChart, label: "Market Segment", val: "Prime Standard", color: "text-cyan" },
                 { icon: BarChart3, label: "IPO Valuation", val: "€105M (Post)", color: "text-navy" },
                 { icon: Globe2, label: "Primary Exchange", val: "Frankfurt (XETRA)", color: "text-emerald" }
               ].map((item, i) => (
                 <motion.div key={i} whileHover={{y:-5}} className="p-10 rounded-[3rem] bg-[#F8FAFD] border border-slate-50 text-center group transition-all">
                    <item.icon className={"w-10 h-10 " + item.color + " mx-auto mb-6"} />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic">{item.label}</p>
                    <p className="text-2xl font-heading font-extrabold text-[#002A54] italic">{item.val}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── FINANCIAL REPOSITORY ──────────────────────────────────────────── */}
      <section className="py-32">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
               {/* Left Side: Download Cards */}
               <div className="flex-1 space-y-10">
                  <div className="mb-10">
                     <span className="text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.3em] mb-4 block italic">Digital Library</span>
                     <h2 className="text-4xl font-heading font-extrabold text-[#002A54] italic mb-6">Financial <span className="text-teal">Resources</span></h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                     {[
                       { title: "Annual Report 2024", size: "3.4 MB", type: "PDF" },
                       { title: "Quarterly Release Q3 2025", size: "1.2 MB", type: "PDF" },
                       { title: "IPO Prospectus 2024", size: "8.9 MB", type: "PDF" },
                       { title: "Investor Presentation 2026", size: "5.7 MB", type: "PPTX" }
                     ].map((doc, i) => (
                       <button key={i} className="flex flex-col items-start p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl hover:border-cyan/40 transition-all text-left group">
                          <FileText className="w-10 h-10 text-slate-300 mb-8 group-hover:text-teal group-hover:scale-110 transition-all" />
                          <h4 className="text-xl font-heading font-extrabold text-[#002A54] mb-3 italic">{doc.title}</h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{doc.type} • {doc.size}</span>
                       </button>
                     ))}
                  </div>
               </div>

               {/* Right Side: Key Facts Column */}
               <div className="w-full lg:w-[400px] space-y-10">
                  <div className="bg-[#002A54] text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform"><Activity className="w-48 h-48" /></div>
                     <h3 className="text-sm font-heading font-extrabold uppercase tracking-[0.4em] mb-10 italic text-cyan">Investment Case</h3>
                     <div className="space-y-8 relative z-10">
                        <div className="flex gap-6 items-start">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><ShieldCheck className="w-5 h-5 text-cyan" /></div>
                           <p className="text-xs font-light tracking-wide italic text-slate-300 leading-relaxed"><span className="text-white font-bold">Phase 3 Ready:</span> Lead asset Pfor moving into pivotal trial stage for PA.</p>
                        </div>
                        <div className="flex gap-6 items-start">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Layers className="w-5 h-5 text-cyan" /></div>
                           <p className="text-xs font-light tracking-wide italic text-slate-300 leading-relaxed"><span className="text-white font-bold">First in-class:</span> Highly differentiated CXCR4/CD24 ligand platform portfolio.</p>
                        </div>
                        <div className="flex gap-6 items-start">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-cyan" /></div>
                           <p className="text-xs font-light tracking-wide italic text-slate-300 leading-relaxed"><span className="text-white font-bold">Prime Standard:</span> Highest transparency requirements in the EU equity markets.</p>
                        </div>
                     </div>
                     <button className="w-full mt-12 py-5 bg-white text-navy font-heading font-extrabold rounded-full flex items-center justify-center gap-3 hover:bg-cyan hover:text-navy transition-all shadow-2xl text-xs uppercase tracking-widest">
                        Company Presentation <Download className="w-4 h-4" />
                     </button>
                  </div>

                  <div className="bg-[#F8FAFD] p-12 rounded-[4rem] border border-slate-100 italic">
                     <h4 className="text-[10px] font-bold text-navy uppercase tracking-[0.4em] mb-6 block italic">IR Contact</h4>
                     <p className="text-xl font-heading font-extrabold text-[#002A54] mb-2 tracking-tighter">Henner Kollenberg</p>
                     <p className="text-sm text-slate-500 font-light mb-8">Chief Business Officer</p>
                     <a href="mailto:ir@pentixapharm.com" className="text-cyan font-bold border-b-2 border-cyan/20 pb-1 flex items-center gap-3 hover:gap-5 transition-all text-sm">
                        ir@pentixapharm.com <ArrowUpRight className="w-4 h-4" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── FINANCIAL CALENDAR ───────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
               <h3 className="text-3xl font-heading font-extrabold text-[#002A54] italic">Financial <span className="text-teal">Calendar</span></h3>
            </div>
            <div className="space-y-6">
               {[
                 { date: "May 20, 2026", event: "Q1 2026 Financial Release & Corporate Update" },
                 { date: "June 15, 2026", event: "Annual General Meeting (Frankfurt)" },
                 { date: "Aug 28, 2026", event: "Half-Year Report 2026 Publication" },
                 { date: "Nov 14, 2026", event: "Q3 2026 Nine-Month Report" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col md:flex-row md:items-center gap-10 p-10 bg-[#F8FAFD] border border-slate-50 rounded-[3rem] hover:border-cyan/30 transition-all group">
                    <div className="shrink-0 w-32">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Date</p>
                       <p className="font-heading font-extrabold text-teal group-hover:text-[#002A54] transition-colors">{item.date}</p>
                    </div>
                    <div className="flex-1">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Announcement</p>
                       <p className="font-heading font-extrabold text-[#002A54] text-xl italic">{item.event}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
