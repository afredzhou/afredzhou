'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function FloatingImages() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()
      
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const images = container.querySelectorAll('.floating-image')
      images.forEach((image, index) => {
        const factor = (index + 1) * 20
        ;(image as HTMLElement).style.transform = `
          translate(${x * factor}px, ${y * factor}px)
          rotate(${x * 10}deg)
        `
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="floating-image absolute top-[10%] right-[10%] w-64 h-40 rounded-lg overflow-hidden transform rotate-3 transition-transform duration-300">
        <Image
          src="/projects/ui-1.jpg"
          alt="UI Design"
          fill
          className="object-cover"
        />
      </div>
      <div className="floating-image absolute top-[40%] right-[20%] w-48 h-48 rounded-lg overflow-hidden transform -rotate-6 transition-transform duration-300">
        <Image
          src="/projects/ui-2.jpg"
          alt="UI Design"
          fill
          className="object-cover"
        />
      </div>
      <div className="floating-image absolute bottom-[20%] right-[15%] w-56 h-32 rounded-lg overflow-hidden transform rotate-12 transition-transform duration-300">
        <Image
          src="/projects/ui-3.jpg"
          alt="UI Design"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
} 