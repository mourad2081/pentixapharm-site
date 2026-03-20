"use client";
import React from "react";

export function ScrollProgress() {
  const [mounted, setMounted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) {
        setProgress((scrolled / max) * 100);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-teal z-[100] origin-left transition-transform duration-75"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}
