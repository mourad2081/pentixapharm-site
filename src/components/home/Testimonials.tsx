"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "fill-teal text-teal" : "fill-slate-700 text-slate-700"}`} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "James Anderson",
      role: "American Freelancer, Germany",
      avatar: "JA",
      stars: 5,
      flag: "🇺🇸",
      text: "Mourad is the real deal. He helped me switch from GKV and cut my costs by over €300/month while *increasing* my coverage for specialists. It's rare to find an advisor in Germany who truly understands the expat tax situation. 10/10 service.",
      product: t("pkvOptimization"),
    },
    {
      name: "Sarah Mitchell",
      role: "Software Engineer, UK Expat",
      avatar: "SM",
      stars: 5,
      flag: "🇬🇧",
      text: "Mourad made the whole PKV process completely painless. I'd been putting it off for months because German bureaucracy terrified me. One consultation later and I had a plan that saves me €180/month compared to GKV. Absolutely recommend.",
      product: t("privateHealth"),
    },
    {
      name: "Lucas Bertrand",
      role: "Freelance Designer, French Expat",
      avatar: "LB",
      stars: 5,
      flag: "🇫🇷",
      text: "Je cherchais quelqu'un qui comprenne vraiment ma situation de freelance. Mourad a tout expliqué en français, clairement, sans pression. Il a trouvé une solution de retraite parfaite pour mon budget. Très professionnel.",
      product: t("pensionPlanning"),
    },
    {
      name: "Ahmed Al-Rashidy",
      role: "Business Owner, Syria",
      avatar: "AA",
      stars: 5,
      flag: "🇸🇾",
      text: "تحدث مراد معي بالعربية وشرح كل شيء ببساطة. بعد سنوات من الارتباك، أخيرًا أفهم تأمين الحوادث وحماية الدخل. خدمة احترافية للغاية.",
      product: t("accidentInsurance"),
    },
    {
      name: "Maria Kowalski",
      role: "Doctor, Polish Expat",
      avatar: "MK",
      stars: 5,
      flag: "🇵🇱",
      text: "As a doctor, I deal with insurance professionally. Mourad's knowledge impressed me. He found legal protection coverage tailored exactly to my situation. 5 stars without hesitation.",
      product: t("legalProtection"),
    },
    {
      name: "Thomas Fischer",
      role: "Startup Founder, Germany",
      avatar: "TF",
      stars: 5,
      flag: "🇩🇪",
      text: "Mourad hat mir geholfen, meine private Krankenversicherung optimal zu gestalten und gleichzeitig eine Rentenvorsorge aufzubauen. Alles ohne Druck, einfach klasse. Ich kann ihn nur wärmstens empfehlen.",
      product: t("pkvPension"),
    },
    {
      name: "Riya Patel",
      role: "Data Scientist, India",
      avatar: "RP",
      stars: 5,
      flag: "🇮🇳",
      text: "Mourad was incredibly patient explaining everything in English. The dental insurance he recommended has already saved me over €1,200. I've referred 3 colleagues and they've all had the same great experience.",
      product: t("dentalInsurance"),
    },
  ];

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

      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-teal font-black uppercase tracking-[0.2em] text-xs mb-4">{t('subtitle')}</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
            {t('title').split(' ')[0]} <span className="text-teal">{t('title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating count={5} />
            <span className="text-white font-black text-xl">5.0</span>
            <span className="text-slate-500 font-bold">· {t('verifiedLabel')}</span>
          </div>
        </div>

        <div className="relative">
          {/* Deck: 3-card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visible.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className={`flex flex-col bg-white rounded-[2.5rem] p-10 border transition-all duration-700 ${
                  i === 1
                    ? "border-teal/50 shadow-2xl shadow-teal/20 scale-105 z-10 -translate-y-4"
                    : "border-white/10 opacity-30 scale-95 grayscale bg-white/5"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex-1">
                  <Quote className="w-10 h-10 text-teal/40 mb-6" />
                  <p className={`leading-relaxed mb-8 text-lg font-medium italic ${i === 1 ? "text-navy" : "text-slate-300"}`}>
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-blue-600 flex items-center justify-center font-black text-white text-lg shrink-0 shadow-lg shadow-teal/20">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`font-black text-sm ${i === 1 ? "text-navy" : "text-white"}`}>
                        {testimonial.name} {testimonial.flag}
                      </p>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black text-teal bg-teal/10 px-4 py-1.5 rounded-full uppercase tracking-widest">{testimonial.product}</span>
                    <StarRating count={testimonial.stars} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-6 mt-16 pb-12">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal hover:border-teal transition-all active:scale-90 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "w-10 bg-teal shadow-lg shadow-teal/40" : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal hover:border-teal transition-all active:scale-90 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
