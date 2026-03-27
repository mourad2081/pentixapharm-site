"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-24 pb-10 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-teal/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 p-32 bg-white/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white shadow-sm">
                <Image src="/logo.png" alt="Next Gen Capital Logo" fill className="object-contain p-1" />
              </div>
              <span className="font-heading font-black text-2xl text-white">Next Gen <span className="text-teal">Capital</span></span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Independent financial advisors in Germany. Health insurance, pensions, and asset protection in 5 languages.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/produkte/altersvorsorge`} className="hover:text-teal transition-colors">Pension & Retirement</Link></li>
              <li><Link href={`/${locale}/produkte/private-krankenversicherung`} className="hover:text-teal transition-colors">Health Insurance (PKV)</Link></li>
              <li><Link href={`/${locale}/produkte/lebensversicherung`} className="hover:text-teal transition-colors">Life Insurance</Link></li>
              <li><Link href={`/${locale}/seminare`} className="hover:text-teal transition-colors">Health Insurance Seminar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/ueber-mich`} className="hover:text-teal transition-colors">Our Team</Link></li>
              <li><Link href={`/${locale}/join-us`} className="hover:text-teal transition-colors">Join Our Team</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-teal transition-colors">Blog</Link></li>
              <li><Link href={`/${locale}/termin`} className="hover:text-teal transition-colors">{t('bookBtn')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal shrink-0" />
                <span>Available across Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal shrink-0" />
                <a href="mailto:contact@nextgencapital.de" className="hover:text-teal transition-colors">contact@nextgencapital.de</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal shrink-0" />
                <a href="tel:+4917670845501" className="hover:text-teal transition-colors">+49 176 70845501</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {year} Next Gen Capital. {t('rights')}</p>
          <div className="flex gap-6">
            <Link href={`/${locale}/impressum`} className="hover:text-white transition-colors">{t('imprint')}</Link>
            <Link href={`/${locale}/datenschutz`} className="hover:text-white transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
