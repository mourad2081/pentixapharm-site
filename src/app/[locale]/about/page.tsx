"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { 
  Users, BookOpen, Activity, Target, ShieldCheck, Globe2, Building2, 
  Linkedin, ExternalLink, GraduationCap, Award, Scale, Heart, Shield, 
  History, Milestone, Compass, ArrowRight, Sparkles
} from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
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
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white transition-colors duration-700 pb-32 selection:bg-[#00BDD5] selection:text-white">
      
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 min-h-[85vh] flex items-center overflow-hidden bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.25] pointer-events-none transition-opacity">
           <img src={`/${LAB_IMG}`} className="w-full h-full object-cover animate-slow-zoom blur-sm" alt="Laboratory" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-[#0a0b16] via-white/50 dark:via-[#0a0b16]/50 to-transparent transition-colors" />
           <AnimatedBg />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.7em] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 px-12 py-5 rounded-full inline-block mb-12 shadow-2xl italic mt-10 transition-colors">
              Global Precision Oncology Leader
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-7xl md:text-[11rem] font-heading font-extrabold mb-12 leading-[0.7] tracking-tighter text-[#001533] dark:text-white italic drop-shadow-sm transition-colors">
              Advancing <br/><span className="text-[#00BDD5]">Theranostics.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl md:text-4xl leading-relaxed font-light italic max-w-5xl mx-auto mb-16 px-12 border-x border-slate-100 dark:border-white/5 transition-colors">
              Transforming oncology through extreme molecular specificity and targeted radiopharmaceutical infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-48 bg-white dark:bg-[#0a0b16] relative transition-colors duration-700">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-16">
               {[
                 { icon: Compass, title: "Precision", desc: "Identifying the precise molecular signature of a patient's disease before starting therapy.", color: "text-[#00BDD5]" },
                 { icon: Shield, title: "Ethics", desc: "Absolute compliance with GCP/GLP and a commitment to transparent clinical reporting.", color: "text-[#001533] dark:text-white" },
                 { icon: Award, title: "Excellence", desc: "Turning the latest radiopharmaceutical breakthroughs into industry-leading clinical assets.", color: "text-[#00BDD5]" }
               ].map((v, i) => (
                 <motion.div key={i} whileHover={{ y: -15 }} className="p-16 rounded-[4rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group transition-all text-center hover:bg-white dark:hover:bg-white/10 hover:shadow-4xl">
                    <div className="w-24 h-24 bg-white dark:bg-[#121428] rounded-3xl flex items-center justify-center mb-12 mx-auto shadow-2xl group-hover:bg-[#001533] group-hover:rotate-12 transition-all">
                       <v.icon className={"w-12 h-12 " + v.color}/>
                    </div>
                    <h3 className="text-3xl font-heading font-extrabold text-[#001533] dark:text-white mb-8 italic tracking-tight uppercase transition-colors">Pentixa <span className="text-[#00BDD5]">{v.title}</span></h3>
                    <p className="text-slate-500 dark:text-slate-400 text-lg italic font-light leading-relaxed transition-colors">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section className="py-48 bg-[#F8FAFC] dark:bg-[#121428] border-y border-slate-200/50 dark:border-white/5 transition-colors duration-700">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-16">
               <div className="max-w-2xl">
                  <span className="text-[#00BDD5] font-heading font-extrabold text-[12px] uppercase tracking-[0.6em] mb-6 block italic">Institutional Roadmap</span>
                  <h2 className="text-6xl md:text-[8rem] font-heading font-extrabold text-[#001533] dark:text-white italic leading-[0.8] tracking-tighter transition-colors">A Legacy of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDD5] to-[#7B61FF]">Scientific</span> Impact.</h2>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-2xl italic font-light max-w-md pb-8 border-b-2 border-[#00BDD5]/30 transition-colors">Tracing our evolution from university-born engineering to a publicly listed biotech powerhouse.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
               {HISTORY.map((h, i) => (
                 <motion.div key={i} whileHover={{y:-12}} className="bg-white dark:bg-white/5 p-16 rounded-[4.5rem] shadow-2xl border border-slate-100 dark:border-white/10 flex flex-col group h-full transition-all">
                    <span className="text-5xl font-heading font-extrabold text-[#00BDD5] tracking-tighter group-hover:scale-110 mb-10 block transition-transform italic">{h.year}</span>
                    <h4 className="text-3xl font-heading font-extrabold text-[#001533] dark:text-white mb-6 italic tracking-tight uppercase leading-tight transition-colors">{h.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-light italic leading-relaxed text-base mt-auto transition-colors">{h.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── EXECUTIVE TEAM ─────────────────────────────────────────────────────── */}
      <section className="py-56 bg-white dark:bg-[#0a0b16] overflow-hidden transition-colors duration-700">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-40">
            <span className="text-[#00BDD5] font-heading font-extrabold text-xs tracking-[0.7em] uppercase mb-10 block italic">Managing Directors</span>
            <h2 className="text-7xl md:text-[10rem] font-heading font-extrabold text-[#001533] dark:text-white italic leading-[0.7] tracking-tighter transition-colors">The Executive <br/> <span className="text-[#00BDD5]">Board.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-20">
            {EXEC_BOARD.map((m, i) => (
              <motion.div key={i} whileHover={{ y: -20 }} className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[5rem] p-16 hover:shadow-4xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-125 transition-transform"><Sparkles className="w-32 h-32 text-[#00BDD5]" /></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-48 h-48 rounded-[4rem] bg-[#001533] dark:bg-white/10 flex items-center justify-center mb-16 shadow-4xl group-hover:rotate-[15deg] group-hover:bg-[#00BDD5] transition-all duration-700">
                    <span className="text-white font-heading font-extrabold text-7xl italic">{m.init}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[#001533] dark:text-white text-5xl italic tracking-tight mb-4 transition-colors">{m.name}</h3>
                  <span className="text-[11px] text-white font-extrabold uppercase tracking-[0.4em] bg-[#00BDD5] px-10 py-4 rounded-full mb-12 shadow-2xl italic">{m.role}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed italic font-light mb-16 transition-colors">{m.bio}</p>
                  
                  <div className="flex gap-6 pt-12 border-t border-slate-200/50 dark:border-white/10 w-full justify-center transition-colors">
                    <button className="p-6 bg-white dark:bg-white/10 rounded-full text-slate-300 hover:text-[#00BDD5] shadow-xl transition-all border border-slate-100 dark:border-white/10"><Linkedin className="w-8 h-8"/></button>
                    <button className="flex items-center gap-4 px-10 bg-[#001533] dark:bg-white text-white dark:text-[#001533] rounded-full text-[11px] font-extrabold uppercase tracking-widest italic hover:bg-[#00BDD5] dark:hover:bg-[#00BDD5] dark:hover:text-white transition-all shadow-xl">Profile <ArrowRight className="w-5 h-5"/></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ──────────────────────────────────────────────────── */}
      <section className="py-48 bg-[#001533] dark:bg-[#121428] relative overflow-hidden rounded-[10rem] mx-8 shadow-4xl mb-48 transition-colors duration-700">
        <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none">
           <img src="/patient_centered_healthcare_biotech_1774918263283.png" className="w-full h-full object-cover blur-[2px]" />
        </div>
        <div className="container mx-auto px-16 relative z-10 max-w-7xl flex flex-col items-center text-center">
           <span className="text-[#00BDD5] font-heading font-extrabold text-sm uppercase tracking-[1em] mb-12 block italic">Pentixa ESG Protocol</span>
           <h2 className="text-6xl md:text-[9.5rem] font-heading font-extrabold text-white leading-[0.75] mb-16 italic tracking-tighter">Pioneering <span className="text-[#00BDD5]">Lean</span> Care.</h2>
           <p className="text-slate-300 text-2xl md:text-3xl leading-relaxed font-light italic mb-24 max-w-4xl border-x border-white/10 px-12">We integrate corporate responsibility into every radiolabeling lifecycle, ensuring our medical impact is highly efficient and globally sustainable.</p>
           
           <div className="grid md:grid-cols-3 gap-16 w-full">
              {[
                { title: "Environmental", icon: Globe2, desc: "Reducing radiopharmaceutical waste across the logistics cold chain via optimized delivery vectors." },
                { title: "Social Impact", icon: Heart, desc: "Scaling IIS programs to reach underserved oncology clinical sites globally." },
                { title: "Governance", icon: Scale, desc: "Maintaining Prime Standard transparency and world-class GCP/GLP regulatory alignment." }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-3xl p-16 rounded-[5rem] border border-white/10 group hover:bg-white hover:scale-105 transition-all duration-700">
                   <div className="w-24 h-24 rounded-3xl bg-[#00BDD5] flex items-center justify-center mb-12 mx-auto shadow-4xl group-hover:rotate-[20deg] transition-all">
                      <item.icon className="w-10 h-10 text-white" />
                   </div>
                   <h3 className="text-3xl font-heading font-extrabold text-white group-hover:text-[#001533] mb-8 italic transition-colors tracking-tight uppercase">{item.title}</h3>
                   <p className="text-slate-400 group-hover:text-slate-600 text-lg leading-relaxed font-light italic transition-colors p-2">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
