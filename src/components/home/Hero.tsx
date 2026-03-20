"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WORDS = ["Your Future.", "Your Family.", "Your Freedom."];

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  };

  const stats = [
    { icon: Star, value: 500, suffix: "+", label: "Happy Clients" },
    { icon: Globe2, value: 4, suffix: " Languages", label: "We speak your language" },
    { icon: TrendingUp, value: 100, suffix: "% Free", label: "Initial Consultation" },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(160deg, #0A1628 0%, #0d2040 40%, #0A1628 100%)" }}
    >
      {/* Parallax hero background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      </motion.div>

      {/* Animated floating orbs */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-teal/20 blur-[100px] animate-float pointer-events-none"
      />
      <motion.div
        style={{ x: useTransform(springX, v => -v), y: useTransform(springY, v => -v) }}
        className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] animate-float-delayed pointer-events-none"
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] animate-float pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 z-0" />

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-teal/30 text-teal text-sm font-bold uppercase tracking-widest mb-10 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse-ring inline-block" />
          <ShieldCheck className="w-4 h-4" />
          <span className="text-white/90">Independent ERGO Advisor · Berlin</span>
        </motion.div>

        {/* Main headline */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[6.5rem] font-heading font-black text-white leading-[1] tracking-tight"
          >
            <span className="block mb-2">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </span>
            <span className="gradient-text">Well Insured.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Multilingual ERGO insurance consulting in Berlin — covering Health, Pensions, and Asset Protection in <span className="text-white font-bold">4 languages</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href={`/${locale}/termin`}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14,165,160,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="relative group h-16 px-10 rounded-full bg-teal text-white text-lg font-bold shadow-xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
          <Link href="#products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="h-16 px-10 rounded-full glass text-white text-lg font-bold border-white/20 hover:border-white/40 border transition-all"
            >
              Explore Products
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-xl bg-teal/20 text-teal">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-black font-heading">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-slate-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
