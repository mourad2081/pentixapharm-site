"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();
  const t = useTranslations('CookieConsent');

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-navy border-t border-border p-6 shadow-2xl animate-in slide-in-from-bottom-full duration-500">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-warmWhite text-sm text-balance">
          {t('msg')}{" "}
          <Link href={`/${locale}/datenschutz`} className="text-teal hover:underline underline-offset-4 font-medium">
            Datenschutzerklärung
          </Link>.
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Button variant="outline" onClick={declineCookies} className="text-navy bg-warmWhite hover:bg-slate-100 border-none">
            {t('decline')}
          </Button>
          <Button onClick={acceptCookies} className="bg-teal text-white hover:bg-teal/90">
            {t('accept')}
          </Button>
        </div>
      </div>
    </div>
  );
}
