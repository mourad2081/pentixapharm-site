"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Calculator, ChevronRight, ChevronLeft, Send, CheckCircle2, TrendingUp, Building2, Briefcase, Landmark } from "lucide-react";

// Animated Number Component
function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString("de-DE"));
  useEffect(() => { spring.set(value); }, [spring, value]);
  return <motion.span>{display}</motion.span>;
}

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
      income: isEn ? "Gross Monthly Income (€)" : "Brutto-Monatseinkommen (€)",
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
      target: isEn ? "Target retirement income (% of current net)" : "Zielrente (% vom aktuellen Netto)",
      retAge: isEn ? "Planned retirement age" : "Geplantes Renteneintrittsalter",
    },
    results: {
      gap: isEn ? "Monthly Pension Gap" : "Monatliche Rentenlücke",
      savings: isEn ? "Recommended Monthly Savings" : "Empfohlene Sparrate",
      chartTarget: isEn ? "Target Income" : "Wunschrente",
      chartCurrent: isEn ? "Current Provisions" : "Rentenansprüche",
      chartGap: isEn ? "Pension Gap" : "Rentenlücke",
      sendEmail: isEn ? "Send analysis as PDF via E-Mail" : "Analyse als PDF per E-Mail erhalten",
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
    const totalGapNeeded = gap * 12 * 20; // Needs 20 years
    const monthlyRate = 0.04 / 12; // 4% conservative
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
    <div className="w-full max-w-4xl mx-auto py-12 px-4 relative z-10 font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-white shadow-xl shadow-teal/5 border border-teal/10 mb-6">
          <Calculator className="h-10 w-10 text-teal" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl text-navy font-heading font-black mb-4 tracking-tight">
          {text.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground max-w-xl mx-auto">
          {text.desc}
        </motion.p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12 max-w-2xl mx-auto relative px-4">
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-teal to-blue-500 transition-all duration-700 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
        </div>
        <div className="flex justify-between mt-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <span className={step >= 1 ? "text-teal" : ""}>Step 1</span>
          <span className={step >= 2 ? "text-teal" : ""}>Step 2</span>
          <span className={step >= 3 ? "text-teal" : ""}>Step 3</span>
          <span className={step >= 4 ? "text-teal" : ""}>Result</span>
        </div>
      </div>

      {/* Calculator Card */}
      <Card className="shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white bg-white/60 backdrop-blur-3xl overflow-hidden rounded-[2.5rem]">
        <CardContent className="p-0">
          <AnimatePresence mode="wait">
            
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-heading font-black text-navy mb-8">{text.step1.title}</h2>
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">{text.step1.age}</Label>
                      <span className="text-4xl font-black text-teal">{vals.age[0]}</span>
                    </div>
                    <Slider value={vals.age as number[]} onValueChange={(v) => setValue("age", v)} max={60} min={20} step={1} className="py-2" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step1.income}</Label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl text-muted-foreground font-bold">€</span>
                      <Input type="number" placeholder="z.B. 4500" className="h-16 pl-12 text-2xl font-bold bg-white border-2 border-slate-100 rounded-2xl focus-visible:ring-0 focus-visible:border-teal transition-colors shadow-sm" onChange={(e) => setValue("income", e.target.value)} value={vals.income} />
                    </div>
                    {errors.income && <p className="text-sm text-[#FF6B6B] font-bold">{errors.income.message}</p>}
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step1.employment}</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {empTypes.map(emp => (
                        <button
                          key={emp.id}
                          onClick={() => setValue("employment", emp.id)}
                          className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-200 group ${
                            vals.employment === emp.id 
                            ? "border-teal bg-teal/5 shadow-md shadow-teal/10" 
                            : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <emp.icon className={`h-8 w-8 mb-3 transition-colors ${vals.employment === emp.id ? "text-teal" : "text-slate-400 group-hover:text-slate-600"}`} />
                          <span className={`font-bold ${vals.employment === emp.id ? "text-navy" : "text-slate-500"}`}>{emp.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.employment && <p className="text-sm text-[#FF6B6B] font-bold">{errors.employment.message}</p>}
                  </div>
                </div>

                <div className="mt-14 flex justify-end">
                  <Button onClick={() => { if (!vals.income || !vals.employment) form.trigger(["income", "employment"]); else setStep(2); }} className="bg-navy hover:bg-navy/90 text-white px-10 h-16 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    {text.next} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-heading font-black text-navy mb-8">{text.step2.title}</h2>
                <div className="space-y-8">
                  {[
                    { id: "expectedPension", label: text.step2.statutory, sub: text.step2.statutorySub },
                    { id: "privatePension", label: text.step2.private },
                    { id: "companyPension", label: text.step2.company }
                  ].map((field) => (
                    <div className="space-y-3" key={field.id}>
                      <Label className="text-lg text-navy font-bold leading-tight flex flex-col items-start gap-1">
                        {field.label}
                        {field.sub && <span className="text-sm text-teal italic font-medium">{field.sub}</span>}
                      </Label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl text-muted-foreground font-bold">€</span>
                        <Input 
                          type="number" 
                          placeholder="0" 
                          className="h-16 pl-12 text-2xl font-bold bg-white border-2 border-slate-100 rounded-2xl focus-visible:ring-0 focus-visible:border-teal transition-colors shadow-sm" 
                          onChange={(e) => setValue(field.id as any, e.target.value)} 
                          value={vals[field.id as keyof FormValues] as string} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(1)} className="px-6 h-16 text-lg font-bold rounded-2xl text-slate-400 hover:text-navy hover:bg-slate-100">
                    <ChevronLeft className="mr-2 h-5 w-5" /> {text.prev}
                  </Button>
                  <Button onClick={() => setStep(3)} className="bg-navy hover:bg-navy/90 text-white px-10 h-16 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    {text.next} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-heading font-black text-navy mb-8">{text.step3.title}</h2>
                <div className="space-y-14">
                  <div className="space-y-8">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">{text.step3.target}</Label>
                      <span className="text-4xl font-black text-teal">{vals.targetPercent[0]}%</span>
                    </div>
                    <Slider value={vals.targetPercent as number[]} onValueChange={(v) => setValue("targetPercent", v)} max={100} min={50} step={5} className="py-2" />
                    <div className="bg-gradient-to-r from-teal/10 to-teal/5 p-5 rounded-2xl border border-teal/10 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal shrink-0 flex items-center justify-center text-white font-bold text-sm">i</div>
                      <p className="text-sm text-navy font-medium pt-1.5 leading-relaxed">
                        Experten empfehlen mindestens <strong>80% des aktuellen Nettoeinkommens</strong>, um den gewohnten Lebensstandard im Alter problemlos halten zu können.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">{text.step3.retAge}</Label>
                      <span className="text-4xl font-black text-teal">{vals.retirementAge[0]} Jahre</span>
                    </div>
                    <Slider value={vals.retirementAge as number[]} onValueChange={(v) => setValue("retirementAge", v)} max={70} min={60} step={1} className="py-2" />
                  </div>
                </div>

                <div className="mt-14 flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(2)} className="px-6 h-16 text-lg font-bold rounded-2xl text-slate-400 hover:text-navy hover:bg-slate-100">
                    <ChevronLeft className="mr-2 h-5 w-5" /> {text.prev}
                  </Button>
                  <Button onClick={calculateResults} className="bg-teal hover:bg-teal/90 text-white px-10 h-16 text-xl rounded-2xl font-black shadow-xl shadow-teal/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/40 transition-all">
                    {text.calculate}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* RESULTS */}
            {step === 4 && results && (
              <motion.div key="4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 md:p-14">
                {/* Huge Number Spotlight */}
                <div className="text-center pb-12 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6B6B]/10 blur-[100px] rounded-full z-0 pointer-events-none" />
                  <h2 className="text-2xl font-bold text-navy mb-4 font-heading relative z-10">{text.results.gap}</h2>
                  <div className="text-7xl md:text-9xl font-black text-[#FF6B6B] tracking-tight relative z-10 drop-shadow-sm">
                    -<AnimatedNumber value={results.gap} /> <span className="text-5xl md:text-7xl">€</span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 mt-4">
                  {/* Left: Chart */}
                  <div className="w-full lg:w-1/2 h-[400px] bg-slate-50/50 rounded-3xl p-6 border border-slate-100 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0f172a" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#334155" stopOpacity={1}/>
                          </linearGradient>
                          <linearGradient id="colorProvided" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0EA5A0" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#0d9488" stopOpacity={1}/>
                          </linearGradient>
                          <linearGradient id="colorGap" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF6B6B" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#dc2626" stopOpacity={1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 13, fontWeight: 700}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px 20px'}} />
                        <Bar dataKey="Wert" radius={[12, 12, 0, 0]} barSize={90}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? "url(#colorProvided)" : index === 1 ? "url(#colorGap)" : "url(#colorTarget)"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Right: Actions */}
                  <div className="w-full lg:w-1/2 space-y-8">
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      <Card className="border-2 border-teal bg-gradient-to-br from-teal/5 to-white shadow-xl shadow-teal/5 rounded-[2rem]">
                        <CardContent className="p-8">
                          <div className="text-sm text-teal font-black uppercase tracking-widest mb-3">{text.results.savings}</div>
                          <div className="text-5xl text-navy font-black mb-4">
                            <AnimatedNumber value={results.savings} /> € <span className="text-xl text-muted-foreground font-bold">/ Monat</span>
                          </div>
                          <div className="flex gap-4 items-start mt-6 pt-6 border-t border-teal/10">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                              <TrendingUp className="h-5 w-5 text-red-500" />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                              <strong className="text-navy">Vorsicht Zinseszins:</strong> Warten Sie 5 Jahre, steigt Ihre nötige Sparrate radikal auf <strong className="text-red-500">{results.delayedSavings.toLocaleString('de-DE')} €</strong> / Monat an!
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {!submitted ? (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-navy p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.2)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
                        <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-xl relative z-10"><Send className="h-6 w-6 text-teal"/> {text.results.sendEmail}</h4>
                        <div className="space-y-4 relative z-10">
                          <Input placeholder={"Name"} onChange={(e) => setValue("leadName", e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg rounded-xl focus-visible:ring-teal" />
                          <Input placeholder={"E-Mail"} type="email" onChange={(e) => setValue("leadEmail", e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg rounded-xl focus-visible:ring-teal" />
                          <Button className="w-full bg-teal text-white hover:bg-teal/90 h-14 mt-2 text-lg font-bold rounded-xl shadow-lg shadow-teal/20" onClick={submitLead} disabled={isSubmitting || !vals.leadEmail}>
                            {isSubmitting ? "Wird gesendet..." : "Analyse als PDF anfordern"}
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-teal p-8 rounded-[2rem] text-center flex flex-col items-center justify-center h-[280px] shadow-xl shadow-teal/20">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 className="h-10 w-10 text-white" />
                        </div>
                        <h4 className="font-black text-white text-2xl mb-2">Gesendet!</h4>
                        <p className="text-teal-50 text-lg font-medium">Wir haben Ihre Auswertung per E-Mail verschickt.</p>
                      </motion.div>
                    )}
                  </div>
                </div>
                
                <div className="mt-14 text-center">
                  <Button variant="ghost" onClick={() => setStep(1)} className="text-slate-400 font-bold hover:text-navy hover:bg-slate-100 rounded-full text-lg py-6 px-8">
                     Neu berechnen
                  </Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
