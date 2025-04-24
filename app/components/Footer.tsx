'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Afred Zhou</h3>
            <p className="text-gray-400 mb-6">
              Creating beautiful digital experiences with passion and purpose.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#3B3B3B] flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                F
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#3B3B3B] flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                Y
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#3B3B3B] flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                W
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#3B3B3B] flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                I
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#3B3B3B] flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                T
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h4 className="text-orange-500 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/service" className="text-gray-400 hover:text-white">Service</Link></li>
              <li><Link href="/resume" className="text-gray-400 hover:text-white">Resume</Link></li>
              <li><Link href="/project" className="text-gray-400 hover:text-white">Project</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-orange-500 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>+1 209 597 3212</li>
              <li>
                <a href="mailto:info@afredzhou.com" className="hover:text-white">
                  info@afredzhou.com
                </a>
              </li>
              <li>
                <a href="https://afredzhou.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  afredzhou.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-orange-500 font-semibold mb-4">Get the latest information</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-white text-[#000000] placeholder-[#000000]/60 focus:outline-none rounded-l-lg"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition-colors"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3B3B3B] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>Copyright© 2025 Afred Zhou. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="hover:text-white">User Terms & Conditions</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 