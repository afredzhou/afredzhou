'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { useTranslations } from 'next-intl'

interface ServiceCardProps {
  title: string;
  iconBgUrl: string;
  arrowIconBgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, iconBgUrl, arrowIconBgColor }) => (
  <div className="relative bg-[#3C3C3C] rounded-[20px] sm:rounded-[30px] md:rounded-[37px] overflow-hidden p-4 sm:p-5 md:p-6 flex flex-col justify-between h-[300px] sm:h-[375px] md:h-[450px]">
    <div className="absolute inset-0 z-0">
      <Image
        src={iconBgUrl}
        alt=""
        fill
        className="object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[37px]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
    </div>
    <div className="relative z-10 flex justify-end">
    </div>
    <div className="relative z-10 mt-auto flex justify-between items-end">
      <h3 className="text-white font-display text-xl sm:text-2xl md:text-3xl max-w-[150px] sm:max-w-[175px] md:max-w-[200px]">{title}</h3>
      <Link href="/" className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${arrowIconBgColor}`}>
          <ArrowUpRightIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
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
  <div className="flex gap-4 sm:gap-6 md:gap-8">
    <div className="flex flex-col items-center">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 ${isActive ? 'border-[#FD853A]' : 'border-[#344054]'} bg-white flex items-center justify-center`}>
        <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full ${isActive ? 'bg-[#FD853A]' : 'bg-[#1D2939]'}`}></div>
      </div>
      {!isActive && <div className="flex-grow border-l-2 border-dashed border-[#344054] w-0 my-2"></div>}
    </div>
    <div className={`flex-1 ${isActive ? '' : 'pb-8 sm:pb-12 md:pb-16'}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#344054] font-display">{company}</h4>
        <span className="text-base sm:text-lg text-[#98A2B3]">{duration}</span>
      </div>
      <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#344054] mb-2 sm:mb-3 font-display">{role}</h5>
      <p className="text-[#98A2B3] text-base sm:text-lg">{description}</p>
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
    <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
      <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden h-[250px] sm:h-[300px] md:h-[400px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
         <div className="flex gap-2 sm:gap-3 flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="bg-[#F2F4F7] text-[#344054] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">{tag}</span>
            ))}
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#344054] font-display">{title}</h3>
        <p className="text-[#344054] text-base sm:text-lg">{description}</p>
        <Link href="#" className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#FD853A] bg-[#FD853A]/10 hover:bg-[#FD853A]/20 transition">
          <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FD853A]" />
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
  <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-white/20 flex flex-col gap-3 sm:gap-4 text-[#FCFCFD]">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
          <Image
            src={avatarUrl}
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-base sm:text-lg">{name}</p>
          <p className="text-xs sm:text-sm opacity-80">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-0.5 sm:gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-[#FD853A]' : 'text-gray-400'}`} />
        ))}
        <span className="ml-1 font-medium text-sm sm:text-base">{rating.toFixed(1)}</span>
      </div>
    </div>
    <p className="text-sm sm:text-base leading-relaxed opacity-90">{quote}</p>
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
    <div className="flex flex-col gap-3 sm:gap-4">
        <div className="relative h-48 sm:h-52 md:h-60 rounded-xl overflow-hidden shadow-lg">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                 <Link href="#" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1D2939] hover:bg-[#344054] transition">
                     <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                 </Link>
            </div>
        </div>
         <div className="flex justify-between items-center text-xs sm:text-sm text-[#344054]">
            <span className="bg-[#F2F4F7] px-2 sm:px-3 py-1 rounded-full">{tag}</span>
            <div className="flex items-center gap-2 sm:gap-4">
                 <span>{author}</span>
                 <span>•</span>
                 <span>{date}</span>
            </div>
        </div>
        <h4 className="text-lg sm:text-xl font-semibold text-[#344054]">{title}</h4>
    </div>
);

export default function Home() {
  const t = useTranslations();
   // const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"; // Removed hardcoded lorem

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Navigation Bar  No need for this because we are using the navigation bar from the layout.tsx */}
        {/* Hero Section */}
      <section className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <div className="relative w-full h-full flex flex-col items-center max-w-screen-xl mx-auto">
          {/* Content Container */}
          <div className="flex-1 relative w-full flex flex-col items-center">
            {/* Hello Badge */}
            <div className="inline-flex flex-col items-center">
              <div className="h-7 sm:h-8 px-3 sm:px-4 py-1 sm:py-1.5 bg-white rounded-[38px] outline outline-[1px] outline-neutral-900 inline-flex justify-center items-center relative">
                <span className="text-neutral-900 text-sm sm:text-base font-medium font-['Lufga']">{t('hero.greeting')}</span>
                <div className="absolute -right-1 -top-1 sm:-right-2 sm:-top-2 md:-right-3 md:-top-3">
            <Image
                    src="/figma-images/sparkle-hello.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </div>
            {/* Title */}
            <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center mb-16 sm:mb-16 md:mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[100px] font-semibold font-['Urbanist'] leading-[0.95]">
                <span className="text-neutral-900">{t('hero.iAm')}{' '}</span>
                <span className="text-[#FD853A]">{t('site.name')}</span>
              </h1>
              <div className="relative mt-1 sm:mt-0 md:-mt-2 lg:-mt-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[100px] font-semibold font-['Urbanist'] leading-[0.95] text-neutral-900">
                  {t('site.tagline')}
                </h1>
                {/* Left Sparkle */}
                <Image
                  src="/figma-images/sparkle-left.svg"
                  alt=""
                  width={64}
                  height={80}
                  className="absolute -left-2 sm:-left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-6 h-8 sm:w-8 sm:h-10 md:w-12 md:h-16 lg:w-16 lg:h-20 rotate-[-167.61deg]"
                />
              </div>
            </div>

            {/* Testimonial & Experience Row */}
            <div className="w-full flex justify-between px-2 sm:px-12 md:px-24 lg:px-32 xl:px-2 mt-4 sm:mt-6 md:mt-8 lg:mt-12 relative">
              <div className="absolute -top-16 sm:static left-4 sm:left-12 md:left-24 lg:left-[5%] xl:left-0 w-[120px] sm:w-[220px] md:w-[280px] lg:w-[320px]">
                {/* Testimonial */}
                <div className="flex flex-col gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-[#344054]">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 relative self-start">
                    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 19.2L3.5 7.2M3.5 7.2V19.2M3.5 7.2H14" stroke="#344054" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="font-medium font-['Lufga'] leading-tight text-[8px] sm:text-[10px] md:text-xs lg:text-2xl">
                    {t('site.testimonial')}
                  </p>
            </div>
          </div>

              <div className="absolute -top-16 sm:static right-4 sm:right-12 md:right-24 lg:right-[5%] xl:right-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px]">
                {/* Experience */}
                <div className="flex flex-col items-end gap-1 sm:gap-2">
                  <div className="flex gap-0.5 sm:gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 mx-auto my-0.5 sm:my-1 bg-[#FD853A]"></div>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Urbanist'] leading-none">{t('hero.experienceYears')}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm font-normal font-['Lufga']">{t('hero.experienceLabel')}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Image & Background */}
            <div className="relative w-full  mx-auto -mt-28 sm:-mt-36 md:-mt-44 lg:-mt-80">
              {/* Background Circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[80%] max-w-[812px] h-[65%] sm:h-[70%] md:h-[65%] lg:h-[406px] bg-[#FEB273] rounded-t-full z-0"></div>

              {/* Profile Image */}
              <div className="relative z-10">
                <Image
                  src="/figma-images/profile-image.png"
                  alt={`${t('site.name')} ${t('common.profile')}`}
                  width={952}
                  height={636}
                  className="block mx-auto w-full h-auto max-w-[952px]"
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 952px"
                />
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex justify-center w-full z-20 px-4 sm:px-0">
                <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:w-[384px] p-1 sm:p-1.5 md:p-2 bg-white/10 rounded-[50px] outline outline-1 sm:outline-2 outline-white backdrop-blur-[10px] flex flex-row items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
                  {/* Portfolio Button */}
                  <button className="px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 bg-[#FD853A] rounded-[60px] flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-medium font-['Lufga'] whitespace-nowrap">
                    {t('hero.portfolioButton')}
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-1 sm:ml-1.5 md:ml-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 28L28 16M28 16H16M28 16V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {/* Hire Me Button */}
                  <button className="px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 text-white text-xs sm:text-sm md:text-base font-light font-['Lufga'] whitespace-nowrap hover:bg-white/10 rounded-[60px] transition-colors duration-200">
                    {t('hero.hireMeButton')}
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      <section className="bg-[#171717] rounded-t-[50px] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-[#FCFCFD] font-['Vast_Shadow'] text-3xl sm:text-4xl md:text-5xl max-w-sm md:max-w-md">{t('services.title')}</h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-md">{t('services.description')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <ServiceCard title={t('services.uiUxDesign')} iconBgUrl="/figma-images/service-ui-ux-bg.png" arrowIconBgColor="bg-[#1D2939]" />
              <ServiceCard title={t('services.webDesign')} iconBgUrl="/figma-images/service-web-design-bg.png" arrowIconBgColor="bg-[#1D2939]" />
              <ServiceCard title={t('services.landingPage')} iconBgUrl="/figma-images/service-ui-ux-bg.png" arrowIconBgColor="bg-[#1D2939]" />
            </div>
            <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12">
              <div className="w-6 sm:w-8 h-2 bg-[#FD853A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
              <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
              <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            </div>
          </div>
        </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-center font-['Vast_Shadow'] text-4xl sm:text-5xl md:text-6xl text-[#344054] mb-12 sm:mb-16 md:mb-20">{t('experience.title')}</h2>
            <div className="max-w-4xl mx-auto">
              <ExperienceItem
                company="Cognizant, Mumbai"
                duration="Sep 2016 - July 2020"
                role={t('experience.roleExperienceDesigner')}
                description={t('experience.descriptionCognizant')}
                isActive={true}
              />
              <ExperienceItem
                company="Sugee Pvt limited, Mumbai"
                duration="Sep 2020 - July 2023"
                role={t('experience.roleUiUxDesigner')}
                description={t('experience.descriptionSugee')}
              />
              <ExperienceItem
                company="Cinetstox, Mumbai"
                duration="Sep 2023"
                role={t('experience.roleLeadUxDesigner')}
                description={t('experience.descriptionCinetstox')}
              />
            </div>
          </div>
        </section>

      <section className="bg-[#F2F4F7] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
              src="/figma-images/hero-bg-mask.png"
              alt="Hire me background"
                    fill
                    className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 items-start">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#344054] font-display">{t('hireMe.title')}</h2>
            <p className="text-base sm:text-lg text-[#98A2B3]">{t('hireMe.description')}</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-medium text-[#FD853A] font-display">450+</p>
                <p className="text-base sm:text-lg text-[#667085]">{t('hireMe.projectsCompleted')}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-medium text-[#FD853A] font-display">450+</p>
                <p className="text-base sm:text-lg text-[#667085]">{t('hireMe.positiveReviews')}</p>
              </div>
            </div>
            <Link href="#" className="bg-white text-[#151515] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-xl sm:text-2xl font-semibold border border-[#151515] hover:bg-gray-100 transition">
              {t('hireMe.hireMeButton')}
            </Link>
            </div>
          </div>
        </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#344054] font-display max-w-lg leading-tight">{t('portfolio.title')}</h2>
            <Link href="#" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FD853A] text-white text-base sm:text-lg font-medium hover:bg-opacity-90 transition">
              {t('portfolio.seeAllButton')}
            </Link>
          </div>

          <ProjectCardFigma
            title="Lirante - Food Delivery Solution"
            imageUrl="/figma-images/project-lirante-bg.png"
            tags={[t('portfolio.tags.landingPage'), t('portfolio.tags.productDesign'), t('portfolio.tags.animation'), t('portfolio.tags.glassmorphism'), t('portfolio.tags.cards')]}
            description={t('portfolio.descriptionLirante')}
          />

          <div className="flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
            <div className="w-6 sm:w-8 h-2 bg-[#FD853A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E4E7EC] rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-[#FCFCFD] font-medium text-3xl sm:text-4xl md:text-5xl mb-4 font-display">{t('testimonials.title')}</h2>
            <p className="text-[#F9FAFB] text-base sm:text-lg">{t('testimonials.description')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <TestimonialCard
              quote={t('testimonials.quoteExample')}
              avatarUrl="/figma-images/testimonial-1-avatar.png"
              name="Fawzi Sayed"
              role={t('experience.roleUiUxDesigner')}
              rating={5.0}
            />
            <TestimonialCard
              quote={t('testimonials.quoteExample')}
              avatarUrl="/figma-images/testimonial-2-avatar.png"
              name="Fawzi Sayed"
              role={t('experience.roleUiUxDesigner')}
              rating={5.0}
            />
            <TestimonialCard
              quote={t('testimonials.quoteExample')}
              avatarUrl="/figma-images/testimonial-3-avatar.png"
              name="Fawzi Sayed"
              role={t('experience.roleUiUxDesigner')}
              rating={5.0}
            />
            </div>
          </div>
        </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054] font-display">{t('blog.title')}</h2>
            </div>
            <Link href="#" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FD853A] text-white text-base sm:text-lg font-medium hover:bg-opacity-90 transition">
              {t('portfolio.seeAllButton')}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <BlogPostCard
              imageUrl="/figma-images/blog-post-1-bg.png"
              tag={t('blog.tagUiUx')}
              author={t('blog.authorJayesh')}
              date="10 Nov, 2023"
              title={t('blog.post1.title')}
            />
            <BlogPostCard
              imageUrl="/figma-images/blog-post-2-bg.png"
              tag={t('blog.tagAppDesign')}
              author={t('blog.authorJayesh')}
              date="09 Oct, 2023"
              title={t('blog.post2.title')}
            />
            <BlogPostCard
              imageUrl="/figma-images/blog-post-3-bg.png"
              tag={t('blog.tagAppDesign')}
              author={t('blog.authorJayesh')}
              date="13 Aug, 2023"
              title={t('blog.post3.title')}
            />
            </div>
          </div>
        </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#344054] mb-6 sm:mb-8 font-display max-w-3xl mx-auto">{t('cta.title')}</h2>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative bg-white/10 border border-[#E4E7EC] rounded-full p-1.5 sm:p-2 flex items-center shadow-lg w-full max-w-xl sm:max-w-2xl">
              <div className="bg-[#FFEAD5] w-12 sm:w-16 h-10 sm:h-14 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="#FD853A" stroke="#FD853A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#FD853A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <input type="email" placeholder={t('cta.emailPlaceholder')} className="flex-grow bg-transparent focus:outline-none text-[#000000] placeholder-[#000000]/60 text-base sm:text-lg px-2"/>
              <button className="bg-[#FD853A] text-white px-6 sm:px-8 py-2 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-opacity-90 transition">{t('cta.sendButton')}</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-[#000000] text-sm sm:text-base font-medium">
            <div className="flex items-center justify-center gap-2">
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FD853A]"/>
              <span>{t('cta.averageRatings')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                {/* ... SVG path ... */}
              </svg>
              <span>{t('cta.winningAwards')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                {/* ... SVG path ... */}
              </svg>
              <span>{t('cta.certifiedDesigner')}</span>
            </div>
          </div>
          </div>
        </section>

      </main>
  )
}
