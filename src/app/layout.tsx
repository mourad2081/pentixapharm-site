import { getLocale } from 'next-intl/server';
import { DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next Gen Capital | Independent Financial Advisors Germany",
    template: "%s | Next Gen Capital",
  },
  description: "Expert independent financial advisors in Germany. Health insurance (PKV/GKV), pension planning, life insurance, and asset protection in English, German, French, Arabic & Spanish. Free consultation.",
  keywords: [
    "financial advisor Germany", "independent financial advisor", "PKV health insurance Germany",
    "pension planning Germany", "expat insurance Germany", "private health insurance PKV",
    "Rentenversicherung", "Krankenversicherung", "life insurance Germany", "Finanzberater Deutschland",
    "Next Gen Capital", "health insurance specialist Germany", "insurance advisory multilingual"
  ],
  authors: [{ name: "Next Gen Capital" }],
  creator: "Next Gen Capital",
  publisher: "Next Gen Capital",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_DE",
    alternateLocale: ["de_DE", "fr_FR", "es_ES", "ar_SA"],
    siteName: "Next Gen Capital",
    title: "Next Gen Capital | Independent Financial Advisors Germany",
    description: "Expert financial advisory in Germany in 5 languages. Health insurance, pensions, and asset protection.",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Next Gen Capital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Gen Capital | Independent Financial Advisors Germany",
    description: "Expert financial advisory in Germany in 5 languages.",
  },
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
        <link rel="canonical" href="https://nextgencapital.de" />
        <meta name="theme-color" content="#0A1628" />
        {/* Structured data for AI / search bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FinancialService",
                  "@id": "https://nextgencapital.de/#org",
                  "name": "Next Gen Capital",
                  "description": "Independent financial advisors in Germany offering health insurance, pension planning, and asset protection in 5 languages.",
                  "url": "https://nextgencapital.de",
                  "telephone": "+4917670845501",
                  "email": "contact@nextgencapital.de",
                  "areaServed": { "@type": "Country", "name": "Germany" },
                  "availableLanguage": ["English", "German", "French", "Arabic", "Spanish"],
                  "serviceType": ["Health Insurance Advisory", "Pension Planning", "Life Insurance", "Asset Protection"],
                  "employee": [
                    {
                      "@type": "Person",
                      "name": "Mourad Labadi",
                      "jobTitle": "Senior Financial Advisor",
                      "knowsLanguage": ["English", "French", "German", "Arabic"]
                    },
                    {
                      "@type": "Person",
                      "name": "Oscar Sunderland",
                      "jobTitle": "Financial Advisor",
                      "telephone": "+4917670845501",
                      "email": "oscar.sunderland@nextgencapital.de",
                      "knowsLanguage": ["English", "German"]
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Is health insurance mandatory in Germany?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Yes, health insurance is mandatory for all residents in Germany, required for residence permits and long-term visas." }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the difference between PKV and GKV?",
                      "acceptedAnswer": { "@type": "Answer", "text": "GKV is public statutory health insurance, while PKV is private health insurance offering premium coverage, faster specialist access, and potentially lower costs for high earners." }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does a consultation cost?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Your initial consultation is 100% free and without any obligation. We are compensated by providers, so you get expert advice at no cost." }
                    }
                  ]
                }
              ]
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
