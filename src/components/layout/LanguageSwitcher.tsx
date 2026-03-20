"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { locales } from "@/i18n";

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English',  short: 'EN' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch',  short: 'DE' },
  { code: 'fr', flag: '🇫🇷', label: 'Français', short: 'FR' },
  { code: 'ar', flag: '🇸🇦', label: 'العربية',  short: 'AR' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find(l => l.code === locale) ?? LANGUAGES[0];

  // Close on click outside
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
      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 h-10 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-border/60 transition-colors text-navy font-bold text-sm"
        aria-label="Select language"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="hidden sm:block">{current.short}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </motion.div>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl shadow-black/10 border border-border/60 overflow-hidden"
          >
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
                <span className="text-xl leading-none">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === locale && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-teal shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
