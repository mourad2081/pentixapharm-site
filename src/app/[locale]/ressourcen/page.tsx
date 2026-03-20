"use client";
import { motion } from "framer-motion";
import { BookOpen, Download, FileText, CheckCircle2 } from "lucide-react";
import { InfographicsSection } from "@/components/home/InfographicsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const guides = [
  {
    title: "Your Ultimate ERGO PKV Guide",
    desc: "A comprehensive PDF breaking down private health insurance benefits, costs, and tax deductions specifically for expats and freelancers.",
    size: "2.4 MB PDF",
    icon: FileText,
  },
  {
    title: "Pension Gap Calculator Output Sheet",
    desc: "A printable worksheet to manually calculate your retirement needs and map out your investment strategy before we speak.",
    size: "1.1 MB PDF",
    icon: BookOpen,
  },
  {
    title: "Moving to Germany Checklist",
    desc: "The essential 30-day checklist covering registration (Anmeldung), bank accounts, liability insurance, and visa requirements.",
    size: "1.8 MB PDF",
    icon: CheckCircle2,
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-teal/30 text-teal text-sm font-bold uppercase tracking-widest mb-8">
              <Download className="w-4 h-4" /> Free Downloads
            </span>
            <h1 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
              Guides & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Free educational material to help you navigate the German insurance and pension system with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-navy mb-4">Downloadable Assets</h2>
            <p className="text-muted-foreground text-lg">Instant access — no email required.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-0 shadow-xl shadow-navy/5 hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden group">
                  <div className="h-3 bg-gradient-to-r from-teal to-blue-500 w-full" />
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <g.icon className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4 font-heading">{g.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">{g.desc}</p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                      <span className="text-sm font-bold text-slate-400">{g.size}</span>
                      <Button variant="outline" className="rounded-full font-bold hover:bg-teal hover:text-white border-teal text-teal h-10 px-6">
                        Download <Download className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics Section (Moved from Home) */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-4xl font-heading font-black text-navy">Visual Explainers</h2>
          <p className="text-lg text-muted-foreground mt-4">Complex topics simplified into easy-to-read infographics.</p>
        </div>
        <InfographicsSection />
      </div>
    </main>
  );
}
