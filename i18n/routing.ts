import {defineRouting} from 'next-intl/routing';

export type Locale = 'en' | 'zh';

export const routing = defineRouting({
  // Supported locales
  locales: ['en', 'zh'],

  // Default locale when no match
  defaultLocale: 'en',

  // Use prefix-based routing only for non-default locales
  localePrefix: 'as-needed',

  // Domain configuration (optional)
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en',
  //   },
  //   {
  //     domain: 'example.cn',
  //     defaultLocale: 'zh',
  //   }
  // ]
});
