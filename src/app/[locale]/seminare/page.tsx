"use client";
import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const seminars = [
  {
    title: "Expats in Tech: The Ultimate Insurance Guide",
    date: "November 15, 2026",
    time: "18:00 - 19:30 CET",
    type: "Webinar",
    location: "Online (Zoom)",
    spots: 12,
    desc: "A specialized deep dive for tech professionals moving to Germany. We cover the GKV vs PKV dilemma, stock option implications, and why your employer's package might not be enough.",
    icon: Video,
  },
  {
    title: "Freelance Fearless: Income Protection Masterclass",
    date: "December 5, 2026",
    time: "10:00 - 12:00 CET",
    type: "In-Person",
    location: "ERGO Office Berlin, Musterstraße 123",
    spots: 5,
    desc: "Interactive workshop for independent contractors. Learn exactly how to structure your retirement savings for maximum tax deductions and how to insure your income against illness.",
    icon: Users,
  },
  {
    title: "Tax Year-End Strategies with ERGO",
    date: "December 14, 2026",
    time: "19:00 - 20:00 CET",
    type: "Webinar",
    location: "Online (Zoom)",
    spots: 50,
    desc: "Last-minute strategies to maximize your tax returns for this calendar year using Rürup and Riester pensions. Quick, actionable, and vital for high-earners.",
    icon: Video,
  },
];

export default function SeminarsPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pt-32 pb-24">
      {/* Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-navy z-0" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 text-white pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-bold uppercase tracking-widest mb-6">
              <Users className="w-4 h-4" /> Live Events
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
              Expert <span className="gradient-text">Seminars</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Join my free online and in-person events to learn how to master your finances and protect your future in Germany.
            </p>
          </motion.div>
        </div>

        {/* Seminar List */}
        <div className="space-y-8">
          {seminars.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="border-0 shadow-xl shadow-navy/5 hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden group">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  {/* Left block (Date/Type) */}
                  <div className="bg-slate-50 md:w-1/3 p-8 border-r border-border flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-[40px]" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                        <s.icon className="w-5 h-5 text-teal" />
                      </div>
                      <span className="text-sm font-black text-navy uppercase tracking-widest">{s.type}</span>
                    </div>
                    <div className="space-y-3 font-bold text-slate-600">
                      <p className="flex items-center gap-3"><Calendar className="w-5 h-5 text-teal" /> {s.date}</p>
                      <p className="flex items-center gap-3 pl-8 text-sm">{s.time}</p>
                      <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-teal" /> {s.location}</p>
                    </div>
                  </div>

                  {/* Right block (Content) */}
                  <div className="p-8 md:w-2/3 flex flex-col justify-center bg-white relative">
                    <div className="absolute right-8 top-8 text-sm font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                      Only {s.spots} spots left
                    </div>
                    <h3 className="text-3xl font-heading font-black text-navy mb-4 pr-32">{s.title}</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {s.desc}
                    </p>
                    <div>
                      <Button className="bg-teal hover:bg-navy text-white h-14 px-8 rounded-full font-bold shadow-lg shadow-teal/20 transition-all text-lg flex items-center gap-2 group/btn">
                        Register for free <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
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
