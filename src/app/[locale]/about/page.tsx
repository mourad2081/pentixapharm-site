"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Users, BookOpen, Activity, Target, ShieldCheck, Globe2, Building2, Linkedin, ExternalLink, GraduationCap, Award, Scale, Heart, Shield, History, Milestone, Compass } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const LAB_IMG = "biotech_lab_researcher_1774915416227.png";

const EXEC_BOARD = [
  { name: "Dr. Dirk Pleimes", role: "Group CEO & CMO", bio: "Physician-scientist with expertise in oncology and clinical drug development. Previously at Novartis and Bayer. Leading clinical-regulatory strategy for the PentixaFor/Ther theranostic pair.", init: "DP" },
  { name: "Henner Kollenberg", role: "CBO", bio: "Expert in life science capital markets and business development. Strategic architect of Pentixapharm's growth, including the acquisition of GT-008 and the IPO process.", init: "HK" },
  { name: "Erik Merten", role: "CTO", bio: "Deep expertise in radiopharmaceutical manufacturing, GMP operations, and supply chain scaling for thermal and diagnostic applications.", init: "EM" },
];

const SUPERVISORY_BOARD = [
  { name: "Dr. Andreas Eckert", role: "Chairman", bio: "Founder of Eckert & Ziegler and leading entrepreneur in the German biotech and medtech sector.", init: "AE" },
  { name: "Dr. Harald Hasselmann", role: "Deputy Chairman", bio: "Extensive experience in pharmaceutical management and corporate finance.", init: "HH" },
  { name: "Prof. Dr. Ken Herrmann", role: "Board Member", bio: "Nuclear Medicine expert, Director at University Hospital Essen, leading voice in theranostics research globally.", init: "KH" },
  { name: "Prof. Dr. Marcus Quinkler", role: "Board Member", bio: "Internationally recognized endocrinology expert, key advisor for the primary aldosteronism indication.", init: "MQ" },
  { name: "Jens Giltsch", role: "Board Member", bio: "Financial expert with focus on the biotech ecosystem and structured funding.", init: "JG" },
  { name: "Dr. Jürgen Allerkamp", role: "Board Member", bio: "Extensive experience in corporate governance and investment banking.", init: "JA" },
];

const HISTORY = [
  { year: "2019", title: "Corporate Inception", desc: "Pentixapharm is founded in Wurzburg, Germany, to commercialize the CXCR4-ligand portfolio pioneered by academic research in Munich." },
  { year: "2021", title: "Proof-of-Concept", desc: "First-in-human diagnostic and therapeutic proof-of-concept data published for PentixaFor and PentixaTher." },
  { year: "2023", title: "Strategic Expansion", desc: "Acquisition of the GT-008 anti-CD24 platform, diversifying the targeting arsenal into solid tumors." },
  { year: "2024", title: "Frankfurt IPO", desc: "Successful public listing on the Frankfurt Stock Exchange (Prime Standard), raising capital for late-stage clinical programs." },
  { year: "2026", title: "PANDA Ph3 Initiation", desc: "Launch of the pivotal Phase 3 PANDA trial in Primary Aldosteronism across global clinical sites." },
];

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAFD] to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-cyan/10 px-8 py-3 rounded-full inline-block mb-8 border border-cyan/20 italic">The Pentixapharm Identity</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold text-[#002A54] mt-3 mb-8 drop-shadow-sm leading-tight italic">Advancing the Future of <span className="text-cyan">Theranostics</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic max-w-4xl mx-auto mb-10 text-center">
              Pentixapharm is a clinical-stage radiopharmaceutical company. We develop ligands that "see" and "treat" disease simultaneously through our industry-leading CXCR4 and CD24 platforms.
            </motion.p>
            <div className="flex justify-center gap-10">
               <div className="flex flex-col gap-1 items-center">
                  <span className="text-4xl font-heading font-extrabold text-teal">2,600+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Patient Uses</span>
               </div>
               <div className="w-[1px] h-12 bg-slate-200 mt-2" />
               <div className="flex flex-col gap-1 items-center">
                  <span className="text-4xl font-heading font-extrabold text-cyan">Ph3</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Clinical Stage</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-100 overflow-hidden relative">
         <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none rotate-45 transform bg-cyan/10 rounded-full w-[400px] h-[400px] blur-3xl translate-x-[-50%] translate-y-[-50%]" />
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <span className="text-navy text-xs font-heading font-extrabold uppercase tracking-[0.4em] mb-4 block italic">Our Principles</span>
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54] italic mb-6">Built on <span className="text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal">Integrity</span> and Science</h2>
               <p className="text-slate-500 font-light italic leading-loose">The radiopharmaceutical frontier is complex. We anchor our strategy in three core pillars that guide every molecule we develop.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 relative z-10 font-heading">
               {[
                 { icon: Compass, title: "Precision Discovery", desc: "Leveraging molecular imaging to target disease with unparalleled specificity before embarking on therapy.", color: "text-[#00B1AB]" },
                 { icon: Shield, title: "Absolute Ethics", desc: "Prioritizing patient safety and transparent clinical data in compliance with international EMA/FDA standards.", color: "text-[#002A54]" },
                 { icon: Award, title: "R&D Excellence", desc: "Partnering with global academic hubs to turn breakthrough research into proprietary clinical assets.", color: "text-[#00A3E0]" }
               ].map((v, i) => (
                 <motion.div key={i} whileHover={{ y: -8 }} className="bg-[#F8FAFD] p-12 rounded-[3.5rem] border border-slate-100 shadow-xl group transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center mb-8 group-hover:bg-[#002A54] group-hover:text-white transition-all transform group-hover:rotate-12">
                       <v.icon className={"w-7 h-7 " + (v.color)}/>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#002A54] mb-4 italic tracking-tight">{v.title}</h3>
                    <p className="text-slate-500 text-sm italic font-light leading-relaxed">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
               <div className="max-w-2xl">
                  <span className="text-[#00B1AB] font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Our Evolution</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54] leading-tight italic">A Legacy of <span className="text-teal">Innovation</span></h2>
               </div>
               <Milestone className="w-16 h-16 text-slate-200 hidden lg:block" />
            </div>
            
            <div className="relative pl-10 border-l-2 border-slate-200 py-10 space-y-20">
               {HISTORY.map((h, i) => (
                 <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="relative">
                    <div className="absolute -left-[51px] top-2 w-5 h-5 rounded-full bg-white border-[4px] border-[#002A54] shadow-glow" />
                    <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-start hover:border-cyan/30 transition-all group">
                       <div className="shrink-0 flex items-center justify-center w-24 h-24 rounded-3xl bg-[#F8FAFD] border border-slate-50 group-hover:bg-[#002A54] group-hover:text-white transition-all">
                          <span className="text-3xl font-heading font-extrabold tracking-tighter">{h.year}</span>
                       </div>
                       <div>
                          <h4 className="text-2xl font-heading font-extrabold text-[#002A54] mb-3 italic tracking-tight">{h.title}</h4>
                          <p className="text-slate-500 font-light italic leading-relaxed text-lg">{h.desc}</p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── MEET THE TEAM ─────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-24 max-w-2xl mx-auto">
              <span className="text-helixRed font-heading font-extrabold text-xs tracking-[0.4em] uppercase mb-4 block italic">Executive Leadership</span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#002A54] mb-6 italic tracking-tight">The <span className="text-cyan">Board</span> of Directors</h2>
              <p className="text-slate-500 italic font-light">A collective of diagnostic pioneers and clinical strategists driving the next generation of precision oncology.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {EXEC_BOARD.map((m, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="bg-white border-2 border-slate-100 rounded-[3.5rem] p-12 hover:shadow-2xl hover:border-cyan/20 transition-all group overflow-hidden relative shadow-lg">
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F8FAFD] rounded-full blur-3xl group-hover:bg-cyan/10 transition-colors" />
                  <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-28 h-28 rounded-[2.5rem] bg-[#002A54] flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden group-hover:rotate-6 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan/40 to-transparent opacity-50" />
                      <span className="text-white font-heading font-extrabold text-4xl relative z-10 italic shadow-sm">{m.init}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-[#002A54] text-2xl group-hover:text-cyan transition-colors italic tracking-tight">{m.name}</h3>
                    <p className="text-[10px] text-helixRed font-extrabold uppercase tracking-[0.2em] mt-3 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">{m.role}</p>
                  </div>
                  <p className="text-slate-500 text-sm leading-loose text-center italic font-light px-2 mb-10">{m.bio}</p>
                  <div className="flex justify-center items-center gap-5 border-t border-slate-50 pt-10 relative z-10">
                    <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#002A54] hover:border-[#002A54] hover:bg-[#F8FAFD] transition-all"><Linkedin className="w-5 h-5" /></button>
                    <button className="px-8 py-3 rounded-full bg-[#F8FAFD] border border-slate-100 text-[10px] font-extrabold text-navy uppercase tracking-widest hover:bg-cyan hover:text-navy hover:border-cyan transition-all flex items-center gap-2">Full CV <ExternalLink className="w-3.5 h-3.5" /></button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SUPERVISORY BOARD ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFD] border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-20">
              <span className="text-cyan font-heading font-extrabold text-xs tracking-[0.4em] uppercase mb-4 block italic">Corporate Governance</span>
              <h2 className="text-4xl font-heading font-extrabold text-[#002A54] italic">Supervisory <span className="text-teal">Council</span></h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SUPERVISORY_BOARD.map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-8 items-start p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-teal/30 hover:shadow-2xl transition-all group shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-[#F8FAFD] border border-slate-100 flex-shrink-0 flex items-center justify-center font-heading font-extrabold text-[#002A54] group-hover:bg-[#002A54] group-hover:text-white transition-all shadow-inner italic">
                    {m.init}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-[#002A54] leading-tight text-xl mb-1 italic tracking-tight">{m.name}</h4>
                    <p className="text-[10px] font-extrabold text-teal uppercase tracking-widest mt-2 mb-4 italic">{m.role}</p>
                    <p className="text-[13px] text-slate-500 leading-relaxed italic font-light">{m.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SUSTAINABILITY / ESG ──────────────────────────────────────────────── */}
      <section id="sustainability" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-[#00B1AB] font-heading font-extrabold text-xs uppercase tracking-[0.4em] mb-4 block italic">Sustainability Engagement</span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 italic">Pioneering <span className="text-teal">Shared</span> Value</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light italic">At Pentixapharm, we recognize that our commitment to patients extends beyond the clinical setting. We integrate ESG principles to ensure our innovation is responsible, inclusive, and enduring.</p>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Environmental", icon: Globe2, desc: "Implementing waste-reduction protocols in radiopharmaceutical manufacturing and optimizing cold-chain logistics to minimize carbon footprint.", color: "text-[#00B1AB]" },
                { title: "Social Impact", icon: Heart, desc: "Broadening access to precision diagnostics through our global IIS program, supporting academic medical centers in underserved regions.", color: "text-[#00A3E0]" },
                { title: "Ethical Governance", icon: Scale, desc: "Maintaining the highest standards of transparency as a Prime Standard publicly listed company on the Frankfurt Stock Exchange.", color: "text-[#002A54]" }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{y:-10}} className="bg-[#F8FAFD] p-16 rounded-[4rem] shadow-xl border border-slate-50 group transition-all h-full flex flex-col items-center text-center">
                   <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-10 shadow-inner group-hover:bg-[#002A54] group-hover:text-white transition-all transform group-hover:scale-110">
                      <item.icon className={"w-8 h-8 " + item.color} />
                   </div>
                   <h3 className="text-2xl font-heading font-extrabold text-[#002A54] mb-6 italic tracking-tight">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed font-light italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
