"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Video, PhoneCall, MapPin, CheckCircle2, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function BookingContent({ isEn: _ }: { isEn: boolean }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#0EA5A0" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const cards = [
    { icon: Video, title: "Video Call", desc: "30 Min • Zoom / Google Meet", color: "border-blue-100 bg-blue-50", iconColor: "text-blue-600" },
    { icon: PhoneCall, title: "Phone Call", desc: "30 Min • We call you back", color: "border-teal/20 bg-teal/5", iconColor: "text-teal" },
    { icon: MapPin, title: "In-Person Berlin", desc: "60 Min • Office or Café", color: "border-navy/10 bg-navy/5", iconColor: "text-navy" },
  ];

  const checklist = [
    "Detailed analysis of your current insurance situation",
    "Identification of hidden coverage gaps",
    "Concrete, unbiased product recommendations",
    "100% free, transparent, zero sales pressure",
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Header */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,160,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(212,168,83,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container px-4 md:px-8 max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-teal/20 text-teal text-sm font-bold px-5 py-2 rounded-full mb-8 border border-teal/30">
              <Star className="w-4 h-4" /> 100% Free — No Obligation
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
              Book Your Free <br />
              <span className="gradient-text">Initial Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-teal" />
              30 Minutes &nbsp;•&nbsp; Online or In Person in Berlin &nbsp;•&nbsp; Zero Obligation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Dashboard */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="container px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Cal.com Embed */}
          <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-6">
            
            {/* Progress / Step Indicator Visual */}
            <div className="bg-white border border-border shadow-sm p-5 rounded-2xl flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
              {[
                { label: "Date & Time", status: "active" },
                { label: "Your Details", status: "upcoming" },
                { label: "Confirmation", status: "upcoming" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2 relative z-10 bg-white px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors cursor-default ${step.status === 'active' ? 'bg-teal text-white shadow-lg shadow-teal/20' : 'bg-slate-100 text-slate-400'}`}>
                    {i + 1}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${step.status === 'active' ? 'text-teal' : 'text-slate-400'}`}>{step.label}</span>
                </div>
              ))}
            </div>

            <Card className="border-border shadow-2xl rounded-3xl overflow-hidden bg-white">
              <div className="w-full h-[650px] bg-white">
                <Cal
                  calLink="mouradlabadi/30min"
                  style={{ width: "100%", height: "100%", overflow: "auto" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Meeting Types */}
            <div>
              <h3 className="text-lg font-heading font-black text-navy mb-5 uppercase tracking-wide">Consultation Type</h3>
              <div className="space-y-4">
                {cards.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Card className={`border ${c.color} shadow-sm hover:shadow-md transition-shadow`}>
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl bg-white shadow-sm ${c.iconColor}`}>
                          <c.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-navy text-sm">{c.title}</h4>
                          <span className="text-xs font-medium text-muted-foreground">{c.desc}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white border border-border/60 p-7 rounded-3xl shadow-sm">
              <h3 className="text-lg font-heading font-black text-navy mb-6 uppercase tracking-wide">What to Expect</h3>
              <ul className="space-y-5">
                {checklist.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-navy text-sm font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Trust note */}
            <div className="bg-navy text-white p-6 rounded-3xl">
              <p className="text-sm font-medium text-slate-300 leading-relaxed">
                🔒 <strong className="text-white">Privacy guaranteed.</strong> Your data is never shared or sold. Consultation details are protected under German data privacy law (DSGVO).
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
