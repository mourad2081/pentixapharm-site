"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe2, Zap, ShieldCheck, Database, LayoutGrid, CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function LicensingPortalPage() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#002A54] text-white">
        <div className="absolute inset-0 z-0 opacity-10">
           <img src="/molecular_interaction_cxcr4_1774918246066.png" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#002A54] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-white/10 px-8 py-3 rounded-full inline-block mb-10 border border-white/20 italic">Business Development & Licensing</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold mb-8 italic drop-shadow-2xl text-white">Strategic <span className="text-cyan">Licensing</span> Hub</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl leading-relaxed font-light italic max-w-3xl mx-auto mb-10">
               Exploring regional and global co-development partnerships for our proprietary CXCR4 and CD24 targeting platforms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── OPPORTUNITY BLOCKS ────────────────────────────────────────────── */}
      <section className="py-24">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Licensing Grid */}
               <div className="space-y-12">
                  <div className="mb-10">
                     <h2 className="text-4xl font-heading font-extrabold text-[#002A54] italic mb-6">Current <span className="text-teal">Opportunities</span></h2>
                     <p className="text-slate-500 font-light italic leading-loose">We offer regional rights and co-development pathways for priority clinical assets and novel research platforms.</p>
                  </div>
                  
                  <div className="space-y-8">
                     {[
                       { title: "Greater China & Emerging Asia", asset: "PentixaFor (Primary Aldosteronism)", status: "Available", desc: "Regional licensing for the registration and commercialization of the Ga-68 PET diagnostic." },
                       { title: "North American Market Rights", asset: "GT-008 Platform (Anti-CD24)", status: "Active Discussions", desc: "Co-development rights for the first-in-class mAb platform in solid tumor indications." },
                       { title: "Global Companion Diagnostics", asset: "Theranostic Platform", status: "Available", desc: "Strategic alliances for paired isotope development and centralized manufacturing support." }
                     ].map((item, i) => (
                       <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3.5rem] shadow-xl hover:border-cyan/30 transition-all group">
                          <div className="flex items-center gap-4 mb-6">
                             <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#002A54] group-hover:text-white transition-all"><Zap className="w-5 h-5 text-cyan" /></div>
                             <span className="text-[10px] font-extrabold text-teal uppercase tracking-widest italic">{item.status}</span>
                          </div>
                          <h4 className="text-2xl font-heading font-extrabold text-[#002A54] mb-3 italic">{item.title}</h4>
                          <p className="text-xs text-slate-400 font-bold mb-4 uppercase tracking-widest italic text-navy">{item.asset}</p>
                          <p className="text-slate-500 text-sm italic font-light leading-relaxed">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Submission Box */}
               <div className="lg:sticky lg:top-40 h-fit bg-[#002A54] text-white p-14 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><Globe2 className="w-96 h-96" /></div>
                  <h3 className="text-sm font-heading font-extrabold uppercase tracking-[0.4em] mb-10 italic text-cyan">Inquiry Portal</h3>
                  <p className="text-lg font-light leading-relaxed mb-12 italic text-slate-300">Submit a strategic inquiry to our Business Development team for data-room access and technical deep-dives.</p>
                  
                  <div className="space-y-6 mb-12 relative z-10">
                     <input type="text" placeholder="Partnership Type (Licensing, R&D...)" className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] text-sm text-white placeholder-slate-500 outline-none focus:border-cyan/50 transition-all font-light" />
                     <input type="text" placeholder="Organizational Background" className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem] text-sm text-white placeholder-slate-500 outline-none focus:border-cyan/50 transition-all font-light" />
                     <textarea placeholder="Briefly outline your strategic interest..." className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-[2.5rem] text-sm text-white placeholder-slate-500 outline-none focus:border-cyan/50 transition-all h-32 font-light" />
                  </div>
                  
                  <button className="w-full py-6 bg-cyan text-navy font-heading font-extrabold rounded-full flex items-center justify-center gap-4 hover:bg-white hover:text-navy transition-all shadow-2xl uppercase tracking-widest text-xs italic">
                     SUBMIT STRATEGIC INQUIRY <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* ── TECHNICAL INTEGRITY SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h3 className="text-3xl font-heading font-extrabold text-[#002A54] italic">Why Partner with Pentixapharm?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { icon: ShieldCheck, title: "IP Protection", val: "Global intellectual property protection on ligands and isotopes for CXCR4 and CD24 platforms until the 2040s." },
                 { icon: Database, title: "Clinical Readiness", val: "Complete data packages for Ph1/2 including CMC, radiochemistry automation, and established safety profiles." },
                 { icon: LayoutGrid, title: "Vertical Integration", val: "In-house manufacturing expertise and strategic isotope supply chains secured for late-stage pivotal trials." }
               ].map((v, i) => (
                 <div key={i} className="flex gap-6 items-start p-10 bg-[#F8FAFD] border border-slate-100 rounded-[3rem] group hover:bg-[#002A54] hover:text-white transition-all shadow-xl hover:-translate-y-2">
                    <v.icon className={"w-8 h-8 text-teal mx-auto mb-6 group-hover:text-cyan transition-colors shrink-0"} />
                    <div className="flex-1">
                       <h4 className="text-xl font-heading font-extrabold text-[#002A54] mb-3 italic group-hover:text-white transition-colors">{v.title}</h4>
                       <p className="text-slate-500 text-sm font-light italic leading-loose group-hover:text-slate-300 transition-colors">{v.val}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
