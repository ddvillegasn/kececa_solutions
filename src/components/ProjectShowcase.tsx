'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  subtitle: string
  image: string
  category?: string
  size: 'small' | 'medium' | 'large'
  link?: string
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const items = gridRef.current.querySelectorAll('.project-item')

    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })
  }, [])

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1'
      case 'medium':
        return 'col-span-1 md:col-span-2 row-span-1'
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-item group relative overflow-hidden rounded-2xl bg-gray-900 ${getSizeClasses(
            project.size
          )} cursor-pointer`}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/90 transition-all duration-500" />
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.category && (
                <span className="text-sm font-semibold text-blue-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inline-block">
                  {project.category}
                </span>
              )}
              <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* View Project Button */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 z-10">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Overlay Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-500" />
        </div>
      ))}
    </div>
  )
}
