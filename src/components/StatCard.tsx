"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  number: number;
  suffix?: string;
  label: string;
  icon: string;
  delay?: number;
}

export default function StatCard({ number, suffix = '', label, icon, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: cardRef.current,
        start: 'top 80%',
        onEnter: () => {
          // Animate the number count
          gsap.to({ val: 0 }, {
            val: number,
            duration: 2,
            delay: delay,
            ease: 'power2.out',
            onUpdate: function() {
              setCount(Math.floor(this.targets()[0].val));
            }
          });

          // Animate the card entrance
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50, scale: 0.8 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.6,
              delay: delay,
              ease: 'back.out(1.7)'
            }
          );
        }
      });

      return () => trigger.kill();
    });

    return () => ctx.revert();
  }, [number, delay]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
      style={{ opacity: 0 }}
    >
      {/* Icon */}
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Number */}
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
        {count}{suffix}
      </div>

      {/* Label */}
      <div className="text-lg text-gray-300 font-medium">
        {label}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
    </div>
  );
}
