"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Anderson",
    role: "American Freelancer, Germany",
    avatar: "JA",
    stars: 5,
    flag: "🇺🇸",
    text: "Mourad is the real deal. He helped me switch from GKV and cut my costs by over €300/month while *increasing* my coverage for specialists. It's rare to find an advisor in Germany who truly understands the expat tax situation. 10/10 service.",
    product: "PKV Optimization",
  },
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
    role: "Startup Founder, Germany",
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
        <Star key={i} className="w-4 h-4 fill-teal text-teal" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);

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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.07)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal/5 blur-[120px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">Real Success Stories</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
            Client <span className="text-teal">Appreciation</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating count={5} />
            <span className="text-white font-black text-xl">5.0</span>
            <span className="text-slate-500 font-bold">· Verified Expat Reviews</span>
          </div>
        </div>

        <div className="relative">
          {/* Deck: 3-card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className={`bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border transition-all duration-700 ${
                  i === 1
                    ? "border-teal/50 shadow-2xl shadow-teal/20 scale-105 z-10 -translate-y-4"
                    : "border-white/10 scale-95 opacity-40 grayscale"
                }`}
              >
                <Quote className="w-10 h-10 text-teal/40 mb-6" />
                <p className="text-slate-300 leading-relaxed mb-8 text-lg font-medium italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-blue-600 flex items-center justify-center font-black text-white text-lg shrink-0 shadow-lg">
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-black text-sm">{t.name} {t.flag}</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                  <div className="hidden lg:block">
                    <StarRating count={t.stars} />
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-xs font-black text-teal bg-teal/10 px-4 py-1.5 rounded-full uppercase tracking-widest">{t.product}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal hover:border-teal transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-10 bg-teal" : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal hover:border-teal transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

