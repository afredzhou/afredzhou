import './globals.css'
import Template from '../components/Template' // Ensure this path is correct
import { Analytics } from "@vercel/analytics/react"
import LanguageSwitch from './LanguageSwitch'
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Re-enable metadata
export async function generateMetadata({ params }: { params: { locale: string } }) {
  // Await params before accessing locale
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  const t = await getTranslations({ locale });

  const siteName = t('site.name') || 'Default Site Name';
  const portfolio = t('site.portfolio') || 'Portfolio';
  const description = t('description') || 'Default description';
  return {
    title: `${siteName} - ${portfolio}`,
    description: description,
    icons: {
      icon: '/favicon/favicon_32x32.png',
    },
  };
}

// Make the layout async
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string }; // Type might implicitly be Promise<...> sometimes
}) {
  // Await params before accessing locale
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Urbanist:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Vast+Shadow&display=swap" />
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Lufga:wght@400;500;600&display=swap" />
      </head>
      <body>
        {/* Provider does not need explicit messages prop here */}
        <NextIntlClientProvider locale={locale} messages={messages}>          <Template>{children}</Template>
          <LanguageSwitch />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
