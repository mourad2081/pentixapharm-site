"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { MapPin, UserCheck, Stethoscope, Microscope, Atom, ArrowUpRight, Activity, Target } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const MOL_IMG = "molecular_theranostic_structure_1774915435525.png";

const STUDIES = [
  { id: "iis-1", title: "Evaluation of [68Ga]Ga-PentixaFor in Advanced Endocrine Tumors", center: "University Hospital Würzburg", inv: "Prof. Dr. Andreas Buck", phase: "Phase 2", status: "Recruiting", desc: "Assessing the diagnostic accuracy and clinical impact of CXCR4 imaging in patients with advanced differentiated and dedifferentiated endocrine malignancies." },
  { id: "iis-2", title: "[177Lu]Lu-PentixaTher in Refractory AML (PENTILULA Companion)", center: "Hannover Medical School", inv: "Prof. Dr. Jens Vogel-Claussen", phase: "Phase 1/2", status: "Active", desc: "A single-center companion study exploring adjusted dosing metrics for Yttrium-90/Lutetium-177 based CXCR4 targeted bone marrow ablation." },
  { id: "iis-3", title: "CXCR4 Expression in Urothelial and Bladder Cancers", center: "Essen University Hospital", inv: "Prof. Dr. Ken Herrmann", phase: "Phase 2 equivalent", status: "Enrolling by Invitation", desc: "Comparing [68Ga]Ga-PentixaFor sensitivity in bladder cancer versus standard FDG PET/CT prior to radical cystectomy." },
  { id: "iis-4", title: "Pre-operative Mapping of Adrenal Adenomas with [68Ga]Ga-PentixaFor", center: "LMU Munich", inv: "Prof. Dr. Peter Bartenstein", phase: "Phase 3 equivalent data collection", status: "Active, not recruiting", desc: "Validating PentixaFor as an alternative to AVS in preparing patients for adrenalectomy due to primary aldosteronism." }
];

export default function IISPage() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-44 pb-28 overflow-hidden bg-white">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFD] to-transparent" />
        <div className="absolute -right-20 -top-20 w-[600px] h-[400px] bg-cyan/5 rounded-[50%_50%_0_0] blur-[140px] rotate-45" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-cyan font-bold text-xs uppercase tracking-widest bg-cyan/10 px-6 py-2.5 rounded-full border border-cyan/20 mb-10">
              Medical Affairs Support
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-[#031835] mb-8 leading-tight">Empowering Clinical <span className="text-teal">Pioneers</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light">
              We collaborate with researchers worldwide to uncover new therapeutic frontiers through our Investigator-Initiated Studies (IIS) program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 bg-[#F8FAFD] -mt-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Atom, label: "Clinical Supply", text: "Priority access to clinical-grade PentixaFor and PentixaTher precursors.", color: "text-cyan" },
              { icon: Microscope, label: "Scientific Review", text: "Collaborative review and scientific feedback from our oncology experts.", color: "text-teal" },
              { icon: UserCheck, label: "Independent Control", text: "Full ownership of data generated within the academic protocol context.", color: "text-helixRed" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all">
                <div className={"w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform " + f.color}>
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-[#031835] mb-4">{f.label}</h3>
                <p className="text-slate-500 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <h2 className="text-4xl font-heading font-extrabold text-[#031835] mb-8 leading-tight">How to Apply</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Study Concept Proposal", desc: "Submit a 2-3 page synopsis outlining the scientific rationale, clinical endpoints, and required supply of PentixaFor/Ther." },
                  { step: "02", title: "Strategic Alignment Review", desc: "Our Medical Affairs committee evaluates proposals for scientific validity, safety profile, and strategic relevance." },
                  { step: "03", title: "Contracting & Supply", desc: "Upon approval, legal IIS agreements are finalized and clinical logistic chains are established for delivery." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-5xl font-heading font-extrabold text-slate-200 mt-[-10px]">{s.step}</span>
                    <div>
                      <h4 className="font-heading font-extrabold text-[#031835] text-xl mb-2">{s.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 bg-[#031835] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/20 blur-3xl rounded-full" />
                <h3 className="text-2xl font-heading font-extrabold mb-4 relative z-10">Start Your Proposal</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">Contact our Medical Affairs clinical team directly to request application templates.</p>
                <a href="mailto:iis@pentixapharm.com" className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-[#031835] font-bold rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg relative z-10 font-heading">
                  Submit Inquiry <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <img src={`/${MOL_IMG}`} className="w-64 h-64 object-contain" />
              </div>
              <h2 className="text-4xl font-heading font-extrabold text-[#031835] mb-8 border-b border-slate-100 pb-8">Ongoing Studies</h2>
              <div className="space-y-6">
                {STUDIES.map((s) => (
                  <div key={s.id} className="p-8 bg-[#F8FAFD] border border-slate-100 rounded-3xl group hover:border-cyan/30 transition-all">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-[10px] font-bold text-[#031835] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">{s.phase}</span>
                      <span className="text-[10px] font-bold text-white bg-teal px-3 py-1 rounded-full">{s.status}</span>
                      <span className="text-xs text-slate-400 ml-auto font-medium flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {s.center}</span>
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#031835] group-hover:text-cyan transition-colors leading-snug mb-4">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-200/50">
                      <p className="text-xs font-bold text-[#031835] uppercase tracking-widest"><span className="text-slate-400 font-medium lowercase italic">led by </span> {s.inv}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
