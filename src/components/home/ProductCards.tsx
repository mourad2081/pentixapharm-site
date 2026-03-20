"use client";
import { PiggyBank, Shield, Smile, Umbrella, Scale, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Products3D = dynamic(() => import("./Products3D").then(mod => mod.Products3D), { ssr: false });

type ProductDef = {
  title: string;
  slug: string;
  desc: string;
  icon: any;
  gradient: string;
};

function StaticCard({ product, index, tDesc }: { product: ProductDef, index: number, tDesc: string }) {
  const locale = useLocale();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: `${index * 100}ms` }}>
      <Link href={`/${locale}/produkte/${product.slug}`} className="block group h-full">
        <div className="relative bg-white border border-border/60 rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col p-8">
          
          {/* Icon */}
          <div className="relative mb-8 w-fit">
            <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center border border-border/50 group-hover:bg-teal group-hover:border-teal transition-all duration-500">
              <product.icon className="h-8 w-8 text-teal group-hover:text-white transition-all duration-500" />
            </div>
          </div>

          <h3 className="text-2xl font-bold font-heading text-navy mb-4 group-hover:text-teal transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow font-medium mb-6">
            {product.desc}
          </p>

          <div className="flex items-center text-teal font-black text-sm group-hover:translate-x-1 transition-transform">
            {tDesc} <ArrowRight className="ml-1.5 h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export function ProductCards() {
  const t = useTranslations('ProductCards');

  const products: ProductDef[] = [
    { title: t('p1Title'), slug: "altersvorsorge", desc: t('p1Desc'), icon: PiggyBank, gradient: "from-blue-500/20 to-teal/20" },
    { title: t('p2Title'), slug: "lebensversicherung", desc: t('p2Desc'), icon: Shield, gradient: "from-navy/20 to-blue-600/20" },
    { title: t('p3Title'), slug: "zahnzusatzversicherung", desc: t('p3Desc'), icon: Smile, gradient: "from-gold/20 to-amber-400/20" },
    { title: t('p4Title'), slug: "unfallversicherung", desc: t('p4Desc'), icon: Umbrella, gradient: "from-teal/20 to-cyan-400/20" },
    { title: t('p5Title'), slug: "rechtsschutzversicherung", desc: t('p5Desc'), icon: Scale, gradient: "from-purple-500/20 to-blue-500/20" },
    { title: t('p6Title'), slug: "private-krankenversicherung", desc: t('p6Desc'), icon: HeartPulse, gradient: "from-rose-400/20 to-teal/20" },
  ];

  return (
    <section id="products" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <StaticCard key={product.title} product={product} index={index} tDesc={t('viewDetails')} />
          ))}
        </div>
      </div>
    </section>
  );
}
