"use client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { 
  Stethoscope, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  HeartPulse, 
  Building2, 
  Briefcase, 
  Landmark, 
  Baby, 
  UserCircle, 
  Users,
  Target,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";

// Types
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
      recText = "As an employee below the annual threshold (69,300€), you are required to have public insurance (GKV). Private full coverage is generally not available.";
    } else if (vals.employment === "Beamter") {
      recStatus = "Grün";
      recText = "As a civil servant (Beamter), you benefit massively from subsidies (50-70%). Private insurance is almost always the superior choice!";
    } else if (vals.employment === "Selbstständig" && kids >= 2 && vals.partner === "Hausfrau/Hausmann (GKV)") {
      recStatus = "Gelb";
      recText = "Freelancers can always join PKV, but family costs with multiple children should be calculated carefully. Let's look at the details.";
    } else if ((vals.employment === "Angestellt" && grossIncome >= JAEG) || vals.employment === "Selbstständig") {
      recStatus = "Grün";
      recText = "Congratulations! You meet the requirements for Private Health Insurance (PKV). A switch often pays off both in terms of premium care and long-term costs.";
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
      Jahr: `Year ${year}`,
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
    <div className="w-full max-w-6xl mx-auto py-12 px-4 relative z-10 font-sans selection:bg-teal selection:text-white">
      {/* Dynamic BG decorations */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-teal/5 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[0%] w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center justify-center p-6 rounded-[2.5rem] bg-white shadow-2xl shadow-teal/5 border border-teal/10 mb-8 hover:scale-110 transition-transform duration-500 group">
          <Stethoscope className="h-12 w-12 text-teal group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <h1 className="text-5xl md:text-7xl text-navy font-heading font-black mb-6 tracking-tight">
          PKV <span className="text-teal">vs.</span> GKV
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Compare public and private health insurance systems based on your unique career, age, and health profile.
        </p>
      </div>

      {/* Step Tracker */}
      <div className="mb-20 max-w-4xl mx-auto px-4 relative">
        <div className="flex justify-between items-center relative">
          {/* Progress Path */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal transition-all duration-1000 ease-in-out" 
              style={{ width: `${((step - 1) / 2) * 100}%` }} 
            />
          </div>
          
          {[
            { id: 1, icon: Target, label: "Profile" },
            { id: 2, icon: HeartPulse, label: "Health" },
            { id: 3, icon: Award, label: "Result" }
          ].map((s) => (
            <div key={s.id} className="relative z-10 group">
              <div 
                className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 border-4 ${
                  step === s.id 
                    ? "bg-teal text-white border-white shadow-2xl shadow-teal/20 scale-125" 
                    : step > s.id 
                      ? "bg-teal text-white border-white scale-100" 
                      : "bg-white text-slate-300 border-slate-50"
                }`}
              >
                <s.icon className="w-7 h-7" />
              </div>
              <span className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${step >= s.id ? "text-navy opacity-100" : "text-slate-400 opacity-50"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Card className="shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-white bg-white/70 backdrop-blur-3xl overflow-hidden rounded-[4rem] animate-in zoom-in-95 duration-700">
        <CardContent className="p-0">
          
          {/* STEP 1: Finances */}
          {step === 1 && (
            <div className="p-12 md:p-20 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center gap-5 mb-14">
                <div className="w-2 h-12 bg-teal rounded-full shadow-lg shadow-teal/20" />
                <h2 className="text-4xl md:text-5xl font-heading font-black text-navy leading-tight">Financial Profile</h2>
              </div>

              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-10">
                    <div className="flex justify-between items-end">
                      <Label className="text-2xl text-navy font-black tracking-tight flex items-center gap-3">
                        <UserCircle className="w-7 h-7 text-teal opacity-50" />
                        Current Age
                      </Label>
                      <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-black text-teal tabular-nums leading-none">{vals.age[0]}</span>
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Yrs</span>
                      </div>
                    </div>
                    <Slider value={vals.age} onValueChange={(v) => setValue("age", v)} max={55} min={18} step={1} className="py-2 scale-110 origin-left" />
                  </div>

                  <div className="space-y-8">
                    <Label className="text-2xl text-navy font-black tracking-tight flex items-center gap-3">
                       <Zap className="w-7 h-7 text-teal opacity-50" />
                       Annual Gross Income
                    </Label>
                    <div className="relative group">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-slate-300 font-black group-focus-within:text-teal transition-colors">€</span>
                      <Input 
                        type="number" 
                        placeholder="0" 
                        className="h-24 pl-14 text-4xl font-black bg-white/50 border-4 border-slate-50 rounded-[2.5rem] focus-visible:ring-0 focus-visible:border-teal transition-all shadow-sm focus-within:shadow-2xl focus-within:bg-white" 
                        onChange={(e) => setValue("income", e.target.value)} 
                        value={vals.income} 
                      />
                    </div>
                    {errors.income && <p className="text-sm text-red-500 font-black uppercase ml-4">{errors.income.message}</p>}
                  </div>
                </div>

                <div className="space-y-10">
                  <Label className="text-2xl text-navy font-black tracking-tight text-center block">Berufsstatus / Employment</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { id: "Angestellt", icon: Building2, label: "Employed", desc: "Arbeitnehmer" },
                      { id: "Selbstständig", icon: Briefcase, label: "Self-Employed", desc: "Freiberufler" },
                      { id: "Beamter", icon: Landmark, label: "Civil Servant", desc: "Beamte" },
                    ].map(emp => (
                      <button 
                        key={emp.id} 
                        onClick={() => setValue("employment", emp.id)} 
                        className={`group relative p-10 rounded-[3rem] border-4 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden ${
                          vals.employment === emp.id 
                          ? "border-teal bg-teal text-white shadow-2xl shadow-teal/30 scale-105" 
                          : "border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-100 text-slate-500"
                        }`}
                      >
                        <emp.icon className={`h-12 w-12 mb-6 transition-transform duration-700 group-hover:scale-110 ${vals.employment === emp.id ? "text-white" : "text-teal"}`} />
                        <span className="font-black text-lg mb-1 leading-none">{emp.label}</span>
                        <span className={`text-[10px] uppercase font-bold tracking-[0.2em] ${vals.employment === emp.id ? "opacity-70" : "opacity-30"}`}>{emp.desc}</span>
                      </button>
                    ))}
                  </div>
                  {errors.employment && <p className="text-sm text-red-500 font-black uppercase text-center">{errors.employment.message}</p>}
                </div>
              </div>

              <div className="mt-20 flex justify-end">
                <Button 
                  onClick={() => { if (!vals.income || !vals.employment) form.trigger(["income", "employment"]); else setStep(2); }} 
                  className="bg-navy hover:bg-teal text-white px-16 h-24 text-2xl font-black rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all uppercase tracking-widest flex items-center gap-4 group"
                >
                  Health Check <ChevronRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Health & Family */}
          {step === 2 && (
            <div className="p-12 md:p-20 animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="flex items-center gap-5 mb-14">
                <div className="w-2 h-12 bg-teal rounded-full shadow-lg shadow-teal/20" />
                <h2 className="text-4xl md:text-5xl font-heading font-black text-navy leading-tight">System Pre-Check</h2>
              </div>

              <div className="space-y-20">
                <div className="space-y-8">
                  <Label className="text-2xl text-navy font-black tracking-tight mb-6 block">Gesundheitszustand / Health History</Label>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { id: "Exzellent", label: "Premium Class", desc: "No pre-existing conditions / Perfect health", icon: Target },
                      { id: "Gut", label: "Standard Class", desc: "Minor issues (Allergies, Hay fever, Vision)", icon: Award },
                      { id: "Mit Vorerkrankungen", label: "Individual Check", desc: "Chronic issues or major treatment history", icon: AlertTriangle },
                    ].map(h => (
                      <button 
                        key={h.id} 
                        onClick={() => setValue("health", h.id)} 
                        className={`w-full group p-8 rounded-[2.5rem] border-4 transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-xl ${
                          vals.health === h.id 
                          ? "border-teal bg-teal/5 ring-4 ring-teal/5" 
                          : "border-slate-50 bg-white hover:border-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`p-5 rounded-2xl transition-colors ${vals.health === h.id ? "bg-teal text-white shadow-xl" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}`}>
                            <h.icon className="h-8 w-8" />
                          </div>
                          <div className="text-left">
                            <h3 className={`font-black text-xl mb-1 ${vals.health === h.id ? "text-teal" : "text-navy"}`}>{h.label}</h3>
                            <p className="text-slate-400 font-bold text-sm tracking-tight">{h.desc}</p>
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${vals.health === h.id ? "border-teal bg-teal text-white" : "border-slate-100"}`}>
                          {vals.health === h.id && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.health && <p className="text-sm text-red-500 font-black uppercase ml-4">{errors.health.message}</p>}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div className="space-y-10">
                    <div className="flex justify-between items-end">
                      <Label className="text-2xl text-navy font-black tracking-tight flex items-center gap-3">
                         <Baby className="w-7 h-7 text-teal opacity-50"/> Children
                      </Label>
                      <span className="text-6xl font-black text-teal tabular-nums leading-none">{vals.children[0]}</span>
                    </div>
                    <Slider value={vals.children} onValueChange={(v) => setValue("children", v)} max={5} min={0} step={1} className="py-2 scale-110 origin-left" />
                  </div>

                  <div className="space-y-8">
                    <Label className="text-2xl text-navy font-black tracking-tight flex items-center gap-3">
                       <Users className="w-7 h-7 text-teal opacity-50" /> Partner Status
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: "Kein Partner", label: "Single" },
                        { id: "GKV", label: "Partner (GKV)" },
                        { id: "PKV", label: "Partner (PKV)" },
                        { id: "Hausfrau/Hausmann (GKV)", label: "Stay @ Home" },
                      ].map(p => (
                        <button 
                          key={p.id} 
                          onClick={() => setValue("partner", p.id)} 
                          className={`p-6 rounded-2xl border-4 font-black uppercase tracking-widest text-xs transition-all ${
                            vals.partner === p.id 
                            ? "border-teal bg-teal text-white shadow-xl shadow-teal/20" 
                            : "border-slate-50 bg-slate-50/50 hover:bg-white text-slate-400"
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                    {errors.partner && <p className="text-sm text-red-500 font-black uppercase ml-4">{errors.partner.message}</p>}
                  </div>
                </div>
              </div>

              <div className="mt-24 flex justify-between gap-6">
                <Button variant="ghost" onClick={() => setStep(1)} className="px-10 h-20 text-lg font-black rounded-[2rem] text-slate-400 hover:text-navy hover:bg-slate-100 transition-all uppercase tracking-[0.2em] text-[10px]">
                  <ChevronLeft className="mr-2 h-6 w-6" /> Back
                </Button>
                <Button 
                   onClick={() => { if (!vals.health || !vals.partner) form.trigger(["health", "partner"]); else calculateResults(); }} 
                   className="bg-teal hover:bg-navy text-white px-16 h-24 text-4xl font-black rounded-[3rem] shadow-2xl shadow-teal/30 hover:-translate-y-2 hover:shadow-teal/50 transition-all tracking-tighter"
                >
                  CALCULATE NOW
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3 - RESULTS */}
          {step === 3 && results && (
            <div className="animate-in zoom-in-95 duration-700 bg-white">
              
              {/* Traffic Light Recommendation Spotlight */}
              <div className={`p-16 border-b-8 ${results.status === 'Rot' ? 'bg-red-50/30 border-red-500' : results.status === 'Grün' ? 'bg-teal-50/30 border-teal' : 'bg-amber-50/30 border-amber-500'}`}>
                 <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className={`w-32 h-32 rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-2xl transition-transform duration-700 animate-bounce-slow ${
                      results.status === 'Rot' ? 'bg-red-500 text-white' : results.status === 'Grün' ? 'bg-teal text-white shadow-teal/30' : 'bg-amber-500 text-white shadow-amber-200'
                    }`}>
                       {results.status === 'Rot' ? <AlertTriangle className="h-16 w-16" /> : results.status === 'Grün' ? <ShieldCheck className="h-16 w-16" /> : <Info className="h-16 w-16" />}
                    </div>
                    <div className="text-center md:text-left">
                       <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-50">Intelligence Recommendation</h3>
                       <h4 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight leading-none">
                         {results.status === 'Rot' ? 'Public System Advised' : results.status === 'Grün' ? 'Private System Recommended!' : 'Complex Case detected'}
                       </h4>
                       <p className="text-xl font-bold text-slate-500 leading-relaxed">{results.message}</p>
                    </div>
                 </div>
              </div>

              <div className="p-10 md:p-20">
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-16">
                  
                  <div className="xl:col-span-2 space-y-10 group">
                    <div className="flex items-center gap-3 ml-4">
                      <div className="w-1.5 h-6 bg-teal rounded-full" />
                      <h3 className="text-2xl font-black text-navy uppercase tracking-tight">Entry Premium Breakdown</h3>
                    </div>

                    <Card className="border-4 border-slate-50 bg-white shadow-xl rounded-[3rem] overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                      <div className="p-8 text-center bg-slate-50/50 border-b-2 border-slate-50">
                        <Label className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-black">Monthly Net Premium Contribution</Label>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="p-12 text-center border-r-2 border-slate-50">
                          <h4 className="font-black text-slate-400 text-xs mb-4 uppercase tracking-widest leading-none">Public (GKV)</h4>
                          <span className="text-6xl font-black text-[#FF6B6B] tabular-nums tracking-tighter">
                            {results.gkvStart}€
                          </span>
                          <p className="text-xs text-slate-400 mt-6 font-bold uppercase tracking-widest leading-none opacity-40">Basic Care</p>
                        </div>
                        <div className="p-12 text-center bg-teal/[0.03]">
                          <h4 className="font-black text-teal text-xs mb-4 uppercase tracking-widest leading-none">Private (PKV)</h4>
                          <span className="text-6xl font-black text-teal tabular-nums tracking-tighter">
                            {results.pkvStart}€
                          </span>
                          <p className="text-xs text-teal mt-6 font-black uppercase tracking-widest leading-none">Premium Care</p>
                        </div>
                      </div>
                    </Card>

                    {!submitted ? (
                      <div className="bg-navy p-12 rounded-[3.5rem] shadow-3xl relative overflow-hidden group">
                         <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.15)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
                         <div className="relative z-10">
                            <h4 className="font-black text-white mb-8 text-2xl text-center leading-tight tracking-tight">Get your specialized <br/><span className="text-teal">Comparison PDF</span></h4>
                            <div className="space-y-4">
                              <Input placeholder="Full Name" onChange={(e) => setValue("leadName", e.target.value)} className="bg-white text-navy h-16 text-lg rounded-2xl px-6 font-bold focus-visible:ring-4 focus-visible:ring-teal/30 border-none" />
                              <Input placeholder="Email Address" type="email" onChange={(e) => setValue("leadEmail", e.target.value)} className="bg-white text-navy h-16 text-lg rounded-2xl px-6 font-bold focus-visible:ring-4 focus-visible:ring-teal/30 border-none" />
                              <Button 
                                onClick={submitLead} 
                                disabled={isSubmitting || !vals.leadEmail}
                                className="w-full h-16 bg-teal text-white hover:bg-white hover:text-navy mt-4 text-sm font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl transition-all"
                              >
                                {isSubmitting ? "Calculating..." : "Receive Exakt Tariffs"}
                              </Button>
                            </div>
                         </div>
                      </div>
                    ) : (
                      <div className="bg-teal p-12 rounded-[3.5rem] text-center h-[400px] flex items-center justify-center flex-col text-white shadow-3xl animate-in zoom-in-95">
                        <div className="w-24 h-24 bg-white/20 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl">
                           <CheckCircle2 className="h-12 w-12 text-white" />
                        </div>
                        <h4 className="font-black text-4xl mb-3 tracking-tight">Request Sent</h4>
                        <p className="text-teal-50 font-bold text-lg max-w-[240px] leading-relaxed">I will reach out with your exact calculations shortly.</p>
                      </div>
                    )}
                  </div>

                  <div className="xl:col-span-3 space-y-12 animate-in slide-in-from-right-8 duration-1000">
                    <div className="bg-slate-50/50 p-10 rounded-[3.5rem] border-4 border-slate-50 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                       <div className="flex justify-between items-center mb-10">
                          <h3 className="font-black text-navy text-2xl font-heading tracking-tight uppercase">20-Year Evolution</h3>
                          <div className="flex items-center gap-6">
                             <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                                <span className="text-[10px] font-black uppercase text-slate-400">GKV</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-teal" />
                                <span className="text-[10px] font-black uppercase text-slate-400">PKV</span>
                             </div>
                          </div>
                       </div>
                       <div className="w-full h-[380px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={results.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="Jahr" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13, fontVariant: 'small-caps', fontWeight: 900}} dy={15} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 700}} />
                            <Tooltip contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)', padding: '20px'}} />
                            <Line type="monotone" dataKey="GKV" stroke="#FF6B6B" strokeWidth={6} dot={{r: 8, fill: '#FF6B6B', strokeWidth: 4, stroke: '#fff'}} activeDot={{r: 10}} name="Public (GKV)" />
                            <Line type="monotone" dataKey="PKV" stroke="#0EA5A0" strokeWidth={6} dot={{r: 8, fill: '#0EA5A0', strokeWidth: 4, stroke: '#fff'}} activeDot={{r: 10}} name="Private (PKV)" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="border-4 border-slate-50 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-white">
                      <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-slate-50/50 text-navy">
                          <tr>
                            <th className="p-8 font-black text-xs uppercase tracking-[0.2em] w-2/5 border-b-2 border-slate-100">Care Differences</th>
                            <th className="p-8 font-black text-xs uppercase tracking-widest text-center w-1/5 border-b-2 border-slate-100">GKV</th>
                            <th className="p-8 font-black text-[10px] uppercase tracking-[0.3em] text-center bg-teal text-white w-2/5 border-b-2 border-teal">ERGO Premium (PKV)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            { label: "Medical Treatment", gkv: "Standard Care", pkv: "Chief Physician Access (Chefarzt)", icon: Award },
                            { label: "Hospital Stay", gkv: "Multi-bed Room", pkv: "Single/Double Private Suites", icon: Zap },
                            { label: "Wait Times", gkv: "Often weeks/months", pkv: "Instant Specialist Access", icon: Target },
                            { label: "Long-term Security", gkv: "Pay-as-you-go", pkv: "Guaranteed Provisions", icon: ShieldCheck },
                          ].map((row, i) => (
                            <tr key={i} className="group transition-colors duration-300">
                              <td className="p-8 text-navy font-black tracking-tight text-lg border-r-2 border-slate-50 flex items-center gap-4">
                                <row.icon className="w-6 h-6 text-teal opacity-20" />
                                {row.label}
                              </td>
                              <td className="p-8 text-center text-slate-400 font-bold text-sm leading-snug">{row.gkv}</td>
                              <td className="p-8 text-center text-teal font-black text-md bg-teal/[0.03] leading-snug group-hover:bg-teal group-hover:text-white transition-all duration-300">
                                {row.pkv}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="mt-24 text-center">
                   <button 
                     onClick={() => setStep(1)} 
                     className="px-12 py-6 rounded-2xl bg-slate-50 text-slate-400 font-black uppercase tracking-[0.3em] text-xs hover:bg-slate-100 hover:text-navy transition-all shadow-sm"
                   >
                     Reset Comparison
                   </button>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>
      
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
