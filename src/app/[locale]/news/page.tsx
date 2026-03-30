"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Search, ExternalLink, Calendar, Tag, ChevronRight } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.08 } } };

const SEED_NEWS = [
  { id:1, date:"2026-03-31", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as Chief Technology Officer", excerpt:"Pentixapharm Holding AG strengthens its Executive Board with the appointment of Erik Merten as Chief Technology Officer (CTO). Merten brings deep expertise in radiopharmaceutical manufacturing and GMP operations, positioned to lead commercialisation readiness as the PANDA Phase 3 programme advances.", source:"Press Release" },
  { id:2, date:"2026-02-25", cat:"Regulatory", title:'FDA Issues "Study May Proceed" for Dual Theranostic INDs in CXCR4 Hemato-Oncology', excerpt:"The U.S. FDA has completed its 30-day safety review and issued 'Study May Proceed' for both the PentixaFor and PentixaTher investigational new drug applications in acute myeloid leukaemia (AML) and multiple myeloma — enabling the first U.S. clinical use of the theranostic pair.", source:"Press Release" },
  { id:3, date:"2026-02-05", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior Non-invasive PET Diagnostic for Primary Aldosteronism", excerpt:"Prospective Phase 2 study data confirm that [68Ga]Ga-PentixaFor PET/CT is superior to adrenal vein sampling (AVS) in lateralising primary aldosteronism with 28 of 29 patients preferring PET/CT. High specificity and sensitivity underpin Phase 3 PANDA programme.", source:"Data Release" },
  { id:4, date:"2026-01-07", cat:"Regulatory", title:"Pentixapharm Receives FDA Feedback on Phase 3 PANDA Study Design for Primary Aldosteronism", excerpt:"Following Type B pre-IND meeting with the FDA, Pentixapharm received guidance on the Phase 3 PANDA study design evaluating PentixaFor in patients with primary aldosteronism and treatment-resistant hypertension — a condition affecting an estimated 5–12% of all hypertensive patients.", source:"Press Release" },
  { id:5, date:"2025-12-11", cat:"Financial", title:"Preliminary Financial Results H1/FY 2025 and Outlook", excerpt:"Pentixapharm reports preliminary revenues of €117k for 9M 2025 and confirms adjusted net loss guidance of ~€18M for FY2025, versus prior €23.5M guidance, reflecting workforce restructuring to focus resources on priority pipeline assets.", source:"Financial Report" },
  { id:6, date:"2025-09-26", cat:"Clinical", title:"PentixaTher Advances to 4th of 5 Dose Levels in PENTILULA AML Bone Marrow Conditioning Trial", excerpt:"The PENTILULA Phase 1/2 trial evaluating [177Lu]Lu-PentixaTher as part of a bone marrow conditioning regimen in AML patients receiving allogeneic stem cell transplantation has progressed to dose level 4 of 5, with no new safety signals identified.", source:"Clinical Update" },
  { id:7, date:"2025-09-19", cat:"Clinical", title:"First-in-Human Data for PentixaTher in Bladder Cancer Presented at EANM 2025", excerpt:"First-in-human data from an investigator-initiated study evaluating [90Y]Y-PentixaTher in bladder cancer patients were presented at the European Association of Nuclear Medicine Congress 2025 in Hamburg, showing early signs of therapeutic activity.", source:"Conference Data" },
  { id:8, date:"2025-06-19", cat:"Clinical", title:"Preclinical Data for GT-008 Anti-CD24 Antibody Platform Presented at AACR Annual Meeting", excerpt:"First preclinical data for GT-008, Pentixapharm's first-in-class glycan-dependent anti-CD24 monoclonal antibody radiolabelled with lutetium-177, showing complete tumour responses in breast cancer mouse models at a single dose.", source:"Conference Data" },
  { id:9, date:"2025-05-27", cat:"Corporate", title:"Pentixapharm Outlines Updated Clinical Strategy to Focus Resources on Priority Assets", excerpt:"Following a strategic review, Pentixapharm's Executive Board has outlined an updated clinical roadmap prioritising the PANDA Phase 3 programme for PentixaFor in primary aldosteronism and the dose-escalation studies for PentixaTher in haematological malignancies.", source:"Press Release" },
  { id:10, date:"2025-02-27", cat:"Financial", title:"FY 2024 Financial Results: Net Loss of €12.8M; Focused Investment in Clinical Pipeline", excerpt:"Pentixapharm reports FY 2024 results with a net loss of €12.8 million. Cash and equivalents at year-end support ongoing clinical programmes through anticipated near-term milestones.", source:"Annual Report" },
  { id:11, date:"2024-10-03", cat:"Corporate", title:"Pentixapharm Successfully Completes IPO on Frankfurt Stock Exchange Prime Standard", excerpt:"Pentixapharm Holding AG today commences trading on the Frankfurt Stock Exchange Prime Standard under the ticker symbol PTP. The company raised gross proceeds of €19.9 million at an IPO price of €5.10 per share, with total financing including a €18.5M convertible bond.", source:"Press Release" },
  { id:12, date:"2024-09-25", cat:"Corporate", title:"Pentixapharm Prices IPO at €5.10 Per Share; Convertible Bond of €18.5M Subscribed", excerpt:"Pentixapharm Holding AG has priced its initial public offering at €5.10 per share, raising €19.9 million in gross proceeds. A convertible bond of €18.5 million was also fully subscribed by institutional investors.", source:"Press Release" },
];

const CATS = ["All","Clinical","Corporate","Financial","Regulatory"];

export default function NewsPage() {
  const locale = useLocale();
  const t = useTranslations("news");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [news, setNews] = useState(SEED_NEWS);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = JSON.parse(localStorage.getItem("ptx_news") || "[]");
        if (saved.length > 0) setNews([...saved, ...SEED_NEWS].sort((a,b) => b.id-a.id));
      } catch {}
    }
  }, []);

  const filtered = news.filter(n =>
    (filter==="All" || n.cat===filter) &&
    (search==="" || n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  const catColors: Record<string,string> = {
    Clinical:"text-[#00B1AB] bg-emerald/10 border-emerald/20",
    Corporate:"text-[#00A3E0] bg-cyan/10 border-cyan/20",
    Financial:"text-[#F2A900] bg-gold/10 border-gold/20",
    Regulatory:"text-purple-400 bg-purple-400/10 border-purple-400/20",
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00B1AB] text-sm font-medium uppercase tracking-widest">Press Office</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-navy mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F8FAFD]2 border-y border-slate-200 sticky top-16 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {CATS.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={"text-xs font-semibold px-4 py-1.5 rounded-full border transition-all " +
                    (filter===c ? "bg-emerald text-navy border-emerald" : "text-slate-500 border-white/15 hover:border-emerald/40 hover:text-navy")}>
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-slate-200 rounded-full px-4 py-2 w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <input value={search} onChange={e=>setSearch(e.target.value)}
                placeholder="Search news..." className="bg-transparent text-sm text-navy placeholder-slate-600 outline-none w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-[#F8FAFD]">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div key={filter+search} initial="hidden" animate="show" variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((n,i) => (
                <motion.article key={n.id} variants={fadeUp} className="bg-white border border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6 card-hover group flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={"text-xs font-semibold px-2.5 py-1 rounded-full border " + (catColors[n.cat] || "text-slate-500 bg-white/5 border-white/15")}>{n.cat}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-600">
                      <Calendar className="w-3 h-3" /> {new Date(n.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-navy text-sm leading-snug mb-3 group-hover:text-[#00B1AB] transition-colors flex-1">{n.title}</h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-4">{n.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/6">
                    <span className="text-xs text-slate-600">{n.source}</span>
                    <span className="flex items-center gap-1 text-xs text-[#00B1AB] font-medium">{t("readMore")}</span>
                  </div>
                </motion.article>
              ))}
              {filtered.length===0 && (
                <div className="col-span-3 text-center py-20 text-slate-500">No articles found for your filters.</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
