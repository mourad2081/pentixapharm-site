
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }
function r(f) { return fs.readFileSync(path.join(B,f),'utf8'); }

// ── 6. FOOTER ─────────────────────────────────────────────────────────────
let footer = r('src/components/layout/Footer.tsx');
if (!footer.includes('href={"/" + locale + "/careers"}')) {
  // We'll replace the existing Links block
  footer = footer.replace(/links: \[([\s\S]*?)\]/g, `links: [
      { label: t("home"), href: "/" + locale },
      { label: t("pipeline"), href: "/" + locale + "/pipeline" },
      { label: t("about"), href: "/" + locale + "/about" },
      { label: "Careers", href: "/" + locale + "/careers" }
    ]`);
  // And replace the logo in the footer to match navbar "Pentixa[pharm]" and Atom icon
  footer = footer.replace(/<span className="font-heading font-bold text-white text-\[22px\] tracking-tight">.*?<\/span>/s, `<span className="font-heading font-bold text-white text-[22px] tracking-tight">Pentixa<span className="text-emerald">pharm</span></span>`);
  footer = footer.replace(/<Activity className="w-6 h-6 text-emerald" \/>/, `<Atom className="w-6 h-6 text-emerald" />`);
  // Import Atom if not there
  if (!footer.includes('Atom')) {
    footer = footer.replace(/import \{.*?\} from "lucide-react";/, `import { Mail, Phone, MapPin, ArrowRight, Activity, Atom } from "lucide-react";`);
  }
  fs.writeFileSync(path.join(B,'src/components/layout/Footer.tsx'), footer, 'utf8');
  console.log('✓ src/components/layout/Footer.tsx');
}


// ── 7. HOME PAGE (Add Spline & Dynamic 3D) ──────────────────────────────
w('src/app/[locale]/page.tsx',`"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, FlaskConical, Activity, FileText, Users, TrendingUp, ChevronRight, ExternalLink, Microscope, Zap, Atom } from "lucide-react";
import Spline from '@splinetool/react-spline';

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const NEWS = [
  { date:"Mar 31, 2026", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as CTO", excerpt:"Appointment strengthens board team to support Phase 3 PANDA program and commercialization readiness." },
  { date:"Feb 25, 2026", cat:"Regulatory", title:'FDA "Study May Proceed" for Dual Theranostic INDs in CXCR4 Hemato-Oncology', excerpt:"INDs for PentixaFor and PentixaTher active after FDA 30-day safety review in AML and Multiple Myeloma." },
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
        {/* Animated background / Spline 3D */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy2 to-navy" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-[100px] animate-[pulse_6s_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_8s_infinite]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,177,171,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,177,171,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Spline Base Layer */}
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none" style={{ filter: "saturate(1.2)" }}>
           {/* Fallback to CSS animations when Spline loads */}
           <Spline scene="https://prod.spline.design/6Wq1Q7YGyMvqFl9J/scene.splinecode" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-24 pointer-events-auto">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* Tag */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium text-emerald bg-emerald/10 border border-emerald/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-ping" />
              <span>{t("heroTag")}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.05] mb-6 max-w-4xl mx-auto drop-shadow-xl">
              Improving Lives Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">Precision Radiopharmaceuticals</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
              {t("heroSub")}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={"/" + locale + "/pipeline"}
                className="flex items-center gap-2 px-8 py-4 bg-emerald text-navy font-bold rounded-full text-base transition-all shadow-xl shadow-emerald/25 hover:shadow-emerald/40 hover:-translate-y-1 hover:bg-white group cursor-pointer relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">{t("ctaPipeline")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </Link>
              <Link href={"/" + locale + "/investors"}
                className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-full text-base hover:bg-white/15 transition-all cursor-pointer">
                {t("ctaIR")} <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto pointer-events-auto">
              {[
                { val:t("stat1val"), lab:t("stat1lab"), icon:Users },
                { val:t("stat2val"), lab:t("stat2lab"), icon:Atom },
                { val:t("stat3val"), lab:t("stat3lab"), icon:FileText },
                { val:t("stat4val"), lab:t("stat4lab"), icon:Activity },
              ].map((s,i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }} className="text-center py-5 px-3 bg-navy2/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg relative overflow-hidden group">
                  <div className="absolute -inset-10 bg-gradient-to-r from-emerald/0 via-emerald/10 to-emerald/0 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <s.icon className="w-6 h-6 text-emerald mx-auto mb-2 opacity-80" />
                  <div className="text-3xl font-heading font-bold text-white mb-1 group-hover:text-cyan transition-colors">{s.val}</div>
                  <div className="text-xs text-slate-400 font-medium">{s.lab}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PIPELINE PREVIEW ──────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy2" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, margin:"-100px"}} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-cyan text-sm font-medium uppercase tracking-widest bg-cyan/10 px-4 py-1.5 rounded-full border border-cyan/20">Pipeline</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-5 mb-4">{t("pipelineTitle")}</h2>
              <p className="text-slate-400 max-w-xl mx-auto">{t("pipelineDesc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {PIPELINE.map((p,i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-navy/80 backdrop-blur-lg border border-white/10 shadow-xl rounded-3xl p-8 transition-all group overflow-hidden relative">
                  <div className={"absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity " + (p.color==="emerald"?"bg-emerald":p.color==="cyan"?"bg-cyan":"bg-gold")} />
                  <div className={"w-12 h-12 flex items-center justify-center rounded-2xl mb-6 shadow-lg " +
                    (p.color==="emerald" ? "bg-emerald/10 text-emerald shadow-emerald/20" :
                     p.color==="cyan" ? "bg-cyan/10 text-cyan shadow-cyan/20" :
                     "bg-gold/10 text-gold shadow-gold/20")}>
                    <p.icon className="w-6 h-6" />
                  </div>
                  <div className={"inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border mb-4 " +
                    (p.color==="emerald" ? "bg-emerald/15 text-emerald border-emerald/20" :
                     p.color==="cyan" ? "bg-cyan/15 text-cyan border-cyan/20" :
                     "bg-gold/15 text-gold border-gold/20")}>
                     {p.type}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{p.name}</h3>
                  <p className={"text-sm font-mono mb-6 " + (p.color==="emerald"?"text-emerald":p.color==="cyan"?"text-cyan":"text-gold")}>{p.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-white/10 mt-auto">
                    <Activity className="w-4 h-4 text-emerald" />
                    <span className="text-sm text-white font-medium">{p.phase}</span>
                    <span className="text-xs text-slate-500 truncate ml-auto">{p.ind}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link href={"/" + locale + "/pipeline"}
                className="inline-flex items-center gap-2 text-emerald text-sm font-semibold hover:gap-3 transition-all">
                View Comprehensive Pipeline <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW (WITH IMAGE) ──────────────────────────────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.span variants={fadeUp} className="text-emerald font-bold text-sm uppercase tracking-widest block mb-2">Pentixapharm Group</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6 leading-tight">Advanced CXCR4-Targeted Radiopharmaceuticals</motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-8 text-lg">{t("aboutDesc")}</motion.p>
              
              <motion.div variants={stagger} className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon:FlaskConical, label:"Platform", val:"Theranostics", color:"text-emerald" },
                  { icon:Activity, label:"Clinical Stage", val:"Phase 3 Ready", color:"text-cyan" },
                  { icon:Users, label:"Team", val:"Expert Leadership", color:"text-navy" },
                  { icon:TrendingUp, label:"Ticked On", val:"Frankfurt SE", color:"text-emerald" },
                ].map((item,i) => (
                  <motion.div key={i} variants={fadeUp} className="flex flex-col gap-1">
                    <item.icon className={"w-7 h-7 mb-2 " + item.color} />
                    <p className="font-heading font-bold text-navy text-lg">{item.val}</p>
                    <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link href={"/" + locale + "/about"}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-full text-sm hover:bg-emerald hover:text-navy transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  {t("aboutBtn")} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
              {/* Image composite */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-emerald/10">
                 <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2625&auto=format&fit=crop" alt="Laboratory precision" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 shadow-2xl flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold mb-1">PANDA Protocol</p>
                      <p className="text-xs text-white/80">Global Phase 3 Study</p>
                    </div>
                    <div className="w-10 h-10 bg-emerald text-navy rounded-full flex items-center justify-center font-bold font-mono text-xs">P3</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-navy2">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-cyan text-sm font-medium uppercase tracking-widest bg-cyan/10 px-4 py-1.5 rounded-full border border-cyan/20">Press Releases</span>
                <h2 className="text-4xl font-heading font-bold text-white mt-4">{t("newsTitle")}</h2>
              </div>
              <Link href={"/" + locale + "/news"} className="flex flex-1 md:flex-none items-center gap-1.5 text-sm font-semibold text-emerald hover:text-white transition-colors bg-white/5 md:bg-transparent px-5 py-2.5 rounded-full md:p-0">
                View All News & Announcements <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {NEWS.map((n,i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-navy border border-white/10 rounded-2xl p-7 shadow-lg hover:border-emerald/40 transition-all cursor-pointer group flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-navy bg-emerald px-3 py-1 rounded-full shadow shadow-emerald/20">{n.cat}</span>
                    <span className="text-xs text-slate-400 font-mono tracking-wider">{n.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg leading-snug mb-3 group-hover:text-emerald transition-colors">{n.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{n.excerpt}</p>
                  <div className="flex items-center gap-2 text-cyan font-semibold text-xs mt-auto">
                    Read Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INVESTOR STRIP ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-emerald border-y border-emerald">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-6 text-navy">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Listed on</p>
              <p className="font-bold text-lg">Frankfurt Stock Exchange</p>
            </div>
            <div className="h-10 w-px bg-navy/20 hidden md:block" />
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Ticker Symbol</p>
              <p className="text-3xl font-heading font-bold leading-none">PTP</p>
            </div>
            <div className="h-10 w-px bg-navy/20 hidden md:block" />
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">ISIN</p>
              <p className="font-mono font-bold text-lg">DE000A40AEG0</p>
            </div>
            <div className="h-10 w-px bg-navy/20 hidden lg:block" />
            <Link href={"/" + useLocale() + "/investors"}
              className="px-6 py-2.5 bg-navy text-white rounded-full font-bold text-sm hover:bg-white hover:text-navy hover:shadow-xl transition-all shadow-lg flex items-center gap-2">
              Investor Hub <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-navy2">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="max-w-3xl mx-auto backdrop-blur-sm bg-navy/50 p-12 rounded-3xl border border-white/10 shadow-2xl">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t("ctaTitle")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-300 mx-auto mb-10 text-lg leading-relaxed">{t("ctaDesc")}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href={"/" + useLocale() + "/contact"}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-navy font-bold rounded-full text-sm hover:bg-white transition-all shadow-xl shadow-emerald/20 hover:-translate-y-1 hover:shadow-2xl">
                {t("ctaBtn")} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
`);
console.log("Updated Spline deps and rewrote src/app/[locale]/page.tsx completely!");
