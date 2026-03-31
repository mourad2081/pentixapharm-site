"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { 
  ArrowRight, Activity, Microscope, Zap, ShieldAlert, Atom, Layers, 
  Factory, Container, Search, Database, Network, Fingerprint, Focus
} from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";
import HelixBackground from "@/components/visual/HelixBackground";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

const HERO_BG = "tech_hero_bg_png_1774920464102.png";

const MECHANISMS = [
  { id: "cxcr4", label: "CXCR4 Precision", icon: Atom, color: "text-[#00A3E0]" },
  { id: "cd24", label: "CD24 Glycans", icon: Layers, color: "text-[#A7303E]" },
  { id: "theranostics", label: "Theranostic Process", icon: Activity, color: "text-teal" },
  { id: "cmc", label: "Global Operations", icon: Factory, color: "text-cyan" },
  { id: "discovery", label: "Discovery Engine", icon: Search, color: "text-[#22c55e]" }
];

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("cxcr4");
  const locale = useLocale();
  
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-56 pb-48 overflow-hidden bg-[#031835] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" alt="Technology Background" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#031835] via-[#031835]/80 to-transparent" />
           <div className="absolute inset-0 bg-[#031835]/30 backdrop-blur-[2px]" />
           <AnimatedBg />
           <HelixBackground />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] bg-white/5 backdrop-blur-xl px-10 py-4 rounded-full mb-12 border border-white/10 shadow-2xl italic">
              <Microscope className="w-4 h-4" /> Molecular Engineering & Science
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[8rem] font-heading font-extrabold mb-10 italic leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-cyan/50 drop-shadow-2xl">
              Science of <br /> <span className="text-cyan">Precision.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-6 border-x-2 border-cyan/40">
              Leveraging proprietary biological targets to deliver high-affinity radiochemistry—redefining the standard of care in oncology and endocrinology.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-12 pt-8">
               <div className="flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-teal" />
                  <p className="text-[10px] font-heading font-extrabold text-[#00B1AB] uppercase tracking-widest italic">Receptor Specificity</p>
               </div>
               <div className="flex items-center gap-3">
                  <Focus className="w-5 h-5 text-cyan" />
                  <p className="text-[10px] font-heading font-extrabold text-white/80 uppercase tracking-widest italic">High Target Affinity</p>
               </div>
               <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 text-cyan opacity-80" />
                  <p className="text-[10px] font-heading font-extrabold text-cyan/70 uppercase tracking-widest italic">Isotope Modularity</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE TABS SECTION ────────────────────────────────────────── */}
      <section className="pb-40 pt-20 bg-[#F8FAFD] relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-wrap justify-center gap-6 mb-24 relative z-30 -mt-32">
            {MECHANISMS.map(m => (
               <button key={m.id} onClick={() => setActiveTab(m.id)}
                 className={"flex items-center gap-4 px-10 py-7 rounded-[3rem] font-heading font-extrabold text-[12px] uppercase tracking-[0.4em] transition-all outline-none italic backdrop-blur-xl border " + (activeTab===m.id ? "bg-[#031835] border-cyan/30 text-white scale-110 shadow-[0_30px_60px_-15px_rgba(0,177,171,0.3)]" : "bg-white/80 border-slate-100/50 text-slate-500 hover:bg-white hover:text-[#031835] hover:-translate-y-2 shadow-xl")}>
                  <m.icon className={"w-6 h-6 transition-transform duration-500 " + (activeTab===m.id ? "text-cyan rotate-12" : m.color)} /> {m.label}
               </button>
            ))}
          </div>

          <motion.div layout className="bg-white rounded-[5rem] p-12 lg:p-24 shadow-[0_40px_100px_-20px_rgba(3,24,53,0.08)] border border-slate-100 relative overflow-hidden min-h-[600px] flex items-center">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-cyan/5 via-transparent to-transparent opacity-80 pointer-events-none translate-x-1/3 -translate-y-1/3" />
             <AnimatePresence mode="wait">
               
               {activeTab === "cxcr4" && (
                 <motion.div key="cxcr4" initial={{opacity:0, filter:"blur(10px)", x:40}} animate={{opacity:1, filter:"blur(0px)", x:0}} exit={{opacity:0, scale:0.95, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-cyan font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] mb-6 block italic">Platform Core Portfolio</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-extrabold text-[#031835] mb-10 leading-none italic tracking-tighter">The <span className="text-teal underline decoration-cyan/30 decoration-8 underline-offset-8">CXCR4</span> Hub</h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-14 font-light italic">
                            CXCR4 is highly specific across 30+ different types of aggressive cancers. Our proprietary ligands are designed for optimal biodistribution, allowing for clear tumor-to-background ratio imaging in PET/CT and extremely high-impact beta radiation delivery directly into the tumor micro-environment.
                          </p>
                          <div className="space-y-8">
                             <div className="bg-[#F8FAFD] p-10 rounded-[3rem] border border-slate-100 flex gap-8 group hover:translate-x-4 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-default">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-[#031835] group-hover:rotate-12 transition-all"><ShieldAlert className="w-8 h-8 text-cyan"/></div>
                                <div>
                                   <p className="text-[#031835] font-extrabold text-xl mb-2 italic tracking-tight uppercase">Onco-Selection</p>
                                   <p className="text-slate-500 text-sm leading-relaxed font-light italic">Specific binding across multiple hematologic malignancies like AML and Multiple Myeloma where standard target therapies fail.</p>
                                </div>
                             </div>
                             <div className="bg-[#F8FAFD] p-10 rounded-[3rem] border border-slate-100 flex gap-8 group hover:translate-x-4 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-default">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-teal transition-all group-hover:-rotate-12"><Zap className="w-8 h-8 text-teal group-hover:text-white"/></div>
                                <div>
                                   <p className="text-[#031835] font-extrabold text-xl mb-2 italic tracking-tight uppercase">Targeted Ablation</p>
                                   <p className="text-slate-500 text-sm leading-relaxed font-light italic">Delivering highly potent therapeutic doses of Lutetium-177 or Yttrium-90 precisely to diseased bone marrow and solid tumor clusters.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="relative group perspective-1000">
                          <div className="absolute inset-0 bg-[#031835]/5 rounded-[4rem] rotate-3 opacity-0 group-hover:opacity-100 group-hover:rotate-6 transition-all duration-700 blur-xl" />
                          <div className="relative bg-slate-50 rounded-[4rem] p-10 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden group-hover:-translate-y-4 group-hover:rotate-[-2deg] transition-transform duration-700">
                             <img src="/molecular_theranostic_structure_1774915435525.png" alt="CXCR4 Architecture" className="w-full h-[600px] object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-1000" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "cd24" && (
                 <motion.div key="cd24" initial={{opacity:0, filter:"blur(10px)", x:40}} animate={{opacity:1, filter:"blur(0px)", x:0}} exit={{opacity:0, scale:0.95, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-[#A7303E] font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] mb-6 block italic">First in Class Antibody</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-extrabold text-[#031835] mb-10 leading-none italic tracking-tighter">Glycan <br/><span className="text-[#A7303E]">Differentiation</span></h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light italic">
                             The <strong>CD24</strong> glyco-epitope unique to solid tumors represents one of the most promising targets in modern immunotherapy. Our molecule, <strong>GT-008</strong>, distinguishes between cancer and normal cells with high sensitivity through its advanced glycan-specific binding affinity.
                          </p>
                          <div className="p-10 bg-[#A7303E]/5 border border-[#A7303E]/20 rounded-[3rem] shadow-inner relative overflow-hidden group hover:bg-[#A7303E]/10 transition-colors">
                             <div className="absolute -right-10 -bottom-10 opacity-[0.05] group-hover:scale-150 transition-transform duration-700"><Layers className="w-64 h-64 text-[#A7303E]" /></div>
                             <div className="relative z-10">
                                <h4 className="font-heading font-extrabold text-[#A7303E] uppercase tracking-widest text-xl mb-4 italic">Mechanism of Action: ADCC</h4>
                                <p className="text-[#031835] text-base leading-relaxed font-light italic">GT-008 activates the innate immune system, recruiting macrophages and NK cells to phagocytose tumor cells. Preclinical data indicates extraordinary tumor regression in breast cancer PDX models.</p>
                             </div>
                          </div>
                       </div>
                       <div className="bg-[#031835] rounded-[4rem] p-16 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] shadow-2xl group hover:-translate-y-4 transition-all duration-700">
                          <img src="/patient_centered_healthcare_biotech_1774918263283.png" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" alt="Immunotherapy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#031835]/90 via-[#031835]/40 to-transparent z-10" />
                          <div className="relative z-20 text-center border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm bg-white/5">
                             <span className="inline-block px-6 py-3 bg-[#A7303E] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 italic shadow-[0_0_20px_rgba(167,48,62,0.4)]">Immunotherapy Bridge</span>
                             <p className="font-heading font-extrabold text-5xl leading-tight tracking-tighter italic">Solid Tumor <br/> Precision</p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}
               
               {activeTab === "theranostics" && (
                 <motion.div key="theranostics" initial={{opacity:0, filter:"blur(10px)", x:40}} animate={{opacity:1, filter:"blur(0px)", x:0}} exit={{opacity:0, scale:0.95, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="text-center max-w-5xl mx-auto mb-20">
                       <h2 className="text-5xl lg:text-7xl font-heading font-extrabold text-[#031835] mb-10 leading-none italic tracking-tighter">Dual-Action <span className="text-teal underline decoration-cyan/20 decoration-8 underline-offset-8">Scout & Sniper</span></h2>
                       <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-light italic">"Seeing what we treat" in oncology means rapidly eliminating therapy for clinical non-responders and exclusively concentrating radiopharmaceutical impact on the intended visual site.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                       {[
                         { step:"01", title:"Discovery", val:"PentixaFor PET/CT maps the specific tumor load, ensuring every lesion is visually identified.", icon:Activity, color:"bg-cyan/10 text-cyan border-cyan/20" },
                         { step:"02", title:"Verification", val:"SUV values from imaging predict precisely how much Lutetium/Yttrium will bind to individual cells.", icon:Focus, color:"bg-teal/10 text-teal border-teal/20" },
                         { step:"03", title:"Eradication", val:"PentixaTher sniper therapy is administered, reaching the exact same sites mapped by the diagnostic scout.", icon:Zap, color:"bg-[#031835]/10 text-[#031835] border-[#031835]/20" }
                       ].map((s,i) => (
                         <div key={i} className="bg-[#F8FAFD] p-14 rounded-[4rem] border border-slate-100 flex flex-col h-full group hover:bg-[#031835] hover:border-transparent hover:shadow-[0_40px_80px_-20px_rgba(3,24,53,0.3)] transition-all duration-500">
                            <span className="text-5xl font-heading font-extrabold text-slate-200 group-hover:text-white/10 italic mb-6 block transition-colors">{s.step}</span>
                            <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan group-hover:text-[#031835] ${s.color}`}><s.icon className="w-8 h-8"/></div>
                            <h4 className="font-heading font-extrabold text-[#031835] group-hover:text-white text-3xl mb-4 italic tracking-tight transition-colors">{s.title}</h4>
                            <p className="text-slate-500 group-hover:text-slate-300 text-base leading-relaxed font-light italic transition-colors">{s.val}</p>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               )}

               {activeTab === "cmc" && (
                 <motion.div key="cmc" initial={{opacity:0, filter:"blur(10px)", x:40}} animate={{opacity:1, filter:"blur(0px)", x:0}} exit={{opacity:0, scale:0.95, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-cyan font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] mb-6 block italic">Supply & Logistics Integrity</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-extrabold text-[#031835] mb-10 leading-none italic tracking-tighter">Global <span className="text-teal">CMC+</span> Supply</h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light italic">
                             The time-critical nature of radioisotopes requires an integrated just-in-time logistics infrastructure. We have established strategic CMO and Hub agreements across key territories ensuring clinical delivery under 24 hours.
                          </p>
                          <div className="flex flex-col gap-6">
                             <div className="flex items-center gap-6 p-8 bg-[#F8FAFD] border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-[#031835] group-hover:text-cyan transition-colors shadow-inner"><Container className="w-6 h-6"/></div>
                                <div>
                                   <p className="font-heading font-extrabold text-[#031835] text-xl italic uppercase tracking-wider">EU & US Dual Hubs</p>
                                   <p className="text-slate-500 text-sm font-light italic">Localized radio-labeling capacity for global trials.</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-6 p-8 bg-[#F8FAFD] border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-[#031835] group-hover:text-cyan transition-colors shadow-inner"><Layers className="w-6 h-6"/></div>
                                <div>
                                   <p className="font-heading font-extrabold text-[#031835] text-xl italic uppercase tracking-wider">24H Delivery Chain</p>
                                   <p className="text-slate-500 text-sm font-light italic">Seamless cold and hot chain logistics management.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="bg-[#031835] rounded-[5rem] p-2 shadow-2xl overflow-hidden relative group border border-[#031835]/10">
                          <div className="absolute inset-0 bg-[#00A3E0]/20 mix-blend-overlay z-10" />
                          <div className="grid grid-cols-2 gap-1 relative z-0 opacity-80 group-hover:opacity-100 transition-opacity">
                             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2600" className="h-[350px] object-cover group-hover:scale-105 transition-transform duration-1000" alt="Laboratory" />
                             <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2600" className="h-[350px] object-cover group-hover:scale-105 transition-transform duration-1000" alt="Tech" />
                          </div>
                          <div className="absolute inset-0 border-[10px] border-white/5 rounded-[5rem] pointer-events-none z-20" />
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeTab === "discovery" && (
                 <motion.div key="discovery" initial={{opacity:0, filter:"blur(10px)", x:40}} animate={{opacity:1, filter:"blur(0px)", x:0}} exit={{opacity:0, scale:0.95, x:-40}} className="relative z-10 w-full" transition={{duration:0.6}}>
                    <div className="flex flex-col md:flex-row gap-24 items-center">
                       <div className="md:w-[45%]">
                          <span className="text-[#22c55e] font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] mb-6 block italic">R&D Future State</span>
                          <h2 className="text-5xl lg:text-7xl font-heading font-extrabold text-[#031835] mb-10 leading-none italic tracking-tighter">Molecular <span className="text-[#22c55e]">Discovery</span></h2>
                          <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light italic">
                             Our medicinal chemistry and pharmacology units focus on optimizing ligand affinity and metabolic stability. Using AI-driven screening and in-silico modeling, we identify next-generation isotopes and antibodies for expansion beyond our core CXCR4/CD24 platforms.
                          </p>
                          <button className="flex items-center gap-6 px-10 py-5 bg-[#031835] text-white font-heading font-extrabold rounded-full text-xs hover:bg-[#22c55e] hover:text-[#031835] transition-all shadow-[0_20px_40px_-10px_rgba(3,24,53,0.4)] uppercase tracking-[0.3em] italic group border border-white/10">
                             Scientific Publications <Database className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                          </button>
                       </div>
                       <div className="md:w-[55%] grid sm:grid-cols-2 gap-8">
                           {[
                             { lab:"Target Search", icon:Search, val:"AI-driven docking & screening of molecular variants for novel receptors." },
                             { lab:"Chem-Opt", icon:Atom, val:"Maximizing target retention while systematically minimizing renal clearance." },
                             { lab:"Isotope Match", icon:Activity, val:"Pairing optimal radioactive payload half-lives to tumor binding timelines." },
                             { lab:"Safety Profile", icon:ShieldAlert, val:"Pre-clinical dosimetry estimations to ensure organ safety criteria." }
                           ].map((b,i) => (
                             <div key={i} className="bg-[#F8FAFD] border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl group hover:border-[#22c55e]/30 transition-all hover:-translate-y-2 cursor-default">
                                <div className="w-14 h-14 bg-[#22c55e]/10 text-[#22c55e] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 transition-transform"><b.icon className="w-6 h-6" /></div>
                                <h4 className="font-heading font-extrabold text-[#031835] mb-3 text-xl italic uppercase tracking-wider">{b.lab}</h4>
                                <p className="text-sm text-slate-500 italic font-light leading-relaxed">{b.val}</p>
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
      <section className="py-32 text-center container mx-auto px-6 max-w-6xl">
         <div className="bg-[#031835] rounded-[5rem] p-24 text-white relative overflow-hidden shadow-2xl border border-cyan/20">
            <div className="absolute inset-0 bg-[#00A3E0]/10" />
            <AnimatedBg />
            <div className="relative z-10 max-w-3xl mx-auto">
               <span className="text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] mb-8 block italic">Research Partnerships</span>
               <h3 className="text-5xl md:text-6xl font-heading font-extrabold mb-8 italic tracking-tighter">Interested in the <span className="text-cyan">Science?</span></h3>
               <p className="text-slate-300 mb-14 font-light text-2xl italic">We collaborate with global academic centers and strategic pharmaceutical partners for exclusive data-sharing and co-development support.</p>
               <Link href={`/${locale}/contact`} className="inline-flex items-center gap-6 px-14 py-6 bg-cyan text-[#031835] font-heading font-extrabold uppercase text-xs tracking-[0.4em] rounded-full hover:bg-white hover:scale-110 transition-all shadow-[0_0_60px_rgba(0,177,171,0.5)] italic group">
                 Contact Our Science Team <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
