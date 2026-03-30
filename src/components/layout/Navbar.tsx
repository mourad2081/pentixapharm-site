"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Activity, Globe, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("home"), href: "/" + locale },
    { label: t("pipeline"), href: "/" + locale + "/pipeline" },
    { label: t("about"), href: "/" + locale + "/about" },
    { label: t("news"), href: "/" + locale + "/news" },
    { label: t("investors"), href: "/" + locale + "/investors" },
    { label: t("stats"), href: "/" + locale + "/stats" },
    { label: t("careers"), href: "/" + locale + "/careers" },
  ];

  const switchLang = locale === "en" ? "de" : "en";
  const getAltUrl = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === locale) segments[0] = switchLang;
    return "/" + segments.join("/");
  };

  return (
    <nav className={"fixed top-0 w-full z-50 transition-all duration-300 " + (scrolled ? "bg-navy/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-5")}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={"/" + locale} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-emerald/10 border border-emerald/25 rounded-xl flex items-center justify-center group-hover:bg-emerald/20 transition-all">
            <Atom className="w-5 h-5 text-emerald group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-[19px] leading-none tracking-tight">Pentixa<span className="text-emerald">pharm</span></span>
            <span className="text-[9px] text-slate-400 font-medium uppercase tracking-[0.2em] mt-1 group-hover:text-cyan transition-colors">Theranostics</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={"text-sm font-semibold transition-colors hover:text-emerald " + ((pathname === link.href) || (link.href !== "/" + locale && pathname.startsWith(link.href)) ? "text-emerald" : "text-slate-300")}>
              {link.label}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-white/10" />
          
          {/* Language Switch */}
          <Link href={getAltUrl()} className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 px-2.5 py-1.5 rounded-full border border-white/10">
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{switchLang}</span>
          </Link>
          
          <Link href={"/" + locale + "/contact"}
            className="px-5 py-2.5 bg-emerald text-navy font-bold rounded-full text-xs hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20 hover:shadow-emerald/40 hover:-translate-y-0.5">
            {t("contact")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-300" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="absolute top-full left-0 w-full bg-navy/95 backdrop-blur-3xl border-b border-white/10 lg:hidden shadow-2xl py-4 flex flex-col">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenu(false)}
                className="px-6 py-3 text-lg font-semibold text-slate-200 hover:bg-white/5 hover:text-emerald border-l-4 border-transparent hover:border-emerald transition-all">
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4 flex items-center justify-between border-t border-white/10 mt-2">
              <Link href={getAltUrl()} onClick={() => setMobileMenu(false)} className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4" /> <span className="uppercase">{switchLang}</span>
              </Link>
              <Link href={"/" + locale + "/contact"} onClick={() => setMobileMenu(false)}
                className="px-6 py-2.5 bg-emerald text-navy font-bold rounded-full text-sm">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
