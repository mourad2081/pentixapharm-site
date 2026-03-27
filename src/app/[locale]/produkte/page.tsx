import { ProductCards } from "@/components/home/ProductCards";
import { Timeline } from "@/components/home/Timeline";
import { InfographicsSection } from "@/components/home/InfographicsSection";
import { Hero } from "@/components/home/Hero";

export default function ProduktePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-navy pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4 tracking-tight">
                Our <span className="text-teal">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                Comprehensive financial protection tailored for your life in Germany.
            </p>
        </div>
      </section>
      
      <ProductCards />
      <Timeline />
      <InfographicsSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
            Ready to find the right <span className="text-teal">plan?</span>
          </h2>
          <a 
            href="https://calendly.com/mourad-labadi" 
            className="h-16 px-12 rounded-full bg-teal text-white text-lg font-black shadow-2xl shadow-teal/30 inline-flex items-center justify-center hover:bg-white hover:text-navy transition-all active:scale-95 uppercase tracking-widest"
          >
            Book Free Call
          </a>
        </div>
      </section>
    </main>
  );
}
