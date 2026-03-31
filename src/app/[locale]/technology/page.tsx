"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { 
  ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers, 
  Factory, Container, Search, Database, Network, Fingerprint, Focus,
  ChevronRight
} from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";
import HelixBackground from "@/components/visual/HelixBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

const HERO_BG = "tech_hero_bg_png_1774920464102.png";

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Precision", icon: Atom, color: "text-[#00BDD5]" },
  { id: "cd24", label: "CD24 Glycans", icon: Layers, color: "text-[#A7303E]" },
  { id: "theranostics", label: "Theranostics", icon: Activity, color: "text-[#00BDD5]" },
  { id: "cmc", label: "Global Supply", icon: Factory, color: "text-[#00BDD5]" },
  { id: "discovery", label: "Discovery", icon: Search, color: "text-[#22c55e]" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  const locale = useLocale();
  
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 overflow-hidden selection:bg-[#00BDD5] selection:text-white">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-56 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.15]">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover animate-slow-zoom" alt="Technology Background" />
           <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-[#F8FAFC]" />
           <AnimatedBg />
           <HelixBackground />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full mb-14 border border-slate-100 shadow-xl italic">
              <Microscope className="w-4 h-4" /> Molecular Science & Engineering
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold mb-12 italic leading-[0.75] tracking-tighter text-[#001533]">
              Science of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001533] via-[#00BDD5] to-[#001533] animate-gradient-x underline decoration-[#00BDD5]/10 underline-offset-10">Precision.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              Utilizing proprietary biological targets to deliver high-affinity radiochemistry, providing a leading standard of care in oncology and endocrinology.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-16 pt-8">
               <div className="flex items-center gap-4">
                  <Fingerprint className="w-5 h-5 text-[#00BDD5]" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Target Specificity</p>
               </div>
               <div className="flex items-center gap-4">
                  <Focus className="w-5 h-5 text-[#00BDD5]" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Bioretention Affinity</p>
               </div>
               <div className="flex items-center gap-4">
                  <Network className="w-5 h-5 text-[#00BDD5]" />
                  <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest italic">Isotope Modularity</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE TABS SECTION ────────────────────────────────────────── */}
      <section className="pb-48 pt-24 bg-[#F8FAFC] relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-wrap justify-center gap-4 mb-24 relative z-30 -mt-40">
            {MECHANISMS.map(m => (
               <button key={m.id} onClick={() => setActiveTab(m.id)}
                 className={"flex items-center gap-5 px-12 py-8 rounded-[3rem] font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] transition-all outline-none italic border " + (activeTab===m.id ? "bg-[#001533] border-[#00BDD5]/30 text-white shadow-2xl scale-110" : "bg-white border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-[#001533] shadow-lg")}>
                  <m.icon className={"w-5 h-5 transition-transform duration-500 " + (activeTab===m.id ? "text-[#00BDD5]" : m.color)} /> {m.label}
               </button>
            ))}
          </div>

          <motion.div layout className="bg-white rounded-[5rem] p-16 lg:p-24 shadow-3xl border border-slate-100 relative overflow-hidden min-h-[700px] flex items-center">
             <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-radial from-[#00BDD5]/5 via-transparent to-transparent opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3" />
             <AnimatePresence mode="wait">
               
               {activeTab === "cxcr4" && (
                 <motion.div key="cxcr4" initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] mb-6 block italic">Core Pipeline Matrix</span>
                          <h2 className="text-6xl lg:text-8xl font-heading font-extrabold text-[#001533] mb-12 leading-none italic tracking-tighter">Molecular <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001533] to-[#00BDD5]">CXCR4</span> Hub</h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-16 font-light italic">
                            Targeting aggressive tumor micro-environments with extreme specificity. CXCR4 ligands enable high-resolution PET/CT scout mapping followed by sniper-grade therapeutic ablation using potent isotopes.
                          </p>
                          <div className="space-y-8">
                             <div className="bg-slate-50/50 p-12 rounded-[3.5rem] border border-slate-100 flex gap-8 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-[#001533] transition-all"><ShieldAlert className="w-8 h-8 text-[#00BDD5]"/></div>
                                <div>
                                   <p className="text-[#001533] font-extrabold text-2xl mb-2 italic tracking-tight uppercase">High Affinity</p>
                                   <p className="text-slate-500 text-sm leading-relaxed font-light italic">Exceptional binding to tumor-specific receptors while maintaining clear diagnostic background ratios.</p>
                                </div>
                             </div>
                             <div className="bg-slate-50/50 p-12 rounded-[3.5rem] border border-slate-100 flex gap-8 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-[#00BDD5] transition-all"><Zap className="w-8 h-8 text-[#00BDD5]"/></div>
                                <div>
                                   <p className="text-[#001533] font-extrabold text-2xl mb-2 italic tracking-tight uppercase">Toxic Load Delivery</p>
                                   <p className="text-slate-500 text-sm leading-relaxed font-light italic">Precise administration of Lutetium-177 or Yttrium-90 into the metastatic tumor cluster.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="relative group">
                          <div className="relative bg-white rounded-[4rem] p-10 border border-slate-100 shadow-2xl group-hover:-translate-y-4 transition-all duration-1000">
                             <img src="/molecular_theranostic_structure_1774915435525.png" alt="CXCR4 Architecture" className="w-full h-[600px] object-cover rounded-[3rem] group-hover:scale-105 transition-transform duration-1000" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "cd24" && (
                 <motion.div key="cd24" initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-[#A7303E] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] mb-6 block italic">Immuno-Oncology Integration</span>
                          <h2 className="text-6xl lg:text-8xl font-heading font-extrabold text-[#001533] mb-12 leading-none italic tracking-tighter">Glycan <br/><span className="text-[#A7303E]">Targeting</span></h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-16 font-light italic">
                             GT-008 is a first-in-class antibody designed to differentiate cancer from normal tissue through advanced glycan-specific binding. This activates the innate immune system for systematic tumor clearance.
                          </p>
                          <div className="p-12 bg-[#A7303E]/5 border border-[#A7303E]/10 rounded-[3.5rem] shadow-sm">
                             <h4 className="font-heading font-extrabold text-[#A7303E] uppercase tracking-widest text-xl mb-6 italic">Precision Logic</h4>
                             <p className="text-slate-600 text-base leading-relaxed font-light italic">Activates macrophages and NK cells to locate and eliminate solid tumor clusters through ADCC-mediated phagocytosis.</p>
                          </div>
                       </div>
                       <div className="bg-[#001533] rounded-[4rem] overflow-hidden min-h-[600px] shadow-3xl relative group">
                          <img src="/patient_centered_healthcare_biotech_1774918263283.png" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-all duration-1000" alt="Immunotherapy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#001533] via-transparent to-transparent z-10" />
                          <div className="relative z-20 h-full flex flex-col justify-end p-16">
                             <span className="inline-block px-8 py-3 bg-[#A7303E] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 italic shadow-2xl">First in Class</span>
                             <h4 className="font-heading font-extrabold text-white text-5xl italic tracking-tighter leading-tight">Solid Tumor <br/> Eradication</h4>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "theranostics" && (
                 <motion.div key="theranostics" initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="text-center max-w-5xl mx-auto mb-20">
                       <h2 className="text-6xl lg:text-8xl font-heading font-extrabold text-[#001533] mb-10 leading-none italic tracking-tighter">Dual-Action <span className="text-[#00BDD5]">Logic</span></h2>
                       <p className="text-slate-500 text-2xl leading-relaxed mb-16 font-light italic px-10">We treat only what we see. Visualizing the target ensures 100% therapeutic focus on the lesion while shielding healthy tissue.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                       {[
                         { step:"01", title:"Scout", val:"Visually identify lesion load via PentixaFor PET/CT mapping.", icon:Search, color:"bg-slate-50 text-[#00BDD5] border-slate-100" },
                         { step:"02", title:"Verify", val:"Quantify target density to predict therapeutic response accuracy.", icon:Focus, color:"bg-slate-50 text-[#00BDD5] border-slate-100" },
                         { step:"03", title:"Sniper", val:"Deliver therapeutic PentixaTher directly to the mapped sites.", icon:Zap, color:"bg-[#001533] text-white border-transparent" }
                       ].map((s,i) => (
                         <div key={i} className="p-14 rounded-[3.5rem] bg-white border border-slate-100 transition-all hover:-translate-y-4 hover:shadow-3xl flex flex-col items-center text-center">
                            <span className="text-5xl font-heading font-extrabold text-slate-100 mb-10 block italic">{s.step}</span>
                            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 shadow-xl ${s.color}`}><s.icon className="w-10 h-10"/></div>
                            <h4 className="font-heading font-extrabold text-[#001533] text-3xl mb-4 italic tracking-tight">{s.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-light italic">{s.val}</p>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               )}

               {activeTab === "cmc" && (
                 <motion.div key="cmc" initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] mb-6 block italic">Industrial Scale Integrity</span>
                          <h2 className="text-6xl lg:text-8xl font-heading font-extrabold text-[#001533] mb-12 leading-none italic tracking-tighter">24H Global <br/><span className="text-[#00BDD5]">Supply</span> Hub</h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-16 font-light italic">
                             Time-critical isotope logistics. Integrated CMC network ensuring just-in-time delivery to clinical sites across Europe and North America within 24 hours.
                          </p>
                          <div className="flex flex-col gap-6">
                             <div className="flex items-center gap-8 p-10 bg-slate-50/50 border border-slate-100 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-[#001533] transition-all"><Container className="w-8 h-8 text-[#00BDD5]"/></div>
                                <div>
                                   <p className="font-heading font-extrabold text-[#001533] text-2xl italic tracking-tight">DUAL HUB MATRIX</p>
                                   <p className="text-slate-500 text-sm font-light italic">Strategic labeling centers in the EU and US.</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-8 p-10 bg-slate-50/50 border border-slate-100 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-[#001533] transition-all"><Activity className="w-8 h-8 text-[#00BDD5]"/></div>
                                <div>
                                   <p className="font-heading font-extrabold text-[#001533] text-2xl italic tracking-tight">LOGISTICS COLD CHAIN</p>
                                   <p className="text-slate-500 text-sm font-light italic">Precision isotope transport for pivotal Phase 3 trials.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="bg-slate-50 rounded-[5rem] overflow-hidden relative shadow-2xl">
                          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2600" className="w-full h-full object-cover grayscale opacity-80" alt="Lab" />
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "discovery" && (
                 <motion.div key="discovery" initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-[#22c55e] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] mb-6 block italic">Next Gen Discovery</span>
                          <h2 className="text-6xl lg:text-8xl font-heading font-extrabold text-[#001533] mb-12 leading-none italic tracking-tighter">Molecular <br/><span className="text-[#22c55e]">Discovery</span></h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-16 font-light italic">
                             Computational docking and screening of molecular variants to optimize therapeutic half-lives and maximize target retention rates.
                          </p>
                          <Link href={`/${locale}/contact`} className="px-14 py-6 bg-[#001533] text-white rounded-full font-heading font-extrabold text-[10px] uppercase tracking-widest italic hover:bg-[#22c55e] hover:text-[#001533] transition-all shadow-2xl inline-flex items-center gap-6">
                             Scientific Collab <Database className="w-5 h-5" />
                          </Link>
                       </div>
                       <div className="grid md:grid-cols-2 gap-8">
                          {[
                            { title:"Docking", val:"In-silico receptor modeling." },
                            { title:"Synthesis", val:"Modular isotope pairing." },
                            { title:"Optimization", val:"Clearance rate reduction." },
                            { title:"Verification", val:"PDX model validation." }
                          ].map((b,i) => (
                            <div key={i} className="p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all text-center">
                               <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 mx-auto"><Focus className="w-6 h-6 text-[#22c55e]"/></div>
                               <h4 className="font-heading font-extrabold text-[#001533] text-xl mb-2 italic tracking-tight">{b.title}</h4>
                               <p className="text-slate-400 text-xs italic font-light">{b.val}</p>
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
      <section className="py-48 text-center container mx-auto px-6">
         <div className="bg-white rounded-[6rem] p-24 border border-slate-100 shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5">
               <img src={`/${HERO_BG}`} className="w-full h-full object-cover grayscale" alt="Technology Background" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
               <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.8em] mb-10 block italic">Strategic Dialogue</span>
               <h3 className="text-5xl md:text-8xl font-heading font-extrabold mb-10 italic tracking-tighter text-[#001533] leading-none">The Science of <br/> <span className="text-[#00BDD5]">Co-Development.</span></h3>
               <p className="text-slate-500 mb-16 font-light text-2xl italic">We collaborate with global academic centers and strategic pharmaceutical partners to scale the theranostic era.</p>
               <Link href={`/${locale}/contact`} className="inline-flex items-center gap-8 px-16 py-8 bg-[#001533] text-white font-heading font-extrabold uppercase text-[11px] tracking-[0.5em] rounded-full hover:bg-[#00BDD5] transition-all shadow-2xl italic group transform hover:scale-110">
                 Connect with Science Team <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
