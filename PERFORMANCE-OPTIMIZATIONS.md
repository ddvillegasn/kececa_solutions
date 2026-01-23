// Documento de referencia para Performance mejorado

## Optimizaciones Implementadas (Performance 65 → 85+)

### 1. **Optimizaciones de Video** ✅
- Agregado `preload="none"` al video hero
- Agregado poster SVG placeholder
- Reducida calidad Cloudinary a `q_auto:low`

### 2. **Optimizaciones de Fonts** ✅
- Agregado `font-display: swap` en globals.css
- Previene FOIT (Flash of Invisible Text)
- Mejora FCP en ~110ms

### 3. **Preconnect a CDN** ✅
- Agregado preconnect a Cloudinary
- DNS prefetch para recursos externos
- Reduce latencia de conexión

### 4. **Cache Headers Agresivos** ✅
- Creado netlify.toml con cache de 1 año para assets
- Headers inmutables para /assets/*
- Cache optimizado para _next/static/*

### 5. **Next.js Config Optimizado** ✅
- `poweredByHeader: false` (seguridad)
- `swcMinify: true` (minificación rápida)
- `generateEtags: true` (cache validation)
- Formatos AVIF y WebP prioritarios

### 6. **Imágenes Optimizadas** ✅
- Picture element con srcset responsive
- Lazy loading para imágenes below fold
- WebP con fallback a PNG/JPG
- Width/height explícitos (evita CLS)

### 7. **Headers de Seguridad** ✅
- Strict-Transport-Security
- X-Frame-Options
- Content-Security-Policy ready
- X-XSS-Protection

## Resultados Esperados

### Performance
- **FCP**: 2.8s → <1.8s (mejora ~35%)
- **LCP**: 3.0s → <2.2s (mejora ~25%)
- **Speed Index**: 5.9s → <3.5s (mejora ~40%)
- **TBT**: 0ms → 0ms (mantener)
- **CLS**: 0 → 0 (mantener)

### Optimizaciones Pendientes (para 90+)
1. Code splitting de components grandes
2. Lazy load de Hero3D component
3. Reducir JavaScript bundle (<200KB)
4. Implement Service Worker para offline
5. Critical CSS inline
6. Preload de fonts críticos

## Comandos para Deploy

```bash
# Build production
npm run build

# Deploy a Netlify
git add .
git commit -m "perf: optimize FCP, LCP and caching headers"
git push origin main
```

## Lighthouse Re-Test

Después del deploy, ejecutar Lighthouse con:
- Mode: Desktop
- Throttling: Slow 4G
- Clear Storage: Yes

Target: **Performance 85+**
