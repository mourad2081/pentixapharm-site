"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { MapPin, UserCheck, Stethoscope, Microscope, Atom, ArrowUpRight, Activity, Target, ChevronRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const STUDIES = [
  { id: "iis-1", title: "Evaluation of [68Ga]Ga-PentixaFor in Advanced Endocrine Tumors", center: "University Hospital Würzburg", inv: "Prof. Dr. Andreas Buck", phase: "Phase 2", status: "Recruiting", desc: "Assessing the diagnostic accuracy and clinical impact of CXCR4 imaging in patients with advanced differentiated and dedifferentiated endocrine malignancies." },
  { id: "iis-2", title: "[177Lu]Lu-PentixaTher in Refractory AML (PENTILULA Companion)", center: "Hannover Medical School", inv: "Prof. Dr. Jens Vogel-Claussen", phase: "Phase 1/2", status: "Active", desc: "A single-center companion study exploring adjusted dosing metrics for Yttrium-90/Lutetium-177 based CXCR4 targeted bone marrow ablation." },
  { id: "iis-3", title: "CXCR4 Expression in Urothelial and Bladder Cancers", center: "Essen University Hospital", inv: "Prof. Dr. Ken Herrmann", phase: "Phase 2 equivalent", status: "Enrolling by Invitation", desc: "Comparing [68Ga]Ga-PentixaFor sensitivity in bladder cancer versus standard FDG PET/CT prior to radical cystectomy." },
  { id: "iis-4", title: "Pre-operative Mapping of Adrenal Adenomas with [68Ga]Ga-PentixaFor", center: "LMU Munich", inv: "Prof. Dr. Peter Bartenstein", phase: "Phase 3 equiv", status: "Active, not recruiting", desc: "Validating PentixaFor as an alternative to AVS in preparing patients for adrenalectomy due to primary aldosteronism." }
];

export default function IISPage() {
  const locale = useLocale();
  return (
    <div className="min-h-screen text-white pb-32 selection:bg-[#00F2FF]/30 selection:text-white pt-24 overflow-hidden">
      
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00F2FF]/5 rounded-[50%_50%_0_0] blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00F2FF] font-heading font-semibold text-[10px] uppercase tracking-[0.4em] bg-white/5 px-8 py-3 rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,242,255,0.1)] mb-10">
              Medical Affairs Support
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-semibold text-white mb-8 tracking-tighter drop-shadow-sm">
              Clinical <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#7B61FF]">Evidence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-16 px-12">
              Collaborating with research centers worldwide to uncover new therapeutic frontiers through our Investigator-Initiated Studies (IIS) program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Atom, label: "Clinical Supply", text: "Priority access to clinical-grade PentixaFor and PentixaTher precursors for academic validation.", color: "text-[#00F2FF]" },
              { icon: Microscope, label: "Scientific Review", text: "Direct collaborative feedback from our senior molecular oncology and radiochemistry experts.", color: "text-[#00F2FF]" },
              { icon: UserCheck, label: "Data Integrity", text: "Full ownership of patient data generated within the independent academic protocol context.", color: "text-[#7B61FF]" },
            ].map((f, i) => (
              <motion.div key={i} whileHover={{y:-6}} className="glass-panel p-10 rounded-3xl border border-white/10 group text-center transition-all bg-white/5">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 mx-auto group-hover:bg-white/10 transition-colors`}>
                  <f.icon className={`w-8 h-8 ${f.color} drop-shadow-[0_0_10px_currentColor]`} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4 tracking-tight uppercase leading-none">{f.label}</h3>
                <p className="text-white/50 leading-relaxed text-sm font-light mt-4">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process and Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <div className="sticky top-40 glass-panel p-12 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-[15deg] transition-transform duration-700"><Activity className="w-48 h-48 text-[#00F2FF]" /></div>
              <h2 className="text-4xl font-heading font-semibold text-white mb-10 leading-none tracking-tighter">Accelerated <br/><span className="text-[#00F2FF]">Pathway</span></h2>
              
              <div className="space-y-10 mb-12">
                {[
                  { step: "01", title: "Concept Proposal", desc: "Submit a 3-page synopsis outlining scientific rationale and isotope requirements." },
                  { step: "02", title: "Alignment Review", desc: "Medical committee evaluation for clinical validity and safety regulatory profile." },
                  { step: "03", title: "Asset Supply", desc: "Legal agreements finalized and supply logistics chain activation." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start group/step">
                    <span className="text-3xl font-heading font-semibold text-white/10 group-hover/step:text-[#00F2FF] transition-colors leading-none">{s.step}</span>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-lg mb-2 tracking-tight uppercase">{s.title}</h4>
                      <p className="text-white/50 leading-relaxed font-light text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="mailto:iis@pentixapharm.com" className="btn-glass btn-cyan w-full justify-center gap-4">
                Submit Inquiry <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
             <div className="mb-10 px-4">
                <span className="text-[#00F2FF] text-[10px] font-heading font-semibold uppercase tracking-[0.4em] mb-4 block">Active Research Portfolio</span>
                <h2 className="text-5xl font-heading font-semibold text-white leading-tight tracking-tighter">Ongoing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#7B61FF]">Clinical</span> Studies</h2>
             </div>
             
             <div className="space-y-6">
                {STUDIES.map((s) => (
                  <motion.div key={s.id} whileHover={{x: 8}} className="p-8 bg-white/5 border border-white/10 rounded-3xl group transition-all duration-300 hover:bg-white/10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold text-black bg-[#00F2FF] px-4 py-1.5 rounded-full uppercase tracking-widest">{s.phase}</span>
                      <span className="text-[10px] font-bold text-[#00F2FF] bg-[#00F2FF]/10 border border-[#00F2FF]/30 px-4 py-1.5 rounded-full uppercase tracking-widest">{s.status}</span>
                      <span className="text-xs text-white/50 ml-auto font-light flex items-center gap-2"><MapPin className="w-3 h-3 text-[#00F2FF]" /> {s.center}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-white group-hover:text-[#00F2FF] transition-colors leading-tight tracking-tighter mb-4">{s.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">{s.desc}</p>
                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                       <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                          <span className="text-white/40 font-light lowercase">Principal investigator • </span> {s.inv}
                       </p>
                       <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#00F2FF] group-hover:translate-x-2 transition-all" />
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
