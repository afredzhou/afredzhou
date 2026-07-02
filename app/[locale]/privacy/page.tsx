export default async function PrivacyPage({
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
          {isZh ? '隐私政策' : 'Privacy Policy'}
        </h1>
        <div className="space-y-4 text-base leading-7 text-[#475467]">
          <p>
            {isZh
              ? '本网站不会主动出售你的个人信息。若你通过邮箱联系我，你提供的信息仅用于回复咨询或沟通合作。'
              : 'This site does not sell your personal information. If you contact me by email, the information you share will only be used to respond to your inquiry or discuss collaboration.'}
          </p>
          <p>
            {isZh
              ? '站点可能使用基础分析工具来了解访问情况，以便持续改进内容与体验。'
              : 'The site may use basic analytics to understand visits and improve the content and experience over time.'}
          </p>
        </div>
      </div>
    </main>
  )
}
