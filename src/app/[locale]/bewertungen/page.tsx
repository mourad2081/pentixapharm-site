"use client";
import { motion } from "framer-motion";
import { Star, Quote, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "John T., Software Engineer", flag: "🇬🇧", stars: 5, text: "Mourad explained the German pension system in 30 minutes better than anyone else could in 3 years. The PKV transition was seamless and I saved a lot of money." },
  { name: "Claire M., Freelance Designer", flag: "🇫🇷", stars: 5, text: "As a freelancer, I was terrified of making a mistake with my health insurance. Mourad found the perfect Next Gen Capital tariff that covers everything I need, but keeps my costs low right now." },
  { name: "Ahmed K., IT Consultant", flag: "🇸🇾", stars: 5, text: "Highly recommend! No pressure, absolute transparency. He even advised me to stay in the public system for now because of my growing family, which shows he cares about the client, not just the commission." },
  { name: "Anna P., Expat Family", flag: "🇵🇱", stars: 5, text: "We had so many questions about child benefits and family insurance. Mourad took the time to explain everything step by step. We feel totally secure now." },
  { name: "Markus S., Startup Founder", flag: "🇩🇪", stars: 5, text: "Super transparent und extrem schnell. Die bAV Einrichtung für unser ganzes Team war innerhalb von einer Woche erledigt." },
  { name: "Priya R., Product Manager", flag: "🇮🇳", stars: 5, text: "The Pension Gap calculator was an eye opener. I immediately booked a call and now I have a solid ETF-based retirement plan. Thank you!" },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pt-32 pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[45vh] bg-navy z-0" />
      <div className="absolute inset-x-0 top-0 h-[45vh] bg-[radial-gradient(rgba(212,168,83,0.1)_10%,transparent_60%)] z-0" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <HeartHandshake className="w-4 h-4" /> Real Stories
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6">
              Client <span className="gradient-text">Reviews</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Over 500 expats, freelancers, and families have secured their future in Germany. Here is what they say.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full border-0 shadow-xl shadow-navy/5 hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white overflow-hidden flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-teal/5" />
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg text-navy font-medium leading-relaxed mb-8 flex-1 relative z-10">"{r.text}"</p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl shadow-inner">
                      {r.flag}
                    </div>
                    <div>
                      <p className="font-bold text-navy">{r.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
