"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Calendar, Phone } from "lucide-react";

export function MobileStickyBar() {
  const [show, setShow] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-white/95 backdrop-blur-xl border-t border-border shadow-2xl px-4 py-3 safe-area-pb translate-y-0 opacity-100 transition-all duration-300"
    >
      <div className="flex gap-3 max-w-sm mx-auto">
        <a
          href="tel:+49123456789"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl bg-slate-100 text-navy font-bold text-sm border border-border"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link href={`/${locale}/termin`} className="flex-2 flex-1">
          <button
            className="w-full h-12 rounded-2xl bg-teal text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal/30 active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4" />
            Book Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
