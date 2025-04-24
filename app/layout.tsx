'use client'

import './globals.css'
import Template from './components/Template'
import { Analytics } from "@vercel/analytics/react"
import LanguageSwitch from './LanguageSwitch'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t, i18n } = useTranslation('common')
  const currentLocale = i18n.language || 'en'
  
  return (
    <html lang={currentLocale}>
      <Head>
        <title>{t('site.name')} - {t('site.portfolio')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon/favicon_32x32.png" />
      </Head>
      <head>
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Urbanist:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Vast+Shadow&display=swap" />
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Lufga:wght@400;500;600&display=swap" />
      </head>
      <body>
        <Template>{children}</Template>
        <LanguageSwitch />
        <Analytics />
      </body>
    </html>
  )
}