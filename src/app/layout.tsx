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
  title: "Next Gen Capital Insurance Advisor | Germany",
  description: "Modern, independent Next Gen Capital insurance advisory in Germany in 4 languages.",
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
        <script defer data-domain="mourad-versicherung.de" src="https://plausible.io/js/script.js"></script>
        {/* Optional LocalBusiness Schema.org Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "Next Gen Capital Versicherungsberater Next Gen Capital",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Musterstraße 123",
                "addressLocality": "Germany",
                "postalCode": "10115",
                "addressCountry": "DE"
              },
              "telephone": "+49123456789",
              "url": "https://mourad-versicherung.de"
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

