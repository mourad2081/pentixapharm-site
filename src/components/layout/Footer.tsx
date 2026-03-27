"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('Footer');
  const tp = useTranslations('ProductCards');
  const tn = useTranslations('Navbar');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-32 pb-12 text-slate-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-4 mb-8 group shrink-0 w-fit">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white shadow-xl border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Next Gen Capital Logo" 
                  width={60} 
                  height={60} 
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="font-heading font-black text-2xl text-white tracking-tighter leading-none">
                  Next Gen <span className="text-teal">Capital</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-teal/70">
                  Financial Advisors
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs transition-colors">{t('services')}</h4>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/produkte/altersvorsorge`} className="hover:text-teal transition-all flex items-center gap-1 group font-bold">{tp('p1Title')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" /></Link></li>
              <li><Link href={`/${locale}/produkte/private-krankenversicherung`} className="hover:text-teal transition-all flex items-center gap-1 group font-bold">{tp('p6Title')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" /></Link></li>
              <li><Link href={`/${locale}/produkte/lebensversicherung`} className="hover:text-teal transition-all flex items-center gap-1 group font-bold">{tp('p2Title')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" /></Link></li>
              <li><Link href={`/${locale}/seminare`} className="hover:text-teal transition-all flex items-center gap-1 group font-bold">{tn('seminars')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" /></Link></li>
              <li><Link href={`/${locale}/ressourcen`} className="hover:text-teal transition-all flex items-center gap-1 group font-bold">{tn('resources')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs transition-colors">{t('company')}</h4>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/ueber-mich`} className="hover:text-teal transition-all font-bold">{tn('about')}</Link></li>
              <li><Link href={`/${locale}/join-us`} className="hover:text-teal transition-all font-bold">{tn('joinUs')}</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-teal transition-all font-bold">{tn('blog')}</Link></li>
              <li><Link href={`/${locale}/termin`} className="hover:text-teal transition-all font-bold">{t('bookBtn')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs transition-colors">{t('contact')}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <MapPin className="w-4 h-4 text-teal" />
                </div>
                <span className="text-slate-400 font-medium text-sm leading-relaxed">{t('location')}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <Mail className="w-4 h-4 text-teal" />
                </div>
                <a href="mailto:contact@nextgencapital.de" className="text-slate-400 hover:text-teal transition-colors font-medium text-sm">contact@nextgencapital.de</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <Phone className="w-4 h-4 text-teal" />
                </div>
                <a href="tel:+4917670845501" className="text-slate-400 hover:text-teal transition-colors font-medium text-sm">+49 176 70845501</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-slate-500 font-bold uppercase tracking-widest">
          <p>© {year} Next Gen Capital. {t('rights')}</p>
          <div className="flex gap-10">
            <Link href={`/${locale}/impressum`} className="hover:text-teal transition-colors">{t('imprint')}</Link>
            <Link href={`/${locale}/datenschutz`} className="hover:text-white transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
