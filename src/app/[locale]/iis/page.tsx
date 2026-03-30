"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { BookOpen, MapPin, ChevronRight, FileText, CheckCircle2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const STUDIES = [
  { id:"iis-1", title:"Evaluation of [68Ga]Ga-PentixaFor in Advanced Endocrine Tumors", center:"University Hospital Würzburg", inv:"Prof. Dr. Andreas Buck", phase:"Phase 2", status:"Recruiting", desc:"Assessing the diagnostic accuracy and clinical impact of CXCR4 imaging in patients with advanced differentiated and dedifferentiated endocrine malignancies." },
  { id:"iis-2", title:"[177Lu]Lu-PentixaTher in Refractory AML (PENTILULA Companion)", center:"Hannover Medical School", inv:"Prof. Dr. Jens Vogel-Claussen", phase:"Phase 1/2", status:"Active", desc:"A single-center companion study exploring adjusted dosing metrics for Yttrium-90/Lutetium-177 based CXCR4 targeted bone marrow ablation in refractory AML." },
  { id:"iis-3", title:"CXCR4 Expression in Urothelial and Bladder Cancers", center:"Essen University Hospital", inv:"Prof. Dr. Ken Herrmann", phase:"Phase 2 equivalent", status:"Enrolling by Invitation", desc:"First-in-human data collection comparing [68Ga]Ga-PentixaFor sensitivity in bladder cancer versus standard FDG PET/CT prior to radical cystectomy." },
  { id:"iis-4", title:"Pre-operative Mapping of Adrenal Adenomas with [68Ga]Ga-PentixaFor", center:"LMU Munich", inv:"Prof. Dr. Peter Bartenstein", phase:"Phase 3 equivalent data collection", status:"Active, not recruiting", desc:"Validating PentixaFor as an alternative to AVS in preparing patients for adrenalectomy due to primary aldosteronism." }
];

export default function IISPage() {
  const locale = useLocale();
  
  return (
    <div className="bg-navy min-h-screen">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-bold uppercase tracking-widest bg-emerald/10 px-5 py-2 rounded-full inline-block mb-4 border border-emerald/20">
              Investigator-Initiated Studies
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Advancing Science Together</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              Pentixapharm deeply values independent research. We support academic and clinical investigators exploring novel applications of our CXCR4-targeted radiopharmaceuticals (PentixaFor and PentixaTher) through our global Investigator-Initiated Studies (IIS) program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Sidebar (Instructions) */}
             <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="lg:col-span-1 space-y-6">
                 <motion.h2 variants={fadeUp} className="text-2xl font-bold font-heading text-white">IIS Application Process</motion.h2>
                 <motion.p variants={fadeUp} className="text-sm text-slate-400 leading-relaxed">We provide clinical trial lots of [68Ga]Ga-PentixaFor kits or [177Lu]Lu-PentixaTher to approved academic protocols that align with our scientific mission.</motion.p>
                 
                 <motion.div variants={stagger} className="space-y-4 pt-4 border-t border-white/10">
                    <motion.div variants={fadeUp} className="flex gap-3 items-start">
                       <span className="w-6 h-6 rounded bg-emerald text-navy font-bold flex items-center justify-center shrink-0">1</span>
                       <p className="text-sm text-slate-300"><strong className="text-white block">Submit Concept</strong> Submit a 2-page concept sheet detailing the scientific rationale, clinical endpoints, and required clinical supply.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex gap-3 items-start">
                       <span className="w-6 h-6 rounded bg-emerald text-navy font-bold flex items-center justify-center shrink-0">2</span>
                       <p className="text-sm text-slate-300"><strong className="text-white block">Medical Review</strong> Our Medical Affairs committee reviews submissions bi-monthly.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex gap-3 items-start">
                       <span className="w-6 h-6 rounded bg-emerald text-navy font-bold flex items-center justify-center shrink-0">3</span>
                       <p className="text-sm text-slate-300"><strong className="text-white block">Protocol & Contracting</strong> Upon conditional approval, full protocols are developed and IIS agreements are drafted.</p>
                    </motion.div>
                 </motion.div>

                 <motion.div variants={fadeUp} className="bg-navy2/80 p-6 rounded-2xl border border-white/5 mt-6 border-l-4 border-l-cyan">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-cyan"/> Contact Medical Affairs</h3>
                    <p className="text-xs text-slate-400 mb-4">For application templates and submission guidelines, please contact our clinical operations manager.</p>
                    <a href="mailto:clinical@pentixapharm.com" className="text-sm font-bold text-cyan hover:text-white transition-colors">clinical@pentixapharm.com →</a>
                 </motion.div>
             </motion.div>

            {/* Right Side (Current IIS directory) */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="lg:col-span-2">
                <motion.h2 variants={fadeUp} className="text-2xl font-bold font-heading text-white mb-6">Directory of Ongoing Independent Studies</motion.h2>
                <div className="space-y-4">
                  {STUDIES.map((s) => (
                    <motion.div key={s.id} variants={fadeUp} className="bg-navy2/40 backdrop-blur-md border border-white/5 hover:border-white/15 p-6 rounded-2xl transition-all group">
                       <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-emerald transition-colors">{s.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-semibold">
                               <span className="text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">{s.phase}</span>
                               <span className="text-emerald flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> {s.status}</span>
                            </div>
                          </div>
                       </div>
                       <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                       <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-white/5 text-sm text-slate-400">
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 opacity-70"/> {s.center}</span>
                          <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 opacity-70"/> Lead Investigator: {s.inv}</span>
                       </div>
                    </motion.div>
                  ))}
                </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
