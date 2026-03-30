"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

interface JobPost { id: number; date: string; title: string; location: string; type: string; desc: string; published: boolean; }

const DEFAULT_JOBS = [
  { id: 1, date: "2026-03-15", title: "Senior Clinical Project Manager", location: "Würzburg, DE", type: "Full-Time", desc: "Lead the PANDA Phase 3 global trial operations. Ensure GMP and GCP compliance.", published: true },
  { id: 2, date: "2026-02-28", title: "Radiopharmaceutical Manufacturing Specialist", location: "Berlin, DE", type: "Full-Time", desc: "Support scaling up of Lutetium-177 and Yttrium-90 radiolabelling processes.", published: true },
];

export default function CareersPage() {
  const t = useTranslations("careers");
  const locale = useLocale();
  const [jobs, setJobs] = useState<JobPost[]>(DEFAULT_JOBS);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ptx_jobs") || "[]");
      if (saved.length > 0) setJobs(saved.filter((j: JobPost) => j.published));
    } catch {}
  }, []);

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00A3E0] text-sm font-medium uppercase tracking-widest bg-cyan/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-cyan/20">
              Pentixapharm Careers
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-navy mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl text-lg leading-relaxed mx-auto">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="space-y-6">
            {jobs.length === 0 ? (
               <div className="text-center py-20 bg-[#F8FAFD]2 rounded-2xl border border-white/5">
                 <Briefcase className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                 <p className="text-slate-500">There are currently no open positions. Please check back later.</p>
               </div>
            ) : (
               jobs.map(job => (
                 <motion.div key={job.id} variants={fadeUp} className="bg-[#F8FAFD]2/50 backdrop-blur-md border border-slate-200 rounded-2xl p-6 lg:p-8 hover:border-cyan/30 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div className="flex-1">
                     <h2 className="text-2xl font-bold font-heading text-navy mb-3 group-hover:text-[#00A3E0] transition-colors">{job.title}</h2>
                     <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                       <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#00B1AB]"/> {job.location}</span>
                       <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#F2A900]"/> {job.type}</span>
                     </div>
                     <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-2 md:line-clamp-none">{job.desc}</p>
                   </div>
                   <div className="shrink-0">
                     <a href={"mailto:careers@pentixapharm.com?subject=Application for " + encodeURIComponent(job.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-bold rounded-full hover:bg-cyan/90 transition-all">
                       Apply Now <ArrowRight className="w-4 h-4" />
                     </a>
                   </div>
                 </motion.div>
               ))
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFD]2 border-t border-slate-200 text-center">
         <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Join Pentixapharm?</h2>
            <div className="flex flex-col gap-3 items-start text-left mb-8 max-w-md mx-auto">
               <span className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-[#00B1AB]"/> Work on Phase 3-ready radiopharmaceuticals.</span>
               <span className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-[#00B1AB]"/> Agile, dynamic corporate culture.</span>
               <span className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-[#00B1AB]"/> Competitive compensation & career growth.</span>
            </div>
         </div>
      </section>
    </div>
  );
}
