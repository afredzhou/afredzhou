import Image from 'next/image'
import Link from 'next/link'

interface SocialCardProps {
  imageUrl: string
  link: string
  platform: string
}

export default function SocialCard({ imageUrl, link, platform }: SocialCardProps) {
  return (
    <Link 
      href={link}
      className="block aspect-square relative overflow-hidden rounded-lg group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={imageUrl}
        alt={`${platform} post`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-sm font-medium">{platform}</span>
      </div>
    </Link>
  )
} 