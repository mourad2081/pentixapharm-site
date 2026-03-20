"use client";
import { motion, useScroll } from "framer-motion";

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-1 bg-teal origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
