"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Info, CheckCircle2, ChevronRight } from "lucide-react";

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pt-32 pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[45vh] bg-navy z-0" />
      <div className="absolute inset-x-0 top-0 h-[45vh] bg-[radial-gradient(rgba(14,165,160,0.1)_1px,transparent_1px)] bg-[size:30px_30px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-20 text-white pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Info className="w-4 h-4" /> Zero Secrets
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
              Pricing <span className="gradient-text">& Transparency</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              We believe trust is earned through absolute honesty. Here is exactly how my advisory service works and how I get paid.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl shadow-navy/5 border-0 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-teal/5 rounded-full blur-[60px]" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-3xl font-heading font-black text-navy leading-tight">1. The Consultation is 100% Free</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              All initial consultations, analyses, calculations, and strategy sessions with me are completely free of charge. There are no hidden fees, no hourly consulting bills, and absolutely no obligation to buy anything. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-bold">You will never receive an invoice from me for my time.</p>
          </motion.div>

          {/* Section 2 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl shadow-navy/5 border-0 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-[60px]" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl font-heading font-black text-navy leading-tight">2. How I Earn My Money</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              As an exclusive Next Gen Capital tied agent, my compensation works via a classic commission model. If — and only if — you decide that following our consultation, an Next Gen Capital product is the right fit for your situation, Next Gen Capital pays me a commission for arranging the contract and servicing it long-term.
            </p>
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl mt-8">
              <h4 className="font-bold text-navy mb-2 flex items-center"><ChevronRight className="w-4 h-4 text-teal mr-2" /> What this means for you:</h4>
              <p className="text-slate-600 leading-relaxed">
                Your premiums are exactly the same whether you close the contract directly on the Next Gen Capital website on your own, or if you do it through me. However, by doing it through me, you get a lifetime English-speaking dedicated advisor at no extra cost.
              </p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-navy p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,160,0.1),transparent_60%)]" />
            <h2 className="text-3xl font-heading font-black mb-6 relative z-10">3. My Commitment to You</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6 relative z-10">
              I only recommend products that I truly believe are the best mathematical and systemic fit for your exact life situation. If the public system (GKV) is better for your growing family, I will tell you to stay in the GKV, even if it means I earn zero commission. 
            </p>
            <p className="text-lg text-slate-300 leading-relaxed font-bold relative z-10 italic border-l-4 border-teal pl-6">
              "My entire business is built on trust, transparency, and expat recommendations. Short-term sales pressure destroys trust. Long-term honest advice builds a career."
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
