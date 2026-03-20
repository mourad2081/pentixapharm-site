import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CompanyLogos } from "@/components/home/CompanyLogos";
import { ForWhom } from "@/components/home/ForWhom";
import { ProductCards } from "@/components/home/ProductCards";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyMe } from "@/components/home/WhyMe";
import { Timeline } from "@/components/home/Timeline";
import { InfographicsSection } from "@/components/home/InfographicsSection";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Viewport 1 */}
      <Hero />
      
      {/* Social Proof Bar */}
      <div className="relative z-20 -mt-10">
        <TrustBar />
      </div>

      {/* Main Content Sections */}
      <CompanyLogos />
      <ProductCards />
      <WhyMe />
      <StatsSection />
      <ForWhom />
      <Timeline />
      <InfographicsSection />
      <Testimonials />
      
      {/* FINAL CTA Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,160,0.3)_0%,transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tight">
            Ready to secure your <br />
            <span className="text-teal underline decoration-teal/30 underline-offset-8">German future?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Take the first step towards total peace of mind. Join over 500 expats and business owners who trust my ERGO expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://calendly.com/mourad-labadi" 
              className="h-16 px-12 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 flex items-center justify-center group hover:bg-white hover:text-navy transition-all active:scale-95 uppercase tracking-widest"
            >
              Book Free Discovery Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
