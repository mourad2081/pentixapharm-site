"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { 
  Beaker, ShieldAlert, Target, Zap, Microscope, Info, LayoutGrid, 
  CheckCircle2, TrendingUp, Globe2, BarChart3, Atom, Activity, 
  ChevronRight, FlaskConical, Target as TargetIcon 
} from "lucide-react";
import Link from "next/link";
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

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function PipelinePage() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("pfor-pa");
  const locale = useLocale();

  const filteredData = useMemo(() => {
    return filter === "All" ? PIPELINE : PIPELINE.filter(p => p.category === filter);
  }, [filter]);

  const phases = ["Preclinical", "Phase 1", "Phase 2", "Phase 3", "Approval"];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white transition-colors duration-700 pb-32 pt-24 selection:bg-[#00BDD5] selection:text-white">
      
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <AnimatedBg />
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] bg-[#00BDD5]/5 dark:bg-[#00BDD5]/10 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 px-10 py-4 rounded-full inline-block mb-12 shadow-xl italic mt-10">
              Institutional Asset Matrix
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9rem] font-heading font-extrabold text-[#001533] dark:text-white mb-12 leading-[0.75] tracking-tighter italic transition-colors">
              Clinical <br/><span className="text-[#00BDD5]">Roadmap.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100 dark:border-white/5 transition-colors">
              From molecular breakthrough to Phase 3 pivotal data. We are advancing a diversified portfolio of CXCR4 and CD24 targeted ligands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PIPELINE INTERACTIVE CHART ─────────────────────────────────────── */}
      <section className="py-24 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
               <div className="flex bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-100 dark:border-white/10 p-2 rounded-full shadow-2xl transition-colors">
                  {["All", "Diagnostic", "Therapeutic", "Antibody"].map((f) => (
                    <button key={f} onClick={() => setFilter(f)} 
                      className={`px-10 py-3 rounded-full font-heading font-extrabold text-[10px] uppercase tracking-widest transition-all italic ${
                        filter === f ? "bg-[#001533] dark:bg-[#00BDD5] text-white dark:text-[#001533] shadow-xl" : "text-slate-400 hover:text-[#001533] dark:hover:text-white"
                      }`}>
                       {f}
                    </button>
                  ))}
               </div>
               <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] flex items-center gap-4 italic transition-colors">
                  <Info className="w-5 h-5 text-[#00BDD5]" /> SELECT ASSET TO EXAMINE DATASETS
               </div>
            </div>

            <div className="bg-white dark:bg-[#121428] rounded-[4rem] p-10 lg:p-20 shadow-4xl border border-slate-100 dark:border-white/5 transition-colors">
               <div className="flex items-center border-b border-slate-100 dark:border-white/10 pb-10 mb-16 hidden md:flex transition-colors">
                  <div className="w-[30%] text-[10px] font-extrabold text-slate-300 dark:text-slate-600 uppercase tracking-[0.5em] pl-10 italic">Target Designation</div>
                  <div className="w-[70%] flex justify-between px-12">
                     {phases.map(ph => (
                       <div key={ph} className="flex-1 text-center text-[10px] font-extrabold text-slate-300 dark:text-slate-600 uppercase tracking-[0.5em] italic">
                          {ph}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-10">
                  <AnimatePresence mode="wait">
                     {filteredData.map((p) => (
                       <motion.div key={p.id} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, x:-20}} className="group">
                          <div 
                            className={"flex flex-col md:flex-row md:items-center gap-12 cursor-pointer p-10 rounded-[3.5rem] border transition-all duration-700 shadow-xl " + 
                              (expandedId === p.id 
                                ? "bg-[#001533] text-white border-[#001533] scale-[1.02]" 
                                : "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:shadow-3xl")
                            } 
                            onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                          >
                             <div className="md:w-[30%]">
                                <div className="flex items-center gap-8">
                                   <div className={"w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 border transition-all group-hover:rotate-12 " + 
                                     (expandedId === p.id ? "bg-white/10 border-white/20 text-[#00BDD5]" : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/10 text-[#00BDD5]")}>
                                      {p.category==="Diagnostic"?<Microscope className="w-10 h-10"/> : p.category==="Therapeutic"?<Zap className="w-10 h-10"/> : <Beaker className="w-10 h-10"/>}
                                   </div>
                                   <div>
                                      <h3 className={"font-heading font-extrabold text-3xl leading-none italic tracking-tighter mb-3 transition-colors " + (expandedId === p.id ? "text-white" : "text-[#001533] dark:text-white")}>{p.name}</h3>
                                      <p className={"text-[10px] font-extrabold uppercase tracking-[0.3em] italic transition-colors " + (expandedId === p.id ? "text-[#00BDD5]" : "text-slate-400")}>{p.ind}</p>
                                   </div>
                                </div>
                             </div>

                             <div className="md:w-[70%] relative h-12 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-full overflow-hidden shadow-inner flex items-center transition-colors">
                                <motion.div 
                                   initial={{width: 0}}
                                   animate={{width: (p.phaseIndex / 4) * 100 + "%"}}
                                   transition={{duration: 1.5, ease: "circOut"}}
                                   className={`absolute inset-y-0 left-0 transition-all ${expandedId === p.id ? "bg-white" : "bg-[#00BDD5]"}`}
                                >
                                   <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center">
                                      <div className={`w-3 h-3 rounded-full animate-pulse shadow-[0_0_15px_currentColor] ${expandedId === p.id ? "bg-[#001533] text-[#001533]" : "bg-white text-white"}`} />
                                   </div>
                                </motion.div>
                             </div>
                          </div>

                          <AnimatePresence>
                             {expandedId === p.id && (
                               <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                                  <div className="py-16 px-6 grid lg:grid-cols-3 gap-20">
                                     <div className="lg:col-span-2 space-y-12">
                                        <div className="border-l-4 border-[#00BDD5] pl-10">
                                           <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.5em] mb-6 block italic">Scientific Dossier</span>
                                           <h4 className="text-4xl md:text-5xl font-heading font-extrabold text-[#001533] dark:text-white mb-8 tracking-tighter italic transition-colors">Mechanism of Action</h4>
                                           <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-light italic transition-colors">{p.fullContent}</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-white/5 p-12 rounded-[4rem] border border-slate-100 dark:border-white/10 relative overflow-hidden group/mkt transition-all">
                                           <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.03] group-hover/mkt:scale-110 transition-transform text-[#001533] dark:text-white"><TrendingUp className="w-64 h-64" /></div>
                                           <div className="flex items-center gap-6 border-b border-slate-200 dark:border-white/10 pb-6 relative z-10 mb-8 transition-colors">
                                              <Activity className="w-8 h-8 text-[#00BDD5]" />
                                              <p className="text-[12px] font-heading font-extrabold text-[#001533] dark:text-white uppercase tracking-[0.4em] italic transition-colors">Commercial Strategy & Market Depth</p>
                                           </div>
                                           <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-lg italic relative z-10 transition-colors">{p.marketPotential}</p>
                                        </div>
                                     </div>
                                     <div className="bg-[#001533] p-12 rounded-[4rem] shadow-4xl text-white relative overflow-hidden border border-white/10">
                                        <h4 className="text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] mb-12 flex items-center gap-4 text-[#00BDD5] italic"><LayoutGrid className="w-5 h-5"/> Institutional Milestones</h4>
                                        <ul className="space-y-10 relative z-10">
                                           {p.milestones.map((ms, idx) => (
                                             <li key={idx} className="flex gap-6 items-start group/ms">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover/ms:bg-[#00BDD5] transition-all"><CheckCircle2 className="w-4 h-4 text-[#00BDD5] group-hover/ms:text-white transition-colors"/></div>
                                                <span className="text-lg text-slate-300 font-light leading-snug italic group-hover:text-white transition-colors">{ms}</span>
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

      {/* ── THERANOSTIC PRINCIPLES ────────────────────────────────────────── */}
      <section className="py-48 relative text-center bg-white dark:bg-[#0a0b16] transition-colors duration-700">
         <div className="container mx-auto px-6 max-w-5xl">
            <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.7em] mb-10 block italic">Theranostic Core Engine</span>
            <h2 className="text-6xl md:text-[8rem] font-heading font-extrabold text-[#001533] dark:text-white leading-[0.85] mb-16 tracking-tighter italic transition-colors">The <br/><span className="text-[#00BDD5]">Isotope</span> Logic.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed mb-24 font-light italic transition-colors">
               One molecular platform, dual tactical outcomes. By swapping the diagnostic 'scout' for a high-energy 'sniper' isotope, we ensure 1:1 molecular alignment between imaging and direct ablation.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-slate-50 dark:bg-white/5 p-16 rounded-[4rem] border border-slate-100 dark:border-white/10 hover:shadow-3xl transition-all group">
                  <Microscope className="w-20 h-20 text-[#00BDD5] mx-auto mb-10 group-hover:scale-110 transition-transform"/>
                  <h4 className="font-heading font-extrabold text-[#001533] dark:text-white text-3xl mb-6 tracking-tighter italic uppercase transition-colors">Diagnostic Integration</h4>
                  <p className="text-slate-400 text-lg font-light italic leading-relaxed transition-colors">Establishing target receptor density with extreme precision via Gallium-68 PET/CT informatics.</p>
               </div>
               <div className="bg-[#001533] p-16 rounded-[4rem] border border-white/5 shadow-2xl group text-white">
                  <Zap className="w-20 h-20 text-[#00BDD5] mx-auto mb-10 group-hover:scale-110 transition-transform"/>
                  <h4 className="font-heading font-extrabold text-white text-3xl mb-6 tracking-tighter italic uppercase">Therapeutic Focus</h4>
                  <p className="text-slate-300 text-lg font-light italic leading-relaxed">Direct, targeted annihilation of metastatic clusters using powerful Yttrium-90 or Lutetium-177 payloads.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── FINAL GLOBAL CTA ────────────────────────────────────────────────── */}
      <section className="py-32 text-center border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#121428] transition-colors duration-700">
         <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] dark:text-white mb-10 tracking-tighter leading-none italic transition-colors">Visionary Science. <br/><span className="text-[#00BDD5]">Institutional Scale.</span></h3>
            <p className="text-slate-500 dark:text-slate-400 text-2xl font-light italic leading-relaxed mb-20 transition-colors">We prioritize clinical velocity and regulatory transparency via deep scientific integration with the global oncology networks.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
               <Link href={`/${locale}/partnering/licensing`} className="px-16 py-8 bg-[#00BDD5] text-white rounded-2xl font-heading font-extrabold text-[12px] uppercase tracking-[0.5em] hover:bg-[#001533] transition-all shadow-4xl italic flex items-center gap-6">
                 Licensing Hub <Globe2 className="w-5 h-5" />
               </Link>
               <Link href={`/${locale}/investors/portal`} className="px-12 py-5 border-2 border-slate-100 dark:border-white/10 text-slate-500 dark:text-white font-heading font-extrabold rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-[11px] uppercase tracking-widest flex items-center gap-6 italic">
                 Investor Intelligence <BarChart3 className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
