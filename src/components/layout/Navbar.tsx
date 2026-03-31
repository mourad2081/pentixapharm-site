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
    { label: "Technology", href: "/" + locale + "/technology" },
    { label: "IIS", href: "/" + locale + "/iis" },
    { label: t("careers"), href: "/" + locale + "/careers" },
  ];

  const switchLang = locale === "en" ? "de" : "en";
  const getAltUrl = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === locale) segments[0] = switchLang;
    return "/" + segments.join("/");
  };

  return (
    <nav className={"fixed top-0 w-full z-50 transition-all duration-300 " + (scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={"/" + locale} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-teal/10 border border-teal/25 rounded-xl flex items-center justify-center group-hover:bg-teal/20 transition-all">
            <Atom className="w-5 h-5 text-teal group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-navy text-[19px] leading-none tracking-tight">Pentixa<span className="text-teal">pharm</span></span>
            <span className="text-[9px] text-slate-400 font-medium uppercase tracking-[0.2em] mt-1 group-hover:text-cyan transition-colors">Theranostics</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={"px-4 py-2.5 rounded-full text-[13px] font-bold transition-all " + 
                (pathname === link.href || (link.href !== "/" + locale && pathname.startsWith(link.href)) 
                  ? "bg-navy text-white shadow-lg" 
                  : "text-slate-600 hover:text-navy hover:bg-slate-100")}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-slate-200 mx-2" />
          
          <Link 
            href={getAltUrl()} 
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-navy transition-all bg-slate-50 px-4 py-2 rounded-full border border-slate-200"
          >
            <Globe className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase">{switchLang}</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-navy" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-3xl border-b border-slate-200 lg:hidden shadow-2xl py-6 flex flex-col gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenu(false)}
                className={"px-8 py-4 text-lg font-bold " + (pathname === link.href ? "text-navy bg-slate-50 border-l-4 border-teal" : "text-slate-600")}>
                {link.label}
              </Link>
            ))}
            <div className="px-8 py-6 flex items-center justify-between border-t border-slate-100 mt-4">
              <Link href={getAltUrl()} onClick={() => setMobileMenu(false)} className="flex items-center gap-2 text-navy font-bold">
                <Globe className="w-4 h-4 text-teal" /> <span className="uppercase">{switchLang}</span>
              </Link>
              <Link href={"/" + locale + "/contact"} onClick={() => setMobileMenu(false)}
                className="px-8 py-3 bg-teal text-navy font-bold rounded-full text-sm shadow-xl">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
