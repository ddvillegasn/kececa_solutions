"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VisualServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function VisualServiceCard({ title, description, image, icon, delay = 0 }: VisualServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
      style={{ opacity: 0 }}
    >
      {/* Image Container with Overlay */}
      <div 
        ref={imageRef}
        className="relative h-64 overflow-hidden"
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '')}-mobile.webp 400w,
                     ${image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '')}-tablet.webp 800w,
                     ${image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '')}-desktop.webp 1200w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <img 
            src={image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '-desktop.webp')}
            alt={title}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </picture>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/40 transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Hover Line */}
        <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-br-full transform -translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
    </div>
  );
}
