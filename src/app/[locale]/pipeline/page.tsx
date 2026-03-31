"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ChevronDown, Beaker, ShieldAlert, Target, Zap, Microscope, BookOpen, Activity, ArrowRight, Info, LayoutGrid, CheckCircle2, TrendingUp, Globe2, BarChart3, Atom } from "lucide-react";

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

  const filteredData = useMemo(() => {
    return filter === "All" ? PIPELINE : PIPELINE.filter(p => p.category === filter);
  }, [filter]);

  const phases = ["Preclinical", "Phase 1", "Phase 2", "Phase 3", "Approval"];
  const MOL_IMG = "pipeline_clinical_premium_png_1774941240816.png";

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-24">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#010816] border-b border-white/5 text-white">
         <div className="absolute inset-0 z-0 overflow-hidden scale-110 opacity-60 mix-blend-screen">
            <img src={`/${MOL_IMG}`} className="w-full h-full object-cover animate-slow-zoom" alt="Pipeline Background" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-[#010816]/50 to-transparent" />
         </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <span className="text-cyan text-xs font-bold uppercase tracking-[0.3em] bg-white/5 backdrop-blur-xl px-10 py-3 rounded-full inline-block mb-10 border border-white/10 italic shadow-2xl">Clinical Evolution Platform</span>
            <h1 className="text-6xl md:text-[7rem] font-heading font-extrabold text-white mb-8 leading-[0.8] italic tracking-tighter drop-shadow-2xl">Advanced <span className="text-teal">Pipeline</span></h1>
            <p className="text-slate-300 text-2xl leading-relaxed font-light max-w-4xl italic border-l-2 border-cyan/40 pl-8">
              From breakthrough discovery to Phase 3 readiness. We are developing proprietary ligands to transform treatment paradigms for orphan diseases and hard-to-treat cancers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PIPELINE CHART ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
               <div className="flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-xl">
                  {["All", "Diagnostic", "Therapeutic", "Antibody"].map((f) => (
                    <button key={f} onClick={() => setFilter(f)} 
                      className={"px-7 py-3.5 rounded-xl font-heading font-extrabold text-[11px] uppercase tracking-wider transition-all " + (filter===f ? "bg-[#031835] text-white shadow-lg scale-105" : "text-slate-500 hover:bg-slate-50 hover:text-[#031835]")}>
                       {f}
                    </button>
                  ))}
               </div>
               <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3 italic">
                  <Info className="w-4 h-4 text-cyan" /> Click Molecule bars to expand scientific details
               </div>
            </div>

            <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden relative">
               <div className="p-8 lg:p-20">
                  <div className="flex items-center border-b border-slate-100 pb-8 mb-16 hidden md:flex">
                     <div className="w-[30%] text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.4em] pl-6 italic">Target / Asset Indication</div>
                     <div className="w-[70%] flex justify-between px-10">
                        {phases.map(ph => (
                          <div key={ph} className="flex-1 text-center text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] border-l border-slate-50 first:border-none italic">
                             {ph}
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-16">
                     <AnimatePresence mode="popLayout">
                        {filteredData.map((p) => (
                          <motion.div key={p.id} initial={{opacity:0, scale:0.98, y:20}} animate={{opacity:1, scale:1, y:0}} exit={{opacity:0, scale:0.95}} layout className="group">
                             <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0 cursor-pointer mb-4" onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}>
                                <div className="md:w-[30%] pr-10">
                                   <div className="flex items-center gap-6">
                                      <div className={"w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl transition-transform group-hover:rotate-6 " + (p.color==="teal"?"bg-teal/10 text-teal":p.color==="cyan"?"bg-cyan/10 text-cyan":"bg-helixRed/10 text-helixRed")}>
                                         {p.category==="Diagnostic"?<Microscope className="w-7 h-7"/> : p.category==="Therapeutic"?<Zap className="w-7 h-7"/> : <Beaker className="w-7 h-7"/>}
                                      </div>
                                      <div>
                                         <h3 className="font-heading font-extrabold text-[#031835] text-2xl leading-tight group-hover:text-cyan transition-colors italic">{p.name}</h3>
                                         <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mt-2 italic">{p.ind}</p>
                                      </div>
                                   </div>
                                </div>

                                <div className="md:w-[70%] relative h-14 bg-slate-50 border border-slate-100 rounded-full overflow-hidden shadow-inner group-hover:border-slate-200 transition-all">
                                   <motion.div 
                                      initial={{width: 0}}
                                      animate={{width: (p.phaseIndex / 4) * 100 + "%"}}
                                      className={"absolute inset-y-0 left-0 transition-all " + (p.color==="teal"?"bg-gradient-to-r from-teal/40 to-teal":p.color==="cyan"?"bg-gradient-to-r from-cyan/40 to-cyan":"bg-gradient-to-r from-helixRed/40 to-helixRed")}
                                   >
                                      <div className="absolute inset-y-0 right-0 w-10 flex items-center justify-center">
                                         <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,1)]" />
                                      </div>
                                   </motion.div>
                                   <div className="absolute inset-x-0 inset-y-0 flex justify-between pointer-events-none opacity-10">
                                      {phases.map((_, i) => <div key={i} className="flex-1 border-r border-slate-700 h-full last:border-none" />)}
                                   </div>
                                   <div className="absolute inset-0 flex items-center px-10 pointer-events-none">
                                      <span className="text-[10px] font-extrabold text-[#031835] ml-auto opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.3em] italic">{p.phase}</span>
                                   </div>
                                </div>
                             </div>

                             <AnimatePresence>
                                {expandedId === p.id && (
                                  <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                                     <div className="pt-12 pb-16 px-4 border-t border-slate-50 mt-10 grid lg:grid-cols-3 gap-16">
                                        <div className="lg:col-span-2 space-y-10">
                                           <div>
                                              <h4 className="text-2xl font-heading font-extrabold text-[#031835] mb-4 italic">Mechanism & Potential</h4>
                                              <p className="text-slate-600 leading-relaxed text-lg font-light italic">{p.fullContent}</p>
                                           </div>
                                           <div className="bg-[#F8FAFD] p-10 rounded-[3rem] border border-slate-100 space-y-6 shadow-inner">
                                              <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                                                 <TrendingUp className="w-6 h-6 text-cyan" />
                                                 <p className="text-xs font-heading font-extrabold text-[#031835] uppercase tracking-widest italic">Market Outlook</p>
                                              </div>
                                              <p className="text-slate-600 italic font-light leading-relaxed">{p.marketPotential}</p>
                                           </div>
                                           <div className="flex flex-wrap gap-4">
                                              <span className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-extrabold text-slate-500 uppercase tracking-widest shadow-sm">Molecule: {p.molecule}</span>
                                              <span className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-extrabold text-slate-500 uppercase tracking-widest shadow-sm">Lead Isotope: {p.id.includes('pfor')?'Ga-68':'Lu-177/Y-90'}</span>
                                           </div>
                                        </div>
                                        <div className="bg-[#031835] text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden group/card shadow-navy/30">
                                           <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/card:scale-110 transition-transform"><Atom className="w-32 h-32" /></div>
                                           <h4 className="text-sm font-heading font-extrabold uppercase tracking-[0.4em] mb-10 flex items-center gap-3 italic text-cyan"><LayoutGrid className="w-4 h-4"/> Path to Clinic</h4>
                                           <ul className="space-y-6 relative z-10">
                                              {p.milestones.map((ms, idx) => (
                                                <li key={idx} className="flex gap-5 items-start">
                                                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/card:bg-cyan/20 transition-colors"><CheckCircle2 className="w-3.5 h-3.5 text-cyan"/></div>
                                                   <span className="text-sm text-slate-300 font-medium italic leading-snug">{ms}</span>
                                                </li>
                                              ))}
                                           </ul>
                                           <div className="mt-12 bg-white/5 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                                              <p className="text-[10px] font-bold text-[#00B1AB] uppercase tracking-widest mb-3 italic">Commercial Readiness</p>
                                              <p className="text-xs text-slate-400 font-light leading-relaxed">GMP scale-up and Centralized Radio-Pharmacy logistics secured for pivotal phases.</p>
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

      {/* ── NEW FEATURE: MOA / SCIENCE SECTION ─────────────────────────────── */}
      <section className="py-28 bg-white border-y border-slate-100 overflow-hidden">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
                  <span className="text-cyan text-xs font-extrabold uppercase tracking-[0.4em] italic mb-6 block">Molecular Strategy</span>
                  <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#031835] leading-tight mb-8 italic">The <span className="text-teal">Seeing</span> and <span className="text-cyan">Treating</span> Cycle</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light italic">
                     Our pipeline is built on the unique ability of our ligands to carry dynamic payloads. By swapping a diagnostic isotope (Gallium-68) for a therapeutic one (Lutetium-177 or Yttrium-90) onto the same targeting platform (PentixaFor/Ther), we ensure precision ablation of tumors identified via PET/CT.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="p-10 bg-[#F8FAFD] rounded-[3rem] border border-slate-100 group hover:shadow-2xl transition-all">
                        <Activity className="w-10 h-10 text-teal mb-6 group-hover:scale-110 transition-transform"/>
                        <h4 className="font-heading font-extrabold text-[#031835] text-xl mb-3 tracking-tight italic text-teal">Diagnostic</h4>
                        <p className="text-slate-500 text-xs italic font-light">Identifying target expression at the molecular level with near 100% specificity.</p>
                     </div>
                     <div className="p-10 bg-[#031835] text-white rounded-[3rem] shadow-2xl group hover:shadow-cyan/20 transition-all">
                        <Zap className="w-10 h-10 text-cyan mb-6 group-hover:scale-110 transition-transform"/>
                        <h4 className="font-heading font-extrabold text-cyan text-xl mb-3 tracking-tight italic">Therapeutic</h4>
                        <p className="text-slate-400 text-xs italic font-light">Targeted radiopharmaceutical therapy (TRT) delivering precision cell death.</p>
                     </div>
                  </div>
               </motion.div>
               <div className="relative group">
                  <div className="absolute inset-0 bg-cyan opacity-[0.03] rounded-[4rem] group-hover:opacity-[0.06] transition-opacity" />
                  <img src="/biotech_lab_researcher_1774915416227.png" className="rounded-[4rem] shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700 object-cover h-[500px] w-full" alt="Precision Science" />
               </div>
            </div>
         </div>
      </section>

      {/* ── FINAL CTA: INVESTORS / PARTNERS ──────────────────────────────────── */}
      <section className="py-24">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="text-3xl font-heading font-extrabold text-[#031835] mb-8 tracking-tighter italic">Transforming Medicine Together</h3>
            <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light italic px-10">We are open to strategic discussions for regional licensing and co-development of our priority CXCR4 and CD24 assets.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-12 py-5 bg-[#031835] text-white font-heading font-extrabold rounded-full hover:bg-cyan hover:text-navy transition-all shadow-2xl flex items-center gap-3">
                 Licensing Portal <Globe2 className="w-5 h-5" />
               </button>
               <button className="px-12 py-5 bg-white border-2 border-[#031835] text-[#031835] font-heading font-extrabold rounded-full hover:bg-slate-50 transition-all shadow-sm flex items-center gap-3">
                 Investor Roadmap <BarChart3 className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
