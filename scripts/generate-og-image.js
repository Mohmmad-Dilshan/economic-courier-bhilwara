/* eslint-disable */
const sharp = require('sharp');
const path = require('path');

async function generateOG() {
  const width = 1200;
  const height = 630;

  // 1. Prepare Right-Side Authentic Logistics Photo
  // Dimensions for photo card: 490 x 490
  const photoW = 490;
  const photoH = 490;

  // Use hero-courier.jpg (courier staff, customer, eCS van & parcel box)
  // Extract and resize cleanly
  const photoBuffer = await sharp(path.join(__dirname, '../public/assets/hero/hero-courier.jpg'))
    .extract({ left: 60, top: 0, width: 690, height: 470 }) // crop away left red edge artifact
    .resize(photoW, photoH, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Create rounded corner mask for the photo
  const maskSvg = `
    <svg width="${photoW}" height="${photoH}" viewBox="0 0 ${photoW} ${photoH}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${photoW}" height="${photoH}" rx="24" ry="24" fill="#FFFFFF" />
    </svg>
  `;
  const roundedPhoto = await sharp(photoBuffer)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 2. Prepare Authentic eCS Logo
  // Load ecs-logo-transparent.png
  const logoW = 160;
  const logoH = 68;
  const logoBuffer = await sharp(path.join(__dirname, '../public/assets/logo/ecs-logo-transparent.png'))
    .resize(logoW, logoH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // 3. SVG Layout & Typography (Left Side & Frame)
  const leftX = 70;
  const photoX = 640;
  const photoY = 70;

  const svgContent = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background subtle gradient -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="60%" stop-color="#F8FAFC" />
        <stop offset="100%" stop-color="#EFF6FF" />
      </linearGradient>

      <!-- Brand red gradient -->
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#DC2626" />
        <stop offset="50%" stop-color="#EF4444" />
        <stop offset="100%" stop-color="#B91C1C" />
      </linearGradient>

      <!-- Top accent line gradient -->
      <linearGradient id="topLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#DC2626" />
        <stop offset="40%" stop-color="#1E3A8A" />
        <stop offset="80%" stop-color="#DC2626" />
      </linearGradient>

      <!-- Photo shadow filter -->
      <filter id="cardShadow" x="-10%" y="-10%" width="125%" height="125%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.12" />
      </filter>
    </defs>

    <!-- Base Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Subtle Dot Pattern in Background -->
    <g opacity="0.25">
      ${Array.from({ length: 18 }).map((_, r) =>
        Array.from({ length: 32 }).map((_, c) =>
          `<circle cx="${40 + c * 36}" cy="${40 + r * 32}" r="1.2" fill="#94A3B8" />`
        ).join('')
      ).join('')}
    </g>

    <!-- Top Accent Line (Official brand header signature) -->
    <rect x="0" y="0" width="${width}" height="6" fill="url(#topLineGrad)" />

    <!-- Outer Fine Border -->
    <rect x="1.5" y="1.5" width="${width - 3}" height="${height - 3}" fill="none" stroke="#E2E8F0" stroke-width="1.5" />

    <!-- Location & Network Badge -->
    <g transform="translate(${leftX}, 65)">
      <!-- Pill container -->
      <rect x="0" y="0" width="220" height="32" rx="16" fill="#FEF2F2" stroke="#FECACA" stroke-width="1.2" />
      <!-- Pulsing red dot -->
      <circle cx="18" cy="16" r="4.5" fill="#DC2626" />
      <text x="32" y="21" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="11" font-weight="800" fill="#B91C1C" letter-spacing="1.5">
        BHILWARA · RAJASTHAN
      </text>
    </g>

    <!-- Brand Lockup: Economic Courier Title beside Logo slot -->
    <!-- (Logo will be composited via sharp at x: 70, y: 110) -->
    <g transform="translate(245, 122)">
      <line x1="0" y1="0" x2="0" y2="44" stroke="#CBD5E1" stroke-width="1.5" />
      <text x="16" y="20" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="20" font-weight="900" fill="#0F172A" letter-spacing="-0.5">
        Economic Courier
      </text>
      <text x="16" y="38" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#DC2626" letter-spacing="2">
        BHILWARA CENTRAL HUB
      </text>
    </g>

    <!-- Large Headline: "Moving Every Shipment Forward." -->
    <g transform="translate(${leftX}, 235)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="48" font-weight="900" fill="#0F172A" letter-spacing="-1.5">
        Moving Every
      </text>
      <text x="0" y="56" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="48" font-weight="900" fill="#DC2626" letter-spacing="-1.5">
        Shipment Forward.
      </text>
    </g>

    <!-- Supporting Text: "Courier • Cargo • Logistics" -->
    <g transform="translate(${leftX}, 365)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#F1F5F9" />
      <text x="16" y="23" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="14" font-weight="800" fill="#1E3A8A" letter-spacing="1">
        COURIER • CARGO • LOGISTICS
      </text>
    </g>

    <!-- Description Paragraph -->
    <g transform="translate(${leftX}, 430)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="16" font-weight="500" fill="#475569">
        Domestic priority express &amp; worldwide air cargo connectivity,
      </text>
      <text x="0" y="26" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="16" font-weight="500" fill="#475569">
        tailored for Bhilwara textile trade, documents, and parcels.
      </text>
    </g>

    <!-- Service Feature Pills at Bottom Left -->
    <g transform="translate(${leftX}, 505)">
      <!-- Pill 1: Domestic Express -->
      <rect x="0" y="0" width="145" height="30" rx="15" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" />
      <circle cx="14" cy="15" r="3" fill="#DC2626" />
      <text x="24" y="19" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E293B">
        Domestic Express
      </text>

      <!-- Pill 2: Worldwide Air Cargo -->
      <rect x="155" y="0" width="160" height="30" rx="15" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" />
      <circle cx="169" cy="15" r="3" fill="#DC2626" />
      <text x="179" y="19" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E293B">
        Worldwide Cargo
      </text>

      <!-- Pill 3: Textile Logistics -->
      <rect x="325" y="0" width="145" height="30" rx="15" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" />
      <circle cx="339" cy="15" r="3" fill="#DC2626" />
      <text x="349" y="19" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E293B">
        Textile Logistics
      </text>
    </g>

    <!-- Sub-Brand Tagline at Bottom -->
    <g transform="translate(${leftX}, 570)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="13" font-weight="800" fill="#1E3A8A" letter-spacing="0.5">
        eCS World Wide Express
      </text>
      <text x="180" y="0" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="12" font-weight="600" fill="#94A3B8">
        · Connecting Businesses. Across Borders.
      </text>
    </g>

    <!-- Right-Side Photo Card Frame & Elevation (under photo) -->
    <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" rx="24" ry="24" fill="#FFFFFF" filter="url(#cardShadow)" />
    <!-- Photo Card Border -->
    <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" rx="24" ry="24" fill="none" stroke="#E2E8F0" stroke-width="2" />

    <!-- Floating Badge on Photo (Bottom-Right) -->
    <g transform="translate(${photoX + 20}, ${photoY + photoH - 60})">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1" />
      <circle cx="20" cy="20" r="4" fill="#22C55E" />
      <text x="32" y="24" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">
        Bhilwara Dispatch Hub
      </text>
    </g>

    <!-- Floating 220+ Countries Badge (Top-Right) -->
    <g transform="translate(${photoX + photoW - 190}, ${photoY + 20})">
      <rect x="0" y="0" width="170" height="34" rx="17" fill="rgba(255, 255, 255, 0.92)" stroke="#E2E8F0" stroke-width="1" />
      <text x="16" y="21" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="11.5" font-weight="800" fill="#DC2626">
        ✈ 220+ Countries
      </text>
      <text x="108" y="21" font-family="'Plus Jakarta Sans', Segoe UI, Arial, sans-serif" font-size="11.5" font-weight="700" fill="#0F172A">
        Network
      </text>
    </g>
  </svg>
  `;

  // 4. Composite All Layers Together: SVG Canvas + Logo + Rounded Photo
  const finalImage = await sharp(Buffer.from(svgContent))
    .composite([
      { input: logoBuffer, top: 110, left: leftX },
      { input: roundedPhoto, top: photoY, left: photoX },
    ])
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toFile(path.join(__dirname, '../public/assets/og/economic-courier-social.jpg'));

  console.log('Generated OG Image:', finalImage);
}

generateOG().catch(console.error);
