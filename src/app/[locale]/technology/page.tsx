"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { 
  ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers, 
  Factory, Container, Search, Database, Network, Fingerprint, Focus
} from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Precision", icon: Atom, color: "text-[#00F2FF]" },
  { id: "cd24", label: "CD24 Glycans", icon: Layers, color: "text-[#7B61FF]" },
  { id: "theranostics", label: "Theranostics", icon: Activity, color: "text-[#00F2FF]" },
  { id: "cmc", label: "Global Supply", icon: Factory, color: "text-[#00F2FF]" },
  { id: "discovery", label: "Discovery", icon: Search, color: "text-white" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  const locale = useLocale();
  
  return (
    <div className="min-h-screen text-white overflow-hidden selection:bg-[#00F2FF]/30 selection:text-white pt-24 pb-32">
      
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md px-8 py-3 rounded-full mb-10 border border-[#00F2FF]/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
              <Microscope className="w-4 h-4" /> Molecular Science & Engineering
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-semibold mb-8 tracking-tighter">
              Science of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#7B61FF]">Precision.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-16">
              Utilizing proprietary biological targets to deliver high-affinity radiochemistry, providing a leading standard of care in oncology and endocrinology.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-12 pt-8">
               <div className="flex items-center gap-4">
                  <Fingerprint className="w-5 h-5 text-[#00F2FF]" />
                  <p className="text-[10px] font-heading font-semibold text-white/50 uppercase tracking-widest">Target Specificity</p>
               </div>
               <div className="flex items-center gap-4">
                  <Focus className="w-5 h-5 text-[#00F2FF]" />
                  <p className="text-[10px] font-heading font-semibold text-white/50 uppercase tracking-widest">Bioretention Affinity</p>
               </div>
               <div className="flex items-center gap-4">
                  <Network className="w-5 h-5 text-[#00F2FF]" />
                  <p className="text-[10px] font-heading font-semibold text-white/50 uppercase tracking-widest">Isotope Modularity</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE TABS SECTION ────────────────────────────────────────── */}
      <section className="pb-32 pt-20 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {MECHANISMS.map(m => (
               <button key={m.id} onClick={() => setActiveTab(m.id)}
                 className={`flex items-center gap-4 px-8 py-4 rounded-full font-heading font-semibold text-[11px] uppercase tracking-widest transition-all outline-none border ${
                   activeTab === m.id 
                     ? "bg-[#00F2FF]/10 border-[#00F2FF]/50 text-white shadow-[0_0_20px_rgba(0,242,255,0.2)]" 
                     : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
                 }`}>
                  <m.icon className={`w-4 h-4 transition-transform duration-500 ${activeTab === m.id ? "text-[#00F2FF]" : m.color}`} /> {m.label}
               </button>
            ))}
          </div>

          <motion.div layout className="glass-panel p-10 lg:p-16 relative overflow-hidden min-h-[500px] flex items-center">
             <AnimatePresence mode="wait">
               
               {activeTab === "cxcr4" && (
                 <motion.div key="cxcr4" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="relative z-10 w-full" transition={{duration:0.4}}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-[#00F2FF] font-heading font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 block">Core Pipeline Matrix</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-semibold text-white mb-8 leading-none tracking-tighter">Molecular <br/><span className="text-[#00F2FF]">CXCR4</span> Hub</h2>
                          <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
                            Targeting aggressive tumor micro-environments with extreme specificity. CXCR4 ligands enable high-resolution PET/CT scout mapping followed by sniper-grade therapeutic ablation using potent isotopes.
                          </p>
                          <div className="space-y-6">
                             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex gap-6 hover:bg-white/10 transition-all">
                                <div className="w-14 h-14 bg-[#00F2FF]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#00F2FF]/20"><ShieldAlert className="w-6 h-6 text-[#00F2FF]"/></div>
                                <div>
                                   <p className="text-white font-semibold text-lg mb-1 tracking-tight">High Affinity</p>
                                   <p className="text-white/50 text-sm leading-relaxed font-light">Exceptional binding to tumor-specific receptors while maintaining clear diagnostic background ratios.</p>
                                </div>
                             </div>
                             <div className="bg-white/5 p-8 rounded-3xl border border-[#7B61FF]/10 flex gap-6 hover:bg-[#7B61FF]/10 transition-all">
                                <div className="w-14 h-14 bg-[#7B61FF]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#7B61FF]/20"><Zap className="w-6 h-6 text-[#7B61FF]"/></div>
                                <div>
                                   <p className="text-white font-semibold text-lg mb-1 tracking-tight">Toxic Load Delivery</p>
                                   <p className="text-white/50 text-sm leading-relaxed font-light">Precise administration of Lutetium-177 or Yttrium-90 into the metastatic tumor cluster.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="relative flex justify-center items-center h-[500px]">
                          <div className="absolute inset-0 bg-radial-gradient from-[#00F2FF]/20 to-transparent blur-3xl rounded-full" />
                          <div className="w-64 h-64 border border-[#00F2FF]/30 rounded-full animate-orbit-slow" />
                          <div className="absolute w-48 h-48 border border-[#7B61FF]/40 rounded-full animate-orbit" />
                          <div className="absolute bg-[#0a0b16] border border-[#00F2FF]/50 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_30px_#00F2FF]">
                             <Atom className="w-10 h-10 text-[#00F2FF]" />
                          </div>
                          {/* Simulated particles */}
                          <div className="absolute w-4 h-4 rounded-full bg-[#00F2FF]" style={{top: '20%', left: '30%', boxShadow: '0 0 10px #00F2FF'}} />
                          <div className="absolute w-6 h-6 rounded-full bg-[#7B61FF]" style={{bottom: '20%', right: '30%', boxShadow: '0 0 15px #7B61FF'}} />
                       </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "cd24" && (
                 <motion.div key="cd24" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="relative z-10 w-full" transition={{duration:0.4}}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-[#7B61FF] font-heading font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 block">Immuno-Oncology Integration</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-semibold text-white mb-8 leading-none tracking-tighter">Glycan <br/><span className="text-[#7B61FF]">Targeting</span></h2>
                          <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
                             GT-008 is a first-in-class antibody designed to differentiate cancer from normal tissue through advanced glycan-specific binding. This activates the innate immune system for systematic tumor clearance.
                          </p>
                          <div className="p-10 glass-panel-violet">
                             <h4 className="font-heading font-semibold text-[#7B61FF] uppercase tracking-widest text-lg mb-4">Precision Logic</h4>
                             <p className="text-white/70 text-sm leading-relaxed font-light">Activates macrophages and NK cells to locate and eliminate solid tumor clusters through ADCC-mediated phagocytosis.</p>
                          </div>
                       </div>
                       <div className="glass-panel-violet p-12 flex flex-col justify-center items-center min-h-[400px] text-center relative overflow-hidden">
                          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.2)_0%,transparent_70%)]" />
                          <span className="inline-block px-6 py-2 bg-[#7B61FF]/20 text-[#7B61FF] border border-[#7B61FF]/50 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 relative z-10">First in Class</span>
                          <h4 className="font-heading font-semibold text-white text-4xl tracking-tighter leading-tight relative z-10">Solid Tumor <br/> Eradication</h4>
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "theranostics" && (
                 <motion.div key="theranostics" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="relative z-10 w-full" transition={{duration:0.4}}>
                    <div className="text-center max-w-4xl mx-auto mb-16">
                       <h2 className="text-5xl lg:text-7xl font-heading font-semibold text-white mb-8 leading-none tracking-tighter">Dual-Action <span className="text-[#00F2FF]">Logic</span></h2>
                       <p className="text-white/60 text-xl leading-relaxed font-light">We treat only what we see. Visualizing the target ensures 100% therapeutic focus on the lesion while shielding healthy tissue.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                       {[
                         { step:"01", title:"Scout", val:"Visually identify lesion load via PentixaFor PET/CT mapping.", icon:Search, color:"text-[#00F2FF]", border: "border-[#00F2FF]/30" },
                         { step:"02", title:"Verify", val:"Quantify target density to predict therapeutic response accuracy.", icon:Focus, color:"text-white", border: "border-white/30" },
                         { step:"03", title:"Sniper", val:"Deliver therapeutic PentixaTher directly to the mapped sites.", icon:Zap, color:"text-[#7B61FF]", border: "border-[#7B61FF]/30" }
                       ].map((s,i) => (
                         <div key={i} className={`p-10 rounded-3xl bg-white/5 border ${s.border} flex flex-col items-center text-center transition-transform hover:-translate-y-2`}>
                            <span className="text-3xl font-heading font-semibold text-white/20 mb-6 block">{s.step}</span>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 ${s.color}`}><s.icon className="w-8 h-8"/></div>
                            <h4 className="font-heading font-semibold text-white text-xl mb-3 tracking-tight">{s.title}</h4>
                            <p className="text-white/50 text-xs leading-relaxed font-light">{s.val}</p>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               )}

               {activeTab === "cmc" && (
                 <motion.div key="cmc" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="relative z-10 w-full" transition={{duration:0.4}}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-[#00F2FF] font-heading font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 block">Industrial Scale Integrity</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-semibold text-white mb-8 leading-none tracking-tighter">24H Global <br/><span className="text-[#00F2FF]">Supply</span> Hub</h2>
                          <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
                             Time-critical isotope logistics. Integrated CMC network ensuring just-in-time delivery to clinical sites across Europe and North America within 24 hours.
                          </p>
                          <div className="flex flex-col gap-6">
                             <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#00F2FF]/30 transition-colors">
                                <div className="w-12 h-12 bg-[#00F2FF]/10 rounded-xl flex items-center justify-center"><Container className="w-6 h-6 text-[#00F2FF]"/></div>
                                <div>
                                   <p className="font-heading font-semibold text-white text-lg tracking-tight">DUAL HUB MATRIX</p>
                                   <p className="text-white/50 text-xs font-light">Strategic labeling centers in the EU and US.</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#7B61FF]/30 transition-colors">
                                <div className="w-12 h-12 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center"><Activity className="w-6 h-6 text-[#7B61FF]"/></div>
                                <div>
                                   <p className="font-heading font-semibold text-white text-lg tracking-tight">LOGISTICS COLD CHAIN</p>
                                   <p className="text-white/50 text-xs font-light">Precision isotope transport for pivotal Phase 3 trials.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="glass-panel p-10 min-h-[400px] flex items-center justify-center text-center">
                          <Globe2 className="w-32 h-32 text-white/10 animate-pulseGlow" />
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "discovery" && (
                 <motion.div key="discovery" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="relative z-10 w-full" transition={{duration:0.4}}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-white font-heading font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 block">Next Gen Discovery</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-semibold text-white mb-8 leading-none tracking-tighter">Molecular <br/><span className="text-[#00F2FF]">Discovery</span></h2>
                          <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
                             Computational docking and screening of molecular variants to optimize therapeutic half-lives and maximize target retention rates.
                          </p>
                          <Link href={`/${locale}/contact`} className="btn-glass btn-cyan inline-flex items-center gap-4">
                             Scientific Collab <Database className="w-4 h-4" />
                          </Link>
                       </div>
                       <div className="grid md:grid-cols-2 gap-6">
                          {[
                            { title:"Docking", val:"In-silico receptor modeling." },
                            { title:"Synthesis", val:"Modular isotope pairing." },
                            { title:"Optimization", val:"Clearance rate reduction." },
                            { title:"Verification", val:"PDX model validation." }
                          ].map((b,i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/40 transition-colors text-center">
                               <div className="w-10 h-10 bg-[#00F2FF]/10 rounded-xl flex items-center justify-center mb-4 mx-auto"><Focus className="w-5 h-5 text-[#00F2FF]"/></div>
                               <h4 className="font-heading font-semibold text-white text-lg mb-1 tracking-tight">{b.title}</h4>
                               <p className="text-white/50 text-[10px] font-light">{b.val}</p>
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

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 text-center container mx-auto px-6 max-w-4xl">
         <div className="glass-panel p-16 relative overflow-hidden">
            <div className="relative z-10">
               <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.5em] mb-6 block">Strategic Dialogue</span>
               <h3 className="text-4xl md:text-6xl font-heading font-semibold mb-8 tracking-tighter text-white leading-none">The Science of <br/> <span className="text-[#00F2FF]">Co-Development.</span></h3>
               <p className="text-white/60 mb-12 font-light text-xl">We collaborate with global academic centers and strategic pharmaceutical partners to scale the theranostic era.</p>
               <Link href={`/${locale}/contact`} className="btn-glass btn-cyan inline-flex items-center gap-4">
                 Connect with Science Team <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
