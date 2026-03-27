"use client";
import { useState } from "react";
import { Video, PhoneCall, MapPin, CheckCircle2, Clock, Star, Globe2, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const TEAM = [
  {
    name: "Mourad Labadi",
    role: "Senior Financial Advisor",
    photo: "/mourad-headshot.png",
    languages: ["English", "French", "German", "Arabic"],
    specialty: "Pension planning, PKV, and asset protection specialist.",
    calendly: "https://calendly.com/mourad-labadi",
    phone: "+49 123 456 789",
    email: "mourad.labadi@nextgencapital.de",
    badge: "bg-teal",
    calLink: "mouradlabadi/30min",
  },
  {
    name: "Oscar Sunderland",
    role: "Financial Advisor",
    photo: "/mourad-headshot.png",
    languages: ["English", "German"],
    specialty: "Health insurance (PKV) and financial planning specialist.",
    calendly: "https://calendly.com/oscar_sunderland",
    phone: "+49 176 70845501",
    email: "oscar.sunderland@nextgencapital.de",
    badge: "bg-navy",
    calLink: "oscar_sunderland/30min",
  },
];

const checklist = [
  "Detailed analysis of your current financial situation",
  "Identification of hidden coverage gaps",
  "Concrete, unbiased product recommendations",
  "100% free, transparent, zero sales pressure",
];

export function BookingContent({ isEn: _ }: { isEn: boolean }) {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Header */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,160,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container px-4 md:px-8 max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-teal/20 text-teal text-sm font-bold px-5 py-2 rounded-full mb-8 border border-teal/30">
              <Star className="w-4 h-4" /> 100% Free — No Obligation
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
              Book Your Free <br />
              <span className="gradient-text">Initial Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-teal" />
              30 Minutes &nbsp;•&nbsp; Online or In Person &nbsp;•&nbsp; Zero Obligation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Advisor */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="container px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-navy mb-4">Choose Your Advisor</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Select the advisor that best fits your needs. Both offer a free 30-minute initial consultation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/30"
              >
                <div className={`h-1.5 w-full ${member.badge}`} />
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative h-20 w-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-md shrink-0">
                      <Image src={member.photo} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-black text-navy">{member.name}</h3>
                      <p className="text-teal font-bold text-sm">{member.role}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {member.languages.map(l => (
                          <span key={l} className="text-[10px] px-2 py-0.5 bg-teal/10 text-teal rounded-full font-bold">{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.specialty}</p>
                  
                  <div className="flex flex-col gap-2 mb-6 text-xs text-slate-400 font-medium">
                    <a href={`tel:${member.phone}`} className="hover:text-teal transition-colors">{member.phone}</a>
                    <a href={`mailto:${member.email}`} className="hover:text-teal transition-colors">{member.email}</a>
                  </div>
                  
                  <a
                    href={member.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl bg-navy text-white text-sm font-black uppercase tracking-widest hover:bg-teal transition-all duration-300 active:scale-95 group"
                  >
                    Book with {member.name.split(' ')[0]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What to expect */}
          <div className="bg-white border border-border/60 p-10 rounded-[2.5rem] shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-black text-navy mb-6 uppercase tracking-wide text-center">What to Expect</h3>
            <ul className="space-y-5">
              {checklist.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-navy text-sm font-medium leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust note */}
            <div className="mt-8 bg-navy text-white p-6 rounded-2xl">
              <p className="text-sm font-medium text-slate-300 leading-relaxed">
                🔒 <strong className="text-white">Privacy guaranteed.</strong> Your data is never shared or sold. Consultation details are protected under German data privacy law (DSGVO).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
