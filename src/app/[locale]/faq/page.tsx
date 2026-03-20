"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

const faqs = [
  {
    category: "Moving to Germany",
    color: "text-teal",
    bg: "bg-teal/10",
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
    color: "text-blue-500",
    bg: "bg-blue-500/10",
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
    color: "text-gold",
    bg: "bg-gold/10",
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
    <div className="border border-border/60 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-navy group-hover:text-teal transition-colors leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-teal/10 group-hover:text-teal transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium border-t border-border/40 pt-4 bg-slate-50/50">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-teal/30 text-teal text-sm font-bold uppercase tracking-widest mb-8">
              <MessageCircle className="w-4 h-4" />
              Got Questions?
            </span>
            <h1 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
              Frequently Asked<br />
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Everything you need to know about insurance in Germany — answered clearly, in plain English.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {faqs.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${category.bg} ${category.color}`}>
                    {category.category}
                  </span>
                </div>
                <div className="space-y-3">
                  {category.questions.map((item, qi) => (
                    <FAQItem key={qi} q={item.q} a={item.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-24 bg-gradient-to-br from-navy to-navy/80 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-black text-white mb-4">Still have questions?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Book a free 30-minute call. I'll answer everything — in your language, without pressure.
              </p>
              <Link href={`/${locale}/termin`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="h-14 px-10 rounded-full bg-teal text-white font-bold text-lg shadow-xl shadow-teal/30"
                >
                  Book Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
