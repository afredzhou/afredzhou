'use client' // Mark as a Client Component

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useTranslations } from 'next-intl'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto py-4 px-4">
        <div className="relative bg-[#151515] rounded-full px-4 sm:px-6 py-3 flex items-center justify-between md:justify-start">
          {/* Left Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="bg-[#FD853A] text-white px-6 py-2 rounded-full text-base font-medium">
              {t('header.home')}
            </Link>
            <Link href="/about" className="text-white text-base font-medium">
              {t('header.about')}
            </Link>
            <Link href="/service" className="text-white text-base font-medium">
              {t('navigation.service')}
            </Link>
          </div>

          {/* Spacer - Hidden on Mobile */}
          <div className="flex-grow hidden md:block"></div>

          {/* Center Logo - No longer centered on mobile */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/figma-images/logo.svg"
              alt={t('site.name')}
              width={24}
              height={24}
              className="w-6 h-6"
              priority
            />
            <span className="text-white text-base font-medium">{t('site.name')}</span>
          </Link>

          {/* Spacer - Hidden on Mobile */}
          <div className="flex-grow hidden md:block"></div>

          {/* Right Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/resume" className="text-white text-base font-medium">
              {t('navigation.resume')}
            </Link>
            <Link href="/project" className="text-white text-base font-medium">
              {t('navigation.project')}
            </Link>
            <Link href="/contact" className="text-white text-base font-medium">
              {t('header.contact')}
            </Link>
          </div>

          {/* Hamburger Menu Button - Only on Mobile, appears on the right due to justify-between */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
          </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-[#151515] rounded-lg shadow-lg py-4 flex flex-col items-center gap-4">
            <Link href="/" onClick={closeMenu} className="bg-[#FD853A] text-white px-6 py-2 rounded-full text-base font-medium w-4/5 text-center">
              {t('header.home')}
            </Link>
            <Link href="/about" onClick={closeMenu} className="text-white text-base font-medium py-2">
              {t('header.about')}
            </Link>
            <Link href="/service" onClick={closeMenu} className="text-white text-base font-medium py-2">
              {t('navigation.service')}
            </Link>
            <Link href="/resume" onClick={closeMenu} className="text-white text-base font-medium py-2">
              {t('navigation.resume')}
            </Link>
            <Link href="/project" onClick={closeMenu} className="text-white text-base font-medium py-2">
              {t('navigation.project')}
            </Link>
            <Link href="/contact" onClick={closeMenu} className="text-white text-base font-medium py-2">
              {t('header.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
