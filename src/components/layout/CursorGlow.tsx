"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  return (
    <motion.div
      animate={{ x: pos.x - 192, y: pos.y - 192, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.5 }}
      className="pointer-events-none fixed z-[200] top-0 left-0 w-96 h-96 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(14,165,160,0.08) 0%, transparent 70%)",
      }}
    />
  );
}
