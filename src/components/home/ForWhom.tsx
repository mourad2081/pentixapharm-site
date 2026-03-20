"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, Heart, Globe2, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const personas = [
  {
    icon: Globe2,
    emoji: "🌍",
    color: "from-teal/20 to-cyan-300/20",
    borderColor: "border-teal/20 hover:border-teal/50",
    iconBg: "bg-teal",
    tag: "Expats & Internationals",
    title: "New to Germany?",
    subtitle: "We make German insurance simple",
    pain: "Confused by the GKV vs PKV debate? Unsure what's mandatory vs optional?",
    solutions: [
      "We explain everything in your language",
      "Navigate PKV eligibility together",
      "No German bureaucracy stress",
      "Ongoing support as your life changes",
    ],
  },
  {
    icon: Briefcase,
    emoji: "💼",
    color: "from-blue-400/20 to-indigo-400/20",
    borderColor: "border-blue-300/20 hover:border-blue-400/50",
    iconBg: "bg-navy",
    tag: "Freelancers & Self-Employed",
    title: "Self-employed?",
    subtitle: "Protection designed for your freedom",
    pain: "No employer safety net. Managing taxes AND insurance alone is overwhelming.",
    solutions: [
      "Tax-deductible pension solutions",
      "Private health that fits your budget",
      "Income protection if you can't work",
      "Legal protection for disputes",
    ],
  },
  {
    icon: Heart,
    emoji: "👨‍👩‍👧",
    color: "from-rose-300/20 to-pink-400/20",
    borderColor: "border-rose-300/20 hover:border-rose-400/50",
    iconBg: "bg-rose-500",
    tag: "Families",
    title: "Building a family?",
    subtitle: "Protect what matters most",
    pain: "What happens to your family if you can't work — or worse?",
    solutions: [
      "Life insurance for total peace of mind",
      "Supplement dental for the whole family",
      "Accident coverage for active kids",
      "Flexible plans that grow with you",
    ],
  },
  {
    icon: ShieldCheck,
    emoji: "📈",
    color: "from-amber-300/20 to-gold/20",
    borderColor: "border-amber-300/20 hover:border-amber-400/50",
    iconBg: "bg-gold",
    tag: "Planning for Retirement",
    title: "Saving for the future?",
    subtitle: "Close the pension gap now",
    pain: "Germany's state pension will likely not be enough. Every year you wait costs you.",
    solutions: [
      "ERGO guaranteed pension plans",
      "Riester & Rürup maximization",
      "Flexible from just 25€/month",
      "Tax advantages built in",
    ],
  },
];

export function ForWhom() {
  const locale = useLocale();

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(14,165,160,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(212,168,83,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal font-bold uppercase tracking-widest text-sm mb-4"
          >
            Find Yourself
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight"
          >
            Who is this <span className="gradient-text">for?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Whether you just arrived in Berlin or have lived here for years — there's an ERGO solution built exactly for your situation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative bg-gradient-to-br ${p.color} rounded-3xl border ${p.borderColor} p-8 transition-all duration-300 overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/30 rounded-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">{p.tag}</span>
                    <h3 className="text-2xl font-heading font-black text-navy leading-tight">{p.title}</h3>
                    <p className="text-teal font-semibold text-sm">{p.subtitle}</p>
                  </div>
                  <span className="ml-auto text-4xl">{p.emoji}</span>
                </div>

                {/* Pain point */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-5 border border-white/50">
                  <p className="text-sm text-navy/70 font-medium italic">"{p.pain}"</p>
                </div>

                {/* Solutions */}
                <ul className="space-y-2.5 mb-6">
                  {p.solutions.map((s, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-navy font-medium">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/termin`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 text-sm font-bold text-teal group/btn"
                  >
                    Get my free consultation
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
