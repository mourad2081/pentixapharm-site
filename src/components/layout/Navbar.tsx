"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import {
  ShieldCheck, ChevronDown, Menu, X,
  Calculator, FileText, User, Home, Calendar, MessageCircle,
  Briefcase, GraduationCap, MapPin, Mail, Sparkles
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCalcOpen(false);
  }, []);

  const handleProductsClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If not on homepage, navigate there first then scroll
      router.push(`/${locale}#products`);
    }
  }, [locale, router]);

  const t = useTranslations('Navbar');

  const links: Array<{ name: string; href: string; icon: any; action?: (e: React.MouseEvent) => void }> = [
    { name: t('home'), href: `/${locale}`, icon: Home },
    { name: t('about'), href: `/${locale}/ueber-mich`, icon: User },
    { name: t('products'), href: `/${locale}#products`, icon: ShieldCheck, action: handleProductsClick },
    { name: t('seminars'), href: `/${locale}/seminare`, icon: GraduationCap },
    { name: t('resources'), href: `/${locale}/ressourcen`, icon: Briefcase },
    { name: t('contact'), href: `/${locale}/kontakt`, icon: Mail },
    { name: t('blog'), href: `/${locale}/blog`, icon: FileText },
    { name: t('faq'), href: `/${locale}/faq`, icon: MessageCircle },
    { name: t('visualizer'), href: `/${locale}/visualizer`, icon: Sparkles },
  ];

  const calcLinks = [
    {
      name: t('pension'),
      href: `/${locale}/rechner`,
      desc: "",
      icon: Calculator,
    },
    {
      name: t('health'),
      href: `/${locale}/rechner/pkv`,
      desc: "",
      icon: Calculator,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-border/60 shadow-lg shadow-navy/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 group shrink-0">
          <div className="relative">
            <ShieldCheck className="h-9 w-9 text-teal transition-transform group-hover:scale-110 duration-300" />
            <div className="absolute inset-0 bg-teal/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
          </div>
          <span className={`font-heading font-black text-xl transition-colors duration-300 ${scrolled ? "text-navy" : "text-navy"}`}>
            Mourad <span className="text-teal">Labadi</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            link.action ? (
              <button
                key={link.name}
                onClick={link.action}
                className="relative px-4 py-2 text-sm font-bold text-navy hover:text-teal transition-colors group tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold text-navy hover:text-teal transition-colors group tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </Link>
            )
          ))}

          {/* Calculators Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCalcOpen(true)}
            onMouseLeave={() => setCalcOpen(false)}
          >
            <button className="relative px-4 py-2 text-sm font-bold text-navy hover:text-teal transition-colors flex items-center gap-1.5 tracking-wide group">
              {t('calculator')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${calcOpen ? "rotate-180 text-teal" : ""}`} />
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </button>

            <AnimatePresence>
              {calcOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-76 bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(10,22,40,0.2)] border border-border/50 overflow-hidden"
                >
                  {calcLinks.map((c, i) => (
                    <Link
                      key={i}
                      href={c.href}
                      onClick={() => setCalcOpen(false)}
                      className="flex items-start gap-4 p-5 hover:bg-teal/5 group/item border-b last:border-b-0 border-border/40 transition-colors"
                    >
                      <div className="p-2 rounded-xl bg-teal/10 text-teal group-hover/item:bg-teal group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                        <c.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-navy text-sm group-hover/item:text-teal transition-colors">{c.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />

          {/* Book consultation CTA */}
          <Link href={`/${locale}/termin`} className="hidden md:block">
            <Button className="bg-gradient-to-r from-teal to-teal/80 hover:from-teal/90 hover:to-teal text-white rounded-full px-6 h-11 text-sm font-bold shadow-lg shadow-teal/20 hover:-translate-y-0.5 hover:shadow-teal/30 transition-all duration-300">
              <Calendar className="w-4 h-4 mr-2" />
              {t('book')}
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative p-2 text-navy rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-b border-border shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {/* Regular nav links */}
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.action ? (
                    <button
                      // @ts-ignore
                      onClick={(e) => { link.action && link.action(e as any); setMobileMenuOpen(false); }}
                      className="w-full flex items-center gap-3 text-base font-bold text-navy py-3 px-4 hover:bg-teal/5 hover:text-teal rounded-xl transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-teal shrink-0" />
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-base font-bold text-navy py-3 px-4 hover:bg-teal/5 hover:text-teal rounded-xl transition-colors"
                    >
                      <link.icon className="w-5 h-5 text-teal shrink-0" />
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Calculator sub-links */}
              <div className="border-t border-border/50 pt-3 mt-1">
                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest px-4 mb-2">{t('calculator')}</p>
                {calcLinks.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (links.length + i) * 0.05 }}
                  >
                    <Link
                      href={c.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-base font-bold text-navy py-3 px-4 hover:bg-teal/5 hover:text-teal rounded-xl transition-colors"
                    >
                      <Calculator className="w-5 h-5 text-teal shrink-0" />
                      {c.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-2 border-t border-border"
              >
                <Link href={`/${locale}/termin`} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-teal text-white rounded-2xl py-6 font-bold text-base shadow-lg hover:bg-teal/90">
                    <Calendar className="w-5 h-5 mr-2" /> {t('book')}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
