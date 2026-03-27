"use client";
import { useState } from "react";
import { Video, Calendar, Clock, CheckCircle2, ArrowRight, Users, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  question: string;
}

export default function SeminarsPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", company: "", question: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const topics = [
    { icon: Heart, label: "GKV vs PKV explained simply" },
    { icon: Shield, label: "What health insurance covers in Germany" },
    { icon: Users, label: "How to choose the right plan for your situation" },
    { icon: CheckCircle2, label: "Switching from public to private health insurance" },
    { icon: Video, label: "Q&A with a certified health insurance expert" },
  ];

  return (
    <main className="min-h-screen bg-white relative pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal/30 bg-teal/10 text-teal text-xs font-black uppercase tracking-[0.2em] mb-8">
            <Users className="w-4 h-4" /> Free Webinar
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 tracking-tighter">
            Health Insurance <span className="text-teal">Explained</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Join our free live webinar and finally understand Germany's health insurance system — in plain English. No jargon, no sales pitch.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Seminar Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Seminar Card */}
            <div className="bg-navy rounded-[3rem] p-10 text-white mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,160,0.25),transparent_60%)]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/20 rounded-full text-teal text-xs font-black uppercase tracking-widest border border-teal/30 mb-8">
                  <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                  Next Session
                </div>
                
                <h2 className="text-3xl font-heading font-black mb-6 tracking-tight">
                  Understanding Health Insurance in Germany
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Calendar className="w-5 h-5 text-teal shrink-0" />
                    <span className="font-bold">April 22, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-5 h-5 text-teal shrink-0" />
                    <span className="font-bold">18:00 – 19:30 CET</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Video className="w-5 h-5 text-teal shrink-0" />
                    <span className="font-bold">Online (Zoom) · Free</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-amber-400 font-black text-sm uppercase tracking-widest animate-pulse">
                  <Users className="w-4 h-4" />
                  Only 40 spots remaining
                </div>
              </div>
            </div>

            {/* What we cover */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8">
              <h3 className="text-xl font-heading font-black text-navy mb-6">What We'll Cover</h3>
              <ul className="space-y-4">
                {topics.map((topic, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <topic.icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-navy font-bold text-sm">{topic.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="bg-white rounded-[3rem] border border-border shadow-sm p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-teal" />
                </div>
                <h3 className="text-3xl font-heading font-black text-navy mb-4">You're Registered! 🎉</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  Check your email for the Zoom link and calendar invite. We look forward to seeing you!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", question: "" }); }}
                  className="text-teal font-black text-sm uppercase tracking-widest hover:underline"
                >
                  Register another person
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] border border-border shadow-sm p-10">
                <h3 className="text-2xl font-heading font-black text-navy mb-2">Reserve Your Spot</h3>
                <p className="text-slate-400 font-medium text-sm mb-8">Free registration — limited to 50 participants.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Company / Employer</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Your Question (Optional)</label>
                    <textarea
                      name="question"
                      value={form.question}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific topic you'd like us to cover?"
                      className="w-full px-5 py-4 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 rounded-2xl bg-teal hover:bg-navy text-white font-black uppercase tracking-widest text-sm shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Registering...
                      </span>
                    ) : (
                      <>Register for Free <ArrowRight className="w-5 h-5" /></>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
