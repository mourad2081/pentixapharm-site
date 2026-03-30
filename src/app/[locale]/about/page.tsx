"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Trophy, Calendar, Users, FlaskConical, Activity, BookOpen, Target, ShieldCheck, Globe2, Building2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const METRICS = [
  { icon:Users, label:"Patients Imaged (PentixaFor)", value:"2,600+", sub:"Across multiple indications worldwide", color:"emerald" },
  { icon:BookOpen, label:"Peer-reviewed Publications", value:"150+", sub:"PentixaFor & CXCR4 literature", color:"cyan" },
  { icon:Activity, label:"Active Clinical Trials", value:"5", sub:"PENTILULA, PANDA, PENTHERA + 2 IIS", color:"gold" },
  { icon:Target, label:"Phase 3-Ready Candidates", value:"1", sub:"PentixaFor — PANDA study", color:"emerald" },
];

const TEAM = [
  { name:"Dr. Dirk Pleimes", role:"CEO & CMO", bio:"Physician-scientist with expertise in oncology and clinical drug development. Previously at Novartis and Bayer.", init:"DP" },
  { name:"Henner Kollenberg", role:"Chief Business Officer", bio:"Over 20 years of business development experience in the life sciences sector.", init:"HK" },
  { name:"Erik Merten", role:"Chief Technology Officer", bio:"Brings deep expertise in radiopharmaceutical manufacturing, scale-up, and GMP operations.", init:"EM" },
];

const TIMELINE = [
  { year: "2019", text: "Pentixapharm Founded to focus on CXCR4 theranostics." },
  { year: "2021", text: "Received advanced therapeutic designations from the FDA." },
  { year: "2023", text: "Acquired Glycotope asset GT-008, expanding into CD24 targeting." },
  { year: "2025", text: "Successfully IPO'd on the Frankfurt Stock Exchange (PTP)." },
  { year: "2026", text: "Phase 3 PANDA protocol initiated & CTO joined board." },
];

export default function AboutPage() {
  const locale = useLocale();
  const t = useTranslations("about");
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800">
      <section className="relative pt-36 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,42,84,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,42,84,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00A3E0] text-sm font-bold uppercase tracking-widest bg-[#00A3E0]/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#00A3E0]/20">Our Company</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-extrabold text-[#002A54] mt-3 mb-6">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Expanded Mission & Vision */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="relative">
               <div className="absolute -inset-4 bg-[#00A3E0]/10 rounded-3xl blur-xl" />
               <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop" alt="Pentixapharm Labs" className="rounded-3xl shadow-xl w-full h-[500px] object-cover relative z-10" />
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
               <motion.h2 variants={fadeUp} className="text-3xl font-heading font-extrabold text-[#002A54] mb-6">Our Mission</motion.h2>
               <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
                 We are dedicated to pioneering precision medicine by developing innovative theranostic solutions and highly targeted antibodies. Our goal is to shift the paradigm in oncology and endocrinology from generic treatments to highly personalized, molecularly targeted therapies.
               </motion.p>
               <motion.h3 variants={fadeUp} className="text-xl font-heading font-bold text-[#002A54] mb-3 mt-8">Core Values</motion.h3>
               <motion.ul variants={stagger} className="space-y-4">
                  <motion.li variants={fadeUp} className="flex gap-4">
                     <ShieldCheck className="w-6 h-6 text-[#00B1AB] shrink-0" />
                     <div><strong className="text-[#002A54]">Scientific Rigor:</strong> We follow the data, ensuring the highest standards of clinical evidence.</div>
                  </motion.li>
                  <motion.li variants={fadeUp} className="flex gap-4">
                     <Activity className="w-6 h-6 text-[#00A3E0] shrink-0" />
                     <div><strong className="text-[#002A54]">Patient-Centricity:</strong> Minimizing toxicity and maximizing therapeutic effect.</div>
                  </motion.li>
                  <motion.li variants={fadeUp} className="flex gap-4">
                     <Globe2 className="w-6 h-6 text-[#F2A900] shrink-0" />
                     <div><strong className="text-[#002A54]">Global Access:</strong> Building scalable supply chains to bring therapies to patients worldwide.</div>
                  </motion.li>
               </motion.ul>
            </motion.div>
        </div>
      </section>

      {/* Embedded Stats Section */}
      <section className="py-24 bg-[#F8FAFD] border-b border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-extrabold text-[#002A54]">Scientific & Clinical Impact</h2>
              <p className="text-slate-500 mt-2">Key metrics demonstrating our commitment to advancing theranostics.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {METRICS.map((m,i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{y:-5}} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group text-center">
                  <div className={"w-12 h-12 flex items-center justify-center rounded-2xl mx-auto mb-5 " +
                    (m.color==="emerald"?"bg-[#00B1AB]/10 text-[#00B1AB]":m.color==="cyan"?"bg-[#00A3E0]/10 text-[#00A3E0]":"bg-[#F2A900]/10 text-[#F2A900]")}>
                    <m.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className={"text-4xl font-heading font-extrabold mb-1 " + (m.color==="emerald"?"text-[#00B1AB]":m.color==="cyan"?"text-[#00A3E0]":"text-[#F2A900]")}>{m.value}</div>
                  <div className="text-[#002A54] font-bold text-sm mb-1">{m.label}</div>
                  <div className="text-slate-500 text-xs">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate History / Timeline */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
              <Building2 className="w-10 h-10 text-[#00A3E0] mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-extrabold text-[#002A54]">Corporate Timeline</h2>
           </div>
           <div className="space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 bg-slate-100" />
              {TIMELINE.map((item, i) => (
                 <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className={"relative flex flex-col md:flex-row items-start md:items-center " + (i%2===0 ? "md:flex-row-reverse" : "")}>
                    <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#00B1AB] shadow-md z-10" />
                    <div className={"pl-16 md:pl-0 md:w-1/2 " + (i%2===0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left")}>
                       <span className="text-[#002A54] font-extrabold text-2xl font-heading opacity-30">{item.year}</span>
                       <p className="text-slate-600 font-medium mt-1 bg-slate-50 p-4 border border-slate-100 rounded-xl shadow-sm">{item.text}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Users className="w-8 h-8 text-[#00A3E0]" />
              <h2 className="text-4xl font-heading font-extrabold text-[#002A54]">Executive Leadership</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {TEAM.map((m,i) => (
                 <motion.div key={i} variants={fadeUp} whileHover={{y:-5}} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all group overflow-hidden relative">
                   <div className="flex items-center gap-5 mb-5 relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/5 border border-[#00A3E0]/10 flex items-center justify-center">
                       <span className="text-[#00A3E0] font-heading font-extrabold text-xl">{m.init}</span>
                     </div>
                     <div>
                       <h3 className="font-heading font-extrabold text-[#002A54] text-lg leading-tight group-hover:text-[#00B1AB] transition-colors">{m.name}</h3>
                       <p className="text-sm text-[#00A3E0] font-bold mt-1">{m.role}</p>
                     </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed relative z-10">{m.bio}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
