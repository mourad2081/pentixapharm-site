"use client";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-white/95 backdrop-blur-xl border-t border-border shadow-2xl px-4 py-3 safe-area-pb"
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
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="w-full h-12 rounded-2xl bg-teal text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal/30"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
