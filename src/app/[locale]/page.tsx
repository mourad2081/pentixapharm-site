"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Activity, Beaker, ShieldCheck, Globe2, Zap, LayoutGrid, Newspaper, TrendingUp, BarChart3, Microscope, Building2, ExternalLink, Atom, Target, ChevronRight, PieChart, FlaskConical } from "lucide-react";
import HelixBackground from "@/components/visual/HelixBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

const SEED_NEWS = [
  { id:1, date:"2026-03-31", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as Chief Technology Officer", excerpt:"Pentixapharm Holding AG strengthens its Executive Board to lead commercialisation readiness as the PANDA Phase 3 programme advances." },
  { id:2, date:"2026-02-25", cat:"Regulatory", title:'FDA Issues "Study May Proceed" for Dual Theranostic INDs', excerpt:"The U.S. FDA has cleared both PentixaFor and PentixaTher investigational new drug applications, enabling clinical use in North America." },
  { id:3, date:"2026-02-05", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior PET Diagnostic", excerpt:"Prospective study data confirm superior diagnostic performance over current gold standard in primary aldosteronism." },
];

const MOL_IMG = "molecular_theranostic_structure_1774915435525.png";
const LAB_IMG = "biotech_lab_researcher_1774915416227.png";

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("common");
  const [news, setNews] = useState(SEED_NEWS);
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-[#002A54] overflow-hidden">
      <HelixBackground />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 relative z-20">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 mb-10 shadow-xl group hover:bg-white/60 transition-all cursor-default">
              <div className="w-2.5 h-2.5 bg-teal rounded-full animate-pulse shadow-[0_0_12px_rgba(0,177,171,1)]" />
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.4em] italic text-[#002A54]">Advancing Clinical Theranostics</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-7xl md:text-9xl font-heading font-extrabold leading-[1.05] tracking-tighter mb-10 text-[#002A54] italic">
              See What <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-teal to-cyan animate-gradient-x">You Treat.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed font-light italic max-w-2xl">
              Pentixapharm is redefining precision oncology through CXCR4-directed theranostics. Identifying targets with PET/CT and treating with molecular accuracy.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <Link href={`/${locale}/technology`} className="px-14 py-6 bg-[#002A54] text-white rounded-full font-heading font-extrabold text-sm tracking-[0.2em] uppercase hover:bg-cyan hover:text-[#002A54] transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-4 group italic">
                Scientific Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href={`/${locale}/pipeline`} className="text-[11px] font-heading font-extrabold uppercase tracking-[0.4em] border-b-2 border-[#002A54]/20 hover:border-teal transition-all pb-1 italic text-slate-500 hover:text-[#002A54]">
                Explore Clinical Pipeline
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Molecular Visual Hero Floating Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] pointer-events-none hidden lg:block overflow-hidden">
           <motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:1.5, ease:"easeOut"}} className="relative w-full h-full p-20">
              <motion.img 
                src={"/" + MOL_IMG} 
                className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(0,163,224,0.3)] contrast-110" 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Floating Data Points */}
              <motion.div animate={{y:[0, -30, 0]}} transition={{duration:8, repeat:Infinity}} className="absolute top-1/4 left-1/4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                 <FlaskConical className="w-8 h-8 text-cyan mb-2" />
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest italic">CXCR4 Binding</p>
                 <p className="text-xl font-heading font-extrabold text-white tracking-widest mt-1">98.4%</p>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* ── INVESTOR AT A GLANCE (STYLIZED) ─────────────────────────────────── */}
      <section className="py-14 bg-[#002A54] text-white border-y border-white/10 relative z-30">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="flex items-center gap-10">
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-bold text-cyan uppercase tracking-widest italic">Frankfurt Stock Exchange</span>
                     <span className="text-2xl font-heading font-extrabold tracking-tighter italic flex items-center gap-3">
                        PTP.DE <TrendingUp className="w-5 h-5 text-teal" />
                     </span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/20" />
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-bold text-teal uppercase tracking-widest italic">IPO Segment</span>
                     <span className="text-lg font-heading font-extrabold italic">Prime Standard</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 flex-1 max-w-4xl text-center md:text-left">
                  {[
                    { label: "IP Families", val: "12+" },
                    { label: "Patients", val: "2,600+" },
                    { label: "Pipeline Stage", val: "Phase 3" },
                    { label: "Capital Raised", val: "€43M+" }
                  ].map((stat, i) => (
                    <motion.div key={i} whileHover={{scale:1.05}} className="flex flex-col">
                       <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1 italic opacity-80">{stat.label}</span>
                       <span className="text-xl font-heading font-extrabold text-white italic tracking-widest">{stat.val}</span>
                    </motion.div>
                  ))}
               </div>
               <Link href={`/${locale}/investors`} className="px-10 py-4 bg-cyan text-navy rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-white transition-all shadow-xl italic tracking-[0.2em]">
                  PARTNER DASHBOARD 
               </Link>
            </div>
         </div>
      </section>

      {/* ── TARGET SPECIFICITY ──────────────────────────────────────────────── */}
      <section className="py-40 bg-white relative">
         <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative group">
                  <div className="absolute -inset-10 bg-cyan opacity-[0.05] rounded-[5rem] group-hover:opacity-[0.08] transition-opacity blur-3xl" />
                  <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border border-slate-100 bg-[#F8FAFD] p-12">
                     <motion.img 
                        src={"/" + MOL_IMG} 
                        className="w-full h-full object-contain contrast-125 saturate-[0.8]" 
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 1 }}
                        alt="Theranostics Molecule" 
                     />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-32 h-32 bg-cyan/20 rounded-full animate-ping pointer-events-none" />
                     </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 p-10 bg-[#002A54] text-white rounded-[3.5rem] shadow-2xl max-w-xs border border-white/10 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform z-20">
                     <Target className="w-8 h-8 text-cyan mb-4" />
                     <p className="text-[10px] font-heading font-extrabold text-cyan uppercase tracking-widest mb-3 italic">Clinical Specificity</p>
                     <p className="text-xs font-light leading-relaxed italic text-slate-300">PentixaFor identifies CXCR4+ tumors that current gold-standard diagnostics consistently overlook.</p>
                  </div>
               </div>
               <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
                  <motion.span variants={fadeUp} className="text-teal text-xs font-heading font-extrabold uppercase tracking-[0.5em] mb-10 block italic">Scientific Excellence</motion.span>
                  <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-extrabold text-[#002A54] leading-[1.1] mb-12 italic tracking-tighter">Precision <span className="text-cyan">Nuclear</span> Medicine</motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed mb-14 font-light italic">
                     Our proprietary ligands are engineered to discriminate between healthy cellular tissue and tumors with surgical accuracy. Through Gallium-68 (Imaging) and Lutetium-177 (Therapy), we close the gap between diagnosis and cure.
                  </motion.p>
                  <div className="grid grid-cols-2 gap-12">
                     <motion.div variants={fadeUp} className="space-y-6 group">
                        <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center group-hover:bg-[#002A54] group-hover:text-white transition-all"><Microscope className="w-8 h-8 text-teal" /></div>
                        <h4 className="font-heading font-extrabold text-[#002A54] italic text-lg uppercase tracking-widest">Diagnostic (PET)</h4>
                        <p className="text-xs text-slate-500 font-light italic leading-loose">Precision PET/CT imaging to identify target-positive candidates with molecular absolute.</p>
                     </motion.div>
                     <motion.div variants={fadeUp} className="space-y-6 group">
                        <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center group-hover:bg-[#002A54] group-hover:text-white transition-all"><Zap className="w-8 h-8 text-cyan" /></div>
                        <h4 className="font-heading font-extrabold text-[#002A54] italic text-lg uppercase tracking-widest">Therapeutic (TRT)</h4>
                        <p className="text-xs text-slate-500 font-light italic leading-loose">Targeted radionuclide therapy delivering heavy radiation payload directly into tumor DNA.</p>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── CLINICAL ENVIRONMENT BACKGROUND SECTION ─────────────────────────── */}
      <section className="relative py-48 overflow-hidden group">
         <div className="absolute inset-0 z-0">
            <img src={"/" + LAB_IMG} className="w-full h-full object-cover filter grayscale opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-[3000ms]" alt="Laboratory" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFD] via-transparent to-[#F8FAFD]" />
         </div>
         <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
               <motion.span variants={fadeUp} className="text-[#002A54] font-heading font-extrabold text-[10px] uppercase tracking-[0.5em] mb-10 block italic">Global Standards</motion.span>
               <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-12 italic tracking-tighter">Vertically Integrated <span className="text-teal">Innovation</span></motion.h2>
               <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic mb-14">
                  From ligand discovery and clinical-grade manufacturing to global regulatory submission. Our infrastructure is built to scale the next generation of theranostic blockbusters.
               </motion.p>
               <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                  <div className="flex flex-col items-center gap-3"><Building2 className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest">Würzburg Labs</span></div>
                  <div className="flex flex-col items-center gap-3"><ShieldCheck className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest">GMP Certified</span></div>
                  <div className="flex flex-col items-center gap-3"><PieChart className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest">Scale-Ready</span></div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* ── PARTNERING & GROWTH ──────────────────────────────────────────────── */}
      <section className="py-40 bg-white">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-[#002A54] rounded-[5rem] p-20 lg:p-32 shadow-[0_50px_100px_rgba(0,42,84,0.3)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-40 opacity-[0.03] -rotate-12 group-hover:rotate-0 transition-transform duration-1000"><Building2 className="w-[600px] h-[600px]" /></div>
               <div className="absolute bottom-0 left-0 p-40 opacity-[0.03] rotate-45 group-hover:rotate-0 transition-transform duration-1000"><Atom className="w-[400px] h-[400px]" /></div>
               
               <div className="grid lg:grid-cols-2 gap-24 relative z-10 items-center">
                  <div>
                     <span className="text-cyan font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] mb-10 block italic">Alliance Building</span>
                     <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-10 italic tracking-tighter">Partnering for <br/> <span className="text-cyan">Global Scale</span></h2>
                     <p className="text-white/70 text-xl leading-relaxed font-light italic mb-14">
                        We are actively seeking strategic alliances with global biopharma leaders to accelerate the commercialization of our Phase 3 assets and expand our molecular reach.
                     </p>
                     <Link href={`/${locale}/partnering`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#002A54] font-heading font-extrabold rounded-full hover:bg-cyan hover:shadow-[0_0_40px_rgba(0,163,224,0.4)] transition-all shadow-xl italic tracking-widest text-xs">
                        EXPLORE ALLIANCES <ArrowRight className="w-5 h-5" />
                     </Link>
                  </div>
                  <div className="space-y-10">
                     {[
                       { icon: LayoutGrid, title: "Licensing Strategy", desc: "Regional rights for lead clinical programs in North America and Asia." },
                       { icon: Atom, title: "Discovery Pipeline", desc: "Co-development of novel ligands and therapeutic combinations." },
                       { icon: Globe2, title: "Manufacturing Network", desc: "Global distribution agreements for medical isotopes." }
                     ].map((p, i) => (
                       <div key={i} className="flex gap-10 items-start p-10 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan/30 transition-all group">
                          <div className="w-14 h-14 rounded-2xl bg-white/10 text-cyan shadow-inner flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform"><p.icon className="w-7 h-7" /></div>
                          <div>
                             <h4 className="font-heading font-extrabold text-white text-xl mb-3 italic tracking-tight">{p.title}</h4>
                             <p className="text-sm text-white/50 font-light italic leading-relaxed">{p.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── NEWS SECTION ─────────────────────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFD] relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-28 gap-10">
             <div className="max-w-xl">
               <span className="text-helixRed font-heading font-extrabold text-[11px] tracking-[0.5em] uppercase mb-6 block italic">Corporate Intelligence</span>
               <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#002A54] italic tracking-tighter">Latest <span className="text-cyan">Releases</span></h2>
             </div>
             <Link href={`/${locale}/news`} className="px-10 py-4 border-2 border-[#002A54] rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#002A54] hover:text-white transition-all italic tracking-[0.2em]">
                ALL PRESS RELEASES
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {news.map((item) => (
              <motion.article key={item.id} whileHover={{y:-12}} className="bg-white border border-slate-100 rounded-[4rem] p-12 hover:shadow-2xl transition-all group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-1000"><Newspaper className="w-40 h-40" /></div>
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <span className="text-[10px] font-heading font-extrabold px-5 py-2.5 rounded-full bg-[#F8FAFD] border border-slate-100 text-teal uppercase tracking-widest italic">{item.cat}</span>
                  <span className="text-[10px] font-bold text-slate-400 italic">{item.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 group-hover:text-cyan transition-colors italic line-clamp-3 relative z-10 tracking-tight">{item.title}</h3>
                
                <p className={"text-slate-500 text-sm leading-relaxed mb-12 font-light italic relative z-10 " + (expandedNews === item.id ? "" : "line-clamp-3")}>
                   {item.excerpt}
                </p>

                <div className="mt-auto pt-10 border-t border-slate-100 flex items-center justify-between relative z-10">
                   <button onClick={() => setExpandedNews(expandedNews === item.id ? null : item.id)} className="text-[10px] font-heading font-extrabold text-[#002A54] uppercase tracking-widest hover:text-cyan transition-all italic underline underline-offset-[12px] decoration-teal decoration-2">
                      {expandedNews === item.id ? "Minimize Insight" : "Request Full Memo"}
                   </button>
                   <Link href={`/${locale}/news`}><ExternalLink className="w-5 h-5 text-slate-200 hover:text-cyan transition-colors" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
