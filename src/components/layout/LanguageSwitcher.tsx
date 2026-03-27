"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const LANGUAGES = [
  {
    code: 'en',
    label: 'English',
    short: 'EN',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-5 rounded-sm overflow-hidden">
        <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
        <clipPath id="b"><path d="M30 15h30v15zM30 15v15H0zM30 15H0V0zM30 15V0h30z"/></clipPath>
        <g clipPath="url(#a)">
          <path d="M0 0v30h60V0z" fill="#012169"/>
          <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
          <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    ),
  },
  {
    code: 'de',
    label: 'Deutsch',
    short: 'DE',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-5 rounded-sm overflow-hidden">
        <rect width="5" height="3" y="0" fill="#000"/>
        <rect width="5" height="2" y="1" fill="#D00"/>
        <rect width="5" height="1" y="2" fill="#FFCE00"/>
      </svg>
    ),
  },
  {
    code: 'fr',
    label: 'Français',
    short: 'FR',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-5 rounded-sm overflow-hidden">
        <rect width="3" height="2" fill="#ED2939"/>
        <rect width="2" height="2" fill="#fff"/>
        <rect width="1" height="2" fill="#002395"/>
      </svg>
    ),
  },
  {
    code: 'ar',
    label: 'العربية',
    short: 'AR',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-5 h-5 rounded-sm overflow-hidden">
        <rect width="900" height="600" fill="#006C35"/>
        <rect width="900" height="200" fill="#fff" y="200"/>
        <rect width="900" height="200" fill="#000" y="400"/>
      </svg>
    ),
  },
  {
    code: 'es',
    label: 'Español',
    short: 'ES',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-5 rounded-sm overflow-hidden">
        <rect width="3" height="2" fill="#c60b1e"/>
        <rect width="3" height="1" y="0.5" fill="#ffc400"/>
      </svg>
    ),
  },
];

const locales = ['en', 'de', 'fr', 'ar', 'es'];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find(l => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLocale = (code: string) => {
    setOpen(false);
    const segments = pathname.split('/');
    if (locales.includes(segments[1])) {
      segments[1] = code;
    } else {
      segments.splice(1, 0, code);
    }
    router.replace(segments.join('/') || '/');
  };

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 h-10 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white font-bold text-sm active:scale-95"
        aria-label="Select language"
      >
        <span className="flex items-center">{current.flag}</span>
        <span className="hidden sm:block">{current.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-teal' : 'text-white/70'}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl shadow-black/10 border border-border/60 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors text-left ${
                lang.code === locale
                  ? 'bg-teal/10 text-teal'
                  : 'text-navy hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center">{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === locale && (
                <span className="ml-auto w-2 h-2 rounded-full bg-teal shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
