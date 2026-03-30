"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers, Factory, Container } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Platform", icon: Atom, color: "text-[#00A3E0]" },
  { id: "cd24", label: "CD24 Platform", icon: Layers, color: "text-[#F2A900]" },
  { id: "theranostics", label: "Theranostic Process", icon: Activity, color: "text-[#00B1AB]" },
  { id: "cmc", label: "Manufacturing (CMC)", icon: Factory, color: "text-slate-500" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-36 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.span variants={fadeUp} className="text-[#00A3E0] text-sm font-bold uppercase tracking-widest bg-[#00A3E0]/10 px-5 py-2 rounded-full inline-block mb-4 border border-[#00A3E0]/20">
              Technology & Science
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-6 drop-shadow-sm">Precision Targeting Platforms</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              At Pentixapharm, our science leverages two powerful biological targets—CXCR4 and CD24—combined with a world-class radiopharmaceutical manufacturing supply chain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-24 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {MECHANISMS.map(m => (
               <button key={m.id} onClick={() => setActiveTab(m.id)}
                 className={"flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all border outline-none shadow-sm " + (activeTab===m.id ? "bg-white border-slate-200 shadow-md text-[#002A54] scale-105" : "bg-white/50 border-transparent text-slate-500 hover:bg-white")}>
                  <m.icon className={"w-5 h-5 " + m.color} /> {m.label}
               </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 relative overflow-hidden min-h-[450px]">
             <AnimatePresence mode="wait">
               
               {activeTab === "cxcr4" && (
                 <motion.div key="cxcr4" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="relative z-10">
                    <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-6">The CXCR4 Receptor</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-start text-slate-600">
                      <div>
                        <p className="leading-relaxed mb-6">
                          CXCR4 is a chemokine receptor that plays a pivotal role in tumor growth, invasion, angiogenesis, and metastasis. In normal physiology, its expression is restricted, but it is abnormally overexpressed in numerous hematologic malignancies (like AML, Multiple Myeloma, and T-Cell lymphomas) and endocrine solid tumors.
                        </p>
                        <ul className="space-y-4">
                           <li className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                             <ShieldAlert className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5"/>
                             <span className="text-sm"><strong>High Specificity:</strong> PentixaFor binds tightly to CXCR4, allowing clear differentiation of tumors vs normal tissue.</span>
                           </li>
                           <li className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                             <Zap className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5"/>
                             <span className="text-sm"><strong>Direct intra-tumoral radiation:</strong> PentixaTher delivers targeted beta-radiation precisely to the overexpressed cells.</span>
                           </li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-inner">
                        <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2600&auto=format&fit=crop" alt="CXCR4 Targeting" className="rounded-xl shadow-md w-full h-[300px] object-cover" />
                        <p className="text-xs text-center text-slate-500 mt-4 italic">CXCR4 receptor mapping utilizing PET/CT instrumentation.</p>
                      </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "cd24" && (
                 <motion.div key="cd24" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="relative z-10">
                    <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-6">CD24 Glycan Differentiation</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-start text-slate-600">
                      <div>
                        <p className="leading-relaxed mb-6">
                          CD24 is a highly glycosylated surface protein overexpressed in various hard-to-treat solid tumors, including breast, ovarian, and colorectal cancers. 
                        </p>
                        <p className="leading-relaxed mb-6">
                          Our pipeline asset <strong>GT-008</strong> is a first-in-class monoclonal antibody designed to recognizing a specific tumor-associated glycan epitope on CD24. This unique binding mechanism allows for highly selective therapeutic action without harming healthy tissue that may also express basal levels of CD24.
                        </p>
                        <p className="text-sm font-bold text-[#F2A900] bg-[#F2A900]/10 p-4 border border-[#F2A900]/20 rounded-xl">
                          GT-008 acts via Antibody-Dependent Cellular Cytotoxicity (ADCC) and promotes macrophage-mediated phagocytosis.
                        </p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                        <img src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2600&auto=format&fit=crop" alt="Antibody Glycosylation" className="rounded-xl shadow-md w-full h-auto object-cover" />
                      </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "theranostics" && (
                 <motion.div key="theranostics" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="relative z-10">
                    <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-6">The Theranostic Principle</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                       <div className="lg:col-span-2 text-slate-600">
                         <p className="leading-relaxed mb-6 font-medium text-[#002A54] text-xl">
                           "We see what we treat, and we treat what we see."
                         </p>
                         <p className="leading-relaxed mb-6">
                           Theranostics pairs a diagnostic imaging agent with a therapeutic agent binding to the exact same molecular target. For our CXCR4 pipeline, PentixaFor acts as the scout, and PentixaTher acts as the sniper.
                         </p>
                         <div className="grid grid-cols-2 gap-6 mt-10">
                           <div className="bg-[#00B1AB]/5 border border-[#00B1AB]/20 p-6 rounded-2xl">
                              <Microscope className="w-8 h-8 text-[#00B1AB] mb-4" />
                              <h4 className="font-bold text-[#002A54] text-lg mb-2">Diagnose</h4>
                              <p className="text-sm">A low-dose Gallium-68 radioactive tracer maps tumor dissemination via PET/CT clearly and non-invasively.</p>
                           </div>
                           <div className="bg-[#00A3E0]/5 border border-[#00A3E0]/20 p-6 rounded-2xl">
                              <Zap className="w-8 h-8 text-[#00A3E0] mb-4" />
                              <h4 className="font-bold text-[#002A54] text-lg mb-2">Treat</h4>
                              <p className="text-sm">A high-dose Isotope (Lutetium-177 or Yttrium-90) docks precisely to the identified tumors, destroying them.</p>
                           </div>
                         </div>
                       </div>
                       <div className="bg-slate-900 rounded-3xl p-8 text-white relative flex flex-col items-center justify-center min-h-[300px] overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                           <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2600" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                           <div className="relative z-20 text-center">
                              <Activity className="w-12 h-12 text-[#00B1AB] mx-auto mb-4" />
                              <p className="font-bold font-heading text-2xl">Precision Ablation</p>
                           </div>
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "cmc" && (
                 <motion.div key="cmc" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="relative z-10">
                    <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-6">Manufacturing, Supply & CMC</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-start text-slate-600">
                      <div>
                        <p className="leading-relaxed mb-6">
                          Delivering radiopharmaceuticals requires a highly complex, just-in-time supply chain due to the short half-life of medical isotopes like Gallium-68 and Lutetium-177.
                        </p>
                        <p className="leading-relaxed mb-6">
                          Pentixapharm has established a robust array of global manufacturing partnerships (CMOs) and cyclotron hubs to ensure our CXCR4 pipeline can reliably reach clinical trial sites across Europe, North America, and Asia within hours of labelling.
                        </p>
                        <ul className="space-y-4">
                           <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                             <Container className="w-6 h-6 text-slate-400 shrink-0"/>
                             <span className="text-sm font-medium">Validated Just-in-Time Distribution network</span>
                           </li>
                           <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                             <ShieldAlert className="w-6 h-6 text-emerald shrink-0"/>
                             <span className="text-sm font-medium">GMP compliant radiolabeling facilities</span>
                           </li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2600&auto=format&fit=crop" className="rounded-xl shadow-md w-full h-[200px] object-cover" />
                        <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2600&auto=format&fit=crop" className="rounded-xl shadow-md w-full h-[200px] object-cover" />
                      </div>
                    </div>
                 </motion.div>
               )}

             </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
