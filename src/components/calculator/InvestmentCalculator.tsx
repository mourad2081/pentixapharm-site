"use client";
import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { 
  TrendingUp, 
  ChevronRight, 
  Coins, 
  Calendar, 
  Percent, 
  Wallet, 
  BarChart3,
  ArrowUpRight,
  Info
} from "lucide-react";

const invSchema = z.object({
  initial: z.array(z.number()),
  monthly: z.array(z.number()),
  years: z.array(z.number()),
  rate: z.array(z.number()),
});

type FormValues = z.infer<typeof invSchema>;

export function InvestmentCalculator() {
  const [vals, setVals] = useState<FormValues>({
    initial: [5000],
    monthly: [250],
    years: [20],
    rate: [7],
  });

  const results = useMemo(() => {
    const P = vals.initial[0];
    const PMT = vals.monthly[0];
    const r = vals.rate[0] / 100 / 12;
    const n = vals.years[0] * 12;

    const chartData = [];
    let currentBalance = P;
    let totalInvested = P;

    chartData.push({
      year: 0,
      balance: Math.round(currentBalance),
      invested: Math.round(totalInvested),
    });

    for (let i = 1; i <= n; i++) {
        currentBalance = currentBalance * (1 + r) + PMT;
        totalInvested += PMT;
        
        if (i % 12 === 0) {
            chartData.push({
                year: i / 12,
                balance: Math.round(currentBalance),
                invested: Math.round(totalInvested),
            });
        }
    }

    return {
        finalBalance: Math.round(currentBalance),
        totalInvested: Math.round(totalInvested),
        totalInterest: Math.round(currentBalance - totalInvested),
        chartData
    };
  }, [vals]);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 relative z-10 font-sans selection:bg-teal selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center justify-center p-5 rounded-[2rem] bg-white shadow-2xl shadow-teal/5 border border-teal/10 mb-8 hover:scale-110 transition-transform duration-500">
          <TrendingUp className="h-12 w-12 text-teal" />
        </div>
        <h1 className="text-5xl md:text-7xl text-navy font-heading font-black mb-6 tracking-tighter">
          Wealth <span className="text-teal">Builder</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          See the power of compound interest. Adjust the sliders to visualize your financial growth over time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Sliders Area */}
        <div className="lg:col-span-5 space-y-8 animate-in slide-in-from-left-8 duration-700">
          <Card className="shadow-2xl border-4 border-slate-50 bg-white/70 backdrop-blur-3xl rounded-[3rem] p-10 space-y-12">
            
            {/* Initial Investment */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-lg font-black text-navy uppercase tracking-widest flex items-center gap-2">
                   <Wallet className="w-5 h-5 text-teal" /> Initial €
                </Label>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-teal tabular-nums">{vals.initial[0].toLocaleString()}</span>
                   <span className="text-slate-300 font-bold text-xs">€</span>
                </div>
              </div>
              <Slider 
                value={vals.initial} 
                onValueChange={(v) => setVals({...vals, initial: v as number[]})} 
                max={100000} 
                min={0} 
                step={1000} 
                className="py-2" 
              />
            </div>

            {/* Monthly Contribution */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-lg font-black text-navy uppercase tracking-widest flex items-center gap-2">
                   <Coins className="w-5 h-5 text-teal" /> Monthly €
                </Label>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-teal tabular-nums">{vals.monthly[0].toLocaleString()}</span>
                   <span className="text-slate-300 font-bold text-xs">€</span>
                </div>
              </div>
              <Slider 
                value={vals.monthly} 
                onValueChange={(v) => setVals({...vals, monthly: v as number[]})} 
                max={5000} 
                min={0} 
                step={50} 
                className="py-2" 
              />
            </div>

            {/* Investment Duration */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-lg font-black text-navy uppercase tracking-widest flex items-center gap-2">
                   <Calendar className="w-5 h-5 text-teal" /> Years
                </Label>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-teal tabular-nums">{vals.years[0]}</span>
                   <span className="text-slate-300 font-bold text-xs">YRS</span>
                </div>
              </div>
              <Slider 
                value={vals.years} 
                onValueChange={(v) => setVals({...vals, years: v as number[]})} 
                max={50} 
                min={1} 
                step={1} 
                className="py-2" 
              />
            </div>

            {/* Rate of Return */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-lg font-black text-navy uppercase tracking-widest flex items-center gap-2">
                   <Percent className="w-5 h-5 text-teal" /> Return Rate
                </Label>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-teal tabular-nums">{vals.rate[0]}</span>
                   <span className="text-slate-300 font-bold text-xs">%</span>
                </div>
              </div>
              <Slider 
                value={vals.rate} 
                onValueChange={(v) => setVals({...vals, rate: v as number[]})} 
                max={15} 
                min={1} 
                step={0.5} 
                className="py-2" 
              />
            </div>

            {/* Quote Badge */}
            <div className="bg-navy p-8 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-teal/20 rounded-bl-full translate-x-4 -translate-y-4" />
               <p className="text-white font-bold leading-relaxed text-sm relative z-10 italic">
                  "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't, pays it."
               </p>
            </div>
          </Card>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-7 space-y-10 animate-in slide-in-from-right-8 duration-700">
          
          {/* Main Visual Result */}
          <div className="bg-navy p-12 md:p-16 rounded-[4rem] text-center relative overflow-hidden shadow-3xl">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,160,0.4)_0%,transparent_60%)]" />
             <div className="relative z-10">
                <h2 className="text-teal font-black uppercase tracking-[0.4em] text-[10px] mb-6">Future Portfolio Value</h2>
                <div className="text-7xl md:text-[9rem] font-black text-white tracking-tighter mb-4 tabular-nums">
                   {results.finalBalance.toLocaleString()}
                   <span className="text-4xl md:text-6xl text-teal ml-4">€</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-10 mt-10 pt-10 border-t border-white/5">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Total Invested</p>
                      <p className="text-2xl font-black text-white">{results.totalInvested.toLocaleString()}€</p>
                   </div>
                   <div className="w-px h-10 bg-white/10 hidden md:block" />
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-teal mb-1">Interest Earned</p>
                      <p className="text-2xl font-black text-teal animate-pulse">+{results.totalInterest.toLocaleString()}€</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Growth Chart */}
          <Card className="border-4 border-slate-50 bg-white shadow-xl rounded-[3rem] p-10 group hover:shadow-2xl transition-all duration-700">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-navy uppercase tracking-tight flex items-center gap-3">
                   <BarChart3 className="w-6 h-6 text-teal" /> Growth Timeline
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase">
                   <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-teal" />
                       <span className="text-slate-400">Total Value</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-slate-100 border border-slate-200" />
                       <span className="text-slate-400">Principal</span>
                   </div>
                </div>
             </div>
             
             <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={results.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0EA5A0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0EA5A0" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                       dataKey="year" 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} 
                       dy={10} 
                       label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: '#94a3b8', fontSize: 10, fontWeight: 900 }}
                    />
                    <YAxis 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} 
                       tickFormatter={(v) => `${v/1000}k`}
                    />
                    <Tooltip 
                       contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)', padding: '20px'}} 
                       formatter={(value) => [`${value} €`]}
                    />
                    <Area type="monotone" dataKey="balance" stroke="#0EA5A0" strokeWidth={4} fillOpacity={1} fill="url(#colorBalance)" />
                    <Area type="monotone" dataKey="invested" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorInvested)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </Card>

          {/* Expert Insight */}
          <div className="bg-teal/5 p-12 rounded-[3.5rem] border-4 border-teal/10 flex flex-col md:flex-row items-center gap-10 group hover:bg-white hover:border-teal transition-all duration-500">
             <div className="w-24 h-24 rounded-[2rem] bg-teal flex items-center justify-center text-white shadow-2xl shrink-0 group-hover:rotate-12 transition-transform">
                <ArrowUpRight className="w-12 h-12" />
             </div>
             <div>
                <h4 className="text-2xl font-heading font-black text-navy mb-3 tracking-tight">Maximizing your returns</h4>
                <p className="text-slate-500 font-bold leading-relaxed mb-6">
                   While 7% is a solid historical average for ETFs, ERGO premium products offer 
                   structured guarantees and tax advantages that can significantly boost your net outcome in Germany.
                </p>
                <div className="flex items-center gap-4">
                   <button className="h-14 px-8 rounded-2xl bg-navy text-white font-black uppercase tracking-widest text-xs hover:bg-teal transition-all shadow-xl">
                      Get Investment Guide
                   </button>
                   <button className="h-14 px-8 rounded-2xl border-4 border-slate-50 text-slate-400 font-black uppercase tracking-widest text-xs hover:border-teal hover:text-navy transition-all">
                      Learn More
                   </button>
                </div>
             </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        .recharts-area-path {
           transition: all 0.5s ease;
        }
      `}</style>
    </div>
  );
}
