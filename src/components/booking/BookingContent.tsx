"use client";
import { Video, Star, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TEAM = [
  {
    name: "Mourad Labadi",
    role: "Senior Financial Advisor",
    photo: "/mourad-headshot.png",
    languages: ["EN", "DE", "FR", "AR", "ES"],
    specialty: "Pension planning, health insurance, and asset protection specialist.",
    calendly: "https://calendly.com/mourad-labadi",
    phone: "+49 176 612 11 392",
    email: "beratung@nextgencapital.de",
    badge: "bg-teal",
    calLink: "mouradlabadi/30min",
  },
  {
    name: "Oscar Sunderland",
    role: "Financial Advisor",
    photo: "/mourad-headshot.png",
    languages: ["EN", "DE"],
    specialty: "Health insurance and financial planning specialist.",
    calendly: "https://calendly.com/oscar_sunderland",
    phone: "+49 176 70845501",
    email: "oscar.sunderland@nextgencapital.de",
    badge: "bg-navy",
    calLink: "oscar_sunderland/30min",
  },
];

const checklist = [
  "Detailed analysis of your situation",
  "Identification of coverage gaps",
  "Unbiased product recommendations",
  "100% free, zero pressure advice",
];

export function BookingContent() {
  const t = useTranslations("Navbar");

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Header */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,160,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container px-4 md:px-8 max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-teal/20 text-teal text-xs font-black px-6 py-2.5 rounded-full mb-10 border border-teal/30 uppercase tracking-[0.3em] shadow-2xl">
              <Star className="w-4 h-4" /> 100% Free. No Obligation
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 tracking-tighter leading-none">
              Book Your Free <br />
              <span className="text-teal underline decoration-teal/20 underline-offset-8">Initial Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-black uppercase tracking-widest flex items-center justify-center gap-6">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-teal" /> 30 Minutes</span>
              <span className="text-white/20 hidden md:inline">|</span>
              <span className="flex items-center gap-2"><Video className="w-5 h-5 text-teal" /> Online Call</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Advisor */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mb-4 tracking-tight">Choose Your Advisor</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Select the advisor that best fits your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-[4rem] shadow-xl shadow-navy/5 hover:shadow-2xl transition-all duration-700 overflow-hidden border-0 group relative"
              >
                <div className={`h-2 w-full ${member.badge}`} />
                <div className="p-10 md:p-14">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
                    <div className="relative h-32 w-32 rounded-[2.5rem] overflow-hidden bg-slate-100 border-4 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shrink-0">
                      <Image src={member.photo} alt={member.name} fill className="object-cover" />
                    </div>
                    <div className="text-center md:text-left pt-2">
                      <h3 className="text-3xl font-heading font-black text-navy mb-1 tracking-tight">{member.name}</h3>
                      <p className="text-teal font-black uppercase tracking-widest text-xs mb-4">{member.role}</p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.languages.map(l => (
                          <span key={l} className="text-[10px] px-3 py-1 bg-slate-50 text-slate-400 rounded-lg font-black border border-slate-100">{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-lg font-bold leading-relaxed mb-10 text-center md:text-left">{member.specialty}</p>
                  
                  <a
                    href={member.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full h-20 rounded-[2rem] bg-navy text-white text-lg font-black uppercase tracking-widest hover:bg-teal shadow-2xl shadow-navy/20 hover:-translate-y-2 transition-all duration-500 active:scale-95 group/btn"
                  >
                    Select {member.name.split(' ')[0]}
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What to expect */}
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-navy/5 max-w-3xl mx-auto relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-110" />
            
            <h3 className="text-2xl font-heading font-black text-navy mb-10 uppercase tracking-widest text-xs text-center">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-navy font-bold leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Privacy note */}
            <div className="bg-navy text-white p-8 rounded-[2rem] flex items-center gap-6 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-tl-full" />
                <div className="text-3xl shrink-0">🔒</div>
                <p className="text-sm font-bold text-slate-300 leading-relaxed relative z-10">
                  <strong className="text-teal font-black uppercase tracking-widest mr-2">Secure & Confidential.</strong> 
                  Your data is protected under German law (DSGVO). Consultations are strictly confidential.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
