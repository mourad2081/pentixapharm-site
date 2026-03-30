"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} };
const stagger = { show:{ transition:{ staggerChildren:0.1 } } };

export default function ContactPage() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
      setStatus("ok");
      setForm({name:"",email:"",subject:"",message:""});
    } catch { setStatus("err"); }
    setLoading(false);
  }

  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy2 via-navy to-navy" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-emerald text-sm font-medium uppercase tracking-widest">Get in Touch</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold text-white mt-3 mb-5">{t("title")}</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl text-lg leading-relaxed">{t("desc")}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="md:col-span-2 space-y-6">
              {[
                { icon:Mail, title:t("irTitle"), detail:"ir@pentixapharm.com", href:"mailto:ir@pentixapharm.com" },
                { icon:Mail, title:t("mediaTitle"), detail:"press@pentixapharm.com", href:"mailto:press@pentixapharm.com" },
                { icon:Mail, title:t("careersTitle"), detail:"careers@pentixapharm.com", href:"mailto:careers@pentixapharm.com" },
                { icon:Phone, title:"Phone", detail:"+49 30 94892600", href:"tel:+4930948926" },
                { icon:MapPin, title:"Headquarters", detail:"Robert-Rössle-Str. 10\n13125 Berlin, Germany", href:null },
              ].map((c,i) => (
                <motion.div key={i} variants={fadeUp} className="glass border border-white/8 rounded-2xl p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-emerald/12 rounded-xl shrink-0">
                      <c.icon className="w-4 h-4 text-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">{c.title}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white hover:text-emerald transition-colors text-sm font-medium">{c.detail}</a>
                      ) : (
                        <p className="text-white text-sm font-medium whitespace-pre-line leading-relaxed">{c.detail}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={stagger} className="md:col-span-3">
              <motion.form variants={fadeUp} onSubmit={submit} className="glass border border-white/8 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">{tf("name")}</label>
                    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600"
                      placeholder="Dr. Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">{tf("email")}</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600"
                      placeholder="jane@institution.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">{tf("subject")}</label>
                  <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600"
                    placeholder="Investor Relations Enquiry" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">{tf("message")}</label>
                  <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 focus:bg-white/8 transition-all placeholder-slate-600 resize-none"
                    placeholder="How can we help?" />
                </div>

                {status==="ok" && (
                  <div className="flex items-center gap-2 text-emerald text-sm bg-emerald/10 border border-emerald/20 rounded-xl px-4 py-3">
                    <CheckCircle className="w-4 h-4" /> {tf("success")}
                  </div>
                )}
                {status==="err" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4" /> {tf("error")}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="flex items-center gap-2 px-8 py-3.5 bg-emerald text-navy font-bold rounded-full text-sm hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20 disabled:opacity-60">
                  {loading ? "Sending…" : <><Send className="w-4 h-4" /> {tf("send")}</>}
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
