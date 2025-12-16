'use client'

import { useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoSrc?: string
  fallbackImage?: string
  overlay?: boolean
}

export default function VideoBackground({ 
  videoSrc = '/assets/videos/hero-background.mp4',
  fallbackImage = '/assets/images/hero-fallback.jpg',
  overlay = true 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Reproducción más lenta para efecto cinematic
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback para navegadores que no soportan video */}
        <img src={fallbackImage} alt="Background" className="w-full h-full object-cover" />
      </video>

      {/* Overlay oscuro para legibilidad del texto */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      )}

      {/* Efectos de luz adicionales */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}
