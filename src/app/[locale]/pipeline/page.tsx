"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ChevronDown, Beaker, ShieldAlert, Target, Zap, Microscope, BookOpen, Activity, ArrowRight, Info, LayoutGrid, CheckCircle2 } from "lucide-react";

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
    milestones: ["IND cleared by FDA", "Ph3 Protocol PANDA approved", "Global dosing initiation 2026"]
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
    milestones: ["Ph2 data presentation 2025", "FDA Orphan Drug Designation"]
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
    milestones: ["Dose escalation completion 2025", "Initiation of PENTHERA registration trial"]
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
    milestones: ["Toxicology data 2025", "IND filling targeted 2026"]
  }
];

export default function PipelinePage() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("pfor-pa");

  const filteredData = useMemo(() => {
    return filter === "All" ? PIPELINE : PIPELINE.filter(p => p.category === filter);
  }, [filter]);

  const phases = ["Preclinical", "Phase 1", "Phase 2", "Phase 3", "Approval"];
  const MOL_IMG = "molecular_theranostic_structure_1774915435525.png";

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-24">
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-200">
         <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <img src={`/${MOL_IMG}`} className="w-[500px] h-[500px] object-contain rotate-12" />
         </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <span className="text-cyan text-xs font-bold uppercase tracking-[0.2em] bg-cyan/10 px-6 py-2.5 rounded-full inline-block mb-6 border border-cyan/20">The Theranostic Engine</span>
            <h1 className="text-6xl md:text-7xl font-heading font-extrabold text-[#002A54] mb-8 leading-tight">Advanced <span className="text-teal">Pipeline</span></h1>
            <p className="text-slate-600 text-xl leading-relaxed font-light max-w-3xl">
              From breakthrough discovery to Phase 3 readiness. We are developing proprietary ligands to transform treatment paradigms for orphan diseases and hard-to-treat cancers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-wrap items-center justify-between mb-12 gap-8">
               <div className="flex bg-white/50 border border-slate-200 p-1.5 rounded-2xl shadow-sm">
                  {["All", "Diagnostic", "Therapeutic", "Antibody"].map((f) => (
                    <button key={f} onClick={() => setFilter(f)} 
                      className={"px-6 py-3 rounded-xl font-bold text-sm transition-all " + (filter===f ? "bg-[#002A54] text-white shadow-lg" : "text-slate-500 hover:bg-slate-100 hover:text-[#002A54]")}>
                       {f}
                    </button>
                  ))}
               </div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden lg:flex items-center gap-2">
                  <Info className="w-4 h-4" /> Click on bars to expand details
               </div>
            </div>

            <div className="bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
               <div className="p-8 lg:p-14">
                  <div className="flex items-center border-b border-slate-100 pb-6 mb-12 hidden md:flex">
                     <div className="w-[30%] text-xs font-bold text-slate-400 uppercase tracking-widest pl-4">Asset / Indication</div>
                     <div className="w-[70%] flex justify-between px-8">
                        {phases.map(ph => (
                          <div key={ph} className="flex-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-50 first:border-none">
                             {ph}
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-12">
                     <AnimatePresence mode="popLayout">
                        {filteredData.map((p) => (
                          <motion.div key={p.id} initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}} layout className="group">
                             <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 cursor-pointer mb-2" onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}>
                                <div className="md:w-[30%] pr-8">
                                   <div className="flex items-center gap-4">
                                      <div className={"w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg " + (p.color==="teal"?"bg-teal/10 text-teal":p.color==="cyan"?"bg-cyan/10 text-cyan":"bg-helixRed/10 text-helixRed")}>
                                         {p.category==="Diagnostic"?<Microscope className="w-6 h-6"/> : p.category==="Therapeutic"?<Zap className="w-6 h-6"/> : <Beaker className="w-6 h-6"/>}
                                      </div>
                                      <div>
                                         <h3 className="font-heading font-extrabold text-[#002A54] text-xl leading-tight group-hover:text-cyan transition-colors">{p.name}</h3>
                                         <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">{p.ind}</p>
                                      </div>
                                   </div>
                                </div>

                                <div className="md:w-[70%] relative h-12 bg-slate-50 border border-slate-100 rounded-full overflow-hidden shadow-inner group-hover:border-slate-200 transition-all">
                                   <motion.div 
                                      initial={{width: 0}}
                                      animate={{width: (p.phaseIndex / 4) * 100 + "%"}}
                                      className={"absolute inset-y-0 left-0 transition-all " + (p.color==="teal"?"bg-gradient-to-r from-teal/30 to-teal":p.color==="cyan"?"bg-gradient-to-r from-cyan/30 to-cyan":"bg-gradient-to-r from-helixRed/30 to-helixRed")}
                                   >
                                      <div className="absolute inset-y-0 right-0 w-8 flex items-center justify-center">
                                         <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-glow" />
                                      </div>
                                   </motion.div>
                                   <div className="absolute inset-x-0 inset-y-0 flex justify-between pointer-events-none opacity-20">
                                      {phases.map((_, i) => <div key={i} className="flex-1 border-r border-slate-400 h-full last:border-none" />)}
                                   </div>
                                   <div className="absolute inset-0 flex items-center px-8 pointer-events-none">
                                      <span className="text-[10px] font-bold text-navy ml-auto opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{p.phase}</span>
                                   </div>
                                </div>
                             </div>

                             <AnimatePresence>
                                {expandedId === p.id && (
                                  <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                                     <div className="pt-8 pb-12 px-2 border-t border-slate-50 mt-6 grid lg:grid-cols-3 gap-12">
                                        <div className="lg:col-span-2">
                                           <h4 className="text-xl font-heading font-extrabold text-navy mb-4">Mechanism & Potential</h4>
                                           <p className="text-slate-600 leading-relaxed mb-6 font-light">{p.fullContent}</p>
                                           <div className="flex flex-wrap gap-3">
                                              <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">Molecule: {p.molecule}</span>
                                              <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">Target: {p.id.includes('gt')?'CD24':'CXCR4'}</span>
                                           </div>
                                        </div>
                                        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-inner">
                                           <h4 className="text-sm font-bold text-navy uppercase tracking-[0.2em] mb-6 flex items-center gap-2"><LayoutGrid className="w-4 h-4 text-cyan"/> Latest Milestones</h4>
                                           <ul className="space-y-4">
                                              {p.milestones.map((ms, idx) => (
                                                <li key={idx} className="flex gap-4 items-start">
                                                   <div className="w-5 h-5 rounded-full bg-white border border-teal flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3 text-teal"/></div>
                                                   <span className="text-sm text-slate-600 font-medium">{ms}</span>
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
         </div>
      </section>
    </div>
  );
}
