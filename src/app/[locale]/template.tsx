"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  // Animations disabled for site stability
  return (
    <div className="flex-1 w-full opacity-100 translate-y-0">
      {children}
    </div>
  );
}
