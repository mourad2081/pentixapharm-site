"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { TrendingUp, FileText, Mail, Phone, BarChart3, ExternalLink, Calendar, Building2, ShieldCheck, Globe2, ArrowRight, Download, PieChart, Landmark } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const FINANCIALS = [
  { label: "Cash Position (H1 2025)", value: "€43.2M", note: "Includes IPO proceeds & convertible bonds", icon: Landmark },
  { label: "Market Cap (Approx)", value: "€82.4M", note: "Frankfurt Prime Standard segment", icon: PieChart },
  { label: "Shares Outstanding", value: "19.5M", note: "Total ordinary shares issued", icon: TrendingUp },
];

const CALENDAR = [
  { date: "May 15, 2026", event: "Quarterly Statement Q1 2026", cat: "Financial Reports" },
  { date: "June 24, 2026", event: "Annual General Meeting (AGM) 2026", cat: "Governance" },
  { date: "Sept 30, 2026", event: "Interim Report H1 2026", cat: "Financial Reports" },
  { date: "Oct 12, 2026", event: "PANDA Ph3 Clinical Update Webcast", cat: "Investor Event" },
];

const REPORTS = [
  { name: "Annual Report 2025", date: "Apr 2026", type: "PDF", size: "2.4 MB" },
  { name: "Interim Statement H1 2025", date: "Sep 2025", type: "PDF", size: "1.1 MB" },
  { name: "Company Presentation Q1 2026", date: "Mar 2026", type: "PDF", size: "4.8 MB" },
  { name: "SDA Clinical Data Summary", date: "Feb 2026", type: "PDF", size: "0.9 MB" },
];

export default function InvestorsPage() {
  const locale = useLocale();
  const t = useTranslations("investors");

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-[#002A54]">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[#001D3D] opacity-[0.02]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.span variants={fadeUp} className="text-cyan text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-cyan/10 px-8 py-3 rounded-full inline-block mb-10 border border-cyan/20 italic">Shareholder Relations</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 italic tracking-tighter">Value Through <span className="text-teal">Precision</span></motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic max-w-3xl mb-12">
              Pentixapharm is committed to transparent corporate governance and value creation. We are listed on the Frankfurt Stock Exchange (Prime Standard) under the ticker <span className="font-bold text-navy">PTP</span>.
            </motion.p>
            <div className="flex gap-4">
               <div className="flex flex-col gap-1 items-start bg-slate-50 border border-slate-200 px-8 py-4 rounded-3xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">ISIN</span>
                  <span className="text-lg font-heading font-extrabold italic">DE000A40AEG0</span>
               </div>
               <div className="flex flex-col gap-1 items-start bg-slate-50 border border-slate-200 px-8 py-4 rounded-3xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">WKN</span>
                  <span className="text-lg font-heading font-extrabold italic">A40AEG</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE DASHBOARD PREVIEW ────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-12">
                  <div className="relative group">
                     <div className="absolute -inset-4 bg-cyan/5 rounded-[4rem] group-hover:bg-cyan/10 transition-colors blur-2xl" />
                     <div className="bg-white p-4 rounded-[4rem] shadow-2xl relative overflow-hidden border border-slate-100">
                        <img 
                          src="/pentixapharm_investor_dashboard_summary_1774917254926.png" 
                          className="w-full rounded-[3.5rem] shadow-lg group-hover:scale-[1.01] transition-transform duration-700 h-[600px] object-cover contrast-110" 
                          alt="Investor Dashboard" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002A54]/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                           <div className="max-w-md">
                              <h3 className="text-3xl font-heading font-extrabold text-white italic mb-4">Strategic Performance Dashboard</h3>
                              <p className="text-white/80 text-sm italic font-light">Real-time tracking of clinical progression, capital allocation, and market performance across our global network.</p>
                           </div>
                           <button className="px-10 py-5 bg-cyan text-navy font-heading font-extrabold rounded-full hover:bg-white hover:text-navy transition-all shadow-2xl italic tracking-widest text-[10px]">
                              LAUNCH ANALYTICS PORTAL
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── KEY PERFORMANCE METRICS ───────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-200">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-10">
               {FINANCIALS.map((f, i) => (
                 <motion.div key={i} whileHover={{y:-10}} className="bg-[#F8FAFD] p-12 rounded-[3.5rem] border border-slate-50 shadow-xl group transition-all text-center">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-inner flex items-center justify-center mb-8 mx-auto group-hover:bg-[#002A54] group-hover:text-white transition-all transform group-hover:rotate-12">
                       <f.icon className="w-8 h-8 text-teal"/>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 italic">{f.label}</p>
                    <h3 className="text-4xl font-heading font-extrabold text-[#002A54] mb-3 italic tracking-tight">{f.value}</h3>
                    <p className="text-slate-500 text-xs italic font-light">{f.note}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── REPORTS & DOCUMENTS ──────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Download Center */}
            <div>
              <span className="text-cyan font-heading font-extrabold text-[10px] tracking-[0.4em] uppercase mb-6 block italic">Knowledge Base</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54] leading-tight mb-12 italic tracking-tighter">Reporting <span className="text-cyan">Framework</span></h2>
              <div className="space-y-6">
                {REPORTS.map((r, i) => (
                  <motion.div key={i} whileHover={{scale:1.02}} className="flex items-center justify-between p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-lg group cursor-pointer hover:border-cyan/30 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-cyan/10 transition-colors"><FileText className="w-5 h-5 text-slate-400 group-hover:text-cyan" /></div>
                      <div>
                        <h4 className="font-heading font-extrabold text-[#002A54] text-lg italic tracking-tight">{r.name}</h4>
                        <div className="flex gap-4 mt-1">
                           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{r.date}</span>
                           <span className="text-[10px] text-cyan font-bold uppercase tracking-widest">{r.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-[#002A54] group-hover:text-white transition-all shadow-inner"><Download className="w-4 h-4" /></button>
                  </motion.div>
                ))}
              </div>
              <button className="mt-12 flex items-center gap-3 text-[10px] font-heading font-extrabold text-navy uppercase tracking-widest bg-white border border-slate-200 px-10 py-5 rounded-full hover:bg-[#002A54] hover:text-white hover:border-navy transition-all shadow-xl italic group">
                 ACCESS COMPLETE ARCHIVE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
              </button>
            </div>

            {/* Financial Calendar */}
            <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity"><Calendar className="w-48 h-48" /></div>
               <span className="text-teal font-heading font-extrabold text-[10px] tracking-[0.4em] uppercase mb-6 block italic">Corporate Events</span>
               <h2 className="text-4xl font-heading font-extrabold text-[#002A54] mb-12 italic tracking-tighter">Strategic <span className="text-teal">Calendar</span></h2>
               <div className="space-y-10">
                 {CALENDAR.map((c, i) => (
                   <div key={i} className="flex gap-8 items-start relative pb-10 border-b border-slate-50 last:border-0 last:pb-0">
                      <div className="flex flex-col items-center min-w-[100px]">
                         <span className="text-2xl font-heading font-extrabold text-[#002A54] tracking-tighter italic">{c.date.split(",")[0]}</span>
                         <span className="text-[9px] font-bold text-teal uppercase tracking-widest mt-1 opacity-60">2026</span>
                      </div>
                      <div>
                         <p className="text-[10px] text-teal font-bold uppercase tracking-[0.2em] mb-2">{c.cat}</p>
                         <h4 className="text-xl font-heading font-extrabold text-[#002A54] italic leading-tight">{c.event}</h4>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IR CONTACT ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-lg text-center">
          <div className="w-24 h-24 rounded-[2.5rem] bg-navy flex items-center justify-center mx-auto mb-10 shadow-2xl group hover:rotate-12 transition-transform">
             <Building2 className="w-10 h-10 text-cyan" />
          </div>
          <h2 className="text-4xl font-heading font-extrabold text-[#002A54] mb-8 italic tracking-tighter">IR Support <span className="text-cyan">Direct</span></h2>
          <p className="text-slate-500 text-lg leading-relaxed font-light italic mb-12">
            For share price inquiries, institutional data requests, or analyst meeting schedules, please contact our dedicated Shareholder Relations team.
          </p>
          <div className="space-y-6">
             <a href="mailto:ir@pentixapharm.com" className="flex items-center justify-center gap-4 py-6 bg-[#002A54] text-white font-heading font-extrabold rounded-full hover:bg-cyan hover:text-navy transition-all shadow-2xl italic tracking-widest text-xs">
                <Mail className="w-4 h-4" /> SEND IR ENQUIRY
             </a>
             <div className="flex items-center justify-center gap-3 text-slate-400 font-bold italic text-sm">
                <Phone className="w-4 h-4 text-cyan" /> +49 30 94892600
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
