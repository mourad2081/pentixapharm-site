import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import dynamic from 'next/dynamic';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';

const Navbar = dynamic(() => import('@/components/layout/Navbar').then(mod => mod.Navbar), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer), { ssr: false });
const WhatsAppButton = dynamic(() => import('@/components/layout/WhatsAppButton').then(mod => mod.WhatsAppButton), { ssr: false });
const BackToTop = dynamic(() => import('@/components/layout/BackToTop').then(mod => mod.BackToTop), { ssr: false });
const MobileStickyBar = dynamic(() => import('@/components/layout/MobileStickyBar').then(mod => mod.MobileStickyBar), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/layout/CursorGlow').then(mod => mod.CursorGlow), { ssr: false });
const CookieConsent = dynamic(() => import('@/components/layout/CookieConsent').then(mod => mod.CookieConsent), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/layout/ScrollProgress').then(mod => mod.ScrollProgress), { ssr: false });

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale)) notFound();
  
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <div className="flex-1 w-full">
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <MobileStickyBar />
      <CookieConsent />
    </NextIntlClientProvider>
  );
}
