import {getRequestConfig} from 'next-intl/server';
import {routing, type Locale} from './routing';
import { getLocale } from '@/i18n';
export default getRequestConfig(async ({locale}) => {
  // Validate the incoming locale parameter
  const validLocale = routing.locales.includes(locale as Locale)
    ? locale as Locale
    : routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
