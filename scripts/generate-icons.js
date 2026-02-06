/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '..', 'public', 'jr.png');
const outputDir = path.join(__dirname, '..', 'public');

// Icon sizes needed for PWA
const iconSizes = [
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-32.png', size: 32 },
    { name: 'favicon-16.png', size: 16 },
];

async function generateIcons() {
    console.log('🎨 Generating PWA icons from jr.png...\n');

    for (const icon of iconSizes) {
        try {
            await sharp(inputImage)
                .resize(icon.size, icon.size, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .png({ quality: 100, compressionLevel: 9 })
                .toFile(path.join(outputDir, icon.name));

            console.log(`✅ Generated ${icon.name} (${icon.size}x${icon.size})`);
        } catch (error) {
            console.error(`❌ Error generating ${icon.name}:`, error.message);
        }
    }

    console.log('\n🎨 Generating WebP version...\n');

    // Generate WebP version for better performance
    try {
        await sharp(inputImage)
            .webp({ quality: 90 })
            .toFile(path.join(outputDir, 'jr.webp'));
        console.log('✅ Generated jr.webp (optimized)');
    } catch (error) {
        console.error('❌ Error generating WebP:', error.message);
    }

    // Generate Open Graph image (1200x630)
    console.log('\n🎨 Generating Open Graph image...\n');

    try {
        await sharp(inputImage)
            .resize(1200, 630, {
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            })
            .webp({ quality: 90 })
            .toFile(path.join(outputDir, 'og-image.webp'));
        console.log('✅ Generated og-image.webp (1200x630)');
    } catch (error) {
        console.error('❌ Error generating OG image:', error.message);
    }

    console.log('\n✨ All icons generated successfully!\n');

    // Display file sizes
    console.log('📊 File sizes:');
    const files = [...iconSizes.map(i => i.name), 'jr.webp', 'og-image.webp'];
    files.forEach(file => {
        const filePath = path.join(outputDir, file);
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            const sizeKB = (stats.size / 1024).toFixed(2);
            console.log(`   ${file}: ${sizeKB} KB`);
        }
    });
}

generateIcons().catch(console.error);
