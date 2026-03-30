"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ChevronDown, Beaker, ShieldAlert, Target, Zap, Microscope, BookOpen, Activity, ArrowRight } from "lucide-react";

const PIPELINE = [
  { 
    id: "pfor",
    name: "PentixaFor",
    molecule: "[⁶⁸Ga]Ga-PentixaFor",
    type: "Diagnostic PET/CT Tracer",
    ind: "Primary Aldosteronism (PA) / Hypertension",
    phase: "Phase 3 Ready",
    phaseNum: 3,
    color: "emerald",
    desc: "A highly specific, first-in-class PET/CT diagnostic agent targeting the CXCR4 receptor. PANDA is our pivotal global Phase 3 study aimed at confirming PentixaFor's superiority over Adrenal Vein Sampling (AVS) to diagnose patients with primary aldosteronism non-invasively.",
    details: [
       { title: "Mechanism of Action", text: "Binds with high affinity to the CXCR4 receptor, a chemokine receptor overexpressed in PA adenomas. When radiolabelled with Gallium-68, it allows high-resolution, full-body PET/CT visualization." },
       { title: "Clinical Need", text: "Primary Aldosteronism affects millions and is a leading cause of secondary hypertension. Current standard-of-care, AVS, is invasive, technically challenging, and not widely available." },
       { title: "Development Milestone", text: "Phase 3 PANDA protocol cleared. Anticipated start of dosing shortly." }
    ]
  },
  { 
    id: "pther",
    name: "PentixaTher",
    molecule: "[⁹⁰Y]Y / [¹⁷⁷Lu]Lu-PentixaTher",
    type: "Targeted Radiotherapy",
    ind: "Hemato-Oncology (AML, Multiple Myeloma)",
    phase: "Phase 1 / 2",
    phaseNum: 2,
    color: "cyan",
    desc: "A therapeutic counterpart to PentixaFor. By exchanging the diagnostic isotope for a therapeutic one (Lutetium-177 or Yttrium-90), PentixaTher delivers targeted, high-energy intra-tumoral radiation directly to CXCR4-expressing cancer cells.",
    details: [
       { title: "Theranostic Pair", text: "Patients are first screened with PentixaFor. If they show high CXCR4 tumor expression, they are eligible for targeted ablation with PentixaTher." },
       { title: "Ongoing Trials", text: "PENTILULA study in Relapsed/Refractory AML. Currently advancing through dose-escalation cohorts, showing strong safety and promising efficacy signals." },
       { title: "Future Indications", text: "Multiple Myeloma, DLBCL, and T-cell lymphomas." }
    ]
  },
  { 
    id: "gt008",
    name: "GT-008",
    molecule: "Anti-CD24 Glycan mAb",
    type: "Monoclonal Antibody",
    ind: "Solid Tumors (Breast, Ovarian)",
    phase: "Preclinical",
    phaseNum: 1,
    color: "gold",
    desc: "A novel 'First-in-Class' monoclonal antibody platform targeting a unique, tumor-specific glycan epitope on the CD24 receptor. This allows precise tumor targeting without the off-target toxicity associated with generic CD24 binding.",
    details: [
       { title: "Mechanism of Action", text: "Specifically binds to the glycan-modified version of CD24 present primarily on malignant cells, initiating antibody-dependent cellular cytotoxicity (ADCC) and macrophage phagocytosis." },
       { title: "Preclinical Data", text: "Demonstrated complete regression in patient-derived xenograft (PDX) models of triple-negative breast cancer with a single systemic dose." },
       { title: "Next Steps", text: "IND-enabling toxicology studies are ongoing, preparing for first-in-human entry." }
    ]
  }
];

export default function PipelinePage() {
  const [expanded, setExpanded] = useState<string | null>("pfor");

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[#00A3E0]/[0.02] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span className="text-[#00A3E0] text-sm font-bold uppercase tracking-widest bg-[#00A3E0]/10 px-5 py-2 rounded-full inline-block mb-4 border border-[#00A3E0]/20">Clinical Programs</span>
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-6">Pipeline & Assets</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore our comprehensive portfolio of precision-targeted theranostics and antibodies designed to address severe unmet medical needs in endocrinology and oncology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-200">
              <div className="flex px-4 pb-4 border-b border-slate-200 mb-6 hidden md:flex text-xs font-bold text-slate-400 uppercase tracking-widest">
                 <div className="w-1/3">Compound / Mechanism</div>
                 <div className="w-1/4">Indication</div>
                 <div className="w-1/3">Stage of Development</div>
                 <div className="w-12 text-center">More</div>
              </div>

              <div className="space-y-4">
                {PIPELINE.map((p) => {
                  const isEx = expanded === p.id;
                  const cColor = p.color==="emerald"?"#00B1AB":p.color==="cyan"?"#00A3E0":"#F2A900";
                  const bgClass = p.color==="emerald"?"bg-[#00B1AB]":p.color==="cyan"?"bg-[#00A3E0]":"bg-[#F2A900]";
                  
                  return (
                    <motion.div layout key={p.id} className={"border rounded-2xl overflow-hidden transition-all duration-300 " + (isEx ? "border-slate-300 shadow-md bg-white" : "border-slate-200 bg-slate-50 hover:bg-white")}>
                       {/* Header row (Clickable) */}
                       <button onClick={() => setExpanded(isEx ? null : p.id)} className="w-full flex flex-col md:flex-row md:items-center text-left p-5 gap-4 md:gap-0 outline-none">
                          <div className="md:w-1/3 flex items-center gap-4">
                            <div className={"w-12 h-12 flex-shrink-0 shadow-sm rounded-xl flex items-center justify-center bg-white border border-slate-200 " + (isEx?"scale-110 shadow-md":"") + " transition-transform"}>
                               {p.color==="emerald"?<Microscope color={cColor}/> : p.color==="cyan"?<Zap color={cColor}/> : <Beaker color={cColor}/>}
                            </div>
                            <div>
                              <h2 className="text-xl font-heading font-extrabold text-[#002A54] group-hover:text-[#00A3E0] transition-colors">{p.name}</h2>
                              <p className="text-xs text-slate-500 font-bold truncate max-w-[200px]">{p.molecule}</p>
                            </div>
                          </div>
                          <div className="md:w-1/4">
                             <div className="text-sm font-semibold text-slate-700">{p.ind}</div>
                             <div className="text-xs text-slate-400 md:hidden mt-1">{p.type}</div>
                          </div>
                          <div className="md:w-1/3 flex items-center gap-4">
                             <div className="flex-1 max-w-[150px]">
                               <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                  <motion.div initial={{width:0}} animate={{width: (p.phaseNum / 4) * 100 + "%"}} className={"h-full " + bgClass} />
                               </div>
                               <div className="text-xs font-bold text-[#002A54] mt-2">{p.phase}</div>
                             </div>
                          </div>
                          <div className="md:w-12 flex justify-end md:justify-center">
                             <ChevronDown className={"w-5 h-5 text-slate-400 transition-transform duration-300 " + (isEx ? "rotate-180" : "")} />
                          </div>
                       </button>

                       {/* Expandable Content */}
                       <AnimatePresence>
                         {isEx && (
                           <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                              <div className="p-5 md:p-8 pt-0 border-t border-slate-100 bg-white">
                                 <p className="text-slate-600 leading-relaxed mb-8 mt-6 max-w-3xl">{p.desc}</p>
                                 
                                 <div className="grid md:grid-cols-3 gap-6">
                                    {p.details.map((d, i) => (
                                      <div key={i} className="bg-[#F8FAFD] border border-slate-100 p-5 rounded-2xl">
                                         <h4 className="font-bold text-[#002A54] mb-2 flex items-center gap-2">
                                            {i===0 && <Activity className="w-4 h-4 text-[#00A3E0]" />}
                                            {i===1 && <Target className="w-4 h-4 text-[#00B1AB]" />}
                                            {i===2 && <ArrowRight className="w-4 h-4 text-[#F2A900]" />}
                                            {d.title}
                                         </h4>
                                         <p className="text-sm text-slate-600 leading-relaxed">{d.text}</p>
                                      </div>
                                    ))}
                                 </div>
                              </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
