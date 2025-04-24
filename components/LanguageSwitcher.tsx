import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locale, pathname, asPath, query } = router
  
  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`px-3 py-1 rounded text-sm transition-colors ${
          locale === 'en' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('zh')} 
        className={`px-3 py-1 rounded text-sm transition-colors ${
          locale === 'zh' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
        aria-label="切换到中文"
      >
        中文
      </button>
    </div>
  )
} 