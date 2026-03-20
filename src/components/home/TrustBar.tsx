"use client";
import { ShieldCheck, Award, Globe2, Clock, Star, Building2, Users, BadgeCheck } from "lucide-react";

import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations('TrustBar');

  const items = [
    { icon: ShieldCheck, text: t('item1') },
    { icon: Award, text: t('item2') },
    { icon: Globe2, text: t('item3') },
    { icon: Clock, text: t('item4') },
    { icon: Star, text: t('item5') },
    { icon: Building2, text: t('item6') },
    { icon: Users, text: t('item7') },
    { icon: BadgeCheck, text: t('item8') },
  ];

  const MARQUEE_ITEMS = [...items, ...items];
  return (
    <section className="py-10 bg-navy relative overflow-hidden border-b border-white/5">
      {/* Gradient fades on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {MARQUEE_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-10 shrink-0 group"
          >
            <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-teal/20 transition-colors border border-white/8">
              <item.icon className="w-5 h-5 text-teal" />
            </div>
            <span className="text-white/80 font-bold text-sm whitespace-nowrap group-hover:text-white transition-colors tracking-wide">
              {item.text}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/20 ml-4" />
          </div>
        ))}
      </div>
    </section>
  );
}
