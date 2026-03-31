"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe2, 
  Building2, ChevronRight, Fingerprint, Map, Sparkles, Activity
} from "lucide-react";
import AnimatedBg from "@/components/visual/AnimatedBackground";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

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
    <div className="bg-[#F8FAFC] dark:bg-[#0a0b16] min-h-screen text-slate-900 dark:text-white transition-colors duration-700 pb-32 selection:bg-[#00BDD5] selection:text-white">
      
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-white dark:bg-[#0a0b16] border-b border-slate-100 dark:border-white/5 transition-colors">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.4] dark:opacity-[0.25] transition-opacity">
           <img src={`/${HERO_BG}`} className="w-full h-full object-cover scale-105 animate-slow-zoom blur-[2px]" alt="Global Contact Background" />
           <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white dark:from-[#0a0b16] via-white/80 dark:via-[#0a0b16]/80 to-transparent transition-colors" />
           <AnimatedBg />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 text-[#00BDD5] text-[10px] font-heading font-extrabold uppercase tracking-[0.7em] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 px-12 py-5 rounded-full mb-12 shadow-2xl italic mt-10 transition-colors">
              <Globe2 className="w-5 h-5 animate-spin-slow" /> Global Correspondence
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-7xl md:text-[11rem] font-heading font-extrabold text-[#001533] dark:text-white mb-12 italic tracking-tighter leading-[0.7] drop-shadow-sm transition-colors">
              Initiate <br/><span className="text-[#00BDD5]">Dialogue.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 text-2xl md:text-4xl leading-relaxed italic max-w-4xl mx-auto font-light border-x border-slate-100 dark:border-white/5 px-12 transition-colors">
               Connecting pharmaceutical allies, institutional investors, and clinical networks with our core global operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE CONTACT CHANNELS ───────────────────────────────────────────── */}
      <section className="py-48 relative z-20 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-32">
            
            {/* Direct Channels */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="lg:col-span-5 space-y-12">
              <div className="mb-24">
                 <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter mb-8 transition-colors leading-none">Direct <br/> <span className="text-[#00BDD5]">Channels.</span></h2>
                 <p className="text-slate-500 dark:text-slate-400 font-light italic text-xl leading-relaxed transition-colors">Our operational desks are monitored continuously to ensure high-fidelity responses across all clinical and corporate vectors.</p>
              </div>

              {[
                { icon:Building2, title:"Investor Relations", detail:"ir@pentixapharm.com", tag:"Equities & Financials", href:"mailto:ir@pentixapharm.com" },
                { icon:Mail, title:"Corporate Communications", detail:"press@pentixapharm.com", tag:"Media Relations", href:"mailto:press@pentixapharm.com" },
                { icon:Fingerprint, title:"Careers & Talent Hub", detail:"careers@pentixapharm.com", tag:"Institutional Growth", href:"mailto:careers@pentixapharm.com" },
                { icon:Phone, title:"Berlin Headquarters Desk", detail:"+49 30 94892600", tag:"Operational Front", href:"tel:+493094892600" },
              ].map((c,i) => (
                <motion.div key={i} variants={fadeUp} 
                  className="group flex items-center gap-10 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[4rem] p-12 hover:bg-[#001533] dark:hover:bg-[#00BDD5] transition-all duration-700 shadow-xl hover:shadow-4xl cursor-pointer"
                  onClick={() => c.href && (window.location.href = c.href)}
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-slate-50 dark:bg-black/20 group-hover:bg-white/10 rounded-[2rem] shrink-0 transition-all shadow-sm border border-slate-100 dark:border-white/5">
                    <c.icon className="w-8 h-8 text-[#001533] dark:text-[#00BDD5] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-[#00BDD5] group-hover:text-white/70 font-extrabold uppercase tracking-widest mb-2 italic transition-colors p-1">{c.tag}</p>
                    <p className="text-3xl font-heading font-extrabold text-[#001533] dark:text-white group-hover:text-white italic tracking-tighter mb-2 transition-colors">{c.title}</p>
                    <p className="text-[15px] font-light text-slate-500 dark:text-slate-400 group-hover:text-white/80 italic flex items-center gap-3 transition-colors">
                       {c.detail} <ChevronRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="mt-24 bg-[#00BDD5]/5 dark:bg-[#00BDD5]/10 border-l-8 border-[#00BDD5] p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group transition-all">
                 <div className="relative z-10 flex flex-col gap-8">
                    <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-xl transition-colors border border-slate-100 dark:border-white/10"><MapPin className="w-8 h-8 text-[#00BDD5]"/></div>
                    <div>
                       <h3 className="text-3xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter mb-6 transition-colors">Corporate Headquarters</h3>
                       <p className="text-lg font-light text-slate-500 dark:text-slate-300 leading-relaxed italic transition-colors">Robert-Rössle-Str. 10<br/>13125 Berlin, Germany<br/><br/>Positioned within an elite European biotech ecosystem for rapid clinical and logistics integration.</p>
                    </div>
                 </div>
              </motion.div>

            </motion.div>

            {/* Strategic Inquiry Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="lg:col-span-7 mt-20 lg:mt-0">
              <motion.div variants={fadeUp} className="bg-white dark:bg-[#121428] rounded-[6rem] p-16 lg:p-24 shadow-4xl border border-slate-100 dark:border-white/10 relative overflow-hidden transition-colors">
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00BDD5]/10 to-transparent opacity-40 translate-x-1/2 -translate-y-1/2" />
                 
                 <div className="mb-20 relative z-10">
                    <h3 className="text-6xl md:text-8xl font-heading font-extrabold text-[#001533] dark:text-white italic tracking-tighter mb-10 transition-colors leading-[0.8]">Secure <br/><span className="text-[#00BDD5]">Manifest.</span></h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light italic text-2xl leading-relaxed transition-colors border-l-4 border-[#00BDD5] pl-8">Submit clinical, investor, or institutional proposals directly into our secure data pipeline.</p>
                 </div>

                 <form onSubmit={submit} className="space-y-12 relative z-10">
                   
                   <div className="flex flex-col space-y-4">
                      <label className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-slate-400 italic ml-8">Inquiry Sector</label>
                      <div className="relative">
                        <select 
                           value={form.department} 
                           onChange={e=>setForm({...form,department:e.target.value})}
                           className="w-full bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/10 rounded-[2.5rem] px-10 py-7 text-[#001533] dark:text-white font-light text-lg appearance-none outline-none focus:border-[#00BDD5] focus:bg-white dark:focus:bg-black/40 transition-all shadow-inner italic transition-colors"
                        >
                           <option value="investor">Institutional Relations</option>
                           <option value="partnering">Clinical Co-Development</option>
                           <option value="medical">Medical Affairs Hub</option>
                           <option value="media">Global Communications</option>
                           <option value="other">Institutional Administration</option>
                        </select>
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronRight className="w-6 h-6 text-slate-400 rotate-90" /></div>
                      </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-12">
                     <div className="space-y-4">
                       <label className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-slate-400 italic ml-8">Designation</label>
                       <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required
                         className="w-full bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/10 rounded-[2.5rem] px-10 py-7 text-[#001533] dark:text-white font-light text-lg outline-none focus:border-[#00BDD5] focus:bg-white dark:focus:bg-black/40 transition-all shadow-inner italic transition-colors"
                         placeholder="Entity Name or Lead PI" />
                     </div>
                     <div className="space-y-4">
                       <label className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-slate-400 italic ml-8">Secure Email</label>
                       <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required
                         className="w-full bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/10 rounded-[2.5rem] px-10 py-7 text-[#001533] dark:text-white font-light text-lg outline-none focus:border-[#00BDD5] focus:bg-white dark:focus:bg-black/40 transition-all shadow-inner italic transition-colors"
                         placeholder="secure@entity.com" />
                     </div>
                   </div>

                   <div className="space-y-4">
                     <label className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-slate-400 italic ml-8">Subject</label>
                     <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required
                       className="w-full bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/10 rounded-[2.5rem] px-10 py-7 text-[#001533] dark:text-white font-light text-lg outline-none focus:border-[#00BDD5] focus:bg-white dark:focus:bg-black/40 transition-all shadow-inner italic transition-colors"
                       placeholder="Clinical Strategy Alignment" />
                   </div>

                   <div className="space-y-4">
                     <label className="text-[11px] font-extrabold uppercase tracking-[0.5em] text-slate-400 italic ml-8">Synthesis Detail</label>
                     <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={7}
                       className="w-full bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/10 rounded-[3rem] px-10 py-8 text-[#001533] dark:text-white font-light text-lg outline-none focus:border-[#00BDD5] focus:bg-white dark:focus:bg-black/40 transition-all shadow-inner resize-none leading-relaxed italic transition-colors"
                       placeholder="Detail the collaborative scope..." />
                   </div>

                   {status==="ok" && (
                     <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="flex items-center gap-6 text-[#00BDD5] text-lg bg-[#00BDD5]/10 border border-[#00BDD5]/20 rounded-[3rem] px-10 py-8 font-extrabold italic shadow-xl">
                       <CheckCircle className="w-8 h-8 text-[#00BDD5]" /> Data Transmission Successful.
                     </motion.div>
                   )}
                   {status==="err" && (
                     <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="flex items-center gap-6 text-red-500 text-lg bg-red-500/10 border border-red-500/20 rounded-[3rem] px-10 py-8 font-extrabold italic shadow-xl">
                       <AlertCircle className="w-8 h-8 text-red-500" /> Transmission Protocol Failure.
                     </motion.div>
                   )}

                   <div className="pt-10">
                     <button type="submit" disabled={loading}
                       className="w-full flex items-center justify-center gap-8 px-16 py-10 bg-[#001533] dark:bg-white text-white dark:text-[#001533] font-heading font-extrabold rounded-[2.5rem] text-[13px] uppercase tracking-[0.6em] hover:bg-[#00BDD5] dark:hover:bg-[#00BDD5] dark:hover:text-white transition-all duration-700 shadow-4xl italic group disabled:opacity-50">
                       {loading ? "Transmitting Manifesto..." : <><Send className="w-6 h-6 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" /> Dispatch Request</>}
                     </button>
                   </div>
                 </form>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── GLOBAL HQ VISUAL ────────────────────────────────────────────────── */}
      <section className="py-48 bg-white dark:bg-[#0a0b16] transition-colors duration-700">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-[#001533] rounded-[6rem] overflow-hidden relative shadow-4xl h-[600px] border border-white/5 group">
               <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2600" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 blur-[1px]" alt="Corporate HQ" />
               <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#031835] via-[#031835]/60 to-transparent z-10" />
               
               <div className="absolute bottom-20 left-20 z-20">
                  <span className="inline-flex items-center gap-4 text-[#00BDD5] text-[12px] font-heading font-extrabold uppercase tracking-[0.7em] border border-[#00BDD5]/30 px-10 py-4 rounded-full mb-10 italic bg-[#00BDD5]/10 backdrop-blur-3xl shadow-2xl">
                     <Map className="w-6 h-6"/> Institutional Global Hub
                  </span>
                  <h3 className="text-6xl lg:text-8xl font-heading font-extrabold text-white leading-none italic tracking-tighter mb-8 drop-shadow-2xl">
                     Berlin Science Precinct.
                  </h3>
                  <p className="text-slate-300 max-w-3xl font-light italic text-2xl leading-relaxed">
                     Our headquarters are positioned within Europe's primary biotechnology cluster, ensuring rapid clinical acceleration across the global scientific network.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
