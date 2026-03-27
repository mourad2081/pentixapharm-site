import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CompanyLogos } from "@/components/home/CompanyLogos";
import { ProductCards } from "@/components/home/ProductCards";
import { StatsSection } from "@/components/home/StatsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { Timeline } from "@/components/home/Timeline";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Home");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with dynamic animated background */}
      <Hero />
      
      {/* Social Proof Bar */}
      <div className="relative z-20 -mt-10">
        <TrustBar />
      </div>

      {/* Main Content Sections */}
      <CompanyLogos />
      <ProductCards />
      <Timeline />
      <TeamSection />
      <StatsSection />
      <FaqSection />
      <Testimonials />
      
      {/* FINAL CTA Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,160,0.3)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tighter leading-tight">
            {t('finalCtaTitle').split('{future}')[0]}
            <span className="text-teal underline decoration-teal/30 underline-offset-8">
              {t('future')}
            </span>
            {t('finalCtaTitle').split('{future}')[1]}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            {t('finalCtaDesc').replace('{count}', '500+')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href={`/${locale}/termin`}
              className="h-20 px-16 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 flex items-center justify-center hover:bg-white hover:text-navy transition-all active:scale-95 uppercase tracking-widest group"
            >
              {t('finalCtaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
