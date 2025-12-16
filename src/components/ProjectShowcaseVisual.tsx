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
          {/* Gradient Background Placeholder */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${getGradient(
              project.id
            )} transition-all duration-500 ${
              hoveredId === project.id ? 'scale-110' : 'scale-100'
            }`}
          >
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>
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
