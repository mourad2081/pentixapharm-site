"use client";
import { ArrowRight, Star, Briefcase, Globe2, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import Image from "next/image";
import Magnetic from "@/components/ui/magnetic";

export function WhyMe() {
  const locale = useLocale();
  const t = useTranslations('WhyMe');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const benefits = [
    { icon: Briefcase, text: t('benefit1') },
    { icon: Globe2, text: t('benefit2') },
    { icon: Star, text: t('benefit3') },
    { icon: MessageCircle, text: t('benefit4') },
  ];

  const floatingCards = [
    { value: "5+", label: t('floating1Label'), color: "bg-teal" },
    { value: "4", label: t('floating2Label'), color: "bg-gold" },
    { value: "IHK", label: t('floating3Label'), color: "bg-navy" },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#FAF9F6] overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(14,165,160,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(212,168,83,0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotate }}
            className="w-full lg:w-[45%] relative"
          >
            {/* Main photo card */}
            <motion.div style={{ y }} className="relative z-10">
              <div className="relative">
                {/* Glow ring behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-teal/30 to-blue-500/20 rounded-[3.5rem] blur-2xl opacity-60" />
                <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 relative">
                    <Image
                      src="/mourad-headshot.png"
                      alt="Mourad Labadi — ERGO Independent Advisor"
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-bold font-heading text-lg">{t('advisorName')}</p>
                      <p className="text-teal text-sm font-medium">{t('advisorSubtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                animate={{ y: [0, -8, 0] }}
                style={{ animationDelay: `${i * 0.8}s`, animationDuration: `${3 + i}s` }}
                className={`absolute ${
                  i === 0 ? "-top-6 -right-6" : i === 1 ? "top-1/2 -left-8" : "-bottom-6 right-12"
                } ${card.color} text-white px-5 py-3 rounded-2xl shadow-xl shadow-black/20 z-20 animate-float`}
              >
                <p className="text-2xl font-black font-heading leading-none">{card.value}</p>
                <p className="text-xs font-bold opacity-80 mt-0.5">{card.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%]"
          >
            <span className="text-teal font-bold tracking-widest uppercase text-sm mb-4 block">{t('subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mb-6 leading-[1.1] tracking-tight">
              {t('titlePart1')}<br />
              <span className="gradient-text">{t('titlePart2')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
              {t('desc')}
            </p>

            <ul className="space-y-5 mb-12">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-xl bg-teal/10 text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="text-navy text-lg font-medium leading-snug pt-1">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/ueber-mich`}>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(10,22,40,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  className="h-14 px-8 rounded-full bg-navy text-white text-base font-bold shadow-lg flex items-center gap-2 group transition-all"
                >
                  {t('btn1')}
                  <ArrowRight className="w-5 h-5 rtl:-scale-x-100 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href={`/${locale}/termin`}>
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(14,165,160,0.05)" }}
                  whileTap={{ scale: 0.97 }}
                  className="h-14 px-8 rounded-full border-2 border-teal/50 text-teal hover:border-teal text-base font-bold flex items-center gap-2 transition-all"
                >
                  {t('btn2')}
                </motion.button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
