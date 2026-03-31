"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Handshake, Target, Globe2, Briefcase, ChevronRight, ArrowUpRight, Scale, Activity, Zap, Atom } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

export default function PartneringPage() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-white border-b border-slate-200 shadow-sm">
        <div className="absolute inset-0 z-0 opacity-5">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="20" cy="20" r="1.5" fill="#031835" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotGrid)" />
           </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.3em] bg-cyan/10 px-6 py-2.5 rounded-full mb-10 border border-cyan/20">
              Business Development
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-heading font-extrabold text-[#031835] mb-8 leading-tight italic">Global <span className="text-cyan">Alliance</span> Strategy</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic">
              We seek visionary collaborators to accelerate the clinical adoption of our CXCR4 and CD24 platforms, bringing precision medicine to the global oncology market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERING CATEGORIES ─────────────────────────────────────────── */}
      <section className="py-24">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
               <motion.div initial={{opacity:0, scale:0.98, y:20}} whileInView={{opacity:1, scale:1, y:0}} viewport={{once:true}} className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:rotate-12 transition-all group-hover:opacity-10"><Briefcase className="w-48 h-48" /></div>
                  <h3 className="text-3xl font-heading font-extrabold text-[#031835] mb-6 flex items-center gap-4 italic"><Handshake className="text-cyan w-10 h-10"/> Licensing & Assets</h3>
                  <p className="text-slate-500 leading-relaxed mb-10 font-light text-lg">We offer regional or global licensing opportunities for our lead candidates, including <strong>PentixaFor</strong> and <strong>PentixaTher</strong>, specifically for high-growth oncology territories outside Europe.</p>
                  <ul className="space-y-4 mb-10">
                     {[
                        "Regional co-development in USA/Asia",
                        "Rights for secondary indications (Endocrinology)",
                        "Combination studies with Standard of Care"
                     ].map((item,i) => (
                        <li key={i} className="flex gap-3 text-sm font-bold text-navy items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                           <div className="w-1.5 h-1.5 bg-cyan rounded-full shrink-0"/> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="flex items-center gap-2 font-heading font-extrabold text-sm text-cyan group-hover:gap-4 transition-all uppercase tracking-widest outline-none">Connect with Licensing Team <ArrowUpRight className="w-4 h-4"/></button>
               </motion.div>

               <motion.div initial={{opacity:0, scale:0.98, y:20}} whileInView={{opacity:1, scale:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="bg-[#031835] p-12 rounded-[3.5rem] text-white shadow-2xl shadow-navy/20 relative group overflow-hidden ">
                  <div className="absolute top-5 right-5 p-12 opacity-10 group-hover:scale-110 transition-transform"><Target className="w-48 h-48" /></div>
                  <h3 className="text-3xl font-heading font-extrabold mb-6 flex items-center gap-4 tracking-tighter italic"><Atom className="text-teal w-10 h-10"/> R&D Platform Tech</h3>
                  <p className="text-slate-400 leading-relaxed mb-10 font-light text-lg">Leverage our proprietary <strong>CXCR4</strong> targeting expertise and radiolabeling CMC infrastructure for your therapeutic assets or early-stage discovery pipelines.</p>
                  <ul className="space-y-4 mb-10">
                     {[
                        "Custom tracer development (Discovery)",
                        "Isotope supply & CMC logistics",
                        "Precision preclinical pharmacology"
                     ].map((item,i) => (
                        <li key={i} className="flex gap-3 text-sm font-bold items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                           <div className="w-1.5 h-1.5 bg-teal rounded-full shrink-0"/> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="flex items-center gap-2 font-heading font-extrabold text-sm text-teal group-hover:gap-4 transition-all uppercase tracking-widest outline-none">R&D Partnership Portal <ArrowUpRight className="w-4 h-4"/></button>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ── VALUES SECTION ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-4xl font-heading font-extrabold text-[#031835] mb-16">Why Partner with <span className="text-cyan italic">Pentixa?</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: Globe2, label: "Global Footprint", val: "Established regulatory pathways for radiopharmaceuticals in major markets." },
                  { icon: Activity, label: "Proven Concept", val: "Over 2,600 clinical applications already performed with lead assets." },
                  { icon: Scale, label: "Strategic Flexibility", val: "Open to equity investments, co-development, and joint ventures." }
               ].map((v,i) => (
                  <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} className="flex flex-col items-center">
                     <div className="w-20 h-20 rounded-[2.5rem] bg-navy flex items-center justify-center mb-8 shadow-xl"><v.icon className="w-8 h-8 text-cyan"/></div>
                     <h4 className="text-xl font-heading font-extrabold text-navy mb-4 italic">{v.label}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed font-light">{v.val}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
               <h3 className="text-3xl font-heading font-extrabold text-[#031835] mb-6 tracking-tight italic">Initiate a Strategic Dialogue</h3>
               <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">Contact our Corporate Development team for confidential initial inquiries or to request a data collection overview.</p>
               <a href="mailto:partnering@pentixapharm.com" className="px-12 py-5 bg-[#031835] text-white font-heading font-extrabold rounded-full hover:bg-cyan hover:text-navy transition-all shadow-2xl inline-flex items-center gap-3">
                  Contact BD Team <Handshake className="w-5 h-5" />
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
