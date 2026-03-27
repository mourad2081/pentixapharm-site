"use client";
import { ArrowRight, ShieldCheck, Star, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";

// Animated particle canvas background
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }> = [];

    const colors = ["rgba(14,165,160,", "rgba(59,130,246,", "rgba(212,168,83,"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = () => {
      const W = canvas.width, H = canvas.height;
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    resize();
    spawn();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14,165,160,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

// Animated counter
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
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// 3D tilt card
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const locale = useLocale();
  const [wordIndex, setWordIndex] = useState(0);
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
    { icon: Globe2, value: 5, suffix: "", label: t('stat2Label') },
    { icon: TrendingUp, value: 100, suffix: "%", label: t('stat3Label') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-navy">
      {/* Animated particle network background */}
      <ParticleCanvas />

      {/* Radial gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/15 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy z-0" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-teal/40 text-teal text-sm font-bold uppercase tracking-widest mb-10 shadow-lg shadow-teal/10">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse inline-block" />
          <ShieldCheck className="w-4 h-4" />
          <span className="text-white/90">{t('badge')}</span>
        </div>

        {/* Headline */}
        <div className="mb-6 overflow-hidden">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-black text-white leading-[1] tracking-tight">
            <span className="block mb-2 min-h-[1.2em]">
              <span key={wordIndex} className="inline-block animate-in fade-in slide-in-from-bottom-3 duration-500">
                {WORDS[wordIndex]}
              </span>
            </span>
            <span className="gradient-text">{t('titleEnd')}</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          {t('description')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href={`/${locale}/termin`}>
            <button className="relative group h-16 px-12 rounded-full bg-teal text-white text-lg font-bold shadow-2xl shadow-teal/40 overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                {t('bookBtn')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>

          <Link href={`/${locale}/produkte`}>
            <button className="h-16 px-12 rounded-full glass text-white text-lg font-bold border border-white/20 hover:border-teal/60 hover:scale-105 active:scale-95 transition-all duration-300">
              {t('exploreBtn')}
            </button>
          </Link>
        </div>

        {/* 3D Tilt Stats Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <TiltCard key={i} className="cursor-default">
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal/30 hover:bg-white/8 transition-colors shadow-xl">
                <div className="p-2.5 rounded-xl bg-teal/20 text-teal">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black font-heading text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-30 animate-bounce">
          <div className="w-px h-12 bg-white" />
          <span className="text-white text-[10px] uppercase tracking-[0.3em]">{t('scroll')}</span>
        </div>
      </div>
    </section>
  );
}
