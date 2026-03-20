"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 relative pt-32 pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-navy z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.05)_1px,transparent_1px)] bg-[size:30px_30px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-teal text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Mail className="w-4 h-4" /> Let's Talk
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Whether you need to file a claim, change your address, or just want to chat about your options — I'm here.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="border-0 shadow-xl shadow-navy/5 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                    <Phone className="w-8 h-8 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">Available Mon-Fri, 9am - 6pm CET</p>
                    <a href="tel:+491234567890" className="text-2xl font-black text-teal hover:underline">+49 (0) 123 456 7890</a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-0 shadow-xl shadow-navy/5 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                    <Mail className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-4">I usually reply within 24 hours</p>
                    <a href="mailto:mourad@example.com" className="text-xl font-black text-navy hover:text-teal transition-colors">mourad@example.com</a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-0 shadow-xl shadow-navy/5 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <MapPin className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Office Location</h3>
                    <p className="text-muted-foreground mb-4">ERGO Generalagentur<br />Musterstraße 123<br />10115 Berlin</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-0 shadow-2xl bg-white rounded-[2rem] overflow-hidden h-full">
              <CardContent className="p-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl font-heading font-black text-navy mb-8">Send a Message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy">First Name</label>
                        <Input required placeholder="John" className="h-14 bg-slate-50 border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy">Last Name</label>
                        <Input required placeholder="Doe" className="h-14 bg-slate-50 border-slate-200" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">Email Address</label>
                      <Input required type="email" placeholder="john@example.com" className="h-14 bg-slate-50 border-slate-200" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">How can I help you?</label>
                      <textarea 
                        required 
                        rows={5} 
                        placeholder="Please describe your current situation or what kind of insurance you're looking for..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                      />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full h-14 bg-navy hover:bg-teal text-white text-lg font-bold rounded-xl transition-colors">
                      {loading ? "Sending..." : "Send Message"} <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-12 h-12 text-teal" />
                    </div>
                    <h3 className="text-3xl font-heading font-black text-navy mb-4">Message Sent!</h3>
                    <p className="text-lg text-muted-foreground mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="h-12 px-8 rounded-full">
                      Send another message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
