"use client";
import { ArrowRight, Star, Briefcase, Globe2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export function WhyMe() {
  const locale = useLocale();
  const t = useTranslations('WhyMe');

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
    <section className="py-32 bg-[#FAF9F6] overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(14,165,160,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(212,168,83,0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image column */}
          <div className="w-full lg:w-[45%] relative animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Main photo card */}
            <div className="relative z-10">
              <div className="relative">
                {/* Glow ring behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-teal/30 to-blue-500/20 rounded-[3.5rem] blur-2xl opacity-60" />
                <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 relative">
                    <Image
                      src="/mourad-headshot.png"
                      alt="Next Gen Capital"
                      fill
                      className="object-cover"
                    />
                    {/* Secondary Lifestyle Image Overlay */}
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg hidden md:block">
                      <Image src="/berlin_family.png" alt="Germany Expat Life" fill className="object-cover" />
                    </div>
                    {/* Gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-bold font-heading text-lg">{t('advisorName')}</p>
                      <p className="text-teal text-sm font-medium">{t('advisorSubtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className={`absolute ${
                  i === 0 ? "-top-6 -right-6" : i === 1 ? "top-1/2 -left-8" : "-bottom-6 right-12"
                } ${card.color} text-white px-5 py-3 rounded-2xl shadow-xl shadow-black/20 z-20 animate-bounce-subtle`}
                style={{ animationDelay: `${i * 0.5}s`, animationDuration: "3s" }}
              >
                <p className="text-2xl font-black font-heading leading-none">{card.value}</p>
                <p className="text-xs font-bold opacity-80 mt-0.5">{card.label}</p>
              </div>
            ))}
          </div>

          {/* Text column */}
          <div className="w-full lg:w-[55%] animate-in fade-in slide-in-from-right-8 duration-1000">
            <span className="text-teal font-black tracking-[0.2em] uppercase text-xs mb-4 block">{t('subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mb-6 leading-[1.1] tracking-tight">
              {t('titlePart1')}<br />
              <span className="gradient-text">{t('titlePart2')}</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-bold">
              {t('desc')}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="p-2 rounded-xl bg-teal/10 text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="text-navy text-base font-bold leading-snug pt-1">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/ueber-mich`}>
                <button className="h-14 px-8 rounded-full bg-navy text-white text-base font-black shadow-lg shadow-navy/20 flex items-center gap-2 group hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-wide">
                  {t('btn1')}
                  <ArrowRight className="w-5 h-5 rtl:-scale-x-100 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href={`/${locale}/termin`}>
                <button className="h-14 px-8 rounded-full border-2 border-teal text-teal hover:bg-teal hover:text-white text-base font-black flex items-center gap-2 transition-all active:scale-95 uppercase tracking-wide">
                  {t('btn2')}
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}


