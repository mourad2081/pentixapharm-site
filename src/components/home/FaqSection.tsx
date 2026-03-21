"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Plus, 
  Minus, 
  MessageCircleQuestion, 
  ArrowUpRight 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

const FAQ_ITEMS = [
  {
    q: "Is insurance mandatory for my residence permit?",
    a: "Yes, in Germany, valid health insurance is a requirement for all residents and for obtaining any long-term visa or residence permit. We help you choose the one that's right for your situation.",
    tags: ["Health", "Visa"]
  },
  {
    q: "Why should I switch from Public (GKV) to Private (PKV)?",
    a: "Private insurance often offers better services, faster specialist access, and can be cheaper if you are a young high-earner or freelancer. However, it's a long-term decision that needs careful planning.",
    tags: ["PKV", "Savings"]
  },
  {
    q: "What the difference between 'Netto' and 'Brutto' for pensions?",
    a: "Brutto is your gross salary before taxes and social contributions. Netto is what's in your bank account. Your pension will be a percentage of your last Netto income, hence the 'pension gap'.",
    tags: ["Pension", "Money"]
  },
  {
    q: "How much does a personal consultation cost?",
    a: "My initial consultation is 100% free and without any obligation. I'm compensated by the insurance providers, so you get expert advice at no extra cost.",
    tags: ["Consultation", "Cost"]
  },
  {
    q: "Can I manage my insurance in English?",
    a: "Yes! At ERGO, we offer multilingual support, and I personally advice in 4 languages. Most documentation is also available in English for expats.",
    tags: ["Language", "Support"]
  }
];

export function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_ITEMS.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-32 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full text-teal font-black text-sm uppercase tracking-widest border border-teal/20 mb-6"
          >
            <MessageCircleQuestion className="h-4 w-4" /> FAQ
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-navy mb-8 tracking-tighter">
            Smart <span className="text-teal">Answers</span> for Expats
          </h2>

          <div className="relative max-w-lg mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-teal transition-colors" />
            <Input 
              placeholder="Search e.g. 'PKV', 'Visa'..." 
              className="h-16 pl-14 pr-6 rounded-2xl bg-slate-50 border-none shadow-inner text-lg font-bold focus-visible:ring-2 focus-visible:ring-teal"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`border-4 rounded-[2rem] transition-all duration-300 ${openIndex === i ? 'border-teal bg-teal/5' : 'border-slate-50 hover:bg-slate-50 hover:border-slate-100'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl font-black text-navy group-hover:text-teal transition-colors tracking-tight">{faq.q}</span>
                      <div className="flex gap-2">
                        {faq.tags.map(t => (
                          <span key={t} className="text-[10px] uppercase font-black tracking-widest text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-100">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-teal text-white rotate-180' : 'bg-white text-slate-300'}`}>
                      {openIndex === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-lg text-slate-500 font-medium leading-relaxed border-t border-teal/10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-slate-400 font-black uppercase tracking-widest">
                  No matches for "{searchTerm}"
                </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <button className="text-teal font-black uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:underline group">
            See all questions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
