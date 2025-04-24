'use client'

import Link from 'next/link'

export default function LanguageSwitch() {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="mb-2 font-bold">Language / 语言</div>
      <div className="flex items-center gap-3">
        <Link 
          href="/" 
          className="px-3 py-1 rounded-md bg-blue-500"
        >
          English
        </Link>
        <span className="text-gray-400">|</span>
        <Link 
          href="/zh" 
          className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-500"
        >
          中文
        </Link>
      </div>
    </div>
  )
} 