import { ProductCards } from "@/components/home/ProductCards";
import { Timeline } from "@/components/home/Timeline";
import { InfographicsSection } from "@/components/home/InfographicsSection";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProduktePage() {
  const t = useTranslations("ProductPage");
  const tp = useTranslations("Navbar"); // For "Our Solutions"
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-teal/30 text-teal text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> {tp('products')}
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter leading-tight">
            Our <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Comprehensive financial protection tailored for your life in Germany.
            Expertly curated insurance and pension plans for every life stage.
          </p>
        </div>
      </section>
      
      <ProductCards />
      <Timeline />
      <InfographicsSection />
      
      {/* CTA Section */}
      <section className="py-32 bg-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,160,0.2)_0%,transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 tracking-tight leading-tight">
            Ready to find the <br />
            <span className="text-teal underline decoration-teal/30 underline-offset-8">right plan?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href={`/${locale}/termin`}
              className="h-20 px-16 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 flex items-center justify-center hover:bg-white hover:text-navy transition-all active:scale-95 uppercase tracking-widest group"
            >
              {t('ctaBtn')} <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
