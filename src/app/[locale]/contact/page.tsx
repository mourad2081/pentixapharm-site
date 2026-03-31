"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe2, Building2, ChevronRight, Fingerprint, Map } from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.15 } } };

const HERO_BG = "contact_global_bg_1774920807115.png";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"", department:"investor" });
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
      setStatus("ok");
      setForm({name:"",email:"",subject:"",message:"",department:"investor"});
    } catch { setStatus("err"); }
    setLoading(false);
  }

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#031835] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom" alt="Global Contact Background" />
           <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#031835] via-[#031835]/80 to-transparent" />
           <AnimatedBg />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.5em] bg-white/5 backdrop-blur-xl px-10 py-4 rounded-full mb-10 border border-white/10 shadow-2xl italic">
              <Globe2 className="w-4 h-4 animate-spin-slow" /> Global Connect
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[7rem] font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan/50 mb-8 italic tracking-tighter leading-[0.8] drop-shadow-2xl">
              Initiate <br/><span className="text-cyan">Strategic Dialog</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-2xl leading-relaxed italic max-w-2xl mx-auto font-light">
               We connect pharmaceutical allies, private investors, and leading academic institutions with our core clinical operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE CONTENT ────────────────────────────────────────────────────── */}
      <section className="py-32 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Direct Channels */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="lg:col-span-5 space-y-8">
              <div className="mb-12">
                 <h2 className="text-4xl font-heading font-extrabold text-[#031835] italic tracking-tight mb-4">Direct Channels</h2>
                 <p className="text-slate-500 font-light italic leading-relaxed">Our operational desks are monitored continuously to ensure rapid and professional responses across all organizational vectors.</p>
              </div>

              {[
                { icon:Building2, title:t("irTitle") || "Investor Relations", detail:"ir@pentixapharm.com", tag:"Equities & Financials", href:"mailto:ir@pentixapharm.com" },
                { icon:Mail, title:t("mediaTitle") || "Corporate Communications", detail:"press@pentixapharm.com", tag:"Media Inquiries", href:"mailto:press@pentixapharm.com" },
                { icon:Fingerprint, title:t("careersTitle") || "Careers & Talent", detail:"careers@pentixapharm.com", tag:"Join the Mission", href:"mailto:careers@pentixapharm.com" },
                { icon:Phone, title:"Global Headquarters Desk", detail:"+49 30 94892600", tag:"Front Office", href:"tel:+493094892600" },
              ].map((c,i) => (
                <motion.div key={i} variants={fadeUp} className="group flex items-center gap-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:bg-[#031835] transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(3,24,53,0.2)] cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#F8FAFD] group-hover:bg-cyan/10 rounded-[1.5rem] shrink-0 transition-colors shadow-inner">
                    <c.icon className="w-6 h-6 text-[#031835] group-hover:text-cyan transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-teal group-hover:text-cyan font-bold uppercase tracking-widest mb-1 italic transition-colors">{c.tag}</p>
                    <p className="text-xl font-heading font-extrabold text-[#031835] group-hover:text-white italic tracking-tight mb-1 transition-colors">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-light text-slate-500 group-hover:text-slate-300 italic flex items-center gap-2 transition-colors">
                         {c.detail} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <p className="text-sm font-light text-slate-500 group-hover:text-slate-300 italic transition-colors">{c.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="mt-12 bg-gradient-to-br from-cyan/10 to-teal/5 border border-cyan/20 p-10 rounded-[3rem] shadow-inner relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-1000"><MapPin className="w-32 h-32" /></div>
                 <div className="relative z-10 flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg"><MapPin className="w-5 h-5 text-teal"/></div>
                    <div>
                       <h3 className="text-lg font-heading font-extrabold text-[#031835] italic tracking-tight mb-2">Primary Operations</h3>
                       <p className="text-sm font-light text-slate-600 leading-relaxed italic">Robert-Rössle-Str. 10<br/>13125 Berlin, Germany<br/><br/>Located in an essential European biotechnology hub, enabling fast pan-European clinical deployment.</p>
                    </div>
                 </div>
              </motion.div>

            </motion.div>

            {/* Strategic Inquiry Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="lg:col-span-7 mt-16 lg:mt-0">
              <motion.div variants={fadeUp} className="bg-white rounded-[4rem] p-12 lg:p-16 shadow-[0_40px_100px_-20px_rgba(3,24,53,0.08)] border border-slate-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-cyan/5 to-transparent opacity-50 translate-x-1/3 -translate-y-1/3" />
                 
                 <div className="mb-12 relative z-10">
                    <h3 className="text-4xl font-heading font-extrabold text-[#031835] italic tracking-tight mb-4">Strategic Secure Inquiry</h3>
                    <p className="text-slate-500 font-light italic text-lg leading-relaxed">Submit your corporate, investment, or academic proposal directly to our routing systems framework.</p>
                 </div>

                 <form onSubmit={submit} className="space-y-8 relative z-10">
                   
                   <div className="flex flex-col space-y-2 relative">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#031835] italic ml-4">Inquiry Vector</label>
                      <select 
                         value={form.department} 
                         onChange={e=>setForm({...form,department:e.target.value})}
                         className="w-full bg-[#F8FAFD] border border-slate-100 rounded-[2rem] px-8 py-5 text-[#031835] font-light appearance-none outline-none focus:border-cyan/50 focus:bg-white hover:border-slate-200 transition-all shadow-inner hover:shadow-cyan/5 italic"
                      >
                         <option value="investor">Investor Relations & Finance</option>
                         <option value="partnering">Clinical Co-Development / Partnering</option>
                         <option value="medical">Medical Affairs & Trial Inquiry</option>
                         <option value="media">Media & Press Communications</option>
                         <option value="other">General Administration</option>
                      </select>
                      <div className="absolute right-8 top-12 pointer-events-none"><ChevronRight className="w-5 h-5 text-slate-400 rotate-90" /></div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-[11px] font-bold uppercase tracking-widest text-[#031835] italic ml-4">{tf("name") || "Full Entity Name / Contact"}</label>
                       <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required
                         className="w-full bg-[#F8FAFD] border border-slate-100 rounded-[2rem] px-8 py-5 text-[#031835] font-light outline-none focus:border-cyan/50 focus:bg-white hover:border-slate-200 transition-all shadow-inner hover:shadow-cyan/5"
                         placeholder="Dr. Jane Doe / Entity Corp." />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[11px] font-bold uppercase tracking-widest text-[#031835] italic ml-4">{tf("email") || "Corporate Email"}</label>
                       <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required
                         className="w-full bg-[#F8FAFD] border border-slate-100 rounded-[2rem] px-8 py-5 text-[#031835] font-light outline-none focus:border-cyan/50 focus:bg-white hover:border-slate-200 transition-all shadow-inner hover:shadow-cyan/5"
                         placeholder="contact@entity.com" />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-[11px] font-bold uppercase tracking-widest text-[#031835] italic ml-4">{tf("subject") || "Subject Declaration"}</label>
                     <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required
                       className="w-full bg-[#F8FAFD] border border-slate-100 rounded-[2rem] px-8 py-5 text-[#031835] font-light outline-none focus:border-cyan/50 focus:bg-white hover:border-slate-200 transition-all shadow-inner hover:shadow-cyan/5"
                       placeholder="Re: Phase II Collaboration Opportunity" />
                   </div>

                   <div className="space-y-2">
                     <label className="text-[11px] font-bold uppercase tracking-widest text-[#031835] italic ml-4">{tf("message") || "Message Detail"}</label>
                     <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={6}
                       className="w-full bg-[#F8FAFD] border border-slate-100 rounded-[2rem] px-8 py-6 text-[#031835] font-light outline-none focus:border-cyan/50 focus:bg-white hover:border-slate-200 transition-all shadow-inner hover:shadow-cyan/5 resize-none leading-relaxed"
                       placeholder="Please detail your primary objective..." />
                   </div>

                   {status==="ok" && (
                     <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="flex items-center gap-4 text-[#031835] text-sm bg-cyan/10 border border-cyan/20 rounded-[2rem] px-8 py-5 font-bold italic">
                       <CheckCircle className="w-5 h-5 text-teal" /> Transmission Secured. A representative will contact you shortly.
                     </motion.div>
                   )}
                   {status==="err" && (
                     <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="flex items-center gap-4 text-[#A7303E] text-sm bg-[#A7303E]/10 border border-[#A7303E]/20 rounded-[2rem] px-8 py-5 font-bold italic">
                       <AlertCircle className="w-5 h-5 text-[#A7303E]" /> Transmission Failed. Please check your network or try direct email.
                     </motion.div>
                   )}

                   <div className="pt-4 flex justify-end">
                     <button type="submit" disabled={loading}
                       className="flex items-center gap-4 px-12 py-5 bg-[#031835] text-white font-heading font-extrabold rounded-full text-xs uppercase tracking-[0.4em] hover:bg-cyan hover:text-[#031835] transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(0,177,171,0.4)] disabled:opacity-60 disabled:cursor-not-allowed group italic">
                       {loading ? "Transmitting Packet..." : <><Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Dispatch Message</>}
                     </button>
                   </div>
                 </form>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MAP / FACILITY VISUAL ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-[#031835] rounded-[5rem] overflow-hidden relative shadow-2xl h-[500px] border border-[#031835]/10 group">
               <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2600" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" alt="Corporate" />
               <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#031835] to-transparent z-10" />
               
               <div className="absolute bottom-16 left-16 z-20">
                  <span className="inline-flex items-center gap-3 text-cyan text-[11px] font-heading font-extrabold uppercase tracking-[0.4em] border border-cyan/20 px-6 py-2 rounded-full mb-6 italic bg-cyan/5 backdrop-blur-md">
                     <Map className="w-4 h-4"/> Global HQ
                  </span>
                  <h3 className="text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight italic tracking-tighter mb-4">
                     Berlin Research Campus
                  </h3>
                  <p className="text-slate-400 max-w-lg font-light italic text-lg leading-relaxed">
                     Strategically positioned within Europe's elite biotechnology cluster, facilitating rapid pan-continental clinical research.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
