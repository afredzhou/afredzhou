import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
