"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Tag,
  User,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const POSTS = [
  {
    title: "Liability in Germany: Why a 'Haftpflicht' is Non-Negotiable",
    excerpt: "In any city as litigious as Germany, personal liability isn't a choice - it's a survival tool for your assets.",
    category: "Basics",
    time: "4 min read",
    img: "/berlin_coworking.png"
  },
  {
    title: "PKV vs GKV: The 2024 High-Earner Guide",
    excerpt: "Is switching to private health insurance actually worth it for software engineers? We run the numbers.",
    category: "Health",
    time: "6 min read",
    img: "/berlin_abstract.png"
  }
];

export function BlogHighlights() {
  const locale = useLocale();

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full text-navy font-black text-sm uppercase tracking-widest border border-navy/10 mb-6"
            >
              <BookOpen className="h-4 w-4" /> Expat Knowledge Hub
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-black text-navy leading-tight tracking-tighter"
            >
              Expert insights for your <span className="text-teal">German life</span>
            </motion.h2>
          </div>
          
          <Link href={`/${locale}/blog`}>
            <button className="group flex items-center gap-3 bg-white px-8 py-5 rounded-2xl shadow-xl hover:bg-navy hover:text-white transition-all duration-300 font-black uppercase tracking-widest text-xs">
              View All Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white hover:border-teal/30 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={post.img} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 blur-sm group-hover:blur-0 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-teal shadow-lg border border-white/20">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-6 mb-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" /> {post.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" /> By Mourad
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-black text-navy mb-6 group-hover:text-teal transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 mb-auto line-clamp-3">{post.excerpt}</p>
                
                <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-teal font-black uppercase tracking-widest text-[10px] hover:underline group/link">
                  Continue Reading <ExternalLink className="h-3 w-3 transition-transform group-link-hover:translate-x-1 group-link-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


