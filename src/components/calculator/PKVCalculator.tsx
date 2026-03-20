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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Stethoscope, ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle, ShieldCheck, Info } from "lucide-react";

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

const JAEG = 69300; // Jahresarbeitsentgeltgrenze 2024 approximation

export function PKVCalculator() {
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<{isPkvAllowed: boolean; status: string; message: string; gkvStart: number; pkvStart: number; chartData: {Jahr: string; GKV: number; PKV: number}[]} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(pkvSchema),
    defaultValues: {
      age: [30],
      income: "",
      employment: "",
      health: "",
      children: [0],
      partner: "",
    }
  });

  const { watch, setValue, formState: { errors } } = form;
  const vals = watch();

  const calculateResults = () => {
    const grossIncome = parseFloat(vals.income || "0");
    const age = vals.age[0];
    const kids = vals.children[0];
    
    let isPkvAllowed = true;
    let recommendationStatus = "Gelb"; // "Grün" (PKV), "Rot" (GKV), "Gelb" (Beratung)
    let recommendationText = "Eine individuelle Beratung ist empfehlenswert, um die optimale Lösung zu finden.";

    if (vals.employment === "Angestellt" && grossIncome < JAEG) {
      isPkvAllowed = false;
      recommendationStatus = "Rot";
      recommendationText = "Als Angestellter unter der Jahresarbeitsentgeltgrenze (derzeit 69.300€) sind Sie versicherungspflichtig in der GKV. PKV ist als Vollversicherung nicht möglich.";
    } else if (vals.employment === "Beamter") {
      recommendationStatus = "Grün";
      recommendationText = "Als Beamter profitieren Sie massiv von der Beihilfe (meist 50-70%). Die PKV ist hier in fast allen Fällen die deutlich bessere und günstigste Wahl!";
    } else if (vals.employment === "Selbstständig" && kids >= 2 && vals.partner === "Hausfrau/Hausmann (GKV)") {
      recommendationStatus = "Gelb";
      recommendationText = "Selbstständige können immer in die PKV, jedoch verursachen mehrere Kinder Zusatzkosten. In der GKV sind diese oft kostenlos familienversichert. Wir sollten das detailliert berechnen.";
    } else if ((vals.employment === "Angestellt" && grossIncome >= JAEG) || vals.employment === "Selbstständig") {
      recommendationStatus = "Grün";
      recommendationText = "Sie erfüllen die Voraussetzungen für die PKV! Ein Wechsel lohnt sich aufgrund der Premium-Leistungen und oft auch finanziell langfristig.";
    }

    // Simplified Monthly Cost Math
    let gkvCost = 0;
    let pkvCost = 0;

    // GKV approx: 14.6% + 1.7% = 16.3% capped at Beitragsbemessungsgrenze (cca 62100) -> max ~ 840€ + Pflege (approx 1000€ total top)
    const gkvIncomeAssessment = Math.min(grossIncome, 62100) / 12;
    if (vals.employment === "Angestellt") {
      gkvCost = (gkvIncomeAssessment * 0.163 / 2) + Math.min(grossIncome, 62100)/12 * 0.034 / 2; // Employer pays half
    } else {
      gkvCost = (gkvIncomeAssessment * 0.163) + gkvIncomeAssessment * 0.034; // Self employed pays full
      if (vals.employment === "Beamter") gkvCost = gkvCost; // Beamte in GKV usually pay full without employer matching
    }

    // PKV approx math
    const basePkv = 200 + (age - 18) * 6; // Starts at ~200, rises with entry age
    let healthMutliplier = 1.0;
    if (vals.health === "Gut") healthMutliplier = 1.15;
    if (vals.health === "Mit Vorerkrankungen") healthMutliplier = 1.4;
    
    pkvCost = basePkv * healthMutliplier;
    if (vals.employment === "Angestellt") {
      pkvCost = pkvCost / 2; // Employer limit subsidy applies
    } else if (vals.employment === "Beamter") {
      pkvCost = pkvCost * 0.5; // Beihilfe covers 50% generally
    }
    
    pkvCost += kids * 150; // In PKV, children cost extra (~150€ per child)
    
    // Projecting into the future (10 and 20 years)
    // GKV rises roughly 3.5% per annum via Beitragsbemessungsgrenze
    // PKV rises roughly 3.0% per annum
    const lineData = [1, 5, 10, 15, 20].map(year => {
      return {
        Jahr: `Jahr ${year}`,
        GKV: Math.round(gkvCost * Math.pow(1.035, year)),
        PKV: Math.round(pkvCost * Math.pow(1.03, year)),
      }
    });

    setResults({
      isPkvAllowed,
      status: recommendationStatus,
      message: recommendationText,
      gkvStart: Math.round(gkvCost),
      pkvStart: Math.round(pkvCost),
      chartData: lineData
    });
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
    <div className="w-full max-w-5xl mx-auto py-8 lg:py-12 px-4 z-10 relative">
      <div className="text-center mb-10">
        <h1 className="text-4xl text-navy font-heading font-black mb-4 flex items-center justify-center gap-3">
          <Stethoscope className="h-10 w-10 text-teal" /> PKV vs. GKV Rechner
        </h1>
        <p className="text-xl text-muted-foreground text-balance">Das perfekte System für Ihre individuelle Lebenssituation berechnen.</p>
      </div>

      <div className="mb-10 max-w-lg mx-auto">
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal transition-all duration-700 ease-in-out" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-xs font-bold text-muted-foreground">
          <span className={step >= 1 ? "text-teal" : ""}>Beruf & Finanzen</span>
          <span className={step >= 2 ? "text-teal" : ""}>Gesundheit & Familie</span>
          <span className={step >= 3 ? "text-teal" : ""}>Ergebnis</span>
        </div>
      </div>

      <Card className="shadow-2xl border-border/60 bg-white overflow-hidden relative rounded-[2rem]">
        <CardContent className="p-0">
          <AnimatePresence mode="wait">
            
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-bold text-navy mb-8 font-heading">Ihre berufliche Situation</h2>
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">Wann sind Sie geboren? (Alter)</Label>
                      <span className="text-2xl font-black text-teal">{vals.age[0]}</span>
                    </div>
                    <Slider value={vals.age as number[]} onValueChange={(v) => setValue("age", v)} max={55} min={18} step={1} className="py-4" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Aktuelles Bruttojahreseinkommen (€)</Label>
                    <Input type="number" placeholder="z.B. 75000" className="h-14 text-xl border-border/70 focus-visible:ring-teal" onChange={(e) => setValue("income", e.target.value)} value={vals.income} />
                    {errors.income && <p className="text-sm text-destructive">{errors.income.message}</p>}
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Heutiger Berufsstatus</Label>
                    <Select onValueChange={(v) => setValue("employment", v)} value={vals.employment ?? ""}>
                      <SelectTrigger className="h-14 text-xl border-border/70 focus:ring-teal">
                        <SelectValue placeholder="..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Angestellt" className="text-lg py-3">Angestellt</SelectItem>
                        <SelectItem value="Selbstständig" className="text-lg py-3">Selbstständig / Freiberufler</SelectItem>
                        <SelectItem value="Beamter" className="text-lg py-3">Beamter / Anwärter</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.employment && <p className="text-sm text-destructive">{errors.employment.message}</p>}
                  </div>
                </div>

                <div className="mt-14 flex justify-end pt-8 border-t border-border/50">
                  <Button onClick={() => { if (!vals.income || !vals.employment) form.trigger(["income", "employment"]); else setStep(2); }} className="bg-navy hover:bg-navy/90 text-white px-10 h-14 text-lg rounded-full shadow-lg hover:-translate-y-1 transition-all">
                    Weiter <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8 md:p-14">
                <h2 className="text-3xl font-bold text-navy mb-8 font-heading">Gesundheit & Familie</h2>
                <div className="space-y-10">
                  
                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Wie schätzen Sie Ihren Gesundheitszustand ein?</Label>
                    <Select onValueChange={(v) => setValue("health", v)} value={vals.health ?? ""}>
                      <SelectTrigger className="h-14 text-xl border-border/70 focus:ring-teal">
                        <SelectValue placeholder="..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Exzellent" className="text-lg py-3">Exzellent (Keine Vorerkrankungen)</SelectItem>
                        <SelectItem value="Gut" className="text-lg py-3">Gut (Leichte Vorerkrankungen wie Allergien)</SelectItem>
                        <SelectItem value="Mit Vorerkrankungen" className="text-lg py-3">Chronisch / Schwere Vorerkrankungen</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.health && <p className="text-sm text-destructive">{errors.health.message}</p>}
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <Label className="text-lg text-navy font-bold">Anzahl der lebenden Kinder</Label>
                      <span className="text-2xl font-black text-teal">{vals.children[0]}</span>
                    </div>
                    <Slider value={vals.children as number[]} onValueChange={(v) => setValue("children", v)} max={5} min={0} step={1} className="py-4" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg text-navy font-bold">Versicherungsstatus Ihres Ehepartners/Lebensgefährten</Label>
                    <Select onValueChange={(v) => setValue("partner", v)} value={vals.partner ?? ""}>
                      <SelectTrigger className="h-14 text-xl border-border/70 focus:ring-teal">
                        <SelectValue placeholder="..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Kein Partner" className="text-lg py-3">Kein Partner / Ledig</SelectItem>
                        <SelectItem value="GKV" className="text-lg py-3">Gesetzlich versichert (GKV)</SelectItem>
                        <SelectItem value="PKV" className="text-lg py-3">Privat versichert (PKV)</SelectItem>
                        <SelectItem value="Hausfrau/Hausmann (GKV)" className="text-lg py-3">Kein eigenes Einkommen (Familienversichert)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.partner && <p className="text-sm text-destructive">{errors.partner.message}</p>}
                  </div>

                </div>

                <div className="mt-14 flex justify-between pt-8 border-t border-border/50">
                  <Button variant="outline" onClick={() => setStep(1)} className="px-8 h-14 text-lg rounded-full text-muted-foreground border-border hover:text-navy">
                    <ChevronLeft className="mr-2 h-5 w-5" /> Zurück
                  </Button>
                  <Button onClick={() => { if (!vals.health || !vals.partner) form.trigger(["health", "partner"]); else calculateResults(); }} className="bg-teal hover:bg-teal/90 text-white px-10 h-14 text-xl rounded-full font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
                    System Vergleichen <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 - RESULTS */}
            {step === 3 && results && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 md:p-14">
                
                {/* Traffic Light Recommendation */}
                <div className={`p-6 rounded-2xl mb-12 flex gap-4 items-start border ${results.status === 'Rot' ? 'bg-red-50 border-red-200 text-red-900' : results.status === 'Grün' ? 'bg-teal-50 border-teal-200 text-teal-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
                  {results.status === 'Rot' ? <AlertTriangle className="h-8 w-8 text-red-500 shrink-0" /> : results.status === 'Grün' ? <ShieldCheck className="h-8 w-8 text-teal shrink-0" /> : <Info className="h-8 w-8 text-amber-500 shrink-0" />}
                  <div>
                    <h3 className="font-bold text-xl mb-1">{results.status === 'Rot' ? 'GKV empfohlen' : results.status === 'Grün' ? 'PKV absolut empfohlen' : 'Individuelle Beratung dringend empfohlen'}</h3>
                    <p className="opacity-90">{results.message}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  
                  {/* Left Column: Direct Cost Table */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card className="border border-border/50 bg-white">
                      <div className="p-6 border-b border-border/50 text-center bg-slate-50 rounded-t-xl">
                        <Label className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Ihr Eigenanteil heute</Label>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-border">
                        <div className="p-6 text-center">
                          <h4 className="font-bold text-navy text-sm mb-2">Gesetzlich (GKV)</h4>
                          <span className="text-3xl font-black text-[#FF6B6B]">~{results.gkvStart}€</span>
                          <p className="text-xs text-muted-foreground mt-2">Pflichtleistungen (Standard)</p>
                        </div>
                        <div className="p-6 text-center">
                          <h4 className="font-bold text-navy text-sm mb-2">Privat (PKV)</h4>
                          <span className="text-3xl font-black text-teal">~{results.pkvStart}€</span>
                          <p className="text-xs text-muted-foreground mt-2">Premiumleistungen (Chefarzt)</p>
                        </div>
                      </div>
                    </Card>

                    {/* Disclaimer */}
                    <p className="text-xs text-muted-foreground/80 leading-tight">
                      * Dies ist eine stark vereinfachte Modellrechnung und stellt keine verbindliche Tarifauskunft dar. Individuelle Risikoaufschläge, Beihilfeverordnungen oder Krankenkassenzusatzbeiträge können variieren. Für ein rechtsverbindliches Angebot buchen Sie ein kostenloses Erstgespräch.
                    </p>

                    {/* Lead Gate Soft */}
                    {!submitted ? (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-slate-50 p-6 rounded-2xl border border-border">
                        <h4 className="font-bold text-navy mb-4 flex items-center gap-2">Detailvergleich anfordern</h4>
                        <div className="space-y-4">
                          <Input placeholder={"Name"} onChange={(e) => setValue("leadName", e.target.value)} className="bg-white" />
                          <Input placeholder={"E-Mail"} type="email" onChange={(e) => setValue("leadEmail", e.target.value)} className="bg-white" />
                          <div className="flex items-center space-x-3 mt-4">
                            <Checkbox id="consent" className="h-5 w-5" onCheckedChange={(v) => setValue("consent", v === true)} />
                            <label htmlFor="consent" className="text-xs text-muted-foreground leading-snug">Ich akzeptiere die Datenschutzerklärung und stimme der Kontaktaufnahme zu.</label>
                          </div>
                          <Button className="w-full bg-navy text-white hover:bg-navy/90 h-14 mt-4 text-lg rounded-xl" onClick={submitLead} disabled={isSubmitting || !vals.leadEmail}>
                            {isSubmitting ? "Wird geprüft..." : "Kostenlos anfordern"}
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-teal/10 p-6 rounded-2xl border border-teal/20 text-center h-[280px] flex items-center justify-center flex-col">
                        <CheckCircle2 className="h-16 w-16 text-teal mb-4" />
                        <h4 className="font-bold text-navy text-xl mb-2">Erfolgreich eingereicht</h4>
                        <p className="text-muted-foreground">Unser Berater meldet sich unverbindlich mit Ihren exakten Tarifen!</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column: Chart & Table Analysis */}
                  <div className="lg:col-span-3 space-y-6">
                    <h3 className="font-bold text-navy text-xl font-heading mb-4">Hochrechnung der Beitragsentwicklung (20 Jahre)</h3>
                    <div className="w-full h-[280px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={results.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                          <XAxis dataKey="Jahr" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                          <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                          <Legend wrapperStyle={{paddingTop: '20px', fontSize: '13px'}} />
                          <Line type="monotone" dataKey="GKV" stroke="#FF6B6B" strokeWidth={3} dot={{r: 4, fill: '#FF6B6B'}} activeDot={{r: 6}} name="Gesetzlich (GKV)" />
                          <Line type="monotone" dataKey="PKV" stroke="#0EA5A0" strokeWidth={3} dot={{r: 4, fill: '#0EA5A0'}} activeDot={{r: 6}} name="Privat (PKV)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-8 bg-white border border-border/60 rounded-xl overflow-hidden">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-navy/5 text-navy">
                          <tr>
                            <th className="p-4 font-bold border-b border-border/50">Wichtigste Unterschiede</th>
                            <th className="p-4 font-bold border-b border-border/50 text-center">GKV</th>
                            <th className="p-4 font-bold border-b border-border/50 text-center">PKV</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 text-navy font-medium">Behandlung</td>
                            <td className="p-4 text-center text-muted-foreground w-1/4">Regelleistung (Wirtschaftlich)</td>
                            <td className="p-4 text-center text-teal font-medium w-1/4">Chefarztbehandlung</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 text-navy font-medium">Bett im Krankenhaus</td>
                            <td className="p-4 text-center text-muted-foreground">Mehrbettzimmer</td>
                            <td className="p-4 text-center text-teal font-medium">1-oder 2-Bettzimmer</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 text-navy font-medium">Wartezeiten Facharzt</td>
                            <td className="p-4 text-center text-muted-foreground">Oft monatelang</td>
                            <td className="p-4 text-center text-teal font-medium">Sehr kurzfristig</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-4 text-navy font-medium">Beitrag im Alter</td>
                            <td className="p-4 text-center text-muted-foreground">Abhängig vom Einkommen</td>
                            <td className="p-4 text-center text-teal font-medium">Basiert auf Alterungsrückstellungen</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center pt-8 border-t border-border/50 flex justify-center">
                  <Button variant="ghost" onClick={() => setStep(1)} className="text-muted-foreground hover:text-navy text-lg py-6">
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
