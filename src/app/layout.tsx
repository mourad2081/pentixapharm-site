import { getLocale } from 'next-intl/server';
import { DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  title: "Next Gen Capital | Independent Financial Advisors Germany",
  description: "Expert financial advisory across Germany — health insurance, pensions, and asset protection in 5 languages: English, German, French, Arabic & Spanish.",
  keywords: ["financial advisor Germany", "PKV health insurance", "pension planning", "independent advisor", "insurance Germany"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const isAr = locale === 'ar';

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Next Gen Capital",
              "description": "Independent financial advisors in Germany — health insurance, pensions, and asset protection in 5 languages.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              },
              "telephone": "+4917670845501",
              "email": "contact@nextgencapital.de",
              "url": "https://nextgencapital.de",
              "areaServed": "DE",
              "availableLanguage": ["English", "German", "French", "Arabic", "Spanish"]
            })
          }}
        />
      </head>
      <body className={`${isAr ? notoArabic.variable : dmSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
