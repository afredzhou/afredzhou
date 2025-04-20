import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Mstudio</h3>
            <p className="text-gray-600">
              Creating beautiful digital experiences with passion and purpose.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-600 hover:text-gray-900">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-design" className="text-gray-600 hover:text-gray-900">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="text-gray-600 hover:text-gray-900">
                  Branding
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@mstudio.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Design Street, Creative City, 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mstudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 