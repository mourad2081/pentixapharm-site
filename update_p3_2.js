
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }
function r(f) { return fs.readFileSync(path.join(B,f),'utf8'); }

function toLight(c) {
  let content = c;
  content = content.replace(/bg-navy/g, "bg-[#F8FAFD]");
  content = content.replace(/bg-navy2/g, "bg-white");
  content = content.replace(/text-white/g, "text-navy");
  content = content.replace(/text-slate-300/g, "text-slate-600");
  content = content.replace(/text-slate-400/g, "text-slate-500");
  content = content.replace(/border-white\/8/g, "border-slate-200");
  content = content.replace(/border-white\/10/g, "border-slate-200");
  content = content.replace(/glass/g, "bg-white border border-slate-200 shadow-sm");
  content = content.replace(/text-emerald/g, "text-[#00B1AB]"); // using inline for safety or just keep text-emerald since emerald is mapped
  content = content.replace(/text-cyan/g, "text-[#00A3E0]");
  content = content.replace(/text-gold/g, "text-[#F2A900]");
  return content;
}

// Update all existing pages
const pages = [
  'src/app/[locale]/about/page.tsx',
  'src/app/[locale]/pipeline/page.tsx',
  'src/app/[locale]/investors/page.tsx',
  'src/app/[locale]/news/page.tsx',
  'src/app/[locale]/contact/page.tsx',
  'src/app/[locale]/careers/page.tsx',
  'src/app/[locale]/iis/page.tsx',
];

pages.forEach(p => {
  if (fs.existsSync(path.join(B,p))) {
    let content = r(p);
    content = toLight(content);
    w(p, content);
  }
});

// Since About page needs Stats embedded, we will rewrite About page entirely to include Stats.
w('src/app/[locale]/about/page.tsx', `"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Trophy, Calendar, Users, FlaskConical, Activity, BookOpen, Target, ShieldCheck } from "lucide-react";

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

      {/* Embedded Stats Section */}
      <section className="py-20 bg-[#F8FAFD]">
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

      {/* Leadership */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <Users className="w-6 h-6 text-[#00A3E0]" />
              <h2 className="text-3xl font-heading font-extrabold text-[#002A54]">Executive Leadership</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {TEAM.map((m,i) => (
                 <motion.div key={i} variants={fadeUp} whileHover={{y:-5}} className="bg-[#F8FAFD] border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all group overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A3E0]/5 rounded-bl-[100px] transition-transform group-hover:scale-150" />
                   <div className="flex items-center gap-5 mb-5 relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow shadow-[#002A54]/5 flex items-center justify-center">
                       <span className="text-[#00A3E0] font-heading font-extrabold text-lg">{m.init}</span>
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
`);
console.log("Rewrote About logic integrating Stats, applied light theme across standard pages.");
