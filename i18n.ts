import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'zh'];
const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    // Optionally redirect or use a fallback locale
    // For now, we'll just use the default locale if the requested one is invalid
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

// Export locales for use elsewhere (e.g., middleware)
export { locales, defaultLocale };
