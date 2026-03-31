"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Activity, Beaker, ShieldCheck, Globe2, Zap, LayoutGrid, Newspaper, TrendingUp, BarChart3, Microscope, Building2, ExternalLink, Atom, Target } from "lucide-react";
import HelixBackground from "@/components/visual/HelixBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

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
    <div className="bg-[#F8FAFD] min-h-screen text-[#002A54] overflow-hidden">
      <HelixBackground />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 mb-10 shadow-xl group hover:bg-white/60 transition-all cursor-default">
              <div className="w-2.5 h-2.5 bg-teal rounded-full animate-pulse shadow-[0_0_12px_rgba(0,177,171,1)]" />
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.4em] italic text-[#002A54]">Advancing Clinical Theranostics</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-7xl md:text-9xl font-heading font-extrabold leading-[1.05] tracking-tight mb-10 text-[#002A54]">
              See What <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-teal to-cyan animate-gradient-x italic">You Treat.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed font-light italic max-w-2xl">
              Pentixapharm is redefining precision oncology through CXCR4-directed theranostics. We identify targets with PET/CT and treat with molecular accuracy.
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
        
        {/* Scroll Indicator */}
        <motion.div initial={{opacity:0}} animate={{opacity:0.4}} transition={{delay:2}} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
           <span className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">Discovery</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#002A54] to-transparent" />
        </motion.div>
      </section>

      {/* ── INVESTOR AT A GLANCE (NEW FEATURE) ──────────────────────────────── */}
      <section className="py-12 bg-[#002A54] text-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
               <div className="flex items-center gap-10">
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-bold text-cyan uppercase tracking-widest italic">Ticker</span>
                     <span className="text-2xl font-heading font-extrabold tracking-tighter italic">PTP.DE</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-bold text-teal uppercase tracking-widest italic">Segment</span>
                     <span className="text-lg font-heading font-extrabold italic">Prime Standard</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-6 flex-1 max-w-4xl">
                  {[
                    { label: "Founded", val: "2019" },
                    { label: "Patients", val: "2,600+" },
                    { label: "IP Families", val: "12+" },
                    { label: "Trial Phase", val: "Phase 3" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                       <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1 italic">{stat.label}</span>
                       <span className="text-xl font-heading font-extrabold text-white italic">{stat.val}</span>
                    </div>
                  ))}
               </div>
               <Link href={`/${locale}/investors`} className="px-8 py-3 bg-white/10 border border-white/20 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                  Investor Portal
               </Link>
            </div>
         </div>
      </section>

      {/* ── TARGET SPECIFICITY ──────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative">
         <div className="absolute inset-0 bg-[#F8FAFD]/60 skew-y-3 transform origin-right translate-y-20 -z-10" />
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative group">
                  <div className="absolute inset-0 bg-cyan opacity-[0.03] rounded-[4rem] group-hover:opacity-[0.06] transition-opacity" />
                  <img src="/molecular_theranostic_structure_1774915435525.png" className="rounded-[4rem] shadow-2xl skew-y-1 group-hover:skew-y-0 transition-all duration-1000 object-contain h-[600px] w-full" alt="Precision Science" />
                  <div className="absolute bottom-10 right-10 p-8 bg-[#002A54] text-white rounded-3xl shadow-2xl max-w-xs border border-white/10 group-hover:-translate-x-4 transition-transform">
                     <p className="text-[10px] font-heading font-extrabold text-cyan uppercase tracking-widest mb-3 italic">Mechanism of Action</p>
                     <p className="text-xs font-light leading-relaxed italic text-slate-300">PentixaFor specifically targets the CXCR4 receptor, which is overexpressed in over 30 types of aggressive cancers.</p>
                  </div>
               </div>
               <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
                  <motion.span variants={fadeUp} className="text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.4em] mb-8 block italic">Scientific Excellence</motion.span>
                  <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-extrabold text-[#002A54] leading-tight mb-10 italic">Molecular <span className="text-teal">Sniper</span> Precision</motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed mb-12 font-light italic">
                     Our proprietary ligands are engineered to discriminate between healthy cells and tumors with extreme precision. Through Gallium-68 (Imaging) and Lutetium-177 (Therapy), we close the loop on precision medicine.
                  </motion.p>
                  <div className="grid grid-cols-2 gap-10">
                     <motion.div variants={fadeUp} className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center"><Microscope className="w-7 h-7 text-teal" /></div>
                        <h4 className="font-heading font-extrabold text-teal italic">Diagnostic</h4>
                        <p className="text-xs text-slate-500 font-light italic leading-loose">Precision PET/CT imaging to identify target-positive patients with absolute confidence.</p>
                     </motion.div>
                     <motion.div variants={fadeUp} className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center"><Zap className="w-7 h-7 text-cyan" /></div>
                        <h4 className="font-heading font-extrabold text-cyan italic">Therapeutic</h4>
                        <p className="text-xs text-slate-500 font-light italic leading-loose">Targeted radionuclide therapy (TRT) delivering heavy-particle radiation directly to cancer cells.</p>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── PARTNERING & CORPORATE GROWTH (NEW FEATURE) ─────────────────────── */}
      <section className="py-32 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-white rounded-[4rem] p-16 lg:p-24 shadow-2xl border border-slate-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-20 opacity-[0.02] -rotate-12 group-hover:rotate-0 transition-transform"><Building2 className="w-96 h-96" /></div>
               <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                  <div>
                     <span className="text-[#00B1AB] font-heading font-extrabold text-xs uppercase tracking-[0.4em] mb-6 block italic">Strategic Partnerships</span>
                     <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 italic">Partnering for <br/> <span className="text-cyan">Global Impact</span></h2>
                     <p className="text-slate-500 text-lg leading-relaxed font-light italic mb-10">
                        We are actively seeking strategic alliances with global biopharma leaders to accelerate the commercialization of our CXCR4 and CD24 platforms in key markets.
                     </p>
                     <Link href={`/${locale}/partnering`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#002A54] text-white font-heading font-extrabold rounded-full hover:bg-cyan hover:text-navy transition-all shadow-xl italic tracking-widest text-xs">
                        BUSINESS DEVELOPMENT <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
                  <div className="space-y-8">
                     {[
                       { icon: LayoutGrid, title: "Licensing Opportunities", desc: "Regional rights for lead clinical programs in Asia and Americas." },
                       { icon: Atom, title: "R&D Collaborations", desc: "Co-development of novel ligands and therapeutic combinations." },
                       { icon: Globe2, title: "Clinical Networks", desc: "Integration into global oncology and endocrinology research clusters." }
                     ].map((p, i) => (
                       <div key={i} className="flex gap-6 items-start p-8 rounded-[2.5rem] bg-[#F8FAFD] border border-slate-50 hover:border-cyan/30 transition-all">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-inner flex items-center justify-center shrink-0"><p.icon className="w-6 h-6 text-cyan" /></div>
                          <div>
                             <h4 className="font-heading font-extrabold text-[#002A54] mb-2 italic">{p.title}</h4>
                             <p className="text-xs text-slate-500 font-light italic">{p.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── NEWS SECTION ─────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
             <div className="max-w-xl">
               <span className="text-helixRed font-heading font-extrabold text-xs tracking-[0.4em] uppercase mb-4 block italic">Updates & Releases</span>
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54] italic">Latest <span className="text-cyan">Intelligence</span></h2>
             </div>
             <Link href={`/${locale}/news`} className="px-8 py-3 border border-[#002A54] rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#002A54] hover:text-white transition-all italic">
                All Press Releases
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {news.map((item) => (
              <motion.article key={item.id} whileHover={{y:-8}} className="bg-[#F8FAFD] border border-slate-100 rounded-[3rem] p-10 hover:shadow-2xl transition-all group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform"><Newspaper className="w-32 h-32" /></div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-heading font-extrabold px-4 py-1.5 rounded-full bg-white border border-slate-100 text-cyan uppercase tracking-widest italic">{item.cat}</span>
                  <span className="text-[10px] font-bold text-slate-400 italic">{item.date}</span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#002A54] leading-tight mb-6 group-hover:text-cyan transition-colors italic line-clamp-3">{item.title}</h3>
                
                <p className={"text-slate-500 text-sm leading-relaxed mb-10 font-light italic " + (expandedNews === item.id ? "" : "line-clamp-3")}>
                   {item.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-200/50 flex items-center justify-between">
                   <button onClick={() => setExpandedNews(expandedNews === item.id ? null : item.id)} className="text-[10px] font-heading font-extrabold text-cyan uppercase tracking-widest hover:text-navy transition-all italic underline underline-offset-8">
                      {expandedNews === item.id ? "Minimize Clear" : "Read Insight"}
                   </button>
                   <Link href={`/${locale}/news`}><ExternalLink className="w-4 h-4 text-slate-300 hover:text-cyan transition-colors" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL CLINICAL NETWORK (NEW FEATURE) ────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl text-center">
            <span className="text-[#00B1AB] font-heading font-extrabold text-xs uppercase tracking-[0.4em] mb-10 block italic">International Footprint</span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <div className="flex flex-col items-center gap-2"><Target className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest mt-2">Germany</span></div>
               <div className="flex flex-col items-center gap-2"><Globe2 className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest mt-2">USA</span></div>
               <div className="flex flex-col items-center gap-2"><LayoutGrid className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest mt-2">China</span></div>
               <div className="flex flex-col items-center gap-2"><Atom className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest mt-2">UK</span></div>
               <div className="flex flex-col items-center gap-2"><Activity className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest mt-2">Switzerland</span></div>
               <div className="flex flex-col items-center gap-2"><ShieldCheck className="w-10 h-10"/><span className="text-[9px] font-bold uppercase tracking-widest mt-2">France</span></div>
            </div>
         </div>
      </section>
    </div>
  );
}
