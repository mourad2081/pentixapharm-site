"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  TrendingUp, FileText, Mail, Phone, BarChart3, ExternalLink, 
  Calendar, Building2, ArrowRight, Sparkles, Globe2, Activity 
} from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const FINANCIALS = [
  { label:"Net Loss FY2024", value:"€12.8M", note:"Full year audited" },
  { label:"Adj. Net Loss FY2025 Guidance", value:"~€18M", note:"Revised from €23.5M" },
  { label:"Revenue 9M 2025", value:"€117K", note:"Milestone and license fees" },
  { label:"Balance Sheet (Sep '25)", value:"€43M", note:"Total assets" },
  { label:"IPO Gross Proceeds", value:"€19.9M", note:"October 2024 @ €5.10/share" },
  { label:"Convertible Bond", value:"€18.5M", note:"Fully subscribed, institutional" },
];

const CALENDAR = [
  { date:"Q2 2026", event:"PANDA Phase 3 IND Submission (planned)" },
  { date:"Q2 2026", event:"PentixaTher 5th dose level (PENTILULA)" },
  { date:"H2 2026", event:"Annual Report FY2025" },
  { date:"H2 2026", event:"GT-008 IND enabling study completion (planned)" },
];

const REPORTS = [
  { name:"Annual Report 2024", date:"Apr 2025", type:"PDF" },
  { name:"H1 2025 Interim Report", date:"Sep 2025", type:"PDF" },
  { name:"IPO Prospectus", date:"Oct 2024", type:"PDF" },
  { name:"Investor Presentation Q1 2026", date:"Mar 2026", type:"PDF" },
];

export default function InvestorsPage() {
  const t = useTranslations("investors");
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white transition-colors duration-700 pb-32 selection:bg-[#00BDD5] selection:text-white">
      
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <AnimatedBg />
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[600px] bg-[#00BDD5]/5 dark:bg-[#00BDD5]/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.7em] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 px-12 py-5 rounded-full inline-block mb-12 shadow-2xl italic mt-10 transition-colors">
              Institutional Investor Relations
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-7xl md:text-[11rem] font-heading font-extrabold mb-12 leading-[0.7] tracking-tighter text-[#001533] dark:text-white italic drop-shadow-sm transition-colors">
              Capital <br/><span className="text-[#00BDD5]">Transparency.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 px-12 border-x border-slate-100 dark:border-white/5 transition-colors">
              Our commitment to clear corporate governance and clinical milestone reporting ensures long-term institutional value creation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STOCK DASHBOARD ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
               <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter transition-colors p-4 border-l-4 border-[#00BDD5]">Equity Information</motion.h2>
               <motion.div variants={fadeUp} className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 shadow-xl transition-colors">
                  <Activity className="w-8 h-8 text-[#00BDD5]" />
                  <div>
                    <p className="text-[10px] font-extrabold text-[#00BDD5] uppercase tracking-widest italic mb-1 italic">Listing Standard</p>
                    <p className="text-[#001533] dark:text-white font-extrabold text-xl italic transition-colors">Frankfurt Prime Standard</p>
                  </div>
               </motion.div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
              {[
                { label:"Ticker", val:"PTP" },
                { label:"Exchange", val:"FSE Prime" },
                { label:"ISIN", val:"DE000A40AEG0" },
                { label:"WKN", val:"A40AEG" },
                { label:"IPO Price", val:"€5.10" },
                { label:"Status", val:"Listed" },
              ].map((s,i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-[#121428] border border-slate-100 dark:border-white/10 shadow-xl rounded-[2.5rem] p-10 text-center hover:scale-105 transition-all">
                  <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 italic p-2">{s.label}</div>
                  <div className="font-heading font-extrabold text-[#001533] dark:text-white text-2xl italic transition-colors">{s.val}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={fadeUp} className="flex justify-center">
              <a href="https://www.boerse-frankfurt.de/equity/pentixapharm-holding-ag" target="_blank" className="inline-flex items-center gap-6 px-12 py-6 bg-[#00BDD5] text-white rounded-2xl font-heading font-extrabold text-[11px] uppercase tracking-[0.5em] hover:bg-[#001533] transition-all shadow-4xl italic">
                Live Stock Quote <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── KEY FINANCIALS ───────────────────────────────────────────────────── */}
      <section className="py-48 bg-[#F8FAFC] dark:bg-[#121428] transition-colors duration-700">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <div className="text-center mb-32">
              <span className="text-[#00BDD5] font-heading font-extrabold text-xs tracking-[0.7em] uppercase mb-10 block italic">Core Financial Metrics</span>
              <h2 className="text-6xl md:text-[8rem] font-heading font-extrabold text-[#001533] dark:text-white leading-[0.8] tracking-tighter italic transition-colors">Balance <br/><span className="text-[#00BDD5]">Precision.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {FINANCIALS.map((f,i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-4xl rounded-[4.5rem] p-16 hover:shadow-3xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform"><BarChart3 className="w-32 h-32 text-[#00BDD5]" /></div>
                  <p className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 mb-8 uppercase tracking-[0.4em] italic p-1 border-b border-slate-100 dark:border-white/5 transition-colors">{f.label}</p>
                  <p className="text-5xl font-heading font-extrabold text-[#001533] dark:text-white mb-6 italic tracking-tighter transition-colors">{f.value}</p>
                  <p className="text-base text-slate-400 dark:text-slate-500 font-light italic transition-colors p-2">{f.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CALENDAR & REPORTS ────────────────────────────────────────────────── */}
      <section className="py-48 bg-white dark:bg-[#0a0b16] border-y border-slate-200/50 dark:border-white/5 transition-colors duration-700">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-32">
            
            {/* Financial Calendar */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-6 mb-16 border-l-8 border-[#00BDD5] pl-10">
                <Calendar className="w-12 h-12 text-[#00BDD5]" />
                <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter transition-colors uppercase leading-none">Financial <br/><span className="text-[#00BDD5]">Calendar.</span></h2>
              </motion.div>
              <div className="space-y-8">
                {CALENDAR.map((c,i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-10 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-2xl rounded-[3.5rem] p-12 hover:bg-white dark:hover:bg-white/10 transition-all group">
                    <div className="flex flex-col items-center justify-center p-6 bg-[#001533] dark:bg-[#00BDD5] rounded-3xl group-hover:scale-110 transition-transform shadow-xl">
                       <span className="text-white dark:text-[#001533] font-heading font-extrabold text-2xl italic transition-colors leading-none">{c.date.split(' ')[0]}</span>
                       <span className="text-white/70 dark:text-[#001533]/70 font-heading font-extrabold text-[10px] uppercase tracking-widest transition-colors">{c.date.split(' ')[1]}</span>
                    </div>
                    <p className="text-[#001533] dark:text-white text-xl font-light italic leading-relaxed transition-colors">{c.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reports */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-6 mb-16 border-l-8 border-[#7B61FF] pl-10">
                <FileText className="w-12 h-12 text-[#7B61FF]" />
                <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter transition-colors uppercase leading-none">Global <br/><span className="text-[#7B61FF]">Reports.</span></h2>
              </motion.div>
              <div className="space-y-8">
                {REPORTS.map((r,i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="flex items-center justify-between bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-2xl rounded-[3.5rem] p-12 hover:bg-white dark:hover:bg-white/10 group cursor-pointer transition-all">
                    <div>
                      <p className="text-[#001533] dark:text-white font-extrabold text-2xl italic tracking-tight group-hover:text-[#00BDD5] transition-colors uppercase transition-colors">{r.name}</p>
                      <p className="text-slate-400 font-light italic text-base mt-2 transition-colors">{r.date}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-extrabold text-[#7B61FF] bg-[#7B61FF]/10 border border-[#7B61FF]/30 px-6 py-2 rounded-full uppercase tracking-widest italic">{r.type}</span>
                      <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-[#00BDD5] transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IR CONTACT ──────────────────────────────────────────────────────── */}
      <section className="py-48 bg-[#F8FAFC] dark:bg-[#121428] transition-colors duration-700">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="max-w-4xl mx-auto text-center bg-white dark:bg-[#0a0b16] p-24 rounded-[6rem] shadow-4xl border border-slate-100 dark:border-white/10 transition-colors group">
            <div className="relative z-10">
               <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-10 mb-12">
                 <div className="w-24 h-24 bg-[#001533] dark:bg-[#00BDD5] rounded-[2.5rem] flex items-center justify-center shadow-4xl group-hover:rotate-[15deg] transition-all duration-700">
                    <Building2 className="w-12 h-12 text-white dark:text-[#001533] transition-colors" />
                 </div>
                 <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter transition-colors uppercase leading-[0.8] transition-colors">Investor <br/> <span className="text-[#00BDD5]">Contacts.</span></h2>
               </motion.div>
               <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl font-light italic mb-20 max-w-2xl mx-auto transition-colors">For analyst enquiries, financial results, or global capital market requests, please connect with our IR synthesis team.</motion.p>
               <motion.div variants={stagger} className="flex flex-col sm:flex-row gap-12 items-center justify-center">
                 <motion.a variants={fadeUp} href="mailto:ir@pentixapharm.com"
                   className="flex items-center gap-8 px-16 py-8 bg-[#001533] dark:bg-white text-white dark:text-[#001533] font-heading font-extrabold rounded-3xl hover:bg-[#00BDD5] dark:hover:bg-[#00BDD5] dark:hover:text-white transition-all shadow-4xl italic text-[11px] uppercase tracking-[0.5em]">
                   <Mail className="w-6 h-6 border-r border-white/20 dark:border-[#001533]/20 pr-4" /> Message Desk
                 </motion.a>
                 <motion.div variants={fadeUp} className="flex items-center gap-6 text-slate-400 dark:text-slate-500 text-lg italic transition-colors">
                   <Phone className="w-6 h-6 text-[#00BDD5]" /> +49 (0) 931 3292 633
                 </motion.div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
