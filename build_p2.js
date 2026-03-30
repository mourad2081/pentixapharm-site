
const fs = require('fs');
const path = require('path');
const B = __dirname;
const w = (f, c) => { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); };

// ── src/components/layout/Navbar.tsx ─────────────────────────────────────────
w('src/components/layout/Navbar.tsx',`"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe, ChevronDown, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { key: "about", href: "/" + locale + "/about" },
    { key: "pipeline", href: "/" + locale + "/pipeline" },
    { key: "science", href: "/" + locale + "/stats" },
    { key: "news", href: "/" + locale + "/news" },
    { key: "investors", href: "/" + locale + "/investors" },
    { key: "contact", href: "/" + locale + "/contact" },
  ];

  const otherLocale = locale === "en" ? "de" : "en";

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (scrolled ? "bg-navy/95 backdrop-blur-xl border-b border-white/8 shadow-xl" : "bg-transparent")}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href={"/" + locale} className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald/20 rounded-full group-hover:bg-emerald/30 transition-colors" />
              <Atom className="w-5 h-5 text-emerald relative z-10" />
            </div>
            <span className="font-heading text-xl font-bold text-white tracking-tight">
              Pentixa<span className="text-emerald">pharm</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.key} href={l.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150">
                {t(l.key)}
              </Link>
            ))}
          </div>

          {/* Right: Lang + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={"/" + otherLocale} className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase font-medium">{otherLocale}</span>
            </Link>
            <Link href={"/" + locale + "/investors"}
              className="flex items-center gap-2 px-5 py-2 bg-emerald text-navy font-semibold text-sm rounded-full hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20 hover:shadow-emerald/40">
              {t("contactIR")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="lg:hidden bg-navy2/98 backdrop-blur-xl border-t border-white/8">
            <div className="container mx-auto px-6 py-4 space-y-1">
              {links.map(l => (
                <Link key={l.key} href={l.href} onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  {t(l.key)}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/8 flex items-center gap-3">
                <Link href={"/" + otherLocale} onClick={() => setOpen(false)} className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Globe className="w-3.5 h-3.5" /> <span className="uppercase font-medium">{otherLocale}</span>
                </Link>
                <Link href={"/" + locale + "/investors"} onClick={() => setOpen(false)}
                  className="flex-1 text-center px-4 py-2 bg-emerald text-navy font-semibold text-sm rounded-full">
                  {t("contactIR")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
`);

// ── src/components/layout/Footer.tsx ─────────────────────────────────────────
w('src/components/layout/Footer.tsx',`"use client";
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
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {["about","pipeline","news","investors","contact"].map(k => (
                <li key={k}>
                  <Link href={"/" + locale + "/" + k} className="text-slate-400 hover:text-emerald text-sm transition-colors">{nav(k)}</Link>
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
`);

console.log('\n✅ Phase 2 done — Navbar + Footer\n');
