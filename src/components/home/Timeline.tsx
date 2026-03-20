"use client";
import { Calendar, Phone, FileText, ShieldCheck, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

const steps = [
  {
    icon: Phone,
    color: "bg-teal",
    step: "01",
    title: "Free Discovery Call",
    desc: "30-minute conversation in your language. No pressure, no jargon. We map out your situation and identify the gaps.",
    duration: "Day 1",
  },
  {
    icon: FileText,
    color: "bg-blue-500",
    step: "02",
    title: "Custom Analysis",
    desc: "Within 48 hours, I build your personalized insurance architecture — comparing products, costs, and tax advantages.",
    duration: "Day 2–3",
  },
  {
    icon: ShieldCheck,
    color: "bg-navy",
    step: "03",
    title: "Clear Proposal",
    desc: "A simple, visual proposal in your language. Everything explained. No surprises in the fine print — ever.",
    duration: "Day 3–5",
  },
  {
    icon: TrendingUp,
    color: "bg-gold",
    step: "04",
    title: "Seamless Sign-up",
    desc: "Fully digital, bilingual forms. We handle the paperwork. You're covered and activated in days, not weeks.",
    duration: "Day 5–7",
  },
  {
    icon: Heart,
    color: "bg-rose-500",
    step: "05",
    title: "Ongoing Support",
    desc: "Life changes. I'm still here. Annual reviews, job changes, family updates — your coverage evolves with you.",
    duration: "For Life",
  },
];

export function Timeline() {
  const locale = useLocale();

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">
            Your Success Journey
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-navy mb-8 tracking-tight">
            From Call to <span className="text-teal">Covered</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            A seamless 5-step journey from first contact to full protection — typically done in under 7 days.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Static vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full w-full bg-gradient-to-b from-teal via-blue-500 to-gold opacity-30" />
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-10 md:gap-0 animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                  <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:bg-teal/10 transition-all duration-500" />
                    
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-6xl font-heading font-black text-slate-100 leading-none group-hover:text-teal/20 transition-colors duration-500">{step.step}</span>
                      <div>
                        <span className="text-xs font-black uppercase tracking-widest text-teal block mb-1">{step.duration}</span>
                        <h3 className="text-2xl font-heading font-black text-navy">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-500 font-bold leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-xl z-20 border-4 border-white`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-3xl font-heading font-black text-navy mb-8">Ready to start your journey?</p>
          <Link href={`/${locale}/termin`}>
            <button className="h-16 px-12 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 flex items-center gap-4 mx-auto hover:bg-navy transition-all active:scale-95 uppercase tracking-widest">
              <Calendar className="w-6 h-6" />
              Book Your Free Call Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
