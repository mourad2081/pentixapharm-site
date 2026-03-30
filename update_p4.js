
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }

// ── 1. PIPELINE PAGE (Clickable / Expandable) ──────────────────────────────
w('src/app/[locale]/pipeline/page.tsx', `"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ChevronDown, Beaker, ShieldAlert, Target, Zap, Microscope, BookOpen, Activity, ArrowRight } from "lucide-react";

const PIPELINE = [
  { 
    id: "pfor",
    name: "PentixaFor",
    molecule: "[⁶⁸Ga]Ga-PentixaFor",
    type: "Diagnostic PET/CT Tracer",
    ind: "Primary Aldosteronism (PA) / Hypertension",
    phase: "Phase 3 Ready",
    phaseNum: 3,
    color: "emerald",
    desc: "A highly specific, first-in-class PET/CT diagnostic agent targeting the CXCR4 receptor. PANDA is our pivotal global Phase 3 study aimed at confirming PentixaFor's superiority over Adrenal Vein Sampling (AVS) to diagnose patients with primary aldosteronism non-invasively.",
    details: [
       { title: "Mechanism of Action", text: "Binds with high affinity to the CXCR4 receptor, a chemokine receptor overexpressed in PA adenomas. When radiolabelled with Gallium-68, it allows high-resolution, full-body PET/CT visualization." },
       { title: "Clinical Need", text: "Primary Aldosteronism affects millions and is a leading cause of secondary hypertension. Current standard-of-care, AVS, is invasive, technically challenging, and not widely available." },
       { title: "Development Milestone", text: "Phase 3 PANDA protocol cleared. Anticipated start of dosing shortly." }
    ]
  },
  { 
    id: "pther",
    name: "PentixaTher",
    molecule: "[⁹⁰Y]Y / [¹⁷⁷Lu]Lu-PentixaTher",
    type: "Targeted Radiotherapy",
    ind: "Hemato-Oncology (AML, Multiple Myeloma)",
    phase: "Phase 1 / 2",
    phaseNum: 2,
    color: "cyan",
    desc: "A therapeutic counterpart to PentixaFor. By exchanging the diagnostic isotope for a therapeutic one (Lutetium-177 or Yttrium-90), PentixaTher delivers targeted, high-energy intra-tumoral radiation directly to CXCR4-expressing cancer cells.",
    details: [
       { title: "Theranostic Pair", text: "Patients are first screened with PentixaFor. If they show high CXCR4 tumor expression, they are eligible for targeted ablation with PentixaTher." },
       { title: "Ongoing Trials", text: "PENTILULA study in Relapsed/Refractory AML. Currently advancing through dose-escalation cohorts, showing strong safety and promising efficacy signals." },
       { title: "Future Indications", text: "Multiple Myeloma, DLBCL, and T-cell lymphomas." }
    ]
  },
  { 
    id: "gt008",
    name: "GT-008",
    molecule: "Anti-CD24 Glycan mAb",
    type: "Monoclonal Antibody",
    ind: "Solid Tumors (Breast, Ovarian)",
    phase: "Preclinical",
    phaseNum: 1,
    color: "gold",
    desc: "A novel 'First-in-Class' monoclonal antibody platform targeting a unique, tumor-specific glycan epitope on the CD24 receptor. This allows precise tumor targeting without the off-target toxicity associated with generic CD24 binding.",
    details: [
       { title: "Mechanism of Action", text: "Specifically binds to the glycan-modified version of CD24 present primarily on malignant cells, initiating antibody-dependent cellular cytotoxicity (ADCC) and macrophage phagocytosis." },
       { title: "Preclinical Data", text: "Demonstrated complete regression in patient-derived xenograft (PDX) models of triple-negative breast cancer with a single systemic dose." },
       { title: "Next Steps", text: "IND-enabling toxicology studies are ongoing, preparing for first-in-human entry." }
    ]
  }
];

export default function PipelinePage() {
  const [expanded, setExpanded] = useState<string | null>("pfor");

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[#00A3E0]/[0.02] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span className="text-[#00A3E0] text-sm font-bold uppercase tracking-widest bg-[#00A3E0]/10 px-5 py-2 rounded-full inline-block mb-4 border border-[#00A3E0]/20">Clinical Programs</span>
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-6">Pipeline & Assets</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore our comprehensive portfolio of precision-targeted theranostics and antibodies designed to address severe unmet medical needs in endocrinology and oncology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-200">
              <div className="flex px-4 pb-4 border-b border-slate-200 mb-6 hidden md:flex text-xs font-bold text-slate-400 uppercase tracking-widest">
                 <div className="w-1/3">Compound / Mechanism</div>
                 <div className="w-1/4">Indication</div>
                 <div className="w-1/3">Stage of Development</div>
                 <div className="w-12 text-center">More</div>
              </div>

              <div className="space-y-4">
                {PIPELINE.map((p) => {
                  const isEx = expanded === p.id;
                  const cColor = p.color==="emerald"?"#00B1AB":p.color==="cyan"?"#00A3E0":"#F2A900";
                  const bgClass = p.color==="emerald"?"bg-[#00B1AB]":p.color==="cyan"?"bg-[#00A3E0]":"bg-[#F2A900]";
                  
                  return (
                    <motion.div layout key={p.id} className={"border rounded-2xl overflow-hidden transition-all duration-300 " + (isEx ? "border-slate-300 shadow-md bg-white" : "border-slate-200 bg-slate-50 hover:bg-white")}>
                       {/* Header row (Clickable) */}
                       <button onClick={() => setExpanded(isEx ? null : p.id)} className="w-full flex flex-col md:flex-row md:items-center text-left p-5 gap-4 md:gap-0 outline-none">
                          <div className="md:w-1/3 flex items-center gap-4">
                            <div className={"w-12 h-12 flex-shrink-0 shadow-sm rounded-xl flex items-center justify-center bg-white border border-slate-200 " + (isEx?"scale-110 shadow-md":"") + " transition-transform"}>
                               {p.color==="emerald"?<Microscope color={cColor}/> : p.color==="cyan"?<Zap color={cColor}/> : <Beaker color={cColor}/>}
                            </div>
                            <div>
                              <h2 className="text-xl font-heading font-extrabold text-[#002A54] group-hover:text-[#00A3E0] transition-colors">{p.name}</h2>
                              <p className="text-xs text-slate-500 font-bold truncate max-w-[200px]">{p.molecule}</p>
                            </div>
                          </div>
                          <div className="md:w-1/4">
                             <div className="text-sm font-semibold text-slate-700">{p.ind}</div>
                             <div className="text-xs text-slate-400 md:hidden mt-1">{p.type}</div>
                          </div>
                          <div className="md:w-1/3 flex items-center gap-4">
                             <div className="flex-1 max-w-[150px]">
                               <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                  <motion.div initial={{width:0}} animate={{width: (p.phaseNum / 4) * 100 + "%"}} className={"h-full " + bgClass} />
                               </div>
                               <div className="text-xs font-bold text-[#002A54] mt-2">{p.phase}</div>
                             </div>
                          </div>
                          <div className="md:w-12 flex justify-end md:justify-center">
                             <ChevronDown className={"w-5 h-5 text-slate-400 transition-transform duration-300 " + (isEx ? "rotate-180" : "")} />
                          </div>
                       </button>

                       {/* Expandable Content */}
                       <AnimatePresence>
                         {isEx && (
                           <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}} className="overflow-hidden">
                              <div className="p-5 md:p-8 pt-0 border-t border-slate-100 bg-white">
                                 <p className="text-slate-600 leading-relaxed mb-8 mt-6 max-w-3xl">{p.desc}</p>
                                 
                                 <div className="grid md:grid-cols-3 gap-6">
                                    {p.details.map((d, i) => (
                                      <div key={i} className="bg-[#F8FAFD] border border-slate-100 p-5 rounded-2xl">
                                         <h4 className="font-bold text-[#002A54] mb-2 flex items-center gap-2">
                                            {i===0 && <Activity className="w-4 h-4 text-[#00A3E0]" />}
                                            {i===1 && <Target className="w-4 h-4 text-[#00B1AB]" />}
                                            {i===2 && <ArrowRight className="w-4 h-4 text-[#F2A900]" />}
                                            {d.title}
                                         </h4>
                                         <p className="text-sm text-slate-600 leading-relaxed">{d.text}</p>
                                      </div>
                                    ))}
                                 </div>
                              </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
`);

// ── 2. ABOUT PAGE (Expanded History & Mission) ─────────────────────────────
w('src/app/[locale]/about/page.tsx', `"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Trophy, Calendar, Users, FlaskConical, Activity, BookOpen, Target, ShieldCheck, Globe2, Building2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const METRICS = [
  { icon:Users, label:"Patients Imaged (PentixaFor)", value:"2,600+", sub:"Across multiple indications worldwide", color:"emerald" },
  { icon:BookOpen, label:"Peer-reviewed Publications", value:"150+", sub:"PentixaFor & CXCR4 literature", color:"cyan" },
  { icon:Activity, label:"Active Clinical Trials", value:"5", sub:"PENTILULA, PANDA, PENTHERA + 2 IIS", color:"gold" },
  { icon:Target, label:"Phase 3-Ready Candidates", value:"1", sub:"PentixaFor — PANDA study", color:"emerald" },
];

const TEAM = [
  { name:"Dr. Dirk Pleimes", role:"CEO & CMO", bio:"Physician-scientist with expertise in oncology and clinical drug development. Previously at Novartis and Bayer.", init:"DP" },
  { name:"Henner Kollenberg", role:"Chief Business Officer", bio:"Over 20 years of business development experience in the life sciences sector.", init:"HK" },
  { name:"Erik Merten", role:"Chief Technology Officer", bio:"Brings deep expertise in radiopharmaceutical manufacturing, scale-up, and GMP operations.", init:"EM" },
];

const TIMELINE = [
  { year: "2019", text: "Pentixapharm Founded to focus on CXCR4 theranostics." },
  { year: "2021", text: "Received advanced therapeutic designations from the FDA." },
  { year: "2023", text: "Acquired Glycotope asset GT-008, expanding into CD24 targeting." },
  { year: "2025", text: "Successfully IPO'd on the Frankfurt Stock Exchange (PTP)." },
  { year: "2026", text: "Phase 3 PANDA protocol initiated & CTO joined board." },
];

export default function AboutPage() {
  const locale = useLocale();
  const t = useTranslations("about");
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-36 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,42,84,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,42,84,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00A3E0] text-sm font-bold uppercase tracking-widest bg-[#00A3E0]/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#00A3E0]/20">Our Company</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-extrabold text-[#002A54] mt-3 mb-6">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Expanded Mission & Vision */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="relative">
               <div className="absolute -inset-4 bg-[#00A3E0]/10 rounded-3xl blur-xl" />
               <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop" alt="Pentixapharm Labs" className="rounded-3xl shadow-xl w-full h-[500px] object-cover relative z-10" />
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
               <motion.h2 variants={fadeUp} className="text-3xl font-heading font-extrabold text-[#002A54] mb-6">Our Mission</motion.h2>
               <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
                 We are dedicated to pioneering precision medicine by developing innovative theranostic solutions and highly targeted antibodies. Our goal is to shift the paradigm in oncology and endocrinology from generic treatments to highly personalized, molecularly targeted therapies.
               </motion.p>
               <motion.h3 variants={fadeUp} className="text-xl font-heading font-bold text-[#002A54] mb-3 mt-8">Core Values</motion.h3>
               <motion.ul variants={stagger} className="space-y-4">
                  <motion.li variants={fadeUp} className="flex gap-4">
                     <ShieldCheck className="w-6 h-6 text-[#00B1AB] shrink-0" />
                     <div><strong className="text-[#002A54]">Scientific Rigor:</strong> We follow the data, ensuring the highest standards of clinical evidence.</div>
                  </motion.li>
                  <motion.li variants={fadeUp} className="flex gap-4">
                     <Activity className="w-6 h-6 text-[#00A3E0] shrink-0" />
                     <div><strong className="text-[#002A54]">Patient-Centricity:</strong> Minimizing toxicity and maximizing therapeutic effect.</div>
                  </motion.li>
                  <motion.li variants={fadeUp} className="flex gap-4">
                     <Globe2 className="w-6 h-6 text-[#F2A900] shrink-0" />
                     <div><strong className="text-[#002A54]">Global Access:</strong> Building scalable supply chains to bring therapies to patients worldwide.</div>
                  </motion.li>
               </motion.ul>
            </motion.div>
        </div>
      </section>

      {/* Embedded Stats Section */}
      <section className="py-24 bg-[#F8FAFD] border-b border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-extrabold text-[#002A54]">Scientific & Clinical Impact</h2>
              <p className="text-slate-500 mt-2">Key metrics demonstrating our commitment to advancing theranostics.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {METRICS.map((m,i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{y:-5}} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group text-center">
                  <div className={"w-12 h-12 flex items-center justify-center rounded-2xl mx-auto mb-5 " +
                    (m.color==="emerald"?"bg-[#00B1AB]/10 text-[#00B1AB]":m.color==="cyan"?"bg-[#00A3E0]/10 text-[#00A3E0]":"bg-[#F2A900]/10 text-[#F2A900]")}>
                    <m.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className={"text-4xl font-heading font-extrabold mb-1 " + (m.color==="emerald"?"text-[#00B1AB]":m.color==="cyan"?"text-[#00A3E0]":"text-[#F2A900]")}>{m.value}</div>
                  <div className="text-[#002A54] font-bold text-sm mb-1">{m.label}</div>
                  <div className="text-slate-500 text-xs">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate History / Timeline */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
              <Building2 className="w-10 h-10 text-[#00A3E0] mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-extrabold text-[#002A54]">Corporate Timeline</h2>
           </div>
           <div className="space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 bg-slate-100" />
              {TIMELINE.map((item, i) => (
                 <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className={"relative flex flex-col md:flex-row items-start md:items-center " + (i%2===0 ? "md:flex-row-reverse" : "")}>
                    <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#00B1AB] shadow-md z-10" />
                    <div className={"pl-16 md:pl-0 md:w-1/2 " + (i%2===0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left")}>
                       <span className="text-[#002A54] font-extrabold text-2xl font-heading opacity-30">{item.year}</span>
                       <p className="text-slate-600 font-medium mt-1 bg-slate-50 p-4 border border-slate-100 rounded-xl shadow-sm">{item.text}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Users className="w-8 h-8 text-[#00A3E0]" />
              <h2 className="text-4xl font-heading font-extrabold text-[#002A54]">Executive Leadership</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {TEAM.map((m,i) => (
                 <motion.div key={i} variants={fadeUp} whileHover={{y:-5}} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all group overflow-hidden relative">
                   <div className="flex items-center gap-5 mb-5 relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/5 border border-[#00A3E0]/10 flex items-center justify-center">
                       <span className="text-[#00A3E0] font-heading font-extrabold text-xl">{m.init}</span>
                     </div>
                     <div>
                       <h3 className="font-heading font-extrabold text-[#002A54] text-lg leading-tight group-hover:text-[#00B1AB] transition-colors">{m.name}</h3>
                       <p className="text-sm text-[#00A3E0] font-bold mt-1">{m.role}</p>
                     </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed relative z-10">{m.bio}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
`);

// ── 3. TECHNOLOGY PAGE (Expanded Content & Manufacturing) ──────────────────
w('src/app/[locale]/technology/page.tsx', `"use client";
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
`);
console.log("Updated Pipeline, About, and Tech routes to be fully expansive/clickable.");
