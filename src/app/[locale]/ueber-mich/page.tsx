import { type Metadata } from "next";
import { TeamSection } from "@/components/home/TeamSection";

export const metadata: Metadata = {
  title: "Our Team | Next Gen Capital — Independent Financial Advisors Germany",
  description: "Meet the Next Gen Capital team of independent financial advisors serving clients across Germany in 5 languages.",
};

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,160,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal/30 bg-teal/10 text-teal text-xs font-black uppercase tracking-[0.2em] mb-6">
            The Team
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter">
            Meet Next Gen <span className="text-teal">Capital</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Independent financial advisors serving clients across Germany with expertise, integrity, and a multilingual approach.
          </p>
        </div>
      </div>
      <TeamSection />
    </main>
  );
}
