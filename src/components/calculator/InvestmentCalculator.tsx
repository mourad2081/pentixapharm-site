"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  ReferenceDot,
  ReferenceLine
} from "recharts";
import { 
  TrendingUp, 
  Coins, 
  Calendar, 
  Percent, 
  Wallet, 
  BarChart3,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MoveRight,
  History,
  Target,
  User
} from "lucide-react";

// Types
type FormValues = {
  initial: number[];
  monthly: number[];
  years: number[];
  rate: number[];
  currentAge: number[];
};

export function InvestmentCalculator() {
  const [vals, setVals] = useState<FormValues>({
    initial: [5000],
    monthly: [300],
    years: [25],
    rate: [7],
    currentAge: [30]
  });

  const [hoverYear, setHoverYear] = useState<number | null>(null);

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
      age: vals.currentAge[0],
      balance: Math.round(currentBalance),
      invested: Math.round(totalInvested),
    });

    for (let i = 1; i <= n; i++) {
        currentBalance = currentBalance * (1 + r) + PMT;
        totalInvested += PMT;
        
        if (i % 12 === 0) {
            chartData.push({
                year: i / 12,
                age: vals.currentAge[0] + (i / 12),
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

  const updateVal = (key: keyof FormValues, delta: number, min: number, max: number) => {
    setVals(prev => {
      const newVal = Math.min(max, Math.max(min, prev[key][0] + delta));
      return { ...prev, [key]: [newVal] };
    });
  };

  const selectedData = hoverYear !== null ? results.chartData.find(d => d.year === hoverYear) : results.chartData[results.chartData.length - 1];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 relative z-10 font-sans selection:bg-teal selection:text-white">
      {/* Dynamic BG */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] rounded-full bg-teal/5 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[150px] animate-pulse delay-700" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center justify-center p-6 rounded-[2.5rem] bg-white shadow-2xl shadow-teal/5 border border-teal/10 mb-8 hover:rotate-6 transition-all duration-500">
          <TrendingUp className="h-12 w-12 text-teal" />
        </div>
        <h1 className="text-6xl md:text-8xl text-navy font-heading font-black mb-6 tracking-tighter">
          Impact <span className="text-teal">Visualizer</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Drag the arrows or use the timeline to see how small changes today create massive wealth for your future self.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
        
        {/* Controls Column */}
        <div className="xl:col-span-4 space-y-6 animate-in slide-in-from-left-8 duration-700">
          
          {/* Inputs with Draggable Style Arrow Controls */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { id: 'initial', label: 'Initial Deposit', icon: Wallet, unit: '€', step: 1000, min: 0, max: 250000, color: 'teal' },
              { id: 'monthly', label: 'Monthly Savings', icon: Coins, unit: '€', step: 50, min: 0, max: 10000, color: 'teal' },
              { id: 'years', label: 'Investment Horizon', icon: Calendar, unit: 'Yrs', step: 1, min: 1, max: 50, color: 'blue' },
              { id: 'rate', label: 'Expected Return', icon: Percent, unit: '%', step: 0.5, min: 1, max: 15, color: 'blue' },
              { id: 'currentAge', label: 'Your Current Age', icon: User, unit: 'Yrs', step: 1, min: 18, max: 70, color: 'navy' }
            ].map((input) => (
              <Card key={input.id} className="border-4 border-slate-50 bg-white hover:border-teal/20 transition-all duration-300 rounded-[2rem] overflow-hidden group">
                <CardContent className="p-6">
                   <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                         <div className={`p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-teal group-hover:text-white transition-all`}>
                            <input.icon className="w-5 h-5" />
                         </div>
                         <Label className="font-black text-navy uppercase text-[10px] tracking-widest">{input.label}</Label>
                      </div>
                      <div className="flex items-baseline gap-1">
                         <span className="text-3xl font-black text-navy tabular-nums">
                            {input.id === 'rate' ? vals[input.id as keyof FormValues][0].toFixed(1) : vals[input.id as keyof FormValues][0].toLocaleString()}
                         </span>
                         <span className="text-slate-400 font-bold text-xs uppercase">{input.unit}</span>
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <button 
                        onClick={() => updateVal(input.id as any, -input.step, input.min, input.max)}
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-navy hover:text-white transition-all shrink-0 active:scale-90"
                      >
                         <ChevronLeft className="w-6 h-6" />
                      </button>
                      
                      <Slider 
                        value={vals[input.id as keyof FormValues]} 
                        onValueChange={(v) => setVals({...vals, [input.id]: v})}
                        max={input.max} 
                        min={input.min} 
                        step={input.step} 
                        className="flex-grow"
                      />

                      <button 
                        onClick={() => updateVal(input.id as any, input.step, input.min, input.max)}
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-navy hover:text-white transition-all shrink-0 active:scale-90"
                      >
                         <ChevronRight className="w-6 h-6" />
                      </button>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-navy p-10 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl shadow-navy/20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(14,165,160,0.2)_0%,transparent_50%)]" />
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Target className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black mb-4 tracking-tight leading-none">The 1% Rule</h4>
                <p className="text-slate-400 font-bold text-sm leading-relaxed">
                  Increasing your return rate by just <span className="text-teal font-black">1%</span> or starting <span className="text-teal font-black">5 years earlier</span> 
                  can result in over <span className="text-white underline decoration-teal">100,000€</span> difference in your final payout.
                </p>
             </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="xl:col-span-8 space-y-10 animate-in slide-in-from-right-8 duration-1000">
          
          {/* Life Impact Header */}
          <div className="bg-white border-4 border-slate-50 p-10 rounded-[3.5rem] shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-bl-full translate-x-12 -translate-y-12" />
             <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="text-center md:text-left">
                   <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Portfolio @ Age {selectedData?.age}</h3>
                   <div className="text-7xl md:text-8xl font-black text-navy tracking-tighter tabular-nums mb-2">
                      {selectedData?.balance.toLocaleString()}
                      <span className="text-3xl text-teal ml-4">€</span>
                   </div>
                   <div className="flex items-center gap-3 justify-center md:justify-start">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                         Interest: { (selectedData!.balance - selectedData!.invested).toLocaleString() }€
                      </span>
                      <MoveRight className="w-4 h-4 text-teal animate-pulse" />
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 shrink-0">
                   <Card className="bg-teal p-6 rounded-[2rem] text-white border-none shadow-xl shadow-teal/20">
                      <p className="text-[10px] font-black uppercase opacity-60 mb-2">Invested</p>
                      <p className="text-2xl font-black leading-none">{selectedData?.invested.toLocaleString()}€</p>
                   </Card>
                   <Card className="bg-navy p-6 rounded-[2rem] text-white border-none shadow-xl shadow-navy/20">
                      <p className="text-[10px] font-black uppercase opacity-60 mb-2">Interest</p>
                      <p className="text-2xl font-black leading-none text-teal">+{ (selectedData!.balance - selectedData!.invested).toLocaleString() }€</p>
                   </Card>
                </div>
             </div>
          </div>

          {/* Interactive Chart */}
          <Card className="bg-white border-4 border-slate-50 rounded-[4rem] shadow-2xl p-8 md:p-12 relative overflow-hidden">
             <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-8 bg-teal rounded-full" />
                   <h3 className="text-3xl font-heading font-black text-navy tracking-tight">Life Growth Timeline</h3>
                </div>
                <div className="hidden sm:flex items-center gap-6">
                   <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-teal" />
                       <span className="text-[10px] font-black text-slate-400 uppercase">Total Capital</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-slate-200" />
                       <span className="text-[10px] font-black text-slate-400 uppercase">Your Deposits</span>
                   </div>
                </div>
             </div>

             <div className="h-[450px] w-full cursor-crosshair group/chart">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart 
                    data={results.chartData} 
                    margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
                    onMouseMove={(e) => {
                      if (e.activePayload) setHoverYear(e.activePayload[0].payload.year);
                    }}
                    onMouseLeave={() => setHoverYear(null)}
                  >
                    <defs>
                      <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0EA5A0" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#0EA5A0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                       dataKey="age" 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 800}} 
                       dy={20}
                    />
                    <YAxis 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{fill: '#cbd5e1', fontSize: 11, fontWeight: 700}}
                       tickFormatter={(v) => `${v/1000}k`}
                    />
                    <Tooltip 
                       content={<CustomTooltip />}
                       cursor={{ stroke: '#0EA5A0', strokeWidth: 2, strokeDasharray: '5 5' }}
                    />
                    <Area 
                       type="monotone" 
                       dataKey="balance" 
                       stroke="#0EA5A0" 
                       strokeWidth={6} 
                       fillOpacity={1} 
                       fill="url(#colorImpact)" 
                       animationDuration={1500}
                    />
                    <Area 
                       type="monotone" 
                       dataKey="invested" 
                       stroke="#cbd5e1" 
                       strokeWidth={3} 
                       strokeDasharray="10 10" 
                       fill="transparent" 
                       animationDuration={1500}
                    />
                    
                    {/* Floating Indicators */}
                    {hoverYear !== null && (
                      <ReferenceDot 
                        x={vals.currentAge[0] + hoverYear} 
                        y={selectedData?.balance} 
                        r={8} 
                        fill="#0EA5A0" 
                        stroke="#fff" 
                        strokeWidth={4} 
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
                
                {/* Horizontal Drag Area label */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-navy/5 px-6 py-2 rounded-full border border-navy/5 animate-pulse">
                   <ChevronLeft className="w-4 h-4 text-slate-400" />
                   <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Hover graph to select year</span>
                   <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
             </div>
          </Card>

          {/* Quick Impact Presets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { label: "High Growth (10%)", rate: 10, monthly: vals.monthly[0], icon: ArrowUpRight },
               { label: "Power Saver (+200€)", rate: vals.rate[0], monthly: vals.monthly[0] + 200, icon: Wallet },
               { label: "Long Game (+10 Yrs)", rate: vals.rate[0], years: vals.years[0] + 10, icon: History },
             ].map((preset, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    if (preset.rate) setVals(v => ({...v, rate: [preset.rate]}));
                    if (preset.monthly) setVals(v => ({...v, monthly: [preset.monthly]}));
                    if (preset.years) setVals(v => ({...v, years: [preset.years]}));
                  }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] text-left hover:bg-teal hover:text-white transition-all duration-500 group border-4 border-transparent hover:border-white shadow-sm hover:shadow-2xl"
                >
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform shadow-sm">
                      <preset.icon className="w-6 h-6" />
                   </div>
                   <h5 className="font-black uppercase tracking-widest text-[10px] opacity-40 group-hover:opacity-100 mb-1">Preset</h5>
                   <p className="font-black text-lg leading-tight tracking-tight">{preset.label}</p>
                </button>
             ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .recharts-area-path {
           transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy p-6 rounded-[2rem] border-4 border-white shadow-2xl animate-in zoom-in-95">
        <p className="text-[10px] font-black text-teal uppercase tracking-widest mb-3">Age {payload[0].payload.age}</p>
        <div className="space-y-2">
           <div className="flex justify-between gap-8 items-center">
              <span className="text-white/60 text-xs font-bold">Total Portfolio</span>
              <span className="text-white font-black text-xl">{payload[0].value.toLocaleString()}€</span>
           </div>
           <div className="flex justify-between gap-8 items-center border-t border-white/10 pt-2">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Your Deposits</span>
              <span className="text-slate-400 font-bold text-xs">{payload[1].value.toLocaleString()}€</span>
           </div>
        </div>
      </div>
    );
  }
  return null;
}
