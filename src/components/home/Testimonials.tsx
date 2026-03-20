"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Software Engineer, UK Expat",
    avatar: "SM",
    stars: 5,
    flag: "🇬🇧",
    text: "Mourad made the whole PKV process completely painless. I'd been putting it off for months because German bureaucracy terrified me. One consultation later and I had a plan that saves me €180/month compared to GKV. Absolutely recommend.",
    product: "Private Health (PKV)",
  },
  {
    name: "Lucas Bertrand",
    role: "Freelance Designer, French Expat",
    avatar: "LB",
    stars: 5,
    flag: "🇫🇷",
    text: "Je cherchais quelqu'un qui comprenne vraiment ma situation de freelance. Mourad a tout expliqué en français, clairement, sans pression. Il a trouvé une solution de retraite parfaite pour mon budget. Très professionnel.",
    product: "Pension Planning",
  },
  {
    name: "Ahmed Al-Rashidy",
    role: "Business Owner, Syria",
    avatar: "AA",
    stars: 5,
    flag: "🇸🇾",
    text: "تحدث مراد معي بالعربية وشرح كل شيء ببساطة. بعد سنوات من الارتباك، أخيرًا أفهم تأمين الحوادث وحماية الدخل. خدمة احترافية للغاية.",
    product: "Accident Insurance",
  },
  {
    name: "Maria Kowalski",
    role: "Doctor, Polish Expat",
    avatar: "MK",
    stars: 5,
    flag: "🇵🇱",
    text: "As a doctor, I deal with insurance professionally. Mourad's knowledge impressed me. He found legal protection coverage tailored exactly to my situation. 5 stars without hesitation.",
    product: "Legal Protection",
  },
  {
    name: "Thomas Fischer",
    role: "Startup Founder, Berlin",
    avatar: "TF",
    stars: 5,
    flag: "🇩🇪",
    text: "Mourad hat mir geholfen, meine private Krankenversicherung optimal zu gestalten und gleichzeitig eine Rentenvorsorge aufzubauen. Alles ohne Druck, einfach klasse. Ich kann ihn nur wärmstens empfehlen.",
    product: "PKV + Pension",
  },
  {
    name: "Riya Patel",
    role: "Data Scientist, India",
    avatar: "RP",
    stars: 5,
    flag: "🇮🇳",
    text: "Mourad was incredibly patient explaining everything in English. The dental insurance he recommended has already saved me over €1,200. I've referred 3 colleagues and they've all had the same great experience.",
    product: "Supplemental Dental",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.07)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal/5 blur-[120px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Real Stories</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-5 tracking-tight">
            What Clients Are <span className="gradient-text">Saying</span>
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3">
            <StarRating count={5} />
            <span className="text-white font-bold">5.0</span>
            <span className="text-slate-400 text-sm">· {testimonials.length * 84}+ verified reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          {/* Desktop: 3-card layout */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.name}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: i === 1 ? 1 : 0.55,
                  scale: i === 1 ? 1 : 0.95,
                  y: i === 1 ? -8 : 0,
                }}
                transition={{ duration: 0.4 }}
                className={`glass rounded-3xl p-8 border transition-all duration-500 cursor-pointer ${
                  i === 1
                    ? "border-teal/40 shadow-2xl shadow-teal/10"
                    : "border-white/10"
                }`}
                onClick={() => {
                  if (i === 0) prev();
                  if (i === 2) next();
                }}
              >
                <Quote className="w-8 h-8 text-teal/40 mb-4" />
                <p className="text-slate-300 leading-relaxed mb-6 text-sm font-medium">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-navy flex items-center justify-center font-bold text-white text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">{t.name} {t.flag}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                  <StarRating count={t.stars} />
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full">{t.product}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="glass rounded-3xl p-8 border border-teal/30"
            >
              <Quote className="w-8 h-8 text-teal/40 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-navy flex items-center justify-center font-bold text-white shrink-0">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="text-white font-bold">{testimonials[current].name} {testimonials[current].flag}</p>
                  <p className="text-slate-500 text-xs">{testimonials[current].role}</p>
                </div>
                <StarRating count={testimonials[current].stars} />
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-white hover:border-teal/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-teal" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-white hover:border-teal/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
