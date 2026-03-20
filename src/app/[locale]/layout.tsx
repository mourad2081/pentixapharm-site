import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { BackToTop } from '@/components/layout/BackToTop';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';

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
