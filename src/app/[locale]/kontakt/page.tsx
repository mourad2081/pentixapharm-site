"use client";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Info, Globe2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white relative pt-32 pb-24 selection:bg-teal selection:text-white">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
           <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-black uppercase tracking-[0.3em] mb-8">
              <MessageSquare className="w-4 h-4" /> Direct Communication
           </span>
           <h1 className="text-6xl md:text-8xl font-heading font-black text-navy mb-8 tracking-tighter leading-none">
             Let's <span className="text-teal">Connect</span>
           </h1>
           <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
             Whether you need to file a claim, change your address, or just want to chat about your options — I'm usually available within the hour.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {[
                { 
                  title: "WhatsApp / Phone", 
                  value: "+49 176 612 11 392", 
                  desc: "Direct line for urgent matters", 
                  href: "https://wa.me/4917661211392", 
                  icon: Phone, 
                  color: "bg-teal/10 text-teal",
                  hover: "hover:bg-teal hover:text-white",
                  delay: "0ms"
                },
                { 
                  title: "Email Correspondence", 
                  value: "mourad.labadi@Next Gen Capital.de", 
                  desc: "Official inquiries & documents", 
                  href: "mailto:mourad.labadi@Next Gen Capital.de", 
                  icon: Mail, 
                  color: "bg-blue-500/10 text-blue-500",
                  hover: "hover:bg-blue-500 hover:text-white",
                  delay: "100ms"
                },
                { 
                  title: "Office Location", 
                  value: "Friedrichstraße 191, 10117 Berlin", 
                  desc: "Available for in-person meetings", 
                  href: "https://maps.google.com/?q=Friedrichstraße+191+10117+Berlin", 
                  icon: MapPin, 
                  color: "bg-amber-500/10 text-amber-500",
                  hover: "hover:bg-amber-500 hover:text-white",
                  delay: "200ms"
                }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block animate-in slide-in-from-left-8 duration-700`}
                  style={{ animationDelay: item.delay }}
                >
                  <Card className="border-4 border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden group">
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${item.color} group-hover:scale-110 group-hover:rotate-6`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h3>
                        <p className="text-slate-500 text-xs font-bold mb-3">{item.desc}</p>
                        <p className="text-xl md:text-2xl font-black text-navy group-hover:text-teal transition-colors tracking-tight">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="p-10 rounded-[3rem] bg-navy text-white relative overflow-hidden shadow-2xl animate-in fade-in duration-1000">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-bl-full" />
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="w-3 h-3 rounded-full bg-teal animate-pulse" />
                     <span className="text-xs font-black uppercase tracking-widest text-teal">Currently Available</span>
                  </div>
                  <h4 className="text-2xl font-heading font-black mb-4 tracking-tight">Rapid Response Guarantee</h4>
                  <p className="text-slate-400 font-bold leading-relaxed mb-6">
                    I speak English, German, French, and Arabic. No matter which language you prefer, 
                    I'll ensure you're understood and protected.
                  </p>
                  <div className="flex gap-3">
                     {["EN", "DE", "FR", "AR"].map(lang => (
                        <div key={lang} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black">
                           {lang}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 animate-in slide-in-from-right-8 duration-1000">
            <Card className="border-4 border-slate-50 shadow-3xl bg-white rounded-[3.5rem] overflow-hidden h-full relative group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(14,165,160,0.05)_0%,transparent_50%)]" />
               
               <CardContent className="p-12 md:p-16 relative z-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-2 h-10 bg-teal rounded-full" />
                       <h2 className="text-4xl font-heading font-black text-navy tracking-tight">Send Secure Message</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-2">First Name</label>
                        <Input required placeholder="Your first name" className="h-16 bg-slate-50 border-none rounded-2xl px-6 font-bold text-navy focus-visible:ring-4 focus-visible:ring-teal/30 transition-all shadow-sm" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Last Name</label>
                        <Input required placeholder="Your last name" className="h-16 bg-slate-50 border-none rounded-2xl px-6 font-bold text-navy focus-visible:ring-4 focus-visible:ring-teal/30 transition-all shadow-sm" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email Address</label>
                      <Input required type="email" placeholder="example@email.com" className="h-16 bg-slate-50 border-none rounded-2xl px-6 font-bold text-navy focus-visible:ring-4 focus-visible:ring-teal/30 transition-all shadow-sm" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-2">How can I assist you?</label>
                      <textarea 
                        required 
                        rows={6} 
                        placeholder="Please describe your current insurance situation..."
                        className="w-full rounded-[2rem] border-none bg-slate-50 px-8 py-6 text-base font-bold text-navy focus:outline-none focus:ring-4 focus:ring-teal/30 transition-all shadow-sm resize-none"
                      />
                    </div>

                    <div className="pt-4">
                       <Button type="submit" disabled={loading} className="w-full h-20 bg-navy hover:bg-teal text-white text-xl font-black rounded-[2.5rem] shadow-2xl shadow-navy/20 hover:-translate-y-2 transition-all group/btn uppercase tracking-widest flex items-center justify-center gap-4">
                          {loading ? "Transmitting..." : "Send Message"} 
                          <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                       </Button>
                       <p className="text-center text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] mt-6">
                          Encrypted & Confidential Communication
                       </p>
                    </div>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95 duration-500">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-teal text-white flex items-center justify-center mb-10 shadow-2xl shadow-teal/30 rotate-12">
                      <CheckCircle2 className="w-16 h-16" />
                    </div>
                    <h3 className="text-5xl font-heading font-black text-navy mb-6 tracking-tight">Transmission <span className="text-teal">Successful</span></h3>
                    <p className="text-xl text-slate-500 font-bold mb-12 max-w-sm leading-relaxed">
                       Thank you, Mourad. I've received your inquiry and will revert within 24 business hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="ghost" className="h-16 px-12 rounded-full font-black text-slate-400 uppercase tracking-widest hover:text-navy hover:bg-slate-50">
                      Send another message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
