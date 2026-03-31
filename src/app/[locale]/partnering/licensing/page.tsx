"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe2, Zap, ShieldCheck, Database, LayoutGrid, CheckCircle2, ArrowRight, Network, Microscope, Layers, Briefcase, FileSearch } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

const HERO_BG = "partnering_handshake_premium_png_1774941004895.png";

export default function LicensingPortalPage() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-32 overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-56 pb-40 overflow-hidden bg-[#010816] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover opacity-60 scale-110 animate-slow-zoom" alt="Partnering Background" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#010816] via-transparent to-[#F8FAFD]/10" />
           <div className="absolute inset-0 bg-[#010816]/40 backdrop-blur-[2px]" />
           <AnimatedBg />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] bg-white/5 backdrop-blur-xl px-10 py-4 rounded-full mb-12 border border-white/10 shadow-2xl italic">
              <Network className="w-4 h-4" /> Strategic Alliances & Licensing
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-7xl md:text-[9rem] font-heading font-extrabold mb-10 italic leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-cyan/50 drop-shadow-2xl">
              Co-Development <br /> <span className="text-cyan">Synergies</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-2xl leading-relaxed font-light italic max-w-4xl mx-auto mb-16 border-l-2 border-teal/40 pl-8">
               Accelerating the global reach of our CXCR4 and CD24 platforms through strategic out-licensing and collaborative clinical development.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-6">
               <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-cyan mt-4 shadow-[0_0_10px_rgba(0,177,171,1)]" />
               <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-teal mt-4 shadow-[0_0_10px_rgba(0,177,171,1)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERING STATS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative z-20">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { icon: Globe2, label: "Territorial Rights", val: "Global/Regional", color: "text-cyan" },
                 { icon: Database, label: "Data Packages", val: "Ready Ph1/2", color: "text-teal" },
                 { icon: ShieldCheck, label: "Patent Life", val: "2040s Protection", color: "text-white bg-[#031835] p-3 rounded-xl" },
                 { icon: Zap, label: "Time to Market", val: "Pivotal Ph3", color: "text-cyan" }
               ].map((stat, i) => (
                 <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} className="flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${stat.color.includes('bg-') ? '' : stat.color}`}>
                       <stat.icon className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic opacity-60">{stat.label}</span>
                    <span className="text-xl font-heading font-extrabold text-[#031835] italic tracking-tight">{stat.val}</span>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── OPPORTUNITY BLOCKS ────────────────────────────────────────────── */}
      <section className="py-32 relative">
         <div className="absolute inset-0 bg-[#F8FAFD]" />
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
               {/* Licensing Grid */}
               <div className="space-y-16">
                  <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="mb-14">
                     <span className="text-teal text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] mb-6 block italic">Availability Portfolio</span>
                     <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#031835] italic mb-8 tracking-tighter leading-tight">Strategic <br/><span className="text-teal">Open</span> Windows</h2>
                     <p className="text-slate-500 text-lg font-light italic leading-loose max-w-xl">
                        Selection of our highest-priority commercial opportunities currently open for formal inquiry and technical deep-dives.
                     </p>
                  </motion.div>
                  
                  <div className="space-y-10">
                     {[
                       { title: "Greater China & Emerging Asia", asset: "PentixaFor (Primary Aldosteronism)", status: "Tier 1 Priority", icon: Network, desc: "Turnkey diagnostic solution with completed Ph1/2 data in Europe. Ready for local bridging clinical trials." },
                       { title: "North American Market Rights", asset: "GT-008 Platform (Anti-CD24 mAb)", status: "Active Dialogue", icon: Microscope, desc: "Proprietary first-in-class antibody platform for solid tumors. Co-development rights open for strategic pharmaceutical partners." },
                       { title: "Global Companion Diagnostics", asset: "Theranostic Pair Platform", status: "Open Call", icon: Layers, desc: "Collaborative development of Ga-68/Lu-177 paired radio-ligands for expanding indications into cardiology and oncology." }
                     ].map((item, i) => (
                       <motion.div 
                        key={i} 
                        whileHover={{x: 15}}
                        className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-2xl group relative overflow-hidden transition-all duration-500"
                       >
                          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform"><item.icon className="w-48 h-48" /></div>
                          <div className="flex items-center gap-4 mb-8">
                             <div className="w-12 h-12 rounded-2xl bg-[#031835] flex items-center justify-center shrink-0 shadow-xl group-hover:bg-cyan transition-all duration-500"><item.icon className="w-6 h-6 text-cyan group-hover:text-[#031835]" /></div>
                             <span className="text-[10px] font-extrabold text-teal uppercase tracking-[0.3em] italic bg-teal/5 px-5 py-2 rounded-full border border-teal/10">{item.status}</span>
                          </div>
                          <h4 className="text-3xl font-heading font-extrabold text-[#031835] mb-4 italic tracking-tight">{item.title}</h4>
                          <div className="flex items-center gap-3 mb-6">
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,177,171,1)]" />
                             <p className="text-[11px] text-[#031835] font-extrabold uppercase tracking-widest italic">{item.asset}</p>
                          </div>
                          <p className="text-slate-500 text-sm italic font-light leading-relaxed max-w-sm">{item.desc}</p>
                       </motion.div>
                     ))}
                  </div>
               </div>

               {/* Submission Box */}
               <div className="lg:sticky lg:top-40 h-fit bg-[#031835] text-white p-16 rounded-[5rem] shadow-[0_80px_160px_-40px_rgba(3,24,53,0.6)] relative overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 z-0">
                     <img src={`/${HERO_BG}`} className="w-full h-full object-cover opacity-10 blur-xl scale-125 transition-transform duration-1000 group-hover:scale-100" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-20 h-20 bg-white/5 rounded-3xl backdrop-blur-xl border border-white/10 flex items-center justify-center mb-12 group-hover:rotate-12 transition-transform">
                        <Briefcase className="w-10 h-10 text-cyan opacity-80" />
                     </div>
                     <h3 className="text-sm font-heading font-extrabold uppercase tracking-[0.6em] mb-10 italic text-cyan">Strategic Inquiry Portal</h3>
                     <p className="text-xl font-light leading-relaxed mb-14 italic text-slate-400">
                        Interested parties are invited to request secure data-room access for due diligence and technical dossiers.
                     </p>
                     
                     <form className="space-y-8 mb-16">
                        <div className="space-y-2 group/input">
                           <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-6 group-focus-within/input:text-cyan transition-colors">Target Opportunity</span>
                           <input type="text" placeholder="e.g. Asia Licensing Rights" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-[2.5rem] text-sm text-white placeholder-slate-600 outline-none focus:border-cyan/40 focus:bg-white/10 transition-all font-light shadow-inner" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-6">Organization</span>
                              <input type="text" placeholder="Pharma AG" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-[2.5rem] text-sm text-white placeholder-slate-600 outline-none focus:border-cyan/40 transition-all font-light shadow-inner" />
                           </div>
                           <div className="space-y-2">
                              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-6">Contact Email</span>
                              <input type="email" placeholder="bd@partner.com" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-[2.5rem] text-sm text-white placeholder-slate-600 outline-none focus:border-cyan/40 transition-all font-light shadow-inner" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-6">Memo / Interest Outline</span>
                           <textarea placeholder="Briefly outline your strategic alignment..." className="w-full bg-white/5 border border-white/10 px-10 py-8 rounded-[3rem] text-sm text-white placeholder-slate-600 outline-none focus:border-cyan/40 focus:bg-white/10 transition-all h-40 font-light resize-none shadow-inner" />
                        </div>
                     </form>
                     
                     <button className="w-full py-8 bg-cyan text-[#031835] font-heading font-extrabold rounded-full flex items-center justify-center gap-6 hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,177,171,0.3)] uppercase tracking-[0.4em] text-xs italic group/btn">
                        INITIATE TECHNICAL EXCHANGE <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-4 transition-transform" />
                     </button>
                     
                     <p className="mt-10 text-center text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] italic">
                        Responses typically within 48 business hours • Confidential Protocol
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── TECHNICAL INTEGRITY ───────────────────────────────────────────── */}
      <section className="py-40 bg-white border-y border-slate-100 overflow-hidden relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-5 gap-24 items-center">
               <div className="lg:col-span-2">
                  <span className="text-cyan text-xs font-heading font-extrabold uppercase tracking-[0.6em] mb-10 block italic">The Pentixa Advantage</span>
                  <h3 className="text-5xl md:text-7xl font-heading font-extrabold text-[#031835] italic leading-[0.9] tracking-tighter mb-12">Integrity of <br/> <span className="text-teal">Innovation</span></h3>
                  <p className="text-slate-500 text-xl font-light italic leading-relaxed mb-16">
                     We provide more than just a patent, we deliver a vertically integrated clinical ecosystem designed for global commercial scale.
                  </p>
                  <div className="space-y-8">
                     {[
                        { title: "IP Global Lock", val: "Filing priority on alpha-emitters until 2045." },
                        { title: "Clinical Support", val: "Full regulatory dossier for FDA/EMA IND path." },
                        { title: "Supply Chain", val: "Secured isotope sources (X- isotopes) for Ph3." }
                     ].map((point, i) => (
                        <div key={i} className="flex gap-6 items-center border-b border-slate-100 pb-6 group cursor-default">
                           <CheckCircle2 className="w-5 h-5 text-teal group-hover:scale-150 transition-transform" />
                           <div className="flex flex-col">
                              <span className="text-[11px] font-extrabold text-[#031835] uppercase italic tracking-widest">{point.title}</span>
                              <span className="text-xs text-slate-400 font-light italic">{point.val}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:col-span-3 grid sm:grid-cols-2 gap-10">
                  {[
                    { icon: ShieldCheck, title: "Commercial Security", val: "Comprehensive patent protection across all major global markets including the EU, USA, and China until the 2040s.", color: "bg-cyan/5" },
                    { icon: FileSearch, title: "Ph2 Asset Data", val: "Pre-clinical and clinical data package demonstrating >85% diagnostic sensitivity across 20+ cancer types.", color: "bg-teal/5" },
                    { icon: LayoutGrid, title: "Infrastructure", val: "Established automated production pathways compatible with standard hospital radiopharmacy equipment.", color: "bg-slate-50" },
                    { icon: Globe2, label: "Network", val: "Collaboration with the largest nuclear medicine centers globally for multi-center trial execution.", color: "bg-[#031835] text-white" }
                  ].map((v, i) => (
                    <motion.div 
                     key={i} 
                     whileHover={{y: -10}}
                     className={`p-12 rounded-[4rem] group transition-all shadow-xl hover:shadow-2xl border border-slate-50 flex flex-col items-center text-center ${v.color}`}
                    >
                       <v.icon className={`w-12 h-12 mb-10 ${v.color.includes('text-white') ? 'text-cyan' : 'text-teal'} group-hover:scale-125 transition-transform duration-500`} />
                       <h4 className={`text-2xl font-heading font-extrabold mb-4 italic tracking-tight ${v.color.includes('text-white') ? 'text-white' : 'text-[#031835]'}`}>{v.title || v.label}</h4>
                       <p className={`text-sm font-light italic leading-relaxed ${v.color.includes('text-white') ? 'text-slate-400' : 'text-slate-500'}`}>{v.val}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
