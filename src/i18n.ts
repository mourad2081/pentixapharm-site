import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'de', 'fr', 'ar', 'es'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  const validLocale = (locale && locales.includes(locale)) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
