/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */
const sharp = require('sharp');
const path = require('path');

const sourceImage = 'C:/Users/HP/.gemini/antigravity-ide/brain/55033c9a-fe10-44d7-b3d9-4ea6a340d09c/.user_uploaded/media_1792939432415.jpg';

async function generateHighQualityAssets() {
  console.log('Generating 2x high-resolution assets with lanczos3 resampling & sharpening...');

  // 1. Hero right visual (X: 300 to 675, Y: 40 to 275)
  // 375x235 -> 2x = 750x470
  await sharp(sourceImage)
    .extract({ left: 300, top: 40, width: 375, height: 235 })
    .resize(750, 470, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .webp({ quality: 95 })
    .toFile('public/assets/hero/hero-courier.webp');

  await sharp(sourceImage)
    .extract({ left: 300, top: 40, width: 375, height: 235 })
    .resize(750, 470, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/hero/hero-courier.jpg');
  console.log('Hero courier asset generated (2x)');

  // 2. Service Cards Photos (Clean crop above the circle badge)
  // In reference 682x1024:
  // Card 1 Domestic: Left: 47, Top: 398, Width: 188, Height: 68
  // Notice: The circle badge is at bottom-left. If we crop the top 55px (Y: 398 to 453), it is pure photo!
  // Or if we crop Y: 398 to 468 and 2x upscale:
  await sharp(sourceImage)
    .extract({ left: 47, top: 398, width: 188, height: 68 })
    .resize(400, 145, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/services/service-domestic.jpg');

  await sharp(sourceImage)
    .extract({ left: 247, top: 398, width: 188, height: 68 })
    .resize(400, 145, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/services/service-international.jpg');

  await sharp(sourceImage)
    .extract({ left: 447, top: 398, width: 188, height: 68 })
    .resize(400, 145, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/services/service-documents.jpg');
  console.log('Service card assets generated (2x)');

  // 3. Reels Section
  // Reel 1: Inside eCS (Left: 200, Top: 573, Width: 215, Height: 118) -> 2x = 430x236
  await sharp(sourceImage)
    .extract({ left: 200, top: 573, width: 215, height: 118 })
    .resize(430, 236, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/social/reel-inside-ecs.jpg');

  // Reel 2: Team (Left: 420, Top: 573, Width: 68, Height: 118) -> 2x = 136x236
  await sharp(sourceImage)
    .extract({ left: 420, top: 573, width: 68, height: 118 })
    .resize(160, 260, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/social/reel-team.jpg');

  // Reel 3: Packing (Left: 493, Top: 573, Width: 68, Height: 118)
  await sharp(sourceImage)
    .extract({ left: 493, top: 573, width: 68, height: 118 })
    .resize(160, 260, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/social/reel-packing.jpg');

  // Reel 4: Dispatch (Left: 566, Top: 573, Width: 68, Height: 118)
  await sharp(sourceImage)
    .extract({ left: 566, top: 573, width: 68, height: 118 })
    .resize(160, 260, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/social/reel-dispatch.jpg');
  console.log('Reel assets generated (2x)');

  // 4. About Collage (Left: 30, Top: 722, Width: 350, Height: 142) -> 2x = 700x284
  await sharp(sourceImage)
    .extract({ left: 30, top: 722, width: 350, height: 142 })
    .resize(700, 284, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/office/about-collage.jpg');
  console.log('About collage generated (2x)');

  // 5. Map Graphic on right of contact strip
  // Left: 480, Top: 875, Width: 162, Height: 50 -> 2x = 324x100
  await sharp(sourceImage)
    .extract({ left: 480, top: 875, width: 162, height: 50 })
    .resize(324, 100, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/office/map-graphic.jpg');
  console.log('Map graphic generated (2x)');

  console.log('All 2x assets ready!');
}

generateHighQualityAssets().catch(console.error);
