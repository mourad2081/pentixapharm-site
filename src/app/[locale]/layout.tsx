import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Pentixapharm AG",
    default: "Pentixapharm AG | Precision Radiopharmaceuticals & Theranostics",
  },
  description: "Pentixapharm is a clinical-stage biopharmaceutical company developing first-in-class CXCR4-directed theranostics for oncology and endocrinology.",
  keywords: ["biotech", "theranostics", "pentixapharm", "CXCR4", "radiopharmaceuticals", "cancer therapy", "precision medicine", "nuclear medicine"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pentixapharm-site.vercel.app/",
    siteName: "Pentixapharm AG",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Pentixapharm AG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pentixapharm AG | Radiopharmaceuticals",
    description: "Developing the next generation of CXCR4 therapies and diagnostics.",
    images: ["/logo.png"],
  },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{locale:string}> }) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Pentixapharm AG",
          "url": "https://pentixapharm.com",
          "logo": "https://pentixapharm.com/logo.png",
          "medicalSpecialty": "Radiology, Oncology, Endocrinology",
          "description": "Pentixapharm addresses severe unmet medical needs in endocrinology and oncology through targeted radiopharmaceuticals.",
          "address": { "@type": "PostalAddress", "streetAddress": "Robert-Koch-Strasse 50", "addressLocality": "Mainz", "postalCode": "55129", "addressCountry": "Germany" }
        }) }} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
