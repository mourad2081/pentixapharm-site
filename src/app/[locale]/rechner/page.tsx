import { PensionCalculator } from "@/components/calculator/PensionCalculator";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentenlücken-Rechner | Next Gen Capital",
  description: "Berechnen Sie Ihre persönliche Rentenlücke und den benötigten monatlichen Sparbetrag in wenigen Klicks.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-warmWhite pb-32 pt-16 relative overflow-hidden">
        {/* Background Decorative Graphic */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-navy/5 -skew-y-3 transform origin-top-left -z-10" />
      <PensionCalculator />
    </main>
  );
}
