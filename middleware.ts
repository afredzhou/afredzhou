import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // Skip internal paths (_next) and static assets (e.g., images, favicon)
  matcher: ['/((?!api|_next|_vercel|studio|admin|.*\\..*).*)'],

};
