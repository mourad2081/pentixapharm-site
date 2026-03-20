"use client";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { 
  Calculator, 
  ChevronRight, 
  ChevronLeft, 
  Send, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  Briefcase, 
  Landmark, 
  Info,
  Euro,
  User,
  PieChart as PieChartIcon
} from "lucide-react";

const calcSchema = z.object({
  age: z.array(z.number()),
  income: z.string().min(1, "Bitte Einkommen angeben"),
  employment: z.string().min(1, "Bitte Status wählen"),
  expectedPension: z.string().optional(),
  privatePension: z.string().optional(),
  companyPension: z.string().optional(),
  targetPercent: z.array(z.number()),
  retirementAge: z.array(z.number()),
  leadName: z.string().optional(),
  leadEmail: z.string().email("Ungültige E-Mail").optional().or(z.literal('')),
  leadPhone: z.string().optional(),
  consent: z.boolean().optional(),
});

type FormValues = z.infer<typeof calcSchema>;

export function PensionCalculator() {
  const locale = useLocale();
  const isEn = locale === 'en';
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<{target: number; provided: number; gap: number; savings: number; delayedSavings: number} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const text = {
    title: isEn ? "Pension Gap Calculator" : "Rentenlücken Rechner",
    desc: isEn ? "Discover your retirement needs in 4 simple steps." : "Finden Sie in 4 simplen Schritten Ihre Rentenlücke heraus.",
    next: isEn ? "Next step" : "Nächster Schritt",
    prev: isEn ? "Back" : "Zurück",
    calculate: isEn ? "Calculate Now" : "Ergebnis Berechnen",
    step1: {
      title: isEn ? "Personal Info" : "Persönliche Daten",
      age: isEn ? "Current Age" : "Aktuelles Alter",
      income: isEn ? "Gross Monthly Income" : "Brutto-Monatseinkommen",
      employment: isEn ? "Employment Status" : "Beschäftigungsverhältnis",
    },
    step2: {
      title: isEn ? "Current Provisions" : "Bisherige Vorsorge",
      statutory: isEn ? "Expected statutory pension" : "Erwartete gesetzliche Rente",
      statutorySub: isEn ? "Leave empty to auto-estimate" : "Leer lassen für Schätzung",
      private: isEn ? "Existing private pension" : "Bestehende private Rente",
      company: isEn ? "Company pension plan" : "Betriebliche Vorsorge",
    },
    step3: {
      title: isEn ? "Desired Lifestyle" : "Wunsch-Lebensstandard",
      target: isEn ? "Target retirement income (% of net)" : "Zielrente (% vom aktuellen Netto)",
      retAge: isEn ? "Planned retirement age" : "Geplantes Renteneintrittsalter",
    },
    results: {
      gap: isEn ? "Monthly Pension Gap" : "Monatliche Rentenlücke",
      savings: isEn ? "Recommended Monthly Savings" : "Empfohlene Sparrate",
      chartTarget: isEn ? "Target Income" : "Wunschrente",
      chartCurrent: isEn ? "Current Provisions" : "Rentenansprüche",
      chartGap: isEn ? "Pension Gap" : "Rentenlücke",
      sendEmail: isEn ? "Send analysis as PDF" : "Analyse als PDF erhalten",
    }
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(calcSchema),
    defaultValues: {
      age: [35],
      income: "",
      employment: "",
      expectedPension: "",
      privatePension: "",
      companyPension: "",
      targetPercent: [80],
      retirementAge: [67],
    }
  });

  const { watch, setValue, formState: { errors } } = form;
  const vals = watch();

  const calculateResults = () => {
    const gross = parseFloat(vals.income || "0");
    const net = gross * 0.65;
    const target = net * (vals.targetPercent[0] / 100);
    
    let statutory = parseFloat(vals.expectedPension || "0");
    if (statutory === 0) {
      if (vals.employment === "Angestellt") statutory = gross * 0.45;
      if (vals.employment === "Selbstständig") statutory = 0;
      if (vals.employment === "Beamter") statutory = gross * 0.65;
    }

    const totalProvided = statutory + parseFloat(vals.privatePension || "0") + parseFloat(vals.companyPension || "0");
    const gap = Math.max(0, target - totalProvided);
    
    const yearsToRetire = vals.retirementAge[0] - vals.age[0];
    const totalGapNeeded = gap * 12 * 20; 
    const monthlyRate = 0.04 / 12; 
    const months = yearsToRetire * 12;
    const recommendedSavings = Math.max(0, (totalGapNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1));

    const totalGapNeededDelayed = gap * 12 * 20;
    const monthsDelayed = (yearsToRetire - 5) * 12;
    const delayedSavings = Math.max(0, (totalGapNeededDelayed * monthlyRate) / (Math.pow(1 + monthlyRate, monthsDelayed) - 1));

    setResults({
      target: Math.round(target),
      provided: Math.round(totalProvided),
      gap: Math.round(gap),
      savings: Math.round(recommendedSavings),
      delayedSavings: Math.round(delayedSavings)
    });
    setStep(4);
  };

  const submitLead = async () => {
    if (!vals.leadEmail) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const chartData = results ? [
    { name: text.results.chartCurrent, Wert: results.provided, fill: "#0EA5A0" },
    { name: text.results.chartGap, Wert: results.gap, fill: "#FF6B6B" },
    { name: text.results.chartTarget, Wert: results.target, fill: "#0f172a" }
  ] : [];

  const empTypes = [
    { id: "Angestellt", icon: Building2, label: isEn ? "Employed" : "Angestellt" },
    { id: "Selbstständig", icon: Briefcase, label: isEn ? "Freelancer" : "Selbstständig" },
    { id: "Beamter", icon: Landmark, label: isEn ? "Civil Servant" : "Beamter" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 relative z-10 font-sans selection:bg-teal selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center justify-center p-5 rounded-[2rem] bg-white shadow-2xl shadow-teal/5 border border-teal/10 mb-8 hover:scale-110 transition-transform duration-500">
          <Calculator className="h-12 w-12 text-teal" />
        </div>
        <h1 className="text-5xl md:text-6xl text-navy font-heading font-black mb-6 tracking-tight">
          {text.title}
        </h1>
        <p className="text-xl text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
          {text.desc}
        </p>
      </div>

      {/* Advanced Step Indicators */}
      <div className="mb-16 max-w-3xl mx-auto relative px-4">
        <div className="flex justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
             <div 
               className="h-full bg-teal transition-all duration-700 ease-in-out" 
               style={{ width: `${((step - 1) / 3) * 100}%` }} 
             />
          </div>
          
          {[
            { id: 1, icon: User, label: "Profile" },
            { id: 2, icon: Euro, label: "Current" },
            { id: 3, icon: PieChartIcon, label: "Goals" },
            { id: 4, icon: CheckCircle2, label: "Result" }
          ].map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-4 ${
                  step === s.id 
                    ? "bg-teal text-white border-white shadow-xl shadow-teal/20 scale-110" 
                    : step > s.id 
                      ? "bg-teal text-white border-white" 
                      : "bg-white text-slate-300 border-slate-50"
                }`}
              >
                <s.icon className="w-6 h-6" />
              </div>
              <span className={`text-xs font-black uppercase tracking-widest ${step >= s.id ? "text-navy" : "text-slate-400"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Calculator Main Container */}
      <Card className="shadow-2xl border border-white bg-white/70 backdrop-blur-3xl overflow-hidden rounded-[3rem] animate-in zoom-in-95 duration-500">
        <CardContent className="p-0">
          
          {/* STEP 1: Profile */}
          {step === 1 && (
            <div className="p-10 md:p-16 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-10 bg-teal rounded-full" />
                <h2 className="text-4xl font-heading font-black text-navy">{text.step1.title}</h2>
              </div>

              <div className="space-y-14">
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <Label className="text-xl text-navy font-black tracking-tight">{text.step1.age}</Label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-black text-teal tabular-nums">{vals.age[0]}</span>
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Years</span>
                    </div>
                  </div>
                  <Slider value={vals.age} onValueChange={(v) => setValue("age", v)} max={65} min={18} step={1} className="py-2" />
                </div>

                <div className="space-y-6">
                  <Label className="text-xl text-navy font-black tracking-tight">{text.step1.income}</Label>
                  <div className="relative group">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-slate-300 font-black group-focus-within:text-teal transition-colors">€</span>
                    <Input 
                      type="number" 
                      placeholder="0" 
                      className="h-20 pl-14 text-4xl font-black bg-white/50 border-4 border-slate-50 rounded-[2rem] focus-visible:ring-0 focus-visible:border-teal transition-all shadow-sm focus-within:shadow-xl focus-within:bg-white" 
                      onChange={(e) => setValue("income", e.target.value)} 
                      value={vals.income} 
                    />
                  </div>
                  {errors.income && <p className="text-sm text-red-500 font-black uppercase ml-4">{errors.income.message}</p>}
                </div>

                <div className="space-y-6">
                  <Label className="text-xl text-navy font-black tracking-tight">{text.step1.employment}</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {empTypes.map(emp => (
                      <button
                        key={emp.id}
                        onClick={() => setValue("employment", emp.id)}
                        className={`flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-4 transition-all duration-300 group relative overflow-hidden ${
                          vals.employment === emp.id 
                          ? "border-teal bg-teal text-white shadow-xl shadow-teal/20" 
                          : "border-slate-50 bg-slate-50/50 hover:border-slate-100 hover:bg-white text-slate-500"
                        }`}
                      >
                        <emp.icon className={`h-10 w-10 mb-4 transition-transform duration-500 group-hover:scale-110 ${vals.employment === emp.id ? "text-white" : "text-teal"}`} />
                        <span className="font-black text-sm uppercase tracking-widest">{emp.label}</span>
                      </button>
                    ))}
                  </div>
                  {errors.employment && <p className="text-sm text-red-500 font-black uppercase ml-4">{errors.employment.message}</p>}
                </div>
              </div>

              <div className="mt-16 flex justify-end">
                <Button 
                  onClick={() => { if (!vals.income || !vals.employment) form.trigger(["income", "employment"]); else setStep(2); }} 
                  className="bg-navy hover:bg-teal text-white px-12 h-20 text-xl font-black rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-all uppercase tracking-widest flex items-center gap-4"
                >
                  {text.next} <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Current */}
          {step === 2 && (
            <div className="p-10 md:p-16 animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-10 bg-teal rounded-full" />
                <h2 className="text-4xl font-heading font-black text-navy">{text.step2.title}</h2>
              </div>
              
              <div className="space-y-10">
                {[
                  { id: "expectedPension", label: text.step2.statutory, sub: text.step2.statutorySub, icon: Landmark },
                  { id: "privatePension", label: text.step2.private, icon: Briefcase },
                  { id: "companyPension", label: text.step2.company, icon: Building2 }
                ].map((field) => (
                  <div className="space-y-4" key={field.id}>
                    <div className="flex items-center gap-3 ml-4">
                      <field.icon className="w-5 h-5 text-teal" />
                      <Label className="text-xl text-navy font-black tracking-tight">{field.label}</Label>
                    </div>
                    {field.sub && <p className="text-sm text-teal font-black italic ml-12 mb-2 uppercase tracking-wide">{field.sub}</p>}
                    <div className="relative group">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-slate-300 font-black group-focus-within:text-teal transition-colors">€</span>
                      <Input 
                        type="number" 
                        placeholder="0" 
                        className="h-16 pl-14 text-3xl font-black bg-white/50 border-4 border-slate-50 rounded-3xl focus-visible:ring-0 focus-visible:border-teal transition-all shadow-sm focus-within:shadow-xl focus-within:bg-white" 
                        onChange={(e) => setValue(field.id as any, e.target.value)} 
                        value={vals[field.id as keyof FormValues] as string} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)} className="px-8 h-16 text-lg font-black rounded-3xl text-slate-400 hover:text-navy hover:bg-slate-100 transition-all uppercase tracking-widest">
                  <ChevronLeft className="mr-2 h-6 w-6" /> {text.prev}
                </Button>
                <Button onClick={() => setStep(3)} className="bg-navy hover:bg-teal text-white px-12 h-20 text-xl font-black rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-all uppercase tracking-widest flex items-center gap-4">
                  {text.next} <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Goals */}
          {step === 3 && (
            <div className="p-10 md:p-16 animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-10 bg-teal rounded-full" />
                <h2 className="text-4xl font-heading font-black text-navy">{text.step3.title}</h2>
              </div>

              <div className="space-y-16">
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <Label className="text-xl text-navy font-black tracking-tight">{text.step3.target}</Label>
                    <span className="text-6xl font-black text-teal tabular-nums">{vals.targetPercent[0]}%</span>
                  </div>
                  <Slider value={vals.targetPercent} onValueChange={(v) => setValue("targetPercent", v)} max={100} min={50} step={5} className="py-2" />
                  
                  <div className="bg-teal/5 p-8 rounded-[2rem] border-2 border-dashed border-teal/20 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal shrink-0 flex items-center justify-center text-white shadow-lg">
                      <Info className="w-8 h-8" />
                    </div>
                    <p className="text-base text-navy font-bold leading-relaxed">
                      Experts advise at least <strong className="text-teal">80% of current net income</strong> to maintain your living standard without stress.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <Label className="text-xl text-navy font-black tracking-tight">{text.step3.retAge}</Label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-black text-teal tabular-nums">{vals.retirementAge[0]}</span>
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Years</span>
                    </div>
                  </div>
                  <Slider value={vals.retirementAge} onValueChange={(v) => setValue("retirementAge", v)} max={72} min={60} step={1} className="py-2" />
                </div>
              </div>

              <div className="mt-20 flex justify-between gap-6">
                <Button variant="ghost" onClick={() => setStep(2)} className="px-8 h-16 text-lg font-black rounded-3xl text-slate-400 hover:text-navy hover:bg-slate-100 transition-all uppercase tracking-widest">
                  <ChevronLeft className="mr-2 h-6 w-6" /> {text.prev}
                </Button>
                <Button 
                  onClick={calculateResults} 
                  className="bg-teal hover:bg-navy text-white px-12 h-20 text-3xl font-black rounded-[2.5rem] shadow-2xl shadow-teal/30 hover:-translate-y-2 hover:shadow-teal/50 transition-all uppercase tracking-tighter"
                >
                  {text.calculate}
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && results && (
            <div className="animate-in zoom-in-95 duration-700">
              {/* Massive Result Spotlight */}
              <div className="bg-navy p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,160,0.4)_0%,transparent_60%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[130px] rounded-full" />
                
                <div className="relative z-10">
                  <h2 className="text-teal font-black uppercase tracking-[0.3em] text-sm mb-6">{text.results.gap}</h2>
                  <div className="text-8xl md:text-[11rem] font-black text-[#FF6B6B] tracking-tighter flex items-center justify-center gap-2 mb-4">
                    <span className="opacity-50 text-5xl md:text-8xl">-</span>
                    {results.gap.toLocaleString(locale === 'de' ? 'de-DE' : 'en-US')}
                    <span className="text-5xl md:text-8xl opacity-50">€</span>
                  </div>
                  <p className="text-xl text-slate-400 font-bold uppercase tracking-widest">Monthly Shortfall @ Age {vals.retirementAge[0]}</p>
                </div>
              </div>

              <div className="p-8 md:p-14 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Chart with high impact colors */}
                  <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
                    <div className="flex items-center gap-3 ml-4">
                      <div className="w-1.5 h-6 bg-teal rounded-full" />
                      <h3 className="text-2xl font-black text-navy uppercase tracking-tight">Vision Comparison</h3>
                    </div>
                    <div className="h-[350px] bg-slate-50/50 rounded-[2.5rem] p-8 border-4 border-slate-50 relative group">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 13, fontWeight: 900}} dy={15} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                          <Tooltip cursor={{fill: 'rgba(14, 165, 160, 0.05)'}} contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)', padding: '20px'}} />
                          <Bar dataKey="Wert" radius={[16, 16, 0, 0]} barSize={100}>
                            {chartData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={index === 0 ? "#0EA5A0" : index === 1 ? "#FF6B6B" : "#0A1628"} 
                                className="transition-all duration-500 hover:opacity-80"
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Savings Card & Conversion */}
                  <div className="space-y-10 animate-in slide-in-from-right-8 duration-700">
                    <div className="bg-gradient-to-br from-teal via-teal/90 to-blue-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-teal/30 hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden group">
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,white/20_0%,transparent_50%)]" />
                       <div className="relative z-10">
                          <h4 className="text-xs font-black uppercase tracking-[0.25em] mb-4 opacity-80">{text.results.savings}</h4>
                          <div className="text-7xl font-black mb-10 tracking-tighter">
                            {results.savings.toLocaleString(locale === 'de' ? 'de-DE' : 'en-US')}€
                            <span className="text-xl opacity-60 ml-2 uppercase tracking-widest font-bold">/ Month</span>
                          </div>
                          
                          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center gap-4 mb-3">
                              <TrendingUp className="w-6 h-6 text-white" />
                              <span className="font-black uppercase tracking-widest text-sm">Wealth Trap Warning</span>
                            </div>
                            <p className="text-sm leading-relaxed font-bold text-teal-50">
                              Wait just 5 years to start, and your monthly rate spikes to <span className="text-white text-lg underline decoration-white/40">{results.delayedSavings.toLocaleString(locale === 'de' ? 'de-DE' : 'en-US')}€</span>. Every month counts.
                            </p>
                          </div>
                       </div>
                    </div>

                    {!submitted ? (
                      <div className="bg-slate-50 p-10 rounded-[2.5rem] border-4 border-slate-100 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-0 group-focus-within:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                           <h4 className="font-black text-navy text-xl mb-6 flex items-center gap-3 tracking-tight">
                             <Send className="w-6 h-6 text-teal" /> {text.results.sendEmail}
                           </h4>
                           <div className="space-y-4">
                              <Input placeholder="Full Name" onChange={(e) => setValue("leadName", e.target.value)} className="h-14 rounded-2xl border-none bg-white shadow-sm px-6 font-bold focus-visible:ring-2 focus-visible:ring-teal" />
                              <Input placeholder="Email Address" type="email" onChange={(e) => setValue("leadEmail", e.target.value)} className="h-14 rounded-2xl border-none bg-white shadow-sm px-6 font-bold focus-visible:ring-2 focus-visible:ring-teal" />
                              <Button 
                                onClick={submitLead}
                                disabled={isSubmitting || !vals.leadEmail}
                                className="w-full h-16 bg-navy text-white hover:bg-teal rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all active:scale-95 disabled:opacity-50"
                              >
                                {isSubmitting ? "Processing..." : "Get Detailed PDF Report"}
                              </Button>
                           </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-teal p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center animate-in zoom-in-95 shadow-xl shadow-teal/20 h-full">
                         <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                         </div>
                         <h4 className="text-white font-black text-3xl mb-2 tracking-tight">Sent Successfully!</h4>
                         <p className="text-teal-50 font-bold uppercase tracking-widest text-xs">Your PDF analysis is on its way.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                   <button 
                     onClick={() => setStep(1)} 
                     className="px-10 py-5 rounded-2xl bg-slate-50 text-slate-400 font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-100 hover:text-navy transition-all"
                   >
                     Recalculate Values
                   </button>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>
      
      <style jsx global>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
