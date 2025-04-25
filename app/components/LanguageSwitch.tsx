'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/navigation';
import { routing } from '../../i18n/routing';

const locales = routing.locales;

export default function LanguageSwitch() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const switchLocale = (nextLocale: string) => {
    console.log(`Switching from ${currentLocale} to ${nextLocale}`);
    console.log(`Current pathname: ${pathname}`);
    router.push(pathname, { locale: nextLocale });
    console.log(`Router pushed with locale: ${nextLocale}`);
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
            {locale === 'en' ? 'en' : 'zh'}
          </button>
        ))}
      </div>
    </div>
  );
}
