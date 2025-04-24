'use client'

// 从 next-intl/navigation 导入必要的 hooks  组件
import { useLocale } from 'next-intl';
import { usePathname, useRouter} from '../../i18n/navigation';
import { locales } from '../../i18n'; // 导入定义的 locales

export default function LanguageSwitch() {
  const currentLocale = useLocale(); // 获取当前 locale
  const pathname = usePathname(); // 获取当前路径 (不含 locale)
  const router = useRouter();

  // 处理语言切换的函数
  const switchLocale = (nextLocale: string) => {
    // 使用 router.replace 来切换语言，避免在浏览器历史中留下重定向记录
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="mb-2 font-bold">Language / 语言</div>
      <div className="flex items-center gap-3">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            // 根据当前 locale 设置不同的样式
            className={`px-3 py-1 rounded-md ${currentLocale === locale ? 'bg-blue-600 font-bold' : 'bg-gray-600 hover:bg-gray-500'}`}
            // 禁用当前语言的按钮
            disabled={currentLocale === locale}
          >
            {locale === 'en' ? 'English' : '中文'}
          </button>
        ))}
      </div>
    </div>
  )
}
