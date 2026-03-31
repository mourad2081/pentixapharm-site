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
    { href: `/${locale}/pipeline`, label: "Pipeline" },
    { href: `/${locale}/technology`, label: "Technology" },
    { href: `/${locale}/iis`, label: "IIS" },
    { href: `/${locale}/investors/portal`, label: "Investors" },
    { href: `/${locale}/partnering/licensing`, label: "Partnering", highlight: true },
    { href: `/${locale}/news`, label: "News" },
    { href: `/${locale}/careers`, label: "Careers", secondary: true },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-2xl py-4 shadow-xl border-b border-slate-100" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-[#002A54] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan/40 to-transparent opacity-50" />
             <img src="/pentixapharm_logo.png" className="w-8 h-8 object-contain relative z-10" alt="Pentixapharm" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-heading font-extrabold tracking-tighter italic ${scrolled ? "text-[#002A54]" : "text-[#002A54]"}`}>PENTIXAPHARM</span>
            <span className="text-[8px] font-extrabold uppercase tracking-[0.4em] text-teal leading-none -mt-1 ml-1 transform skew-x-[-10deg]">Precision Theranostics</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-6 py-2.5 rounded-full text-[10px] uppercase font-heading font-extrabold tracking-[0.2em] transition-all italic ${
                link.highlight ? "bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan hover:text-navy" :
                link.secondary ? "bg-[#002A54]/5 text-[#002A54] border border-[#002A54]/10 hover:bg-[#002A54] hover:text-white" :
                "text-slate-500 hover:text-[#002A54] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* PROFILE CTA */}
        <div className="hidden lg:flex items-center gap-4">
           <Link href={`/${locale}/about`} className="px-10 py-4 bg-[#002A54] text-white rounded-full text-[10px] font-extrabold uppercase tracking-[0.4em] hover:bg-cyan hover:text-navy transition-all shadow-2xl italic">
              Corporate Profile
           </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button className="lg:hidden p-3 text-[#002A54]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                className="text-lg font-heading font-extrabold text-[#002A54] italic uppercase tracking-widest border-b border-slate-50 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href={`/${locale}/about`} 
              className="bg-[#002A54] text-white text-center py-5 rounded-full font-heading font-extrabold uppercase tracking-widest italic"
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
