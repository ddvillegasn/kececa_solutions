#!/usr/bin/env node

/**
 * VERIFICACIÓN DE OPTIMIZACIÓN LIGHTHOUSE
 * ========================================
 * 
 * Este script verifica que todas las optimizaciones se aplicaron correctamente
 */

const fs = require('fs');
const path = require('path');

const OPTIMIZED_DIR = path.join(__dirname, '../public/assets/images-optimized');
const COMPONENTS_TO_CHECK = [
  '../src/app/page.tsx',
  '../src/components/Header.tsx',
  '../src/components/VisualServiceCard.tsx',
  '../src/components/ProjectShowcaseVisual.tsx',
];

console.log('🔍 VERIFICACIÓN DE OPTIMIZACIÓN LIGHTHOUSE\n');
console.log('===========================================\n');

// 1. Verificar que exista la carpeta de imágenes optimizadas
console.log('📁 Verificando carpeta de imágenes optimizadas...');
if (fs.existsSync(OPTIMIZED_DIR)) {
  const files = fs.readdirSync(OPTIMIZED_DIR, { recursive: true });
  const webpFiles = files.filter(f => String(f).endsWith('.webp'));
  console.log(`   ✅ Carpeta existe: ${OPTIMIZED_DIR}`);
  console.log(`   ✅ Imágenes WebP generadas: ${webpFiles.length}\n`);
} else {
  console.log(`   ❌ ERROR: Carpeta no existe`);
  console.log(`   Ejecuta: node scripts/optimize-images.js\n`);
  process.exit(1);
}

// 2. Verificar componentes actualizados
console.log('🔧 Verificando componentes actualizados...');
let allComponentsOk = true;

COMPONENTS_TO_CHECK.forEach(componentPath => {
  const fullPath = path.join(__dirname, componentPath);
  const content = fs.readFileSync(fullPath, 'utf8');
  
  const fileName = path.basename(componentPath);
  const hasPicture = content.includes('<picture>');
  const hasWebP = content.includes('image/webp');
  const hasSrcSet = content.includes('srcSet');
  const hasLazyLoading = content.includes('loading=');
  const hasWidthHeight = content.includes('width={') || content.includes('width=');
  
  console.log(`\n   📄 ${fileName}`);
  console.log(`      ${hasPicture ? '✅' : '❌'} Usa <picture>`);
  console.log(`      ${hasWebP ? '✅' : '❌'} Formato WebP`);
  console.log(`      ${hasSrcSet ? '✅' : '❌'} srcSet responsivo`);
  console.log(`      ${hasLazyLoading ? '✅' : '❌'} Lazy loading`);
  console.log(`      ${hasWidthHeight ? '✅' : '❌'} Width/Height`);
  
  if (!hasPicture || !hasWebP || !hasSrcSet) {
    allComponentsOk = false;
  }
});

console.log('\n');

if (!allComponentsOk) {
  console.log('⚠️  ADVERTENCIA: Algunos componentes no están completamente optimizados');
  console.log('   Revisa el archivo LIGHTHOUSE-OPTIMIZATION-GUIDE.md\n');
}

// 3. Calcular ahorro de espacio
console.log('💾 Calculando ahorro de espacio...');
const getDirectorySize = (dirPath) => {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else if (file.isFile()) {
      totalSize += fs.statSync(filePath).size;
    }
  }
  
  return totalSize;
};

const originalDir = path.join(__dirname, '../public/assets/images');
const originalSize = getDirectorySize(originalDir);
const optimizedSize = getDirectorySize(OPTIMIZED_DIR);
const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

console.log(`   📦 Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
console.log(`   📦 Tamaño optimizado: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
console.log(`   💰 Ahorro: ${savings}%\n`);

// 4. Próximos pasos
console.log('📋 PRÓXIMOS PASOS:\n');
console.log('   1. Ejecuta: npm run build');
console.log('   2. Ejecuta: npm start');
console.log('   3. Abre: http://localhost:3000');
console.log('   4. DevTools → Network → Filter "img"');
console.log('   5. Verifica que se cargan .webp');
console.log('   6. Lighthouse → Run audit');
console.log('   7. Objetivo: Performance 95-100\n');

console.log('🚀 Si todo está OK, haz:');
console.log('   git add .');
console.log('   git commit -m "feat: Lighthouse optimization - WebP responsive images"');
console.log('   git push origin main\n');

console.log('✅ Verificación completada\n');
