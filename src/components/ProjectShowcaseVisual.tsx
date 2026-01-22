'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type ProjectSize = 'small' | 'medium' | 'large'

interface Project {
  id: number
  title: string
  subtitle: string
  image: string
  size: ProjectSize
  category?: string
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcaseVisual({ projects }: ProjectShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.project-card')
    if (!cards) return

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const getSizeClasses = (size: ProjectSize) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-2 md:row-span-1'
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  const getGradient = (id: number) => {
    const gradients = [
      'from-blue-500/80 to-purple-600/80',
      'from-purple-500/80 to-pink-600/80',
      'from-green-500/80 to-teal-600/80',
      'from-orange-500/80 to-red-600/80',
      'from-indigo-500/80 to-blue-600/80',
    ]
    return gradients[id % gradients.length]
  }

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-card relative overflow-hidden rounded-2xl group cursor-pointer ${getSizeClasses(
            project.size
          )}`}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Imagen de portada del proyecto, sin degradado ni overlays */}
          <div className="absolute inset-0">
            <picture>
              <source
                type="image/webp"
                srcSet={`${project.image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '')}-mobile.webp 400w,
                         ${project.image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '')}-tablet.webp 800w,
                         ${project.image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '')}-desktop.webp 1200w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <img
                src={project.image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '-desktop.webp')}
                alt={project.title}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-all duration-500 ${hoveredId === project.id ? 'scale-105' : 'scale-100'} bg-white`}
                style={{ borderRadius: '1rem' }}
              />
            </picture>
          </div>

          {/* Content Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-500 ${
              hoveredId === project.id ? 'bg-black/60' : 'bg-black/40'
            }`}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div
                className={`transform transition-all duration-500 ${
                  hoveredId === project.id
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-90'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Hover Border Effect */}
          <div
            className={`absolute inset-0 border-4 border-white/0 rounded-2xl transition-all duration-500 ${
              hoveredId === project.id ? 'border-white/30' : 'border-white/0'
            }`}
          />
        </div>
      ))}
    </div>
  )
}
