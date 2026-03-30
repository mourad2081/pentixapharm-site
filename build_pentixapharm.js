
const fs = require('fs');
const path = require('path');
const B = __dirname;
const w = (f, c) => { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); };

// ── next.config.mjs ──────────────────────────────────────────────────────────
w('next.config.mjs',`import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
const nextConfig = { typescript:{ignoreBuildErrors:true}, eslint:{ignoreDuringBuilds:true}, images:{unoptimized:true} };
export default withNextIntl(nextConfig);
`);

// ── .env.local ────────────────────────────────────────────────────────────────
w('.env.local',`ADMIN_PASSWORD=PentixaAdmin2026!\nNEXT_PUBLIC_SITE_URL=https://pentixapharm-site.vercel.app\n`);

// ── tailwind.config.ts ────────────────────────────────────────────────────────
w('tailwind.config.ts',`import type { Config } from "tailwindcss";
const config: Config = {
  darkMode:["class"],
  content:["./src/**/*.{ts,tsx}"],
  theme:{extend:{
    colors:{
      background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",
      navy:"#071429",navy2:"#0B1D3A",navy3:"#1E3250",
      emerald:"#00B894",emeraldDark:"#00997A",cyan:"#00CEC9",gold:"#FDCB6E",
      card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"},
      popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},
      primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},
      secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},
      muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},
      accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},
      destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},
      border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",
    },
    borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"},
    fontFamily:{sans:["var(--font-inter)","sans-serif"],heading:["var(--font-space)","sans-serif"]},
    keyframes:{
      marquee:{"0%":{transform:"translateX(0)"},"100%":{transform:"translateX(-50%)"}},
      float:{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-14px)"}},
      pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:"0.5"}},
      "gradient-x":{"0%,100%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"100% 50%"}},
      "fade-up":{"0%":{opacity:"0",transform:"translateY(24px)"},"100%":{opacity:"1",transform:"translateY(0)"}},
      "spin-slow":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},
    },
    animation:{
      marquee:"marquee 50s linear infinite",float:"float 7s ease-in-out infinite",
      "gradient-x":"gradient-x 8s ease infinite","fade-up":"fade-up 0.5s ease forwards",
      "spin-slow":"spin-slow 25s linear infinite",
    },
  }},
  plugins:[require("tailwindcss-animate")],
};
export default config;
`);

// ── src/i18n.ts ───────────────────────────────────────────────────────────────
w('src/i18n.ts',`import {getRequestConfig} from 'next-intl/server';
export default getRequestConfig(async ({locale})=>({
  messages:(await import('../messages/'+locale+'.json')).default,
}));
`);

// ── src/middleware.ts ─────────────────────────────────────────────────────────
w('src/middleware.ts',`import createMiddleware from 'next-intl/middleware';
export default createMiddleware({locales:['en','de'],defaultLocale:'en'});
export const config={matcher:['/((?!api|admin|_next|.*\\..*).*)']};
`);

// ── messages/en.json ──────────────────────────────────────────────────────────
w('messages/en.json', JSON.stringify({
  nav:{home:"Home",about:"About",pipeline:"Pipeline",science:"Science",news:"News",investors:"Investors",contact:"Contact",stats:"Stats",contactIR:"Contact IR"},
  footer:{tagline:"Advancing precision radiopharmaceuticals for a better tomorrow.",address:"Robert-Rössle-Str. 10, 13125 Berlin, Germany",copyright:"© 2026 Pentixapharm Holding AG. All rights reserved.",stock:"Frankfurt Prime Standard · Ticker: PTP · ISIN: DE000A40AEG0"},
  home:{heroTag:"Frankfurt Prime Standard · PTP",heroTitle:"Improving Lives Through Precision Radiopharmaceuticals",heroSub:"CXCR4-targeted theranostics for oncology, cardiology and beyond. Two Phase-III-ready candidates. 2,600+ patients imaged.",ctaPipeline:"Explore Pipeline",ctaIR:"Investor Relations",stat1val:"2,600+",stat1lab:"Patients Imaged",stat2val:"150+",stat2lab:"Scientific Publications",stat3val:"2",stat3lab:"Phase-3-Ready Candidates",stat4val:"2019",stat4lab:"Founded",pipelineTitle:"Our Clinical Pipeline",pipelineDesc:"Two targeted CXCR4 compounds advancing through clinical development — one diagnostic, one therapeutic — enabling a unique theranostic approach.",newsTitle:"Latest News",newsDesc:"Stay informed on our clinical milestones, regulatory progress and corporate updates.",aboutTitle:"Expanding the Boundaries of Radiopharmaceuticals",aboutDesc:"Founded in 2019, Pentixapharm is a clinical-stage biotech headquartered in Berlin. We are developing first-in-class CXCR4-targeted radiopharmaceuticals designed to transform patient care across oncology and cardiovascular disease.",aboutBtn:"Meet Our Team",investorTitle:"Investor Relations",ctaTitle:"Join Us in Transforming Precision Medicine",ctaDesc:"We are pioneering CXCR4-directed theranostics to address high unmet medical needs and improve patient outcomes worldwide.",ctaBtn:"Contact Investor Relations"},
  pipeline:{title:"Clinical Pipeline",desc:"Our pipeline is anchored by CXCR4-targeted compounds in clinical development, with a next-generation antibody platform targeting CD24 in preclinical stage.",cxcr4Title:"CXCR4 as Target Molecule",cxcr4Desc:"CXCR4 is a G-protein-coupled receptor overexpressed in more than 20 malignant cancers and benign adrenal tumors. Its dual diagnostic and therapeutic potential makes it a first-in-class target for next-generation radiopharmaceuticals.",theranosticTitle:"The Theranostic Approach",theranosticDesc:"Using the same molecular target for both diagnostic imaging and therapeutic treatment enables personalised, precision medicine. PentixaFor identifies patients; PentixaTher targets and destroys CXCR4-expressing cells.",litTitle:"Literature & Evidence",litStat1:"100+",litLab1:"Publications on [68Ga]Ga-PentixaFor",litStat2:"2,600+",litLab2:"Patients Imaged",litStat3:"474+",litLab3:"PA Patients Diagnosed (since 2024)",litStat4:"20+",litLab4:"Investigator-Initiated Studies"},
  about:{title:"About Pentixapharm",desc:"We are a clinical-stage biotech based in Berlin, Germany, developing first-in-class radiopharmaceuticals to transform patient care in oncology and cardiovascular disease.",missionTitle:"Our Mission",missionDesc:"To develop precision diagnostics and therapeutics that improve patient outcomes in areas of high unmet medical need by unlocking the full potential of CXCR4-targeted radiopharmaceuticals.",historyTitle:"Our Story",historyDesc:"Pentixapharm was founded in 2019 as a joint venture between Scintomics GmbH and 1717 Life Science Ventures GmbH. We went public on the Frankfurt Stock Exchange in October 2024, raising €19.9 million to advance our clinical pipeline.",teamTitle:"Leadership Team",boardTitle:"Supervisory Board",careerTitle:"Join Our Team",careerDesc:"We are looking for passionate individuals ready to help shape the future of pharmaceutical science.",careerEmail:"careers@pentixapharm.com"},
  investors:{title:"Investor Relations",desc:"Pentixapharm Holding AG is listed on the Frankfurt Stock Exchange under the ticker PTP. We are committed to transparent and timely communication with our investors.",stockTitle:"Stock Information",finTitle:"Key Financials",calTitle:"Financial Calendar",irContact:"ir@pentixapharm.com",irPhone:"+49 30 94892600"},
  news:{title:"News & Press Releases",desc:"The latest updates on our clinical milestones, regulatory progress, and corporate developments.",categories:{all:"All",clinical:"Clinical",corporate:"Corporate",financial:"Financial",regulatory:"Regulatory"},readMore:"Read More →"},
  contact:{title:"Contact Us",desc:"We welcome enquiries from patients, physicians, investors and media.",form:{name:"Full Name",email:"Email Address",subject:"Subject",message:"Message",send:"Send Message",success:"Message sent successfully!",error:"Something went wrong. Please try again."},irTitle:"Investor Relations",mediaTitle:"Media Enquiries",careersTitle:"Careers"},
  stats:{title:"Research & Development Overview",desc:"Tracking our clinical progress, scientific output, and operational metrics."},
},null,2));

// ── messages/de.json ──────────────────────────────────────────────────────────
w('messages/de.json', JSON.stringify({
  nav:{home:"Startseite",about:"Über uns",pipeline:"Pipeline",science:"Wissenschaft",news:"Neuigkeiten",investors:"Investoren",contact:"Kontakt",stats:"Statistiken",contactIR:"IR-Kontakt"},
  footer:{tagline:"Fortschrittliche Präzisions-Radiopharmazeutika für eine bessere Zukunft.",address:"Robert-Rössle-Str. 10, 13125 Berlin, Deutschland",copyright:"© 2026 Pentixapharm Holding AG. Alle Rechte vorbehalten.",stock:"Frankfurt Prime Standard · Ticker: PTP · ISIN: DE000A40AEG0"},
  home:{heroTag:"Frankfurt Prime Standard · PTP",heroTitle:"Verbesserung des Patientenlebens durch Präzisions-Radiopharmazeutika",heroSub:"CXCR4-gerichtete Theranostik für Onkologie, Kardiologie und darüber hinaus. Zwei Phase-3-reife Kandidaten. Über 2.600 abgebildete Patienten.",ctaPipeline:"Pipeline erkunden",ctaIR:"Investor Relations",stat1val:"2.600+",stat1lab:"Abgebildete Patienten",stat2val:"150+",stat2lab:"Wissenschaftliche Publikationen",stat3val:"2",stat3lab:"Phase-3-bereite Kandidaten",stat4val:"2019",stat4lab:"Gegründet",pipelineTitle:"Unsere klinische Pipeline",pipelineDesc:"Zwei gezielte CXCR4-Verbindungen in der klinischen Entwicklung — eine diagnostische, eine therapeutische — ermöglichen einen einzigartigen theranostischen Ansatz.",newsTitle:"Aktuelle Neuigkeiten",newsDesc:"Bleiben Sie über unsere klinischen Meilensteine, regulatorischen Fortschritte und Unternehmensupdates informiert.",aboutTitle:"Die Grenzen der Radiopharmazeutika erweitern",aboutDesc:"Gegründet 2019 ist Pentixapharm ein klinisches Biotech-Unternehmen mit Sitz in Berlin. Wir entwickeln First-in-Class CXCR4-gerichtete Radiopharmazeutika.",aboutBtn:"Unser Team",investorTitle:"Investor Relations",ctaTitle:"Gestalten Sie mit uns die Präzisionsmedizin",ctaDesc:"Wir entwickeln CXCR4-gerichtete Theranostika, um hohe medizinische Bedürfnisse zu adressieren.",ctaBtn:"IR-Kontakt"},
  pipeline:{title:"Klinische Pipeline",desc:"Unsere Pipeline umfasst CXCR4-gerichtete Verbindungen in der klinischen Entwicklung sowie eine CD24-Antikörperplattform in der präklinischen Phase.",cxcr4Title:"CXCR4 als Zielmolekül",cxcr4Desc:"CXCR4 ist ein G-Protein-gekoppelter Rezeptor, der in mehr als 20 malignen Krebsarten und gutartigen Nebennierentumoren überexprimiert wird.",theranosticTitle:"Der Theranostik-Ansatz",theranosticDesc:"Die Nutzung desselben molekularen Ziels für Diagnostik und Therapie ermöglicht personalisierte Präzisionsmedizin.",litTitle:"Literatur & Evidenz",litStat1:"100+",litLab1:"Publikationen zu [68Ga]Ga-PentixaFor",litStat2:"2.600+",litLab2:"Abgebildete Patienten",litStat3:"474+",litLab3:"PA-Patienten diagnostiziert (seit 2024)",litStat4:"20+",litLab4:"Prüfer-initiierte Studien"},
  about:{title:"Über Pentixapharm",desc:"Wir sind ein klinisches Biotech-Unternehmen mit Sitz in Berlin, das First-in-Class-Radiopharmazeutika entwickelt.",missionTitle:"Unsere Mission",missionDesc:"Präzisionsdiagnostika und -therapeutika zu entwickeln, die Patientenergebnisse in Bereichen mit hohem medizinischen Bedarf verbessern.",historyTitle:"Unsere Geschichte",historyDesc:"Pentixapharm wurde 2019 als Joint Venture gegründet und ging im Oktober 2024 an der Frankfurter Wertpapierbörse an die Börse.",teamTitle:"Führungsteam",boardTitle:"Aufsichtsrat",careerTitle:"Werde Teil unseres Teams",careerDesc:"Wir suchen leidenschaftliche Talente, die die Zukunft der Pharmawissenschaft mitgestalten möchten.",careerEmail:"careers@pentixapharm.com"},
  investors:{title:"Investor Relations",desc:"Die Pentixapharm Holding AG ist an der Frankfurter Wertpapierbörse unter dem Ticker PTP notiert.",stockTitle:"Aktieninformationen",finTitle:"Wichtige Finanzdaten",calTitle:"Finanzkalender",irContact:"ir@pentixapharm.com",irPhone:"+49 30 94892600"},
  news:{title:"Neuigkeiten & Pressemitteilungen",desc:"Aktuelle Updates zu unseren klinischen Meilensteinen, regulatorischen Fortschritten und Unternehmensent wicklungen.",categories:{all:"Alle",clinical:"Klinisch",corporate:"Unternehmen",financial:"Finanziell",regulatory:"Regulatorisch"},readMore:"Mehr lesen →"},
  contact:{title:"Kontakt",desc:"Wir freuen uns über Anfragen von Patienten, Ärzten, Investoren und Medien.",form:{name:"Vollständiger Name",email:"E-Mail-Adresse",subject:"Betreff",message:"Nachricht",send:"Nachricht senden",success:"Nachricht erfolgreich gesendet!",error:"Etwas ist schiefgelaufen. Bitte erneut versuchen."},irTitle:"Investor Relations",mediaTitle:"Medienanfragen",careersTitle:"Karriere"},
  stats:{title:"Forschungs- & Entwicklungsübersicht",desc:"Verfolgung unserer klinischen Fortschritte, wissenschaftlichen Ergebnisse und Betriebskennzahlen."},
},null,2));

// ── src/app/globals.css ───────────────────────────────────────────────────────
w('src/app/globals.css',`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer base {
  :root {
    --background:214 60% 5%;--foreground:0 0% 98%;
    --card:214 50% 8%;--card-foreground:0 0% 98%;
    --popover:214 50% 8%;--popover-foreground:0 0% 98%;
    --primary:161 100% 36%;--primary-foreground:214 60% 5%;
    --secondary:214 40% 14%;--secondary-foreground:0 0% 98%;
    --muted:214 40% 12%;--muted-foreground:214 20% 58%;
    --accent:176 100% 40%;--accent-foreground:214 60% 5%;
    --destructive:0 84% 60%;--destructive-foreground:0 0% 98%;
    --border:214 40% 16%;--input:214 40% 14%;--ring:161 100% 36%;--radius:0.75rem;
    --chart-1:161 100% 36%;--chart-2:176 100% 40%;--chart-3:43 97% 71%;
    --chart-4:214 60% 60%;--chart-5:280 60% 65%;
  }
}
@layer base {
  * { @apply border-border; }
  body { @apply bg-navy text-white font-sans; }
  h1,h2,h3,h4,h5,h6 { @apply font-heading tracking-tight; }
  html { scroll-behavior:smooth; }
  ::selection { background:#00B894; color:#071429; }
}
.gradient-text {
  background:linear-gradient(135deg,#00B894,#00CEC9 50%,#FDCB6E);
  -webkit-background-clip:text; background-clip:text; color:transparent;
  background-size:200% auto; animation:gradient-x 6s ease infinite;
}
.glass { background:rgba(255,255,255,0.04); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.07); }
.glass-emerald { background:rgba(0,184,148,0.07); backdrop-filter:blur(20px); border:1px solid rgba(0,184,148,0.18); }
.glow-emerald { box-shadow:0 0 40px rgba(0,184,148,0.25); }
.card-hover { transition:all 0.3s ease; }
.card-hover:hover { transform:translateY(-4px); box-shadow:0 20px 60px rgba(0,184,148,0.15); }
::-webkit-scrollbar { width:5px; }
::-webkit-scrollbar-track { background:#071429; }
::-webkit-scrollbar-thumb { background:#00B894; border-radius:3px; }
::-webkit-scrollbar-thumb:hover { background:#FDCB6E; }
@keyframes floatBubble {
  0%,100% { transform:translateY(0) scale(1); opacity:0.6; }
  50% { transform:translateY(-30px) scale(1.05); opacity:0.9; }
}
`);

// ── src/app/layout.tsx ────────────────────────────────────────────────────────
w('src/app/layout.tsx',`import { Inter, Space_Grotesk } from "next/font/google";
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
  const locale = await getLocale();
  return (
    <html lang={locale} className="scroll-smooth">
      <head><meta name="theme-color" content="#071429" /></head>
      <body className={inter.variable + " " + spaceGrotesk.variable + " font-sans antialiased"}>
        {children}
      </body>
    </html>
  );
}
`);

// ── src/app/api/admin-auth/route.ts ───────────────────────────────────────────
w('src/app/api/admin-auth/route.ts',`import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) return NextResponse.json({error:"Server misconfigured"},{status:500});
    if (password === adminPassword) return NextResponse.json({ok:true});
    await new Promise(r=>setTimeout(r,600));
    return NextResponse.json({error:"Unauthorized"},{status:401});
  } catch { return NextResponse.json({error:"Bad request"},{status:400}); }
}
`);

// ── src/app/api/send/route.ts ─────────────────────────────────────────────────
w('src/app/api/send/route.ts',`import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Contact form submission:", body);
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({error:"Bad request"},{status:400}); }
}
`);

// ── src/app/[locale]/layout.tsx ───────────────────────────────────────────────
w('src/app/[locale]/layout.tsx',`import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{locale:string}> }) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
`);

// ── src/app/[locale]/template.tsx ─────────────────────────────────────────────
w('src/app/[locale]/template.tsx',`"use client";
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>{children}</motion.div>;
}
`);

// ── src/app/admin/page.tsx ────────────────────────────────────────────────────
w('src/app/admin/page.tsx',`import { AdminPanel } from "@/components/admin/AdminPanel";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"Admin | Pentixapharm", robots:{index:false,follow:false} };
export default function AdminPage() { return <AdminPanel />; }
`);

// ── src/app/[locale]/imprint/page.tsx ────────────────────────────────────────
w('src/app/[locale]/imprint/page.tsx',`export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Imprint</h1>
        <div className="text-slate-300 space-y-4">
          <p><strong className="text-white">Pentixapharm Holding AG</strong><br/>Robert-Rössle-Str. 10<br/>13125 Berlin, Germany</p>
          <p>Phone: +49 30 94892600<br/>Email: ir@pentixapharm.com<br/>Website: www.pentixapharm.com</p>
          <p><strong className="text-white">Register Court:</strong> Amtsgericht Würzburg<br/><strong className="text-white">Register Number:</strong> HRB 16020</p>
          <p><strong className="text-white">Management Board:</strong> Dr. Dirk Pleimes (CEO/CMO), Henner Kollenberg (CBO), Erik Merten (CTO)</p>
          <p><strong className="text-white">Supervisory Board Chairman:</strong> Dr. Andreas Eckert</p>
        </div>
      </div>
    </div>
  );
}
`);

// ── src/app/[locale]/datenschutz/page.tsx ────────────────────────────────────
w('src/app/[locale]/datenschutz/page.tsx',`export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Privacy Policy / Datenschutz</h1>
        <div className="text-slate-300 space-y-4">
          <p>This website is operated by Pentixapharm Holding AG. We take the protection of your personal data seriously.</p>
          <p>For questions regarding data privacy, please contact: ir@pentixapharm.com</p>
          <p>For the full privacy policy, please visit <a href="https://www.pentixapharm.com/data-privacy" className="text-emerald underline" target="_blank">www.pentixapharm.com/data-privacy</a></p>
        </div>
      </div>
    </div>
  );
}
`);

console.log('\n✅ Phase 1 done — config/layout/messages/api files written\n');
