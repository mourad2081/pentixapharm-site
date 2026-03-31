"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const particles = useMemo(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 150 + 50,
      duration: Math.random() * 40 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.03 + 0.01
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-color-burn">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan"
          initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0, scale: 0.8 }}
          animate={{
            y: ["0%", "100%", "0%"],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            x: [`${p.x}%`, `${p.x + (Math.random() * 40 - 20)}%`, `${p.x}%`]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            width: p.size,
            height: p.size,
            filter: "blur(60px)",
            willChange: "transform, opacity"
          }}
        />
      ))}
    </div>
  );
}
