"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Activity, Users, BookOpen, TrendingUp, Flask, Target, Zap, BarChart2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const METRICS = [
  { icon:Users, label:"Patients Imaged (PentixaFor)", value:"2,600+", sub:"Across multiple indications worldwide", color:"emerald" },
  { icon:BookOpen, label:"Peer-reviewed Publications", value:"150+", sub:"PentixaFor & CXCR4 literature", color:"cyan" },
  { icon:Activity, label:"Active Clinical Trials", value:"5", sub:"PENTILULA, PANDA, PENTHERA + 2 IIS", color:"gold" },
  { icon:Target, label:"Phase 3-Ready Candidates", value:"1", sub:"PentixaFor — PANDA study", color:"emerald" },
  { icon:Users, label:"PA Patients Diagnosed", value:"474+", sub:"Since PANDA programme launch (2024)", color:"cyan" },
  { icon:BookOpen, label:"Investigator-Initiated Studies", value:"20+", sub:"Independent academic collaborations", color:"gold" },
];

const PIPELINE_STATUS = [
  { compound:"PentixaFor", indication:"Primary Aldosteronism / TRH", phase:5, maxPhase:6, label:"Phase 3 Ready", color:"emerald" },
  { compound:"PentixaFor", indication:"Hematological Malignancies (Imaging)", phase:3, maxPhase:6, label:"Phase 2", color:"emerald" },
  { compound:"PentixaTher", indication:"AML Bone Marrow Conditioning (PENTILULA)", phase:2, maxPhase:6, label:"Phase 1/2", color:"cyan" },
  { compound:"PentixaTher", indication:"Multiple Myeloma (PENTHERA)", phase:2, maxPhase:6, label:"Phase 1/2", color:"cyan" },
  { compound:"PentixaTher", indication:"Bladder Cancer", phase:2, maxPhase:6, label:"Phase 1/2", color:"cyan" },
  { compound:"GT-008 (CD24 mAb)", indication:"Breast / Ovarian / Endometrial Cancer", phase:1, maxPhase:6, label:"Preclinical", color:"gold" },
];

const FINANCIALS = [
  { year:"2024", loss:12.8, rev:0.2 },
  { year:"2025E", loss:18, rev:0.15 },
];

export default function StatsPage() {
  const t = useTranslations("stats");
  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">Dashboard</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-navy2">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-heading font-bold text-white mb-8">Key Research Metrics</motion.h2>
            <div className="grid md:grid-cols-3 gap-5">
              {METRICS.map((m,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-6 card-hover">
                  <div className={"w-10 h-10 flex items-center justify-center rounded-xl mb-5 " +
                    (m.color==="emerald"?"bg-emerald/15":m.color==="cyan"?"bg-cyan/15":"bg-gold/15")}>
                    <m.icon className={"w-5 h-5 " + (m.color==="emerald"?"text-emerald":m.color==="cyan"?"text-cyan":"text-gold")} />
                  </div>
                  <div className={"text-4xl font-heading font-bold mb-1 " + (m.color==="emerald"?"text-emerald":m.color==="cyan"?"text-cyan":"text-gold")}>{m.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
                  <div className="text-slate-500 text-xs">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Progress */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-heading font-bold text-white mb-8">Pipeline Progress</motion.h2>
            <div className="space-y-4">
              {PIPELINE_STATUS.map((p,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <span className={"font-heading font-bold text-sm " + (p.color==="emerald"?"text-emerald":p.color==="cyan"?"text-cyan":"text-gold")}>{p.compound}</span>
                      <span className="text-slate-400 text-sm"> · {p.indication}</span>
                    </div>
                    <span className={"text-xs font-semibold px-3 py-1 rounded-full border " +
                      (p.color==="emerald"?"bg-emerald/12 text-emerald border-emerald/20":p.color==="cyan"?"bg-cyan/12 text-cyan border-cyan/20":"bg-gold/12 text-gold border-gold/20")}>{p.label}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {["Precl.","Ph. 1","Ph. 1/2","Ph. 2","Ph. 3","Appvl."].map((ph,pi) => (
                      <div key={ph} className="flex-1">
                        <div className={"h-2 rounded-full " + (pi < p.phase ? (p.color==="emerald"?"bg-emerald":p.color==="cyan"?"bg-cyan":"bg-gold") : "bg-white/8")} />
                        <p className="text-[9px] text-slate-600 mt-1 text-center hidden sm:block">{ph}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financials Summary */}
      <section className="py-20 bg-navy2">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-heading font-bold text-white mb-8">Financial Summary (€M)</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {FINANCIALS.map((f,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-white mb-5">FY{f.year}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Revenue</span>
                        <span className="text-cyan font-semibold">€{f.rev}M</span>
                      </div>
                      <div className="w-full h-2 bg-white/8 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan rounded-full" style={{width:(f.rev/20*100)+"%"}} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Net Loss</span>
                        <span className="text-red-400 font-semibold">-€{f.loss}M</span>
                      </div>
                      <div className="w-full h-2 bg-white/8 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400/70 rounded-full" style={{width:(f.loss/20*100)+"%"}} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
