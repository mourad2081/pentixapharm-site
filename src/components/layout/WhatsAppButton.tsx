"use client";
import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "491234567890"; // Replace with real number
  const message = encodeURIComponent("Hi Mourad! I found your website and I'd like to learn more about insurance options for my situation.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3 translate-y-0 opacity-100 transition-all duration-500">
      {/* Popup card */}
      {isOpen && (
        <div
          className="bg-white rounded-3xl shadow-2xl shadow-black/20 p-6 w-72 border border-border transition-all animate-in zoom-in fade-in"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.507 5.824L.057 23.1a.75.75 0 001.006.97l5.479-1.748A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
            </div>
            <div>
              <p className="font-bold text-navy text-sm">Next Gen Capital</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                <span className="text-xs text-slate-500">Online now</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 mb-4">
            <p className="text-sm text-navy leading-relaxed">
              👋 Hi! I'm Mourad. Ask me anything about insurance in Germany — I answer in <strong>English, German, French or Arabic</strong>.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bb5a] text-white font-bold py-3.5 rounded-2xl transition-colors shadow-lg shadow-[#25D366]/30"
          >
            Start Chat
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowPulse(false); }}
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      >
        {/* Pulse ring */}
        {showPulse && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping [animation-delay:0.5s]" />
          </>
        )}
        {isOpen ? (
          <div className="animate-in fade-in transition-all">
            <X className="w-7 h-7" />
          </div>
        ) : (
          <div className="animate-in fade-in transition-all">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.507 5.824L.057 23.1a.75.75 0 001.006.97l5.479-1.748A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
          </div>
        )}
      </button>
    </div>
  );
}

