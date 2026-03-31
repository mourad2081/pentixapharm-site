"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function HelixBackground() {
  const particles = useMemo(() => 
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Animated Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan/10"
          initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0, scale: 0 }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.2, 0.5],
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            width: p.size,
            height: p.size,
            filter: "blur(1px)"
          }}
        />
      ))}

      {/* Subtle DNA Helix SVG Pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="helix" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 10 50 Q 25 20 40 50 T 70 50" stroke="currentColor" fill="none" strokeWidth="0.5" />
            <circle cx="10" cy="50" r="1" fill="currentColor" />
            <circle cx="40" cy="50" r="1" fill="currentColor" />
            <circle cx="70" cy="50" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#helix)" />
      </svg>
    </div>
  );
}
