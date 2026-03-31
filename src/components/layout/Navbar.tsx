"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [
    { href: `/${locale}`, label: "Home", highlight: false },
    { href: `/${locale}/about`, label: "About", highlight: false },
    { href: `/${locale}/pipeline`, label: "Pipeline" },
    { href: `/${locale}/technology`, label: "Technology" },
    { href: `/${locale}/iis`, label: "IIS" },
    { href: `/${locale}/investors/portal`, label: "Investors" },
    { href: `/${locale}/partnering/licensing`, label: "Partnering", highlight: true },
    { href: `/${locale}/news`, label: "News" },
    { href: `/${locale}/careers`, label: "Careers", secondary: true },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "bg-[#031835]/95 backdrop-blur-2xl py-4 shadow-xl border-b border-[#031835]/50" : "bg-[#031835]/80 py-8"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-4 group">
          <div className="flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform relative overflow-hidden bg-white px-4 py-2 rounded-xl">
             <img src="/pentixapharm_logo_new.jpg" className="w-auto h-12 object-contain relative z-10" alt="Pentixapharm" />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-5 py-2.5 rounded-full text-[11px] uppercase font-heading font-extrabold tracking-[0.2em] transition-all italic ${
                link.highlight ? "bg-cyan/20 text-cyan border border-cyan/30 hover:bg-cyan hover:text-[#031835]" :
                link.secondary ? "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-[#031835]" :
                "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE TRIGGER */}
        <button className="lg:hidden p-3 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-slate-100 p-8 flex flex-col gap-6 lg:hidden"
          >
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-lg font-heading font-extrabold text-[#031835] italic uppercase tracking-widest border-b border-slate-50 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href={`/${locale}/about`} 
              className="bg-[#031835] text-white text-center py-5 rounded-full font-heading font-extrabold uppercase tracking-widest italic"
              onClick={() => setMobileMenuOpen(false)}
            >
              Corporate Profile
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
