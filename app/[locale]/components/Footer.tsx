'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const t = useTranslations()

  const socialLinks = [
    { href: 'https://github.com/afredzhou', label: 'GitHub', icon: FaGithub },
    {
      href: 'https://www.linkedin.com/in/afredzhou',
      label: 'LinkedIn',
      icon: FaLinkedinIn,
    },
    {
      href: 'mailto:afred.zhou.cn@gmail.com',
      label: 'Email',
      icon: FaEnvelope,
    },
    { href: 'https://www.afredzhou.com', label: 'Website', icon: FaGlobe },
  ]

  return (
    <footer id="contact" className="bg-[#2B2B2B] text-white py-16 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">{t('site.fullName')}</h3>
            <p className="text-gray-400 mb-6">{t('footer.description')}</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#3B3B3B] flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h4 className="text-orange-500 font-semibold mb-4">
              {t('footer.navigationHeading')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-400 hover:text-white"
                >
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white"
                >
                  {t('navigation.service')}
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-400 hover:text-white"
                >
                  {t('navigation.resume')}
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  {t('navigation.project')}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white"
                >
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-orange-500 font-semibold mb-4">
              {t('footer.contactHeading')}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>{t('footer.contactLocation')}</li>
              <li>{t('footer.contactPhone')}</li>
              <li>
                <a
                  href="mailto:afred.zhou.cn@gmail.com"
                  className="hover:text-white"
                >
                  {t('footer.contactEmail')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.afredzhou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {t('footer.contactWebsite')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-orange-500 font-semibold mb-4">
              {t('footer.newsletterHeading')}
            </h4>
            <p className="text-gray-400 mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <form
              className="flex"
              action="mailto:afred.zhou.cn@gmail.com"
              method="get"
            >
              <input
                type="email"
                name="subject"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-4 py-3 bg-white text-[#000000] placeholder-[#000000]/60 focus:outline-none rounded-l-lg"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition-colors"
              >
                ▶
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3B3B3B] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>{t('site.copyright')}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="hover:text-white">
                {t('footer.terms')}
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
