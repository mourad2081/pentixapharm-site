import { PKVCalculator } from "@/components/calculator/PKVCalculator";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "PKV vs. GKV Vergleich | Next Gen Capital",
  description: "Berechnen Sie Ihre persönlichen Krankenversicherungskosten im Systemvergleich: PKV oder GKV.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-warmWhite pb-32 pt-16 relative overflow-hidden">
        {/* Background Decorative Graphic */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-teal/5 -skew-y-3 transform origin-top-left -z-10" />
      <PKVCalculator />
    </main>
  );
}
