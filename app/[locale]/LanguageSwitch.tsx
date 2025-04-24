'use client'

import { useLocale } from 'next-intl';
import { usePathname, useRouter} from '../../i18n/navigation';
import { locales } from '../../i18n';

export default function LanguageSwitch() {
  const currentLocale = useLocale(); // 获取当前 locale
  const pathname = usePathname(); // 获取当前路径 (不含 locale)
  const router = useRouter();

  const switchLocale = (nextLocale: string) => {
    // Force full page reload to ensure translations update
    const newPath = `/${nextLocale}${pathname}`;
    window.location.assign(newPath);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50">
      <div className="flex items-center gap-2">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
              currentLocale === locale ? 'bg-blue-600 font-bold' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            disabled={currentLocale === locale}
            aria-label={locale === 'en' ? 'Switch to English' : '切换到中文'}
          >
            {locale === 'en' ? 'EN' : 'CN'}
          </button>
        ))}
      </div>
    </div>
  )
}
