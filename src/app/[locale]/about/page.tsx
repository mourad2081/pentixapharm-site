"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Users, BookOpen, Activity, Target, ShieldCheck, Globe2, Building2, Linkedin, ExternalLink, GraduationCap, Award, Scale, Heart, Shield, History, Milestone, Compass, Microscope, MicroscopeIcon, Dna } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const LAB_IMG = "biotech_lab_researcher_1774915416227.png";

const EXEC_BOARD = [
  { name: "Dr. Dirk Pleimes", role: "Group CEO & CMO", bio: "Physician-scientist with 20+ years of oncology drug development. Leading clinical-regulatory strategy for the PentixaFor/Ther theranostic pair. Senior expertise from Novartis and Bayer.", init: "DP" },
  { name: "Henner Kollenberg", role: "CBO", bio: "Strategic lead for life science capital markets and M&A. Orchestrated the Pentixapharm IPO and acquisition of the CD24 platform.", init: "HK" },
  { name: "Erik Merten", role: "CTO", bio: "Expert in radiopharmaceutical CMC, manufacturing scaling, and global isotope supply chain for medical diagnostics and therapeutics.", init: "EM" },
];

const SCIENTIFIC_ADVISORY_BOARD = [
  { name: "Prof. Dr. Ken Herrmann", role: "SAB Chair", bio: "Director of Nuclear Medicine at University Hospital Essen. Leading global expert in theranostics and CXCR4 molecular imaging.", init: "KH" },
  { name: "Prof. Dr. Johannes Czernin", role: "Board Member", bio: "Professor and Chief of Nuclear Medicine at UCLA. Editor-in-Chief of the Journal of Nuclear Medicine.", init: "JC" },
  { name: "Prof. Dr. Richard P. Baum", role: "Board Member", bio: "Pioneer in PRRT and theranostics, President of ICPO Academy, with decades of experience in peptide receptor therapy.", init: "RB" },
  { name: "Prof. Dr. Marcus Quinkler", role: "Endocrinology Advisor", bio: "Key clinical advisor for primary aldosteronism and endocrine-driven hypertension indications.", init: "MQ" },
  { name: "Dr. Jürgen Allerkamp", role: "Board Member", bio: "Expert in corporate governance and investment banking in the pharmaceutical sector.", init: "JA" },
];

const SUPERVISORY_BOARD = [
  { name: "Dr. Andreas Eckert", role: "Chairman", bio: "Founder of Eckert & Ziegler and leading entrepreneur in the European biotech and radiotherapy sector.", init: "AE" },
  { name: "Dr. Harald Hasselmann", role: "Deputy Chairman", bio: "Previously CEO of Eckert & Ziegler AG, bringing decades of operational leadership in medical radiation.", init: "HH" },
  { name: "Jens Giltsch", role: "Board Member", bio: "Specialist in finance and corporate development strategy for the DACH biotech ecosystem.", init: "JG" },
];

const HISTORY = [
  { year: "2019", title: "Corporate Inception", desc: "Pentixapharm is founded to commercialize the CXCR4-ligand portfolio pioneered by the Munich clinical community." },
  { year: "2021", title: "Proof-of-Concept", desc: "Award-winning proof-of-concept for the theranostic 'See & Treat' approach published in leading journals." },
  { year: "2023", title: "Strategic Diversification", desc: "Acquisition of the GT-008 anti-CD24 platform from Glycotope, expanding target potential into solid tumors." },
  { year: "2024", title: "Frankfurt Prime IPO", desc: "Listing on the Frankfurt Stock Exchange Prime Standard, securing funding for pivotal Phase 3 PANDA trial." },
  { year: "2026", title: "Global Scaling", desc: "Initiation of Phase 3 clinical sites in the U.S. and Europe, with expansion of manufacturing infrastructure." },
];

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFD] to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-cyan/10 px-8 py-3 rounded-full inline-block mb-10 border border-cyan/20 italic">Precision Identity</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold text-[#002A54] mt-3 mb-10 drop-shadow-sm leading-tight italic tracking-tighter">Advancing the Future of <span className="text-cyan">Theranostics</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic max-w-4xl mx-auto mb-12 text-center">
              Pentixapharm is a clinical-stage radiopharmaceutical company. We develop ligands that "see" and "treat" disease simultaneously through our industry-leading CXCR4 and CD24 platforms.
            </motion.p>
            <div className="flex justify-center gap-12">
               <div className="flex flex-col gap-2 items-center group">
                  <span className="text-5xl font-heading font-extrabold text-teal group-hover:scale-110 transition-transform">2,600+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Patient Uses Witnessed</span>
               </div>
               <div className="w-[1px] h-16 bg-slate-200 mt-2" />
               <div className="flex flex-col gap-2 items-center group">
                  <span className="text-5xl font-heading font-extrabold text-cyan group-hover:scale-110 transition-transform">PH3</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Regulatory Stage Readiness</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-b border-slate-100 overflow-hidden relative">
         <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none rotate-45 transform bg-cyan/10 rounded-full w-[500px] h-[500px] blur-3xl translate-x-[-50%] translate-y-[-50%]" />
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-24 max-w-3xl mx-auto font-heading">
               <span className="text-navy text-xs font-heading font-extrabold uppercase tracking-[0.5em] mb-6 block italic">Our Genetic Code</span>
               <h2 className="text-4xl md:text-6xl font-extrabold text-[#002A54] italic mb-8">Pillars of <span className="text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal">Integrity</span></h2>
               <p className="text-slate-500 font-light italic leading-loose text-lg">We anchor our clinical strategy in three defining values that govern the development of every proprietary molecule.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10 font-heading">
               {[
                 { icon: Compass, title: "Precision First", desc: "We only treat what we can see. Diagnostic certainty is the prerequisite for all our therapeutic interventions.", color: "text-[#00B1AB]" },
                 { icon: Shield, title: "Unwavering Ethics", desc: "Commitment to patient safety and strictly governed clinical trials in compliance with the world's most rigorous regulatory frameworks.", color: "text-[#002A54]" },
                 { icon: Dna, title: "Science-Led Growth", desc: "Vertical integration from ligand discovery and manufacturing to global regulatory strategy.", color: "text-[#00A3E0]" }
               ].map((v, i) => (
                 <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#F8FAFD] p-16 rounded-[4rem] border border-slate-50 shadow-2xl group transition-all">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-inner flex items-center justify-center mb-10 group-hover:bg-[#002A54] group-hover:text-white transition-all transform group-hover:rotate-12">
                       <v.icon className={"w-8 h-8 " + (v.color)}/>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#002A54] mb-5 italic tracking-tight">{v.title}</h3>
                    <p className="text-slate-500 text-sm italic font-light leading-relaxed">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD] relative">
         <div className="absolute top-0 right-0 p-40 opacity-[0.02] pointer-events-none -rotate-12"><History className="w-96 h-96" /></div>
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
               <div className="max-w-2xl">
                  <span className="text-[#00B1AB] font-heading font-extrabold text-[11px] uppercase tracking-[0.4em] mb-4 block italic">Our Evolution</span>
                  <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#002A54] leading-tight italic tracking-tighter">A Legacy of <span className="text-teal">Disruption</span></h2>
               </div>
               <Milestone className="w-20 h-20 text-slate-200 hidden lg:block animate-pulse" />
            </div>
            
            <div className="relative pl-12 border-l-4 border-slate-200 py-10 space-y-24">
               {HISTORY.map((h, i) => (
                 <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="relative">
                    <div className="absolute -left-[62px] top-4 w-6 h-6 rounded-full bg-white border-[6px] border-[#002A54] shadow-[0_0_20px_rgba(0,42,84,0.5)] z-20" />
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-start hover:border-cyan/30 transition-all group overflow-hidden relative">
                       <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="shrink-0 flex items-center justify-center w-28 h-28 rounded-[2rem] bg-[#F8FAFD] border border-slate-100 group-hover:bg-[#002A54] group-hover:text-white transition-all shadow-inner relative z-10">
                          <span className="text-4xl font-heading font-extrabold tracking-tighter italic">{h.year}</span>
                       </div>
                       <div className="relative z-10">
                          <h4 className="text-2xl font-heading font-extrabold text-[#002A54] mb-4 italic tracking-tight">{h.title}</h4>
                          <p className="text-slate-500 font-light italic leading-loose text-lg">{h.desc}</p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── SCIENTIFIC ADVISORY BOARD (NEW SECTION) ───────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 p-40 opacity-[0.03] pointer-events-none rotate-45"><Microscope className="w-96 h-96 text-cyan" /></div>
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="text-teal font-heading font-extrabold text-xs tracking-[0.5em] uppercase mb-4 block italic">Research Guidance</span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-8 italic tracking-tighter">Scientific <span className="text-teal">Advisory</span> Board</h2>
              <p className="text-slate-500 italic font-light text-lg">A world-class council of Nuclear Medicine pioneers ensuring our clinical strategy remains at the absolute frontier of science.</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {SCIENTIFIC_ADVISORY_BOARD.map((m, i) => (
                <motion.div key={i} whileHover={{ y: -8 }} className="bg-[#F8FAFD] p-10 rounded-[3rem] border border-slate-50 shadow-xl group transition-all">
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-20 h-20 rounded-2xl bg-[#002A54] flex items-center justify-center font-heading font-extrabold text-white text-2xl italic group-hover:bg-teal transition-all shrink-0">
                          {m.init}
                       </div>
                       <div>
                          <h4 className="font-heading font-extrabold text-[#002A54] text-xl italic leading-tight">{m.name}</h4>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-teal mt-1">{m.role}</p>
                       </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-light italic">{m.bio}</p>
                    <div className="mt-8 pt-8 border-t border-slate-200/50 flex justify-end">
                       <button className="text-[10px] font-bold text-navy hover:text-teal transition-colors flex items-center gap-2 uppercase tracking-widest italic">Research Profile <ExternalLink className="w-3 h-3"/></button>
                    </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ── EXECUTIVE BOARD ───────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD] border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-28 max-w-3xl mx-auto">
              <span className="text-helixRed font-heading font-extrabold text-xs tracking-[0.5em] uppercase mb-4 block italic">Management</span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-8 italic tracking-tighter">The <span className="text-cyan">Executive</span> Core</h2>
              <p className="text-slate-500 italic font-light text-lg">Leading the next generation of precision oncology with decades of industry experience and commercial vision.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {EXEC_BOARD.map((m, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="bg-white border-2 border-slate-50 rounded-[3.5rem] p-12 hover:shadow-2xl hover:border-cyan/20 transition-all group overflow-hidden relative shadow-lg">
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan/5 rounded-full blur-3xl group-hover:bg-cyan/10 transition-colors" />
                  <div className="flex flex-col items-center text-center mb-10 relative z-10">
                    <div className="w-32 h-32 rounded-[2.8rem] bg-[#002A54] flex items-center justify-center mb-10 shadow-2xl relative overflow-hidden group-hover:rotate-6 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan/40 to-transparent opacity-50" />
                      <span className="text-white font-heading font-extrabold text-5xl relative z-10 italic">{m.init}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-[#002A54] text-3xl group-hover:text-cyan transition-colors italic tracking-tight">{m.name}</h3>
                    <p className="text-[10px] text-helixRed font-extrabold uppercase tracking-[0.3em] mt-4 bg-red-50 px-6 py-2 rounded-full border border-red-100">{m.role}</p>
                  </div>
                  <p className="text-slate-500 text-sm leading-loose text-center italic font-light px-2 mb-12 relative z-10">{m.bio}</p>
                  <div className="flex justify-center items-center gap-6 border-t border-slate-100 pt-12 relative z-10">
                    <button className="w-14 h-14 rounded-full bg-[#F8FAFD] border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#002A54] hover:border-[#002A54] hover:shadow-xl transition-all"><Linkedin className="w-5 h-5" /></button>
                    <button className="px-10 py-4 rounded-full bg-[#002A54] text-white text-[10px] font-heading font-extrabold uppercase tracking-[0.2em] italic hover:bg-cyan hover:text-navy transition-all flex items-center gap-2 shadow-xl">Contact <ArrowRight className="w-3.5 h-3.5" /></button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SUPERVISORY BOARD ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="text-navy font-heading font-extrabold text-xs tracking-[0.5em] uppercase mb-4 block italic">Corporate Governance</span>
              <h2 className="text-4xl font-heading font-extrabold text-[#002A54] italic">Supervisory <span className="text-teal">Board</span></h2>
              <p className="text-slate-500 italic font-light text-lg">Maintaining institutional oversight and strategic governance for our global shareholder base.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {SUPERVISORY_BOARD.map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-10 items-start p-12 bg-[#F8FAFD] border border-slate-50 rounded-[3rem] hover:border-teal/30 hover:shadow-2xl transition-all group shadow-sm">
                  <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex-shrink-0 flex items-center justify-center font-heading font-extrabold text-[#002A54] group-hover:bg-[#002A54] group-hover:text-white transition-all shadow-inner italic text-2xl">
                    {m.init}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-[#002A54] leading-tight text-2xl mb-2 italic tracking-tight">{m.name}</h4>
                    <p className="text-[10px] font-bold text-teal uppercase tracking-widest mt-2 mb-6 italic">{m.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed italic font-light">{m.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ESG CONTINUATION (EXPANDED CONTENT) ───────────────────────────────── */}
      <section id="sustainability" className="py-32 bg-[#001D3D] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-cyan/10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
                 <span className="text-cyan font-heading font-extrabold text-xs uppercase tracking-[0.5em] mb-8 block italic">Social Responsibility</span>
                 <h2 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-10 italic">Sustainability Through <span className="text-cyan animate-pulse">Impact</span></h2>
                 <p className="text-slate-300 text-xl leading-relaxed font-light italic mb-12">
                    Our commitment to ESG is embedded in our clinical development. By reducing invasive procedures through PentixaFor, we minimize patient trauma and alleviate hospital resource strain globally.
                 </p>
                 <div className="space-y-10">
                    <div className="flex gap-8 items-center bg-white/5 p-10 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all">
                       <ShieldCheck className="w-12 h-12 text-teal shrink-0" />
                       <div>
                          <h4 className="text-2xl font-heading font-extrabold mb-2 italic">Ethical Access</h4>
                          <p className="text-slate-400 text-sm italic font-light">Supporting investigator-initiated studies (IIS) in emerging markets to broaden radiopharmaceutical equity.</p>
                       </div>
                    </div>
                    <div className="flex gap-8 items-center bg-white/5 p-10 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all">
                       <Building2 className="w-12 h-12 text-cyan shrink-0" />
                       <div>
                          <h4 className="text-2xl font-heading font-extrabold mb-2 italic">Governance Trust</h4>
                          <p className="text-slate-400 text-sm italic font-light">Strict compliance with environmental safety standards for handling medical isotopes.</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
              <div className="relative group p-10">
                 <div className="absolute inset-0 bg-white opacity-[0.03] rounded-[5rem] group-hover:scale-105 transition-transform duration-1000" />
                 <img src="/biotech_lab_researcher_1774915416227.png" className="rounded-[5rem] shadow-[0_0_80px_rgba(0,163,224,0.2)] grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Ethical Innovation" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
