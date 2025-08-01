import './globals.css'
import Template from './components/Template' // Ensure this path is correct
import { Analytics } from '@vercel/analytics/react'
import LanguageSwitch from './components/LanguageSwitch'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '../../i18n/routing'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { getMessages } from 'next-intl/server'
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// Re-enable metadata
export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  // Await params before accessing locale
  const awaitedParams = await params
  const locale = awaitedParams.locale
  const t = await getTranslations({ locale })

  const siteName = t('site.name') || 'Default Site Name'
  const portfolio = t('site.portfolio') || 'Portfolio'
  const description = t('description') || 'Default description'
  return {
    title: `${siteName} - ${portfolio}`,
    description: description,
    icons: {
      icon: [
        { url: '/favicon/favicon_32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon/favicon_256x256.png', sizes: '256x256', type: 'image/png' }
      ],
    }
  }
}
  // Make the layout async
  export default async function RootLayout({
    children,
    params,
  }: {
    children: React.ReactNode
    params: { locale: string } // Type might implicitly be Promise<...> sometimes
  }) {
    // Await params before accessing locale
    const awaitedParams = await params
    const locale = awaitedParams.locale
    if (!routing.locales.includes(locale as any)) {
      notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)
    const messages = await getMessages()

    return (
      <html lang={locale}>
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.loli.net/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          />
        </head>
        <body>
          {/* Provider does not need explicit messages prop here */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Template>{children}</Template>
            <LanguageSwitch />
            <Analytics />
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }
