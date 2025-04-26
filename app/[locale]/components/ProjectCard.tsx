import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="card overflow-hidden">
        <div className="relative h-48 mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  )
} 