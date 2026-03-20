"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Stethoscope, ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle, ShieldCheck, HeartPulse, Building2, Briefcase, Landmark, Baby, UserCircle, Users } from "lucide-react";

// Animated Number Component
function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString("de-DE"));
  useEffect(() => { spring.set(value); }, [spring, value]);
  return <motion.span>{display}</motion.span>;
}

const pkvSchema = z.object({
  age: z.array(z.number()),
  income: z.string().min(1, "Bitte Jahresbrutto angeben"),
  employment: z.string().min(1, "Bitte Status wählen"),
  health: z.string().min(1, "Bitte Gesundheitszustand wählen"),
  children: z.array(z.number()),
  partner: z.string().min(1, "Bitte Partnerstatus wählen"),
  leadName: z.string().optional(),
  leadEmail: z.string().email("Ungültige E-Mail").optional().or(z.literal('')),
  leadPhone: z.string().optional(),
  consent: z.boolean().optional(),
});

type FormValues = z.infer<typeof pkvSchema>;

const JAEG = 69300; 

export function PKVCalculator() {
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<{isPkvAllowed: boolean; status: string; message: string; gkvStart: number; pkvStart: number; chartData: {Jahr: string; GKV: number; PKV: number}[]} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(pkvSchema),
    defaultValues: { age: [30], income: "", employment: "", health: "", children: [0], partner: "" }
  });

  const { watch, setValue, formState: { errors } } = form;
  const vals = watch();

  const calculateResults = () => {
    const grossIncome = parseFloat(vals.income || "0");
    const age = vals.age[0];
    const kids = vals.children[0];
    
    let isPkvAllowed = true;
    let recStatus = "Gelb";
    let recText = "Eine individuelle Beratung ist empfehlenswert, um die optimale Lösung zu finden.";

    if (vals.employment === "Angestellt" && grossIncome < JAEG) {
      isPkvAllowed = false;
      recStatus = "Rot";
      recText = "Als Angestellter unter der Jahresgrenze (69.300€) sind Sie versicherungspflichtig. PKV ist als Vollversicherung leider nicht möglich.";
    } else if (vals.employment === "Beamter") {
      recStatus = "Grün";
      recText = "Als Beamter profitieren Sie massiv von der Beihilfe (50-70%). Die PKV ist hier in fast allen Fällen die deutlich bessere und günstigere Wahl!";
    } else if (vals.employment === "Selbstständig" && kids >= 2 && vals.partner === "Hausfrau/Hausmann (GKV)") {
      recStatus = "Gelb";
      recText = "Selbstständige können immer in die PKV, jedoch verursachen mehrere Kinder Zusatzkosten. Wir sollten das detailliert berechnen.";
    } else if ((vals.employment === "Angestellt" && grossIncome >= JAEG) || vals.employment === "Selbstständig") {
      recStatus = "Grün";
      recText = "Glückwunsch! Sie erfüllen die Voraussetzungen für die PKV. Ein Wechsel lohnt sich aufgrund der Premium-Leistungen und auch finanziell langfristig.";
    }

    let gkvCost = 0, pkvCost = 0;
    const gkvIncomeAssessment = Math.min(grossIncome, 62100) / 12;
    if (vals.employment === "Angestellt") {
      gkvCost = (gkvIncomeAssessment * 0.163 / 2) + Math.min(grossIncome, 62100)/12 * 0.034 / 2;
    } else {
      gkvCost = (gkvIncomeAssessment * 0.163) + gkvIncomeAssessment * 0.034;
    }

    const basePkv = 200 + (age - 18) * 6;
    let hMult = vals.health === "Gut" ? 1.15 : vals.health === "Mit Vorerkrankungen" ? 1.4 : 1.0;
    
    pkvCost = basePkv * hMult;
    if (vals.employment === "Angestellt") pkvCost = pkvCost / 2;
    else if (vals.employment === "Beamter") pkvCost = pkvCost * 0.5;
    
    pkvCost += kids * 150; 
    
    const lineData = [1, 5, 10, 15, 20].map(year => ({
      Jahr: `Jahr ${year}`,
      GKV: Math.round(gkvCost * Math.pow(1.035, year)),
      PKV: Math.round(pkvCost * Math.pow(1.03, year)),
    }));

    setResults({ isPkvAllowed, status: recStatus, message: recText, gkvStart: Math.round(gkvCost), pkvStart: Math.round(pkvCost), chartData: lineData });
    setStep(3);
  };

  const submitLead = async () => {
    if (!vals.leadEmail) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 relative z-10 font-sans">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center justify-center p-4 rounded-3xl bg-white shadow-xl shadow-teal/5 border border-teal/10 mb-6">
          <Stethoscope className="h-10 w-10 text-teal" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl text-navy font-heading font-black mb-4 tracking-tight">
          PKV vs. GKV Rechner
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground max-w-xl mx-auto">
          Das perfekte System für Ihre individuelle Lebenssituation berechnen.
        </motion.p>
      </div>

      <div className="mb-12 max-w-2xl mx-auto px-4 relative">
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-teal to-blue-500 transition-all duration-700 ease-out" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <div className="flex justify-between mt-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <span className={step >= 1 ? "text-teal" : ""}>Beruf & Finanzen</span>
          <span className={step >= 2 ? "text-teal" : ""}>Gesundheit</span>
          <span className={step >= 3 ? "text-teal" : ""}>Ergebnis</span>
        </div>
      </div>

      <Card className="shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white bg-white/60 backdrop-blur-3xl overflow-hidden rounded-[2.5rem]">
        <CardContent className="p-0">
          <AnimatePresence mode="wait">
            
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-bold text-navy mb-10 font-heading">Ihre berufliche Situation</h2>
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">Wann sind Sie geboren? (Alter)</Label>
                      <span className="text-4xl font-black text-teal">{vals.age[0]}</span>
                    </div>
                    <Slider value={vals.age as number[]} onValueChange={(v) => setValue("age", v)} max={55} min={18} step={1} className="py-2" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Aktuelles Bruttojahreseinkommen (€)</Label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl text-muted-foreground font-bold">€</span>
                      <Input type="number" placeholder="z.B. 75000" className="h-16 pl-12 text-2xl font-bold bg-white border-2 border-slate-100 rounded-2xl focus-visible:ring-0 focus-visible:border-teal transition-colors shadow-sm" onChange={(e) => setValue("income", e.target.value)} value={vals.income} />
                    </div>
                    {errors.income && <p className="text-sm text-[#FF6B6B] font-bold">{errors.income.message}</p>}
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Heutiger Berufsstatus</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: "Angestellt", icon: Building2, label: "Angestellt" },
                        { id: "Selbstständig", icon: Briefcase, label: "Selbstständig" },
                        { id: "Beamter", icon: Landmark, label: "Beamter" },
                      ].map(emp => (
                        <button key={emp.id} onClick={() => setValue("employment", emp.id)} className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${vals.employment === emp.id ? "border-teal bg-teal/5 shadow-md shadow-teal/10 text-teal" : "border-slate-100 bg-white hover:border-slate-200 text-slate-500"}`}>
                          <emp.icon className="h-8 w-8 mb-3" />
                          <span className={`font-bold ${vals.employment === emp.id ? "text-navy" : ""}`}>{emp.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.employment && <p className="text-sm text-[#FF6B6B] font-bold">{errors.employment.message}</p>}
                  </div>
                </div>

                <div className="mt-14 flex justify-end">
                  <Button onClick={() => { if (!vals.income || !vals.employment) form.trigger(["income", "employment"]); else setStep(2); }} className="bg-navy hover:bg-navy/90 text-white px-10 h-16 text-lg font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
                    Weiter <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-bold text-navy mb-10 font-heading">Gesundheit & Familie</h2>
                <div className="space-y-12">
                  
                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Gesundheitszustand</Label>
                    <div className="grid grid-cols-1 space-y-3">
                      {[
                        { id: "Exzellent", label: "Exzellent (Keine Vorerkrankungen)" },
                        { id: "Gut", label: "Gut (Leichte Vorerkrankungen wie Allergien)" },
                        { id: "Mit Vorerkrankungen", label: "Chronisch / Schwere Vorerkrankungen" },
                      ].map(h => (
                        <button key={h.id} onClick={() => setValue("health", h.id)} className={`w-full flex items-center p-5 rounded-2xl border-2 transition-all text-left ${vals.health === h.id ? "border-teal bg-teal/5 shadow-md shadow-teal/10" : "border-slate-100 bg-white hover:border-slate-200"}`}>
                          <HeartPulse className={`h-6 w-6 mr-4 shrink-0 ${vals.health === h.id ? "text-teal" : "text-slate-400"}`} />
                          <span className={`font-bold text-lg ${vals.health === h.id ? "text-navy" : "text-slate-600"}`}>{h.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.health && <p className="text-sm text-[#FF6B6B] font-bold">{errors.health.message}</p>}
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold flex items-center gap-2"><Baby className="w-5 h-5 text-teal"/> Anzahl der Kinder</Label>
                      <span className="text-4xl font-black text-teal">{vals.children[0]}</span>
                    </div>
                    <Slider value={vals.children as number[]} onValueChange={(v) => setValue("children", v)} max={5} min={0} step={1} className="py-2" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Versicherungsstatus Ihres Ehepartners</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { id: "Kein Partner", icon: UserCircle, label: "Kein Partner / Ledig" },
                        { id: "GKV", icon: Users, label: "Gesetzlich (GKV)" },
                        { id: "PKV", icon: Users, label: "Privat (PKV)" },
                        { id: "Hausfrau/Hausmann (GKV)", icon: Users, label: "Familienversichert" },
                      ].map(p => (
                        <button key={p.id} onClick={() => setValue("partner", p.id)} className={`flex items-center p-5 rounded-2xl border-2 transition-all ${vals.partner === p.id ? "border-teal bg-teal/5 shadow-sm text-teal" : "border-slate-100 bg-white hover:border-slate-200 text-slate-500"}`}>
                          <span className={`font-bold text-base ${vals.partner === p.id ? "text-navy" : ""}`}>{p.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.partner && <p className="text-sm text-[#FF6B6B] font-bold">{errors.partner.message}</p>}
                  </div>
                </div>

                <div className="mt-14 flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(1)} className="px-6 h-16 text-lg font-bold rounded-2xl text-slate-400 hover:text-navy hover:bg-slate-100">
                    <ChevronLeft className="mr-2 h-5 w-5" /> Zurück
                  </Button>
                  <Button onClick={() => { if (!vals.health || !vals.partner) form.trigger(["health", "partner"]); else calculateResults(); }} className="bg-teal hover:bg-teal/90 text-white px-10 h-16 text-lg rounded-2xl font-black shadow-xl shadow-teal/30 hover:-translate-y-1 hover:shadow-2xl transition-all">
                    Vergleichen <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 - RESULTS */}
            {step === 3 && results && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 md:p-14">
                
                {/* Traffic Light Recommendation */}
                <div className={`p-8 rounded-[2rem] mb-12 flex flex-col md:flex-row gap-6 items-center md:items-start border-2 ${results.status === 'Rot' ? 'bg-red-50 border-red-200 text-red-900 shadow-xl shadow-red-100/50' : results.status === 'Grün' ? 'bg-teal-50 border-teal-200 text-teal-900 shadow-xl shadow-teal-100/50' : 'bg-amber-50 border-amber-200 text-amber-900 shadow-xl shadow-amber-100/50'}`}>
                  {results.status === 'Rot' ? <AlertTriangle className="h-16 w-16 text-red-500 shrink-0" /> : results.status === 'Grün' ? <ShieldCheck className="h-16 w-16 text-teal shrink-0" /> : <AlertTriangle className="h-16 w-16 text-amber-500 shrink-0" />}
                  <div className="text-center md:text-left">
                    <h3 className="font-black text-2xl mb-2">{results.status === 'Rot' ? 'GKV empfohlen / Pflicht' : results.status === 'Grün' ? 'PKV absolut empfohlen!' : 'Individuelle Beratung dringend empfohlen'}</h3>
                    <p className="text-lg font-medium opacity-90 leading-relaxed">{results.message}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
                  <div className="xl:col-span-2 space-y-6">
                    <Card className="border-2 border-slate-100 bg-white shadow-xl rounded-[2rem] overflow-hidden">
                      <div className="p-6 text-center bg-slate-50 border-b border-slate-100">
                        <Label className="text-slate-400 uppercase tracking-widest text-xs font-black">Ihr Eigenanteil heute</Label>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-slate-100">
                        <div className="p-8 text-center flex flex-col items-center">
                          <h4 className="font-bold text-navy text-sm mb-4">Gesetzlich (GKV)</h4>
                          <span className="text-4xl font-black text-[#FF6B6B] flex items-center">~<AnimatedNumber value={results.gkvStart} />€</span>
                          <p className="text-xs text-muted-foreground mt-3 font-semibold">Standardversorgung</p>
                        </div>
                        <div className="p-8 text-center flex flex-col items-center bg-teal/5">
                          <h4 className="font-bold text-navy text-sm mb-4">Privat (PKV)</h4>
                          <span className="text-4xl font-black text-teal flex items-center">~<AnimatedNumber value={results.pkvStart} />€</span>
                          <p className="text-xs text-teal mt-3 font-bold">Premiumleistung (1. Klasse)</p>
                        </div>
                      </div>
                    </Card>

                    {!submitted ? (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-navy p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                        <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-xl text-center justify-center">Detailvergleich anfordern</h4>
                        <div className="space-y-4">
                          <Input placeholder={"Name"} onChange={(e) => setValue("leadName", e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg rounded-xl focus-visible:ring-teal" />
                          <Input placeholder={"E-Mail"} type="email" onChange={(e) => setValue("leadEmail", e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg rounded-xl focus-visible:ring-teal" />
                          <Button className="w-full bg-teal text-white hover:bg-teal/90 h-14 mt-4 text-lg font-bold rounded-xl shadow-lg shadow-teal/20" onClick={submitLead} disabled={isSubmitting || !vals.leadEmail}>
                            {isSubmitting ? "Wird geprüft..." : "Exakte Tarife anfordern"}
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-teal p-8 rounded-[2rem] text-center h-[280px] flex items-center justify-center flex-col text-white shadow-xl">
                        <CheckCircle2 className="h-16 w-16 text-white mb-4" />
                        <h4 className="font-black text-2xl mb-2">Erfolgreich!</h4>
                        <p className="text-teal-50 font-medium text-lg">Unser Berater meldet sich unverbindlich mit Ihren exakten Rechnungen.</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="xl:col-span-3 space-y-8">
                    <div className="bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="font-bold text-navy text-xl font-heading mb-6 pl-4">Hochrechnung der Beiträge (20 Jahre)</h3>
                      <div className="w-full h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={results.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                              <linearGradient id="gradientPKV" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0EA5A0" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#0EA5A0" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="Jahr" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13, fontWeight: 700}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                            <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px 20px'}} />
                            <Legend wrapperStyle={{paddingTop: '20px', fontSize: '14px', fontWeight: 600}} />
                            <Line type="monotone" dataKey="GKV" stroke="#FF6B6B" strokeWidth={4} dot={{r: 6, fill: '#FF6B6B', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} name="Gesetzlich (GKV)" />
                            <Line type="monotone" dataKey="PKV" stroke="#0EA5A0" strokeWidth={4} dot={{r: 6, fill: '#0EA5A0', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} name="Privat (PKV)" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-slate-100 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-navy border-b-2 border-slate-100">
                          <tr>
                            <th className="p-5 font-black text-xs uppercase tracking-widest w-2/4">Wichtigste Unterschiede</th>
                            <th className="p-5 font-black text-xs uppercase tracking-widest text-center w-1/4">GKV</th>
                            <th className="p-5 font-black text-xs uppercase tracking-widest text-center bg-teal/5 text-teal w-1/4">PKV</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            { label: "Behandlung", gkv: "Regelleistung", pkv: "Chefarztbehandlung" },
                            { label: "Bett im Krankenhaus", gkv: "Mehrbettzimmer", pkv: "1- oder 2-Bettzimmer" },
                            { label: "Wartezeiten Facharzt", gkv: "Oft monatelang", pkv: "Sehr kurzfristig" },
                            { label: "Beitrag im Alter", gkv: "Steigt mit Einkommen", pkv: "Alterungsrückstellungen" },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-5 text-navy font-bold">{row.label}</td>
                              <td className="p-5 text-center text-slate-500 font-medium text-xs leading-snug">{row.gkv}</td>
                              <td className="p-5 text-center text-teal font-black text-xs bg-teal/5 leading-snug">{row.pkv}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="mt-14 text-center border-t-2 border-slate-100/50 pt-10">
                  <Button variant="ghost" onClick={() => setStep(1)} className="text-slate-400 font-bold hover:text-navy hover:bg-slate-100 rounded-full text-lg py-6 px-8">
                    <ChevronLeft className="mr-2 h-5 w-5" /> Werte ändern
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
