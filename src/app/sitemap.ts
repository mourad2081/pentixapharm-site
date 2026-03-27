import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextgencapital.de';
  const locales = ['en', 'de', 'fr', 'ar', 'es'];
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/produkte', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/termin', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/ueber-mich', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/seminare', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ressourcen', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/join-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kontakt', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/produkte/altersvorsorge', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/produkte/private-krankenversicherung', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/produkte/lebensversicherung', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/produkte/zahnzusatzversicherung', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/produkte/rechtsschutz', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/produkte/unfallversicherung', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
