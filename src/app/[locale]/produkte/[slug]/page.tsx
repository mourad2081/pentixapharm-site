import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { CheckCircle2, ChevronRight, AlertCircle, XCircle } from "lucide-react";
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

export default function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  const product = products[params.slug];

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
    <main className="min-h-screen bg-background pb-0">
      {/* 1. Hero Section */}
      <section className={`relative overflow-hidden py-24 ${bgPatternClass}`}>
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-8">
          <div className="mx-auto mb-8 h-24 w-24 rounded-3xl bg-teal/10 flex items-center justify-center shadow-md border border-teal/20 transition-transform duration-500 hover:scale-110">
            <Icon className="h-12 w-12 text-teal" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            {product.tagline}
          </p>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-navy/5 rounded-[2rem] p-8 md:p-12 border border-border transition-shadow hover:shadow-lg">
            <div className="h-24 w-24 shrink-0 bg-destructive/10 rounded-3xl flex items-center justify-center">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4 font-heading">Das Problem</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                {product.problem.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-6">
              {product.solution.title}
            </h2>
            <div className="h-1.5 w-24 bg-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.solution.benefits.map((benefit, i) => (
              <Card key={i} className="border border-border/60 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex items-start gap-6 h-full">
                  <div className="mt-1 h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <p className="text-xl font-medium text-navy leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      {product.tiers && (
        <section className="py-20 bg-white border-y border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl overflow-x-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">Ihre Tarif-Optionen</h2>
            </div>
            <div className="rounded-2xl border border-border overflow-hidden bg-white shadow-sm">
              <Table className="min-w-[700px]">
                <TableHeader className="bg-navy/5">
                  <TableRow>
                    <TableHead className="w-[300px] text-lg text-navy font-bold py-6 px-6">Leistungen</TableHead>
                    {product.tiers.map(tier => (
                      <TableHead key={tier.name} className="text-center text-lg text-navy font-bold">{tier.name}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.tiers[0].features.map((feature, featureIndex) => (
                    <TableRow key={feature.name}>
                      <TableCell className="font-semibold text-base py-5 px-6 border-r border-border/50">{feature.name}</TableCell>
                      {product.tiers!.map(tier => {
                        const feat = tier.features[featureIndex];
                        return (
                          <TableCell key={tier.name} className="text-center border-r border-border/50 last:border-0">
                            {feat.included === true ? (
                              <CheckCircle2 className="h-6 w-6 text-teal mx-auto" />
                            ) : feat.included === false ? (
                              <XCircle className="h-6 w-6 text-muted-foreground/30 mx-auto" />
                            ) : (
                              <span className="text-teal font-semibold text-base">{feat.included}</span>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">Häufige Fragen (FAQ)</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {product.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl bg-white px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left text-xl font-medium text-navy py-6 hover:no-underline hover:text-teal font-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="w-full bg-teal pt-24 pb-28 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-navy/10 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Sind Sie bereit für eine sichere {product.name}?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl font-medium">
            Buchen Sie jetzt Ihr 100% kostenloses Erstgespräch. Online, vor Ort in Berlin oder per Telefon.
          </p>
          <Link href={`/${params.locale}/termin`}>
            <Button size="lg" className="h-[72px] px-12 rounded-full bg-white text-teal hover:bg-slate-50 text-xl md:text-2xl font-bold shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all hover:scale-105 hover:-translate-y-1">
              Jetzt beraten lassen <ChevronRight className="ml-3 h-7 w-7" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
