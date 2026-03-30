
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }
function r(f) { return fs.readFileSync(path.join(B,f),'utf8'); }

// ── 1. COLORS AND TAILWIND (Light Theme Biotech) ───────────────────────────
let tw = r('tailwind.config.ts');
// Replace colors with Pentixapharm genuine feel:
// Deep Corporate Blue: #002A54 (navy)
// Bright Cyan/Blue: #00A3E0 (cyan)
// Light Gray backgrounds: #F8FAFD (slate-50)
tw = tw.replace(/navy:"#041A2F",navy2:"#0A2A4A",navy3:"#133F6E",/g, 'navy:"#002A54",navy2:"#001D3D",navy3:"#001122",');
tw = tw.replace(/cyan:"#00D2FF",gold:"#FFB81C"/g, 'cyan:"#00A3E0",gold:"#F2A900"'); // using Pentixapharm cyan, and a subtle gold/orange for highlight
tw = tw.replace(/emerald:"#00B1AB",emeraldDark:"#008A85"/g, 'emerald:"#00B1AB",emeraldDark:"#008A85"');
fs.writeFileSync(path.join(B,'tailwind.config.ts'), tw, 'utf8');

let css = r('src/app/globals.css');
// Force light theme
css = css.replace(/body \{ @apply bg-white text-slate-800 font-sans; \}\n\.dark body \{ @apply bg-navy text-white; \}/g, 'body { @apply bg-[#F8FAFD] text-slate-800 font-sans; }');
css = css.replace(/\.glass \{[^}]+\}/g, `.glass { @apply bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm }`);
css = css.replace(/\.glass-emerald \{[^}]+\}/g, `.glass-emerald { @apply bg-[#00B1AB]/10 border border-[#00B1AB]/20 }`);
css = css.replace(/text-white/g, 'text-slate-900').replace(/border-white\/[0-9]+/g, 'border-slate-200'); // Convert many text-white to dark in classes later
fs.writeFileSync(path.join(B,'src/app/globals.css'), css, 'utf8');

// ── 2. NAVBAR (Remove Stats, Add Technology, Change Styling) ───────────────
let nav = r('src/components/layout/Navbar.tsx');
nav = nav.replace(/\{ label: t\("stats"\), href: "\/" \+ locale \+ "\/stats" \},\n    \{ label: "IIS", href: "\/" \+ locale \+ "\/iis" \},/g, 
  `{ label: "Technology", href: "/" + locale + "/technology" },\n    { label: "IIS", href: "/" + locale + "/iis" },`);
// Make navbar light matching
nav = nav.replace(/bg-navy\/90 backdrop-blur-xl/g, "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm");
nav = nav.replace(/text-white text-\[19px\]/g, "text-navy text-[19px]");
nav = nav.replace(/text-slate-300/g, "text-slate-600");
nav = nav.replace(/bg-white\/5/g, "bg-slate-100");
nav = nav.replace(/text-slate-200/g, "text-slate-800");
nav = nav.replace(/border-white\/10/g, "border-slate-200");
nav = nav.replace(/bg-navy\/95/g, "bg-white/95");
fs.writeFileSync(path.join(B,'src/components/layout/Navbar.tsx'), nav, 'utf8');

// ── 3. MESSAGES ────────────────────────────────────────────────────────────
let mEn = JSON.parse(r('messages/en.json'));
let mDe = JSON.parse(r('messages/de.json'));
delete mEn.nav.stats; delete mDe.nav.stats;
mEn.nav.technology = "Technology"; mDe.nav.technology = "Technologie";
fs.writeFileSync(path.join(B,'messages/en.json'), JSON.stringify(mEn, null, 2), 'utf8');
fs.writeFileSync(path.join(B,'messages/de.json'), JSON.stringify(mDe, null, 2), 'utf8');

// ── 4. HOME PAGE (Light Theme, Interactive Tabs, Photos) ───────────────────
w('src/app/[locale]/page.tsx', `"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, FlaskConical, Activity, FileText, Users, TrendingUp, ChevronRight, ExternalLink, Microscope, Zap, Atom, ShieldCheck, MapPin, Globe2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const NEWS = [
  { date:"Mar 31, 2026", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as CTO", excerpt:"Appointment strengthens board team to support Phase 3 PANDA program and commercialization." },
  { date:"Feb 25, 2026", cat:"Regulatory", title:'FDA "Study May Proceed" for Dual Theranostic INDs in CXCR4 Hemato-Oncology', excerpt:"INDs for PentixaFor and PentixaTher active after FDA 30-day safety review in AML and Multiple Myeloma." },
  { date:"Feb 5, 2026", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior Non-invasive PET Diagnostic for Primary Aldosteronism", excerpt:"High specificity demonstrated versus adrenal vein sampling; 28/29 patients preferred PET/CT." },
];

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("home");
  const [activePipeline, setActivePipeline] = useState(0);

  return (
    <div className="bg-[#F8FAFD] overflow-hidden text-slate-800">
      
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
        {/* Animated Background SVG CSS */}
        <div className="absolute inset-0 z-0 opacity-40">
           <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#002A54" strokeWidth="0.5" strokeOpacity="0.1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
           <div className="absolute top-20 left-10 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_6s_infinite]" />
           <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-[120px] animate-[pulse_8s_infinite]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold text-navy bg-navy/5 border border-navy/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              <span>{t("heroTag")}</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-extrabold text-navy leading-[1.1] mb-6 drop-shadow-sm">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">Radiopharmaceuticals</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed font-light">
              We are discovering, developing, and commercialising novel CXCR4-directed and CD24-directed therapies to transform oncology and endocrinology.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href={"/" + locale + "/pipeline"}
                className="flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-full text-sm transition-all shadow-xl shadow-navy/20 hover:shadow-navy/30 hover:-translate-y-1 hover:bg-cyan group">
                {t("ctaPipeline")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={"/" + locale + "/technology"}
                className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-navy font-bold rounded-full text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Explore Technology <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.2}} className="relative hidden lg:block">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop" alt="Pentixapharm Research Science" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 border border-white/20 rounded-2xl p-5 shadow-2xl flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-cyan/10 text-cyan rounded-xl flex items-center justify-center">
                       <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="text-navy font-bold">Phase 3 Ready</p>
                       <p className="text-xs text-slate-500 font-medium">PANDA Protocol</p>
                     </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS / IMPACT (Moved from inside page) ───────────────────────── */}
      <section className="py-16 bg-navy relative z-20 -mt-8 mx-4 lg:mx-12 rounded-3xl shadow-2xl overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              {[
                { val:"2,600+", lab:"Patients Imaged", icon:Users, sub:"Multiple indications worldwide" },
                { val:"150+", lab:"Publications", icon:FileText, sub:"CXCR4 literature" },
                { val:"5", lab:"Active Trials", icon:Activity, sub:"Global clinical operations" },
                { val:"1st", lab:"In-Class", icon:Atom, sub:"Theranostic CXCR4 pair" },
              ].map((s,i) => (
                <div key={i} className="text-center px-4 group">
                  <s.icon className="w-8 h-8 text-cyan mx-auto mb-4 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-4xl font-heading font-extrabold text-white mb-2">{s.val}</div>
                  <div className="text-sm text-white font-bold mb-1">{s.lab}</div>
                  <div className="text-xs text-slate-400">{s.sub}</div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* ── INTERACTIVE PIPELINE ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="text-center mb-16">
              <span className="text-navy text-sm font-bold uppercase tracking-widest bg-navy/5 px-4 py-1.5 rounded-full border border-navy/10">Pipeline</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mt-5 mb-4">{t("pipelineTitle")}</h2>
              <p className="text-slate-600 max-w-xl mx-auto">{t("pipelineDesc")}</p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
               {/* Tabs */}
               <div className="md:w-1/3 bg-slate-50 border-r border-slate-100 p-6 flex flex-col gap-3">
                  {[
                    {name:"PentixaFor", type:"Diagnostic", icon:Microscope, color:"bg-emerald/10 text-emerald"},
                    {name:"PentixaTher", type:"Therapeutic", icon:Zap, color:"bg-cyan/10 text-cyan"},
                    {name:"GT-008", type:"Antibody Platform", icon:FlaskConical, color:"bg-[#F2A900]/10 text-[#F2A900]"}
                  ].map((p,i) => (
                    <button key={i} onClick={() => setActivePipeline(i)}
                      className={"flex items-center gap-4 text-left p-4 rounded-xl transition-all border outline-none " + (activePipeline===i ? "bg-white border-slate-200 shadow-sm" : "border-transparent hover:bg-slate-100")}>
                       <div className={"w-10 h-10 flex items-center justify-center rounded-lg " + p.color}><p.icon className="w-5 h-5"/></div>
                       <div>
                         <p className="font-bold text-navy">{p.name}</p>
                         <p className="text-xs text-slate-500 font-medium">{p.type}</p>
                       </div>
                    </button>
                  ))}
               </div>
               {/* Content Map */}
               <div className="md:w-2/3 p-8 lg:p-12">
                  <AnimatePresence mode="wait">
                    {[
                      { name:"PentixaFor", label:"[⁶⁸Ga]Ga-PentixaFor", phase:"Phase 3 Ready", ind:"Primary Aldosteronism / TRH", desc:"PentixaFor is a first-in-class gallium-68-labelled radiodiagnostic targeting CXCR4. It enables high-resolution PET/CT imaging. Phase 3 PANDA study active." },
                      { name:"PentixaTher", label:"[⁹⁰Y]Y / [¹⁷⁷Lu]Lu-PentixaTher", phase:"Phase 1/2", ind:"AML, Multiple Myeloma", desc:"PentixaTher delivers targeted radiation to cancer cells overexpressing the CXCR4 receptor. Currently at the 4th of 5 dose levels in the PENTILULA AML study." },
                      { name:"GT-008", label:"Anti-CD24 Glycan mAb", phase:"Preclinical", ind:"Breast, Ovarian Cancer", desc:"First-in-class glycan-dependent anti-CD24 monoclonal antibody. Demonstrated single-dose complete responses in preclinical breast cancer models." }
                    ].map((p, i) => activePipeline === i && (
                      <motion.div key={i} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}}>
                         <div className="mb-6">
                           <h3 className="text-3xl font-heading font-extrabold text-navy mb-1">{p.name}</h3>
                           <p className="text-sm font-mono text-cyan font-bold">{p.label}</p>
                         </div>
                         <p className="text-slate-600 leading-relaxed mb-8">{p.desc}</p>
                         
                         <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8">
                            <p className="text-xs text-slate-500 font-bold uppercase mb-4 tracking-wider">Clinical Status</p>
                            <div className="flex justify-between items-center mb-2">
                               <span className="text-sm font-bold text-navy">{p.ind}</span>
                               <span className="text-xs font-bold bg-navy text-white px-3 py-1 rounded-full">{p.phase}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mt-4 flex">
                               <div className={"h-full transition-all " + (i===0?"w-4/5 bg-emerald":i===1?"w-2/5 bg-cyan":"w-1/5 bg-[#F2A900]")} />
                            </div>
                         </div>

                         <Link href={"/" + locale + "/pipeline"} className="inline-flex items-center gap-2 text-cyan font-bold text-sm hover:gap-3 transition-all">
                           Explore Full Details <ArrowRight className="w-4 h-4" />
                         </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW (WITH IMAGE) ──────────────────────────────────────── */}
      <section className="py-28 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop" alt="Lab Research" className="w-full h-64 object-cover rounded-3xl shadow-lg mt-8" />
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop" alt="Clinical Trials" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
             </motion.div>
             
             <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
               <motion.span variants={fadeUp} className="text-cyan font-bold text-sm uppercase tracking-widest block mb-2">Our Company</motion.span>
               <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-6 leading-tight">Driven by Science. Designed for Patients.</motion.h2>
               <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-8 text-lg">{t("aboutDesc")}</motion.p>
               
               <motion.div variants={stagger} className="space-y-4 mb-10">
                 {[
                   { icon:Globe2, label:"Located in Berlin & Würzburg, Germany" },
                   { icon:Activity, label:"Publicly listed on Frankfurt SE Prime Standard" },
                   { icon:Atom, label:"Executing the first-in-class CXCR4 Theranostic strategy" },
                 ].map((item,i) => (
                   <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-cyan" />
                     </div>
                     <p className="text-slate-700 font-medium text-sm">{item.label}</p>
                   </motion.div>
                 ))}
               </motion.div>

               <motion.div variants={fadeUp}>
                 <Link href={"/" + locale + "/about"}
                   className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-bold rounded-full text-sm hover:bg-cyan hover:text-navy transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                   {t("aboutBtn")} <ArrowRight className="w-4 h-4" />
                 </Link>
               </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-navy text-sm font-bold uppercase tracking-widest bg-navy/5 px-4 py-1.5 rounded-full border border-navy/10">Communications</span>
                <h2 className="text-4xl font-heading font-extrabold text-navy mt-4">{t("newsTitle")}</h2>
              </div>
              <Link href={"/" + locale + "/news"} className="flex flex-1 md:flex-none items-center gap-1.5 text-sm font-bold text-navy hover:text-cyan transition-colors bg-white border border-slate-200 shadow-sm md:bg-transparent px-5 py-2.5 rounded-full md:p-0 md:shadow-none md:border-none">
                View All News & Announcements <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {NEWS.map((n,i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all cursor-pointer group flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold text-navy bg-slate-100 px-3 py-1 rounded-full">{n.cat}</span>
                    <span className="text-xs text-slate-500 font-mono tracking-wider">{n.date}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-navy text-lg leading-snug mb-3 group-hover:text-cyan transition-colors">{n.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{n.excerpt}</p>
                  <div className="flex items-center gap-2 text-cyan font-bold text-xs mt-auto">
                    Read Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-navy text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/20 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              {t("ctaTitle")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-300 mx-auto mb-10 text-lg leading-relaxed font-light">{t("ctaDesc")}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href={"/" + useLocale() + "/contact"}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-navy font-bold rounded-full text-sm hover:bg-white transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl">
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
console.log("Written Phase 3 Home Page updates.");
