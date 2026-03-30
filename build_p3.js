
const fs = require('fs');
const path = require('path');
const B = __dirname;
const w = (f, c) => { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); };

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
w('src/app/[locale]/page.tsx',`"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, FlaskConical, Activity, FileText, Users, TrendingUp, ChevronRight, ExternalLink, Microscope, Zap } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const NEWS = [
  { date:"Mar 31, 2026", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as CTO", excerpt:"Appointment strengthens board team to support Phase 3 PANDA program and commercialization readiness." },
  { date:"Feb 25, 2026", cat:"Regulatory", title:'FDA "Study May Proceed" for Dual Theranostic INDs in CXCR4 Hemato-Oncology Program', excerpt:"INDs for PentixaFor and PentixaTher active after FDA 30-day safety review in AML and Multiple Myeloma." },
  { date:"Feb 5, 2026", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior Non-invasive PET Diagnostic for Primary Aldosteronism", excerpt:"High specificity demonstrated versus adrenal vein sampling; 28/29 patients preferred PET/CT." },
];

const PIPELINE = [
  { name:"PentixaFor", label:"[⁶⁸Ga]Ga-PentixaFor", type:"Diagnostic", phase:"Phase 3 Ready", ind:"Primary Aldosteronism", color:"emerald", icon:Microscope, desc:"Leading CXCR4-directed PET/CT radiodiagnostic. Phase 3 PANDA study in primary aldosteronism / treatment-resistant hypertension." },
  { name:"PentixaTher", label:"[⁹⁰Y]Y / [¹⁷⁷Lu]Lu-PentixaTher", type:"Therapeutic", phase:"Phase 1/2", ind:"AML, Multiple Myeloma", color:"cyan", icon:Zap, desc:"Targeted radiotherapy for hematologic malignancies. PENTILULA study at 4th of 5 dose levels with favourable safety profile." },
  { name:"GT-008", label:"Anti-CD24 Glycan mAb", type:"Antibody Platform", phase:"Preclinical", ind:"Solid Tumors", color:"gold", icon:FlaskConical, desc:"First-in-class glycan-dependent anti-CD24 monoclonal antibody. Complete responses in breast cancer preclinical models." },
];

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("home");

  return (
    <div className="bg-navy overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy2 to-navy" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/6 rounded-full blur-3xl animate-pulse" style={{animationDelay:"2s"}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/3 rounded-full blur-3xl" />
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,184,148,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,184,148,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-24">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* Tag */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium text-emerald bg-emerald/10 border border-emerald/20 px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse" />
              <span>{t("heroTag")}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.05] mb-6 max-w-4xl mx-auto">
              Improving Lives Through{" "}
              <span className="gradient-text">Precision Radiopharmaceuticals</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("heroSub")}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={"/" + locale + "/pipeline"}
                className="flex items-center gap-2 px-8 py-4 bg-emerald text-navy font-bold rounded-full text-base hover:bg-emerald/90 transition-all shadow-xl shadow-emerald/25 hover:shadow-emerald/40 hover:-translate-y-0.5 group">
                {t("ctaPipeline")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={"/" + locale + "/investors"}
                className="flex items-center gap-2 px-8 py-4 glass border border-white/10 text-white font-semibold rounded-full text-base hover:bg-white/10 transition-all">
                {t("ctaIR")} <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {[
                { val:t("stat1val"), lab:t("stat1lab") },
                { val:t("stat2val"), lab:t("stat2lab") },
                { val:t("stat3val"), lab:t("stat3lab") },
                { val:t("stat4val"), lab:t("stat4lab") },
              ].map((s,i) => (
                <motion.div key={i} variants={fadeUp} className="text-center py-5 px-3 glass-emerald rounded-2xl">
                  <div className="text-3xl font-heading font-bold text-white mb-1">{s.val}</div>
                  <div className="text-xs text-slate-400">{s.lab}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-emerald/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── PIPELINE PREVIEW ──────────────────────────────────────────────────── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy2 to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-emerald text-sm font-medium uppercase tracking-widest">Pipeline</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-4">{t("pipelineTitle")}</h2>
              <p className="text-slate-400 max-w-xl mx-auto">{t("pipelineDesc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {PIPELINE.map((p,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-7 card-hover group">
                  <div className={"inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-5 " +
                    (p.color==="emerald" ? "bg-emerald/15 text-emerald border border-emerald/20" :
                     p.color==="cyan" ? "bg-cyan/15 text-cyan border border-cyan/20" :
                     "bg-gold/15 text-gold border border-gold/20")}>
                    <span className={"w-1.5 h-1.5 rounded-full " + (p.color==="emerald"?"bg-emerald":p.color==="cyan"?"bg-cyan":"bg-gold")} />
                    {p.type}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{p.name}</h3>
                  <p className={"text-xs font-mono mb-1 " + (p.color==="emerald"?"text-emerald/80":p.color==="cyan"?"text-cyan/80":"text-gold/80")}>{p.label}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-slate-400 bg-navy/80 px-2 py-0.5 rounded border border-white/8">{p.phase}</span>
                    <span className="text-xs text-slate-500">·</span>
                    <span className="text-xs text-slate-400">{p.ind}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link href={"/" + locale + "/pipeline"}
                className="inline-flex items-center gap-2 text-emerald text-sm font-semibold hover:gap-3 transition-all">
                View Full Pipeline <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LATEST NEWS ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
              <div>
                <span className="text-emerald text-sm font-medium uppercase tracking-widest">Press Releases</span>
                <h2 className="text-4xl font-heading font-bold text-white mt-2">{t("newsTitle")}</h2>
              </div>
              <Link href={"/" + locale + "/news"} className="hidden sm:flex items-center gap-1.5 text-sm text-slate-400 hover:text-emerald transition-colors">
                All News <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {NEWS.map((n,i) => (
                <motion.div key={i} variants={fadeUp}
                  className="glass border border-white/8 rounded-2xl p-6 card-hover cursor-pointer group">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-emerald bg-emerald/12 border border-emerald/20 px-2.5 py-1 rounded-full">{n.cat}</span>
                    <span className="text-xs text-slate-500">{n.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-base leading-snug mb-3 group-hover:text-emerald transition-colors">{n.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{n.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-navy2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">About Us</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-5 leading-tight">{t("aboutTitle")}</motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8">{t("aboutDesc")}</motion.p>
              <motion.div variants={fadeUp}>
                <Link href={"/" + locale + "/about"}
                  className="inline-flex items-center gap-2 px-6 py-3 glass-emerald border border-emerald/25 text-emerald font-semibold rounded-full text-sm hover:bg-emerald/15 transition-all">
                  {t("aboutBtn")} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}
              className="grid grid-cols-2 gap-4">
              {[
                { icon:FlaskConical, label:"Theranostic Platform", val:"CXCR4-Targeted", color:"emerald" },
                { icon:Activity, label:"Clinical Phase", val:"Phase 3 Ready", color:"cyan" },
                { icon:FileText, label:"Publications", val:"150+ Papers", color:"gold" },
                { icon:TrendingUp, label:"Listed Since", val:"Oct 2024 · FSE", color:"emerald" },
              ].map((item,i) => (
                <div key={i} className="glass border border-white/8 rounded-2xl p-5 card-hover">
                  <div className={"w-9 h-9 flex items-center justify-center rounded-xl mb-4 " +
                    (item.color==="emerald"?"bg-emerald/15":item.color==="cyan"?"bg-cyan/15":"bg-gold/15")}>
                    <item.icon className={"w-4.5 h-4.5 " + (item.color==="emerald"?"text-emerald":item.color==="cyan"?"text-cyan":"text-gold")} />
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="font-heading font-bold text-white text-sm">{item.val}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INVESTOR STRIP ────────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-b border-white/8 bg-navy">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Listed on</p>
              <p className="text-white font-semibold">Frankfurt Stock Exchange · Prime Standard</p>
            </div>
            <div className="h-10 w-px bg-white/8 hidden sm:block" />
            <div>
              <p className="text-xs text-slate-500 mb-1">Ticker Symbol</p>
              <p className="text-2xl font-heading font-bold text-emerald">PTP</p>
            </div>
            <div className="h-10 w-px bg-white/8 hidden sm:block" />
            <div>
              <p className="text-xs text-slate-500 mb-1">ISIN</p>
              <p className="font-mono text-white font-medium">DE000A40AEG0</p>
            </div>
            <div className="h-10 w-px bg-white/8 hidden sm:block" />
            <div>
              <p className="text-xs text-slate-500 mb-1">IPO Date</p>
              <p className="text-white font-medium">October 3, 2024</p>
            </div>
            <Link href={"/" + useLocale() + "/investors"}
              className="flex items-center gap-1.5 text-sm text-emerald font-semibold hover:gap-2.5 transition-all">
              Investor Relations <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald/6 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-bold text-white mb-5 leading-tight">
              {t("ctaTitle")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">{t("ctaDesc")}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={"/" + useLocale() + "/contact"}
                className="flex items-center gap-2 px-8 py-4 bg-emerald text-navy font-bold rounded-full text-base hover:bg-emerald/90 transition-all shadow-xl shadow-emerald/25 hover:-translate-y-0.5">
                {t("ctaBtn")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={"/" + useLocale() + "/pipeline"}
                className="flex items-center gap-2 px-8 py-4 glass border border-white/10 text-white font-semibold rounded-full text-base hover:bg-white/8 transition-all">
                View Pipeline <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
`);

// ── PIPELINE PAGE ─────────────────────────────────────────────────────────────
w('src/app/[locale]/pipeline/page.tsx',`"use client";
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
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-emerald/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">Research & Development</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* CXCR4 Explainer */}
      <section className="py-20 bg-navy2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-white mb-4">{t("cxcr4Title")}</motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-6">{t("cxcr4Desc")}</motion.p>
              <motion.h3 variants={fadeUp} className="text-xl font-heading font-bold text-white mb-3">{t("theranosticTitle")}</motion.h3>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">{t("theranosticDesc")}</motion.p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="grid grid-cols-2 gap-4">
              {[
                { val:"20+", lab:"Cancers with CXCR4 Overexpression", c:"emerald" },
                { val:"1st", lab:"First-in-Class CXCR4 Theranostic Pair", c:"cyan" },
                { val:"100+", lab:"Scientific Publications on PentixaFor", c:"gold" },
                { val:"2,600+", lab:"Patients Imaged with PentixaFor", c:"emerald" },
              ].map((s,i) => (
                <div key={i} className="glass border border-white/8 rounded-2xl p-5">
                  <div className={"text-3xl font-heading font-bold mb-1 " + (s.c==="emerald"?"text-emerald":s.c==="cyan"?"text-cyan":"text-gold")}>{s.val}</div>
                  <div className="text-xs text-slate-400">{s.lab}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline Chart */}
      <section className="py-10 bg-navy border-t border-white/8">
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
                        <div className={"font-heading font-bold text-sm " + (c.color==="emerald"?"text-emerald":c.color==="cyan"?"text-cyan":"text-gold")}>{c.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{c.type}</div>
                      </td>
                    )}
                    <td className="py-4 px-4 text-xs text-slate-300 leading-snug">{ind.name}</td>
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
        <section key={ci} className={"py-24 " + (ci%2===0?"bg-navy":"bg-navy2")}>
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}
              className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div variants={fadeUp} className={"inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 " +
                  (c.color==="emerald"?"bg-emerald/12 text-emerald border border-emerald/20":c.color==="cyan"?"bg-cyan/12 text-cyan border border-cyan/20":"bg-gold/12 text-gold border border-gold/20")}>
                  <span className={"w-1.5 h-1.5 rounded-full " + (c.color==="emerald"?"bg-emerald":c.color==="cyan"?"bg-cyan":"bg-gold")} />
                  {c.type} · {c.modality}
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl font-heading font-bold text-white mb-1">{c.name}</motion.h2>
                <motion.p variants={fadeUp} className={"text-sm font-mono mb-6 " + (c.color==="emerald"?"text-emerald":c.color==="cyan"?"text-cyan":"text-gold")}>{c.formula}</motion.p>
                <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8">{c.about}</motion.p>
                <motion.ul variants={stagger} className="space-y-3">
                  {c.highlights.map((h,hi) => (
                    <motion.li key={hi} variants={fadeUp} className="flex items-start gap-3">
                      <CheckCircle2 className={"w-4 h-4 mt-0.5 shrink-0 " + (c.color==="emerald"?"text-emerald":c.color==="cyan"?"text-cyan":"text-gold")} />
                      <span className="text-slate-300 text-sm">{h}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-heading font-semibold mb-4">Clinical Indications</h3>
                {c.indications.map((ind,ii) => (
                  <motion.div key={ii} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white text-sm">{ind.name}</span>
                      <span className={"text-xs font-semibold px-2.5 py-1 rounded-full " +
                        (c.color==="emerald"?"bg-emerald/12 text-emerald":c.color==="cyan"?"bg-cyan/12 text-cyan":"bg-gold/12 text-gold")}>{ind.phase}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span className="text-xs text-slate-400">{ind.status}</span>
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
      <section className="py-20 bg-gradient-to-br from-navy2 to-navy border-t border-white/8">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-white text-center mb-12">{t("litTitle")}</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{v:t("litStat1"),l:t("litLab1")},{v:t("litStat2"),l:t("litLab2")},{v:t("litStat3"),l:t("litLab3")},{v:t("litStat4"),l:t("litLab4")}].map((s,i) => (
                <motion.div key={i} variants={fadeUp} className="text-center glass-emerald border border-emerald/15 rounded-2xl p-6">
                  <div className="text-4xl font-heading font-bold text-emerald mb-2">{s.v}</div>
                  <div className="text-xs text-slate-400 leading-snug">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
`);

console.log('\n✅ Phase 3 done — Home + Pipeline pages\n');
