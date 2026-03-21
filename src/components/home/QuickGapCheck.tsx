"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";

export function QuickGapCheck() {
  const locale = useLocale();
  const [salary, setSalary] = useState([5000]);
  const [age, setAge] = useState([35]);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    // Basic German Pension Estimation: ~45% of gross for employees
    const monthlyGross = salary[0];
    const targetIncome = monthlyGross * 0.8; // 80% target
    const estimatedStatutory = monthlyGross * 0.45;
    const calculatedGap = Math.max(0, targetIncome - estimatedStatutory);
    setGap(Math.round(calculatedGap));
  }, [salary, age]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="bg-navy rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/5 -skew-x-12 transform translate-x-32" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal/10 rounded-full blur-[100px]" />

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full text-teal font-black text-sm uppercase tracking-widest border border-teal/20">
                <Calculator className="h-4 w-4" /> Quick Check
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight tracking-tight">
                Instantly see your <br />
                <span className="text-teal">Pension Gap</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                Most expats in Germany are unaware that their state pension will only cover about 45% of their last income. Use this tool to see your shortfall.
              </p>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                <Info className="h-6 w-6 text-teal shrink-0 mt-1" />
                <p className="text-sm text-slate-300 font-medium">
                   This is a rough estimate based on standard German social security rates. For a precise calculation, use our full tool.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl space-y-12 relative">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-lg font-black text-navy uppercase tracking-tight">Monthly Gross Salary</label>
                      <span className="text-4xl font-black text-teal">€{salary[0].toLocaleString()}</span>
                    </div>
                    <Slider 
                      value={salary} 
                      onValueChange={(val) => setSalary(val as number[])} 
                      max={15000} 
                      min={20000 / 12} 
                      step={100} 
                      className="py-2" 
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-lg font-black text-navy uppercase tracking-tight">Current Age</label>
                      <span className="text-4xl font-black text-teal">{age[0]} <span className="text-sm text-slate-400 uppercase">Years</span></span>
                    </div>
                    <Slider 
                      value={age} 
                      onValueChange={(val) => setAge(val as number[])} 
                      max={65} 
                      min={18} 
                      step={1} 
                      className="py-2" 
                    />
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-100">
                  <div className="flex flex-col items-center">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Estimated Monthly Gap</p>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={gap}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-red-500 tracking-tighter mb-8 flex items-center"
                      >
                        <span className="text-4xl opacity-40 mr-2">-</span>
                        €{gap.toLocaleString()}
                      </motion.div>
                    </AnimatePresence>

                    <Link href={`/${locale}/rechner`} className="w-full">
                      <Button className="w-full h-16 bg-navy text-white hover:bg-teal rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:-translate-y-1 active:scale-95 group">
                        Get Full Analysis <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
