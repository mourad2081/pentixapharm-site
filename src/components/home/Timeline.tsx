"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const locale = useLocale();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal font-bold uppercase tracking-widest text-sm mb-4"
          >
            Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight"
          >
            From Call to <span className="gradient-text">Covered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A seamless 5-step journey from first contact to full protection — typically done in under 7 days.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-100">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-teal via-blue-500 to-gold origin-top"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 p-7 group"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-5xl font-heading font-black text-slate-100 leading-none">{step.step}</span>
                      <div>
                        <span className="text-xs font-black uppercase tracking-widest text-teal block">{step.duration}</span>
                        <h3 className="text-xl font-heading font-black text-navy">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-xl z-10`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl font-heading font-black text-navy mb-6">Ready to start your journey?</p>
          <Link href={`/${locale}/termin`}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14,165,160,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="h-16 px-12 rounded-full bg-teal text-white text-lg font-bold shadow-xl inline-flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Book Your Free Call Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
