"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { ChevronDown, Beaker, ShieldAlert, Target, Zap, Microscope, BookOpen, Activity, ArrowRight, Info, LayoutGrid, CheckCircle2, TrendingUp, Globe2, BarChart3, Atom } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const PIPELINE = [
  { 
    id: "pfor-pa",
    name: "PentixaFor",
    molecule: "[⁶⁸Ga]Ga-PentixaFor",
    category: "Diagnostic",
    ind: "Primary Aldosteronism (PA)",
    phase: "Phase 3 Ready",
    phaseIndex: 3, 
    color: "teal",
    desc: "A highly specific PET/CT diagnostic targeting CXCR4 overexpressed in PA adenomas. Designed to replace invasive Adrenal Vein Sampling (AVS).",
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
    color: "teal",
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
    color: "cyan",
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
    color: "helixRed",
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
  const MOL_IMG = "pipeline_clinical_premium_png_1774941240816.png";

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-32 selection:bg-[#00BDD5] selection:text-white overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent opacity-60" />
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none grayscale">
           <img src={`/${MOL_IMG}`} className="w-full h-full object-cover animate-slow-zoom" alt="Pipeline" />
        </div>
        <AnimatedBg />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full inline-block mb-12 border border-slate-100 shadow-xl italic mt-10">Clinical Innovation Matrix</span>
            <h1 className="text-6xl md:text-[9.5rem] font-heading font-extrabold text-[#001533] mb-12 italic leading-[0.75] tracking-tighter drop-shadow-sm">Advanced <br/><span className="text-[#00BDD5] underline decoration-[#00BDD5]/10 underline-offset-10 px-4">Pipeline.</span></h1>
            <motion.p className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              From breakthrough molecular discovery to Phase 3 registration readiness. We transform clinical standards through targeted radiochemistry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PIPELINE CHART ──────────────────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFC]">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
               <div className="flex bg-white/50 backdrop-blur-xl border border-slate-200 p-2 rounded-[2.5rem] shadow-2xl">
                  {["All", "Diagnostic", "Therapeutic", "Antibody"].map((f) => (
                    <button key={f} onClick={() => setFilter(f)} 
                      className={"px-10 py-5 rounded-[2rem] font-heading font-extrabold text-[10px] uppercase tracking-[0.2em] transition-all italic " + (filter===f ? "bg-[#001533] text-white shadow-xl scale-105" : "text-slate-400 hover:bg-white hover:text-[#001533] shadow-sm")}>
                       {f}
                    </button>
                  ))}
               </div>
               <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-4 italic opacity-60">
                  <Info className="w-5 h-5 text-[#00BDD5]" /> Interactive Science: Select an asset to expand dossier
               </div>
            </div>

            <div className="bg-white rounded-[5rem] shadow-4xl border border-slate-100 overflow-hidden relative">
               <div className="p-10 lg:p-24">
                  <div className="flex items-center border-b border-slate-100 pb-12 mb-16 hidden md:flex">
                     <div className="w-[30%] text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.5em] pl-10 italic">Target Asset / Indication Stack</div>
                     <div className="w-[70%] flex justify-between px-16">
                        {phases.map(ph => (
                          <div key={ph} className="flex-1 text-center text-[10px] font-extrabold text-slate-300 uppercase tracking-[0.4em] italic first:border-none">
                             {ph}
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-16">
                     <AnimatePresence mode="popLayout">
                        {filteredData.map((p) => (
                          <motion.div key={p.id} initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} exit={{opacity:0}} layout className="group">
                             <div className="flex flex-col md:flex-row md:items-center gap-10 cursor-pointer" onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}>
                                <div className="md:w-[30%] pr-10">
                                   <div className="flex items-center gap-8">
                                      <div className={"w-20 h-20 rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-xl transition-all group-hover:rotate-[15deg] group-hover:scale-110 " + (p.color==="teal"?"bg-[#00BDD5]/10 text-[#00BDD5]":p.color==="cyan"?"bg-[#00BDD5]/10 text-[#00BDD5]":"bg-red-50 text-red-500")}>
                                         {p.category==="Diagnostic"?<Microscope className="w-8 h-8"/> : p.category==="Therapeutic"?<Zap className="w-8 h-8"/> : <Beaker className="w-8 h-8"/>}
                                      </div>
                                      <div>
                                         <h3 className="font-heading font-extrabold text-[#001533] text-4xl leading-none group-hover:text-[#00BDD5] transition-colors italic tracking-tighter">{p.name}</h3>
                                         <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] mt-3 italic leading-tight">{p.ind}</p>
                                      </div>
                                   </div>
                                </div>

                                <div className="md:w-[70%] relative h-16 bg-slate-50 border border-slate-100 rounded-full overflow-hidden group-hover:shadow-inner transition-all shadow-sm">
                                   <motion.div 
                                      initial={{width: 0}}
                                      animate={{width: (p.phaseIndex / 4) * 100 + "%"}}
                                      className={"absolute inset-y-0 left-0 transition-all " + (p.color==="teal"?"bg-gradient-to-r from-[#00BDD5]/30 to-[#00BDD5]":p.color==="cyan"?"bg-gradient-to-r from-[#00BDD5]/30 to-[#00BDD5]":"bg-gradient-to-r from-red-200 to-red-500")}
                                   >
                                      <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center">
                                         <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-2xl" />
                                      </div>
                                   </motion.div>
                                   <div className="absolute inset-0 flex items-center px-12 pointer-events-none">
                                      <span className="text-[10px] font-extrabold text-[#001533] ml-auto opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.5em] italic">{p.phase} Status</span>
                                   </div>
                                </div>
                             </div>

                             <AnimatePresence>
                                {expandedId === p.id && (
                                  <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                                     <div className="pt-16 pb-16 px-6 border-t border-slate-50 mt-14 grid lg:grid-cols-3 gap-24">
                                        <div className="lg:col-span-2 space-y-12">
                                           <div>
                                              <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] mb-6 block italic">Scientific Dossier</span>
                                              <h4 className="text-4xl font-heading font-extrabold text-[#001533] mb-6 italic tracking-tight uppercase">Mechanism of Action</h4>
                                              <p className="text-slate-500 leading-relaxed text-xl font-light italic">{p.fullContent}</p>
                                           </div>
                                           <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 space-y-8 relative overflow-hidden group/mkt">
                                              <div className="absolute bottom-[-20%] right-[-10%] opacity-[0.03] group-hover/mkt:scale-110 transition-transform"><TrendingUp className="w-64 h-64 text-[#001533]" /></div>
                                              <div className="flex items-center gap-6 border-b border-white pb-6 relative z-10">
                                                 <Activity className="w-8 h-8 text-[#00BDD5]" />
                                                 <p className="text-[11px] font-heading font-extrabold text-[#001533] uppercase tracking-[0.3em] italic">Market Strategy & Outlook</p>
                                              </div>
                                              <p className="text-slate-500 italic font-light leading-relaxed text-lg relative z-10">{p.marketPotential}</p>
                                           </div>
                                        </div>
                                        <div className="bg-[#001533] text-white rounded-[5rem] p-16 shadow-4xl relative overflow-hidden group/card">
                                           <div className="absolute top-0 right-0 p-12 opacity-5"><Atom className="w-48 h-48" /></div>
                                           <h4 className="text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] mb-12 flex items-center gap-4 italic text-[#00BDD5]"><LayoutGrid className="w-5 h-5"/> Institutional Milestones</h4>
                                           <ul className="space-y-8 relative z-10">
                                              {p.milestones.map((ms, idx) => (
                                                <li key={idx} className="flex gap-6 items-start">
                                                   <div className="w-8 h-8 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5 border border-white/5 group-hover/card:border-[#00BDD5] transition-all"><CheckCircle2 className="w-4 h-4 text-[#00BDD5]"/></div>
                                                   <span className="text-base text-slate-300 font-light italic leading-snug">{ms}</span>
                                                </li>
                                              ))}
                                           </ul>
                                           <div className="mt-16 pt-12 border-t border-white/5">
                                              <p className="text-[10px] font-bold text-[#00BDD5] uppercase tracking-widest mb-4 italic">Operational Readiness</p>
                                              <p className="text-sm text-slate-400 font-light italic leading-relaxed">Centralized CMC logistics secured for Phase 3 PANDA trial execution across 25+ global sites.</p>
                                           </div>
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
         </div>
      </section>

      {/* ── SCIENCE SECTION ─────────────────────────────── */}
      <section className="py-48 bg-white border-y border-slate-100 overflow-hidden relative">
         <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-32 items-center">
            <motion.div>
               <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] italic mb-8 block">Theranostic Core Engine</span>
               <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] leading-none mb-12 italic tracking-tighter">The <span className="text-[#00BDD5]">Isotope</span> <br/> Exchange.</h2>
               <p className="text-slate-500 text-2xl leading-relaxed mb-16 font-light italic">
                  One platform, two distinct outcomes. By swapping the diagnostic 'scout' for a therapeutic 'sniper' isotope, we ensure 100% molecular alignment between imaging and treatment.
               </p>
               <div className="grid grid-cols-2 gap-10">
                  <div className="p-12 bg-slate-50 rounded-[4rem] group hover:bg-white hover:shadow-4xl transition-all border border-slate-100">
                     <Microscope className="w-12 h-12 text-[#00BDD5] mb-8 group-hover:scale-110 transition-transform"/>
                     <h4 className="font-heading font-extrabold text-[#001533] text-2xl mb-4 italic tracking-tight uppercase">Diagnostic</h4>
                     <p className="text-slate-400 text-sm italic font-light">Identifying target receptor load with near-perfect sensitivity across PET/CT protocols.</p>
                  </div>
                  <div className="p-12 bg-[#001533] text-white rounded-[4rem] shadow-4xl group transition-all border border-transparent">
                     <Zap className="w-12 h-12 text-[#00BDD5] mb-8 group-hover:scale-110 transition-transform"/>
                     <h4 className="font-heading font-extrabold text-[#00BDD5] text-2xl mb-4 italic tracking-tight uppercase">Therapeutic</h4>
                     <p className="text-slate-400 text-sm italic font-light">Direct and systematic ablation of the identified tumor clusters via potent radio-payloads.</p>
                  </div>
               </div>
            </motion.div>
            <div className="relative">
               <div className="absolute inset-0 bg-[#00BDD5]/5 rounded-[6rem] -rotate-3 group-hover:rotate-0 transition-transform duration-1000" />
               <img src="/biotech_lab_researcher_1774915416227.png" className="rounded-[6rem] shadow-4xl relative z-10 h-[700px] w-full object-cover grayscale opacity-80" alt="Science" />
            </div>
         </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section className="py-40 text-center">
         <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-[#001533] mb-12 tracking-tighter italic leading-none">Visionary Science. <br/> <span className="text-[#00BDD5]">Global Scale.</span></h3>
            <p className="text-slate-500 text-2xl leading-relaxed mb-20 font-light italic px-10">We prioritize clinical success through transparency and scientific collaboration across the global hematology and oncology networks.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <Link href={`/${locale}/partnering/licensing`} className="px-16 py-8 bg-[#001533] text-white font-heading font-extrabold rounded-full hover:bg-[#00BDD5] transition-all shadow-4xl text-[11px] uppercase tracking-[0.5em] italic flex items-center gap-6">
                 Licensing Matrix <Globe2 className="w-6 h-6" />
               </Link>
               <Link href={`/${locale}/investors/portal`} className="px-16 py-8 bg-white border-2 border-slate-100 text-[#001533] font-heading font-extrabold rounded-full hover:bg-slate-50 transition-all shadow-xl text-[11px] uppercase tracking-[0.5em] italic flex items-center gap-6">
                 Investor Fact-Sheet <BarChart3 className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
