"use client";
import { useState } from "react";
import { Users, TrendingUp, Globe2, Heart, CheckCircle2, ArrowRight, Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: TrendingUp, title: "Uncapped Earning Potential", desc: "Commission-based structure with excellent earning possibilities and performance bonuses." },
  { icon: Globe2, title: "Multilingual Environment", desc: "Work with international clients across Germany. Fluency in multiple languages is a strong asset." },
  { icon: Users, title: "Collaborative Team", desc: "Join a growing team of experts who support each other's success with mentorship and resources." },
  { icon: Heart, title: "Make a Real Impact", desc: "Help people secure their financial futures. Your work directly improves lives in Germany." },
  { icon: Star, title: "Premium Training", desc: "Comprehensive onboarding and continuous professional development programs." },
  { icon: Briefcase, title: "Flexible Working", desc: "Remote-friendly environment with flexible scheduling to fit your lifestyle." },
];

const openRoles = [
  {
    title: "Financial Advisor",
    type: "Full-Time or Part-Time",
    location: "Remote (Germany)",
    desc: "Advise clients on health insurance, pensions, and asset protection across Germany. Requires §34d GewO license or willingness to obtain it.",
    tags: ["Insurance", "Advisory", "Client Relations"],
    badge: "bg-teal",
  },
  {
    title: "Health Insurance Specialist",
    type: "Full-Time",
    location: "Remote (Germany)",
    desc: "Specialise in GKV/PKV advisory for individuals and families. Expert knowledge of the German healthcare system required.",
    tags: ["PKV", "GKV", "Healthcare"],
    badge: "bg-navy",
  },
];

interface AppForm {
  name: string;
  email: string;
  phone: string;
  role: string;
  languages: string;
  experience: string;
  message: string;
}

export default function JoinUsPage() {
  const [form, setForm] = useState<AppForm>({ name: "", email: "", phone: "", role: "", languages: "", experience: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Hero */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal/30 bg-teal/10 text-teal text-xs font-black uppercase tracking-[0.2em] mb-8">
            <Users className="w-4 h-4" /> We're Hiring
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 tracking-tighter">
            Join <span className="text-teal">Next Gen Capital</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Build a rewarding career in financial advisory. Help people across Germany secure their future — while securing yours.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal transition-colors duration-300">
                <b.icon className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-black text-navy mb-3">{b.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Roles */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-black text-navy mb-4">Open Positions</h2>
            <p className="text-slate-500 font-medium">Current opportunities to join our growing team.</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-1 w-full ${role.badge}`} />
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-black text-navy mb-1">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <span>{role.type}</span>
                        <span>·</span>
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-teal/10 text-teal text-xs font-bold rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-black text-navy mb-4">Apply Now</h2>
            <p className="text-slate-500 font-medium">Tell us about yourself. We review every application personally.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-[3rem] border border-border shadow-sm p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-teal" />
              </div>
              <h3 className="text-3xl font-heading font-black text-navy mb-4">Application Received! 🎉</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Thank you for your application. Our team will review it and be in touch within 3–5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] border border-border/50 shadow-sm p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                    className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40" />
                </div>
                <div>
                  <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                    className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+49 ..."
                    className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40" />
                </div>
                <div>
                  <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Position of Interest *</label>
                  <select name="role" value={form.role} onChange={handleChange} required
                    className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 bg-white">
                    <option value="">Select a role</option>
                    {openRoles.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Languages You Speak *</label>
                <input type="text" name="languages" value={form.languages} onChange={handleChange} required placeholder="e.g. English, German, French"
                  className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40" />
              </div>

              <div>
                <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Relevant Experience</label>
                <input type="text" name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 3 years in insurance advisory"
                  className="w-full h-14 px-5 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40" />
              </div>

              <div>
                <label className="text-xs font-black text-navy uppercase tracking-widest block mb-2">Why do you want to join Next Gen Capital? *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                  placeholder="Tell us about yourself and your motivation..."
                  className="w-full px-5 py-4 border border-border rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-teal/40 resize-none" />
              </div>

              <Button type="submit" disabled={loading}
                className="w-full h-16 rounded-2xl bg-teal hover:bg-navy text-white font-black uppercase tracking-widest text-sm shadow-xl transition-all duration-300 active:scale-95">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Application...
                  </span>
                ) : (
                  <>Submit Application <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
