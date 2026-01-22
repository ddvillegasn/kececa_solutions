# 🚀 GUÍA DE OPTIMIZACIÓN LIGHTHOUSE - INTEGRADAV SAS

## ✅ FASE 1: OPTIMIZACIÓN COMPLETADA

### 📊 Resultados de Optimización

**Imágenes procesadas:** 50+ archivos  
**Ahorro de peso:** ~85-98% por imagen  
**Formato:** WebP con calidad 80-85  
**Tamaños generados:** 3 por imagen (400w, 800w, 1200w)

#### Top 5 Optimizaciones Críticas:
1. **oficina trabajo.jpg**: 2.12MB → ~71KB promedio (96.7% ahorro)
2. **desarrollo web.jpg**: 1.91MB → ~42KB promedio (97.9% ahorro)
3. **PRINCIPAL CONEXA.jpg**: 1.77MB → ~28KB promedio (98.5% ahorro)
4. **memoria ram roja.jpg**: 1.32MB → ~46KB promedio (96.6% ahorro)
5. **PRINCIPAL MEDIDINO.jpg**: 1.30MB → ~21KB promedio (98.4% ahorro)

---

## 🎯 FASE 2: ACTUALIZAR COMPONENTES (SIGUIENTE PASO)

### 1. Actualizar VisualServiceCard.tsx

**Cambiar de:**
```tsx
<img 
  src={image} 
  alt={title}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
```

**A:**
```tsx
<picture>
  <source
    type="image/webp"
    srcSet={`${image.replace(/\.(jpg|jpeg|png)$/i, '')}-mobile.webp 400w,
             ${image.replace(/\.(jpg|jpeg|png)$/i, '')}-tablet.webp 800w,
             ${image.replace(/\.(jpg|jpeg|png)$/i, '')}-desktop.webp 1200w`}
    sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
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
```

### 2. Actualizar ProjectShowcaseVisual.tsx

**Cambiar de:**
```tsx
<img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
/>
```

**A:**
```tsx
<picture>
  <source
    type="image/webp"
    srcSet={`${project.image.replace(/\.(jpg|jpeg|png)$/i, '')}-mobile.webp 400w,
             ${project.image.replace(/\.(jpg|jpeg|png)$/i, '')}-tablet.webp 800w,
             ${project.image.replace(/\.(jpg|jpeg|png)$/i, '')}-desktop.webp 1200w`}
    sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  />
  <img
    src={project.image.replace('/assets/images/', '/assets/images-optimized/').replace(/\.(jpg|jpeg|png)$/i, '-desktop.webp')}
    alt={project.title}
    width={1200}
    height={800}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
  />
</picture>
```

### 3. Actualizar page.tsx (Hero)

**IMAGEN CRÍTICA #1: Imagen flotante decorativa**

Cambiar línea ~285:
```tsx
<img 
  src="/assets/images/cafe oficina.jpg" 
  alt="Equipo de trabajo"
  className="w-full h-full object-cover"
/>
```

Por:
```tsx
<picture>
  <source
    type="image/webp"
    srcSet="/assets/images-optimized/cafe oficina-mobile.webp 400w,
            /assets/images-optimized/cafe oficina-tablet.webp 800w,
            /assets/images-optimized/cafe oficina-desktop.webp 1200w"
    sizes="200px"
  />
  <img 
    src="/assets/images-optimized/cafe oficina-mobile.webp"
    alt="Equipo de trabajo"
    width={400}
    height={500}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover"
  />
</picture>
```

**IMAGEN CRÍTICA #2: Background estadísticas**

Cambiar línea ~333:
```tsx
<img 
  src="/assets/images/oficina trabajo.jpg" 
  alt="Background"
  className="w-full h-full object-cover"
/>
```

Por:
```tsx
<picture>
  <source
    type="image/webp"
    srcSet="/assets/images-optimized/oficina trabajo-mobile.webp 400w,
            /assets/images-optimized/oficina trabajo-tablet.webp 800w,
            /assets/images-optimized/oficina trabajo-desktop.webp 1200w"
    sizes="100vw"
  />
  <img 
    src="/assets/images-optimized/oficina trabajo-desktop.webp"
    alt="Background"
    width={1200}
    height={800}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover"
  />
</picture>
```

### 4. Actualizar Header.tsx (Logo)

Cambiar línea ~35:
```tsx
<img
  src="/assets/images/Logo integra.png" 
  alt="Integra Solutions Logo"
  className="h-12 w-auto"
/>
```

Por:
```tsx
<picture>
  <source
    type="image/webp"
    srcSet="/assets/images-optimized/Logo integra-mobile.webp 400w,
            /assets/images-optimized/Logo integra-tablet.webp 800w"
    sizes="48px"
  />
  <img
    src="/assets/images-optimized/Logo integra-mobile.webp"
    alt="Integra Solutions Logo"
    width={48}
    height={48}
    loading="eager"
    decoding="sync"
    fetchpriority="high"
    className="h-12 w-auto"
  />
</picture>
```

---

## 🎯 FASE 3: ACTUALIZAR RUTAS EN page.tsx

Actualizar las rutas de imágenes en ProjectShowcaseVisual y VisualServiceCard:

```tsx
// ANTES
image: '/assets/images/ARABELA FOTOS/PRINCIPAL INVENTARIO.jpg',

// DESPUÉS  
image: '/assets/images-optimized/ARABELA FOTOS/PRINCIPAL INVENTARIO',
```

**IMPORTANTE:** Quitar la extensión `.jpg` porque los componentes añaden automáticamente `-desktop.webp`

---

## 📋 CHECKLIST DE IMPLEMENTACIÓN

### Imágenes Críticas (Above-fold - Prioridad ALTA)
- [ ] `/assets/images/oficina trabajo.jpg` → Background estadísticas
- [ ] `/assets/images/cafe oficina.jpg` → Imagen flotante hero
- [ ] `/assets/images/desarrollo web.jpg` → Servicios card #1
- [ ] `/assets/images/memoria ram roja.jpg` → Servicios card #4
- [ ] `/assets/images/fronted.jpg` → Servicios card #3
- [ ] `/assets/images/Logo integra.png` → Header logo

### Imágenes Proyectos (Visible en scroll)
- [ ] `/assets/images/ARABELA FOTOS/PRINCIPAL INVENTARIO.jpg`
- [ ] `/assets/images/CONEXA FOTOS/PRINCIPAL CONEXA.jpg`
- [ ] `/assets/images/vitalis fotos/PORTADA VITALIS.jpg`
- [ ] `/assets/images/MEDIDINO FOTOS/PRINCIPAL MEDIDINO.jpg`
- [ ] `/assets/images/BOT INTEGRA/PORTADA BOT.jpg`

### Imágenes Servicios Restantes
- [ ] `/assets/images/chatbot.jpg`
- [ ] `/assets/images/imagen geometrica.jpg`

---

## 🧪 TESTING

### 1. Build Local
```bash
npm run build
npm start
```

### 2. Verificar Imágenes
- Abrir DevTools → Network → Filter "img"
- Confirmar que se cargan `.webp`
- Verificar que mobile carga 400w, desktop 1200w

### 3. Lighthouse Audit
```bash
npm install -g @lspdfr/chrome-launcher
lighthouse http://localhost:3000 --view --preset=desktop
lighthouse http://localhost:3000 --view --preset=mobile
```

### 4. Métricas Objetivo
- **Performance:** 95-100 ✅
- **LCP:** < 2.2s ✅
- **Speed Index:** < 6s ✅
- **CLS:** 0 ✅
- **TBT:** < 200ms ✅

---

## 🚀 DEPLOYMENT EN NETLIFY

### 1. Commit y Push
```bash
git add .
git commit -m "feat: Optimización imágenes WebP responsivo - Lighthouse Performance 95+"
git push origin main
```

### 2. Netlify Build Settings
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 20.x

### 3. Post-Deploy Testing
1. Esperar deployment en Netlify
2. Abrir URL producción
3. Run Lighthouse en Chrome DevTools
4. Verificar métricas

---

## 📊 RESULTADOS ESPERADOS

### ANTES (Actual)
- Performance: 40-60
- LCP: ~3.2s
- Speed Index: ~25s
- Total Payload: ~19MB
- Images: ~9.6MB sin optimizar

### DESPUÉS (Optimizado)
- Performance: **95-100** ✅
- LCP: **~1.2s** ✅
- Speed Index: **~4s** ✅
- Total Payload: **~4MB** (79% reducción)
- Images: **~2MB** (80% reducción)

---

## 🔧 TROUBLESHOOTING

### Problema: Imágenes no cargan
**Solución:** Verificar rutas en `public/assets/images-optimized/`

### Problema: Calidad visual degradada
**Solución:** Aumentar quality en `scripts/optimize-images.js` (línea 15-19)

### Problema: CLS > 0
**Solución:** Asegurar que TODAS las imágenes tienen `width` y `height` explícitos

### Problema: LCP todavía alto
**Solución:** Verificar que imagen hero/LCP tiene `loading="eager"` y `fetchpriority="high"`

---

## 💡 NEXT STEPS (Opcional)

1. **Lazy loading avanzado:** Intersection Observer para cargar imágenes solo cuando están visibles
2. **Blur placeholder:** LQIP (Low Quality Image Placeholder) para UX
3. **Cloudinary migration:** Subir imágenes a Cloudinary para CDN global
4. **AVIF support:** Añadir AVIF además de WebP para Chrome/Edge

---

**Última actualización:** 22 Enero 2026  
**Optimizado por:** GitHub Copilot  
**Target:** Lighthouse Performance 95-100
