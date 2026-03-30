import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

const inter = Inter({ subsets:["latin"], variable:"--font-inter", display:"swap" });
const spaceGrotesk = Space_Grotesk({ subsets:["latin"], variable:"--font-space", display:"swap" });

export const metadata: Metadata = {
  title:{ default:"Pentixapharm | Precision Radiopharmaceuticals", template:"%s | Pentixapharm" },
  description:"Pentixapharm Holding AG — advanced clinical-stage biotech developing CXCR4-targeted radiopharmaceuticals. Frankfurt Prime Standard (PTP). Phase 3-ready PentixaFor for primary aldosteronism.",
  keywords:["Pentixapharm","radiopharmaceuticals","CXCR4","PentixaFor","PentixaTher","theranostics","oncology","primary aldosteronism","Frankfurt Stock Exchange","PTP","ISIN DE000A40AEG0"],
  robots:{ index:true, follow:true },
  openGraph:{ type:"website", siteName:"Pentixapharm", title:"Pentixapharm | Precision Radiopharmaceuticals" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await getLocale()) || "en";
  return (
    <html lang={locale} className="scroll-smooth">
      <head><meta name="theme-color" content="#071429" /></head>
      <body className={inter.variable + " " + spaceGrotesk.variable + " font-sans antialiased"}>
        {children}
      </body>
    </html>
  );
}
