"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { Calculator, ChevronRight, ChevronLeft, Send, CheckCircle2, TrendingUp } from "lucide-react";

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
      empAngestellt: isEn ? "Employed" : "Angestellt",
      empSelbst: isEn ? "Self-Employed" : "Selbstständig",
      empBeamter: isEn ? "Civil Servant" : "Beamter",
    },
    step2: {
      title: isEn ? "Current Provisions" : "Bisherige Vorsorge",
      statutory: isEn ? "Expected statutory pension (Leave empty to estimate)" : "Erwartete gesetzliche Rente (Leer lassen für Schätzung)",
      private: isEn ? "Existing private pension (€/month)" : "Bestehende private Rente (€/Monat)",
      company: isEn ? "Company pension plan (€/month)" : "Betriebliche Altersvorsorge (€/Monat)",
    },
    step3: {
      title: isEn ? "Desired Lifestyle" : "Wunsch-Lebensstandard",
      target: isEn ? "Target retirement income (% of current net)" : "Zielrente (% vom aktuellen Netto)",
      retAge: isEn ? "Planned retirement age" : "Geplantes Renteneintrittsalter",
    },
    results: {
      title: isEn ? "Your Analysis" : "Ihre Auswertung",
      gap: isEn ? "Monthly Pension Gap" : "Monatliche Rentenlücke",
      savings: isEn ? "Recommended Monthly Savings" : "Empfohlene Sparrate",
      sendEmail: isEn ? "Send analysis as PDF via E-Mail" : "Analyse als PDF per E-Mail erhalten",
      name: isEn ? "Name" : "Name",
      email: isEn ? "E-Mail" : "E-Mail",
      phone: isEn ? "Phone (Optional)" : "Telefon (Optional)",
      consent: isEn ? "I accept the data privacy policy." : "Ich stimme den Datenschutzbestimmungen zu.",
      submit: isEn ? "Send Analysis" : "Analyse anfordern",
      success: isEn ? "Success! We will email you the analysis shortly." : "Erfolgreich! Wir senden Ihnen die Analyse in Kürze.",
      chartTarget: isEn ? "Target Income" : "Wunschrente",
      chartCurrent: isEn ? "Current Provisions" : "Rentenansprüche",
      chartGap: isEn ? "Pension Gap" : "Rentenlücke"
    }
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(calcSchema),
    defaultValues: {
      age: [35],
      income: "",
      employment: "",
      expectedPension: "",
      privatePension: "0",
      companyPension: "0",
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
    { name: text.results.chartTarget, Wert: results.target, fill: "#0A1628" }
  ] : [];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 lg:py-12 px-4 z-10 relative">
      <div className="text-center mb-10">
        <h1 className="text-4xl text-navy font-heading font-black mb-4 flex items-center justify-center gap-3">
          <Calculator className="h-10 w-10 text-teal" /> {text.title}
        </h1>
        <p className="text-xl text-muted-foreground">{text.desc}</p>
      </div>

      <div className="mb-10 max-w-lg mx-auto">
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal transition-all duration-700 ease-in-out" style={{ width: `${(step / 4) * 100}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-xs font-bold text-muted-foreground">
          <span className={step >= 1 ? "text-teal" : ""}>Step 1</span>
          <span className={step >= 2 ? "text-teal" : ""}>Step 2</span>
          <span className={step >= 3 ? "text-teal" : ""}>Step 3</span>
          <span className={step >= 4 ? "text-teal" : ""}>Result</span>
        </div>
      </div>

      <Card className="shadow-2xl border-border/60 bg-white overflow-hidden relative rounded-[2rem]">
        <CardContent className="p-0">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-14"
              >
                <h2 className="text-3xl font-bold text-navy mb-8 font-heading">{text.step1.title}</h2>
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">{text.step1.age}</Label>
                      <span className="text-2xl font-black text-teal">{vals.age[0]}</span>
                    </div>
                    <Slider value={vals.age as number[]} onValueChange={(v) => setValue("age", v)} max={60} min={25} step={1} className="py-4" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step1.income}</Label>
                    <Input type="number" placeholder="z.B. 4500" className="h-14 text-xl border-border/70 focus-visible:ring-teal" onChange={(e) => setValue("income", e.target.value)} value={vals.income} />
                    {errors.income && <p className="text-sm text-destructive">{errors.income.message}</p>}
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step1.employment}</Label>
                    <Select onValueChange={(v) => setValue("employment", v)} value={vals.employment ?? ""}>
                      <SelectTrigger className="h-14 text-xl border-border/70 focus:ring-teal">
                        <SelectValue placeholder="..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Angestellt" className="text-lg py-3">{text.step1.empAngestellt}</SelectItem>
                        <SelectItem value="Selbstständig" className="text-lg py-3">{text.step1.empSelbst}</SelectItem>
                        <SelectItem value="Beamter" className="text-lg py-3">{text.step1.empBeamter}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.employment && <p className="text-sm text-destructive">{errors.employment.message}</p>}
                  </div>
                </div>

                <div className="mt-14 flex justify-end pt-8 border-t border-border/50">
                  <Button onClick={() => { if (!vals.income || !vals.employment) form.trigger(["income", "employment"]); else setStep(2); }} className="bg-navy hover:bg-navy/90 text-white px-10 h-14 text-lg rounded-full shadow-lg hover:-translate-y-1 transition-all">
                    {text.next} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-14"
              >
                <h2 className="text-3xl font-bold text-navy mb-8 font-heading">{text.step2.title}</h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step2.statutory}</Label>
                    <Input type="number" placeholder="z.B. 1200" className="h-14 text-xl border-border/70 focus-visible:ring-teal" onChange={(e) => setValue("expectedPension", e.target.value)} value={vals.expectedPension} />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step2.private}</Label>
                    <Input type="number" placeholder="0" className="h-14 text-xl border-border/70 focus-visible:ring-teal" onChange={(e) => setValue("privatePension", e.target.value)} value={vals.privatePension} />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">{text.step2.company}</Label>
                    <Input type="number" placeholder="0" className="h-14 text-xl border-border/70 focus-visible:ring-teal" onChange={(e) => setValue("companyPension", e.target.value)} value={vals.companyPension} />
                  </div>
                </div>

                <div className="mt-14 flex justify-between pt-8 border-t border-border/50">
                  <Button variant="outline" onClick={() => setStep(1)} className="px-8 h-14 text-lg rounded-full text-muted-foreground border-border hover:text-navy">
                    <ChevronLeft className="mr-2 h-5 w-5" /> {text.prev}
                  </Button>
                  <Button onClick={() => setStep(3)} className="bg-navy hover:bg-navy/90 text-white px-10 h-14 text-lg rounded-full shadow-lg hover:-translate-y-1 transition-all">
                    {text.next} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-14"
              >
                <h2 className="text-3xl font-bold text-navy mb-8 font-heading">{text.step3.title}</h2>
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">{text.step3.target}</Label>
                      <span className="text-3xl font-black text-teal">{vals.targetPercent[0]}%</span>
                    </div>
                    <Slider value={vals.targetPercent as number[]} onValueChange={(v) => setValue("targetPercent", v)} max={100} min={60} step={5} className="py-4" />
                    <p className="text-sm md:text-base text-muted-foreground bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                      Experten empfehlen mindestens 80% des aktuellen Nettoeinkommens, um den gewohnten Lebensstandard im Alter problemlos halten zu können.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">{text.step3.retAge}</Label>
                      <span className="text-3xl font-black text-teal">{vals.retirementAge[0]}</span>
                    </div>
                    <Slider value={vals.retirementAge as number[]} onValueChange={(v) => setValue("retirementAge", v)} max={70} min={62} step={1} className="py-4" />
                  </div>
                </div>

                <div className="mt-14 flex justify-between pt-8 border-t border-border/50">
                  <Button variant="outline" onClick={() => setStep(2)} className="px-8 h-14 text-lg rounded-full text-muted-foreground border-border hover:text-navy">
                    <ChevronLeft className="mr-2 h-5 w-5" /> {text.prev}
                  </Button>
                  <Button onClick={calculateResults} className="bg-teal hover:bg-teal/90 text-white px-10 h-14 text-xl rounded-full font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
                    {text.calculate}
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && results && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-14"
              >
                <div className="text-center pb-8 mb-8 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-100 blur-[80px] rounded-full z-0 opacity-50" />
                  <h2 className="text-2xl font-bold text-navy mb-2 font-heading relative z-10">{text.results.gap}:</h2>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: "spring" }}
                    className="text-6xl md:text-8xl font-black text-[#FF6B6B] tracking-tight relative z-10"
                  >
                    -{results.gap.toLocaleString('de-DE')} €
                  </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 mt-10">
                  <div className="w-full lg:w-1/2 h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 14, fontWeight: 600}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                        <Bar dataKey="Wert" radius={[6, 6, 0, 0]} barSize={80}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                      <Card className="border-teal bg-teal/5 shadow-none">
                        <CardContent className="p-8">
                          <div className="text-sm text-teal font-bold uppercase tracking-wider mb-2">{text.results.savings}</div>
                          <div className="text-5xl text-navy font-black mb-3">
                            {results.savings.toLocaleString('de-DE')} € <span className="text-lg text-muted-foreground font-medium">/ Monat</span>
                          </div>
                          <div className="flex gap-4 items-start mt-6 pt-6 border-t border-teal/10">
                            <TrendingUp className="h-6 w-6 text-teal shrink-0 mt-0.5" />
                            <p className="text-base text-navy leading-relaxed font-medium">
                              <span className="text-[#FF6B6B]">Vorsicht Zinseszins-Effekt:</span><br/>
                              Starten Sie erst in 5 Jahren, steigt Ihre nötige Sparrate radikal auf <strong>{results.delayedSavings.toLocaleString('de-DE')} €</strong> pro Monat an!
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {!submitted ? (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-slate-50 p-8 rounded-2xl border border-border mt-8">
                        <h4 className="font-bold text-navy mb-6 flex items-center gap-2 text-xl"><Send className="h-6 w-6 text-teal"/> {text.results.sendEmail}</h4>
                        <div className="space-y-4">
                          <Input placeholder={text.results.name} onChange={(e) => setValue("leadName", e.target.value)} className="bg-white h-12 text-lg" />
                          <Input placeholder={text.results.email} type="email" onChange={(e) => setValue("leadEmail", e.target.value)} className="bg-white h-12 text-lg" />
                          <div className="flex items-center space-x-3 mt-4">
                            <Checkbox id="consent" className="h-5 w-5" onCheckedChange={(v) => setValue("consent", v === true)} />
                            <label htmlFor="consent" className="text-sm text-muted-foreground leading-snug">{text.results.consent}</label>
                          </div>
                          <Button 
                            className="w-full bg-navy text-white hover:bg-navy/90 h-14 mt-4 text-lg rounded-xl" 
                            onClick={submitLead}
                            disabled={isSubmitting || !vals.leadEmail}
                          >
                            {isSubmitting ? "Wird gesendet..." : text.results.submit}
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-teal/10 p-8 rounded-2xl border border-teal/20 text-center flex flex-col items-center justify-center mt-8 h-[300px]">
                        <CheckCircle2 className="h-20 w-20 text-teal mb-4" />
                        <h4 className="font-bold text-navy text-2xl mb-2">{text.results.success}</h4>
                        <p className="text-muted-foreground text-lg">Wir haben Ihre detaillierte Datenanalyse verschickt.</p>
                      </motion.div>
                    )}
                  </div>
                </div>
                
                <div className="mt-12 text-center pt-8 border-t border-border/50">
                  <Button variant="ghost" onClick={() => setStep(1)} className="text-muted-foreground hover:text-navy text-lg py-6">
                    <ChevronLeft className="mr-2 h-5 w-5" /> Neu berechnen
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
