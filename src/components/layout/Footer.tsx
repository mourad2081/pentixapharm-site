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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-emerald/15 rounded-full">
                <Atom className="w-4.5 h-4.5 text-emerald" />
              </div>
              <span className="font-heading text-lg font-bold text-white">Pentixa<span className="text-emerald">pharm</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-5">{t("tagline")}</p>
            <p className="text-slate-500 text-xs">{t("address")}</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald bg-emerald/10 border border-emerald/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                Frankfurt Prime Standard · PTP
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-heading font-extrabold text-sm mb-6 uppercase tracking-widest opacity-50">Discovery</h3>
            <ul className="space-y-3.5">
              {["about","pipeline","technology","iis","news","investors","careers"].map(k => (
                <li key={k}>
                  <Link href={"/" + locale + "/" + k} className="text-slate-400 hover:text-teal text-sm font-medium transition-all hover:translate-x-1 inline-block">
                    {k === "iis" ? "IIS Program" : k === "technology" ? "Technology" : nav(k)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-emerald/60 shrink-0" />
                <a href="mailto:ir@pentixapharm.com" className="hover:text-emerald transition-colors">ir@pentixapharm.com</a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-emerald/60 shrink-0" />
                <span>+49 30 94892600</span>
              </li>
              <li>
                <a href="https://www.pentixapharm.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 text-sm hover:text-emerald transition-colors">
                  pentixapharm.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">{t("copyright")}</p>
          <div className="flex items-center gap-4">
            <Link href={"/" + locale + "/imprint"} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Imprint</Link>
            <Link href={"/" + locale + "/datenschutz"} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy</Link>
            <Link href="/admin" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
