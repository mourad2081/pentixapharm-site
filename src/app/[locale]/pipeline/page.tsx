"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Microscope, Zap, FlaskConical, CheckCircle2, Clock } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const PHASES = ["Preclinical","Phase 1","Phase 1/2","Phase 2","Phase 3","Approval"];

const COMPOUNDS = [
  {
    name:"PentixaFor", formula:"[68Ga]Ga-PentixaFor", type:"Diagnostic", modality:"PET/CT Radiodiagnostic",
    color:"emerald", icon:Microscope,
    indications:[
      { name:"Primary Aldosteronism / Treatment-Resistant Hypertension", phase:"Phase 3 Ready", phaseIdx:4, trial:"PANDA", status:"IND submission planned" },
      { name:"Hematological Malignancies (Imaging)", phase:"Phase 2", phaseIdx:3, trial:"Multiple IIS", status:"Ongoing" },
    ],
    about:"PentixaFor is a first-in-class gallium-68-labelled radiodiagnostic targeting CXCR4. It enables high-resolution PET/CT imaging to visualise CXCR4 expression in vivo. Clinical experience encompasses more than 2,600 patients across multiple indications with a favourable safety profile.",
    highlights:["Phase 3-ready for primary aldosteronism","FDA Type B pre-IND meeting feedback received (Jan 2026)","28/29 patients preferred PET/CT over adrenal vein sampling","100+ peer-reviewed publications","No safety issues in 2,600+ patients imaged"],
  },
  {
    name:"PentixaTher", formula:"[90Y]Y / [177Lu]Lu-PentixaTher", type:"Therapeutic", modality:"Targeted Radioligand Therapy",
    color:"cyan", icon:Zap,
    indications:[
      { name:"Acute Myeloid Leukemia (AML) — Bone Marrow Conditioning", phase:"Phase 1/2", phaseIdx:2, trial:"PENTILULA", status:"4th of 5 dose levels reached" },
      { name:"Multiple Myeloma (Bone Marrow Conditioning)", phase:"Phase 1/2", phaseIdx:2, trial:"PENTHERA", status:"FDA IND active (Feb 2026)" },
      { name:"Bladder Cancer", phase:"Phase 1/2", phaseIdx:2, trial:"Investigator-Initiated", status:"First-in-human data presented EANM 2025" },
    ],
    about:"PentixaTher is a CXCR4-directed radiotherapeutic that delivers targeted radiation to cancer cells overexpressing the CXCR4 receptor. Used alongside PentixaFor in a theranostic approach, it enables personalised radioligand therapy for haematological malignancies.",
    highlights:["Lutetium-177 and Yttrium-90 radiolabelled formats","Advancing to 4th dose level in PENTILULA AML trial","FDA 'Study May Proceed' received for PENTHERA IND (Feb 2026)","First-in-human bladder cancer data show early therapeutic activity","Manufacturing agreement with Eckert & Ziegler for Y90 GMP production"],
  },
  {
    name:"GT-008", formula:"Anti-CD24 Glycan-Dependent mAb", type:"Antibody Platform", modality:"Radioimmunotherapy",
    color:"gold", icon:FlaskConical,
    indications:[
      { name:"Breast Cancer", phase:"Preclinical", phaseIdx:0, trial:"IND Enabling", status:"Complete responses in mouse models" },
      { name:"Ovarian / Endometrial Cancer", phase:"Preclinical", phaseIdx:0, trial:"IND Enabling", status:"Expansion studies ongoing" },
    ],
    about:"GT-008 is a first-in-class glycan-dependent monoclonal antibody targeting a tumour-associated O-glycoform of CD24. This novel targeting selectivity reduces binding to healthy CD24-expressing cells, offering an improved therapeutic window. Radiolabelled with Lutetium-177, it demonstrated complete tumour responses in preclinical breast cancer models.",
    highlights:["First-in-class glycan-dependent CD24 targeting","Single-dose complete responses in preclinical breast cancer model","Derived from Glycotope acquisition (2024)","Presented at AACR 2025","Suitable for multiple radionuclide formats"],
  },
];

export default function PipelinePage() {
  const locale = useLocale();
  const t = useTranslations("pipeline");
  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-emerald/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00B1AB] text-sm font-medium uppercase tracking-widest">Research & Development</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-navy mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* CXCR4 Explainer */}
      <section className="py-20 bg-[#F8FAFD]2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-navy mb-4">{t("cxcr4Title")}</motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-6">{t("cxcr4Desc")}</motion.p>
              <motion.h3 variants={fadeUp} className="text-xl font-heading font-bold text-navy mb-3">{t("theranosticTitle")}</motion.h3>
              <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed">{t("theranosticDesc")}</motion.p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="grid grid-cols-2 gap-4">
              {[
                { val:"20+", lab:"Cancers with CXCR4 Overexpression", c:"emerald" },
                { val:"1st", lab:"First-in-Class CXCR4 Theranostic Pair", c:"cyan" },
                { val:"100+", lab:"Scientific Publications on PentixaFor", c:"gold" },
                { val:"2,600+", lab:"Patients Imaged with PentixaFor", c:"emerald" },
              ].map((s,i) => (
                <div key={i} className="bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-5">
                  <div className={"text-3xl font-heading font-bold mb-1 " + (s.c==="emerald"?"text-[#00B1AB]":s.c==="cyan"?"text-[#00A3E0]":"text-[#F2A900]")}>{s.val}</div>
                  <div className="text-xs text-slate-500">{s.lab}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline Chart */}
      <section className="py-10 bg-[#F8FAFD] border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto py-4">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider w-48">Compound</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider w-40">Indication</th>
                  {PHASES.map(p => (
                    <th key={p} className="text-center py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPOUNDS.flatMap((c,ci) => c.indications.map((ind,ii) => (
                  <tr key={ci+"-"+ii} className="hover:bg-white/3 transition-colors">
                    {ii===0 && (
                      <td className="py-4 px-4 align-top" rowSpan={c.indications.length}>
                        <div className={"font-heading font-bold text-sm " + (c.color==="emerald"?"text-[#00B1AB]":c.color==="cyan"?"text-[#00A3E0]":"text-[#F2A900]")}>{c.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{c.type}</div>
                      </td>
                    )}
                    <td className="py-4 px-4 text-xs text-slate-600 leading-snug">{ind.name}</td>
                    {PHASES.map((p,pi) => (
                      <td key={p} className="py-4 px-2 text-center">
                        {pi < ind.phaseIdx ? (
                          <div className={"w-full h-3 rounded-full mx-auto " + (c.color==="emerald"?"bg-emerald/60":c.color==="cyan"?"bg-cyan/60":"bg-gold/60")} />
                        ) : pi===ind.phaseIdx ? (
                          <div className={"w-full h-3 rounded-full mx-auto animate-pulse ring-2 " + (c.color==="emerald"?"bg-emerald ring-emerald/30":c.color==="cyan"?"bg-cyan ring-cyan/30":"bg-gold ring-gold/30")} />
                        ) : (
                          <div className="w-full h-3 rounded-full bg-white/6 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compound Details */}
      {COMPOUNDS.map((c, ci) => (
        <section key={ci} className={"py-24 " + (ci%2===0?"bg-[#F8FAFD]":"bg-[#F8FAFD]2")}>
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}
              className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div variants={fadeUp} className={"inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 " +
                  (c.color==="emerald"?"bg-emerald/12 text-[#00B1AB] border border-emerald/20":c.color==="cyan"?"bg-cyan/12 text-[#00A3E0] border border-cyan/20":"bg-gold/12 text-[#F2A900] border border-gold/20")}>
                  <span className={"w-1.5 h-1.5 rounded-full " + (c.color==="emerald"?"bg-emerald":c.color==="cyan"?"bg-cyan":"bg-gold")} />
                  {c.type} · {c.modality}
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl font-heading font-bold text-navy mb-1">{c.name}</motion.h2>
                <motion.p variants={fadeUp} className={"text-sm font-mono mb-6 " + (c.color==="emerald"?"text-[#00B1AB]":c.color==="cyan"?"text-[#00A3E0]":"text-[#F2A900]")}>{c.formula}</motion.p>
                <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-8">{c.about}</motion.p>
                <motion.ul variants={stagger} className="space-y-3">
                  {c.highlights.map((h,hi) => (
                    <motion.li key={hi} variants={fadeUp} className="flex items-start gap-3">
                      <CheckCircle2 className={"w-4 h-4 mt-0.5 shrink-0 " + (c.color==="emerald"?"text-[#00B1AB]":c.color==="cyan"?"text-[#00A3E0]":"text-[#F2A900]")} />
                      <span className="text-slate-600 text-sm">{h}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-navy font-heading font-semibold mb-4">Clinical Indications</h3>
                {c.indications.map((ind,ii) => (
                  <motion.div key={ii} variants={fadeUp} className="bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-navy text-sm">{ind.name}</span>
                      <span className={"text-xs font-semibold px-2.5 py-1 rounded-full " +
                        (c.color==="emerald"?"bg-emerald/12 text-[#00B1AB]":c.color==="cyan"?"bg-cyan/12 text-[#00A3E0]":"bg-gold/12 text-[#F2A900]")}>{ind.phase}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span className="text-xs text-slate-500">{ind.status}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-500">Trial: {ind.trial}</span>
                    </div>
                    {/* Phase bar */}
                    <div className="flex gap-1">
                      {PHASES.map((p,pi) => (
                        <div key={p} className={"flex-1 h-1.5 rounded-full transition-all " +
                          (pi < ind.phaseIdx ? (c.color==="emerald"?"bg-emerald":c.color==="cyan"?"bg-cyan":"bg-gold") :
                           pi===ind.phaseIdx ? (c.color==="emerald"?"bg-emerald/70":c.color==="cyan"?"bg-cyan/70":"bg-gold/70") :
                           "bg-white/10")} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Literature Stats */}
      <section className="py-20 bg-gradient-to-br from-navy2 to-navy border-t border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-navy text-center mb-12">{t("litTitle")}</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{v:t("litStat1"),l:t("litLab1")},{v:t("litStat2"),l:t("litLab2")},{v:t("litStat3"),l:t("litLab3")},{v:t("litStat4"),l:t("litLab4")}].map((s,i) => (
                <motion.div key={i} variants={fadeUp} className="text-center bg-white border border-slate-200 shadow-sm-emerald border border-emerald/15 rounded-2xl p-6">
                  <div className="text-4xl font-heading font-bold text-[#00B1AB] mb-2">{s.v}</div>
                  <div className="text-xs text-slate-500 leading-snug">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
