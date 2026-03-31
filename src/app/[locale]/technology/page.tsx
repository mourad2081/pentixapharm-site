"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers, Factory, Container, Search, Database } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Precision", icon: Atom, color: "text-[#00A3E0]" },
  { id: "cd24", label: "CD24 Glycans", icon: Layers, color: "text-[#A7303E]" },
  { id: "theranostics", label: "Theranostic Process", icon: Activity, color: "text-[#00B1AB]" },
  { id: "cmc", label: "Global CMC", icon: Factory, color: "text-slate-500" },
  { id: "discovery", label: "Discovery Engine", icon: Search, color: "text-[#22c55e]" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-[0.02]">
           <div className="absolute inset-0 bg-[radial-gradient(#031835_1.5px,transparent_1.5px)] bg-[size:45px_45px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00A3E0] text-xs font-heading font-extrabold uppercase tracking-[0.2em] bg-[#00A3E0]/5 px-6 py-2.5 rounded-full mb-8 border border-[#00A3E0]/20 shadow-sm">
              Molecular Engineering & Science
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-[#031835] mb-8 drop-shadow-sm leading-tight italic">Science of <span className="text-cyan">Precision</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto font-light">
              We leverage proprietary biological targets combined with world-class radiochemistry to redefine the standard of care in oncology and endocrinology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE TABS SECTION ────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD] relative z-20 -mt-16">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="flex flex-wrap justify-center gap-5 mb-20 relative z-30">
            {MECHANISMS.map(m => (
               <button key={m.id} onClick={() => setActiveTab(m.id)}
                 className={"flex items-center gap-4 px-8 py-5 rounded-[2rem] font-heading font-extrabold text-[13px] uppercase tracking-wider transition-all border outline-none shadow-lg " + (activeTab===m.id ? "bg-[#031835] border-[#031835] text-white scale-[1.05] shadow-cyan/20" : "bg-white border-slate-100 text-slate-500 hover:bg-slate-50 hover:translate-y-[-2px]")}>
                  <m.icon className={"w-5 h-5 " + (activeTab===m.id ? "text-white" : m.color)} /> {m.label}
               </button>
            ))}
          </div>

          <motion.div layout className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-2xl border border-slate-100 relative overflow-hidden min-h-[600px] flex items-center">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-slate-50 to-transparent opacity-80 pointer-events-none" />
             <AnimatePresence mode="wait">
               
               {activeTab === "cxcr4" && (
                 <motion.div key="cxcr4" initial={{opacity:0, scale:0.98, x:20}} animate={{opacity:1, scale:1, x:0}} exit={{opacity:0, scale:0.98, x:-20}} className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-[#00A3E0] font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block">Platform Core</span>
                          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#031835] mb-8 leading-tight">The <span className="italic">CXCR4</span> Hub</h2>
                          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light italic">
                            CXCR4 is highly specific across 30+ different types of cancer. Our proprietary ligands are designed for optimal biodistribution, allowing for clear tumor-to-background ratio in PET/CT and high-impact beta radiation delivery.
                          </p>
                          <div className="space-y-6">
                             <div className="bg-[#F8FAFD] p-8 rounded-3xl border border-slate-100 flex gap-6 group hover:translate-x-2 transition-all">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#00A3E0] group-hover:text-white transition-all"><ShieldAlert className="w-6 h-6"/></div>
                                <div>
                                   <p className="text-[#031835] font-extrabold text-lg mb-1 italic tracking-tight">Onco-Selection</p>
                                   <p className="text-slate-500 text-sm leading-relaxed">Specific binding across multiple hematologic malignancies like AML and Multiple Myeloma where standard therapies fail.</p>
                                </div>
                             </div>
                             <div className="bg-[#F8FAFD] p-8 rounded-3xl border border-slate-100 flex gap-6 group hover:translate-x-2 transition-all">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-teal group-hover:text-white transition-all"><Zap className="w-6 h-6"/></div>
                                <div>
                                   <p className="text-[#031835] font-extrabold text-lg mb-1 italic tracking-tight">Targeted Ablation</p>
                                   <p className="text-slate-500 text-sm leading-relaxed">Delivering therapeutic doses of Lutetium-177 or Yttrium-90 precisely to diseased bone marrow and solid tumors.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="relative group">
                          <div className="absolute inset-0 bg-[#00A3E0] rounded-[3.5rem] rotate-3 opacity-5 group-hover:rotate-6 transition-all" />
                          <div className="relative bg-slate-50 rounded-[3.5rem] p-4 border border-slate-200 shadow-inner overflow-hidden">
                             <img src="/molecular_theranostic_structure_1774915435525.png" alt="CXCR4 Architecture" className="w-full h-[500px] object-contain group-hover:scale-105 transition-transform duration-700" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "cd24" && (
                 <motion.div key="cd24" initial={{opacity:0, scale:0.98, x:20}} animate={{opacity:1, scale:1, x:0}} exit={{opacity:0, scale:0.98, x:-20}} className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-[#A7303E] font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block">Antibody Platform</span>
                          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#031835] mb-8 leading-tight">Glycan <span className="italic text-[#A7303E]">Differentiation</span></h2>
                          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
                             The <strong>CD24</strong> glyco-epitope unique to solid tumors represents one of the most promising targets in immunotherapy today. Our molecule, <strong>GT-008</strong>, distinguishes between cancer and normal cells with high sensitivity through its glycan-specific binding.
                          </p>
                          <div className="p-8 bg-[#A7303E]/5 border border-[#A7303E]/20 rounded-3xl relative overflow-hidden">
                             <div className="relative z-10">
                                <h4 className="font-heading font-extrabold text-[#031835] text-xl mb-3">Mechanism of Action: ADCC</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">GT-008 activates the innate immune system, recruiting macrophages and NK cells to phagocytose tumor cells. Preclinical data indicates 100% tumor regression in breast cancer PDX models.</p>
                             </div>
                          </div>
                       </div>
                       <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                          <img src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2600" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                          <div className="relative z-20 text-center">
                             <span className="inline-block px-4 py-2 bg-[#A7303E] text-white text-[10px] font-bold uppercase rounded-full mb-4">Immunotherapy Bridge</span>
                             <p className="font-heading font-extrabold text-3xl leading-tight">Solid Tumor <br/> Precision</p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "theranostics" && (
                 <motion.div key="theranostics" initial={{opacity:0, scale:0.98, x:20}} animate={{opacity:1, scale:1, x:0}} exit={{opacity:0, scale:0.98, x:-20}} className="relative z-10 w-full">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                       <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#031835] mb-8 leading-tight">Dual-Action <span className="italic">Scout & Sniper</span></h2>
                       <p className="text-slate-600 text-lg leading-relaxed font-light italic">"Seeing what we treat" in oncology means eliminating therapy for non-responders and concentrating impact on the intended site.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {[
                         { step:"01. Discovery", val:"PentixaFor PET/CT maps the specific tumor load, ensuring every lesion is identified.", icon:Globe2, color:"bg-cyan/10 text-cyan" },
                         { step:"02. Verification", val:"SUV values from imaging predict precisely how much Lutetium/Yttrium will bind to cells.", icon:Activity, color:"bg-teal/10 text-teal" },
                         { step:"03. Eradication", val:"PentixaTher sniper therapy is administered, reaching the exact same sites mapped by the scout.", icon:Zap, color:"bg-navy/10 text-navy" }
                       ].map((s,i) => (
                         <div key={i} className="bg-[#F8FAFD] p-10 rounded-[3rem] border border-slate-100 flex flex-col h-full group hover:bg-white hover:border-teal/20 hover:shadow-xl transition-all">
                            <div className={"w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110 " + s.color}><s.icon className="w-6 h-6"/></div>
                            <h4 className="font-heading font-extrabold text-[#031835] text-xl mb-4 italic">{s.step}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-light">{s.val}</p>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               )}

               {activeTab === "cmc" && (
                 <motion.div key="cmc" initial={{opacity:0, scale:0.98, x:20}} animate={{opacity:1, scale:1, x:0}} exit={{opacity:0, scale:0.98, x:-20}} className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div>
                          <span className="text-slate-400 font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block">Supply Integrity</span>
                          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#031835] mb-8 leading-tight italic">Global Supply <span className="text-slate-400 font-sans tracking-tighter not-italic">CMC+</span></h2>
                          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
                             The time-critical nature of radioisotopes requires an integrated just-in-time logistics infrastructure. We have established strategic CMO and Hub agreements across key territories.
                          </p>
                          <div className="flex flex-wrap gap-4">
                             <div className="flex items-center gap-3 px-6 py-3 bg-[#F8FAFD] border border-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest"><Container className="w-4 h-4"/> EU-US Hubs</div>
                             <div className="flex items-center gap-3 px-6 py-3 bg-[#F8FAFD] border border-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest"><Layers className="w-4 h-4"/> 24h Delivery Chain</div>
                          </div>
                       </div>
                       <div className="bg-[#031835] rounded-[3.5rem] p-1 shadow-2xl overflow-hidden relative group">
                          <div className="absolute inset-0 bg-[#00A3E0]/10" />
                          <div className="grid grid-cols-2 gap-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2600" className="h-[250px] object-cover" />
                             <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2600" className="h-[250px] object-cover" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "discovery" && (
                 <motion.div key="discovery" initial={{opacity:0, scale:0.98, x:20}} animate={{opacity:1, scale:1, x:0}} exit={{opacity:0, scale:0.98, x:-20}} className="relative z-10 w-full">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                       <div className="md:w-1/2">
                          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#031835] mb-8 leading-tight italic">Molecular <span className="text-emerald">Identification</span></h2>
                          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light italic">
                             Our medicinal chemistry and pharmacology units focus on optimizing ligand affinity and metabolic stability. Using AI-driven screening, we identify next-generation isotopes and antibodies for expansion beyond our core CXCR4/CD24 platforms.
                          </p>
                          <button className="flex items-center gap-3 px-8 py-4 bg-[#031835] text-white font-bold rounded-full text-sm hover:bg-emerald transition-all shadow-xl shadow-navy/20">
                             Scientific Publications <Database className="w-4 h-4" />
                          </button>
                       </div>
                       <div className="md:w-1/2 grid grid-cols-2 gap-6">
                           {[
                             { lab:"Target Search", icon:Search, val:"AI-driven docking & screening of molecular variants." },
                             { lab:"Chem-Opt", icon:Atom, val:"Maximizing target retention while minimizing renal clearance." }
                           ].map((b,i) => (
                             <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl group hover:border-emerald/30 transition-all">
                                <div className="w-12 h-12 bg-emerald/10 text-emerald rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><b.icon className="w-5 h-5" /></div>
                                <h4 className="font-bold text-[#031835] mb-2">{b.lab}</h4>
                                <p className="text-xs text-slate-500 italic leading-relaxed">{b.val}</p>
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
      <section className="py-24 text-center container mx-auto px-6">
         <div className="bg-[#031835] rounded-[4rem] p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]" />
            <div className="relative z-10 max-w-2xl mx-auto">
               <h3 className="text-4xl font-heading font-extrabold mb-6 italic">Interested in the Science?</h3>
               <p className="text-slate-400 mb-10 font-light text-lg italic">We collaborate with academic centers and strategic partners for data-sharing and development support.</p>
               <button className="px-10 py-4 bg-[#00B1AB] text-[#031835] font-heading font-extrabold rounded-full hover:bg-white transition-all shadow-2xl">
                 Contact Our Science Team
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
