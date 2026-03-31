"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { 
  ArrowRight, Activity, Beaker, ShieldCheck, Globe2, Zap, LayoutGrid, 
  Newspaper, TrendingUp, BarChart3, Microscope, Building2, ExternalLink, 
  Atom, Target, Play, Shield, FlaskConical, Network, Sparkles, 
  ChevronRight, Download, MousePointer2 
} from "lucide-react";
import HelixBackground from "@/components/visual/HelixBackground";
import AnimatedBackground from "@/components/visual/AnimatedBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.2 } } };

const HERO_BG = "biotech_hero_animated_bg_1774918228051.png";

const SEED_NEWS = [
  { id:1, date:"2026-03-31", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as Chief Technology Officer", excerpt:"Pentixapharm Holding AG strengthens its Executive Board to lead commercialisation readiness as the PANDA Phase 3 programme advances." },
  { id:2, date:"2026-02-25", cat:"Regulatory", title:'FDA Issues "Study May Proceed" for Dual Theranostic INDs', excerpt:"The U.S. FDA has cleared both PentixaFor and PentixaTher investigational new drug applications, enabling first U.S. clinical use." },
  { id:3, date:"2026-02-05", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior PET Diagnostic", excerpt:"Prospective study data confirm superior diagnostic performance over current gold standard in primary aldosteronism." },
];

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("common");
  const [news, setNews] = useState(SEED_NEWS);
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ptx_news") || "[]");
      if (saved.length > 0) setNews([...saved, ...SEED_NEWS].slice(0, 3));
    } catch {}
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#031835] overflow-hidden">
      
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom" alt="Hero Background" />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
           <HelixBackground />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-5xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-[#031835] px-10 py-4 rounded-full mb-14 shadow-[0_30px_60px_-15px_rgba(3,24,53,0.3)] group hover:bg-cyan transition-all cursor-default scale-110 origin-left border border-white/10">
              <div className="w-2.5 h-2.5 bg-teal rounded-full animate-pulse shadow-[0_0_12px_rgba(0,177,171,1)]" />
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] italic text-white group-hover:text-[#031835] transition-colors flex items-center gap-3">
                <FlaskConical className="w-3.5 h-3.5"/> PHASE III CLINICAL STRATEGY
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[6rem] md:text-[11rem] font-heading font-extrabold leading-[0.8] tracking-tighter mb-12 text-[#031835] drop-shadow-2xl italic">
              See What <br />
              <div className="relative inline-block overflow-hidden">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-teal to-cyan animate-gradient-x italic">You Treat.</span>
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                 />
              </div>
            </motion.h1>

            <motion.div variants={fadeUp} className="max-w-2xl relative mb-16 group">
               <div className="absolute -left-10 inset-y-0 w-1 bg-gradient-to-b from-cyan via-teal to-transparent" />
               <p className="text-xl md:text-4xl text-slate-600 leading-relaxed font-light italic pl-10 group-hover:pl-16 transition-all duration-700">
                  Precision discovery matched with targeted radio-therapeutic payload delivery. High specificity for CXCR4-expressing tumor clusters.
               </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-12 items-center">
              <Link href={`/${locale}/technology`} className="px-16 py-8 bg-[#031835] text-white rounded-full font-heading font-extrabold text-sm tracking-[0.4em] uppercase hover:bg-cyan hover:text-[#031835] transition-all shadow-3xl hover:-translate-y-3 flex items-center gap-8 group italic">
                 <Network className="w-6 h-6 text-cyan group-hover:text-[#031835]" /> EXPLORE PLATFORM
              </Link>
              <Link href={`/${locale}/pipeline`} className="flex items-center gap-6 group">
                 <div className="w-20 h-20 bg-white/50 backdrop-blur-xl border border-slate-200 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-all shadow-xl group-hover:bg-[#031835] group-hover:text-white">
                    <Target className="w-8 h-8 text-teal group-hover:text-cyan" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[12px] font-heading font-extrabold uppercase tracking-[0.4em] text-slate-400 group-hover:text-[#031835] transition-colors italic">Clinical Milestone</span>
                    <span className="text-xl font-heading font-extrabold text-[#031835] italic tracking-tight flex items-center gap-3">Roadmap 2026 <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" /></span>
                 </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Mouse Indicator */}
        <motion.div initial={{opacity:0}} animate={{opacity:0.4}} transition={{delay:2.5}} className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 cursor-pointer group">
           <span className="text-[9px] font-extrabold uppercase tracking-[0.6em] opacity-40 italic group-hover:opacity-100 transition-opacity">Discover Indication Clusters</span>
           <div className="w-8 h-12 border-2 border-[#031835]/30 rounded-full flex justify-center p-1 group-hover:border-[#031835] transition-colors">
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#031835] rounded-full" 
              />
           </div>
        </motion.div>
      </section>

      {/* ── STRATEGIC VISION / INVESTOR TICKET ──────────────────────────────── */}
      <section className="relative py-28 bg-[#031835] text-white overflow-hidden shadow-2xl">
         <AnimatedBackground />
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
               
               {/* Stock Ticket Visual */}
               <motion.div 
                initial={{opacity:0, scale:0.95}} 
                whileInView={{opacity:1, scale:1}}
                className="flex items-center gap-16 group cursor-pointer bg-white/5 p-10 rounded-[3rem] backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all shadow-3xl flex-1 max-w-xl"
               >
                  <div className="flex flex-col gap-2 items-end border-r border-white/10 pr-16 group-hover:border-cyan/40 transition-colors">
                     <span className="text-[11px] font-heading font-extrabold text-cyan uppercase tracking-[0.5em] italic mb-2 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full"><TrendingUp className="w-3.5 h-3.5"/> DEUTSCHE BÖRSE</span>
                     <span className="text-7xl font-heading font-extrabold tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:to-cyan transition-all">PTP.DE</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     <span className="text-[11px] font-heading font-extrabold text-teal uppercase tracking-[0.5em] italic mb-2 tracking-widest"><Shield className="w-3.5 h-3.5 inline mr-2"/> PRIME STANDARD</span>
                     <div className="flex flex-col">
                        <span className="text-2xl font-heading font-extrabold italic text-slate-300">Equity Value</span>
                        <span className="text-sm font-light text-cyan opacity-60">High-transparency listing requirements.</span>
                     </div>
                  </div>
               </motion.div>

               {/* Stat Highlights */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 flex-[2] border-l border-white/5 pl-16">
                  {[
                    { label: "IP Families", val: "12+", color: "text-white", icon: ShieldCheck },
                    { label: "Clinical Use", val: "2,600+", color: "text-teal", icon: Activity },
                    { label: "Sites", val: "Europe & US", color: "text-white", icon: Globe2 },
                    { label: "Addressable Market", val: "€2.4B+", color: "text-cyan", icon: BarChart3 }
                  ].map((stat, i) => (
                    <motion.div key={i} whileHover={{y:-8, scale:1.05}} className="flex flex-col group/stat">
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover/stat:bg-white/10 shadow-inner group-hover/stat:rotate-12 transition-transform">
                          <stat.icon className={`w-6 h-6 ${stat.color} opacity-80`} />
                       </div>
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 italic opacity-60 group-hover/stat:text-cyan transition-colors">{stat.label}</span>
                       <span className={`text-4xl font-heading font-extrabold italic tracking-tight ${stat.color}`}>{stat.val}</span>
                    </motion.div>
                  ))}
               </div>

               <Link href={`/${locale}/investors/portal`} className="group flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-cyan border-2 border-cyan shadow-[0_0_40px_rgba(0,177,171,0.4)] rounded-full flex items-center justify-center group-hover:bg-[#031835] transition-all transform group-hover:scale-110">
                    <Download className="w-8 h-8 text-[#031835] group-hover:text-cyan" />
                  </div>
                  <span className="text-[11px] font-heading font-extrabold text-white uppercase tracking-[0.4em] italic opacity-60">Investor Dossier</span>
               </Link>
            </div>
         </div>
      </section>

      {/* ── TECHNOLOGY / ACTION ─────────────────────────────────────────────── */}
      <section className="py-48 bg-white relative">
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-40 items-center">
               <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} className="relative group p-10">
                  <div className="absolute inset-0 bg-[#F8FAFD] rounded-[6rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan/5 to-transparent rounded-[6rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-[5rem] overflow-hidden shadow-2xl group-hover:shadow-[0_80px_160px_-40px_rgba(3,24,53,0.3)] transition-all duration-1000">
                     <img src="/molecular_interaction_cxcr4_1774918246066.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="CXCR4 Precision" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 p-14 bg-[#031835] text-white rounded-[4rem] shadow-4xl max-w-sm border border-white/10 group-hover:shadow-cyan/10 transition-all">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-cyan/10 flex items-center justify-center"><Atom className="w-6 h-6 text-cyan" /></div>
                        <p className="text-[10px] font-heading font-extrabold text-cyan uppercase tracking-[0.5em] italic">PLATFORM FOCUS</p>
                     </div>
                     <p className="text-sm font-light leading-loose italic text-slate-300">
                        Targeting the receptor dense CXCR4 over-expression in aggressive tumor micro-environments across oncology and cardiology.
                     </p>
                  </div>
               </motion.div>
               
               <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
                  <motion.div variants={fadeUp} className="inline-flex items-center gap-4 text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-12 italic border-b border-cyan/20 pb-4">
                     <Microscope className="w-4 h-4"/> MECHANISM OF ACTION
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="text-7xl md:text-[8rem] font-heading font-extrabold text-[#031835] leading-[0.8] mb-14 italic tracking-tighter">Diagnostic <br/><span className="text-teal">Precision</span> Hub</motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-600 text-2xl leading-relaxed mb-16 font-light italic max-w-xl">
                      We utilize isotope-labeled ligands that lock onto tumor receptors with extreme binding affinity, turning every MRI into a functional therapeutic map. 
                  </motion.p>
                  <div className="grid grid-cols-2 gap-16">
                     <motion.div variants={fadeUp} className="space-y-4 group">
                        <div className="w-20 h-20 rounded-[2.5rem] bg-[#031835] flex items-center justify-center shadow-2xl group-hover:bg-cyan transition-colors">
                           <ShieldCheck className="w-10 h-10 text-cyan group-hover:text-[#031835] transition-colors" />
                        </div>
                        <h4 className="text-2xl font-heading font-extrabold text-[#031835] italic uppercase tracking-tighter pt-4">Visual Validation</h4>
                        <p className="text-[13px] text-slate-500 font-light italic leading-relaxed">Ga-68 PET imaging to quantify receptor density and select responsive high-risk patients.</p>
                     </motion.div>
                     <motion.div variants={fadeUp} className="space-y-4 group">
                        <div className="w-20 h-20 rounded-[2.5rem] bg-teal/10 flex items-center justify-center shadow-xl group-hover:bg-teal transition-colors">
                           <Zap className="w-10 h-10 text-teal group-hover:text-white transition-colors animate-pulse" />
                        </div>
                        <h4 className="text-2xl font-heading font-extrabold text-teal italic uppercase tracking-tighter pt-4">Direct Eradication</h4>
                        <p className="text-[13px] text-slate-500 font-light italic leading-relaxed">Internal Alpha/Beta radiation delivery directly inside the metastatic tumor clusters.</p>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── PARTNERING CALL TO ACTION ───────────────────────────────────────── */}
      <section className="py-20 relative">
         <div className="container mx-auto px-6">
            <Link href={`/${locale}/partnering/licensing`} className="group flex flex-col md:flex-row items-center justify-between p-16 bg-[#F8FAFD] rounded-[4rem] border border-slate-100 hover:bg-[#031835] transition-all duration-700 shadow-xl gap-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-1000">
                  <Network className="w-96 h-96" />
               </div>
               <div className="max-w-3xl relative z-10">
                  <span className="text-teal group-hover:text-cyan font-heading font-extrabold text-xs tracking-[0.5em] uppercase mb-6 block italic transition-colors">Strategic Alliances</span>
                  <p className="text-5xl font-heading font-extrabold text-[#031835] group-hover:text-white leading-[1.1] italic tracking-tighter transition-colors">
                     Global Licensing Opportunities for <br/> <span className="text-teal group-hover:text-cyan">PANDA-3 Indicatons.</span>
                  </p>
               </div>
               <div className="relative z-10 scale-125 md:scale-100">
                  <div className="px-16 py-7 bg-[#031835] group-hover:bg-cyan text-white group-hover:text-[#031835] rounded-full font-heading font-extrabold text-xs uppercase tracking-[0.5em] italic transition-all flex items-center gap-6 shadow-3xl">
                     Licensing Hub <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform" />
                  </div>
               </div>
            </Link>
         </div>
      </section>

      {/* ── NEWS INTEL GRID ─────────────────────────────────────────────────── */}
      <section className="py-48 bg-[#F8FAFD] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
             <div className="max-w-3xl">
               <span className="text-cyan font-heading font-extrabold text-xs tracking-[0.6em] uppercase mb-8 block italic">Corporate Intelligence</span>
               <h2 className="text-6xl md:text-9xl font-heading font-extrabold text-[#031835] italic tracking-tighter leading-[0.8] mb-12">Latest <br/> <span className="text-teal underline decoration-cyan/20 decoration-8 underline-offset-10">Releases</span></h2>
               <p className="text-slate-500 text-2xl font-light italic leading-relaxed max-w-xl">Updates on clinical enrollment, regulatory filings, and board-level strategy shifts.</p>
             </div>
             <Link href={`/${locale}/news`} className="px-14 py-6 border-2 border-[#031835] rounded-full text-[11px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#031835] hover:text-white transition-all italic scale-110 shadow-xl group">
                Full Repository Archive <ArrowRight className="inline ml-4 group-hover:translate-x-3 transition-transform" />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-14">
            {news.map((item, i) => (
              <motion.article 
                key={item.id} 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: i*0.1}}
                whileHover={{y:-15}} 
                className="bg-white border border-slate-100 rounded-[5rem] p-14 hover:shadow-[0_80px_160px_-40px_rgba(3,24,53,0.2)] transition-all duration-700 group flex flex-col relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000"><Newspaper className="w-56 h-56" /></div>
                <div className="flex items-center justify-between mb-12 relative z-10">
                  <span className="text-[10px] font-heading font-extrabold px-6 py-2.5 rounded-full bg-[#F8FAFD] border border-slate-100 text-teal uppercase tracking-widest italic group-hover:bg-[#031835] group-hover:text-white transition-colors">{item.cat}</span>
                  <span className="text-[10px] font-bold text-slate-400 italic opacity-60 tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-3xl font-heading font-extrabold text-[#031835] leading-tight mb-10 group-hover:text-cyan transition-colors italic relative z-10 tracking-tighter">{item.title}</h3>
                
                <p className={"text-slate-500 text-sm leading-relaxed mb-14 font-light italic relative z-10 border-l-2 border-slate-50 group-hover:border-cyan/30 pl-6 transition-all duration-1000 " + (expandedNews === item.id ? "" : "line-clamp-3")}>
                   {item.excerpt}
                </p>

                <div className="mt-auto pt-12 border-t border-slate-50 flex items-center justify-between relative z-10">
                   <button 
                    onClick={() => setExpandedNews(expandedNews === item.id ? null : item.id)} 
                    className="text-[12px] font-heading font-extrabold text-[#031835] uppercase tracking-widest hover:text-cyan transition-all italic flex items-center gap-3 group/btn"
                   >
                      {expandedNews === item.id ? "Minimize Brief " : "Read Research Brief "} <ChevronRight className={`w-4 h-4 group-hover/btn:translate-x-3 transition-transform ${expandedNews === item.id ? "-rotate-90" : ""}`} />
                   </button>
                   <Link href={`/${locale}/news`} className="group/nav"><Activity className="w-6 h-6 text-slate-100 group-hover:text-teal group-hover/nav:scale-125 transition-all" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── GLOBAL CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="py-48 bg-[#031835] text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
         <AnimatedBackground />
         <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-4 text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.8em] mb-12 italic bg-white/5 px-10 py-4 rounded-full border border-white/10 shadow-3xl transform">
               <Globe2 className="w-4 h-4 animate-spin-slow" /> Global Clinical Headquarters
            </span>
            <h2 className="text-6xl md:text-[7rem] font-heading font-extrabold leading-[0.9] italic mb-16 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
               Engineering the <br/> <span className="text-cyan">Theranostic</span> Era.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
               <Link href={`/${locale}/contact`} className="px-16 py-8 bg-cyan text-[#031835] rounded-full font-heading font-extrabold text-sm uppercase tracking-[0.5em] hover:bg-white transition-all shadow-[0_0_80px_rgba(0,177,171,0.3)] italic transform hover:scale-110 flex items-center gap-6">
                  INITIATE DIALOGUE <ArrowRight className="w-5 h-5" />
               </Link>
               <Link href={`/${locale}/about`} className="text-[12px] font-heading font-extrabold uppercase tracking-[0.6em] text-white/50 hover:text-white transition-all border-b border-transparent hover:border-cyan pb-2 italic">
                  Meet the Board
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
