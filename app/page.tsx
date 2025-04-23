import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'

interface ServiceCardProps {
  title: string;
  iconBgUrl: string;
  arrowIconBgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, iconBgUrl, arrowIconBgColor }) => (
  <div className="relative bg-[#3C3C3C] rounded-[37px] overflow-hidden p-6 flex flex-col justify-between h-[450px]">
    <div className="absolute inset-0 z-0">
      <Image 
        src={iconBgUrl} 
        alt="" 
        fill
        className="object-cover rounded-[37px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
    </div>
    <div className="relative z-10 flex justify-end">
    </div>
    <div className="relative z-10 mt-auto flex justify-between items-end">
      <h3 className="text-white font-display text-3xl max-w-[200px]">{title}</h3>
      <Link href="/" className={`flex items-center justify-center w-16 h-16 rounded-full ${arrowIconBgColor}`}>
          <ArrowUpRightIcon className="w-8 h-8 text-white" />
      </Link>
    </div>
  </div>
);

interface ExperienceItemProps {
  company: string;
  duration: string;
  role: string;
  description: string;
  isActive?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, duration, role, description, isActive }) => (
  <div className="flex gap-8">
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full border-2 ${isActive ? 'border-[#FD853A]' : 'border-[#344054]'} bg-white flex items-center justify-center`}>
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-[#FD853A]' : 'bg-[#1D2939]'}`}></div>
      </div>
      {!isActive && <div className="flex-grow border-l-2 border-dashed border-[#344054] w-0 my-2"></div>}
    </div>
    <div className={`flex-1 ${isActive ? '' : 'pb-16'}`}>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-3xl font-semibold text-[#344054] font-display">{company}</h4>
        <span className="text-lg text-[#98A2B3]">{duration}</span>
      </div>
      <h5 className="text-2xl font-semibold text-[#344054] mb-3 font-display">{role}</h5>
      <p className="text-[#98A2B3] text-lg">{description}</p>
    </div>
  </div>
);

interface ProjectCardFigmaProps {
  title: string;
  imageUrl: string;
  tags: string[];
  description: string;
}

const ProjectCardFigma: React.FC<ProjectCardFigmaProps> = ({ title, imageUrl, tags, description }) => (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2 relative rounded-lg overflow-hidden h-[400px] md:h-auto">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-6">
         <div className="flex gap-3 flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="bg-[#F2F4F7] text-[#344054] px-4 py-2 rounded-full text-sm font-medium">{tag}</span>
            ))}
        </div>
        <h3 className="text-4xl font-bold text-[#344054] font-display">{title}</h3>
         <p className="text-[#344054] text-lg">{description}</p>
         <Link href="#" className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#FD853A] bg-[#FD853A]/10 hover:bg-[#FD853A]/20 transition">
             <ArrowUpRightIcon className="w-6 h-6 text-[#FD853A]" />
         </Link>
      </div>
    </div>
);

interface TestimonialCardProps {
  quote: string;
  avatarUrl: string;
  name: string;
  role: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, avatarUrl, name, role, rating }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex flex-col gap-4 text-[#FCFCFD]">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image 
            src={avatarUrl} 
            alt={name} 
            width={48} 
            height={48} 
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm opacity-80">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-[#FD853A]' : 'text-gray-400'}`} />
        ))}
        <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
      </div>
    </div>
    <p className="text-base leading-relaxed opacity-90">{quote}</p>
  </div>
);

interface BlogPostCardProps {
    imageUrl: string;
    tag: string;
    author: string;
    date: string;
    title: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ imageUrl, tag, author, date, title }) => (
    <div className="flex flex-col gap-4">
        <div className="relative h-60 rounded-xl overflow-hidden shadow-lg">
            <Image 
                src={imageUrl} 
                alt={title} 
                fill
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 right-4">
                 <Link href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1D2939] hover:bg-[#344054] transition">
                     <ArrowUpRightIcon className="w-6 h-6 text-white" />
                 </Link>
            </div>
        </div>
         <div className="flex justify-between items-center text-sm text-[#344054]">
            <span className="bg-[#F2F4F7] px-3 py-1 rounded-full">{tag}</span>
            <div className="flex items-center gap-4">
                 <span>{author}</span>
                 <span>•</span>
                 <span>{date}</span>
            </div>
        </div>
        <h4 className="text-xl font-semibold text-[#344054]">{title}</h4>
    </div>
);

export default function Home() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales";

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Hero Section */}
      <section className="relative w-[1440px] h-[846px] bg-white mt-25 ">
        <div className="relative w-full h-full flex flex-col">
          {/* Content Container */}
          <div className="flex-1 relative">
            {/* Hello Text */}
            <div className="flex justify-center mt-8">
              <div className="inline-flex flex-col items-center">
                <div className="h-8 px-4 py-1.5 bg-white rounded-[38px] outline outline-[1.27px] outline-neutral-900 inline-flex justify-center items-center relative">
                  <span className="text-neutral-900 text-base font-medium font-['Lufga']">Hello!</span>
                  <div className="absolute -right-3 -top-3">
                    <Image 
                      src="/figma-images/sparkle-hello.svg" 
                      alt="" 
                      width={24} 
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                
                {/* Title */}
                <div className="mt-8 text-center">
                  <h1 className="text-[100px] font-semibold font-['Urbanist'] leading-[0.95]">
                    <span className="text-neutral-900">I&apos;m </span>
                    <span className="text-[#FD853A]">Afred</span>
                  </h1>
                  <div className="relative -mt-6">
                    <h1 className="text-[100px] font-semibold font-['Urbanist'] leading-[0.95] text-neutral-900">
                      Product Designer
                    </h1>
                    <Image 
                      src="/figma-images/sparkle-left.svg" 
                      alt="" 
                      width={64}
                      height={80}
                      className="absolute -left-16 top-1/2 -translate-y-1/2 rotate-[-167.61deg]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[952px]">
              {/* Background Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[812px] h-[406px] bg-[#FEB273] rounded-t-full"></div>

              {/* Profile Image Container */}
              <div className="relative">
                {/* Profile Image */}
                <Image 
                  src="/figma-images/profile-image.png" 
                  alt="Afred Profile" 
                  width={952} 
                  height={636} 
                  className="relative z-10"
                />

                {/* Testimonial */}
                <div className="absolute left-[-200px] top-[240px] flex flex-col gap-6 max-w-[280px] z-20">
                  <div className="w-9 h-9 relative">
                    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 19.2L3.5 7.2M3.5 7.2V19.2M3.5 7.2H14" stroke="#344054" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="text-[#344054] text-xl font-medium font-['Lufga']">Jenny&apos;s Exceptional product design ensure our website&apos;s success. Highly Recommended</p>
                </div>

                {/* Rating and Experience */}
                <div className="absolute right-[-200px] top-[240px] flex flex-col items-end gap-5 z-20">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-8 h-8">
                        <div className="w-7 h-6 mx-auto my-1 bg-[#FD853A]"></div>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-neutral-900 text-[64px] font-bold font-['Urbanist'] leading-[1]">10 Years</p>
                    <p className="text-neutral-900 text-2xl font-normal font-['Lufga']">Experience</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                  <div className="w-[384px] h-20 p-2.5 bg-white/10 rounded-[50px] outline outline-2 outline-white backdrop-blur-[10px] flex justify-center items-center gap-2.5">
                    <button className="w-52 px-5 py-2.5 bg-[#FD853A] rounded-[60px] flex items-center justify-center text-white text-2xl font-medium font-['Lufga']">
                      Portfolio
                      <svg className="w-10 h-10 ml-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28L28 16M28 16H16M28 16V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="flex-1 px-5 py-2.5 text-white text-2xl font-light font-['Lufga']">
                      Hire me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] rounded-t-[50px] py-28 px-4">
          <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-[#FCFCFD] font-['Vast_Shadow'] text-5xl max-w-md">My Services</h2>
            <p className="text-white max-w-md text-lg">{lorem}</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="UI/ UX Design" iconBgUrl="/figma-images/service-ui-ux-bg.png" arrowIconBgColor="bg-[#1D2939]" />
            <ServiceCard title="Web Design" iconBgUrl="/figma-images/service-web-design-bg.png" arrowIconBgColor="bg-[#1D2939]" />
            <ServiceCard title="Landing Page" iconBgUrl="/figma-images/service-ui-ux-bg.png" arrowIconBgColor="bg-[#1D2939]" />
          </div>
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-8 h-2 bg-[#FD853A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            </div>
          </div>
        </section>

       <section className="py-28 px-4">
          <div className="container mx-auto">
          <h2 className="text-center font-['Vast_Shadow'] text-6xl text-[#344054] mb-20">My Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <ExperienceItem
              company="Cognizant, Mumbai"
              duration="Sep 2016 - July 2020"
              role="Experience Designer"
              description={lorem}
              isActive={true}
            />
             <ExperienceItem
              company="Sugee Pvt limited, Mumbai"
              duration="Sep 2020 - July 2023"
              role="UI/UX Designer"
              description={lorem}
            />
             <ExperienceItem
              company="Cinetstox, Mumbai"
              duration="Sep 2023"
              role="Lead UX Designer"
              description={lorem}
            />
          </div>
          </div>
        </section>

      <section className="bg-[#F2F4F7] rounded-[50px] py-28 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2 relative h-[600px]">
               <Image 
                 src="/figma-images/hero-bg-mask.png" 
                 alt="Hire me background" 
                 fill
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
           </div>
           <div className="md:w-1/2 flex flex-col gap-8 items-start">
                <h2 className="text-6xl font-semibold text-[#344054] font-display">Why Hire me?</h2>
                <p className="text-lg text-[#98A2B3]">{lorem}</p>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-4xl font-medium text-[#FD853A] font-display">450+</p>
                        <p className="text-[#667085] text-lg">Project Completed</p>
                </div>
                     <div>
                        <p className="text-4xl font-medium text-[#FD853A] font-display">450+</p>
                        <p className="text-[#667085] text-lg">Positive Reviews</p>
              </div>
                </div>
                 <Link href="#" className="bg-white text-[#151515] px-10 py-5 rounded-full font-semibold text-2xl border border-[#151515] hover:bg-gray-100 transition">
                    Hire me
                 </Link>
              </div>
                </div>
      </section>

       <section className="py-28 px-4">
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-6xl font-bold text-[#344054] font-display max-w-lg leading-tight">Let&apos;s have a look at my Portfolio</h2>
                <Link href="#" className="px-8 py-4 rounded-full bg-[#FD853A] text-white font-medium text-lg hover:bg-opacity-90 transition">
                    See All
                </Link>
              </div>

            <ProjectCardFigma
              title="Lirante - Food Delivery Solution"
              imageUrl="/figma-images/project-lirante-bg.png"
              tags={["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"]}
              description={lorem}
            />

            <div className="flex justify-center gap-3 mt-16">
                <div className="w-8 h-2 bg-[#FD853A] rounded-full"></div>
                <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
                <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
                <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            </div>
          </div>
        </section>

      <section className="bg-[#171717] rounded-[50px] py-28 px-4 relative overflow-hidden">

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#FCFCFD] font-medium text-5xl mb-4 font-display">Testimonials That Speak to My Results</h2>
            <p className="text-[#F9FAFB] text-lg">{lorem}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <TestimonialCard
                quote={lorem + lorem}
                avatarUrl="/figma-images/testimonial-1-avatar.png"
                name="Fawzi Sayed"
                role="UI/UX Designer"
                rating={5.0}
            />
             <TestimonialCard
                quote={lorem + lorem}
                avatarUrl="/figma-images/testimonial-2-avatar.png"
                name="Fawzi Sayed"
                role="UI/UX Designer"
                rating={5.0}
            />
             <TestimonialCard
                quote={lorem + lorem}
                avatarUrl="/figma-images/testimonial-3-avatar.png"
                name="Fawzi Sayed"
                role="UI/UX Designer"
                rating={5.0}
            />
          </div>
        </div>
      </section>

       <section className="py-28 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-12">
                 <div>
                    <h2 className="text-5xl font-bold text-[#344054] font-display">From my</h2>
                    <h2 className="text-5xl font-bold text-[#344054] font-display">blog post</h2>
                 </div>
                 <Link href="#" className="px-8 py-4 rounded-full bg-[#FD853A] text-white font-medium text-lg hover:bg-opacity-90 transition">
                    See All
                 </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <BlogPostCard
                    imageUrl="/figma-images/blog-post-1-bg.png"
                    tag="UI/UX Design"
                    author="Jayesh Patil"
                    date="10 Nov, 2023"
                    title="Design Unraveled: Behind the Scenes of UI/UX Magic"
                />
                 <BlogPostCard
                    imageUrl="/figma-images/blog-post-2-bg.png"
                    tag="App Design"
                    author="Jayesh Patil"
                    date="09 Oct, 2023"
                    title="Sugee: Loan Management System for Rural Sector."
                />
                 <BlogPostCard
                    imageUrl="/figma-images/blog-post-3-bg.png"
                    tag="App Design"
                    author="Jayesh Patil"
                    date="13 Aug, 2023"
                    title="Cinetrade: Innovative way to invest in Digital Media"
                />
            </div>
          </div>
        </section>

      <section className="py-28 px-4">
        <div className="container mx-auto text-center">
           <h2 className="text-6xl font-semibold text-[#344054] mb-8 font-display max-w-3xl mx-auto">Have an Awesome Project Idea? Let&apos;s Discuss</h2>
           <div className="flex justify-center mb-6">
               <div className="relative bg-white/10 border border-[#E4E7EC] rounded-full p-2 flex items-center shadow-lg w-full max-w-2xl">
                   <div className="bg-[#FFEAD5] w-16 h-14 rounded-full flex items-center justify-center mr-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="#FD853A" stroke="#FD853A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#FD853A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   <input type="email" placeholder="Enter Email Address" className="flex-grow bg-transparent focus:outline-none text-[#000000] placeholder-[#000000]/60 text-lg"/>
                   <button className="bg-[#FD853A] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition">Send</button>
               </div>
           </div>
           <div className="flex justify-center gap-8 text-[#000000] text-base font-medium">
               <div className="flex items-center gap-2">
                   <StarIcon className="w-5 h-5 text-[#FD853A]"/>
                   <span>4.9/5 Average Ratings</span>
               </div>
                <div className="flex items-center gap-2">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>
                   <span>25+ Winning Awards</span>
               </div>
                <div className="flex items-center gap-2">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>
                   <span>Certified Product Designer</span>
               </div>
            </div>
          </div>
        </section>

      </main>
  )
} 
