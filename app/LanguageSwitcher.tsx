'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname() || ''
  const isChinesePath = pathname.startsWith('/zh')
  
  const getEnglishPath = () => isChinesePath ? pathname.replace(/^\/zh/, '') || '/' : pathname
  const getChinesePath = () => isChinesePath ? pathname : '/zh' + pathname
  
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="mb-2 font-bold">{isChinesePath ? '语言' : 'Language'}</div>
      <div className="flex items-center gap-3">
        <Link 
          href={getEnglishPath()} 
          className={`px-3 py-1 rounded-md ${!isChinesePath ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
        >
          English
        </Link>
        <span className="text-gray-400">|</span>
        <Link 
          href={getChinesePath()} 
          className={`px-3 py-1 rounded-md ${isChinesePath ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
        >
          中文
        </Link>
      </div>
    </div>
  )
} 