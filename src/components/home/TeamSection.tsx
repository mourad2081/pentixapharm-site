"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe2, Briefcase, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const team = [
  {
    name: "Mourad Labadi",
    role: "Senior Financial Advisor",
    subtitle: "Pension & Health Specialist",
    photo: "/mourad-headshot.png",
    languages: ["English", "French", "German", "Arabic"],
    specialties: ["Pension Planning", "PKV Health Insurance", "Asset Protection", "Life Insurance"],
    bio: "With 5+ years in international corporate finance, Mourad brings deep expertise in German pension systems and private health insurance, guiding clients through complex decisions with clarity.",
    calendly: "https://calendly.com/mourad-labadi",
    email: "mourad.labadi@nextgencapital.de",
    phone: "+49 123 456 789",
    badge: "bg-teal",
  },
  {
    name: "Oscar Sunderland",
    role: "Financial Advisor",
    subtitle: "Health Insurance Expert",
    photo: "/mourad-headshot.png", // placeholder — replace if Oscar has a photo
    languages: ["English", "German"],
    specialties: ["PKV Advisory", "Health Insurance", "Expat Solutions", "Financial Planning"],
    bio: "Oscar specialises in private health insurance (PKV) and financial planning, helping clients find the best healthcare solutions tailored to their individual needs across Germany.",
    calendly: "https://calendly.com/oscar_sunderland",
    email: "oscar.sunderland@nextgencapital.de",
    phone: "+49 176 70845501",
    badge: "bg-navy",
  },
];

export function TeamSection() {
  const locale = useLocale();
  const t = useTranslations("WhyMe");

  return (
    <section className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(14,165,160,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(10,22,40,0.04)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-teal font-black tracking-[0.2em] uppercase text-xs mb-4 block">{t('subtitle')}</span>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-navy mb-6 tracking-tight">
            {t('titlePart1')}<br />
            <span className="gradient-text">{t('titlePart2')}</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('desc')}
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group bg-white rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Top color bar */}
              <div className={`h-2 w-full ${member.badge}`} />

              <div className="p-10">
                {/* Profile */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-lg shrink-0">
                    <Image src={member.photo} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-black text-navy mb-1">{member.name}</h3>
                    <p className="text-teal font-bold text-sm mb-1">{member.role}</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{member.subtitle}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-600 font-medium leading-relaxed mb-8 text-sm">{member.bio}</p>

                {/* Languages */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe2 className="w-4 h-4 text-teal" />
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map(l => (
                      <span key={l} className="px-3 py-1 bg-teal/10 text-teal text-xs font-bold rounded-full">{l}</span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-navy" />
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map(s => (
                      <span key={s} className="px-3 py-1 bg-navy/5 text-navy text-xs font-bold rounded-full">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col sm:flex-row items-start gap-4 pt-6 border-t border-slate-100">
                  <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal transition-colors font-bold">
                    <Phone className="w-3.5 h-3.5" />
                    {member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal transition-colors font-bold">
                    <Mail className="w-3.5 h-3.5" />
                    {member.email}
                  </a>
                </div>

                {/* CTA */}
                <a
                  href={member.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full h-12 rounded-2xl bg-navy text-white text-sm font-black uppercase tracking-widest hover:bg-teal transition-all duration-300 active:scale-95 group/cta"
                >
                  <Star className="w-4 h-4" />
                  Book with {member.name.split(' ')[0]}
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team CTA */}
        <div className="text-center mt-16">
          <Link href={`/${locale}/ueber-mich`}>
            <button className="h-14 px-10 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white text-sm font-black uppercase tracking-widest transition-all active:scale-95">
              {t('btn1')} <ArrowRight className="inline w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
