"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HelixBackground() {
  const [dots, setDots] = useState<{ x: number, y: number, size: number, duration: number }[]>([]);

  useEffect(() => {
    // Generate random floating dots/particles
    const newDots = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Mesh Gradient */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-cyan/5 via-transparent to-transparent opacity-60 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gradient-radial from-teal/5 via-transparent to-transparent opacity-60 blur-[100px]" />
      
      {/* Animated Helix Pattern */}
      <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="helix" width="100" height="100" patternUnits="userSpaceOnUse">
             <path d="M 0 50 Q 25 0 50 50 Q 75 100 100 50" fill="none" stroke="#031835" strokeWidth="1" />
             <path d="M 0 50 Q 25 100 50 50 Q 75 0 100 50" fill="none" stroke="#00A3E0" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#helix)" />
      </svg>

      {/* Floating Particles */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan rounded-full opacity-20 shadow-glow"
          initial={{ left: `${dot.x}%`, top: `${dot.y}%`, scale: 0 }}
          animate={{
            top: [`${dot.y}%`, `${(dot.y + 15) % 100}%`, `${dot.y}%`],
            left: [`${dot.x}%`, `${(dot.x + 10) % 100}%`, `${dot.x}%`],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: dot.size, height: dot.size }}
        />
      ))}
      
      {/* Moving Helix Lines (Subtle) */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ backgroundImage: 'radial-gradient(circle, #00A3E0 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
    </div>
  );
}
