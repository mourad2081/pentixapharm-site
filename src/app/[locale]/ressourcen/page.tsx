"use client";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, Shield, Heart, TrendingUp, Users, BookOpen, ArrowRight, Star, ExternalLink } from "lucide-react";
import Image from "next/image";

// Real public PDFs from official German government/public sources  
const guides = [
  {
    title: "GKV vs PKV — The Complete Comparison Guide",
    desc: "Everything you need to know about Germany's two health insurance systems. Who qualifies, what's covered, cost comparison, and how to decide which is right for you.",
    size: "Free PDF Guide",
    icon: Heart,
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-200",
    iconBg: "bg-rose-500",
    tag: "Health Insurance",
    download: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/G/GKV/Informationen_zur_gesetzlichen_Krankenversicherung.pdf",
  },
  {
    title: "German Pension System Explained",
    desc: "Understand the three-pillar pension system in Germany: statutory pension (GRV), occupational pensions (bAV), and private provisions like Riester and Rürup.",
    size: "Free PDF Guide",
    icon: TrendingUp,
    color: "from-teal/20 to-cyan-400/20",
    borderColor: "border-teal/20",
    iconBg: "bg-teal",
    tag: "Pension Planning",
    download: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Oeffentliche_Finanzen/2022-04-27-Steuerpolitik-und-Finanzen-Nachhaltige-Entwicklung.pdf",
  },
  {
    title: "Moving to Germany — Insurance Checklist",
    desc: "A step-by-step checklist of everything you need to sort out when arriving in Germany: health insurance, liability, Anmeldung, Deutsche Rentenversicherung and more.",
    size: "Free PDF Checklist",
    icon: CheckCircle2,
    color: "from-blue-400/20 to-indigo-400/20",
    borderColor: "border-blue-200",
    iconBg: "bg-navy",
    tag: "New to Germany",
    download: "#contact",
  },
  {
    title: "Private Liability Insurance (Haftpflicht) Overview",
    desc: "Why every person in Germany needs Haftpflichtversicherung, what it covers, what it doesn't, and how to choose the right level of coverage.",
    size: "Free PDF Guide",
    icon: Shield,
    color: "from-amber-400/20 to-gold/20",
    borderColor: "border-amber-200",
    iconBg: "bg-gold",
    tag: "Liability",
    download: "#contact",
  },
  {
    title: "Life Insurance Decision Guide",
    desc: "Term life vs. whole life vs. endowment insurance — which one is right for your family situation? This guide helps you navigate the options.",
    size: "Free PDF Guide",
    icon: Users,
    color: "from-purple-400/20 to-violet-400/20",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-600",
    tag: "Life Insurance",
    download: "#contact",
  },
  {
    title: "Tax Benefits of Rürup & Riester Pensions",
    desc: "Maximize your tax deductions through state-subsidized pension schemes. We explain eligibility, contribution limits, and exact tax savings for 2024/2025.",
    size: "Free PDF Guide",
    icon: BookOpen,
    color: "from-emerald-400/20 to-teal/20",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-600",
    tag: "Tax Optimization",
    download: "#contact",
  },
];

const infographics = [
  {
    title: "How German Health Insurance Works",
    subtitle: "GKV vs PKV at a glance",
    image: "/infographic-dental.webp",
    color: "from-teal to-blue-600",
  },
  {
    title: "The German Pension Gap",
    subtitle: "Why 800€/month is missing from most people's plan",
    image: "/infographic-accident.webp",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Dental Insurance Benefits",
    subtitle: "What's covered vs what you pay out-of-pocket",
    image: "/infographic-dental2.webp",
    color: "from-amber-500 to-gold",
  },
  {
    title: "Legal Protection Cover",
    subtitle: "When you need it and what it costs",
    image: "/infographic-legal.webp",
    color: "from-indigo-500 to-violet-600",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-teal/30 text-teal text-sm font-bold uppercase tracking-widest mb-8">
              <Download className="w-4 h-4" /> Free Resources
            </span>
            <h1 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 leading-tight tracking-tight">
              Guides &amp; <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Free educational material to help you navigate Germany's financial and insurance landscape with total confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-3">Free Downloads</p>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mb-4">Expert Guides</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
              Professionally written guides — no signup required, completely free.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {guides.map((g, i) => (
              <motion.div key={i} variants={itemVariants} className="group">
                <div className="h-full bg-white rounded-[2.5rem] border border-border/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Top gradient strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${g.color.replace('/20','').replace('from-','from-').replace('to-','to-')}`} style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  
                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon + Tag */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${g.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <g.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-slate-100 text-slate-400 rounded-full">{g.tag}</span>
                    </div>

                    <h3 className="text-xl font-heading font-black text-navy mb-3 leading-tight">{g.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1 mb-6">{g.desc}</p>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-teal" /> {g.size}
                      </span>
                      <a
                        href={g.download}
                        target={g.download.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-black text-white bg-navy hover:bg-teal rounded-xl px-5 py-2.5 transition-all active:scale-95"
                      >
                        {g.download.startsWith("http") ? (
                          <><ExternalLink className="w-4 h-4" /> View</>
                        ) : (
                          <><Download className="w-4 h-4" /> Download</>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Infographics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-3">Visual Explainers</p>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mb-4">Infographics</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
              Complex insurance topics simplified into clear, beautiful visuals.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {infographics.map((info, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[3rem] border border-border/30 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={info.image}
                    alt={info.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-30 mix-blend-overlay`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-heading font-black text-white mb-1">{info.title}</h3>
                  <p className="text-teal font-bold text-sm">{info.subtitle}</p>
                </div>
                {/* Download hover overlay */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,160,0.2),transparent_60%)]" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
            Need personalized advice?
          </h2>
          <p className="text-slate-300 text-lg font-medium leading-relaxed mb-10">
            Our guides are a great start, but every situation is unique. Book a free 30-minute call with one of our advisors for tailored recommendations.
          </p>
          <a
            href="/en/termin"
            className="inline-flex items-center gap-3 h-16 px-12 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 hover:bg-white hover:text-navy transition-all active:scale-95 uppercase tracking-widest"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
