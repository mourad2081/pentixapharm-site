"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Search, ExternalLink, Calendar, Tag, ChevronRight, Newspaper, Filter, ArrowRight } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
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
  const t = useTranslations("news");
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

  const catColors: Record<string,string> = {
    Clinical:"text-[#00B1AB] bg-[#00B1AB]/5 border-[#00B1AB]/10",
    Corporate:"text-[#00A3E0] bg-[#00A3E0]/5 border-[#00A3E0]/10",
    Financial:"text-[#F2A900] bg-[#F2A900]/5 border-[#F2A900]/10",
    Regulatory:"text-[#A7303E] bg-[#A7303E]/5 border-[#A7303E]/10",
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* Header */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-[0.02]">
           <div className="absolute inset-0 bg-[#031835] translate-y-1/2 rounded-[50%]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.3em] bg-cyan/10 px-6 py-2.5 rounded-full mb-8 border border-cyan/20 italic shadow-sm">
              Press Office & Communications
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-[#031835] mb-8 drop-shadow-sm leading-tight italic">Corporate <span className="text-cyan">Newsroom</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-xl leading-relaxed max-w-3xl mx-auto font-light italic">
              Announcements, clinical data updates, and financial reporting from the heart of Pentixapharm.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters (Enhanced) */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] z-30 shadow-sm backdrop-blur-xl bg-white/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-3">
              {CATS.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={"text-[11px] font-heading font-extrabold px-6 py-3 rounded-full border transition-all uppercase tracking-wider " +
                    (filter===c ? "bg-[#031835] text-white border-[#031835] shadow-lg shadow-navy/20" : "text-slate-400 bg-white border-slate-100 hover:border-cyan/40 hover:text-[#031835]")}>
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 bg-[#F8FAFD] border border-slate-200 rounded-full px-6 py-3 w-full lg:w-80 group focus-within:border-cyan/50 transition-all">
              <Search className="w-4 h-4 text-slate-400 shrink-0 group-focus-within:text-cyan" />
              <input value={search} onChange={e=>setSearch(e.target.value)}
                placeholder="Search repository..." className="bg-transparent text-sm text-[#031835] placeholder-slate-400 outline-none w-full font-medium" />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid (Interactive & Elegant) */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div key={filter+search} initial="hidden" animate="show" variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((n) => (
                <motion.article key={n.id} variants={fadeUp} layout 
                   className={"bg-white border rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group flex flex-col relative overflow-hidden " + (expandedId === n.id ? "col-span-full md:col-span-full lg:col-span-full border-cyan/30" : "border-slate-100 shadow-sm hover:-translate-y-2")}>
                  
                  {expandedId === n.id && (
                     <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none"><Newspaper className="w-64 h-64" /></div>
                  )}

                  <div className="flex items-center justify-between mb-8">
                    <span className={"text-[10px] font-heading font-extrabold px-4 py-1.5 rounded-full border tracking-[0.2em] uppercase " + (catColors[n.cat] || "text-slate-500 bg-slate-50 border-slate-100")}>{n.cat}</span>
                    <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                       <Calendar className="w-3.5 h-3.5 text-cyan" /> {new Date(n.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}
                    </span>
                  </div>

                  <h2 className={"font-heading font-extrabold text-[#031835] leading-tight mb-6 group-hover:text-cyan transition-colors " + (expandedId === n.id ? "text-4xl" : "text-xl italic")}>{n.title}</h2>
                  
                  <div className="relative">
                    <p className={"text-slate-500 leading-relaxed font-light " + (expandedId === n.id ? "text-lg mb-10 italic" : "text-sm line-clamp-3 mb-8")}>
                       {expandedId === n.id ? (n.content || n.excerpt) : n.excerpt}
                    </p>
                    {expandedId !== n.id && (
                       <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent opacity-50" />
                    )}
                  </div>

                  {expandedId === n.id && (
                     <div className="bg-[#F8FAFD] p-8 rounded-[2rem] border border-slate-100 mb-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="flex gap-10">
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Source</p>
                              <p className="font-heading font-extrabold text-[#031835]">{n.source}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Type</p>
                              <p className="font-heading font-extrabold text-[#031835] italic">{n.cat} Announcement</p>
                           </div>
                        </div>
                        <button onClick={() => window.print()} className="flex items-center gap-2 text-xs font-bold text-navy hover:text-cyan transition-all italic border-b border-navy/20 pb-1">
                           Generate PDF Version <ExternalLink className="w-3 h-3" />
                        </button>
                     </div>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    <button onClick={() => setExpandedId(expandedId === n.id ? null : n.id)} 
                       className="flex items-center gap-3 text-[11px] font-heading font-extrabold text-cyan hover:text-[#031835] transition-all uppercase tracking-[0.2em] italic">
                       {expandedId === n.id ? "Collapse Story" : "Read Full Story"} 
                       <motion.span animate={{ x: expandedId === n.id ? -4 : 0 }}>
                          <ChevronRight className={"w-4 h-4 " + (expandedId === n.id ? "rotate-180" : "")} />
                       </motion.span>
                    </button>
                  </div>
                </motion.article>
              ))}
              {filtered.length===0 && (
                <div className="col-span-full text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                   <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                   <p className="text-slate-400 font-heading font-bold italic">No matches found for your criteria.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA: RESEARCH & DATA ────────────────────────────────────────────── */}
      <section className="py-24 container mx-auto px-6">
         <div className="bg-[#031835] rounded-[4rem] p-16 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform rotate-12"><Activity className="w-48 h-48" /></div>
            <div className="max-w-2xl relative z-10">
               <span className="text-[#00B1AB] font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block">Scientific Repository</span>
               <h3 className="text-4xl font-heading font-extrabold mb-8 italic leading-tight">Looking for Clinical Trials <br/> <span className="text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal">& Research Data?</span></h3>
               <p className="text-slate-300 text-lg font-light mb-10 italic">Visit our newly launched Research & Publications center to explore peer-reviewed literature, clinical benchmarks, and white papers on CXCR4 and CD24.</p>
               <Link href={"/" + locale + "/research"} className="inline-flex items-center gap-3 px-10 py-5 bg-[#00B1AB] text-[#031835] font-heading font-extrabold rounded-full hover:bg-white transition-all shadow-2xl">
                  Explore Research Center <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Activity } from "lucide-react";
