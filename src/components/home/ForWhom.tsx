"use client";
import { ShieldCheck, Briefcase, Heart, Globe2, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

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
      "Next Gen Capital guaranteed pension plans",
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
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">
            Find Yourself
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight">
            Who is this <span className="gradient-text">for?</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you just arrived in Germany or have lived here for years — there's an Next Gen Capital solution built exactly for your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((p, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${p.color} rounded-[2.5rem] border ${p.borderColor} p-10 transition-all duration-300 overflow-hidden animate-in fade-in zoom-in-95`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                    <p.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">{p.tag}</span>
                    <h3 className="text-2xl font-heading font-black text-navy leading-tight">{p.title}</h3>
                    <p className="text-teal font-bold text-sm mt-0.5">{p.subtitle}</p>
                  </div>
                  <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">{p.emoji}</span>
                </div>

                {/* Pain point */}
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/40">
                  <p className="text-base text-navy font-bold italic leading-relaxed">"{p.pain}"</p>
                </div>

                {/* Solutions */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {p.solutions.map((s, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-navy font-bold leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/termin`}>
                  <button className="flex items-center gap-2 text-sm font-black text-teal uppercase tracking-widest group/btn bg-white/20 px-6 py-3 rounded-xl border border-teal/20 hover:bg-teal hover:text-white transition-all">
                    Get my free consultation
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

