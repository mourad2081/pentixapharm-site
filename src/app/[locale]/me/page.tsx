"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Share2, Download, Linkedin, Instagram, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MePage() {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Mourad Labadi
ORG:ERGO Beratung & Vermittlung
TITLE:Insurance & Pension Expert
TEL;TYPE=WORK,VOICE:+491234567890
EMAIL:mourad.labadi@ergo.de
URL:https://ergo-advisor.vercel.app
ADR;TYPE=WORK:;;Musterstraße 123;Berlin;;10115;Germany
REV:2026-03-20T15:45:00Z
END:VCARD`;
    
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Mourad_Labadi.vcf";
    link.click();
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy py-20 px-4 md:px-8 relative overflow-hidden flex flex-col items-center">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -z-10" />

      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg w-full mb-12"
      >
        <div className="relative inline-block mb-8">
            <div className="w-40 h-40 rounded-[2.5rem] bg-slate-200 dark:bg-white/5 border-4 border-white dark:border-white/10 shadow-2xl overflow-hidden relative group">
                {/* Fallback avatar if no image yet */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal/20 to-navy/10">
                    <ShieldCheck className="w-16 h-16 text-teal" />
                </div>
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 rounded-full border-4 border-slate-50 dark:border-navy flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-ping" />
            </div>
        </div>

        <h1 className="text-4xl font-heading font-black text-navy dark:text-white mb-2">Mourad Labadi</h1>
        <p className="text-xl text-teal font-bold uppercase tracking-widest mb-4">Insurance & Pension Expert</p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-medium bg-white dark:bg-white/5 py-2 px-6 rounded-full inline-block border border-slate-100 dark:border-white/5">
            <MapPin className="w-4 h-4 text-slate-400" /> Berlin, Germany
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg mb-12">
        <Button onClick={handleDownloadVCard} className="h-16 rounded-[1.5rem] bg-navy dark:bg-white text-white dark:text-navy hover:scale-105 transition-transform shadow-xl font-bold flex flex-col gap-0 items-center justify-center gap-1 group">
          <Download className="w-5 h-5 mb-0.5 group-hover:-translate-y-1 transition-transform" />
          <span className="text-xs">Save Contact</span>
        </Button>
        <Button className="h-16 rounded-[1.5rem] bg-teal text-white hover:scale-105 transition-transform shadow-xl shadow-teal/20 font-bold flex flex-col gap-0 items-center justify-center gap-1 group">
          <Share2 className="w-5 h-5 mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-xs">Share Profile</span>
        </Button>
      </div>

      {/* Main Links Container */}
      <div className="space-y-4 w-full max-w-lg">
        {[
          { icon: Phone, label: "Call / WhatsApp", value: "+49 123 456 7890", color: "bg-green-500", link: "tel:+491234567890" },
          { icon: Mail, label: "Official Email", value: "mourad.labadi@ergo.de", color: "bg-blue-600", link: "mailto:mourad.labadi@ergo.de" },
          { icon: Linkedin, label: "LinkedIn Profile", value: "/in/mourad-labadi", color: "bg-blue-700", link: "https://linkedin.com" },
          { icon: Instagram, label: "Instagram Advisor", value: "@ergo.mourad", color: "bg-pink-600", link: "https://instagram.com" },
          { icon: Globe, label: "Official Website", value: "www.ergo-advisor.com", color: "bg-teal", link: "/" },
        ].map((item, i) => (
          <motion.a 
            key={i}
            href={item.link}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-[1.5rem] border border-slate-100 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/10 transition-all group"
          >
            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform shadow-lg`}>
                <item.icon className="w-6 h-6" />
            </div>
            <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                <p className="text-lg font-bold text-navy dark:text-white truncate">{item.value}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-navy flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 group-hover:text-teal transition-all" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Trust Grid */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-lg mt-12 bg-white/40 dark:bg-white/5 p-8 rounded-[2rem] border border-white/50 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3 text-center">
            <CheckCircle2 className="w-8 h-8 text-teal" />
            <p className="text-sm font-bold dark:text-white">Expert Advisory</p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
            <ShieldCheck className="w-8 h-8 text-teal" />
            <p className="text-sm font-bold dark:text-white">Verified Security</p>
        </div>
      </div>

      <footer className="mt-12 text-slate-400 dark:text-slate-600 font-bold text-sm">
        ERGO Beratung & Vermittlung • 2026
      </footer>
    </main>
  );
}
