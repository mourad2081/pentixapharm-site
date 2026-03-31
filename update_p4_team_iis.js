
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }

const LAB_IMG = "biotech_lab_researcher_1774915416227.png";
const MOL_IMG = "molecular_theranostic_structure_1774915435525.png";

w('src/app/[locale]/about/page.tsx', `"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Users, BookOpen, Activity, Target, ShieldCheck, Globe2, Building2, Linkedin, ExternalLink, GraduationCap, Award } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const METRICS = [
  { icon:Users, label:"Patients Imaged (PentixaFor)", value:"2,600+", sub:"Across multiple indications worldwide", color:"teal" },
  { icon:BookOpen, label:"Peer-reviewed Publications", value:"150+", sub:"PentixaFor & CXCR4 literature", color:"cyan" },
  { icon:Activity, label:"Active Clinical Trials", value:"5", sub:"PENTILULA, PANDA, PENTHERA + 2 IIS", color:"gold" },
  { icon:Target, label:"Phase 3-Ready Candidates", value:"1", sub:"PentixaFor — PANDA study", color:"helixRed" },
];

const EXEC_BOARD = [
  { name:"Dr. Dirk Pleimes", role:"Group CEO & CMO", bio:"Physician-scientist with expertise in oncology and clinical drug development. Previously at Novartis and Bayer. Leading clinical-regulatory strategy for the PentixaFor/Ther theranostic pair.", init:"DP" },
  { name:"Henner Kollenberg", role:"Chief Business Officer", bio:"Expert in life science capital markets and business development. Strategic architect of Pentixapharm's growth, including the acquisition of GT-008 and the IPO process.", init:"HK" },
  { name:"Erik Merten", role:"Chief Technology Officer", bio:"Deep expertise in radiopharmaceutical manufacturing, GMP operations, and supply chain scaling for thermal and diagnostic applications.", init:"EM" },
];

const SUPERVISORY_BOARD = [
  { name:"Dr. Andreas Eckert", role:"Chairman", bio:"Founder of Eckert & Ziegler and leading entrepreneur in the German biotech and medtech sector.", init:"AE" },
  { name:"Dr. Harald Hasselmann", role:"Deputy Chairman", bio:"Extensive experience in pharmaceutical management and corporate finance.", init:"HH" },
  { name:"Prof. Dr. Ken Herrmann", role:"Board Member", bio:"Nuclar Medicine expert, Director at University Hospital Essen, leading voice in theranostics research globally.", init:"KH" },
  { name:"Prof. Dr. Marcus Quinkler", role:"Board Member", bio:"Internationally recognized endocrinology expert, key advisor for the primary aldosteronism indication.", init:"MQ" },
  { name:"Jens Giltsch", role:"Board Member", bio:"Financial expert with focus on the biotech ecosystem and structured funding.", init:"JG" },
  { name:"Dr. Jürgen Allerkamp", role:"Board Member", bio:"Extensive experience in corporate governance and investment banking.", init:"JA" },
];

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-slate-200">
         <div className="absolute inset-0 z-0 opacity-[0.03]">
            <img src="/logo.png" className="absolute -right-20 top-0 w-1/2 opacity-10" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFD] to-transparent" />
         </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-xs font-bold uppercase tracking-[0.2em] bg-cyan/10 px-6 py-2.5 rounded-full inline-block mb-6 border border-cyan/20">Our Company Identity</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-navy mt-3 mb-8 drop-shadow-sm leading-tight">Advancing the Future of <span className="text-cyan">Theranostics</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light">
              Pentixapharm is a clinical-stage radiopharmaceutical company. We develop ligands that "see" and "treat" disease simultaneously through our industry-leading CXCR4 platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Expanded */}
      <section className="py-28 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <span className="text-helixRed font-bold text-sm tracking-widest uppercase mb-4 block">Leadership</span>
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-6">The Executive Board</h2>
               <p className="text-slate-500">A collective of diagnostic pioneers and clinical strategists driving the next generation of precision oncology.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {EXEC_BOARD.map((m,i) => (
                 <motion.div key={i} variants={fadeUp} whileHover={{y:-8}} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group overflow-hidden relative shadow-sm">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/5 rounded-full blur-3xl group-hover:bg-cyan/10 transition-colors" />
                   <div className="flex flex-col items-center text-center mb-8">
                      <div className="w-24 h-24 rounded-[1.8rem] bg-navy flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group-hover:rotate-3 transition-transform">
                         <div className="absolute inset-0 bg-gradient-to-br from-cyan/40 to-transparent opacity-50" />
                         <span className="text-white font-heading font-extrabold text-3xl relative z-10">{m.init}</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-navy text-2xl group-hover:text-cyan transition-colors">{m.name}</h3>
                      <p className="text-sm text-helixRed font-bold uppercase tracking-widest mt-1.5">{m.role}</p>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed text-center px-2 mb-8">{m.bio}</p>
                   <div className="flex justify-center items-center gap-4 border-t border-slate-100 pt-8">
                      <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy hover:border-navy transition-all"><Linkedin className="w-4 h-4"/></button>
                      <button className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all flex items-center gap-2">Full Bio <ExternalLink className="w-3 h-3"/></button>
                   </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supervisory Board Section */}
      <section className="py-28 bg-white border-y border-slate-200">
         <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
               <div className="text-center mb-16">
                  <span className="text-cyan font-bold text-sm tracking-widest uppercase mb-4 block">Governance</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">Supervisory Board</h2>
               </div>
               
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SUPERVISORY_BOARD.map((m,i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-6 items-start p-8 bg-[#F8FAFD] border border-slate-200 rounded-3xl hover:border-teal/30 hover:shadow-lg transition-all group">
                       <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center font-heading font-bold text-navy group-hover:bg-navy group-hover:text-white transition-all shadow-sm">
                          {m.init}
                       </div>
                       <div>
                          <h4 className="font-heading font-extrabold text-navy leading-tight">{m.name}</h4>
                          <p className="text-xs font-bold text-teal uppercase mt-1.5 mb-3">{m.role}</p>
                          <p className="text-[13px] text-slate-500 leading-relaxed">{m.bio}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* Visual Impact Section with generated image */}
      <section className="py-24 bg-[#001D3D] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-40">
            <img src="/\${LAB_IMG}" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/80" />
         </div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
                  <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold mb-8 italic">"We see what we treat, and we treat what we see."</motion.h2>
                  <motion.p variants={fadeUp} className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                    Our CXCR4-directed theranostics strategy is designed to provide patients with a precisely targeted approach, minimizing off-target effects while maximizing clinical outcome.
                  </motion.p>
                  <motion.div variants={stagger} className="grid grid-cols-2 gap-x-12 gap-y-8">
                     <motion.div variants={fadeUp} className="flex flex-col gap-2">
                        <span className="text-cyan text-4xl font-heading font-extrabold tracking-tighter">150+</span>
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Research Papers</span>
                     </motion.div>
                     <motion.div variants={fadeUp} className="flex flex-col gap-2">
                        <span className="text-teal text-4xl font-heading font-extrabold tracking-tighter">2,600+</span>
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Patient Applications</span>
                     </motion.div>
                  </motion.div>
               </motion.div>
               <motion.div initial={{opacity:0, scale:0.9s}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}} className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3.5rem] shadow-2xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/20 rounded-full blur-3xl" />
                  <div className="flex flex-col gap-8 relative z-10">
                     <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-cyan/20 flex items-center justify-center shrink-0"><GraduationCap className="text-cyan"/></div>
                        <div>
                           <p className="font-bold text-lg">Academic Roots</p>
                           <p className="text-sm text-slate-400">Collaboration with TU Munich research leaders who pioneered the CXCR4 ligand discovery.</p>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-teal/20 flex items-center justify-center shrink-0"><Award className="text-teal"/></div>
                        <div>
                           <p className="font-bold text-lg">Industry Excellence</p>
                           <p className="text-sm text-slate-400">Deep vertical integration through manufacturing and global regulatory expertise.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
`);

// ── IIS PAGE UPDATE ────────────────────────────────────────────────────────
w('src/app/[locale]/iis/page.tsx', `"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { BookOpen, MapPin, ChevronRight, FileText, CheckCircle2, UserCheck, Stethoscope, Microscope, Atom, ArrowUpRight } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const MOL_IMG = "molecular_theranostic_structure_1774915435525.png";

const STUDIES = [
  { id:"iis-1", title:"Evaluation of [68Ga]Ga-PentixaFor in Advanced Endocrine Tumors", center:"University Hospital Würzburg", inv:"Prof. Dr. Andreas Buck", phase:"Phase 2", status:"Recruiting", desc:"Assessing the diagnostic accuracy and clinical impact of CXCR4 imaging in patients with advanced differentiated and dedifferentiated endocrine malignancies." },
  { id:"iis-2", title:"[177Lu]Lu-PentixaTher in Refractory AML (PENTILULA Companion)", center:"Hannover Medical School", inv:"Prof. Dr. Jens Vogel-Claussen", phase:"Phase 1/2", status:"Active", desc:"A single-center companion study exploring adjusted dosing metrics for Yttrium-90/Lutetium-177 based CXCR4 targeted bone marrow ablation." },
  { id:"iis-3", title:"CXCR4 Expression in Urothelial and Bladder Cancers", center:"Essen University Hospital", inv:"Prof. Dr. Ken Herrmann", phase:"Phase 2 equivalent", status:"Enrolling by Invitation", desc:"Comparing [68Ga]Ga-PentixaFor sensitivity in bladder cancer versus standard FDG PET/CT prior to radical cystectomy." },
  { id:"iis-4", title:"Pre-operative Mapping of Adrenal Adenomas with [68Ga]Ga-PentixaFor", center:"LMU Munich", inv:"Prof. Dr. Peter Bartenstein", phase:"Phase 3 equivalent data collection", status:"Active, not recruiting", desc:"Validating PentixaFor as an alternative to AVS in preparing patients for adrenalectomy due to primary aldosteronism." }
];

export default function IISPage() {
  const locale = useLocale();
  
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-44 pb-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-transparent" />
        <div className="absolute -right-20 -top-20 w-[600px] h-[400px] bg-cyan/5 rounded-[50%_50%_0_0] blur-[140px] rotate-45" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-cyan font-bold text-xs uppercase tracking-widest bg-cyan/10 px-6 py-2.5 rounded-full border border-cyan/20 mb-10">
              Medical Affairs Support
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-navy mb-8 leading-tight">Empowering Clinical <span className="text-teal">Pioneers</span></motion.h1>
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
                  { icon:Atom, label:"Clinical Supply", text:"Priority access to clinical-grade PentixaFor and PentixaTher precursors.", color:"text-cyan" },
                  { icon:Microscope, label:"Scientific Review", text:"Collaborative review and scientific feedback from our oncology experts.", color:"text-teal" },
                  { icon:UserCheck, label:"Independent Control", text:"Full ownership of data generated within the academic protocol context.", color:"text-helixRed" },
               ].map((f, i) => (
                  <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all">
                     <div className={"w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform " + f.color}>
                        <f.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-heading font-extrabold text-navy mb-4">{f.label}</h3>
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
                    <h2 className="text-4xl font-heading font-extrabold text-navy mb-8 leading-tight">How to Apply</h2>
                    <div className="space-y-12">
                       {[
                         { step: "01", title: "Study Concept Proposal", desc: "Submit a 2-3 page synopsis outlining the scientific rationale, clinical endpoints, and required supply of PentixaFor/Ther." },
                         { step: "02", title: "Strategic Alignment Review", desc: "Our Medical Affairs committee evaluates proposals for scientific validity, safety profile, and strategic relevance." },
                         { step: "03", title: "Contracting & Supply", desc: "Upon approval, legal IIS agreements are finalized and clinical logistic chains are established for delivery." },
                       ].map((s,i) => (
                         <div key={i} className="flex gap-6 items-start">
                            <span className="text-5xl font-heading font-extrabold text-slate-200 mt-[-10px]">{s.step}</span>
                            <div>
                               <h4 className="font-heading font-extrabold text-navy text-xl mb-2">{s.title}</h4>
                               <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="mt-16 bg-navy text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/20 blur-3xl rounded-full" />
                       <h3 className="text-2xl font-heading font-extrabold mb-4 relative z-10">Start Your Proposal</h3>
                       <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">Contact our Medical Affairs clinical team directly to request application templates.</p>
                       <a href="mailto:iis@pentixapharm.com" className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-navy font-bold rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg relative z-10">
                          Submit Inquiry <ArrowUpRight className="w-4 h-4"/>
                       </a>
                    </div>
                 </div>
            </div>

            <div className="lg:col-span-3">
                <div className="bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 p-8 md:p-16 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <img src="/\${MOL_IMG}" className="w-64 h-64 object-contain" />
                   </div>
                   <h2 className="text-4xl font-heading font-extrabold text-navy mb-8 border-b border-slate-100 pb-8">Ongoing Studies</h2>
                   <div className="space-y-6">
                     {STUDIES.map((s) => (
                       <div key={s.id} className="p-8 bg-[#F8FAFD] border border-slate-100 rounded-3xl group hover:border-cyan/30 transition-all">
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                             <span className="text-[10px] font-bold text-navy bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">{s.phase}</span>
                             <span className="text-[10px] font-bold text-white bg-teal px-3 py-1 rounded-full">{s.status}</span>
                             <span className="text-xs text-slate-400 ml-auto font-medium flex items-center gap-1.5"><MapPin className="w-3 h-3"/> {s.center}</span>
                          </div>
                          <h3 className="text-xl font-heading font-extrabold text-[#002A54] group-hover:text-cyan transition-colors leading-snug mb-4">{s.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                          <div className="flex justify-between items-center pt-4 border-t border-slate-200/50">
                             <p className="text-xs font-bold text-navy uppercase tracking-widest"><span className="text-slate-400 font-medium lowercase italic">led by </span> {s.inv}</p>
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
`);
console.log("Updated About & IIS with generated images and expanded content.");
