import type { Metadata } from 'next'
import './globals.css'
import Template from './components/Template'
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: 'Afred - Product Designer Portfolio',
  description: 'Portfolio website showcasing UI/UX and product design work',
  icons: {
    icon: [
      {
        url: '/favicon/favicon_32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon_256x256.png',
        sizes: '256x256',
        type: 'image/png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Urbanist:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Vast+Shadow&display=swap" />
        <link rel="stylesheet" href="https://googlefonts.cn/css2?family=Lufga:wght@400;500;600&display=swap" />
      </head>
      <body>
        <Template>{children}</Template>
        <Analytics />
      </body>
    </html>
  )
}