"use client";
import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Linkedin, Twitter, Mail, ExternalLink, MapPin, Phone, Building2 } from "lucide-react";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#031835] text-white pt-32 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none -rotate-12 translate-x-1/4">
         <Building2 className="w-96 h-96" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-12">
            <Link href={`/${locale}`} className="flex items-center gap-4 group">
               <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-2xl group-hover:rotate-6 transition-transform">
                  <img src="/logo.jpg" className="w-auto h-8 object-contain" alt="Pentixapharm" />
               </div>
               <span className="text-3xl font-heading font-extrabold tracking-tighter italic">PENTIXAPHARM</span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-light italic pr-10">
               Advancing clinical-stage radiopharmaceuticals for oncology and endocrinology. Precision discovery, targeted treatment.
            </p>
            <div className="flex items-center gap-6">
              {[Linkedin, Twitter].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan hover:border-cyan transition-all shadow-xl">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Clinical & Science */}
          <div className="space-y-10">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-[0.4em] italic text-cyan">The Pipeline</h4>
            <ul className="space-y-6 text-slate-400 font-light italic">
              <li><Link href={`/${locale}/pipeline`} className="hover:text-white transition-colors flex items-center gap-2 group">Clinical Overview <span className="text-[9px] font-bold text-teal tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Phase 3</span></Link></li>
              <li><Link href={`/${locale}/technology`} className="hover:text-white transition-colors">CXCR4 Mechanism</Link></li>
              <li><Link href={`/${locale}/research`} className="hover:text-white transition-colors">Scientific Library</Link></li>
              <li><Link href={`/${locale}/research#iis`} className="hover:text-white transition-colors italic">IIS Portal</Link></li>
            </ul>
          </div>

          {/* Commercial & Corporate */}
          <div className="space-y-10">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-[0.4em] italic text-teal">Corporate Center</h4>
            <ul className="space-y-6 text-slate-400 font-light italic">
              <li><Link href={`/${locale}/investors/portal`} className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-bold text-white/60">Investor Factsheet</Link></li>
              <li><Link href={`/${locale}/partnering/licensing`} className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-bold text-white/60">Licensing Hub</Link></li>
              <li><Link href={`/${locale}/news`} className="hover:text-white transition-colors italic">Latest Releases</Link></li>
              <li><Link href={`/${locale}/about#management`} className="hover:text-white transition-colors italic">Leadership Board</Link></li>
              <li><Link href={`/${locale}/careers`} className="hover:text-white transition-colors">Global Careers</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-10">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-[0.4em] italic text-slate-400">Headquarters</h4>
            <ul className="space-y-8 text-slate-300 font-light italic">
              <li className="flex gap-4 items-start">
                 <MapPin className="w-5 h-5 text-cyan shrink-0" />
                 <span className="text-sm leading-relaxed">Pentixapharm Holding AG <br/> Robert-Koch-Straße 1 <br/> 97080 Würzburg, Germany</span>
              </li>
              <li className="flex gap-4 items-center">
                 <Mail className="w-5 h-5 text-cyan" />
                 <a href="mailto:info@pentixapharm.com" className="text-sm hover:text-white transition-colors">info@pentixapharm.com</a>
              </li>
              <li className="flex gap-4 items-center">
                 <Phone className="w-5 h-5 text-cyan" />
                 <span className="text-sm">+49 (0) 931 3290 850</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 mt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 italic">
             <Link href={`/${locale}/legal`} className="hover:text-white transition-colors">Impressum</Link>
             <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href={`/${locale}/compliance`} className="hover:text-white transition-colors">Compliance</Link>
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em] italic">
             © {year} Pentixapharm Holding AG. All Rights Reserved. Frankfurt (PTP.DE).
          </p>
        </div>
      </div>
    </footer>
  );
}
