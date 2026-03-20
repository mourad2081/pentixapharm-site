"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingDown, HeartPulse, Users, Globe2 } from "lucide-react";

const stats = [
  { icon: TrendingDown, value: 800, suffix: "€+", label: "Average monthly pension gap in Germany", prefix: "" },
  { icon: HeartPulse, value: 69300, suffix: "€", label: "PKV eligibility income threshold (2024)", prefix: "" },
  { icon: Users, value: 500, suffix: "+", label: "Clients personally advised", prefix: "" },
  { icon: Globe2, value: 4, suffix: "", label: "Languages for your consultation", prefix: "" },
];

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("de-DE")}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-teal/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">The Numbers That Matter</h2>
          <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">Real data driving real decisions for your financial security.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 border border-white/10 group-hover:border-teal/30 transition-all duration-300 h-full">
                <div className="absolute inset-0 rounded-3xl bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="p-3 rounded-2xl bg-teal/15 w-fit mb-6 group-hover:bg-teal transition-colors duration-300">
                    <stat.icon className="w-7 h-7 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-black text-white mb-3 tabular-nums">
                    <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="text-slate-400 text-sm font-medium leading-snug group-hover:text-slate-300 transition-colors">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
