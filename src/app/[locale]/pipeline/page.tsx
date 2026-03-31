"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Beaker, ShieldAlert, Target, Zap, Microscope, Info, LayoutGrid, CheckCircle2, TrendingUp, Globe2, BarChart3, Atom } from "lucide-react";
import Link from "next/link";

const PIPELINE = [
  { 
    id: "pfor-pa",
    name: "PentixaFor",
    molecule: "[⁶⁸Ga]Ga-PentixaFor",
    category: "Diagnostic",
    ind: "Primary Aldosteronism (PA)",
    phase: "Phase 3 Ready",
    phaseIndex: 3, 
    color: "cyan",
    desc: "A highly specific PET/CT diagnostic targeting CXCR4 overexpressed in PA adenomas.",
    fullContent: "Primary Aldosteronism (PA) is a major cause of secondary hypertension. PentixaFor offers a non-invasive, more accurate alternative to the current gold standard AVS. Our pivotal Phase 3 study, PANDA, is set to confirm clinical efficacy for regulatory submission. Global market potential is significant due to high secondary hypertension prevalence.",
    milestones: ["IND cleared by FDA", "Ph3 Protocol PANDA approved", "Global dosing initiation 2026"],
    marketPotential: "Estimated 5-12% of all hypertensive patients suffer from PA, with a diagnostic market potential exceeding €1B annually."
  },
  { 
    id: "pfor-hem",
    name: "PentixaFor",
    molecule: "[⁶⁸Ga]Ga-PentixaFor",
    category: "Diagnostic",
    ind: "Hemato-Oncology (AML, MM)",
    phase: "Phase 2",
    phaseIndex: 2,
    color: "cyan",
    desc: "Diagnostic scout for CXCR4-expressing lymphomas. Enables 'seeing what we treat' strategy.",
    fullContent: "In oncology, CXCR4 is a biomarker for aggressive disease. Ongoing trials in AML and Multiple Myeloma demonstrate high diagnostic sensitivity. Clinical data suggests PentixaFor imaging can stratify patients for immediate targeted radiotherapy.",
    milestones: ["Ph2 data presentation 2025", "FDA Orphan Drug Designation"],
    marketPotential: "High unmet need in relapsed/refractory hematological malignancies where CXCR4 prevalence exceeds 90%."
  },
  { 
    id: "pther-aml",
    name: "PentixaTher",
    molecule: "[⁹⁰Y]Y / [¹⁷⁷Lu]Lu-PentixaTher",
    category: "Therapeutic",
    ind: "AML / Lymphomas",
    phase: "Phase 1/2",
    phaseIndex: 1.5,
    color: "violet",
    desc: "Molecular radiotherapy delivering precision ablation to bone marrow cancer.",
    fullContent: "PentixaTher delivers direct radiation to CXCR4+ cancer cells. Currently at dose level 4 of 5 in the PENTILULA trial. Efficacy data shows promising marrow clearance with manageable toxicity profiles in heavily pre-treated patients.",
    milestones: ["Dose escalation completion 2025", "Initiation of PENTHERA registration trial"],
    marketPotential: "Orphan designation potential. Precision replacement for non-selective bone marrow conditioning regimens."
  },
  { 
    id: "gt008",
    name: "GT-008",
    molecule: "Anti-CD24 Glycan mAb",
    category: "Antibody",
    ind: "Solid Tumors (Breast, Ovarian)",
    phase: "Preclinical",
    phaseIndex: 0.5,
    color: "violet",
    desc: "First-in-class glycan-dependent antibody targeting CD24.",
    fullContent: "GT-008 targets a tumor-specific carbohydrate structure on the CD24 receptor. Preclinical PDX models show 100% regression in Triple Negative Breast Cancer (TNBC). This platform avoids off-target toxicity by uniquely discriminating tumor-associated glycan variants.",
    milestones: ["Toxicology data 2025", "IND filling targeted 2026"],
    marketPotential: "Addressing hard-to-treat solid tumors where current immunotherapies (checkpoint inhibitors) show limited efficacy."
  }
];

export default function PipelinePage() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("pfor-pa");
  const locale = useLocale();

  const filteredData = useMemo(() => {
    return filter === "All" ? PIPELINE : PIPELINE.filter(p => p.category === filter);
  }, [filter]);

  const phases = ["Preclinical", "Phase 1", "Phase 2", "Phase 3", "Approval"];

  return (
    <div className="min-h-screen text-white pb-32 pt-24 selection:bg-[#00F2FF]/30 selection:text-white overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-[#7B61FF]/10 rounded-[50%_50%_0_0] blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.4em] bg-white/5 border border-white/10 px-8 py-3 rounded-full inline-block mb-10 shadow-[0_0_15px_rgba(0,242,255,0.1)]">Clinical Innovation Matrix</span>
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white mb-8 leading-none tracking-tighter drop-shadow-sm">Advanced <br/><span className="text-[#00F2FF]">Pipeline.</span></h1>
            <motion.p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-16 px-12">
              From breakthrough molecular discovery to Phase 3 registration readiness. We transform clinical standards through targeted radiochemistry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PIPELINE CHART ──────────────────────────────────────────────────── */}
      <section className="py-24 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
               <div className="flex bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  {["All", "Diagnostic", "Therapeutic", "Antibody"].map((f) => (
                    <button key={f} onClick={() => setFilter(f)} 
                      className={`px-8 py-3 rounded-full font-heading font-semibold text-[10px] uppercase tracking-widest transition-all ${
                        filter === f ? "bg-[#00F2FF]/10 text-white shadow-[0_0_15px_rgba(0,242,255,0.2)]" : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`}>
                       {f}
                    </button>
                  ))}
               </div>
               <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest flex items-center gap-3">
                  <Info className="w-4 h-4 text-[#00F2FF]" /> Interactive Science: Select an asset to expand
               </div>
            </div>

            <div className="glass-panel rounded-[3rem] p-8 lg:p-16 relative overflow-visible">
               <div className="flex items-center border-b border-white/10 pb-8 mb-12 hidden md:flex">
                  <div className="w-[30%] text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-8">Target Asset / Indication Stack</div>
                  <div className="w-[70%] flex justify-between px-10">
                     {phases.map(ph => (
                       <div key={ph} className="flex-1 text-center text-[10px] font-semibold text-white/40 uppercase tracking-widest">
                          {ph}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-6">
                  <AnimatePresence mode="popLayout">
                     {filteredData.map((p) => (
                       <motion.div key={p.id} initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} exit={{opacity:0}} layout className="group">
                          <div className="flex flex-col md:flex-row md:items-center gap-8 cursor-pointer bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#00F2FF]/30 transition-all shadow-lg" onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}>
                             <div className="md:w-[30%] pr-6">
                                <div className="flex items-center gap-6">
                                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-current shadow-[0_0_15px_currentColor] transition-all group-hover:rotate-[10deg] ${p.color==="cyan" ? "bg-[#00F2FF]/10 text-[#00F2FF] border-[#00F2FF]/30" : "bg-[#7B61FF]/10 text-[#7B61FF] border-[#7B61FF]/30"}`}>
                                      {p.category==="Diagnostic"?<Microscope className="w-8 h-8"/> : p.category==="Therapeutic"?<Zap className="w-8 h-8"/> : <Beaker className="w-8 h-8"/>}
                                   </div>
                                   <div>
                                      <h3 className="font-heading font-semibold text-white text-2xl leading-none group-hover:text-[#00F2FF] transition-colors tracking-tighter mb-2">{p.name}</h3>
                                      <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest leading-tight">{p.ind}</p>
                                   </div>
                                </div>
                             </div>

                             <div className="md:w-[70%] relative h-10 bg-[#0a0b16] border border-white/10 rounded-full overflow-hidden shadow-inner flex items-center">
                                <motion.div 
                                   initial={{width: 0}}
                                   animate={{width: (p.phaseIndex / 4) * 100 + "%"}}
                                   className={`absolute inset-y-0 left-0 transition-all ${p.color==="cyan" ? "bg-gradient-to-r from-transparent to-[#00F2FF]" : "bg-gradient-to-r from-transparent to-[#7B61FF]"}`}
                                >
                                   <div className="absolute inset-y-0 right-0 w-8 flex items-center justify-center">
                                      <div className={`w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse`} />
                                   </div>
                                </motion.div>
                                <div className="absolute inset-0 flex items-center px-8 pointer-events-none">
                                   <span className="text-[10px] font-semibold text-white ml-auto opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{p.phase} Status</span>
                                </div>
                             </div>
                          </div>

                          <AnimatePresence>
                             {expandedId === p.id && (
                               <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                                  <div className="pt-8 pb-8 px-4 grid lg:grid-cols-3 gap-12">
                                     <div className="lg:col-span-2 space-y-8">
                                        <div>
                                           <span className={`text-[10px] font-heading font-semibold uppercase tracking-widest mb-4 block ${p.color==="cyan" ? "text-[#00F2FF]" : "text-[#7B61FF]"}`}>Scientific Dossier</span>
                                           <h4 className="text-3xl font-heading font-semibold text-white mb-4 tracking-tight uppercase">Mechanism of Action</h4>
                                           <p className="text-white/60 leading-relaxed text-sm font-light">{p.fullContent}</p>
                                        </div>
                                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group/mkt">
                                           <div className={`absolute bottom-[-20%] right-[-10%] opacity-[0.05] group-hover/mkt:scale-110 transition-transform ${p.color==="cyan" ? "text-[#00F2FF]" : "text-[#7B61FF]"}`}><TrendingUp className="w-48 h-48" /></div>
                                           <div className="flex items-center gap-4 border-b border-white/10 pb-4 relative z-10 mb-4">
                                              <Activity className={`w-6 h-6 ${p.color==="cyan" ? "text-[#00F2FF]" : "text-[#7B61FF]"}`} />
                                              <p className="text-[10px] font-heading font-semibold text-white uppercase tracking-widest">Market Strategy & Outlook</p>
                                           </div>
                                           <p className="text-white/60 font-light leading-relaxed text-sm relative z-10">{p.marketPotential}</p>
                                        </div>
                                     </div>
                                     <div className={`bg-gradient-to-br p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border ${p.color==="cyan" ? "border-[#00F2FF]/20 from-[#00F2FF]/10 to-transparent" : "border-[#7B61FF]/20 from-[#7B61FF]/10 to-transparent"} relative overflow-hidden`}>
                                        <h4 className={`text-[10px] font-heading font-semibold uppercase tracking-widest mb-8 flex items-center gap-3 ${p.color==="cyan" ? "text-[#00F2FF]" : "text-[#7B61FF]"}`}><LayoutGrid className="w-4 h-4"/> Institutional Milestones</h4>
                                        <ul className="space-y-6 relative z-10">
                                           {p.milestones.map((ms, idx) => (
                                             <li key={idx} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><CheckCircle2 className={`w-3 h-3 ${p.color==="cyan" ? "text-[#00F2FF]" : "text-[#7B61FF]"}`}/></div>
                                                <span className="text-sm text-white/80 font-light leading-snug">{ms}</span>
                                             </li>
                                           ))}
                                        </ul>
                                     </div>
                                  </div>
                               </motion.div>
                             )}
                          </AnimatePresence>
                       </motion.div>
                     ))}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* ── SCIENCE SECTION ─────────────────────────────── */}
      <section className="py-32 relative text-center">
         <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-widest mb-6 block">Theranostic Core Engine</span>
            <h2 className="text-5xl md:text-7xl font-heading font-semibold text-white leading-none mb-10 tracking-tighter">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#7B61FF]">Isotope</span> Exchange.</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-16 font-light">
               One platform, two distinct outcomes. By swapping the diagnostic 'scout' for a therapeutic 'sniper' isotope, we ensure 100% molecular alignment between imaging and treatment.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="glass-panel p-10 hover:border-[#00F2FF]/40 transition-all">
                  <Microscope className="w-12 h-12 text-[#00F2FF] mx-auto mb-6"/>
                  <h4 className="font-heading font-semibold text-white text-xl mb-3 tracking-tight uppercase">Diagnostic</h4>
                  <p className="text-white/50 text-sm font-light">Identifying target receptor load with near-perfect sensitivity across PET/CT protocols.</p>
               </div>
               <div className="glass-panel-violet p-10 hover:border-[#7B61FF]/40 transition-all">
                  <Zap className="w-12 h-12 text-[#7B61FF] mx-auto mb-6"/>
                  <h4 className="font-heading font-semibold text-[#7B61FF] text-xl mb-3 tracking-tight uppercase">Therapeutic</h4>
                  <p className="text-white/50 text-sm font-light">Direct and systematic ablation of the identified tumor clusters via potent radio-payloads.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section className="py-24 text-center border-t border-white/5 bg-white/5">
         <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-8 tracking-tighter leading-none">Visionary Science. <span className="text-[#00F2FF]">Global Scale.</span></h3>
            <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">We prioritize clinical success through transparency and scientific collaboration across the global hematology and oncology networks.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href={`/${locale}/partnering/licensing`} className="btn-glass btn-cyan inline-flex items-center gap-4">
                 Licensing Matrix <Globe2 className="w-4 h-4" />
               </Link>
               <Link href={`/${locale}/investors/portal`} className="px-8 py-3 border border-white/20 text-white font-heading font-semibold rounded-full hover:bg-white/10 transition-all text-[11px] uppercase tracking-widest flex items-center gap-4">
                 Investor Fact-Sheet <BarChart3 className="w-4 h-4" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
