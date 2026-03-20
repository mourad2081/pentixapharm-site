"use client";
import { motion } from "framer-motion";

export function CompanyLogos() {
  const logos = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Zalando", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Zalando_logo.svg" },
    { name: "SAP", url: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "Delivery Hero", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Delivery_Hero_logo.svg" },
    { name: "HelloFresh", url: "https://upload.wikimedia.org/wikipedia/commons/d/de/HelloFresh_logo.svg" },
    { name: "N26", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/N26_logo.svg" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 text-center mb-12">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Trusted by employees at leading companies</h3>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 items-center justify-around whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.url}
              alt={logo.name}
              className="h-8 md:h-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
