"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { 
  MapPin, UserCheck, Stethoscope, Microscope, Atom, ArrowUpRight, 
  Activity, Target, ChevronRight, Globe2, Sparkles, Send
} from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
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
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white transition-colors duration-700 pb-32 pt-24 selection:bg-[#00BDD5] selection:text-white">
      
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <AnimatedBg />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#00BDD5]/5 dark:bg-[#00BDD5]/10 rounded-full blur-[140px] pointer-events-none transition-colors" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.6em] bg-white dark:bg-white/5 px-10 py-4 rounded-full border border-slate-100 dark:border-white/10 shadow-xl mb-12 italic mt-10 transition-colors">
              Medical Affairs Collaboration
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold text-[#001533] dark:text-white mb-12 leading-[0.75] tracking-tighter italic drop-shadow-sm transition-colors">
              Clinical <br/><span className="text-[#00BDD5]">Evidence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100 dark:border-white/5 transition-colors">
              Collaborating with global leading research centers to expand the molecular frontier through our independent Investigator-Initiated Studies (IIS) program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE PILLARS ────────────────────────────────────────────────────── */}
      <section className="py-32 relative z-20 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Atom, label: "Clinical Supply", text: "Priority access to clinical-grade PentixaFor and PentixaTher precursors for academic validation.", color: "text-[#00BDD5]" },
              { icon: Microscope, label: "Scientific Review", text: "Direct collaboration with our senior molecular oncology and radiochemistry experts.", color: "text-[#00BDD5]" },
              { icon: UserCheck, label: "Data Integrity", text: "Full ownership of patient data remains within the independent academic protocol context.", color: "text-[#7B61FF]" },
            ].map((f, i) => (
              <motion.div key={i} whileHover={{y:-12}} className="bg-white dark:bg-[#121428] p-16 rounded-[4rem] border border-slate-100 dark:border-white/10 group text-center transition-all shadow-xl hover:shadow-4xl">
                <div className={`w-20 h-20 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center mb-10 mx-auto group-hover:bg-[#001533] group-hover:rotate-[15deg] transition-all shadow-sm`}>
                  <f.icon className={`w-10 h-10 ${f.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#001533] dark:text-white mb-6 italic tracking-tight uppercase leading-none transition-colors">{f.label}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base italic font-light mt-4 transition-colors">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS & ACTIVE PORTFOLIO ────────────────────────────────────────── */}
      <section className="py-24 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-5 gap-20">
          
          <div className="lg:col-span-2">
            <div className="sticky top-40 bg-[#001533] dark:bg-[#121428] p-16 rounded-[5rem] relative group overflow-hidden shadow-4xl text-white border border-white/5">
              <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:rotate-[20deg] group-hover:scale-125 transition-transform duration-1000"><Activity className="w-64 h-64 text-white" /></div>
              <h2 className="text-5xl font-heading font-extrabold text-white mb-16 leading-[0.8] tracking-tighter italic italic">Accelerated <br/><span className="text-[#00BDD5]">Inquiry.</span></h2>
              
              <div className="space-y-12 mb-16">
                {[
                  { step: "01", title: "Concept Protocol", desc: "Submit a synopsis outlining scientific rationale and isotope requirements." },
                  { step: "02", title: "Medical Review", desc: "Executive committee evaluation for clinical validity and safety metrics." },
                  { step: "03", title: "Asset Pipeline", desc: "Finalize supply logistics and cold-chain radiolabeling activation." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-8 items-start group/step">
                    <span className="text-4xl font-heading font-extrabold text-white/10 group-hover/step:text-[#00BDD5] transition-colors italic transition-colors leading-none">{s.step}</span>
                    <div className="pt-1">
                      <h4 className="font-heading font-extrabold text-white text-xl mb-3 tracking-tighter italic uppercase transition-colors">{s.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-light italic text-base transition-colors">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="mailto:iis@pentixapharm.com" className="w-full flex items-center justify-center gap-6 px-12 py-8 bg-[#00BDD5] text-white rounded-3xl font-heading font-extrabold text-[12px] uppercase tracking-[0.5em] hover:bg-white hover:text-[#001533] transition-all shadow-2xl italic">
                Contact Medical Hub <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
             <div className="mb-16 px-6">
                <span className="text-[#00BDD5] text-[11px] font-heading font-extrabold uppercase tracking-[0.6em] mb-6 block italic transition-colors">Global Study Registry</span>
                <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] dark:text-white leading-[0.85] tracking-tighter italic transition-colors">Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDD5] to-[#7B61FF]">Research.</span></h2>
             </div>
             
             <div className="space-y-8">
                {STUDIES.map((s) => (
                  <motion.div key={s.id} whileHover={{x: 12}} className="p-12 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[4rem] group transition-all duration-500 hover:shadow-4xl shadow-xl">
                    <div className="flex flex-wrap items-center gap-6 mb-10">
                      <span className="text-[10px] font-extrabold text-white bg-[#001533] dark:bg-[#00BDD5] dark:text-[#001533] px-6 py-2.5 rounded-full uppercase tracking-widest italic transition-colors">{s.phase}</span>
                      <span className="text-[10px] font-extrabold text-[#00BDD5] bg-[#00BDD5]/10 border border-[#00BDD5]/30 px-6 py-2.5 rounded-full uppercase tracking-widest italic">{s.status}</span>
                      <span className="text-sm text-slate-400 ml-auto font-light flex items-center gap-4 italic transition-colors"><MapPin className="w-4 h-4 text-[#00BDD5]" /> {s.center}</span>
                    </div>
                    <h3 className="text-3xl font-heading font-extrabold text-[#001533] dark:text-white group-hover:text-[#00BDD5] transition-colors leading-[0.9] tracking-tighter italic mb-8 uppercase transition-colors">{s.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light italic leading-relaxed mb-10 text-lg transition-colors">{s.desc}</p>
                    <div className="flex justify-between items-center pt-8 border-t border-slate-100 dark:border-white/10 transition-colors">
                       <p className="text-[10px] font-extrabold text-[#001533] dark:text-white uppercase tracking-widest italic transition-colors">
                          <span className="text-slate-400 font-light lowercase">Principal investigator • </span> {s.inv}
                       </p>
                       <ChevronRight className="w-6 h-6 text-slate-200 dark:text-white/10 group-hover:text-[#00BDD5] group-hover:translate-x-3 transition-all" />
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* ── FINAL GLOBAL FOOTER CTA ────────────────────────────────────────── */}
      <section className="py-32 text-center container mx-auto px-6 max-w-5xl">
         <div className="bg-white dark:bg-[#121428] rounded-[5rem] p-24 lg:p-32 relative overflow-hidden shadow-4xl border border-slate-100 dark:border-white/5 group transition-colors">
            <div className="relative z-10">
               <span className="text-[#00BDD5] text-[12px] font-heading font-extrabold uppercase tracking-[0.5em] mb-10 block italic transition-colors">Worldwide Evidence Synthesis</span>
               <h3 className="text-5xl md:text-[6.5rem] font-heading font-extrabold mb-12 tracking-tighter text-[#001533] dark:text-white leading-[0.8] italic transition-colors">Bridging Clinical <br /> <span className="text-[#00BDD5]">Frontiers.</span></h3>
               <p className="text-slate-500 dark:text-slate-400 mb-16 font-light text-2xl italic leading-relaxed max-w-3xl mx-auto transition-colors">Our IIS program represents our institutional commitment to medical growth through academic autonomy and technical excellence.</p>
               <a href="mailto:info@pentixapharm.com" className="px-16 py-8 bg-[#00BDD5] text-white rounded-2xl font-heading font-extrabold text-[12px] uppercase tracking-[0.5em] hover:bg-[#001533] dark:hover:bg-white dark:hover:text-[#001533] transition-all shadow-4xl italic flex items-center gap-8 mx-auto w-max">
                 Submit New Proposal <ArrowUpRight className="w-6 h-6" />
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
