"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Users, BookOpen, Activity, Target, ShieldCheck, Globe2, Building2, Linkedin, ExternalLink, GraduationCap, Award, Scale, Heart, Shield, History, Milestone, Compass, ArrowRight } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const LAB_IMG = "about_lab_premium_png_1774940963712.png";

const EXEC_BOARD = [
  { name: "Dr. Dirk Pleimes", role: "Group CEO & CMO", bio: "Physician-scientist with over 20 years of expertise in oncology and clinical drug development. Previously held senior leadership roles at Novartis and Bayer. He is the architect of the PentixaFor/Ther clinical-regulatory global strategy.", init: "DP" },
  { name: "Henner Kollenberg", role: "CBO", bio: "Strategist in life science capital markets and business development. He led Pentixapharm through its acquisition of the GT-008 platform and its successful IPO on the Frankfurt Stock Exchange.", init: "HK" },
  { name: "Erik Merten", role: "CTO", bio: "Expert in radiopharmaceutical manufacturing, GMP operations, and CMC. Appointed to the Executive Board in 2026 to lead the industrialization of the CXCR4 portfolio for commercial readiness.", init: "EM" },
];

const HISTORY = [
  { year: "2019", title: "Corporate Inception", desc: "Commercializing the CXCR4-ligand portfolio pioneered by TU Munich and Erasmus MC." },
  { year: "2021", title: "Proof-of-Concept", desc: "First-in-human diagnostic and therapeutic proof-of-concept published for PentixaFor." },
  { year: "2024", title: "Frankfurt IPO", desc: "Listed on the Prime Standard of the FSE, securing growth for pivotal clinical trials." },
  { year: "2026", title: "Clinical Maturation", desc: "Initiating Phase 3 trials in primary aldosteronism." },
];

export default function AboutPage() {
  const locale = useLocale();
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-32 selection:bg-[#00BDD5] selection:text-white">
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 min-h-[70vh] flex items-center overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none">
           <img src={`/${LAB_IMG}`} className="w-full h-full object-cover animate-slow-zoom" alt="Laboratory" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent" />
           <AnimatedBg />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.6em] bg-white px-10 py-4 rounded-full inline-block mb-12 border border-slate-100 shadow-xl italic mt-10">Global Precision Oncology Leader</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[9.5rem] font-heading font-extrabold mb-12 leading-[0.75] tracking-tighter text-[#001533] italic drop-shadow-sm">
              Advancing <br/><span className="text-[#00BDD5] underline decoration-[#00BDD5]/10 underline-offset-10">Theranostics.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100">
              Transforming the future of oncology and endocrinology through extreme molecular specificity and targeted radiopharmaceutical treatment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-40 bg-white relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-16">
               {[
                 { icon: Compass, title: "Precision", desc: "Identifying the precise molecular signature of a patient's disease before starting therapy.", color: "text-[#00BDD5]" },
                 { icon: Shield, title: "Ethics", desc: "Absolute compliance with GCP/GLP and a commitment to transparent clinical reporting.", color: "text-[#001533]" },
                 { icon: Award, title: "Excellence", desc: "Turning the latest radiopharmaceutical breakthroughs into industry-leading clinical assets.", color: "#00BDD5" }
               ].map((v, i) => (
                 <motion.div key={i} whileHover={{ y: -12 }} className="p-16 rounded-[4rem] bg-slate-50/50 border border-slate-100 group transition-all text-center hover:bg-white hover:shadow-3xl">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-xl group-hover:bg-[#001533] group-hover:rotate-12 transition-all">
                       <v.icon className={"w-10 h-10 " + (typeof v.color === 'string' && v.color.startsWith('text-') ? v.color : "text-[#00BDD5]")}/>
                    </div>
                    <h3 className="text-2xl font-heading font-extrabold text-[#001533] mb-6 italic tracking-tight uppercase">Pentixa <span className="text-[#00BDD5]">{v.title}</span></h3>
                    <p className="text-slate-500 text-sm italic font-light leading-relaxed">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section className="py-40 bg-[#F8FAFC] border-y border-slate-200/50">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
               <div className="max-w-2xl">
                  <span className="text-[#00BDD5] font-heading font-extrabold text-[10px] uppercase tracking-[0.5em] mb-4 block italic">Institutional Roadmap</span>
                  <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] italic leading-tight tracking-tighter">A Legacy of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001533] to-[#00BDD5]">Scientific</span> Impact</h2>
               </div>
               <p className="text-slate-500 text-lg md:text-xl italic font-light max-w-md pb-4 border-b border-[#00BDD5]/30">Tracing our evolution from university-born molecular engineering to a publicly listed biotech powerhouse.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {HISTORY.map((h, i) => (
                 <motion.div key={i} whileHover={{y:-10}} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col group h-full">
                    <span className="text-4xl font-heading font-extrabold text-[#00BDD5] tracking-tighter group-hover:scale-110 mb-8 block transition-transform">{h.year}</span>
                    <h4 className="text-2xl font-heading font-extrabold text-[#001533] mb-4 italic tracking-tight uppercase leading-tight">{h.title}</h4>
                    <p className="text-slate-500 font-light italic leading-relaxed text-sm mt-auto">{h.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── EXECUTIVE TEAM ─────────────────────────────────────────────────────── */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32">
            <span className="text-cyan font-heading font-extrabold text-xs tracking-[0.6em] uppercase mb-6 block italic">Managing Directors</span>
            <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] italic leading-[0.8] tracking-tighter">The Executive <br/> <span className="text-[#00BDD5]">Board.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {EXEC_BOARD.map((m, i) => (
              <motion.div key={i} whileHover={{ y: -15 }} className="bg-[#F8FAFC] border border-slate-100 rounded-[4rem] p-16 hover:shadow-3xl transition-all group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-[3.5rem] bg-[#001533] flex items-center justify-center mb-12 shadow-2xl group-hover:rotate-[15deg] group-hover:bg-[#00BDD5] transition-all duration-700">
                    <span className="text-white font-heading font-extrabold text-6xl italic">{m.init}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[#001533] text-4xl italic tracking-tight mb-2">{m.name}</h3>
                  <span className="text-[10px] text-white font-extrabold uppercase tracking-[0.3em] bg-[#00BDD5] px-8 py-3 rounded-full mb-10 shadow-lg">{m.role}</span>
                  <p className="text-slate-500 text-[15px] leading-relaxed italic font-light mb-12">{m.bio}</p>
                  
                  <div className="flex gap-4 pt-10 border-t border-slate-200/50 w-full justify-center">
                    <button className="p-4 bg-white rounded-full text-slate-300 hover:text-[#001533] shadow-sm transition-all"><Linkedin className="w-6 h-6"/></button>
                    <button className="flex items-center gap-3 px-8 bg-[#001533] text-white rounded-full text-[10px] font-bold uppercase tracking-widest italic hover:bg-[#00BDD5] transition-all">Profile <ArrowRight className="w-4 h-4"/></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ──────────────────────────────────────────────────── */}
      <section className="py-40 bg-[#001533] relative overflow-hidden rounded-[8rem] mx-6 shadow-3xl">
        <div className="absolute inset-0 z-0 opacity-10">
           <img src="/patient_centered_healthcare_biotech_1774918263283.png" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-12 relative z-10 max-w-7xl flex flex-col items-center text-center">
           <span className="text-[#00BDD5] font-heading font-extrabold text-xs uppercase tracking-[0.6em] mb-10 block italic">Pentixa ESG Protocol</span>
           <h2 className="text-5xl md:text-8xl font-heading font-extrabold text-white leading-none mb-12 italic tracking-tighter">Pioneering <span className="text-[#00BDD5]">Sustainable</span> Care</h2>
           <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-light italic mb-20 max-w-3xl">We integrate corporate responsibility into every radiolabeling cycle, ensuring our medical impact is ethical, global, and highly lean.</p>
           
           <div className="grid md:grid-cols-3 gap-12 w-full">
              {[
                { title: "Environmental", icon: Globe2, desc: "Reducing radiopharmaceutical waste across the logistics cold chain." },
                { title: "Social Impact", icon: Heart, desc: "Scaling IIS programs to reach underserved oncology clinical sites." },
                { title: "Governance", icon: Scale, desc: "Maintaining Prime Standard transparency for FSE-listed maturity." }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/10 group hover:bg-white hover:scale-105 transition-all">
                   <div className="w-20 h-20 rounded-3xl bg-[#00BDD5] flex items-center justify-center mb-10 mx-auto shadow-2xl group-hover:rotate-12 transition-all">
                      <item.icon className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-2xl font-heading font-extrabold text-white group-hover:text-[#001533] mb-6 italic transition-colors tracking-tight uppercase">{item.title}</h3>
                   <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed font-light italic transition-colors">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
