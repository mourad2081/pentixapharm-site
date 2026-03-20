"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", width: 90 },
  { name: "Zalando", logo: "/logos/zalando.svg", fallback: "ZALANDO" },
  { name: "SAP", logo: "/logos/sap.svg", fallback: "SAP" },
  { name: "VW", logo: "/logos/vw.svg", fallback: "Volkswagen" },
  { name: "Allianz", logo: "/logos/allianz.svg", fallback: "Allianz" },
  { name: "Siemens", logo: "/logos/siemens.svg", fallback: "SIEMENS" },
];

// Instead of raw images which might fail, I'll use stylized text-logos with font-heavy weights for a "clean" look
// OR use Lucide icons with text for a "Trust Section" look.

export function TrustBar() {
  const logos = [
    "GOOGLE", "ZALANDO", "SAP", "ADIDAS", "VW", "SIEMENS", "ALLIANZ", "DEUTSCHE BANK"
  ];

  return (
    <section className="py-12 bg-white dark:bg-navy border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4">Empowering employees from world-class companies</p>
      </div>

      <div className="flex gap-20 animate-marquee whitespace-nowrap items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center shrink-0">
            {logos.map((logo) => (
              <span 
                key={logo} 
                className="text-2xl font-black text-slate-200 dark:text-slate-700/50 hover:text-teal transition-colors tracking-tighter"
              >
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Side gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-navy to-transparent z-10 pointer-events-none" />
    </section>
  );
}
