"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Activity, Beaker, ShieldCheck, Globe2, Zap, LayoutGrid, Newspaper, TrendingUp, BarChart3, Microscope, Building2, ExternalLink, Atom, Target, Play } from "lucide-react";
import HelixBackground from "@/components/visual/HelixBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

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
    <div className="bg-white min-h-screen text-[#002A54] overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
           <HelixBackground />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-[#002A54] px-8 py-3 rounded-full mb-12 shadow-2xl group hover:bg-cyan transition-all cursor-default scale-110">
              <div className="w-2.5 h-2.5 bg-teal rounded-full animate-pulse shadow-[0_0_12px_rgba(0,177,171,1)]" />
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.4em] italic text-white group-hover:text-navy transition-colors">Phase 3 Clinical Milestone Reach</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[5rem] md:text-[8rem] font-heading font-extrabold leading-[0.9] tracking-tighter mb-12 text-[#002A54] italic drop-shadow-2xl">
              See What <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-teal to-cyan animate-gradient-x italic">You Treat.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-slate-600 mb-16 leading-relaxed font-light italic max-w-2xl drop-shadow-sm">
              The cycle of precision medicine. We visualize CXCR4 receptors with PET/CT to deliver targeted radiopharmaceutical therapy with extreme precision.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
              <Link href={`/${locale}/technology`} className="px-16 py-7 bg-[#002A54] text-white rounded-full font-heading font-extrabold text-sm tracking-[0.4em] uppercase hover:bg-cyan hover:text-[#002A54] transition-all shadow-3xl hover:-translate-y-2 flex items-center gap-6 group italic">
                 PLATFORM DISCOVERY <Play className="w-5 h-5 group-hover:scale-125 transition-transform" />
              </Link>
              <Link href={`/${locale}/pipeline`} className="text-[11px] font-heading font-extrabold uppercase tracking-[0.4em] border-b-2 border-[#002A54]/20 hover:border-teal transition-all pb-2 italic text-slate-500 hover:text-[#002A54] tracking-widest">
                Clinical Evolution Roadmap
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div initial={{opacity:0}} animate={{opacity:0.4}} transition={{delay:2.5}} className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
           <span className="text-[9px] font-extrabold uppercase tracking-[0.6em] opacity-40 italic">Industrialization</span>
           <div className="w-[1px] h-20 bg-gradient-to-b from-[#002A54] to-transparent animate-bounce" />
        </motion.div>
      </section>

      {/* ── INVESTOR AT A GLANCE ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#002A54] text-white overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
               <div className="flex items-center gap-12 group cursor-pointer">
                  <div className="flex flex-col gap-1 items-end">
                     <span className="text-[11px] font-heading font-extrabold text-cyan uppercase tracking-[0.4em] italic mb-1">Exchange</span>
                     <span className="text-3xl font-heading font-extrabold tracking-tighter italic group-hover:text-cyan transition-colors">PTP.DE</span>
                  </div>
                  <div className="w-[2px] h-14 bg-white/10 group-hover:bg-cyan transition-all" />
                  <div className="flex flex-col gap-1">
                     <span className="text-[11px] font-heading font-extrabold text-teal uppercase tracking-[0.4em] italic mb-1">Listing</span>
                     <span className="text-xl font-heading font-extrabold italic">Prime Standard</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-10 flex-1 max-w-4xl border-l border-white/5 pl-10">
                  {[
                    { label: "IP Families", val: "12+", color: "text-white" },
                    { label: "Patient Uses", val: "2,600+", color: "text-teal" },
                    { label: "Study Sites", val: "Europe & US", color: "text-white" },
                    { label: "Market Potential", val: "€2.4B+", color: "text-cyan" }
                  ].map((stat, i) => (
                    <motion.div key={i} whileHover={{scale:1.1}} className="flex flex-col">
                       <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic opacity-60">{stat.label}</span>
                       <span className={`text-2xl font-heading font-extrabold italic tracking-tight ${stat.color}`}>{stat.val}</span>
                    </motion.div>
                  ))}
               </div>
               <Link href={`/${locale}/investors/portal`} className="px-10 py-4 bg-white/5 border border-white/20 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-white hover:text-navy transition-all italic scale-110">
                  Investor Portal
               </Link>
            </div>
         </div>
      </section>

      {/* ── TARGET SPECIFICITY ──────────────────────────────────────────────── */}
      <section className="py-40 bg-white relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="relative group">
                  <div className="absolute -inset-10 bg-cyan opacity-[0.03] rounded-full blur-[100px] group-hover:opacity-[0.08] transition-opacity" />
                  <div className="relative rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,42,84,0.3)] group-hover:rotate-1 transition-all duration-700">
                     <img src="/molecular_interaction_cxcr4_1774918246066.png" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="Precision Science" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 p-12 bg-[#002A54] text-white rounded-[4rem] shadow-3xl max-w-sm border border-white/10 group-hover:-translate-x-8 transition-transform">
                     <p className="text-[10px] font-heading font-extrabold text-cyan uppercase tracking-[0.4em] mb-4 italic">Platform Synergy</p>
                     <p className="text-sm font-light leading-loose italic text-slate-300">Our companion diagnostic PET/CT identifies CXCR4 density in real-time, matching patients to curative therapeutic payloads.</p>
                  </div>
               </div>
               <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
                  <motion.span variants={fadeUp} className="text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.6em] mb-10 block italic">Mechanism of Action</motion.span>
                  <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold text-[#002A54] leading-[0.85] mb-14 italic tracking-tighter">Targeted <br/><span className="text-teal">Precision</span> Science</motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-600 text-2xl leading-relaxed mb-16 font-light italic">
                     Our proprietary ligands discriminate tumor tissue from healthy organs with unparalleled specificity. By utilizing alpha and beta emitters, we induce cell death in the most aggressive cancer phenotypes.
                  </motion.p>
                  <div className="grid grid-cols-2 gap-16">
                     <motion.div variants={fadeUp} className="space-y-6">
                        <div className="w-16 h-16 rounded-3xl bg-teal/10 flex items-center justify-center shadow-inner"><Microscope className="w-8 h-8 text-teal" /></div>
                        <h4 className="text-xl font-heading font-extrabold text-teal italic uppercase tracking-tighter">Diagnostic (Dx)</h4>
                        <p className="text-xs text-slate-500 font-light italic leading-loose">Precision Gallium-68 imaging to visualize receptors and validate target expression before exposure.</p>
                     </motion.div>
                     <motion.div variants={fadeUp} className="space-y-6">
                        <div className="w-16 h-16 rounded-3xl bg-cyan/10 flex items-center justify-center shadow-inner"><Zap className="w-8 h-8 text-cyan" /></div>
                        <h4 className="text-xl font-heading font-extrabold text-cyan italic uppercase tracking-tighter">Therapeutic (Tx)</h4>
                        <p className="text-xs text-slate-500 font-light italic leading-loose">Internal radiotherapy delivering targeted therapeutic radionuclides directly to the metastatic site.</p>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── NEWS SECTION ─────────────────────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFD] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
             <div className="max-w-2xl">
               <span className="text-helixRed font-heading font-extrabold text-xs tracking-[0.5em] uppercase mb-6 block italic">Market Transparency</span>
               <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#002A54] italic tracking-tighter leading-tight">Latest <span className="text-cyan">Strategic</span> Intel</h2>
             </div>
             <Link href={`/${locale}/news`} className="px-10 py-4 border-2 border-[#002A54] rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#002A54] hover:text-white transition-all italic scale-125">
                Corporate Archive
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {news.map((item) => (
              <motion.article key={item.id} whileHover={{y:-12}} className="bg-white border border-slate-100 rounded-[4rem] p-12 hover:shadow-[0_40px_100px_-20px_rgba(0,42,84,0.15)] transition-all group flex flex-col relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform"><Newspaper className="w-48 h-48" /></div>
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <span className="text-[10px] font-heading font-extrabold px-6 py-2 rounded-full bg-[#F8FAFD] border border-slate-100 text-teal uppercase tracking-widest italic">{item.cat}</span>
                  <span className="text-[10px] font-bold text-slate-400 italic">{item.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 group-hover:text-cyan transition-colors italic relative z-10 tracking-tight">{item.title}</h3>
                
                <p className={"text-slate-500 text-sm leading-relaxed mb-12 font-light italic relative z-10 " + (expandedNews === item.id ? "" : "line-clamp-3")}>
                   {item.excerpt}
                </p>

                <div className="mt-auto pt-10 border-t border-slate-100 flex items-center justify-between relative z-10">
                   <button onClick={() => setExpandedNews(expandedNews === item.id ? null : item.id)} className="text-[11px] font-heading font-extrabold text-[#002A54] uppercase tracking-widest hover:text-cyan transition-all italic underline underline-offset-[12px] decoration-cyan/30">
                      {expandedNews === item.id ? "Minimize Insight " : "Read Release "}
                   </button>
                   <Link href={`/${locale}/news`}><Activity className="w-5 h-5 text-slate-200 group-hover:text-teal transition-colors" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERING & LICENSING PORTAL BANNER ────────────────────────────── */}
      <section className="py-40 bg-white">
         <div className="container mx-auto px-6">
            <Link href={`/${locale}/partnering/licensing`} className="group block relative rounded-[5rem] overflow-hidden bg-[#002A54] text-white p-20 lg:p-32 shadow-[0_60px_120px_-30px_rgba(0,42,84,0.4)]">
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                  <img src="/molecular_interaction_cxcr4_1774918246066.png" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#002A54] via-transparent to-transparent" />
               </div>
               <div className="max-w-3xl relative z-10">
                  <span className="text-cyan font-heading font-extrabold text-xs tracking-[0.5em] uppercase mb-8 block italic">Strategic Alliances</span>
                  <h2 className="text-5xl md:text-[5.5rem] font-heading font-extrabold leading-[0.9] italic mb-12 tracking-tighter">Partnering for <br/><span className="text-cyan">Global Scale</span></h2>
                  <p className="text-slate-300 text-2xl font-light italic leading-relaxed mb-12 max-w-2xl">
                     Accelerating the deployment of PentixaFor and PentixaTher through co-development and regional out-licensing.
                  </p>
                  <div className="flex items-center gap-8">
                     <div className="px-12 py-5 bg-cyan text-navy rounded-full font-heading font-extrabold text-xs uppercase tracking-widest italic group-hover:bg-white transition-colors">Digital Licensing Portal</div>
                     <ArrowRight className="w-10 h-10 text-cyan group-hover:translate-x-6 transition-transform" />
                  </div>
               </div>
            </Link>
         </div>
      </section>
    </div>
  );
}
