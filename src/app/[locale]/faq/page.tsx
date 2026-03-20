"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight, UserCheck, ShieldQuest } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

const faqs = [
  {
    category: "Moving to Germany",
    icon: HelpCircle,
    color: "text-teal",
    bg: "bg-teal/5",
    questions: [
      {
        q: "What insurance is mandatory in Germany?",
        a: "Health insurance (Krankenversicherung) is legally mandatory for all residents. Beyond that, liability insurance (Haftpflichtversicherung) is highly recommended as it's required by landlords. Pension contributions are mandatory for employees. Everything else — dental supplements, accident, legal — is optional but strongly advisable.",
      },
      {
        q: "GKV vs PKV — which is better for me?",
        a: "It depends on your income, employer situation, and health needs. GKV (public health) is compulsory if you earn under ~€73,800/year as an employee. PKV (private) is available above that threshold for employees, or for freelancers at any income. PKV typically offers better coverage and shorter waiting times, but can be expensive with age. Mourad will calculate the exact comparison for your situation — for free.",
      },
      {
        q: "I just arrived in Germany. When do I need to register for health insurance?",
        a: "As soon as you register your residence (Anmeldung), ideally within days of arriving. Many employers require proof of health cover. There's a 3-month deadline after arriving before you may owe retroactive contributions — so act quickly.",
      },
    ],
  },
  {
    category: "Freelancers & Self-Employed",
    icon: UserCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    questions: [
      {
        q: "As a freelancer, can I get private health insurance (PKV)?",
        a: "Yes! Freelancers (Selbstständige/Freiberufler) can choose PKV at any income level. This is one of the biggest advantages over employees. You'll pay both employee and employer shares, but you can deduct premiums as business expenses and often get premium medical care in return.",
      },
      {
        q: "Is pension planning really important for freelancers?",
        a: "Absolutely critical. Freelancers in most fields don't pay into the German state pension system (Rentenversicherung). This means your entire retirement depends on private savings. Starting an ERGO Rürup pension gives you enormous tax deductions (up to ~26,000€/year deductible) while building a guaranteed retirement income.",
      },
      {
        q: "What happens if I can't work due to illness or injury?",
        a: "Without employer sick pay, you have zero income from day 1. Disability and income protection insurance (Berufsunfähigkeitsversicherung) is the most important policy for freelancers — it pays you a monthly income if you're unable to work. The earlier you get it, the cheaper and more comprehensive the coverage.",
      },
    ],
  },
  {
    category: "Costs & Process",
    icon: MessageCircle,
    color: "text-amber-500",
    bg: "bg-amber-500/5",
    questions: [
      {
        q: "How much does a consultation cost?",
        a: "The initial consultation is completely free and carries zero obligation. Mourad is compensated directly by ERGO if you choose to take out a policy — you pay nothing extra. The advice you receive is exactly the same as you'd get from a fee-based advisor.",
      },
      {
        q: "How long does it take to get insured?",
        a: "Typically 5–7 days from first contact to active policy. Digital applications mean no waiting for post. Health checks may be required for some products, which can add a few days.",
      },
      {
        q: "Can I switch from my current insurance provider to ERGO?",
        a: "In most cases, yes. Notice periods vary — health insurance typically requires 2 months written notice. Mourad will review your current policies, identify gaps or overpayments, and guide you through any switch at no cost to you.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      <button
        className="w-full flex items-center justify-between gap-6 p-8 text-left transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-black text-navy text-lg group-hover:text-teal transition-colors tracking-tight leading-snug">{q}</span>
        <div
          className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            open ? "bg-navy text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-teal group-hover:text-white"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-10 text-slate-500 font-bold leading-relaxed border-t border-slate-50 pt-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
               <div className="absolute top-4 left-[-8px] w-2 h-12 bg-teal rounded-full" />
               <p>{a}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white relative pb-32">
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.15)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal/10 blur-[120px]" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-teal text-xs font-black uppercase tracking-[0.3em] mb-10">
              <MessageCircle className="w-4 h-4" /> Comprehensive Knowledge Base
           </span>
           <h1 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-none">
             Expertly <span className="text-teal underline decoration-teal/30 underline-offset-8">Answered</span>
           </h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
             Everything you need to know about insurance in Germany — clearly explained without the legal jargon.
           </p>
        </div>
      </section>

      {/* FAQ Categories & List */}
      <section className="py-24 animate-in fade-in duration-1000">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-24">
            {faqs.map((category, ci) => (
              <div key={ci} className="animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${ci * 200}ms` }}>
                <div className="flex items-center gap-4 mb-12 ml-4">
                  <div className={`p-4 rounded-2xl ${category.bg} ${category.color} shadow-sm`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Knowledge Section</h2>
                    <p className="text-3xl font-heading font-black text-navy tracking-tight">{category.category}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {category.questions.map((item, qi) => (
                    <FAQItem key={qi} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA Block */}
          <div className="mt-32 p-16 rounded-[4rem] bg-slate-50 border-4 border-slate-100 relative overflow-hidden group shadow-2xl shadow-slate-200/50">
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-110" />
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl font-heading font-black text-navy mb-6 tracking-tight">Still have <span className="text-teal">unanswered</span> questions?</h3>
                  <p className="text-lg text-slate-500 font-bold max-w-xl leading-relaxed">
                    Book a free 30-minute discovery call. I'll take the time to answer everything — 
                    in your language, without any sales pressure.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link href={`/${locale}/termin`}>
                     <button className="h-20 px-12 rounded-full bg-navy text-white text-lg font-black shadow-2xl shadow-navy/20 hover:bg-teal hover:-translate-y-2 transition-all uppercase tracking-widest flex items-center gap-4 group/btn">
                        Book Consultation 
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                     </button>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
