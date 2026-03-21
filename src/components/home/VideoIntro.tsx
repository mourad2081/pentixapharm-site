"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  X, 
  Video, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  ArrowRight,
  User,
  CheckCircle2,
  CalendarCheck
} from "lucide-react";
import { useLocale } from "next-intl";

export function VideoIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    // Show only after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`relative ${isOpen ? 'w-[320px] md:w-[400px]' : 'w-20 md:w-24'} transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
          >
            {/* The Floating Bubble (Closed State) */}
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="group w-full aspect-square rounded-full bg-navy border-4 border-white shadow-2xl relative overflow-hidden group hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-teal/20"
              >
                <div className="absolute inset-0 bg-teal opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* Placeholder for real thumbnail */}
                   <div className="w-full h-full bg-gradient-to-br from-navy to-teal flex items-center justify-center relative">
                      <img src="/mourad-avatar.png" alt="Mourad Labadi" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"  onError={(e) => { e.currentTarget.style.display='none'; }}/>
                      <Play className="absolute h-6 w-6 text-white fill-white animate-pulse group-hover:scale-125 transition-transform" />
                   </div>
                </div>
                {/* Ping animation indicator */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-teal rounded-full border-4 border-white animate-bounce shadow-lg" />
              </button>
            )}

            {/* Expanded Video Card (Open State) */}
            {isOpen && (
              <motion.div
                layoutId="video-card"
                className="bg-navy rounded-[2.5rem] border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden relative"
              >
                {/* Header with Close */}
                <div className="absolute top-4 right-4 z-20">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Video Area */}
                <div className="aspect-[9/16] bg-black relative group bg-navy">
                   {/* In a real scenario, use <video> or <iframe> here */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-navy via-navy to-teal/20">
                      <div className="w-24 h-24 rounded-3xl bg-teal/10 flex items-center justify-center mb-6 border border-teal/20">
                        <Video className="h-12 w-12 text-teal" />
                      </div>
                      <h4 className="text-2xl font-black text-white mb-2 font-heading tracking-tight">"Welcome to your <br /> German future."</h4>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">A message from Mourad</p>
                      
                      <div className="mt-8 space-y-4 w-full">
                         {[
                           "Direct expertise (5+ years)",
                           "English, Deutsch, French, Arabic",
                           "Zero-pressure advice"
                         ].map(txt => (
                           <div key={txt} className="flex items-center gap-3 text-white/80 text-xs font-bold text-left bg-white/5 py-3 px-4 rounded-xl border border-white/5 shadow-inner">
                              <CheckCircle2 className="h-4 w-4 text-teal" /> {txt}
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Video Controls overlay when playing */}
                   <div className="absolute bottom-10 left-0 right-0 px-6 flex items-center justify-between pointer-events-none">
                      <div className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-white/80 font-black uppercase tracking-widest flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live Now
                      </div>
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-black/40"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </button>
                   </div>
                </div>

                {/* Bottom Action Section */}
                <div className="p-8 bg-white text-center">
                   <h5 className="text-navy font-black text-xl mb-4 tracking-tight leading-tight">Ready for a <br /> quick chat?</h5>
                   <div className="flex flex-col gap-3">
                      <a 
                        href={`/${locale}/termin`} 
                        className="w-full h-14 bg-teal text-white rounded-2xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs shadow-xl shadow-teal/20 hover:-translate-y-1 transition-all"
                      >
                         <CalendarCheck className="h-4 w-4" /> Book Discovery Call
                      </a>
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="w-full h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 hover:text-navy transition-all"
                      >
                         Close Message
                      </button>
                   </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
