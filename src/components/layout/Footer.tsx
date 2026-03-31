"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Atom, ExternalLink, Mail, Phone } from "lucide-react";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-navy border-t border-white/8">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start gap-6 mb-8">
              <img 
                src="/logo_pentixapharm.png" 
                alt="Pentixapharm" 
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" 
              />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm italic">
                Advanced precision oncology through CXCR4-directed theranostics. Seeing what we treat, and treating what we see. Our headquarters are in Berlin and Würzburg, Germany.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-[10px] font-heading font-extrabold text-teal bg-teal/10 border border-teal/20 px-5 py-2 rounded-full uppercase tracking-widest italic group">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  Frankfurt Prime Standard · PTP.DE
                </div>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-white font-heading font-extrabold text-[11px] mb-8 uppercase tracking-[0.3em] opacity-40 italic">Clinical Hub</h3>
            <ul className="space-y-4">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Pipeline", href: "/pipeline" },
                { label: "Technology", href: "/technology" },
                { label: "Scientific Center", href: "/research" },
                { label: "Partnering", href: "/partnering" },
                { label: "Investors", href: "/investors" },
              ].map(link => (
                <li key={link.label}>
                  <Link href={"/" + locale + link.href} className="text-slate-400 hover:text-cyan text-sm font-medium transition-all hover:translate-x-1 inline-block italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Reach */}
          <div>
             <h3 className="text-white font-heading font-extrabold text-[11px] mb-8 uppercase tracking-[0.3em] opacity-40 italic">Global Contact</h3>
             <ul className="space-y-4 font-heading">
                <li className="flex items-start gap-3 group">
                   <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan/20 transition-all"><Mail className="w-4 h-4 text-cyan" /></div>
                   <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5 italic">Investor Relations</p>
                      <a href="mailto:ir@pentixapharm.com" className="text-slate-400 hover:text-white transition-colors text-sm italic">ir@pentixapharm.com</a>
                   </div>
                </li>
                <li className="flex items-start gap-3 group">
                   <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-all"><Phone className="w-4 h-4 text-teal" /></div>
                   <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5 italic">Headquarters</p>
                      <span className="text-slate-400 text-sm italic">+49 30 94892600</span>
                   </div>
                </li>
             </ul>
             <div className="mt-10">
                <a href="https://www.pentixapharm.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-heading font-extrabold text-[#00A3E0] uppercase tracking-widest hover:text-white transition-all italic">
                  Explore Parent Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] italic">© 2026 Pentixapharm Holding AG. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href={"/" + locale + "/imprint"} className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors italic">Legal Disclosure</Link>
            <div className="w-1 h-1 bg-slate-700 rounded-full" />
            <Link href={"/" + locale + "/datenschutz"} className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors italic">Privacy Policy</Link>
            <div className="w-1 h-1 bg-slate-700 rounded-full" />
            <Link href="/admin" className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors italic">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
