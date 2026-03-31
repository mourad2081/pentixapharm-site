"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { MapPin, UserCheck, Stethoscope, Microscope, Atom, ArrowUpRight, Activity, Target, ChevronRight } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const MOL_IMG = "molecular_theranostic_structure_1774915435525.png";

const STUDIES = [
  { id: "iis-1", title: "Evaluation of [68Ga]Ga-PentixaFor in Advanced Endocrine Tumors", center: "University Hospital Würzburg", inv: "Prof. Dr. Andreas Buck", phase: "Phase 2", status: "Recruiting", desc: "Assessing the diagnostic accuracy and clinical impact of CXCR4 imaging in patients with advanced differentiated and dedifferentiated endocrine malignancies." },
  { id: "iis-2", title: "[177Lu]Lu-PentixaTher in Refractory AML (PENTILULA Companion)", center: "Hannover Medical School", inv: "Prof. Dr. Jens Vogel-Claussen", phase: "Phase 1/2", status: "Active", desc: "A single-center companion study exploring adjusted dosing metrics for Yttrium-90/Lutetium-177 based CXCR4 targeted bone marrow ablation." },
  { id: "iis-3", title: "CXCR4 Expression in Urothelial and Bladder Cancers", center: "Essen University Hospital", inv: "Prof. Dr. Ken Herrmann", phase: "Phase 2 equivalent", status: "Enrolling by Invitation", desc: "Comparing [68Ga]Ga-PentixaFor sensitivity in bladder cancer versus standard FDG PET/CT prior to radical cystectomy." },
  { id: "iis-4", title: "Pre-operative Mapping of Adrenal Adenomas with [68Ga]Ga-PentixaFor", center: "LMU Munich", inv: "Prof. Dr. Peter Bartenstein", phase: "Phase 3 equivalent data collection", status: "Active, not recruiting", desc: "Validating PentixaFor as an alternative to AVS in preparing patients for adrenalectomy due to primary aldosteronism." }
];

export default function IISPage() {
  const locale = useLocale();
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-32 selection:bg-[#00BDD5] selection:text-white">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent opacity-60" />
        <div className="absolute -right-20 -top-20 w-[800px] h-[600px] bg-[#00BDD5]/5 rounded-[50%_50%_0_0] blur-[140px] rotate-45 pointer-events-none" />
        <AnimatedBg />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full border border-slate-100 shadow-xl mb-12 italic mt-10">
              Medical Affairs Support
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold text-[#001533] mb-12 italic leading-[0.75] tracking-tighter drop-shadow-sm">
              Clinical <br/><span className="text-[#00BDD5] underline decoration-[#00BDD5]/10 underline-offset-10 px-4">Evidence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              Collaborating with research centers worldwide to uncover new therapeutic frontiers through our Investigator-Initiated Studies (IIS) program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Atom, label: "Clinical Supply", text: "Priority access to clinical-grade PentixaFor and PentixaTher precursors for academic validation.", color: "text-[#00BDD5]" },
              { icon: Microscope, label: "Scientific Review", text: "Direct collaborative feedback from our senior molecular oncology and radiochemistry experts.", color: "text-[#00BDD5]" },
              { icon: UserCheck, label: "Data Integrity", text: "Full ownership of patient data generated within the independent academic protocol context.", color: "text-[#001533]" },
            ].map((f, i) => (
              <motion.div key={i} whileHover={{y:-12}} className="bg-white p-14 rounded-[3.5rem] shadow-3xl border border-slate-100 group transition-all text-center">
                <div className={"w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 shadow-inner group-hover:bg-[#001533] group-hover:rotate-12 mx-auto transition-all"}>
                  <f.icon className={"w-10 h-10 " + f.color + " group-hover:text-[#00BDD5]"} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#001533] mb-4 italic tracking-tight uppercase leading-none">{f.label}</h3>
                <p className="text-slate-500 leading-relaxed italic text-sm font-light mt-4 px-4">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process and Studies Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-5 gap-24">
          
          <div className="lg:col-span-2">
            <div className="sticky top-40 bg-white p-16 rounded-[5rem] shadow-4xl border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform"><Activity className="w-64 h-64 text-[#00BDD5]" /></div>
              <h2 className="text-5xl font-heading font-extrabold text-[#001533] mb-12 leading-none italic tracking-tighter">Accelerated <br/><span className="text-[#00BDD5]">Pathway</span></h2>
              
              <div className="space-y-12 mb-16">
                {[
                  { step: "01", title: "Concept Proposal", desc: "Submit a 3-page synopsis outlining scientific rationale and isotope requirements." },
                  { step: "02", title: "Alignment Review", desc: "Medical committee evaluation for clinical validity and safety regulatory profile." },
                  { step: "03", title: "Asset Supply", desc: "Legal IIS agreements finalized and supply logistics chain activation." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-8 items-start group/step">
                    <span className="text-4xl font-heading font-extrabold text-[#00BDD5]/20 group-hover/step:text-[#00BDD5] transition-colors italic leading-none">{s.step}</span>
                    <div>
                      <h4 className="font-heading font-extrabold text-[#001533] text-xl mb-2 italic tracking-tight uppercase">{s.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-light italic text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="mailto:iis@pentixapharm.com" className="w-full py-8 bg-[#001533] text-white rounded-full font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] italic flex items-center justify-center gap-6 hover:bg-[#00BDD5] transition-all shadow-3xl">
                Submit Inquiry <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
             <div className="mb-14 px-8">
                <span className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] mb-4 block italic">Active Research Portfolio</span>
                <h2 className="text-6xl font-heading font-extrabold text-[#001533] italic leading-tight tracking-tighter">Ongoing <span className="text-[#00BDD5]">Clinical</span> Studies</h2>
             </div>
             
             <div className="space-y-8">
                {STUDIES.map((s) => (
                  <motion.div key={s.id} whileHover={{x: 20}} className="p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-xl group transition-all duration-700 hover:shadow-4xl">
                    <div className="flex flex-wrap items-center gap-6 mb-8">
                      <span className="text-[10px] font-bold text-white bg-[#00BDD5] px-6 py-2 rounded-full uppercase tracking-widest italic">{s.phase}</span>
                      <span className="text-[10px] font-bold text-[#001533] bg-slate-50 px-6 py-2 rounded-full border border-slate-100 uppercase tracking-widest italic">{s.status}</span>
                      <span className="text-xs text-slate-400 ml-auto font-light italic flex items-center gap-3"><MapPin className="w-4 h-4 text-[#00BDD5]" /> {s.center}</span>
                    </div>
                    <h3 className="text-3xl font-heading font-extrabold text-[#001533] group-hover:text-[#00BDD5] transition-colors leading-tight italic tracking-tighter mb-6">{s.title}</h3>
                    <p className="text-slate-500 italic font-light leading-relaxed mb-8 text-lg">{s.desc}</p>
                    <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                       <p className="text-[11px] font-extrabold text-[#001533] uppercase tracking-widest italic">
                          <span className="text-slate-400 font-light lowercase">Principal investigator • </span> {s.inv}
                       </p>
                       <ChevronRight className="w-6 h-6 text-[#00BDD5]/30 group-hover:text-[#00BDD5] group-hover:translate-x-4 transition-all" />
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
