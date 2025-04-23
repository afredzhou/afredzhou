import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto py-6">
        <div className="bg-[#151515] rounded-full px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="bg-[#FD853A] text-white px-6 py-2 rounded-full text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white text-base font-medium">
              About
            </Link>
            <Link href="/service" className="text-white text-base font-medium">
              Service
            </Link>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Image src="/figma-images/logo.svg" alt="JCREA" width={24} height={24} />
            <span className="text-white text-base font-medium">Afred</span>
          </Link>

          <div className="flex items-center gap-12">
            <Link href="/resume" className="text-white text-base font-medium">
              Resume
            </Link>
            <Link href="/project" className="text-white text-base font-medium">
              Project
            </Link>
            <Link href="/contact" className="text-white text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 