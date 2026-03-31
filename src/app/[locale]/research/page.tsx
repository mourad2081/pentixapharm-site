"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Search, ExternalLink, Filter, Microscope, Database, FileText, Globe2, ArrowUpRight, ArrowRight, Zap, Atom, GraduationCap } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const PUBLICATIONS = [
  { id: 1, title: "CXCR4-targeted Theranostics in Oncology: From Bench to Bedside", journal: "Journal of Nuclear Medicine", date: "2024", cat: "Theranostics", link: "#", impact: "High" },
  { id: 2, title: "[68Ga]Ga-PentixaFor PET/CT for Diagnostic Lateralization in Primary Aldosteronism", journal: "The Lancet Endocrinology", date: "2025", cat: "Clinical Trials", link: "#", impact: "Pivotal" },
  { id: 3, title: "Targeting CD24 in Solid Tumors: Emerging Antibody-Drug Conjugates", journal: "Nature Reviews Drug Discovery", date: "2025", cat: "CD24 Platform", link: "#", impact: "High" },
  { id: 4, title: "Molecular Imaging of CXCR4 Expression in Hematological Malignancies", journal: "Blood", date: "2023", cat: "CXCR4", link: "#", impact: "Clinical" },
  { id: 5, title: "PentixaTher: A Novel CXCR4-directed Radiotherapeutic in relapsed AML", journal: "Clinical Cancer Research", date: "2024", cat: "Clinical Trials", link: "#", impact: "Translational" },
  { id: 6, title: "Preclinical characterization of GT-008: A glycan-specific anti-CD24 mAb", journal: "Cancer Research", date: "2025", cat: "CD24 Platform", link: "#", impact: "Preclinical" },
];

const CATS = ["All", "CXCR4", "CD24 Platform", "Theranostics", "Clinical Trials"];

export default function ResearchPage() {
  const locale = useLocale();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PUBLICATIONS.filter(p => 
    (filter === "All" || p.cat === filter) &&
    (search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.journal.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-[0.02]">
           <div className="absolute inset-0 bg-[#002A54] -translate-y-1/2 rounded-[50%]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-emerald text-xs font-heading font-extrabold uppercase tracking-[0.3em] bg-emerald/10 px-6 py-2.5 rounded-full mb-10 border border-emerald/20 shadow-sm italic">
              Scientific Center & Publications
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-[#002A54] mb-8 leading-tight italic">Evidence-Based <span className="text-emerald">Precision</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto font-light italic">
              Our clinical and preclinical data repository for medical professionals, researchers, and strategic partners interested in our CXCR4 and CD24 evidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SEARCH & FILTER ────────────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] z-30 shadow-sm backdrop-blur-xl bg-white/80">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-6 items-center justify-between">
           <div className="flex flex-wrap justify-center gap-2">
              {CATS.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={"text-[11px] font-heading font-extrabold px-6 py-3 rounded-full border transition-all uppercase tracking-wider " +
                    (filter===c ? "bg-[#002A54] text-white border-[#002A54] shadow-lg shadow-navy/20" : "text-slate-400 bg-white border-slate-100 hover:border-emerald/40 hover:text-[#002A54]")}>
                  {c}
                </button>
              ))}
           </div>
           <div className="flex items-center gap-3 bg-[#F8FAFD] border border-slate-200 rounded-full px-6 py-3 w-full lg:w-80 group focus-within:border-emerald/50 transition-all">
              <Search className="w-4 h-4 text-slate-400 shrink-0 group-focus-within:text-emerald" />
              <input value={search} onChange={e=>setSearch(e.target.value)}
                placeholder="Search publications..." className="bg-transparent text-sm text-[#002A54] placeholder-slate-400 outline-none w-full font-medium" />
           </div>
        </div>
      </section>

      {/* ── PUBLICATIONS GRID ──────────────────────────────────────────────── */}
      <section className="py-24">
         <div className="container mx-auto px-6 max-w-6xl">
            <motion.div initial="hidden" animate="show" variants={stagger} className="grid md:grid-cols-2 gap-8">
               {filtered.map((p) => (
                 <motion.div key={p.id} variants={fadeUp} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group flex flex-col hover:border-emerald/30 shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[10px] font-heading font-extrabold text-white bg-[#002A54] px-4 py-1.5 rounded-full tracking-widest">{p.cat}</span>
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                          <Globe2 className="w-4 h-4 text-emerald"/> {p.date}
                       </div>
                    </div>
                    <h3 className="text-2xl font-heading font-extrabold text-[#002A54] mb-6 leading-tight group-hover:text-emerald transition-colors italic">{p.title}</h3>
                    <p className="text-slate-500 mb-8 font-light italic flex items-center gap-3"><FileText className="w-4 h-4 shrink-0"/> {p.journal}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impact</span>
                          <span className="text-xs font-bold bg-emerald/10 text-emerald px-3 py-1 rounded-full">{p.impact}</span>
                       </div>
                       <Link href={p.link} className="flex items-center gap-2 text-xs font-bold text-navy hover:text-emerald transition-all uppercase tracking-widest italic border-b border-navy/20 pb-0.5">
                          View on PubMed <ArrowUpRight className="w-3.5 h-3.5" />
                       </Link>
                    </div>
                 </motion.div>
               ))}
               
               {filtered.length === 0 && (
                 <div className="col-span-full text-center py-32 bg-slate-50 rounded-[3.5rem] border border-dashed border-slate-200">
                    <Database className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-400 font-heading font-bold italic">No research assets found matching your query.</p>
                 </div>
               )}
            </motion.div>
         </div>
      </section>

      {/* ── SCIENTIFIC BENCHMARKS ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-slate-100 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20 text-center">
               <h2 className="text-4xl font-heading font-extrabold text-[#002A54] italic mb-6">Discovery Benchmarks</h2>
               <p className="text-slate-500 max-w-2xl mx-auto font-light">Key milestones in the development of our targeting platforms.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Target Selection", icon: Microscope, val: "Over 30 distinct tumor types validated for CXCR4 overexpression in preclinical models.", color: "text-emerald" },
                 { title: "Data Integrity", icon: Database, val: "GCP/GLP compliant data management for all active clinical and preclinical programs.", color: "text-cyan" },
                 { title: "Scientific Reach", icon: GraduationCap, val: "Active collaborations with leading nuclear medicine institutes across 12 countries.", color: "text-navy" }
               ].map((b,i) => (
                 <motion.div key={i} initial={{opacity:0, scale:0.98, y:20}} whileInView={{opacity:1, scale:1, y:0}} transition={{delay: i*0.1}} viewport={{once:true}} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col h-full group hover:bg-navy hover:text-white transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 shadow-inner group-hover:bg-white/10 group-hover:text-white transition-all">
                       <b.icon className={"w-7 h-7 " + b.color}/>
                    </div>
                    <h4 className="text-xl font-heading font-extrabold mb-4 italic transition-colors">{b.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-slate-400 transition-colors">{b.val}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-16 shadow-2xl relative overflow-hidden group border border-slate-100">
               <div className="absolute inset-0 bg-gradient-radial from-emerald/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <Atom className="w-16 h-16 text-emerald mx-auto mb-8 animate-pulse" />
               <h3 className="text-4xl font-heading font-extrabold text-[#002A54] mb-6 italic leading-tight">Request Scientific Data Collection</h3>
               <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light italic px-10">We provide detailed Investigator Brochures (IB) and preclinical data summaries to qualified healthcare professionals and research partners upon request.</p>
               <button className="px-12 py-5 bg-[#002A54] text-white font-heading font-extrabold rounded-full hover:bg-emerald hover:text-navy transition-all shadow-2xl relative z-10 flex items-center gap-3 mx-auto">
                 Request Research Access <Database className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}

import Link from "next/link";
