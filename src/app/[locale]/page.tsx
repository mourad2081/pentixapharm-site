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

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const HERO_BG = "home_hero_dna_animated_png_1774941098595.png";

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
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white overflow-hidden selection:bg-[#00BDD5] selection:text-white transition-colors duration-700">
      
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[105vh] flex items-center pt-32 px-6 bg-white dark:bg-[#0a0b16] overflow-hidden transition-colors duration-700">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-700">
           <motion.img 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1.25 }}
             transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
             src={`/${HERO_BG}`} 
             className="w-full h-full object-cover" 
             alt="Hero Background" 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#0a0b16] via-white/40 dark:via-[#0a0b16]/60 to-[#F8FAFC] dark:to-[#0a0b16] transition-colors duration-700" />
           <HelixBackground />
           <AnimatedBackground />
        </div>
        
        {/* Night Mode Magic Glows */}
        <div className="absolute top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-[#00BDD5]/5 dark:bg-[#00BDD5]/20 rounded-full blur-[160px] pointer-events-none transition-colors duration-1000" />
        <div className="absolute bottom-0 -left-1/4 w-[60vw] h-[60vw] bg-indigo-500/5 dark:bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none transition-colors duration-1000" />

        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-6xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-white dark:bg-white/10 px-8 py-3 rounded-full mb-12 shadow-[0_20px_50px_rgba(0,21,51,0.08)] group hover:shadow-cyan/20 transition-all cursor-default border border-slate-100 dark:border-white/10 backdrop-blur-xl">
              <div className="w-2 h-2 bg-[#00BDD5] rounded-full animate-pulse shadow-[0_0_12px_rgba(0,189,213,1)]" />
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.5em] italic text-[#001533] dark:text-white transition-colors flex items-center gap-3">
                <FlaskConical className="w-3.5 h-3.5 text-[#00BDD5]"/> PHASE III CLINICAL STRATEGY
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold leading-[0.75] tracking-tighter mb-14 text-[#001533] dark:text-white italic transition-colors">
              See What <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001533] dark:from-white via-[#00BDD5] to-[#001533] dark:to-white animate-gradient-x italic">You Treat.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="max-w-3xl relative mb-16">
               <p className="text-2xl md:text-5xl text-slate-500 dark:text-slate-300 leading-[1.05] font-light italic tracking-tight transition-colors">
                  Precision discovery matched with <br/><span className="text-[#001533] dark:text-white font-extrabold transition-colors">therapeutic payload delivery.</span>
               </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 items-center">
              <Link href={`/${locale}/technology`} className="px-16 py-8 bg-[#001533] dark:bg-[#00BDD5] text-white dark:text-[#001533] rounded-2xl font-heading font-extrabold text-[12px] tracking-[0.4em] uppercase hover:bg-[#00BDD5] dark:hover:bg-white transition-all shadow-2xl hover:-translate-y-2 flex items-center gap-8 italic">
                 <Network className="w-6 h-6" /> EXPLORE PLATFORM
              </Link>
              <Link href={`/${locale}/pipeline`} className="flex items-center gap-6 group px-10 py-6 hover:bg-slate-50 dark:hover:bg-white/5 rounded-3xl transition-all">
                 <div className="w-16 h-16 bg-white dark:bg-[#121428] border border-slate-100 dark:border-white/10 shadow-xl rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all group-hover:border-[#00BDD5]">
                    <Target className="w-7 h-7 text-[#00BDD5]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-400 italic">Target Insight</span>
                    <span className="text-xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tight flex items-center gap-3 underline decoration-[#00BDD5]/20 underline-offset-8 group-hover:decoration-[#00BDD5] transition-colors">Pipeline 2026 <ChevronRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" /></span>
                 </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STRATEGIC VISION / INVESTOR TICKET ──────────────────────────────── */}
      <section className="relative py-32 bg-white dark:bg-[#121428] border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-700">
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
               {/* Stock Ticket Visual */}
               <motion.div 
                initial={{opacity:0, y:20}} 
                whileInView={{opacity:1, y:0}}
                className="flex items-center gap-12 group cursor-pointer bg-slate-50/50 dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-[#1a1c35] hover:shadow-2xl dark:hover:shadow-[#00BDD5]/10 transition-all flex-1 max-w-xl"
               >
                  <div className="flex flex-col gap-2 items-end border-r border-slate-200 dark:border-white/10 pr-12 transition-colors">
                     <span className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-[0.5em] italic mb-2">DEUTSCHE BÖRSE</span>
                     <span className="text-6xl font-heading font-extrabold tracking-tighter italic text-[#001533] dark:text-white transition-colors">PTP.DE</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     <span className="text-[10px] font-heading font-extrabold text-[#00BDD5] uppercase tracking-[0.5em] italic mb-2 tracking-widest">PRIME STANDARD</span>
                     <div className="flex flex-col">
                        <span className="text-2xl font-heading font-extrabold italic text-slate-600 dark:text-slate-300 transition-colors">Equity Value</span>
                        <span className="text-sm font-light text-slate-400">High-transparency listing.</span>
                     </div>
                  </div>
               </motion.div>

               {/* Stat Highlights */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 flex-[2] border-l border-slate-100 dark:border-white/10 pl-16 transition-colors">
                  {[
                    { label: "IP Families", val: "12+", color: "text-[#001533] dark:text-white", icon: ShieldCheck },
                    { label: "Clinical Use", val: "2,600+", color: "text-[#00BDD5]", icon: Activity },
                    { label: "Markets", val: "EU & US", color: "text-[#001533] dark:text-white", icon: Globe2 },
                    { label: "Potential", val: "€2.4B+", color: "text-[#00BDD5]", icon: BarChart3 }
                  ].map((stat, i) => (
                    <motion.div key={i} whileHover={{y:-5}} className="flex flex-col group/stat">
                       <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-colors">
                          <stat.icon className={`w-6 h-6 ${stat.color} transition-colors`} />
                       </div>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic opacity-60">{stat.label}</span>
                       <span className={`text-4xl font-heading font-extrabold italic tracking-tight ${stat.color} transition-colors`}>{stat.val}</span>
                    </motion.div>
                  ))}
               </div>

               <Link href={`/${locale}/investors/portal`} className="group flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-[#001533] dark:bg-white/10 shadow-xl rounded-full flex items-center justify-center group-hover:bg-[#00BDD5] dark:group-hover:bg-[#00BDD5] transition-all transform group-hover:scale-110 border border-transparent dark:border-white/20">
                    <Download className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-[0.4em] italic">Investor Kit</span>
               </Link>
            </div>
         </div>
      </section>

      {/* ── TECHNOLOGY SECTION ─────────────────────────────────────────────── */}
      <section className="py-48 bg-[#F8FAFC] dark:bg-[#0a0b16] relative transition-colors duration-700">
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-40 items-center">
               <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} className="relative group p-10">
                  <div className="absolute inset-0 bg-white dark:bg-[#121428] rounded-[6rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-xl dark:shadow-[#00BDD5]/5 border dark:border-white/10" />
                  <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/10">
                     <img src="/molecular_interaction_cxcr4_1774918246066.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 dark:brightness-110" alt="CXCR4 Precision" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 p-14 bg-white dark:bg-[#121428] border border-slate-200 dark:border-white/10 rounded-[4rem] shadow-2xl max-w-sm transition-colors">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-cyan/10 flex items-center justify-center"><Atom className="w-6 h-6 text-[#00BDD5]" /></div>
                        <p className="text-[10px] font-heading font-extrabold text-[#00BDD5] uppercase tracking-[0.5em] italic">PLATFORM FOCUS</p>
                     </div>
                     <p className="text-sm font-light leading-loose italic text-slate-500 dark:text-slate-300">
                        Targeting the receptor dense CXCR4 over-expression in aggressive tumor micro-environments across oncology and cardiology.
                     </p>
                  </div>
               </motion.div>
               
               <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
                  <motion.div variants={fadeUp} className="inline-flex items-center gap-4 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] mb-12 italic border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
                     <Microscope className="w-4 h-4"/> MECHANISM OF ACTION
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] dark:text-white leading-[0.8] mb-14 italic tracking-tighter transition-colors">Diagnostic <br/><span className="text-[#00BDD5]">Precision</span> Hub</motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-16 font-light italic max-w-xl transition-colors">
                      Utilizing isotope-labeled ligands that lock onto tumor receptors with extreme binding affinity, transforming every MRI into a functional therapeutic map. 
                  </motion.p>
                  <div className="grid grid-cols-2 gap-16">
                     <motion.div variants={fadeUp} className="space-y-4 group">
                        <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-[#121428] border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:bg-[#00BDD5] transition-all">
                           <ShieldCheck className="w-9 h-9 text-[#00BDD5] group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="text-2xl font-heading font-extrabold text-[#001533] dark:text-white italic uppercase tracking-tighter pt-4 transition-colors">Visual Validation</h4>
                        <p className="text-[13px] text-slate-400 font-light italic leading-relaxed">Ga-68 PET imaging to quantify receptor density and select responsive high-risk patients.</p>
                     </motion.div>
                     <motion.div variants={fadeUp} className="space-y-4 group">
                        <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-[#121428] border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:bg-[#001533] dark:group-hover:bg-white transition-all">
                           <Zap className="w-9 h-9 text-[#00BDD5] group-hover:text-white dark:group-hover:text-[#001533] transition-colors" />
                        </div>
                        <h4 className="text-2xl font-heading font-extrabold text-[#001533] dark:text-white italic uppercase tracking-tighter pt-4 transition-colors">Direct Eradication</h4>
                        <p className="text-[13px] text-slate-400 font-light italic leading-relaxed">Internal Alpha/Beta radiation delivery directly inside the metastatic tumor clusters.</p>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── PARTNERING CALL TO ACTION ───────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#121428] relative border-y border-slate-100 dark:border-white/5 transition-colors duration-700">
         <div className="container mx-auto px-6">
            <Link href={`/${locale}/partnering/licensing`} className="group flex flex-col md:flex-row items-center justify-between p-16 bg-slate-50/50 dark:bg-white/5 rounded-[4rem] border border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-[#1a1c35] hover:shadow-3xl dark:hover:shadow-[#00BDD5]/10 transition-all duration-700 gap-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-16 opacity-[0.02] dark:opacity-5 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-1000">
                  <Network className="w-96 h-96 dark:text-white" />
               </div>
               <div className="max-w-3xl relative z-10">
                  <span className="text-[#00BDD5] font-heading font-extrabold text-[10px] tracking-[0.5em] uppercase mb-6 block italic transition-colors">Strategic Alliances</span>
                  <p className="text-4xl md:text-5xl font-heading font-extrabold text-[#001533] dark:text-white leading-[1.1] italic tracking-tighter transition-colors">
                     Global Licensing Opportunities for <br/> <span className="text-[#00BDD5]">PANDA-3 Indications.</span>
                  </p>
               </div>
               <div className="relative z-10">
                  <div className="px-14 py-6 bg-[#001533] dark:bg-white group-hover:bg-[#00BDD5] text-white dark:text-[#001533] rounded-full font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] italic transition-all flex items-center gap-6 shadow-2xl">
                     Licensing Hub <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                  </div>
               </div>
            </Link>
         </div>
      </section>

      {/* ── NEWS INTEL GRID ─────────────────────────────────────────────────── */}
      <section className="py-48 bg-[#F8FAFC] dark:bg-[#0a0b16] relative overflow-hidden transition-colors duration-700">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
             <div className="max-w-3xl">
               <span className="text-[#00BDD5] font-heading font-extrabold text-[10px] tracking-[0.6em] uppercase mb-8 block italic">Corporate Intelligence</span>
               <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter leading-[0.8] mb-12 transition-colors">Latest <br/> <span className="text-[#00BDD5] underline decoration-slate-200 dark:decoration-[#00BDD5]/20 decoration-8 underline-offset-10 pointer-events-none">Releases</span></h2>
               <p className="text-slate-400 text-2xl font-light italic leading-relaxed max-w-xl">Updates on clinical enrollment, regulatory filings, and board-level strategy shifts.</p>
             </div>
             <Link href={`/${locale}/news`} className="px-14 py-6 border border-slate-200 dark:border-white/20 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#001533] dark:hover:bg-white dark:text-white dark:hover:text-[#001533] transition-all italic shadow-lg group">
                Repository Archive <ArrowRight className="inline ml-4 group-hover:translate-x-3 transition-transform" />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.article 
                key={item.id} 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: i*0.1}}
                className="bg-white dark:bg-[#121428] border border-slate-100 dark:border-white/5 rounded-[3rem] p-12 hover:shadow-2xl dark:hover:shadow-[#00BDD5]/10 dark:shadow-xl transition-all duration-700 group flex flex-col relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[9px] font-heading font-extrabold px-5 py-2 rounded-full bg-slate-50 dark:bg-white/5 text-[#00BDD5] uppercase tracking-widest italic transition-colors">{item.cat}</span>
                  <span className="text-[9px] font-bold text-slate-300 dark:text-slate-500 italic tracking-widest transition-colors">{item.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#001533] dark:text-white leading-tight mb-8 group-hover:text-[#00BDD5] dark:group-hover:text-[#00BDD5] transition-colors italic tracking-tighter">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light italic line-clamp-3">
                   {item.excerpt}
                </p>
                <div className="mt-auto pt-8 border-t border-slate-50 dark:border-white/10 flex items-center justify-between transition-colors">
                   <button 
                    onClick={() => setExpandedNews(expandedNews === item.id ? null : item.id)} 
                    className="text-[10px] font-heading font-extrabold text-[#001533] dark:text-white uppercase tracking-widest hover:text-[#00BDD5] dark:hover:text-[#00BDD5] transition-all italic flex items-center gap-2 group/btn"
                   >
                      Research Brief <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform" />
                   </button>
                   <Activity className="w-5 h-5 text-slate-100 dark:text-slate-700 group-hover:text-[#00BDD5] transition-all" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── GLOBAL CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="py-48 bg-[#001533] dark:bg-black text-white relative overflow-hidden transition-colors duration-700">
         <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-4 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.8em] mb-12 italic bg-white/5 px-10 py-4 rounded-full border border-white/10 shadow-2xl">
               <Globe2 className="w-4 h-4" /> Global Clinical Headquarters
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold leading-[0.9] italic mb-16 tracking-tighter">
               Engineering the <br/> <span className="text-[#00BDD5]">Theranostic</span> Era.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
               <Link href={`/${locale}/contact`} className="px-16 py-8 bg-[#00BDD5] text-white rounded-2xl font-heading font-extrabold text-[12px] uppercase tracking-[0.5em] hover:bg-white hover:text-[#001533] transition-all shadow-2xl italic transform hover:scale-105 flex items-center gap-6">
                  INITIATE DIALOGUE <ArrowRight className="w-5 h-5" />
               </Link>
               <Link href={`/${locale}/about`} className="text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] text-white/40 hover:text-white transition-all border-b border-transparent hover:border-[#00BDD5] pb-2 italic">
                  Board & Governance
               </Link>
            </div>
         </div>
         {/* Deep space glow for the final CTA in dark mode */}
         <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00BDD5]/10 rounded-full blur-[150px] opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-1000" />
      </section>
    </div>
  );
}
