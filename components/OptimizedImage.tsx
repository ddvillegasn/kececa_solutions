/**
 * Componente OptimizedImage para Lighthouse Performance
 * 
 * Características:
 * - srcset responsivo automático
 * - sizes calculados por breakpoints
 * - lazy loading para imágenes below-fold
 * - width/height explícitos para evitar CLS
 * - Soporte para prioridad (hero/LCP)
 */

import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px',
  objectFit = 'cover',
}: OptimizedImageProps) {
  // Convertir ruta a WebP optimizado
  const getOptimizedSrc = (originalSrc: string) => {
    // Si ya es una URL externa, devolver tal cual
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // Extraer nombre del archivo sin extensión
    const pathParts = originalSrc.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const fileNameWithoutExt = fileName.replace(/\.(jpg|jpeg|png)$/i, '');
    
    // Reconstruir ruta con carpeta images-optimized
    const basePath = pathParts.slice(0, -2).join('/');
    return `${basePath}/images-optimized/${fileNameWithoutExt}-desktop.webp`;
  };

  // Generar srcset para responsive
  const getOptimizedSrcSet = (originalSrc: string) => {
    if (originalSrc.startsWith('http')) {
      return undefined;
    }

    const pathParts = originalSrc.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const fileNameWithoutExt = fileName.replace(/\.(jpg|jpeg|png)$/i, '');
    const basePath = pathParts.slice(0, -2).join('/');
    const optimizedPath = `${basePath}/images-optimized`;

    return `
      ${optimizedPath}/${fileNameWithoutExt}-mobile.webp 400w,
      ${optimizedPath}/${fileNameWithoutExt}-tablet.webp 800w,
      ${optimizedPath}/${fileNameWithoutExt}-desktop.webp 1200w
    `.trim();
  };

  return (
    <picture>
      {/* Source para WebP con srcset responsivo */}
      <source
        type="image/webp"
        srcSet={getOptimizedSrcSet(src)}
        sizes={sizes}
      />
      
      {/* Fallback a imagen original */}
      <img
        src={getOptimizedSrc(src)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        style={{ objectFit }}
      />
    </picture>
  );
}
