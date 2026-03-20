"use client";
import { Users, Calendar, MapPin, Video, ArrowRight, Clock, Star, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const seminars = [
  {
    title: "Expats in Tech: The Ultimate Insurance Guide",
    date: "April 15, 2026",
    time: "18:00 - 19:30 CET",
    type: "Webinar",
    location: "Online (Zoom)",
    spots: 12,
    desc: "A specialized deep dive for tech professionals moving to Germany. We cover the GKV vs PKV dilemma, stock option implications, and why your employer's package might not be enough.",
    icon: Video,
    color: "from-teal/20 to-cyan-300/20",
    tag: "Exclusive"
  },
  {
    title: "Freelance Fearless: Income Protection Masterclass",
    date: "May 5, 2026",
    time: "10:00 - 12:00 CET",
    type: "In-Person",
    location: "ERGO Office Berlin, Musterstraße 123",
    spots: 5,
    desc: "Interactive workshop for independent contractors. Learn exactly how to structure your retirement savings for maximum tax deductions and how to insure your income against illness.",
    icon: Users2,
    color: "from-blue-400/20 to-indigo-400/20",
    tag: "Limited"
  },
  {
    title: "Tax Year-End Strategies with ERGO",
    date: "June 14, 2026",
    time: "19:00 - 20:00 CET",
    type: "Webinar",
    location: "Online (Zoom)",
    spots: 50,
    desc: "Last-minute strategies to maximize your tax returns for this calendar year using Rürup and Riester pensions. Quick, actionable, and vital for high-earners.",
    icon: Video,
    color: "from-emerald-400/20 to-teal/20",
    tag: "Trending"
  },
];

export default function SeminarsPage() {
  return (
    <main className="min-h-screen bg-white relative pt-32 pb-24 selection:bg-teal selection:text-white">
      {/* Dynamic BG */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-24 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
           <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal/30 bg-teal/10 text-teal text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Users className="w-4 h-4" /> Professional Development
           </span>
           <h1 className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 tracking-tighter">
             Expert <span className="text-teal">Seminars</span>
           </h1>
           <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
             Join our free online and in-person events to learn how to master your finances and protect your future in Germany.
           </p>
        </div>

        {/* Seminar Cards */}
        <div className="grid grid-cols-1 gap-12">
          {seminars.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${i * 150}ms` }}
            >
               {/* Decorative tag */}
               <div className="absolute -top-4 left-10 bg-navy text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-widest z-20 border border-white/10">
                  {s.tag}
               </div>

               <div className="flex flex-col lg:flex-row h-full overflow-hidden rounded-[3.1rem]">
                  {/* Visual Context */}
                  <div className={`lg:w-1/3 bg-gradient-to-br ${s.color} p-12 flex flex-col justify-center items-center relative group-hover:scale-105 transition-transform duration-700`}>
                     <div className="w-24 h-24 rounded-[2rem] bg-white flex items-center justify-center shadow-2xl mb-8 group-hover:rotate-12 transition-transform duration-500">
                        <s.icon className="w-10 h-10 text-teal" />
                     </div>
                     <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-2 text-navy font-black text-sm uppercase tracking-widest bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                           <Calendar className="w-4 h-4" /> {s.date}
                        </div>
                        <div className="flex items-center justify-center gap-2 text-navy font-black text-sm uppercase tracking-widest bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                           <Clock className="w-4 h-4" /> {s.time}
                        </div>
                     </div>
                  </div>

                  {/* Content block */}
                  <div className="p-12 lg:w-2/3 bg-white flex flex-col justify-between relative">
                     <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                           <div className="flex items-center gap-2 text-teal font-black text-[10px] uppercase tracking-[0.2em] bg-teal/5 px-3 py-1 rounded-full">
                              <MapPin className="w-3.5 h-3.5" /> {s.location}
                           </div>
                           <div className="flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase tracking-[0.2em] bg-amber-50 px-3 py-1 rounded-full border border-amber-100 animate-pulse">
                              Only {s.spots} spots remaining
                           </div>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-heading font-black text-navy mb-6 group-hover:text-teal transition-colors duration-300 tracking-tight">{s.title}</h3>
                        <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                           {s.desc}
                        </p>
                     </div>

                     <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-50">
                        <Button className="bg-navy hover:bg-teal text-white h-16 px-12 rounded-[1.5rem] font-black shadow-xl shadow-navy/20 transition-all text-sm uppercase tracking-widest flex items-center gap-3 active:scale-95">
                           Register for free <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>
                        <div className="flex -space-x-4">
                           {[1,2,3,4].map(num => (
                              <div key={num} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 overflow-hidden shadow-sm">
                                 <Users className="w-4 h-4" />
                              </div>
                           ))}
                           <div className="w-10 h-10 rounded-full border-4 border-white bg-teal text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                              +24
                           </div>
                        </div>
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Attending</span>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-32 p-16 rounded-[4rem] bg-navy text-white text-center relative overflow-hidden shadow-3xl animate-in fade-in zoom-in duration-1000">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,160,0.4)_0%,transparent_60%)]" />
           <div className="relative z-10">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-6 opacity-60">Custom Training</h4>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 tracking-tighter">Need a session for your <br/><span className="text-teal underline decoration-teal/30 underline-offset-8">company team?</span></h2>
              <p className="text-lg text-slate-300 max-w-xl mx-auto mb-10 font-medium">
                 I provide private bilingual workshops for international companies in Berlin 
                 to help their employees navigate the German insurance landscape.
              </p>
              <Button className="h-16 px-12 rounded-full bg-teal text-white font-black hover:bg-white hover:text-navy transition-all uppercase tracking-widest">
                 Inquire About Workshops
              </Button>
           </div>
        </div>
      </div>
    </main>
  );
}
