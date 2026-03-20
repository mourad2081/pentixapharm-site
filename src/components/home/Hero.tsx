"use client";
import { ArrowRight, ShieldCheck, Star, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function Hero() {
  const locale = useLocale();
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef(null);

  const t = useTranslations('Hero');
  const WORDS = [t('word1'), t('word2'), t('word3')];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [WORDS.length]);

  const stats = [
    { icon: Star, value: 500, suffix: "+", label: t('stat1Label') },
    { icon: Globe2, value: 4, suffix: "", label: t('stat2Label') },
    { icon: TrendingUp, value: 100, suffix: "%", label: t('stat3Label') },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-navy"
    >
      {/* Static hero background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-[0.15] mix-blend-luminosity"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 z-0" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Pill badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-teal/30 text-teal text-sm font-bold uppercase tracking-widest mb-10 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse inline-block" />
          <ShieldCheck className="w-4 h-4" />
          <span className="text-white/90">{t('badge')}</span>
        </div>

        {/* Main headline */}
        <div className="mb-6 overflow-hidden">
          <h1
            className="text-6xl md:text-8xl lg:text-[6.5rem] font-heading font-black text-white leading-[1] tracking-tight"
          >
            <span className="block mb-2 min-h-[1.2em]">
              <span
                key={wordIndex}
                className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {WORDS[wordIndex]}
              </span>
            </span>
            <span className="gradient-text">{t('titleEnd')}</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          {t('description')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href={`/${locale}/termin`}>
            <button
              className="relative group h-16 px-10 rounded-full bg-teal text-white text-lg font-bold shadow-xl overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                {t('bookBtn')} <ArrowRight className="w-5 h-5 rtl:-scale-x-100 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>

          <Link href="#products">
            <button
              className="h-16 px-10 rounded-full glass text-white text-lg font-bold border-white/20 hover:border-white/40 border hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {t('exploreBtn')}
            </button>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-slate-400">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-xl bg-teal/20 text-teal">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-left rtl:text-right">
                <p className="text-2xl font-black font-heading">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
