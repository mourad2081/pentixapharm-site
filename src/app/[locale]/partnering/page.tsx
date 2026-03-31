"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Handshake, Target, Globe2, Briefcase, ArrowUpRight, Activity, Zap, Atom } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const PARTNER_IMAGE = "partnering_handshake_premium_png_1774941004895.png";

export default function PartneringPage() {
  const locale = useLocale();
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-32 selection:bg-[#00BDD5] selection:text-white">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
           <img src={`/${PARTNER_IMAGE}`} className="w-full h-full object-cover animate-slow-zoom" alt="Partnering" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full mb-12 border border-slate-100 shadow-xl italic">
              Strategic Asset Licensing
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold text-[#001533] mb-12 leading-[0.75] tracking-tighter italic drop-shadow-sm">Global <br/><span className="text-[#00BDD5] underline decoration-[#00BDD5]/10 underline-offset-10 tracking-tight">Alliance</span> Matrix</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              We seek visionary collaborators to accelerate the clinical adoption of our CXCR4 and CD24 platforms across global oncology markets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERING CATEGORIES ─────────────────────────────────────────── */}
      <section className="py-40">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16">
               <motion.div whileHover={{ y: -10 }} className="bg-white p-16 rounded-[4rem] shadow-3xl border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:rotate-12 transition-all"><Briefcase className="w-48 h-48" /></div>
                  <h3 className="text-4xl font-heading font-extrabold text-[#001533] mb-10 flex items-center gap-6 italic tracking-tight uppercase leading-none">
                     <Handshake className="text-[#00BDD5] w-12 h-12"/> Asset <br/><span className="text-[#00BDD5]">Licensing</span>
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-12 font-light text-xl italic">Regional or global licensing for the <strong>PentixaFor</strong> and <strong>PentixaTher</strong> clinical candidates in high-growth oncology territories.</p>
                  <ul className="space-y-6 mb-12">
                     {[
                        "Selective co-development in US/Asia markets",
                        "Secondary diagnostic indications (Endocrinology)",
                        "High-impact combination radiotherapy studies"
                     ].map((item,i) => (
                        <li key={i} className="flex gap-4 text-sm font-bold text-[#001533] items-center bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                           <div className="w-2 h-2 bg-[#00BDD5] rounded-full shrink-0"/> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="flex items-center gap-4 font-heading font-extrabold text-[11px] text-[#00BDD5] group-hover:gap-8 transition-all uppercase tracking-[0.4em] italic">Connect with Licensing Team <ArrowUpRight className="w-5 h-5"/></button>
               </motion.div>

               <motion.div whileHover={{ y: -10 }} className="bg-[#001533] p-16 rounded-[4rem] text-white shadow-3xl relative group overflow-hidden">
                  <div className="absolute top-10 right-10 p-16 opacity-10 group-hover:scale-110 transition-transform"><Target className="w-48 h-48" /></div>
                  <h3 className="text-4xl font-heading font-extrabold mb-10 flex items-center gap-6 italic tracking-tight uppercase leading-none">
                     <Atom className="text-[#00BDD5] w-12 h-12"/> R&D <br/><span className="text-[#00BDD5]">Platform</span> Access
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-12 font-light text-xl italic">Utilize our CXCR4 targeting expertise and radiolabeling CMC infrastructure to power your own early-stage pipelines.</p>
                  <ul className="space-y-6 mb-12">
                     {[
                        "Custom tracer R&D for novel targets",
                        "Just-in-time Isotope supply chain access",
                        "Precision preclinical radiopharmacology"
                     ].map((item,i) => (
                        <li key={i} className="flex gap-4 text-sm font-bold items-center bg-white/5 p-6 rounded-3xl border border-white/5">
                           <div className="w-2 h-2 bg-[#00BDD5] rounded-full shrink-0"/> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="flex items-center gap-4 font-heading font-extrabold text-[11px] text-[#00BDD5] group-hover:gap-8 transition-all uppercase tracking-[0.4em] italic">R&D Partnership Portal <ArrowUpRight className="w-5 h-5"/></button>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── VALUES SECTION ─────────────────────────────────────────────────── */}
      <section className="py-40 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6 max-w-7xl text-center">
            <span className="text-[#00BDD5] font-heading font-extrabold text-xs uppercase tracking-[0.6em] mb-10 block italic">The Pentixa Advantage</span>
            <h2 className="text-5xl md:text-8xl font-heading font-extrabold text-[#001533] mb-24 italic leading-none tracking-tighter">Why Scale with <span className="text-[#00BDD5]">Pentixapharm?</span></h2>
            <div className="grid md:grid-cols-3 gap-16">
               {[
                  { icon: Globe2, label: "Global Presence", val: "Established regulatory pathways for radiopharmaceuticals in major markets." },
                  { icon: Activity, label: "Proof-of-Concept", val: "Over 2,600 successful clinical applications of our CXCR4 lead assets." },
                  { icon: Zap, label: "Lean Logistics", val: "Integrated 24H isotope supply chain ensuring clinical trial maturity." }
               ].map((v,i) => (
                  <motion.div key={i} whileHover={{y:-12}} className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-[3.5rem] bg-[#001533] flex items-center justify-center mb-10 shadow-2xl group transition-all"><v.icon className="w-10 h-10 text-[#00BDD5]"/></div>
                     <h4 className="text-2xl font-heading font-extrabold text-[#001533] mb-6 italic tracking-tight uppercase">{v.label}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed font-light italic px-10">{v.val}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-40 text-center">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-white rounded-[6rem] p-24 shadow-3xl border border-slate-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#00BDD5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <h3 className="text-4xl md:text-7xl font-heading font-extrabold text-[#001533] mb-10 tracking-tighter italic leading-none">Initiate a Strategic <br/> <span className="text-[#00BDD5]">Science</span> Dialogue</h3>
               <p className="text-slate-500 mb-16 text-xl md:text-2xl leading-relaxed font-light italic px-10">Contact our Corporate Development team for confidential initial inquiries or to request a data collection overview.</p>
               <a href="mailto:partnering@pentixapharm.com" className="px-16 py-8 bg-[#001533] text-white font-heading font-extrabold rounded-full hover:bg-[#00BDD5] active:scale-95 transition-all shadow-[0_20px_60px_rgba(0,21,51,0.2)] inline-flex items-center gap-6 uppercase text-[11px] tracking-[0.5em] italic">
                  Contact BD Team <Handshake className="w-6 h-6" />
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
