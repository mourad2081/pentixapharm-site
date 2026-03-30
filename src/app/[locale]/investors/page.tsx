"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TrendingUp, FileText, Mail, Phone, BarChart3, ExternalLink, Calendar, Building2 } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

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
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00B1AB] text-sm font-medium uppercase tracking-widest">Investor Relations</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-navy mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stock Info */}
      <section className="py-16 bg-[#F8FAFD]2 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-heading font-bold text-navy mb-8">{t("stockTitle")}</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label:"Ticker", val:"PTP" },
                { label:"Exchange", val:"Frankfurt Prime Standard" },
                { label:"ISIN", val:"DE000A40AEG0" },
                { label:"WKN", val:"A40AEG" },
                { label:"IPO Price", val:"€5.10" },
              ].map((s,i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-5 text-center">
                  <div className="text-xs text-slate-500 mb-2">{s.label}</div>
                  <div className="font-heading font-bold text-navy text-base">{s.val}</div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-white/4 border border-slate-200 rounded-xl px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                Stock quote data: visit <a href="https://www.boerse-frankfurt.de/equity/pentixapharm-holding-ag" target="_blank" className="text-[#00B1AB] hover:underline ml-1">Börse Frankfurt</a>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Financials */}
      <section className="py-20 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <BarChart3 className="w-5 h-5 text-[#00B1AB]" />
              <h2 className="text-2xl font-heading font-bold text-navy">{t("finTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {FINANCIALS.map((f,i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6 card-hover">
                  <p className="text-xs text-slate-500 mb-2">{f.label}</p>
                  <p className="text-3xl font-heading font-bold text-navy mb-1">{f.value}</p>
                  <p className="text-xs text-slate-600">{f.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Calendar + Reports */}
      <section className="py-20 bg-[#F8FAFD]2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Calendar */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-[#00B1AB]" />
                <h2 className="text-2xl font-heading font-bold text-navy">{t("calTitle")}</h2>
              </motion.div>
              <div className="space-y-3">
                {CALENDAR.map((c,i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-xl p-4">
                    <span className="text-[#00B1AB] text-xs font-semibold bg-emerald/10 border border-emerald/20 px-2.5 py-1 rounded-full whitespace-nowrap">{c.date}</span>
                    <p className="text-slate-600 text-sm">{c.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reports */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-[#00A3E0]" />
                <h2 className="text-2xl font-heading font-bold text-navy">Reports & Documents</h2>
              </motion.div>
              <div className="space-y-3">
                {REPORTS.map((r,i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="flex items-center justify-between bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-xl p-4 card-hover cursor-pointer group">
                    <div>
                      <p className="text-navy font-medium text-sm group-hover:text-[#00B1AB] transition-colors">{r.name}</p>
                      <p className="text-slate-500 text-xs">{r.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 bg-white/5 border border-slate-200 px-2 py-0.5 rounded">{r.type}</span>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-[#00B1AB] transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IR Contact */}
      <section className="py-20 bg-[#F8FAFD] border-t border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="max-w-lg mx-auto text-center">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-[#00B1AB]" />
              <h2 className="text-2xl font-heading font-bold text-navy">Investor Relations Contact</h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-500 mb-8">For investor enquiries, financial results or media requests, please contact our IR team.</motion.p>
            <motion.div variants={stagger} className="flex flex-col gap-3 items-center">
              <motion.a variants={fadeUp} href={"mailto:" + t("irContact")}
                className="flex items-center gap-3 px-7 py-3.5 bg-emerald text-navy font-bold rounded-full hover:bg-emerald/90 transition-all">
                <Mail className="w-4 h-4" /> {t("irContact")}
              </motion.a>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-slate-500 text-sm">
                <Phone className="w-4 h-4 text-[#00B1AB]/60" /> {t("irPhone")}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
