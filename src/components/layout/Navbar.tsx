"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe, Atom, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const links = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/about`, label: "About" },
    { href: `/${locale}/pipeline`, label: "Pipeline" },
    { href: `/${locale}/technology`, label: "Technology" },
    { href: `/${locale}/iis`, label: "IIS" },
    { href: `/${locale}/investors/portal`, label: "Investors" },
    { href: `/${locale}/partnering/licensing`, label: "Partnering", highlight: true },
    { href: `/${locale}/news`, label: "News" },
    { href: `/${locale}/careers`, label: "Careers", secondary: true },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-in-out ${scrolled ? "bg-white/90 dark:bg-[#0a0b16]/90 backdrop-blur-3xl py-3 shadow-[0_10px_60px_rgba(0,21,51,0.08)] border-b border-slate-100 dark:border-white/10" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-4 transition-transform hover:scale-[1.02] active:scale-[0.98]">
          <div className="relative w-[180px] h-[50px] lg:w-[220px] lg:h-[60px]">
             <Image 
               src="/logo.jpg" 
               alt="Pentixapharm" 
               fill 
               className="object-contain"
               priority
             />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-3 bg-slate-50/50 p-1.5 rounded-full border border-slate-100/50">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-5 py-2.5 rounded-full text-[10px] xl:text-[11px] uppercase font-heading font-extrabold tracking-[0.25em] transition-all duration-500 italic ${
                pathname === link.href ? "bg-[#001533] text-white" :
                link.highlight ? "bg-[#00BDD5] text-white shadow-xl shadow-[#00BDD5]/30 hover:bg-[#001533] scale-105" :
                link.secondary ? "text-slate-400 hover:text-[#001533] hover:bg-slate-100" :
                "text-slate-600 hover:text-[#00BDD5] hover:bg-white hover:shadow-sm"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* NIGHT MODE TOGGLE DESKTOP */}
        <button 
          onClick={toggleDarkMode}
          className="hidden lg:flex p-2.5 rounded-full bg-slate-50/50 dark:bg-white/10 border border-slate-100/50 dark:border-white/20 text-[#001533] dark:text-white hover:bg-[#00BDD5] hover:text-white transition-all shadow-sm ml-4"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* MOBILE TRIGGER */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-3 rounded-2xl bg-white dark:bg-[#0a0b16] border border-slate-100 dark:border-white/10 shadow-xl transition-all active:scale-90 text-[#001533] dark:text-white"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button 
            className="p-3 rounded-2xl bg-white dark:bg-[#0a0b16] border border-slate-100 dark:border-white/10 shadow-xl transition-all active:scale-90 text-[#001533] dark:text-white" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[110] p-12 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="relative w-40 h-12">
                  <Image src="/logo.jpg" alt="Logo" fill className="object-contain" />
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="p-4 bg-slate-50 dark:bg-white/10 rounded-full text-[#001533] dark:text-white hover:bg-red-50 hover:text-red-500 transition-all"><X size={28}/></button>
            </div>
            
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-3xl font-heading font-extrabold italic uppercase tracking-tighter transition-all ${pathname === link.href ? "text-[#00BDD5] translate-x-4" : "text-[#001533]"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Link 
              href={`/${locale}/contact`} 
              className="mt-auto bg-[#001533] text-white text-center py-6 rounded-3xl font-heading font-extrabold uppercase tracking-widest italic shadow-[0_20px_40px_rgba(0,21,51,0.2)] active:scale-95 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Strategic Access
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
