/**
 * Script de optimización de imágenes para Lighthouse Performance
 * 
 * Convierte todas las imágenes JPG/PNG a WebP con 3 tamaños responsivos
 * Objetivo: Performance Score 95-100, LCP < 2.2s
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración
const INPUT_DIR = path.join(__dirname, '../public/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images-optimized');

// Tamaños responsivos para generar
const SIZES = [
  { suffix: '-mobile', width: 400, quality: 80 },
  { suffix: '-tablet', width: 800, quality: 82 },
  { suffix: '-desktop', width: 1200, quality: 85 },
];

// Imágenes prioritarias (hero, above-fold)
const PRIORITY_IMAGES = [
  'oficina trabajo.jpg',
  'cafe oficina.jpg',
  'desarrollo web.jpg',
  'memoria ram roja.jpg',
  'fronted.jpg',
  'imagen geometrica.jpg',
  'PRINCIPAL CONEXA.jpg',
  'PRINCIPAL MEDIDINO.jpg',
  'PORTADA VITALIS.jpg',
  'PRINCIPAL INVENTARIO.jpg',
  'PORTADA BOT.jpg',
];

// Crear directorio de salida si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  
  // Solo procesar JPG, JPEG, PNG
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  const baseName = path.basename(filename, ext);
  const relativePath = path.relative(INPUT_DIR, path.dirname(inputPath));
  const outputSubDir = path.join(OUTPUT_DIR, relativePath);

  // Crear subdirectorio si no existe
  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }

  console.log(`\n📸 Optimizando: ${filename}`);

  // Obtener dimensiones originales
  const metadata = await sharp(inputPath).metadata();
  console.log(`   Original: ${metadata.width}x${metadata.height} - ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB`);

  let totalSaved = 0;

  // Generar cada tamaño responsivo
  for (const size of SIZES) {
    const outputPath = path.join(outputSubDir, `${baseName}${size.suffix}.webp`);
    
    try {
      await sharp(inputPath)
        .resize(size.width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: size.quality })
        .toFile(outputPath);

      const outputSize = fs.statSync(outputPath).size;
      totalSaved += outputSize;
      
      console.log(`   ✅ ${size.suffix.replace('-', '')}: ${size.width}w - ${(outputSize / 1024).toFixed(0)}KB`);
    } catch (error) {
      console.error(`   ❌ Error generando ${size.suffix}: ${error.message}`);
    }
  }

  const originalSize = fs.statSync(inputPath).size;
  const avgNewSize = totalSaved / SIZES.length;
  const savings = ((originalSize - avgNewSize) / originalSize * 100).toFixed(1);
  
  console.log(`   💾 Ahorro promedio: ${savings}%`);
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      await processDirectory(fullPath);
    } else if (item.isFile()) {
      await optimizeImage(fullPath, item.name);
    }
  }
}

async function main() {
  console.log('🚀 OPTIMIZACIÓN DE IMÁGENES PARA LIGHTHOUSE');
  console.log('===========================================\n');
  console.log(`📂 Input:  ${INPUT_DIR}`);
  console.log(`📂 Output: ${OUTPUT_DIR}`);
  console.log(`\n🎯 Generando 3 tamaños por imagen: 400w, 800w, 1200w`);
  console.log(`📦 Formato: WebP con calidad 80-85\n`);

  const startTime = Date.now();

  // Procesar imágenes prioritarias primero
  console.log('\n🔥 FASE 1: IMÁGENES PRIORITARIAS (Hero & Above-fold)\n');
  for (const filename of PRIORITY_IMAGES) {
    const fullPath = path.join(INPUT_DIR, filename);
    if (fs.existsSync(fullPath)) {
      await optimizeImage(fullPath, filename);
    } else {
      // Buscar en subdirectorios
      const found = await findFile(INPUT_DIR, filename);
      if (found) {
        await optimizeImage(found, filename);
      }
    }
  }

  // Procesar el resto
  console.log('\n\n📦 FASE 2: RESTO DE IMÁGENES\n');
  await processDirectory(INPUT_DIR);

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(1);

  console.log('\n\n✅ OPTIMIZACIÓN COMPLETADA');
  console.log('==========================');
  console.log(`⏱️  Tiempo: ${duration}s`);
  console.log(`📁 Archivos generados en: ${OUTPUT_DIR}`);
  console.log('\n📋 PRÓXIMOS PASOS:');
  console.log('   1. Verificar que las imágenes se ven bien');
  console.log('   2. Actualizar rutas en componentes (siguiente script)');
  console.log('   3. Ejecutar npm run build y probar en Netlify');
  console.log('   4. Medir con Lighthouse\n');
}

async function findFile(dir, filename) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      const found = await findFile(fullPath, filename);
      if (found) return found;
    } else if (item.name === filename) {
      return fullPath;
    }
  }

  return null;
}

main().catch(console.error);
