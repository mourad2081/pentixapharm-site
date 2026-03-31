import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Pentixapharm AG",
    default: "Pentixapharm AG | Precision Radiopharmaceuticals & Theranostics",
  },
  description: "Pentixapharm is a clinical-stage biopharmaceutical company developing first-in-class CXCR4-directed theranostics for oncology and endocrinology.",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{locale:string}> }) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-p-20">
      <body className={`${inter.variable} ${outfit.variable} font-sans selection:bg-[#00BDD5] selection:text-white`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
