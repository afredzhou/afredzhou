import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Mstudio - Creative Design Agency',
  description: 'We create beautiful digital experiences with passion and purpose.',
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
    <html lang="zh-CN">
      <head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alibaba-puhuiti-regular/index.css" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/source-han-sans-cn/index.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
