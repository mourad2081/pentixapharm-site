"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Globe2, Zap, LayoutGrid, Atom, Building2, Mail, ShieldCheck, Microscope, Award, LineChart } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function PartneringPage() {
  const locale = useLocale();
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-[#002A54]">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[#00B1AB] opacity-[0.02]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.span variants={fadeUp} className="text-teal text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] bg-teal/10 px-8 py-3 rounded-full inline-block mb-10 border border-teal/20 italic">Alliance Management</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 italic tracking-tighter">Strategic <span className="text-cyan">Alliance</span> Hub</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-xl leading-relaxed font-light italic max-w-3xl mb-12">
              We are actively seeking transformative partnerships with global biopharma leaders to accelerate the commercialization of our CXCR4 and CD24 platforms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERING CATEGORIES ────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { icon: Globe2, title: "Territorial Rights", desc: "Licensing opportunities for PANDA (Phase 3) and PENTILULA programs in targeted geographical markets.", color: "text-[#00B1AB]" },
                 { icon: Atom, title: "R&D Collaborations", desc: "Collaborate on next-generation CXCR4 ligands for diverse therapeutic modalities beyond oncology.", color: "text-[#00A3E0]" },
                 { icon: Microscope, title: "Clinical Support", desc: "Partnering with radiopharmaceutical manufacturing specialists to scale global supply chain delivery.", color: "text-[#002A54]" }
               ].map((v, i) => (
                 <motion.div key={i} whileHover={{ y: -10 }} className="p-12 rounded-[4rem] bg-[#F8FAFD] shadow-xl border border-slate-50 transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center mb-8 group-hover:bg-[#002A54] group-hover:text-white transition-all transform group-hover:rotate-12">
                       <v.icon className={"w-7 h-7 " + (v.color)}/>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#002A54] mb-4 italic tracking-tight">{v.title}</h3>
                    <p className="text-slate-500 text-sm italic font-light leading-relaxed">{v.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── CONTACT FORM PORTAL ─────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8FAFD]">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-white rounded-[4rem] p-16 lg:p-24 shadow-2xl border border-slate-100 grid lg:grid-cols-2 gap-24 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-0"><Building2 className="w-96 h-96" /></div>
               
               <div>
                  <span className="text-[#00A3E0] font-heading font-extrabold text-[10px] tracking-[0.4em] uppercase mb-6 block italic">Business Development</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#002A54] leading-tight mb-8 italic tracking-tighter">Initiate <span className="text-cyan">Dialogue</span></h2>
                  <p className="text-slate-500 text-lg leading-relaxed font-light italic mb-12">
                     Our Business Development team reviews all partnership requests within 48 hours. Please provide your institutional information below.
                  </p>
                  
                  <ul className="space-y-10">
                     {[
                       { icon: Award, title: "Proprietary IP", desc: "Full ownership of our core CXCR4 and CD24 families." },
                       { icon: ShieldCheck, title: "Regulatory Readiness", desc: "EMA/FDA standard clinical trial integrity." },
                       { icon: LineChart, title: "Market Specifics", desc: "Data support for primary aldosteronism and oncology." }
                     ].map((item, i) => (
                       <li key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 rounded-xl bg-[#F8FAFD] shadow-inner flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-teal" /></div>
                          <div>
                             <h4 className="font-heading font-extrabold text-[#002A54] mb-1 italic text-sm">{item.title}</h4>
                             <p className="text-slate-400 text-xs font-light italic leading-relaxed">{item.desc}</p>
                          </div>
                       </li>
                     ))}
                  </ul>
               </div>

               <div>
                 {formState === "success" ? (
                   <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="h-full flex flex-col items-center justify-center text-center p-10 bg-teal/5 rounded-[3.5rem] border border-teal/10">
                      <div className="w-20 h-20 rounded-full bg-teal flex items-center justify-center mb-10 shadow-2xl text-white animate-bounce"><ShieldCheck className="w-10 h-10" /></div>
                      <h3 className="text-3xl font-heading font-extrabold text-[#002A54] mb-6 italic">Enquiry Transmitted</h3>
                      <p className="text-slate-600 italic font-light">Your institutional request has been logged. A member of our Alliance Management team will contact you shortly.</p>
                      <button onClick={() => setFormState("idle")} className="mt-12 text-[10px] font-heading font-extrabold text-teal uppercase tracking-widest hover:underline italic">SUBMIT ANOTHER REQUEST</button>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-8 bg-[#F8FAFD] p-12 rounded-[3.5rem] border border-slate-50 shadow-inner">
                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 italic">Full Name</label>
                            <input required type="text" className="w-full bg-white border border-slate-200 px-8 py-5 rounded-full text-sm font-heading focus:border-teal outline-none transition-all placeholder:text-slate-300 italic" placeholder="John Doe" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 italic">Organization</label>
                            <input required type="text" className="w-full bg-white border border-slate-200 px-8 py-5 rounded-full text-sm font-heading focus:border-teal outline-none transition-all placeholder:text-slate-300 italic" placeholder="Biopharma Inc." />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 italic">Institutional Email</label>
                         <input required type="email" className="w-full bg-white border border-slate-200 px-8 py-5 rounded-full text-sm font-heading focus:border-teal outline-none transition-all placeholder:text-slate-300 italic" placeholder="j.doe@biopharma.com" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 italic">Collaboration Focus</label>
                         <select className="w-full bg-white border border-slate-200 px-8 py-5 rounded-[2rem] text-sm font-heading focus:border-teal outline-none transition-all italic appearance-none cursor-pointer">
                            <option>Licensing: PANDA (Phase 3)</option>
                            <option>Research Collaboration: CXCR4 New Targets</option>
                            <option>Platform Access: CD24 Glide</option>
                            <option>Manufacturing & Supply Chain</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 italic">Message</label>
                         <textarea required rows={4} className="w-full bg-white border border-slate-200 px-8 py-6 rounded-[2.5rem] text-sm font-heading focus:border-teal outline-none transition-all placeholder:text-slate-300 italic resize-none" placeholder="Briefly describe your institutional interest..."></textarea>
                      </div>
                      <button disabled={formState === "submitting"} className="w-full py-6 bg-[#002A54] text-white font-heading font-extrabold rounded-full hover:bg-teal hover:text-navy transition-all shadow-2xl italic tracking-widest text-xs flex items-center justify-center gap-4">
                         {formState === "submitting" ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <>TRANSMIT REQUEST <ArrowRight className="w-4 h-4"/></>}
                      </button>
                      <p className="text-center text-[9px] text-slate-400 uppercase tracking-[0.3em] italic">Confidential institutional contact only</p>
                   </form>
                 )}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
