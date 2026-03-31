"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Users, BookOpen, Activity, Target, ShieldCheck, Globe2, Building2, Linkedin, ExternalLink, GraduationCap, Award, Scale, Heart, Shield, History, Milestone, Compass } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const LAB_IMG = "about_lab_premium_png_1774940963712.png";

const EXEC_BOARD = [
  { name: "Dr. Dirk Pleimes", role: "Group CEO & CMO", bio: "Physician-scientist with over 20 years of expertise in oncology and clinical drug development. Previously held senior leadership roles at Novartis and Bayer. He is the architect of the PentixaFor/Ther clinical-regulatory global strategy.", init: "DP" },
  { name: "Henner Kollenberg", role: "CBO", bio: "Strategist in life science capital markets and business development. He led Pentixapharm through its acquisition of the GT-008 platform and its successful IPO on the Frankfurt Stock Exchange.", init: "HK" },
  { name: "Erik Merten", role: "CTO", bio: "Expert in radiopharmaceutical manufacturing, GMP operations, and CMC. Appointed to the Executive Board in 2026 to lead the industrialization of the CXCR4 portfolio for commercial readiness.", init: "EM" },
];

const SUPERVISORY_BOARD = [
  { name: "Dr. Andreas Eckert", role: "Chairman", bio: "Founder of Eckert & Ziegler and leading entrepreneur in the European biotech and medtech sectors with decades of governance experience.", init: "AE" },
  { name: "Dr. Harald Hasselmann", role: "Deputy Chairman", bio: "Expert in pharmaceutical management, corporate finance, and strategic restructuring with a focus on value creation.", init: "HH" },
  { name: "Prof. Dr. Ken Herrmann", role: "Board Member", bio: "Global leader in Nuclear Medicine, Director at University Hospital Essen, and a pioneer in the theranostics research field.", init: "KH" },
  { name: "Prof. Dr. Marcus Quinkler", role: "Board Member", bio: "Internationally recognized endocrinology expert, key clinical advisor for the primary aldosteronism indication development.", init: "MQ" },
  { name: "Jens Giltsch", role: "Board Member", bio: "Experienced financial professional with extensive knowledge of the German biotech ecosystem and structured financing.", init: "JG" },
  { name: "Dr. Jürgen Allerkamp", role: "Board Member", bio: "Governance and legal specialist with a deep background in investment banking and institutional capital management.", init: "JA" },
];

const HISTORY = [
  { year: "2019", title: "Corporate Inception", desc: "Founded to commercialize the CXCR4-ligand portfolio pioneered by TU Munich and the Erasmus University Medical Center." },
  { year: "2021", title: "Proof-of-Concept", desc: "First-in-human diagnostic and therapeutic proof-of-concept data published for PentixaFor and PentixaTher." },
  { year: "2023", title: "Strategic Expansion", desc: "Acquisition of the GT-008 anti-CD24 platform, diversifying into first-in-class antibody-drug conjugates (ADCs)." },
  { year: "2024", title: "Frankfurt IPO", desc: "Successfully listed on the Prime Standard of the Frankfurt Stock Exchange, securing funds for pivotal clinical trials." },
  { year: "2026", title: "PANDA Ph3 Initiation", desc: "Initiation of the global pivotal Phase 3 PANDA trial in primary aldosteronism, marking the transition to a late-stage company." },
];

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HERO WITH IMAGE BG ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 min-h-[60vh] flex items-center overflow-hidden bg-[#010816] text-white shadow-2xl">
        <div className="absolute inset-0 z-0 overflow-hidden scale-110 blur-[2px] opacity-60">
           <img src={`/${LAB_IMG}`} className="w-full h-full object-cover animate-slow-zoom" alt="Lab Background" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#010816] via-[#010816]/50 to-transparent" />
           <div className="absolute inset-0 bg-[#010816]/40 backdrop-blur-sm" />
           <AnimatedBg />
        </div>
        <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none -rotate-12 translate-x-1/4">
           <Building2 className="w-96 h-96 text-white" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-white/10 backdrop-blur-md px-8 py-3 rounded-full inline-block mb-10 border border-white/20 italic">Global Precision Oncology</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold mt-3 mb-10 leading-tight italic drop-shadow-2xl">Advancing <span className="text-cyan">Theranostics</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-2xl leading-relaxed font-light italic max-w-4xl mx-auto mb-14 drop-shadow-md">
              We engineer ligands that target CXCR4 and CD24 with extreme specificity. Our mission is to transform oncology and endocrinology through molecular discovery and targeted treatment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { icon: Compass, title: "Precision", desc: "Identifying the precise molecular signature of a patient's disease before starting therapy.", color: "text-teal" },
                 { icon: Shield, title: "Ethics", desc: "Absolute compliance with GCP/GLP and a commitment to transparent clinical reporting.", color: "text-[#031835]" },
                 { icon: Award, title: "Innovation", desc: "Turning the latest radiopharmaceutical breakthroughs into industry-leading clinical assets.", color: "text-[#00A3E0]" }
               ].map((v, i) => (
                 <motion.div key={i} whileHover={{ y: -10 }} className="p-12 rounded-[4rem] bg-[#F8FAFD] border border-slate-100 group transition-all text-center">
                    <v.icon className={"w-12 h-12 " + (v.color) + " mx-auto mb-8"}/>
                    <h3 className="text-2xl font-heading font-extrabold text-[#031835] mb-4 italic uppercase tracking-tighter">{v.title}</h3>
                    <p className="text-slate-500 text-sm italic font-light leading-relaxed">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD] border-y border-slate-100">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-24">
               <span className="text-[#00B1AB] font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Our Evolution</span>
               <h2 className="text-5xl font-heading font-extrabold text-[#031835] italic">A Legacy of <span className="text-teal">Precision</span></h2>
            </div>
            
            <div className="relative pl-12 border-l-2 border-slate-200 py-10 space-y-16 lg:space-y-24">
               {HISTORY.map((h, i) => (
                 <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="relative">
                    <div className="absolute -left-[54px] top-6 w-7 h-7 rounded-full bg-white border-[6px] border-[#031835] shadow-[0_0_20px_rgba(0,42,84,0.3)]" />
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 flex flex-col md:flex-row gap-12 items-center hover:border-cyan/30 transition-all group">
                       <span className="text-5xl font-heading font-extrabold text-cyan tracking-tighter group-hover:scale-110 transition-transform">{h.year}</span>
                       <div className="text-center md:text-left">
                          <h4 className="text-2xl font-heading font-extrabold text-[#031835] mb-3 italic">{h.title}</h4>
                          <p className="text-slate-500 font-light italic leading-relaxed text-lg">{h.desc}</p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── EXECUTIVE TEAM ─────────────────────────────────────────────────────── */}
      <section id="management" className="py-40 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-28">
              <span className="text-helixRed font-heading font-extrabold text-xs tracking-[0.4em] uppercase mb-4 block italic">Scientific & Strategic Leadership</span>
              <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#031835] italic">The <span className="text-cyan">Executive</span> Board</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {EXEC_BOARD.map((m, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -15 }} className="bg-[#F8FAFD] border border-slate-100 rounded-[4rem] p-14 hover:shadow-[0_40px_100px_-20px_rgba(0,42,84,0.15)] transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Building2 className="w-32 h-32" /></div>
                  <div className="flex flex-col items-center text-center mb-12 relative z-10">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-[#031835] flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-6 transition-transform">
                      <span className="text-white font-heading font-extrabold text-5xl italic">{m.init}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-[#031835] text-3xl italic tracking-tight">{m.name}</h3>
                    <p className="text-[10px] text-helixRed font-extrabold uppercase tracking-[0.3em] mt-5 bg-red-50 px-6 py-2 rounded-full border border-red-100">{m.role}</p>
                  </div>
                  <p className="text-slate-500 text-sm leading-loose text-center italic font-light mb-12 relative z-10">{m.bio}</p>
                  <div className="flex justify-center items-center gap-6 border-t border-slate-200/50 pt-12 relative z-10">
                    <button className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#031835] hover:border-[#031835] transition-all"><Linkedin className="w-6 h-6" /></button>
                    <button className="px-10 py-4 rounded-full bg-[#031835] text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-cyan hover:text-navy transition-all shadow-xl">Full Profile <ExternalLink className="w-4 h-4" /></button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SUPERVISORY BOARD ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD] border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-24">
              <span className="text-cyan font-heading font-extrabold text-xs tracking-[0.4em] uppercase mb-4 block italic">Stewardship & Governance</span>
              <h2 className="text-5xl font-heading font-extrabold text-[#031835] italic">Supervisory <span className="text-teal text-transparent bg-clip-text bg-gradient-to-r from-teal to-cyan">Council</span></h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {SUPERVISORY_BOARD.map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-10 items-start p-12 bg-white border border-slate-50 rounded-[3rem] hover:shadow-2xl transition-all group">
                  <div className="w-20 h-20 rounded-3xl bg-[#F8FAFD] flex-shrink-0 flex items-center justify-center font-heading font-extrabold text-[#031835] group-hover:bg-[#031835] group-hover:text-white transition-all shadow-inner text-2xl italic">
                    {m.init}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-[#031835] leading-tight text-2xl mb-2 italic tracking-tight">{m.name}</h4>
                    <p className="text-[10px] font-extrabold text-teal uppercase tracking-widest mb-5 italic">{m.role}</p>
                    <p className="text-[14px] text-slate-500 leading-relaxed italic font-light">{m.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ESG WITH IMAGE BACKGROUND ───────────────────────────────────────── */}
      <section id="sustainability" className="py-40 bg-white relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-10 group-hover:scale-105 transition-transform duration-1000">
           <img src="/patient_centered_healthcare_biotech_1774918263283.png" className="w-full h-full object-cover rounded-l-[10rem]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-3xl">
              <span className="text-[#00B1AB] font-heading font-extrabold text-xs uppercase tracking-[0.4em] mb-6 block italic">Corporate Impact</span>
              <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#031835] leading-tight mb-10 italic">Pioneering for <span className="text-teal">Sustainable</span> Healthcare</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light italic mb-14">At Pentixapharm, we integrate ESG principles into our core R&D cycle. Our innovation must be responsible, ethical, and designed to bridge global healthcare gaps.</p>
           </motion.div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Environmental", icon: Globe2, desc: "Implementing lean manufacturing to reduce radiopharmaceutical waste and optimizing logistics for a lower carbon pipeline.", color: "text-[#00B1AB]" },
                { title: "Social", icon: Heart, desc: "Scaling our Investigator-Initiated Study (IIS) program to provide access to precision diagnostics in underserved regions.", color: "text-[#00A3E0]" },
                { title: "Governance", icon: Scale, desc: "Adhering to the Highest Prime Standard transparency as a Frankfurt-listed clinical-stage biotech.", color: "text-[#031835]" }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{y:-12}} className="bg-[#F8FAFD] p-16 rounded-[4rem] shadow-xl border border-slate-50 group transition-all">
                   <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-10 shadow-inner group-hover:bg-[#031835] group-hover:text-white transition-all transform group-hover:rotate-12">
                      <item.icon className={"w-8 h-8 " + item.color} />
                   </div>
                   <h3 className="text-2xl font-heading font-extrabold text-[#031835] mb-6 italic">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed font-light italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
