"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Linkedin, Trophy, Calendar, Users, FlaskConical } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

const TEAM = [
  { name:"Dr. Dirk Pleimes", role:"CEO & CMO", bio:"Physician-scientist with expertise in oncology and clinical drug development. Previously at Novartis and Bayer. Leads Pentixapharm's clinical strategy and executive direction.", init:"DP" },
  { name:"Henner Kollenberg", role:"Chief Business Officer", bio:"Over 20 years of business development experience in the life sciences sector. Responsible for partnerships, licensing, and commercial strategy.", init:"HK" },
  { name:"Erik Merten", role:"Chief Technology Officer", bio:"Appointed March 2026. Brings deep expertise in radiopharmaceutical manufacturing, scale-up, and GMP operations to support commercialisation readiness.", init:"EM" },
  { name:"Dr. Simone Pickel", role:"Head of Clinical Therapy", bio:"Leading the clinical operations for PentixaTher across AML, Multiple Myeloma, and bladder cancer programs.", init:"SP" },
  { name:"Dr. Anna Aldinger", role:"Head of Clinical Diagnostics", bio:"Oversees the PentixaFor clinical programme including the Phase 3 PANDA study for primary aldosteronism.", init:"AA" },
  { name:"Dr. Alessandra Bierwagen", role:"Head of Regulatory Affairs", bio:"Manages all regulatory strategy and submissions globally, including IND filings with the FDA.", init:"AB" },
  { name:"Dr. Antje Danielczyk", role:"Head of QM & Operations", bio:"Responsible for quality management systems and operational excellence across manufacturing and supply chain.", init:"AD" },
  { name:"Dr. Johanna Gellert", role:"Head of R&D", bio:"Drives early-stage research including the GT-008 CD24 antibody platform and next-generation compound identification.", init:"JG" },
  { name:"Jenny Schewe", role:"Head of Finance & Controlling", bio:"Oversees all financial planning, investor reporting, and controlling functions.", init:"JS" },
];

const BOARD = [
  { name:"Dr. Andreas Eckert", role:"Chairman", note:"Former CEO of Actelion Pharmaceuticals" },
  { name:"Dr. Harald Hasselmann", role:"Member", note:"Life Sciences Attorney" },
  { name:"Prof. Jens Vogel-Claussen", role:"Member", note:"Professor of Radiology, Hannover Medical School" },
];

const TIMELINE = [
  { year:"2019", label:"Founding", desc:"Pentixapharm GmbH established as joint venture between Scintomics GmbH and 1717 Life Science Ventures." },
  { year:"2022", label:"First Clinical Data", desc:"PentixaFor demonstrates high diagnostic accuracy in primary aldosteronism. First IIS studies with PentixaTher initiated." },
  { year:"2024 Q1", label:"Glycotope Acquisition", desc:"Acquired GT-008 anti-CD24 antibody platform from Glycotope, expanding beyond CXCR4." },
  { year:"2024 Oct", label:"IPO", desc:"Listed on Frankfurt Stock Exchange Prime Standard (ticker: PTP). Raised €19.9M gross proceeds." },
  { year:"2025", label:"FDA & Clinical Milestones", desc:"FDA INDs active for PentixaTher in AML and Multiple Myeloma. PentixaTher advances to 4th dose level in PENTILULA." },
  { year:"2026", label:"Phase 3 Preparation", desc:"FDA Type B meeting guidance received for PANDA Phase 3. Erik Merten joins as CTO to drive commercialisation." },
];

export default function AboutPage() {
  const locale = useLocale();
  const t = useTranslations("about");
  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">Our Company</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission + History */}
      <section className="py-24 bg-navy2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-emerald" />
                <h2 className="text-2xl font-heading font-bold text-white">{t("missionTitle")}</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">{t("missionDesc")}</motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-5 h-5 text-cyan" />
                <h2 className="text-2xl font-heading font-bold text-white">{t("historyTitle")}</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">{t("historyDesc")}</motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-12">
              <Calendar className="w-5 h-5 text-emerald" />
              <h2 className="text-3xl font-heading font-bold text-white">Company Timeline</h2>
            </motion.div>
            <div className="relative pl-8 border-l border-emerald/20">
              {TIMELINE.map((t,i) => (
                <motion.div key={i} variants={fadeUp} className="mb-10 relative">
                  <div className="absolute -left-11 w-6 h-6 rounded-full bg-navy2 border-2 border-emerald flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald" />
                  </div>
                  <span className="text-emerald text-sm font-semibold mb-1 block">{t.year} — {t.label}</span>
                  <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-navy2">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-12">
              <Users className="w-5 h-5 text-emerald" />
              <h2 className="text-3xl font-heading font-bold text-white">{t("teamTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {TEAM.map((m,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-6 card-hover group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald/20 to-cyan/20 border border-emerald/25 flex items-center justify-center">
                      <span className="text-emerald font-heading font-bold text-sm">{m.init}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-sm group-hover:text-emerald transition-colors">{m.name}</h3>
                      <p className="text-xs text-emerald/80">{m.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{m.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supervisory Board */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-white mb-8">{t("boardTitle")}</motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {BOARD.map((b,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-white mb-1">{b.name}</h3>
                  <p className="text-emerald text-sm mb-2">{b.role}</p>
                  <p className="text-slate-500 text-xs">{b.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-navy2 border-t border-white/8">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-white mb-4">{t("careerTitle")}</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-lg mx-auto mb-8">{t("careerDesc")}</motion.p>
            <motion.a variants={fadeUp} href={"mailto:" + t("careerEmail")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald text-navy font-bold rounded-full hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20">
              <Mail className="w-4 h-4" /> {t("careerEmail")}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
