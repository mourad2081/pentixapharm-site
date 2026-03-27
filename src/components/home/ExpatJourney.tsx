"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  PlaneLanding, 
  Briefcase, 
  UserPlus, 
  Home, 
  ShieldCheck, 
  TrendingUp, 
  Heart,
  CalendarCheck
} from "lucide-react";

const STAGES = [
  {
    id: 1,
    title: "Arrival in Germany",
    desc: "First 3 months: You need Liability (Privathaftpflicht) and valid Health Insurance for your initial visa or job.",
    icon: PlaneLanding,
    color: "bg-teal",
    protection: ["Privathaftpflicht", "State Pension Entry"]
  },
  {
    id: 2,
    title: "First Major Job in DE",
    desc: "1-2 years in: As your income grows, it's time to check if PKV saves you money and start thinking about your pension gap.",
    icon: Briefcase,
    color: "bg-navy",
    protection: ["PKV Evaluation", "Occupational Pension (bAV)"]
  },
  {
    id: 3,
    title: "Settling Down",
    desc: "3-5 years in: Thinking about a permanent residence? Secure your family with Life Insurance and protect your home contents.",
    icon: Home,
    color: "bg-teal",
    protection: ["Lebensversicherung", "Hausratversicherung"]
  },
  {
    id: 4,
    title: "Long-term Wealth",
    desc: "5+ years: Maximizing tax-efficient private pensions (Rürup/Riester equivalent) and securing your legal rights.",
    icon: TrendingUp,
    color: "bg-navy",
    protection: ["Private Rentenvorsorge", "Rechtsschutz"]
  },
  {
    id: 5,
    title: "Legacy & Peace",
    desc: "The goal: Total financial freedom in Germany. Knowing your family is protected whatever happens.",
    icon: Heart,
    color: "bg-teal",
    protection: ["Asset Protection", "Disability (BU)"]
  }
];

export function ExpatJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/[0.02] transform skew-x-12 translate-x-32" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full text-navy font-black text-sm uppercase tracking-[0.2em] mb-6"
          >
            <CalendarCheck className="h-4 w-4" /> Timeline
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 tracking-tighter"
          >
            The Expat <span className="text-teal">Protection</span> Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Navigating Germany's insurance landscape as an expat doesn't have to be overwhelming. Here is what you need and when you need it.
          </motion.p>
        </div>

        <div className="relative">
          {/* Main vertical path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-slate-200 -translate-x-1/2 hidden md:block rounded-full overflow-hidden">
             <motion.div 
               className="w-full bg-teal absolute top-0 origin-top h-full"
               style={{ scaleY: pathProgress }}
             />
          </div>

          <div className="space-y-24 relative">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`w-20 h-20 rounded-[1.5rem] ${stage.color} flex items-center justify-center text-white shadow-2xl mb-8 md:hidden`}>
                    <stage.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-navy mb-4 tracking-tight">{stage.title}</h3>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed mb-6">{stage.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {stage.protection.map(p => (
                      <span key={p} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-black text-teal uppercase tracking-widest shadow-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-20 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl ${stage.color} border-4 border-white flex items-center justify-center text-white shadow-2xl cursor-default`}
                  >
                    <stage.icon className="h-8 w-8" />
                  </motion.div>
                </div>

                {/* Empty Side (for Desktop layout) */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Connector Indicator */}
        <div className="mt-32 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-3 px-8 py-5 rounded-[2rem] bg-navy text-white shadow-2xl group hover:bg-teal hover:scale-105 transition-all duration-300"
           >
              <ShieldCheck className="h-6 w-6 text-teal group-hover:text-white" />
              <span className="font-black uppercase tracking-widest text-sm">Now fully protected in DE</span>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
