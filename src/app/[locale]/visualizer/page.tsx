"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Sparkles, ArrowLeft, Image as ImageIcon, Send, History, Check, Shield, Info, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const Visuals3D = dynamic(() => import("@/components/home/Visuals3D").then(mod => mod.Visuals3D), { ssr: false });

const SAMPLE_IMAGES = [
  "/visuals/sample1.png",
  "/visuals/sample2.png",
  "/visuals/sample3.png"
];

const PROMPTS = [
  "Futuristic safe city with green parks and golden shields",
  "A happy family enjoying retirement in a modern glass villa",
  "A concept art of financial growth as a glowing golden tree",
  "A secure digital vault protecting a futuristic family home"
];

export default function VisualizerPage() {
  const t = useTranslations("Visualizer");
  const locale = useLocale();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setResult(null);
    
    // Simulate generation delay
    setTimeout(() => {
      const randomSample = SAMPLE_IMAGES[Math.floor(Math.random() * SAMPLE_IMAGES.length)];
      setResult(randomSample);
      setHistory(prev => [randomSample, ...prev]);
      setIsGenerating(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-navy text-white overflow-hidden pt-24">
      {/* 3D Dynamic Background */}
      <Visuals3D />
      
      {/* Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Input & Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-teal font-bold hover:gap-3 transition-all mb-8">
                <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
                {t('btnBack')}
              </Link>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-teal/30 text-teal text-xs font-black uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Next-Gen Vision AI
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-[1.1]">
                {t('title')} <br />
                <span className="gradient-text">{t('subtitle')}</span>
              </h1>
              
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                {t('desc')}
              </p>
            </motion.div>

            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal/20 via-blue-500/20 to-teal/20 rounded-[2.6rem] blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 block">
                    {t('promptLabel')}
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('placeholder')}
                    className="w-full h-32 bg-navy/50 border border-white/10 rounded-2xl p-5 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal/50 transition-all resize-none text-lg font-medium"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="flex-grow h-16 bg-teal hover:bg-teal/90 text-white rounded-2xl text-lg font-bold shadow-xl shadow-teal/20 transition-all disabled:opacity-50 disabled:bg-slate-700"
                  >
                    {isGenerating ? (
                      <span className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        {t('generating')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        {t('generateBtn')}
                      </span>
                    )}
                  </Button>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{t('tryThese')}</p>
                  <div className="flex flex-wrap gap-2">
                    {PROMPTS.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setPrompt(p)}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-teal/20 hover:border-teal/30 transition-all"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <AnimatePresence>
              {showDisclaimer && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-navy/50 backdrop-blur-md rounded-2xl p-5 border border-white/5 flex gap-4 relative"
                >
                  <Info className="w-6 h-6 text-teal shrink-0" />
                  <p className="text-sm text-slate-400 leading-relaxed pr-8">
                    {t('disclaimer')}
                  </p>
                  <button onClick={() => setShowDisclaimer(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
                    <Check className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Visualization Output */}
          <div className="w-full lg:w-1/2">
            <motion.div
              layout
              className="relative aspect-square w-full glass rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(10,22,40,0.5)] flex items-center justify-center p-4 group"
            >
              {isGenerating ? (
                <div className="flex flex-col items-center gap-6">
                  <div className="relative w-24 h-24">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-4 border-t-teal border-r-transparent border-b-teal border-l-transparent"
                    />
                    <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-teal animate-pulse" />
                  </div>
                  <p className="font-heading font-black text-2xl animate-pulse text-teal tracking-tight">{t('generating')}</p>
                </div>
              ) : result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full h-full rounded-[2rem] overflow-hidden group/img"
                >
                  <Image
                    src={result}
                    alt="AI Generated Future Vision"
                    fill
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                        <Shield className="w-5 h-5 text-teal" />
                      </div>
                      <span className="font-bold text-sm">Protected Vision</span>
                    </div>
                    <button className="p-3 rounded-full bg-teal text-white shadow-lg hover:scale-110 transition-transform">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center gap-4 text-slate-500 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <ImageIcon className="w-10 h-10 opacity-30" />
                  </div>
                  <p className="text-xl font-bold font-heading tracking-tight opacity-40">Awaiting your prompt...</p>
                </div>
              )}
            </motion.div>

            {/* Gallery / History */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-black">{t('galleryTitle')}</h3>
                <History className="w-5 h-5 text-teal/40" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {(history.length > 0 ? history.slice(0, 3) : SAMPLE_IMAGES).map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="aspect-square rounded-2xl overflow-hidden glass border border-white/10 cursor-pointer relative group"
                    onClick={() => setResult(img)}
                  >
                    <Image src={img} alt={`History ${i}`} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-teal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
