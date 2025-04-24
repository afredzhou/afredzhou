'use client'

import { useTranslation } from 'next-i18next'

export default function TranslatedExample() {
  const { t } = useTranslation('common')
  
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
      
      <div>
        <h3 className="text-xl font-semibold mb-2">{t('sections.buttons')}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          {t('buttons.submit')}
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          {t('buttons.cancel')}
        </button>
      </div>
    </div>
  )
} 