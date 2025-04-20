import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './components/ProjectCard'
import SocialCard from './components/SocialCard'
import FloatingImages from './components/FloatingImages'

const projects = [
  {
    title: 'Kaiyanmedical',
    description: 'Creating engaging websites for a light therapy company as a creative designer.',
    imageUrl: '/projects/kaiyanmedical.jpg',
    link: 'https://kaiyanmedical.com'
  },
  {
    title: 'WeChat Mini Program',
    description: 'Building a new online shop mall for kaiyanmedical on WeChat platform',
    imageUrl: '/projects/miniprogram.jpg',
    link: 'https://store.kaiyanmedical.com'
  },
  {
    title: 'Renter Mate',
    description: 'Help busy people find rooms to live nearby, convenient and friendly',
    imageUrl: '/projects/rentermate.jpg',
    link: '/projects/rentermate'
  },
  {
    title: 'Qianfeng Technology',
    description: 'A leading manufacturer and assembly company for Printed Circuit Boards',
    imageUrl: '/projects/qianfeng.jpg',
    link: '/projects/qianfeng'
  },
  {
    title: 'SEO & Marketing',
    description: 'Developing professional online presence and SEO strategies',
    imageUrl: '/projects/seo.jpg',
    link: '/projects/seo'
  }
]

const socialPosts = [
  {
    platform: 'Instagram',
    imageUrl: '/social/instagram.jpg',
    link: 'https://instagram.com/afredzhou'
  },
  {
    platform: 'Dribbble',
    imageUrl: '/social/dribbble.jpg',
    link: 'https://dribbble.com/afredzhou'
  },
  {
    platform: 'Behance',
    imageUrl: '/social/behance.jpg',
    link: 'https://behance.net/afredzhou'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-4 font-display">
                你好! 我是 <br />
                <span className="text-blue-900">Brunao Dev</span>
              </h1>
              <p className="text-gray-600 mb-8">
                产品设计师和数字创意总监，在设计领域工作7年。专注于用户界面设计。
              </p>
              <Link
                href="#contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
              >
                联系我
              </Link>
            </div>
            <div className="md:w-1/2 relative mt-10 md:mt-0">
              <div className="w-full h-[500px] bg-gray-200 rounded-lg"></div>
              {/* 浮动元素 */}
              <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg">
                <span>🏆 最佳设计奖</span>
              </div>
              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg">
                <span>🎨 UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务部分 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 font-display">
            我的 <span className="text-orange-500">服务</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold mb-2 font-display">开发</h3>
              <p className="text-gray-600">
                专注于创建稳健可扩展的网络应用
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 font-display">UI/UX</h3>
              <p className="text-gray-600">
                创造美观直观的用户界面
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2 font-display">设计</h3>
              <p className="text-gray-600">
                打造令人惊叹的数字体验
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 工作统计部分 */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 font-display">
            客户总能获得<br />
            卓越的作品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold font-display">顶级品质</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold font-display">信守承诺</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold font-display">24小时响应</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Recent Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/project2.jpg"
                alt="Project 2"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/project3.jpg"
                alt="Project 3"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">
                Ready To Get<br />
                Started?
              </h2>
            </div>
            <div className="md:w-1/2 text-right">
              <p className="mb-4">You Know About Me, Let&apos;s Talk About You.</p>
              <Link
                href="#"
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
              >
                SHOOT MESSAGE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
