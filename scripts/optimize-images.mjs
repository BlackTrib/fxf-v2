import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const portfolioDir = path.join(__dirname, '../public/portfolio');

const files = fs.readdirSync(portfolioDir).filter(f => /\.(jpg|png|jpeg)$/i.test(f));

console.log(`Found ${files.length} images to optimize...`);

for (const file of files) {
  const inputPath = path.join(portfolioDir, file);
  const filename = path.parse(file).name;
  const tempPath = path.join(portfolioDir, `.${filename}.tmp.jpg`);
  const webpPath = path.join(portfolioDir, `${filename}.webp`);
  const avifPath = path.join(portfolioDir, `${filename}.avif`);

  try {
    // Optimize to temporary file
    await sharp(inputPath)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 75, progressive: true })
      .toFile(tempPath);

    // Replace original with optimized
    fs.renameSync(tempPath, inputPath);

    // Create WebP version
    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(webpPath);

    // Create AVIF version
    await sharp(inputPath)
      .avif({ quality: 65 })
      .toFile(avifPath);

    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const avifSize = fs.statSync(avifPath).size;

    const webpReduction = ((1 - webpSize / originalSize) * 100).toFixed(1);
    const avifReduction = ((1 - avifSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${file}`);
    console.log(`  JPEG: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`  WebP: ${(webpSize / 1024).toFixed(1)}KB (${webpReduction}% smaller)`);
    console.log(`  AVIF: ${(avifSize / 1024).toFixed(1)}KB (${avifReduction}% smaller)`);
  } catch (error) {
    console.error(`✗ Error optimizing ${file}:`, error.message);
  }
}

console.log('\nImage optimization complete!');
