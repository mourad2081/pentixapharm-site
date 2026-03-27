import {getRequestConfig} from 'next-intl/server';
import { headers } from 'next/headers';

export const locales = ['en', 'de', 'fr', 'ar', 'es'];

export default getRequestConfig(async ({locale}) => {
  const validLocale = (locale && locales.includes(locale)) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
