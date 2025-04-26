import {defineRouting} from 'next-intl/routing';
export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeCookie: true,
  localeDetection: true,
  pathnames: {
    '/': '/',
    '/pathnames': {
      zh: '/路径名称',
    }
  }
});
