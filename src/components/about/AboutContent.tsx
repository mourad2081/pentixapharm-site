"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Globe, ShieldCheck, Briefcase, HeartHandshake, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

import { SectionReveal } from "@/components/layout/SectionReveal";

export function AboutContent({ isEn: _ }: { isEn: boolean }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const timeline = [
    {
      year: "Early Career",
      title: "International Corporate Finance",
      desc: "5+ years of deep analytical experience in international corporate finance. Mastered evaluating complex financial structures and de-risking financial portfolios across European markets.",
    },
    {
      year: "The Turning Point",
      title: "The Need for Personal Impact",
      desc: "I realized the most powerful financial strategies were accessible only to corporations — not individuals. Especially expats in Germany faced enormous complexity and lack of personalized guidance.",
    },
    {
      year: "Today",
      title: "Independent Next Gen Capital Advisor",
      desc: "As an officially IHK-certified expert, I merge my international perspective with deep insurance knowledge to protect families and professionals in 4 languages across Germany and beyond.",
    },
  ];

  const credentials = [
    { icon: GraduationCap, title: "Masters — Business Management", desc: "Solid strategic financial foundation" },
    { icon: Globe, title: "Masters — European Affairs", desc: "International analytical perspective" },
    { icon: ShieldCheck, title: "IHK Certified (§34d GewO)", desc: "Officially licensed insurance broker" },
    { icon: Briefcase, title: "5+ Years Corporate Finance", desc: "Real expertise, not just sales" },
  ];

  const languages = [
    { name: "العربية (Arabic)", level: "Native Language", progress: 100, flag: "🇸🇦" },
    { name: "English", level: "Native-level", progress: 98, flag: "🇬🇧" },
    { name: "Deutsch", level: "Fluent (C2)", progress: 95, flag: "🇩🇪" },
    { name: "Français", level: "Professional (B2)", progress: 85, flag: "🇫🇷" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero with parallax background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image src="/berlin-cityscape.png" alt="Germany" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-white" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl mb-10 overflow-hidden border-4 border-white ring-4 ring-teal/30"
          >
            <Image src="/mourad-headshot.png" alt="Next Gen Capital" fill className="object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 tracking-tight drop-shadow-lg">
              Next Gen Capital
            </h1>
            <p className="text-xl md:text-2xl text-teal font-bold tracking-wide drop-shadow">
              Insurance Advisor with an International Perspective
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="bg-white/10 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full border border-white/20">🇸🇦 🇬🇧 🇩🇪 🇫🇷</span>
              <span className="bg-teal/20 backdrop-blur-sm text-teal text-sm font-bold px-4 py-2 rounded-full border border-teal/30">IHK Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal>
        <section className="py-24 bg-white relative">
          <div className="container px-4 md:px-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-teal font-bold uppercase tracking-widest text-sm">Who I Am</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-navy mt-2 relative inline-block">
                My Journey
                <span className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gold rounded-full" />
              </h2>
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-teal/40 before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#FAF9F6] p-7 rounded-2xl border border-border shadow-sm group-hover:shadow-lg group-hover:border-teal/30 transition-all duration-300">
                    <span className="font-bold text-teal text-xs uppercase tracking-widest block mb-2">{item.year}</span>
                    <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[120px]" />
          <div className="container px-4 md:px-8 max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Quote className="w-16 h-16 text-gold mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">My Approach</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-medium font-heading italic max-w-3xl mx-auto">
                &ldquo;True financial advisory starts with listening. I craft personalized strategies that genuinely protect your lifestyle — completely detached from the standard product-pushing sales culture.&rdquo;
              </p>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-24 bg-white relative">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-teal font-bold uppercase tracking-widest text-sm block mb-3">Academic & Professional</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-navy mb-10">Expertise & Credentials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {credentials.map((cred, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="h-full border border-border shadow-sm bg-[#FAF9F6] hover:bg-white hover:border-teal/30 hover:shadow-md transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="p-3 rounded-xl bg-gold/10 w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                          <cred.icon className="w-7 h-7 text-gold" />
                        </div>
                        <h3 className="font-bold text-navy mb-2 text-sm leading-snug">{cred.title}</h3>
                        <p className="text-xs text-muted-foreground">{cred.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-teal font-bold uppercase tracking-widest text-sm block mb-3">Multilingual Advisory</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-navy mb-10">Languages</h2>
              <Card className="border border-border shadow-md p-8 rounded-3xl">
                <div className="space-y-8">
                  {languages.map((lang, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <div className="flex justify-between items-end mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <h4 className="font-bold text-navy text-base">{lang.name}</h4>
                        </div>
                        <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full">{lang.level}</span>
                      </div>
                      <Progress value={lang.progress} className="h-2 bg-slate-100" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}


