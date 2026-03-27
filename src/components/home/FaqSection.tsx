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

export function FaqSection() {
  const t = useTranslations("FaqSection");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQ_ITEMS = [
    { q: t('q1'), a: t('a1'), tags: ["Health", "Visa"] },
    { q: t('q2'), a: t('a2'), tags: ["PKV", "Savings"] },
    { q: t('q3'), a: t('a3'), tags: ["Pension", "Money"] },
    { q: t('q4'), a: t('a4'), tags: ["Consultation", "Cost"] },
    { q: t('q5'), a: t('a5'), tags: ["Language", "Support"] }
  ];

  const filteredFaqs = FAQ_ITEMS.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-32 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full text-teal font-black text-sm uppercase tracking-widest border border-teal/20 mb-6"
          >
            <MessageCircleQuestion className="h-4 w-4" /> {t('subtitle')}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-navy mb-8 tracking-tighter">
            {t('title').split(', ')[0]}, <span className="text-teal">{t('title').split(', ')[1]}</span>
          </h2>

          <div className="relative max-w-lg mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-teal transition-colors" />
            <Input 
              placeholder={t('searchPlaceholder')} 
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
                  className={`border-4 rounded-[2rem] transition-all duration-300 ${openIndex === i ? 'border-teal bg-teal/5 shadow-xl shadow-teal/5 scale-[1.02]' : 'border-slate-50 hover:bg-slate-50 hover:border-slate-100 shadow-sm'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl font-black text-navy group-hover:text-teal transition-colors tracking-tight leading-tight">{faq.q}</span>
                      <div className="flex gap-2">
                        {faq.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-black tracking-widest text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-100">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${openIndex === i ? 'bg-teal text-white rotate-180' : 'bg-white text-slate-300 shadow-sm border border-slate-100'}`}>
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
          <button className="text-teal font-black uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:underline group hover:translate-x-1 transition-transform">
            See all questions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
