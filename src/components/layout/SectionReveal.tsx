"use client";

// Temporarily disabled animations to restore site stability
export const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <div className="reveal-section opacity-100">
    {children}
  </div>
);
