import {getRequestConfig} from 'next-intl/server';

export const locales = ['de', 'en', 'fr', 'ar'];

export default getRequestConfig(async ({locale}) => {
  const validLocale = (locale && locales.includes(locale)) ? locale : 'de';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
