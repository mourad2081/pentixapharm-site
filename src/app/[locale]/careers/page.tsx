"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Heart, Globe2, Zap, Atom, GraduationCap, Building2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

interface JobPost { id: number; date: string; title: string; location: string; type: string; desc: string; published: boolean; }

const DEFAULT_JOBS = [
  { id: 1, date: "2026-03-15", title: "Senior Clinical Project Manager", location: "Würzburg, DE", type: "Full-Time", desc: "Lead the PANDA Phase 3 global trial operations. Ensure GMP and GCP compliance. Coordinate with international CROs and clinical sites to achieve recruitment milestones.", published: true },
  { id: 2, date: "2026-02-28", title: "Radiopharmaceutical Manufacturing Specialist", location: "Berlin, DE", type: "Full-Time", desc: "Support scaling up of Lutetium-177 and Yttrium-90 radiolabelling processes. Maintain GMP standards and oversee just-in-time logistics.", published: true },
  { id: 3, date: "2026-03-20", title: "Business Development Manager", location: "Remote / Berlin", type: "Full-Time", desc: "Identify and execute strategic licensing opportunities for our CXCR4 and CD24 platforms in non-core territories.", published: true },
];

export default function CareersPage() {
  const t = useTranslations("careers");
  const locale = useLocale();
  const [jobs, setJobs] = useState<JobPost[]>(DEFAULT_JOBS);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ptx_jobs") || "[]");
      if (saved.length > 0) {
        const publishedJobs = saved.filter((j: JobPost) => j.published);
        setJobs([...DEFAULT_JOBS, ...publishedJobs]);
      }
    } catch {}
  }, []);

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-20">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
           <div className="absolute inset-0 bg-[#002A54] translate-y-1/2 rounded-[50%]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.3em] bg-cyan/10 px-6 py-2.5 rounded-full mb-10 border border-cyan/20 inline-block italic">
              Join the Precision Revolution
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-[#002A54] mt-3 mb-8 drop-shadow-sm leading-tight italic">Shape the <span className="text-cyan">Future</span> of Oncology</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic">
              At Pentixapharm, you're not just filling a role—you're accelerating the delivery of life-changing radiotherapeutics to patients with high unmet medical needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES / LIFE AT PENTIXAPHARM ──────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFD]">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Heart, title: "Patient First", desc: "Every molecule we engineer is aimed at improving survival and quality of life.", color: "text-red-400" },
                 { icon: Globe2, title: "Global Impact", desc: "Collaborate with international research icons across the EU and the US.", color: "text-cyan" },
                 { icon: Zap, title: "Agile Growth", desc: "A lean, rapid-decision culture that values innovation over hierarchy.", color: "text-teal" },
                 { icon: GraduationCap, title: "Continuous Learning", desc: "Support for advanced certifications and academic development.", color: "text-navy" }
               ].map((v,i) => (
                 <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} viewport={{once:true}} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 shadow-inner group-hover:bg-[#002A54] group-hover:text-white transition-all">
                       <v.icon className={"w-6 h-6 " + (v.color)}/>
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#002A54] mb-3 italic">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── OPEN POSITIONS ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
             <div>
                <span className="text-xs font-bold text-teal tracking-[0.2em] uppercase mb-4 block italic">Career Portal</span>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54]">Open <span className="text-cyan">Positions</span></h2>
             </div>
             <p className="text-slate-500 font-light italic">Can't find your fit? We accept <span className="font-bold text-[#002A54]">speculative applications.</span></p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="space-y-6">
            {jobs.length === 0 ? (
               <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300">
                 <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                 <p className="text-slate-500 font-heading font-bold text-xl italic">The pipeline is full, but the office is quiet.</p>
                 <p className="text-slate-400 text-sm mt-2">No current openings. Send us your CV anyway!</p>
               </div>
            ) : (
               jobs.map(job => (
                 <motion.div key={job.id} variants={fadeUp} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 hover:shadow-2xl hover:border-cyan/30 transition-all group flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-5 transition-opacity"><Briefcase className="w-48 h-48" /></div>
                   <div className="flex-1 text-center lg:text-left relative z-10">
                     <h2 className="text-2xl lg:text-3xl font-heading font-extrabold text-[#002A54] mb-4 group-hover:text-cyan transition-colors italic">{job.title}</h2>
                     <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                       <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100"><MapPin className="w-3 h-3 text-cyan"/> {job.location}</span>
                       <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100"><Clock className="w-3 h-3 text-teal"/> {job.type}</span>
                     </div>
                     <p className="text-slate-600 leading-relaxed text-sm font-light italic max-w-2xl">{job.desc}</p>
                   </div>
                   <div className="shrink-0 relative z-10 w-full lg:w-auto">
                     <a href={"mailto:careers@pentixapharm.com?subject=Application for " + encodeURIComponent(job.title)}
                        className="flex items-center justify-center gap-3 px-10 py-5 bg-[#002A54] text-white font-heading font-extrabold rounded-full hover:bg-cyan hover:text-navy transition-all shadow-xl hover:-translate-y-1">
                       Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </a>
                   </div>
                 </motion.div>
               ))
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER-CTA ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFD] text-center">
         <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-[#002A54] p-16 rounded-[4rem] text-white relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <Building2 className="w-16 h-16 text-cyan mx-auto mb-8 relative z-10" />
               <h2 className="text-4xl font-heading font-extrabold mb-6 relative z-10 italic">Visit Our Headquarters</h2>
               <p className="text-slate-400 mb-10 text-lg font-light italic relative z-10">We are located at the heart of Berlin's biotech cluster. Feel free to reach out for corporate visit inquiries or student thesis opportunities.</p>
               <button className="px-12 py-5 bg-white text-navy font-heading font-extrabold rounded-full hover:bg-cyan transition-all shadow-2xl relative z-10">
                 Explore Locations
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
