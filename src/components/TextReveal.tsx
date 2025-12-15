'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const words = textRef.current.innerText.split(' ')
    textRef.current.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`)
      .join(' ')

    const spans = textRef.current.querySelectorAll('span span')

    gsap.fromTo(
      spans,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    )
  }, [])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}
