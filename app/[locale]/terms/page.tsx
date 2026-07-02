export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isZh = locale === 'zh'

  return (
    <main className="min-h-screen bg-white px-4 py-32 text-[#171717] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-semibold font-['Urbanist']">
          {isZh ? '服务条款' : 'Terms of Service'}
        </h1>
        <div className="space-y-4 text-base leading-7 text-[#475467]">
          <p>
            {isZh
              ? '本网站中的作品、文字与视觉素材主要用于展示 Afred Zhou 的设计与开发工作。未经许可，请勿转载、复制或用于商业用途。'
              : "The work, writing, and visual assets on this site are presented to showcase Afred Zhou's design and development practice. Please do not reuse or redistribute them for commercial purposes without permission."}
          </p>
          <p>
            {isZh
              ? '如果你希望引用案例、讨论合作，或对网站内容有任何疑问，请通过页面底部提供的联系方式直接联系。'
              : 'If you would like to reference a case study, discuss collaboration, or have any questions about the site content, please get in touch using the contact details in the footer.'}
          </p>
        </div>
      </div>
    </main>
  )
}
