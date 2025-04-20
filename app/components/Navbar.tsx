import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-navy-900">
            Mstudio
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Contact Us
            </Link>
          </div>
          
          <button 
            className="md:hidden"
            aria-label="Toggle navigation menu"
            title="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 