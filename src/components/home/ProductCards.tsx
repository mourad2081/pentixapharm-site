"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PiggyBank, Shield, Smile, Umbrella, Scale, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRef } from "react";

const products = [
  { title: "Pension & Retirement", slug: "altersvorsorge", desc: "Secure your living standards in retirement with guaranteed ERGO plans.", icon: PiggyBank, gradient: "from-blue-500/20 to-teal/20" },
  { title: "Life Insurance", slug: "lebensversicherung", desc: "Irreplaceable financial protection and peace of mind for your loved ones.", icon: Shield, gradient: "from-navy/20 to-blue-600/20" },
  { title: "Supplemental Dental", slug: "zahnzusatzversicherung", desc: "Radiant smiles without the exorbitant dental bills and waiting times.", icon: Smile, gradient: "from-gold/20 to-amber-400/20" },
  { title: "Accident Insurance", slug: "unfallversicherung", desc: "Worldwide top-tier 24/7 protection wherever life takes you.", icon: Umbrella, gradient: "from-teal/20 to-cyan-400/20" },
  { title: "Legal Protection", slug: "rechtsschutzversicherung", desc: "Safeguard your rights effortlessly and confidently in all disputes.", icon: Scale, gradient: "from-purple-500/20 to-blue-500/20" },
  { title: "Private Health (PKV)", slug: "private-krankenversicherung", desc: "Premium complete private healthcare with specialist access tailored for you.", icon: HeartPulse, gradient: "from-rose-400/20 to-teal/20" },
];

function TiltCard({ product, index }: { product: typeof products[0], index: number }) {
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-50, 50], [8, -8]);
  const rotateY = useTransform(springX, [-50, 50], [-8, 8]);
  const glowX = useTransform(springX, [-50, 50], [0, 100]);
  const glowY = useTransform(springY, [-50, 50], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group cursor-pointer"
      >
        <Link href={`/${locale}/produkte/${product.slug}`} className="block">
          <div className="relative bg-white border border-border/60 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-shadow duration-500 h-full card-shine">
            {/* Dynamic glow on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: glowX.get() !== undefined ? `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(14,165,160,0.08) 0%, transparent 60%)` : undefined,
              }}
            />

            {/* Gradient background swatch */}
            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 p-8 flex flex-col h-full">
              {/* Icon */}
              <div className="relative mb-8 w-fit">
                <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center border border-border/50 group-hover:scale-110 group-hover:bg-teal group-hover:border-teal transition-all duration-500 shadow-sm">
                  <product.icon className="h-8 w-8 text-teal group-hover:text-white transition-colors duration-500" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-teal/30 blur-lg scale-150 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>

              <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-teal transition-colors duration-300">{product.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow font-medium">{product.desc}</p>

              <div className="mt-6 flex items-center text-teal font-bold text-sm opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                View details <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function ProductCards() {
  return (
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-teal font-bold uppercase tracking-widest text-sm mb-4"
          >
            What We Cover
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight"
          >
            Comprehensive Protection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Custom ERGO portfolios tailored precisely to your situation — from wealth protection to premium healthcare access.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <TiltCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
