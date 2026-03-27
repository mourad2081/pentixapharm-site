"use client";
import { Calendar, Phone, FileText, ShieldCheck, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Timeline() {
  const locale = useLocale();
  const t = useTranslations("Timeline");

  const steps = [
    { icon: Phone, color: "bg-teal", step: "01", title: t('step1'), desc: t('step1Desc'), duration: t('day1') },
    { icon: FileText, color: "bg-blue-500", step: "02", title: t('step2'), desc: t('step2Desc'), duration: t('day23') },
    { icon: ShieldCheck, color: "bg-navy", step: "03", title: t('step3'), desc: t('step3Desc'), duration: t('day35') },
    { icon: TrendingUp, color: "bg-gold", step: "04", title: t('step4'), desc: t('step4Desc'), duration: t('day57') },
    { icon: Heart, color: "bg-rose-500", step: "05", title: t('step5'), desc: t('step5Desc'), duration: t('forLife') },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-navy mb-8 tracking-tight leading-tight">
            {t('title').split(' to ')[0]} <span className="text-teal">{t('title').split(' to ')[1] || "Covered"}</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('desc')}
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
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-10 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                  <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:bg-teal/10 transition-all duration-500" />
                    
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-6xl font-heading font-black text-slate-100 leading-none group-hover:text-teal/20 transition-colors duration-500 shrink-0">{step.step}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal block mb-1">{step.duration}</span>
                        <h3 className="text-2xl font-heading font-black text-navy leading-tight truncate">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-500 font-bold leading-relaxed flex-1">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot with 3D shadow */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-xl z-20 border-4 border-white transition-transform group-hover:scale-110`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-3xl font-heading font-black text-navy mb-10">{t('ctaTitle')}</p>
          <Link href={`/${locale}/termin`}>
            <button className="h-16 px-12 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 flex items-center gap-4 mx-auto hover:bg-navy hover:scale-105 active:scale-95 transition-all uppercase tracking-widest group">
              <Calendar className="w-6 h-6" />
              {t('ctaBtn')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
