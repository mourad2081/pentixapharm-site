
const fs = require('fs');
const path = require('path');
const B = __dirname;
const w = (f, c) => { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); };

// ── INVESTORS PAGE ────────────────────────────────────────────────────────────
w('src/app/[locale]/investors/page.tsx',`"use client";
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
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">Investor Relations</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stock Info */}
      <section className="py-16 bg-navy2 border-y border-white/8">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-heading font-bold text-white mb-8">{t("stockTitle")}</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label:"Ticker", val:"PTP" },
                { label:"Exchange", val:"Frankfurt Prime Standard" },
                { label:"ISIN", val:"DE000A40AEG0" },
                { label:"WKN", val:"A40AEG" },
                { label:"IPO Price", val:"€5.10" },
              ].map((s,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-5 text-center">
                  <div className="text-xs text-slate-500 mb-2">{s.label}</div>
                  <div className="font-heading font-bold text-white text-base">{s.val}</div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-slate-400 bg-white/4 border border-white/8 rounded-xl px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                Stock quote data: visit <a href="https://www.boerse-frankfurt.de/equity/pentixapharm-holding-ag" target="_blank" className="text-emerald hover:underline ml-1">Börse Frankfurt</a>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Financials */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <BarChart3 className="w-5 h-5 text-emerald" />
              <h2 className="text-2xl font-heading font-bold text-white">{t("finTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {FINANCIALS.map((f,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-6 card-hover">
                  <p className="text-xs text-slate-500 mb-2">{f.label}</p>
                  <p className="text-3xl font-heading font-bold text-white mb-1">{f.value}</p>
                  <p className="text-xs text-slate-600">{f.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Calendar + Reports */}
      <section className="py-20 bg-navy2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Calendar */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-emerald" />
                <h2 className="text-2xl font-heading font-bold text-white">{t("calTitle")}</h2>
              </motion.div>
              <div className="space-y-3">
                {CALENDAR.map((c,i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 glass border border-white/8 rounded-xl p-4">
                    <span className="text-emerald text-xs font-semibold bg-emerald/10 border border-emerald/20 px-2.5 py-1 rounded-full whitespace-nowrap">{c.date}</span>
                    <p className="text-slate-300 text-sm">{c.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reports */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-cyan" />
                <h2 className="text-2xl font-heading font-bold text-white">Reports & Documents</h2>
              </motion.div>
              <div className="space-y-3">
                {REPORTS.map((r,i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="flex items-center justify-between glass border border-white/8 rounded-xl p-4 card-hover cursor-pointer group">
                    <div>
                      <p className="text-white font-medium text-sm group-hover:text-emerald transition-colors">{r.name}</p>
                      <p className="text-slate-500 text-xs">{r.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded">{r.type}</span>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-emerald transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IR Contact */}
      <section className="py-20 bg-navy border-t border-white/8">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="max-w-lg mx-auto text-center">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-emerald" />
              <h2 className="text-2xl font-heading font-bold text-white">Investor Relations Contact</h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-400 mb-8">For investor enquiries, financial results or media requests, please contact our IR team.</motion.p>
            <motion.div variants={stagger} className="flex flex-col gap-3 items-center">
              <motion.a variants={fadeUp} href={"mailto:" + t("irContact")}
                className="flex items-center gap-3 px-7 py-3.5 bg-emerald text-navy font-bold rounded-full hover:bg-emerald/90 transition-all">
                <Mail className="w-4 h-4" /> {t("irContact")}
              </motion.a>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-emerald/60" /> {t("irPhone")}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
`);

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
w('src/app/[locale]/contact/page.tsx',`"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

export default function ContactPage() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
      setStatus("ok");
      setForm({name:"",email:"",subject:"",message:""});
    } catch { setStatus("err"); }
    setLoading(false);
  }

  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">Get in Touch</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="md:col-span-2 space-y-6">
              {[
                { icon:Mail, title:t("irTitle"), detail:"ir@pentixapharm.com", href:"mailto:ir@pentixapharm.com" },
                { icon:Mail, title:t("mediaTitle"), detail:"press@pentixapharm.com", href:"mailto:press@pentixapharm.com" },
                { icon:Mail, title:t("careersTitle"), detail:"careers@pentixapharm.com", href:"mailto:careers@pentixapharm.com" },
                { icon:Phone, title:"Phone", detail:"+49 30 94892600", href:"tel:+4930948926" },
                { icon:MapPin, title:"Headquarters", detail:"Robert-Rössle-Str. 10\\n13125 Berlin, Germany", href:null },
              ].map((c,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-emerald/12 rounded-xl shrink-0">
                      <c.icon className="w-4 h-4 text-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">{c.title}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white hover:text-emerald transition-colors text-sm font-medium">{c.detail}</a>
                      ) : (
                        <p className="text-white text-sm font-medium whitespace-pre-line leading-relaxed">{c.detail}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="md:col-span-3">
              <motion.form variants={fadeUp} onSubmit={submit} className="glass border border-white/8 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">{tf("name")}</label>
                    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600"
                      placeholder="Dr. Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">{tf("email")}</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600"
                      placeholder="jane@institution.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">{tf("subject")}</label>
                  <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600"
                    placeholder="Investor Relations Enquiry" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">{tf("message")}</label>
                  <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600 resize-none"
                    placeholder="How can we help?" />
                </div>

                {status==="ok" && (
                  <div className="flex items-center gap-2 text-emerald text-sm bg-emerald/10 border border-emerald/20 rounded-xl px-4 py-3">
                    <CheckCircle className="w-4 h-4" /> {tf("success")}
                  </div>
                )}
                {status==="err" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4" /> {tf("error")}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="flex items-center gap-2 px-8 py-3.5 bg-emerald text-navy font-bold rounded-full text-sm hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20 disabled:opacity-60">
                  {loading ? "Sending…" : <><Send className="w-4 h-4" /> {tf("send")}</>}
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
`);

// ── STATS PAGE ────────────────────────────────────────────────────────────────
w('src/app/[locale]/stats/page.tsx',`"use client";
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
`);

console.log('\n✅ Phase 5 done — Investors + Contact + Stats pages\n');
