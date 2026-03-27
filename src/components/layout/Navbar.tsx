"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  FileText, User, Home, Calendar, MessageCircle,
  Briefcase, GraduationCap, Mail, Users, ShieldCheck, Menu, X, BookOpen
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = useTranslations('Navbar');

  const links = [
    { name: t('home'), href: `/${locale}`, icon: Home },
    { name: t('products'), href: `/${locale}/produkte`, icon: ShieldCheck },
    { name: t('seminars'), href: `/${locale}/seminare`, icon: GraduationCap },
    { name: t('resources'), href: `/${locale}/ressourcen`, icon: BookOpen },
    { name: t('about'), href: `/${locale}/ueber-mich`, icon: User },
    { name: t('joinUs'), href: `/${locale}/join-us`, icon: Users },
    { name: t('blog'), href: `/${locale}/blog`, icon: FileText },
    { name: t('faq'), href: `/${locale}/faq`, icon: MessageCircle },
    { name: t('contact'), href: `/${locale}/kontakt`, icon: Mail },
  ];

  const navTextClass = scrolled ? "text-navy" : "text-white";
  const navHoverClass = scrolled ? "hover:text-teal" : "hover:text-teal";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-border/60 shadow-lg shadow-navy/5"
          : "bg-navy/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group shrink-0">
          <div className={`relative h-12 w-12 overflow-hidden rounded-xl bg-white shadow-xl border-2 border-white flex items-center justify-center transition-all duration-500 overflow-hidden ${scrolled ? "scale-90" : "scale-100"}`}>
            <Image
              src="/logo.png"
              alt="Next Gen Capital Logo"
              width={48}
              height={48}
              className="object-contain p-2"
              priority
            />
          </div>
          <div className="flex flex-col -gap-1">
            <span className={`font-heading font-black text-2xl tracking-tighter transition-colors duration-300 leading-none ${scrolled ? "text-navy" : "text-white"}`}>
              Next Gen <span className="text-teal">Capital</span>
            </span>
            <span className={`text-[9px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${scrolled ? "text-slate-400" : "text-teal/80"}`}>
              Financial Advisors
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-bold transition-colors group tracking-wide ${navTextClass} ${navHoverClass}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Book consultation CTA */}
          <Link href={`/${locale}/termin`} className="hidden md:block">
            <Button className="bg-teal hover:bg-teal/80 text-white rounded-full px-6 h-11 text-sm font-bold shadow-lg shadow-teal/20 hover:-translate-y-0.5 transition-all duration-300">
              <Calendar className="w-4 h-4 mr-2" />
              {t('book')}
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden relative p-2 rounded-xl hover:bg-white/10 transition-colors ${scrolled ? "text-navy" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-base font-bold text-navy py-3 px-4 hover:bg-teal/5 hover:text-teal rounded-xl transition-colors"
              >
                <link.icon className="w-5 h-5 text-teal shrink-0" />
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <Link href={`/${locale}/termin`} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-teal text-white rounded-2xl py-6 font-bold text-base shadow-lg hover:bg-teal/90">
                  <Calendar className="w-5 h-5 mr-2" /> {t('book')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
