"use client";

import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { CheckCircle2, ChevronRight, AlertCircle, XCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { SectionReveal } from "@/components/layout/SectionReveal";


export default function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  const product = products[params.slug];
  const t = useTranslations("ProductPage");

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  const bgPatternClass = product.backgroundPattern === 'dots' 
    ? 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'
    : product.backgroundPattern === 'geometric'
    ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'
    : 'bg-warmWhite';

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section - Premium Design */}
      <section className={`relative overflow-hidden py-32 md:py-48 ${bgPatternClass}`}>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        
        {/* Floating background elements for "cool" effect */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 h-28 w-28 rounded-[2.5rem] bg-teal/10 flex items-center justify-center shadow-2xl border border-teal/20 backdrop-blur-md relative"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-teal/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Icon className="h-14 w-14 text-teal relative z-10" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 tracking-tight"
          >
            {product.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-navy/70 max-w-3xl mx-auto font-medium leading-tight mb-12"
          >
            {product.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href={`/${params.locale}/termin`}>
              <Button size="lg" className="h-14 px-8 rounded-full bg-teal text-white hover:bg-teal/90 text-lg font-bold shadow-lg shadow-teal/20 transition-all hover:scale-105 active:scale-95">
                {t('ctaBtn')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section - High Contrast */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-teal-accent font-bold text-sm mb-6 border border-white/10 backdrop-blur-md">
                <AlertCircle className="h-4 w-4" /> {t('problemHeading')}
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                {t('problemTitle')}
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                {product.problem.text}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square bg-gradient-to-br from-teal/20 to-navy rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,160,0.1)_0%,transparent_70%)]"></div>
                {/* Abstract decorative element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-48 w-48 text-white/5 group-hover:text-white/10 transition-colors duration-700" />
                </div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                   <div className="h-1 w-24 bg-teal mb-6"></div>
                   <p className="text-lg text-white/40 italic font-medium">Protecting what matters most in Berlin.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section - Modern Layout */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-teal font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Expert Advisory
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-black text-navy"
            >
              {t('solutionTitle')}
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {product.solution.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-border/50 shadow-sm hover:shadow-2xl hover:border-teal/30 transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div className="mt-1 h-12 w-12 rounded-2xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:scale-110 transition-all duration-500 shadow-inner">
                    <CheckCircle2 className="h-6 w-6 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xl font-bold text-navy leading-tight group-hover:text-teal transition-colors py-1">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table - Enhanced for PKV / Retirement */}
      {product.tiers && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">{t('tiersTitle')}</h2>
              <div className="h-1.5 w-24 bg-teal mx-auto rounded-full"></div>
            </div>
            
            <div className="relative rounded-[2.5rem] border border-border overflow-hidden bg-white shadow-2xl">
              <div className="overflow-x-auto">
                <Table className="min-w-[800px]">
                  <TableHeader className="bg-navy">
                    <TableRow className="hover:bg-transparent border-0">
                      <TableHead className="w-[350px] text-lg text-white font-bold py-10 px-10">{t('features')}</TableHead>
                      {product.tiers.map(tier => (
                        <TableHead key={tier.name} className="text-center text-lg text-white font-bold py-10">
                          <div className="flex flex-col items-center">
                            <span className="text-teal text-sm uppercase tracking-widest mb-1">ERGO</span>
                            {tier.name}
                          </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.tiers[0].features.map((feature, featureIndex) => (
                      <TableRow key={feature.name} className="hover:bg-slate-50 transition-colors border-border/50">
                        <TableCell className="font-bold text-navy text-lg py-8 px-10 border-r border-border/30">
                          {feature.name}
                        </TableCell>
                        {product.tiers!.map(tier => {
                          const feat = tier.features[featureIndex];
                          return (
                            <TableCell key={tier.name} className="text-center border-r border-border/30 last:border-0 py-8">
                              <div className="flex items-center justify-center">
                                {feat.included === true ? (
                                  <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-teal" />
                                  </div>
                                ) : feat.included === false ? (
                                  <XCircle className="h-6 w-6 text-slate-200" />
                                ) : (
                                  <span className="text-navy font-black text-lg bg-teal/5 px-4 py-2 rounded-xl border border-teal/10">{feat.included}</span>
                                )}
                              </div>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ Section - Stylish Accordion */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
             <span className="text-teal font-black text-sm uppercase tracking-widest mb-4 inline-block">Support</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">{t('faqTitle')}</h2>
          </div>
          <SectionReveal>
            <Accordion className="w-full space-y-4">

            {product.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 rounded-3xl bg-white px-8 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <AccordionTrigger className="text-left text-xl font-bold text-navy py-8 hover:no-underline hover:text-teal font-heading border-0">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-navy/60 pb-8 leading-relaxed font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </SectionReveal>
        </div>
      </section>

      {/* 6. Bottom CTA - High Conversion Design */}
      <section className="w-full bg-navy py-32 text-center relative overflow-hidden">
        {/* Dynamic decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal opacity-10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-heading font-black text-white mb-10 tracking-tight leading-tight max-w-4xl"
          >
            {t('ctaTitle', { name: product.name })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-14 max-w-3xl font-light leading-relaxed"
          >
            {t('ctaDesc')}
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${params.locale}/termin`}>
              <Button size="lg" className="h-[84px] px-16 rounded-full bg-teal text-white hover:bg-white hover:text-teal text-2xl font-black shadow-[0_20px_50px_rgba(14,165,160,0.3)] transition-all duration-500">
                {t('ctaBtn')} <ChevronRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </motion.div>
          
          <div className="mt-16 flex items-center gap-6 text-white/40 font-bold uppercase tracking-widest text-xs">
             <span>Free Consultation</span>
             <div className="w-1 h-1 bg-white/20 rounded-full"></div>
             <span>Official ERGO Advisor</span>
             <div className="w-1 h-1 bg-white/20 rounded-full"></div>
             <span>Berlin Based</span>
          </div>
        </div>
      </section>
    </main>
  );
}
