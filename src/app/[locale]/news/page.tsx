"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Search, ExternalLink, Calendar, Tag, ChevronRight, Newspaper, Filter, ArrowRight, Activity, Globe2 } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";
import Link from "next/link";

const fadeUp = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.08 } } };

const SEED_NEWS = [
  { id:1, date:"2026-03-31", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as Chief Technology Officer", excerpt:"Pentixapharm Holding AG strengthens its Executive Board with the appointment of Erik Merten as Chief Technology Officer (CTO). Merten brings deep expertise in radiopharmaceutical manufacturing and GMP operations, positioned to lead commercialisation readiness as the PANDA Phase 3 programme advances.", content: "Pentixapharm AG today announced that Erik Merten, previously Head of Operations, has been elevated to the Executive Board as CTO. This move reflects the company's transition into a late-stage clinical developer requiring robust manufacturing scale-up for the global PANDA trial. Erik will oversee the integration of clinical supply chains and the preparation for potential market authorization in Europe and the United States.", source:"Press Release" },
  { id:2, date:"2026-02-25", cat:"Regulatory", title:'FDA Issues "Study May Proceed" for Dual Theranostic INDs in CXCR4 Hemato-Oncology', excerpt:"The U.S. FDA has completed its 30-day safety review and issued 'Study May Proceed' for both the PentixaFor and PentixaTher investigational new drug applications.", content: "With the successful clearing of these dual INDs, Pentixapharm becomes one of the few biotech entities globally to have a paired diagnostic and therapeutic agent active in U.S. clinical development for CXCR4 targets. The initial trials will focus on patients with relapsed/refractory AML and Multiple Myeloma, where CXCR4 overexpression is a key driver of resistance and metastasis.", source:"Press Release" },
  { id:4, date:"2026-01-07", cat:"Regulatory", title:"Pentixapharm Receives FDA Feedback on Phase 3 PANDA Study Design for Primary Aldosteronism", excerpt:"Following Type B pre-IND meeting with the FDA, Pentixapharm received guidance on the Phase 3 PANDA study design evaluating PentixaFor in patients with primary aldosteronism.", content: "The FDA feedback confirms that the proposed clinical endpoints for the PANDA study are robust and acceptable for supporting a future NDA. This allows Pentixapharm to finalize site selection across 20+ leading U.S. endocrine centers, accelerating the recruitment timeline for this landmark pivotal trial.", source:"Press Release" },
  { id:3, date:"2026-02-05", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior Non-invasive PET Diagnostic for Primary Aldosteronism", excerpt:"Prospective Phase 2 study data confirm that [68Ga]Ga-PentixaFor PET/CT is superior to adrenal vein sampling (AVS) in lateralising primary aldosteronism with 97% sensitivity.", content: "Published in a leading medical journal, the study demonstrates that PET/CT imaging using PentixaFor can accurately identify aldosterone-producing adenomas which were previously only detectable via the invasive and technically challenging AVS procedure. This non-invasive alternative is expected to significantly broaden the patient population receiving definitive curative treatment for treatment-resistant hypertension.", source:"Data Release" },
  { id:5, date:"2025-12-11", cat:"Financial", title:"Preliminary Financial Results H1/FY 2025 and Outlook", excerpt:"Pentixapharm reports preliminary revenues of €117k for 9M 2025 and confirms adjusted net loss guidance of ~€18M for FY2025, reflecting focused R&D spending.", content: "The financial results underscore Pentixapharm's disciplined approach to capital allocation. By streamlining non-core research programs, the company has successfully extended its cash runway to cover all major Phase 3 milestones for the PANDA program, while maintaining flexibility for strategic licensing discussions.", source:"Financial Report" },
  { id:6, date:"2025-09-26", cat:"Clinical", title:"PentixaTher Advances to 4th of 5 Dose Levels in PENTILULA AML Bone Marrow Conditioning Trial", excerpt:"The PENTILULA Phase 1/2 trial has progressed to dose level 4 of 5, with no new safety signals identified.", content: "Early efficacy signals at lower dose levels suggest that PentixaTher achieved effective marrow ablation with manageable toxicity. Moving to dose level 4 brings the therapeutic window into the anticipated optimal range for sustained molecular response in relapsed AML patients.", source:"Clinical Update" },
  { id:11, date:"2024-10-03", cat:"Corporate", title:"Pentixapharm Successfully Completes IPO on Frankfurt Stock Exchange Prime Standard", excerpt:"Pentixapharm Holding AG today commences trading on the Frankfurt Stock Exchange Prime Standard under the ticker symbol PTP. The company raised gross proceeds of €19.9 million.", content: "The IPO marks a transformative moment for Pentixapharm, providing the capital necessary to drive our CXCR4 theranostic pair through the final stages of clinical development. As a Prime Standard listed company, we commit to the highest levels of transparency and corporate governance for our global shareholder base.", source:"Press Release" },
];

const CATS = ["All","Clinical","Corporate","Financial","Regulatory"];

export default function NewsPage() {
  const locale = useLocale();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [news, setNews] = useState(SEED_NEWS);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = JSON.parse(localStorage.getItem("ptx_news") || "[]");
        if (saved.length > 0) {
          const combined = [...saved, ...SEED_NEWS].reduce((acc, curr) => {
            if (!acc.find(item => item.id === curr.id)) acc.push(curr);
            return acc;
          }, [] as any[]);
          setNews(combined.sort((a,b) => b.id-a.id));
        }
      } catch {}
    }
  }, []);

  const filtered = news.filter(n =>
    (filter==="All" || n.cat===filter) &&
    (search==="" || n.title.toLowerCase().includes(search.toLowerCase()) || (n.content || n.excerpt).toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-32 selection:bg-[#00BDD5] selection:text-white">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent opacity-60" />
        <div className="absolute -right-20 -top-20 w-[800px] h-[600px] bg-[#00BDD5]/5 rounded-[50%_50%_0_0] blur-[140px] rotate-45 pointer-events-none" />
        <AnimatedBg />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full border border-slate-100 shadow-xl mb-12 italic mt-10">
              Media Relations & Press Office
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold text-[#001533] mb-12 italic leading-[0.75] tracking-tighter drop-shadow-sm">
              Press <br/><span className="text-[#00BDD5] underline decoration-[#00BDD5]/10 underline-offset-10 px-4">Portfolio.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              Real-time updates on clinical milestones, regulatory clearances, and corporate strategy sanctioned by the executive board.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS ────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white/80 border-b border-slate-100 sticky top-[72px] z-30 shadow-sm backdrop-blur-3xl">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-3">
              {CATS.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={"text-[11px] font-heading font-extrabold px-8 py-3 rounded-full border transition-all uppercase tracking-wider italic " +
                    (filter===c ? "bg-[#001533] text-white border-[#001533] shadow-2xl scale-105" : "text-slate-400 bg-white border-slate-100 hover:border-[#00BDD5] hover:text-[#001533]")}>
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-full px-8 py-4 w-full lg:w-96 group focus-within:bg-white focus-within:shadow-xl transition-all">
              <Search className="w-5 h-5 text-slate-400 group-focus-within:text-[#00BDD5]" />
              <input value={search} onChange={e=>setSearch(e.target.value)}
                placeholder="Search repository..." className="bg-transparent text-sm text-[#001533] placeholder-slate-400 outline-none w-full font-bold italic" />
            </div>
        </div>
      </section>

      {/* ── NEWS REPOSITORY ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div key={filter+search} initial="hidden" animate="show" variants={stagger} className="grid md:grid-cols-3 gap-12">
              {filtered.map((n) => (
                <motion.article key={n.id} variants={fadeUp} 
                   className={"bg-white border rounded-[3.5rem] p-12 hover:shadow-4xl transition-all duration-700 group flex flex-col relative overflow-hidden " + (expandedId === n.id ? "col-span-full border-[#00BDD5]/30" : "border-slate-100 shadow-xl hover:-translate-y-3")}>
                  
                  {expandedId === n.id && (
                     <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none rotate-12"><Newspaper className="w-96 h-96" /></div>
                  )}

                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span className="text-[9px] font-heading font-extrabold px-6 py-2 rounded-full border bg-slate-50 text-[#00BDD5] border-slate-100 uppercase tracking-widest italic">{n.cat}</span>
                    <span className="flex items-center gap-3 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                       <Calendar className="w-4 h-4 text-[#00BDD5]" /> {new Date(n.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}
                    </span>
                  </div>

                  <h2 className={"font-heading font-extrabold text-[#001533] leading-tight mb-8 group-hover:text-[#00BDD5] transition-colors italic tracking-tighter " + (expandedId === n.id ? "text-6xl" : "text-2xl")}>{n.title}</h2>
                  
                  <div className="relative z-10">
                    <p className={"text-slate-500 leading-relaxed font-light italic " + (expandedId === n.id ? "text-2xl mb-12 border-l-4 border-[#00BDD5] pl-12" : "text-base line-clamp-3 mb-10")}>
                       {expandedId === n.id ? (n.content || n.excerpt) : n.excerpt}
                    </p>
                  </div>

                  {expandedId === n.id && (
                     <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 mb-12 flex flex-col md:flex-row gap-12 items-center justify-between relative z-10 group/meta transition-all">
                        <div className="flex gap-20">
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic">Official Source</p>
                              <p className="font-heading font-extrabold text-[#001533] text-lg uppercase tracking-tight">{n.source}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic">Asset Indicator</p>
                              <p className="font-heading font-extrabold text-[#001533] italic text-lg">{n.cat} Hub</p>
                           </div>
                        </div>
                        <button onClick={() => window.print()} className="flex items-center gap-3 px-10 py-5 bg-[#001533] text-white rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest hover:bg-[#00BDD5] transition-all shadow-xl italic">
                           ARCHIVE BRIEFING <ExternalLink className="w-4 h-4" />
                        </button>
                     </div>
                  )}

                  <div className="flex items-center justify-between mt-auto relative z-10">
                    <button onClick={() => setExpandedId(expandedId === n.id ? null : n.id)} 
                       className="flex items-center gap-4 text-[11px] font-heading font-extrabold text-[#00BDD5] hover:text-[#001533] transition-all uppercase tracking-[0.3em] italic">
                       {expandedId === n.id ? "Collapse Story" : "Examine Methodology"} 
                       <ChevronRight className={"w-5 h-5 transition-transform " + (expandedId === n.id ? "rotate-90" : "group-hover:translate-x-3")} />
                    </button>
                    {!expandedId && <Activity className="w-6 h-6 text-slate-100 group-hover:text-[#00BDD5] transition-all" />}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
         <div className="bg-[#001533] rounded-[6rem] p-24 text-white relative overflow-hidden group shadow-4xl">
            <div className="absolute inset-0 bg-[#00BDD5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-110 transition-transform rotate-12"><Globe2 className="w-96 h-96" /></div>
            <div className="max-w-3xl relative z-10">
               <span className="text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.5em] mb-6 block italic">Institutional Intelligence Hub</span>
               <h3 className="text-4xl md:text-7xl font-heading font-extrabold mb-10 italic leading-[0.8] tracking-tighter">Exploring Clinical <br/> <span className="text-[#00BDD5]">Benchmarks?</span></h3>
               <p className="text-slate-400 text-2xl font-light mb-16 italic leading-relaxed">Access our centralized research center for peer-reviewed literature, clinical datasets, and institutional white papers regarding CXCR4 and CD24 ligands.</p>
               <Link href={"/" + locale + "/research"} className="inline-flex items-center gap-6 px-16 py-8 bg-[#00BDD5] text-white font-heading font-extrabold rounded-2xl hover:bg-white hover:text-[#001533] transition-all shadow-4xl text-[11px] uppercase tracking-[0.5em] italic">
                  Explore Research Portal <ArrowRight className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
