'use client'

import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TranslatedExample() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  
  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <p className="mb-4">{t('description')}</p>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{t('sections.header')}</h3>
        <ul className="list-disc pl-5">
          <li>{t('header.home')}</li>
          <li>{t('header.about')}</li>
          <li>{t('header.contact')}</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{t('sections.footer')}</h3>
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.terms')}</p>
        <p>{t('footer.privacy')}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{t('sections.buttons')}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          {t('buttons.submit')}
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          {t('buttons.cancel')}
        </button>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">工具示例</h3>
        <div className="p-4 bg-gray-100 rounded">
          <p>{t('tools.textSummarizer.description')}</p>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex gap-4">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            English
          </button>
          <button 
            onClick={() => changeLanguage('zh')} 
            className={`px-3 py-1 rounded ${locale === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            中文
          </button>
        </div>
      </div>
    </div>
  )
} 