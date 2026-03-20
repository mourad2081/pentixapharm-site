"use client";
import { ShieldCheck, Award, Globe2, Clock, Star, Building2, Users, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Official ERGO Partner" },
  { icon: Award, text: "IHK Berlin Certified" },
  { icon: Globe2, text: "4 Languages Spoken" },
  { icon: Clock, text: "Free Initial Consultation" },
  { icon: Star, text: "5-Star Client Rated" },
  { icon: Building2, text: "Based in Berlin" },
  { icon: Users, text: "500+ Clients Advised" },
  { icon: BadgeCheck, text: "§34d GewO Licensed" },
];

// Duplicate for seamless loop
const MARQUEE_ITEMS = [...items, ...items];

export function TrustBar() {
  return (
    <section className="py-10 bg-navy relative overflow-hidden border-b border-white/5">
      {/* Gradient fades on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {MARQUEE_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-10 shrink-0 group"
          >
            <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-teal/20 transition-colors border border-white/8">
              <item.icon className="w-5 h-5 text-teal" />
            </div>
            <span className="text-white/80 font-bold text-sm whitespace-nowrap group-hover:text-white transition-colors tracking-wide">
              {item.text}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/20 ml-4" />
          </div>
        ))}
      </div>
    </section>
  );
}
