
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }
function r(f) { return fs.readFileSync(path.join(B,f),'utf8'); }

// ── 5. CREATE TECHNOLOGY PAGE ───────────────────────────────────────────────────
w('src/app/[locale]/technology/page.tsx', `"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Platform", icon: Atom, color: "text-[#00A3E0]" },
  { id: "cd24", label: "CD24 Platform", icon: Layers, color: "text-[#F2A900]" },
  { id: "theranostics", label: "Theranostic Process", icon: Activity, color: "text-[#00B1AB]" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-36 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3E0]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.span variants={fadeUp} className="text-[#00A3E0] text-sm font-bold uppercase tracking-widest bg-[#00A3E0]/10 px-5 py-2 rounded-full inline-block mb-4 border border-[#00A3E0]/20">
              Technology & Science
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-6 drop-shadow-sm">Precision Targeting Platforms</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              At Pentixapharm, our science leverages two powerful biological targets—CXCR4 and CD24—to deliver potent radiopharmaceuticals and glycan-dependent antibodies directly to the site of disease.
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

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 relative overflow-hidden min-h-[400px]">
             {/* Decorative Background Icon */}
             <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
                {activeTab==="cxcr4" && <Atom className="w-96 h-96 text-[#00A3E0]" />}
                {activeTab==="cd24" && <Layers className="w-96 h-96 text-[#F2A900]" />}
                {activeTab==="theranostics" && <Activity className="w-96 h-96 text-[#00B1AB]" />}
             </div>

             <AnimatePresence mode="wait">
               {activeTab === "cxcr4" && (
                 <motion.div key="cxcr4" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.3}} className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-4">The CXCR4 Receptor</h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        CXCR4 is a chemokine receptor that plays a pivotal role in tumor growth, invasion, angiogenesis, and metastasis. It is abnormally overexpressed in numerous hematologic malignancies (like AML and Multiple Myeloma) and solid tumors.
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        Our proprietary ligand, PentixaFor, has a high affinity for CXCR4. By labelling this ligand with Gallium-68 for imaging, and Lutetium-177 or Yttrium-90 for therapy, we can visualize and aggressively treat these overexpressing tumors.
                      </p>
                      <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-sm font-bold text-[#002A54]"><ShieldAlert className="w-5 h-5 text-[#00A3E0]"/> High Specificity</li>
                         <li className="flex items-center gap-3 text-sm font-bold text-[#002A54]"><Zap className="w-5 h-5 text-[#00A3E0]"/> Direct intra-tumoral radiation</li>
                      </ul>
                    </div>
                    <div>
                      <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2600&auto=format&fit=crop" alt="CXCR4 Targeting" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                    </div>
                 </motion.div>
               )}
               {activeTab === "cd24" && (
                 <motion.div key="cd24" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.3}} className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-4">CD24 Glycan Differentiation</h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        CD24 is a highly glycosylated surface protein overexpressed in various hard-to-treat solid tumors, including breast, ovarian, and colorectal cancers. 
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        GT-008 is our first-in-class monoclonal antibody designed to recognizing a specific tumor-associated glycan epitope on CD24. This unique binding mechanism allows for highly selective therapeutic action without harming healthy tissue that may also express basal levels of CD24.
                      </p>
                    </div>
                    <div>
                      <img src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2600&auto=format&fit=crop" alt="Antibody Glycosylation" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                    </div>
                 </motion.div>
               )}
               {activeTab === "theranostics" && (
                 <motion.div key="theranostics" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.3}} className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-heading font-extrabold text-[#002A54] mb-4">Theranostic Approach</h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        Theranostics pairs a diagnostic imaging agent with a therapeutic agent binding to the exact same molecular target. The principle is succinct: <strong className="text-[#00B1AB]">"We see what we treat, and we treat what we see."</strong>
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        1. <strong>Diagnose (PentixaFor):</strong> A low-dose radioactive trace maps tumor dissemination via PET/CT.<br/><br/>
                        2. <strong>Treat (PentixaTher):</strong> A therapeutic high-dose isotope is attached to the same ligand, docking precisely to the tumors identified during the diagnostic scan, destroying the cancer cells while sparing healthy tissue.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F8FAFD] p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center">
                        <Microscope className="w-10 h-10 text-[#00B1AB] mb-3" />
                        <h4 className="font-bold text-[#002A54]">See</h4>
                        <p className="text-xs text-slate-500 mt-1">[68Ga]Ga</p>
                      </div>
                      <div className="bg-[#F8FAFD] p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center">
                        <Zap className="w-10 h-10 text-[#00A3E0] mb-3" />
                        <h4 className="font-bold text-[#002A54]">Treat</h4>
                        <p className="text-xs text-slate-500 mt-1">[177Lu]Lu / [90Y]Y</p>
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
`);
console.log("Technology Page created.");
