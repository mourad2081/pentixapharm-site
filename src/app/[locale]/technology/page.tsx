"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { 
  ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers, 
  Factory, Container, Search, Database, Network, Fingerprint, Focus,
  ChevronRight, Globe2, Sparkles
} from "lucide-react";
import Link from "next/link";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Precision", icon: Atom, color: "text-[#00BDD5]" },
  { id: "cd24", label: "CD24 Glycans", icon: Layers, color: "text-[#7B61FF]" },
  { id: "theranostics", label: "Theranostics", icon: Activity, color: "text-[#00BDD5]" },
  { id: "cmc", label: "Global Supply", icon: Factory, color: "text-[#00BDD5]" },
  { id: "discovery", label: "Discovery", icon: Search, color: "text-[#001533]" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  const locale = useLocale();
  
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white transition-colors duration-700 pt-24 pb-32 selection:bg-[#00BDD5] selection:text-white">
      
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <AnimatedBg />
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] bg-[#00BDD5]/5 dark:bg-[#00BDD5]/10 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 px-10 py-4 rounded-full mb-12 shadow-xl italic mt-10">
              <Microscope className="w-5 h-5" /> Molecular Discovery & Engineering
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9rem] font-heading font-extrabold text-[#001533] dark:text-white mb-12 leading-[0.75] tracking-tighter italic transition-colors">
              Science of <br /> <span className="text-[#00BDD5]">Precision.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100 dark:border-white/5 transition-colors">
              Utilizing proprietary biological targets to deliver high-affinity radiochemistry, defining the next standard of care in oncology and endocrinology.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-12 pt-8 opacity-60">
               <div className="flex items-center gap-4">
                  <Fingerprint className="w-6 h-6 text-[#00BDD5]" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Target Specificity</p>
               </div>
               <div className="flex items-center gap-4">
                  <Focus className="w-6 h-6 text-[#00BDD5]" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Retention Affinity</p>
               </div>
               <div className="flex items-center gap-4">
                  <Network className="w-6 h-6 text-[#00BDD5]" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Isotope Modularity</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE TECH STACK ─────────────────────────────────────────── */}
      <section className="pb-32 pt-20 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {MECHANISMS.map(m => (
               <button key={m.id} onClick={() => setActiveTab(m.id)}
                 className={`flex items-center gap-6 px-10 py-5 rounded-full font-heading font-extrabold text-[11px] uppercase tracking-[0.3em] transition-all outline-none border italic ${
                   activeTab === m.id 
                     ? "bg-[#001533] dark:bg-[#00BDD5] border-[#001533] dark:border-[#00BDD5] text-white dark:text-[#001533] shadow-4xl scale-105" 
                     : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:border-[#00BDD5] hover:text-[#001533] dark:hover:text-white"
                 }`}>
                  <m.icon className={`w-5 h-5 transition-transform duration-700 ${activeTab === m.id ? "scale-110" : ""}`} /> {m.label}
               </button>
            ))}
          </div>

          <motion.div layout className="bg-white dark:bg-[#121428] p-12 lg:p-24 rounded-[4rem] relative overflow-hidden shadow-4xl border border-slate-100 dark:border-white/5 min-h-[600px] flex items-center transition-colors">
             <AnimatePresence mode="wait">
                
                {activeTab === "cxcr4" && (
                  <motion.div key="cxcr4" initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}} className="relative z-10 w-full" transition={{duration:0.6, ease: [0.22, 1, 0.36, 1]}}>
                     <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                           <span className="text-[#00BDD5] font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] mb-10 block italic">Core Platform Vector</span>
                           <h2 className="text-5xl lg:text-8xl font-heading font-extrabold text-[#001533] dark:text-white mb-10 leading-[0.85] tracking-tighter italic transition-colors">Molecular <br/><span className="text-[#00BDD5]">CXCR4</span> Hub</h2>
                           <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-16 font-light italic transition-colors">
                             Targeting aggressive tumor micro-environments with molecular precision. CXCR4 ligands enable high-resolution PET/CT scout mapping followed by sniper-grade therapeutic ablation.
                           </p>
                           <div className="space-y-8">
                              <div className="bg-slate-50 dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/10 flex gap-8 hover:bg-white dark:hover:bg-white/10 transition-all shadow-xl">
                                 <div className="w-16 h-16 bg-[#00BDD5]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#00BDD5]/20 shadow-sm"><ShieldAlert className="w-8 h-8 text-[#00BDD5]"/></div>
                                 <div className="flex flex-col justify-center">
                                    <p className="text-[#001533] dark:text-white font-extrabold text-xl mb-2 italic tracking-tight uppercase transition-colors">High Affinity Binding</p>
                                    <p className="text-slate-400 text-base leading-relaxed font-light italic">Exceptional receptor lock-on ensures clear diagnostic signal-to-noise ratios.</p>
                                 </div>
                              </div>
                              <div className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 flex gap-8 hover:bg-[#7B61FF]/5 transition-all shadow-xl">
                                 <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#7B61FF]/20 shadow-sm"><Zap className="w-8 h-8 text-[#7B61FF]"/></div>
                                 <div className="flex flex-col justify-center">
                                    <p className="text-[#001533] dark:text-white font-extrabold text-xl mb-2 italic tracking-tight uppercase transition-colors">Selective Payload Delivery</p>
                                    <p className="text-slate-400 text-base leading-relaxed font-light italic">Precise administration of isotope payloads inside metastatic tumor clusters.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="relative flex justify-center items-center h-[600px] bg-slate-50 dark:bg-black/20 rounded-[5rem] overflow-hidden transition-colors">
                           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,189,213,0.1)_0%,transparent_70%)]" />
                           <div className="w-[120%] h-[120%] border-2 border-slate-100 dark:border-white/5 rounded-full animate-orbit-slow absolute opacity-40" />
                           <div className="w-[80%] h-[80%] border border-slate-100 dark:border-white/10 rounded-full animate-orbit absolute opacity-60" />
                           
                           <div className="relative z-10 w-40 h-40 bg-[#001533] dark:bg-white/10 border-4 border-[#00BDD5] rounded-full flex items-center justify-center shadow-4xl group transition-all transform hover:scale-110">
                              <Atom className="w-16 h-16 text-[#00BDD5] animate-spin-slow" />
                              <div className="absolute inset-0 rounded-full bg-[#00BDD5]/20 animate-ping opacity-20" />
                           </div>

                           <div className="absolute p-8 bg-white dark:bg-[#121428] rounded-[3rem] shadow-4xl top-20 right-10 border border-slate-100 dark:border-white/10 animate-float transition-colors">
                              <Sparkles className="w-8 h-8 text-[#00BDD5] mb-4" />
                              <p className="text-[10px] font-extrabold text-[#001533] dark:text-white uppercase tracking-widest italic">Isotope Logic</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
                )}
                
                {activeTab === "cd24" && (
                  <motion.div key="cd24" initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}} className="relative z-10 w-full" transition={{duration:0.6}}>
                     <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                           <span className="text-[#7B61FF] font-heading font-extrabold text-[11px] uppercase tracking-[0.6em] mb-10 block italic">Immuno-Oncology Vector</span>
                           <h2 className="text-5xl lg:text-8xl font-heading font-extrabold text-[#001533] dark:text-white mb-10 leading-[0.85] tracking-tighter italic transition-colors">Glycan <br/><span className="text-[#7B61FF]">Targeting.</span></h2>
                           <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-16 font-light italic transition-colors">
                              GT-008 is a first-in-class glyco-antibody engineered to discriminate cancer-associated glycans from normal tissue, activating the innate immune system.
                           </p>
                           <div className="p-12 bg-[#7B61FF]/10 rounded-[3.5rem] border border-[#7B61FF]/20 shadow-2xl transition-all">
                              <h4 className="font-heading font-extrabold text-[#7B61FF] uppercase tracking-[0.4em] text-xl mb-6 italic">Precision Logic</h4>
                              <p className="text-slate-500 dark:text-slate-300 text-lg leading-relaxed font-light italic transition-colors">Triggering macrophage-led tumor ingestion while completely sparing healthy epithelial cells.</p>
                           </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-black/20 p-16 rounded-[4rem] flex flex-col justify-center items-center min-h-[500px] text-center relative overflow-hidden transition-colors">
                           <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.15)_0%,transparent_70%)]" />
                           <span className="inline-block px-10 py-4 bg-white dark:bg-[#121428] text-[#7B61FF] border border-[#7B61FF]/30 text-[10px] font-extrabold uppercase tracking-[0.5em] rounded-full mb-10 relative z-10 italic shadow-xl">FIRST-IN-CLASS Glyco-mAb</span>
                           <h4 className="font-heading font-extrabold text-[#001533] dark:text-white text-5xl tracking-tighter leading-tight relative z-10 italic transition-colors">Total Solid Tumor <br/> Eradication.</h4>
                        </div>
                     </div>
                  </motion.div>
                )}

                {activeTab === "theranostics" && (
                  <motion.div key="theranostics" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.95}} className="relative z-10 w-full" transition={{duration:0.6}}>
                     <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-5xl lg:text-9xl font-heading font-extrabold text-[#001533] dark:text-white mb-10 leading-[0.8] tracking-tighter italic transition-colors">Dual-Action <span className="text-[#00BDD5]">Logic.</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 text-3xl leading-relaxed font-light italic transition-colors">Visualizing the silent target ensures 100% therapeutic focus on the lesion while shielding healthy tissue architecture.</p>
                     </div>
                     <div className="grid md:grid-cols-3 gap-12">
                        {[
                          { step:"01", title:"Scout", val:"Identify lesion load via Ga-68 PentixaFor PET/CT informatics.", icon:Search, color:"text-[#00BDD5]" },
                          { step:"02", title:"Verify", val:"Quantify receptor density to predict high-affinity response.", icon:Focus, color:"text-[#001533] dark:text-white" },
                          { step:"03", title:"Sniper", val:"Deliver radionuclide payloads directly to the scout sites.", icon:Zap, color:"text-[#7B61FF]" }
                        ].map((s,i) => (
                          <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col items-center text-center transition-all hover:-translate-y-4 hover:shadow-4xl group shadow-xl">
                             <span className="text-4xl font-heading font-extrabold text-[#00BDD5]/20 mb-8 block italic">{s.step}</span>
                             <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-white dark:bg-white/10 shadow-2xl ${s.color}`}><s.icon className="w-10 h-10 group-hover:scale-125 transition-transform"/></div>
                             <h4 className="font-heading font-extrabold text-[#001533] dark:text-white text-3xl mb-4 tracking-tighter italic transition-colors">{s.title}</h4>
                             <p className="text-slate-400 text-base leading-relaxed font-light italic">{s.val}</p>
                          </div>
                        ))}
                     </div>
                  </motion.div>
                )}

                {activeTab === "cmc" && (
                  <motion.div key="cmc" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-30}} className="relative z-10 w-full" transition={{duration:0.6}}>
                     <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                           <span className="text-[#00BDD5] font-heading font-extrabold text-[11px] uppercase tracking-[0.6em] mb-10 block italic">Industrial Integrity Hub</span>
                           <h2 className="text-5xl lg:text-[7.5rem] font-heading font-extrabold text-[#001533] dark:text-white mb-10 leading-[0.85] tracking-tighter italic transition-colors">Global <br/><span className="text-[#00BDD5]">Supply.</span></h2>
                           <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-16 font-light italic transition-colors">
                              Time-critical isotope logistics. Integrated CMC network ensuring just-in-time delivery to clinical sites across Europe and US within 24H.
                           </p>
                           <div className="flex flex-col gap-10">
                              <div className="flex items-center gap-8 p-10 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[3rem] hover:bg-white dark:hover:bg-white/10 transition-all shadow-xl">
                                 <div className="w-16 h-16 bg-[#00BDD5]/10 rounded-2xl flex items-center justify-center shadow-sm"><Container className="w-8 h-8 text-[#00BDD5]"/></div>
                                 <div>
                                    <p className="font-heading font-extrabold text-[#001533] dark:text-white text-xl tracking-tight italic uppercase transition-colors">DUAL CORE MATRIX</p>
                                    <p className="text-slate-400 text-sm font-light italic">Strategic labeling hubs in Washington and Berlin.</p>
                                 </div>
                              </div>
                              <div className="flex items-center gap-8 p-10 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[3rem] hover:bg-[#7B61FF]/5 transition-all shadow-xl">
                                 <div className="w-16 h-16 bg-[#7B61FF]/10 rounded-2xl flex items-center justify-center shadow-sm"><Activity className="w-8 h-8 text-[#7B61FF]"/></div>
                                 <div>
                                    <p className="font-heading font-extrabold text-[#001533] dark:text-white text-xl tracking-tight italic uppercase transition-colors">ULTRA-COLD CHAIN</p>
                                    <p className="text-slate-400 text-sm font-light italic">Precision transport for large-scale Ph3 trials.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="p-20 bg-slate-50 dark:bg-black/20 rounded-[4rem] min-h-[500px] flex items-center justify-center text-center transition-colors">
                           <Globe2 className="w-48 h-48 text-[#00BDD5]/10 animate-pulse transition-colors" />
                        </div>
                     </div>
                  </motion.div>
                )}

                {activeTab === "discovery" && (
                  <motion.div key="discovery" initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}} className="relative z-10 w-full" transition={{duration:0.6}}>
                     <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                           <span className="text-[#001533] dark:text-white font-heading font-extrabold text-[11px] uppercase tracking-[0.6em] mb-10 block italic border-l-4 border-[#00BDD5] pl-6 transition-colors">Next Gen R&D</span>
                           <h2 className="text-5xl lg:text-[7.5rem] font-heading font-extrabold text-[#001533] dark:text-white mb-10 leading-[0.85] tracking-tighter italic transition-colors">Discovery <br/><span className="text-[#00BDD5]">Matrix.</span></h2>
                           <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-16 font-light italic transition-colors">
                              Computational docking and screening of second-gen molecular variants to optimize bio-retention and minimize clearance latencies.
                           </p>
                           <Link href={`/${locale}/contact`} className="px-12 py-5 bg-[#001533] dark:bg-white text-white dark:text-[#001533] rounded-2xl font-heading font-extrabold text-[12px] uppercase tracking-[0.5em] hover:bg-[#00BDD5] transition-all shadow-4xl italic flex items-center gap-8">
                              Global R&D Collab <Database className="w-6 h-6" />
                           </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                           {[
                             { title:"AI-Docking", val:"In-silico receptor tuning." },
                             { title:"Pairing", val:"Modular isotope tuning." },
                             { title:"Retention", val:"Target half-life scaling." },
                             { title:"Models", val:"PDX-level validation." }
                           ].map((b,i) => (
                             <div key={i} className="p-12 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-[#00BDD5] transition-all text-center shadow-xl group">
                                <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform"><Focus className="w-6 h-6 text-[#00BDD5]"/></div>
                                <h4 className="font-heading font-extrabold text-[#001533] dark:text-white text-xl mb-2 tracking-tighter italic uppercase transition-colors">{b.title}</h4>
                                <p className="text-slate-400 text-[11px] font-light italic">{b.val}</p>
                             </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
                )}

             </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL GLOBAL CALL TO ACTION ──────────────────────────────────────── */}
      <section className="py-32 text-center container mx-auto px-6 max-w-5xl">
         <div className="bg-[#001533] rounded-[5rem] p-20 lg:p-32 relative overflow-hidden shadow-4xl border border-white/5 group">
            <div className="absolute inset-0 bg-[#00BDD5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute top-0 right-0 p-24 opacity-5 group-hover:scale-125 transition-transform rotate-12"><Microscope className="w-64 h-64 text-white" /></div>
            <div className="relative z-10">
               <span className="text-[#00BDD5] text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-10 block italic">Strategic Dialogue</span>
               <h3 className="text-5xl md:text-[6.5rem] font-heading font-extrabold mb-12 tracking-tighter text-white leading-[0.8] italic transition-colors">The Logic of <br/> <span className="text-[#00BDD5]">Co-Development.</span></h3>
               <p className="text-slate-400 mb-16 font-light text-2xl italic leading-relaxed">We foster high-fidelity collaboration with global academic centers and industrial partners to lead the theranostic era.</p>
               <Link href={`/${locale}/contact`} className="px-16 py-8 bg-[#00BDD5] text-white rounded-2xl font-heading font-extrabold text-[12px] uppercase tracking-[0.5em] hover:bg-white hover:text-[#001533] transition-all shadow-4xl italic flex items-center gap-8 mx-auto w-max">
                 Engage Scientific Team <ArrowRight className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
