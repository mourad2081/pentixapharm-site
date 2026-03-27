"use client";
import { useTranslations } from "next-intl";

const logos = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "SAP", url: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Siemens", url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" },
  { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Deutsche Bank", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg" },
  { name: "Bosch", url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Bosch-logo.svg" },
  { name: "Volkswagen", url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },
  { name: "Zalando", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Zalando_logo.svg" },
];

export function CompanyLogos() {
  const t = useTranslations("CompanyLogos");
  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">
          {t('title')}
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 h-10 w-32 opacity-30 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-500"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-9 max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
