import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { InvestmentCalculator } from "@/components/calculator/InvestmentCalculator";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const isEn = locale === 'en';
  return {
    title: isEn ? "Investment Returns Calculator - Mourad Labadi" : "Investment-Rechner - Rentabilität & Zinseszins",
    description: isEn 
      ? "Calculate your potential investment returns with our interactive dragging-style compound interest calculator." 
      : "Berechnen Sie Ihr Anlagepotential mit unserem interaktiven Zinseszins-Rechner. Visualisieren Sie Ihr Wachstum.",
  };
}

export default async function InvestmentPage({ params: { locale } }: { params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <main className="min-h-screen pt-32 pb-20 bg-white selection:bg-teal selection:text-white">
        <InvestmentCalculator />
      </main>
    </NextIntlClientProvider>
  );
}
