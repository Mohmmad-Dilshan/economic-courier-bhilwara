import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Load .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      process.env[match[1].trim()] = match[2].trim();
    }
  });
}

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Error: Missing Cloudinary credentials in .env.local');
  process.exit(1);
}

const ASSETS_TO_UPLOAD = [
  // ─── 1. Videos (Heavy ~35MB, top priority for Cloudinary CDN Streaming) ───
  { localPath: 'public/assets/social/reel-1-bhilwara-visit.mp4', publicId: 'economic-courier/videos/reel-1-bhilwara-visit', type: 'video' },
  { localPath: 'public/assets/social/reel-2-international.mp4', publicId: 'economic-courier/videos/reel-2-international', type: 'video' },
  { localPath: 'public/assets/social/reel-3-railway-station.mp4', publicId: 'economic-courier/videos/reel-3-railway-station', type: 'video' },
  { localPath: 'public/assets/social/reel-4-bhilwara-hub.mp4', publicId: 'economic-courier/videos/reel-4-bhilwara-hub', type: 'video' },
  { localPath: 'public/assets/social/textile-reliable-courier.mp4', publicId: 'economic-courier/videos/textile-reliable-courier', type: 'video' },
  { localPath: 'public/assets/intro/economic-courier-intro.mp4', publicId: 'economic-courier/videos/economic-courier-intro', type: 'video' },

  // ─── 2. Video Poster Thumbnails ───
  { localPath: 'public/assets/social/reel-1-bhilwara-visit.jpg', publicId: 'economic-courier/images/reel-1-bhilwara-visit', type: 'image' },
  { localPath: 'public/assets/social/reel-2-international.jpg', publicId: 'economic-courier/images/reel-2-international', type: 'image' },
  { localPath: 'public/assets/social/reel-3-railway-station.jpg', publicId: 'economic-courier/images/reel-3-railway-station', type: 'image' },
  { localPath: 'public/assets/social/reel-4-bhilwara-hub.jpg', publicId: 'economic-courier/images/reel-4-bhilwara-hub', type: 'image' },

  // ─── 3. Core High-Res Homepage & Brand Images ───
  { localPath: 'public/assets/hero/hero-courier.webp', publicId: 'economic-courier/images/hero-courier', type: 'image' },
  { localPath: 'public/assets/services/ecs-scooter-rider-facing-inward.webp', publicId: 'economic-courier/images/ecs-scooter-rider', type: 'image' },
  { localPath: 'public/assets/services/ecs-boxes-3d.webp', publicId: 'economic-courier/images/ecs-boxes-3d', type: 'image' },
  { localPath: 'public/assets/routes/ecs-truck-3d.webp', publicId: 'economic-courier/images/ecs-truck-3d', type: 'image' },
  { localPath: 'public/assets/routes/daily-dispatch-banner-hd.webp', publicId: 'economic-courier/images/daily-dispatch-banner-hd', type: 'image' },
  { localPath: 'public/assets/network/ecs-airplane-3d.webp', publicId: 'economic-courier/images/ecs-airplane-3d', type: 'image' },
  { localPath: 'public/assets/hub-3d-model.webp', publicId: 'economic-courier/images/hub-3d-model', type: 'image' },
  { localPath: 'public/assets/services/card-domestic.webp', publicId: 'economic-courier/images/card-domestic', type: 'image' },
  { localPath: 'public/assets/services/card-international.webp', publicId: 'economic-courier/images/card-international', type: 'image' },
  { localPath: 'public/assets/services/card-documents.webp', publicId: 'economic-courier/images/card-documents', type: 'image' },
  { localPath: 'public/assets/services/card-textiles.webp', publicId: 'economic-courier/images/card-textiles', type: 'image' },
  { localPath: 'public/assets/team/chandra-shekhar-panecha.jpg', publicId: 'economic-courier/images/chandra-shekhar-panecha', type: 'image' },
  { localPath: 'public/assets/office/economic-courier-bhilwara-storefront.webp', publicId: 'economic-courier/images/economic-courier-bhilwara-storefront', type: 'image' },
  { localPath: 'public/assets/office/economic-courier-bhilwara-storefront.jpg', publicId: 'economic-courier/images/economic-courier-bhilwara-storefront-jpg', type: 'image' },
  { localPath: 'public/assets/logo/ecs-logo-header.png', publicId: 'economic-courier/images/ecs-logo-header', type: 'image' },
  { localPath: 'public/assets/logo/ecs-logo-header.webp', publicId: 'economic-courier/images/ecs-logo-header-webp', type: 'image' },
  { localPath: 'public/assets/how-it-works/how-shipping-works-desktop.webp', publicId: 'economic-courier/images/how-shipping-works-desktop', type: 'image' },
  { localPath: 'public/assets/how-it-works/how-shipping-works-mobile.webp', publicId: 'economic-courier/images/how-shipping-works-mobile', type: 'image' },
];

async function uploadFile({ localPath, publicId, type }) {
  const fullPath = path.resolve(process.cwd(), localPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`[SKIP] File not found: ${localPath}`);
    return null;
  }

  const stat = fs.statSync(fullPath);
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
  console.log(`[UPLOADING] ${localPath} (${sizeMB} MB) -> ${publicId} (${type})...`);

  const timestamp = Math.floor(Date.now() / 1000);
  const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
  const signature = crypto
    .createHash('sha1')
    .update(paramsToSign + apiSecret)
    .digest('hex');

  const fileBuffer = fs.readFileSync(fullPath);
  const mimeType = type === 'video' ? 'video/mp4' : (localPath.endsWith('.webp') ? 'image/webp' : (localPath.endsWith('.png') ? 'image/png' : 'image/jpeg'));
  
  const formData = new FormData();
  formData.append('file', new Blob([fileBuffer], { type: mimeType }), path.basename(localPath));
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp.toString());
  formData.append('public_id', publicId);
  formData.append('signature', signature);

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/${type}/upload`;
  const res = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`[FAIL] ${localPath}: ${res.status} ${errorText}`);
    return null;
  }

  const data = await res.json();
  console.log(`[SUCCESS] ${localPath} -> ${data.secure_url}`);
  return {
    localPath: '/' + localPath.replace(/^public\//, ''),
    publicId: data.public_id,
    secureUrl: data.secure_url,
    bytes: data.bytes,
    format: data.format,
    type: data.resource_type,
    width: data.width,
    height: data.height,
  };
}

async function main() {
  console.log(`=== Starting Cloudinary Media Upload (${ASSETS_TO_UPLOAD.length} assets) ===`);
  const manifestPath = path.resolve(process.cwd(), 'src/lib/cloudinary-manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch {
      manifest = {};
    }
  }

  for (const item of ASSETS_TO_UPLOAD) {
    const key = '/' + item.localPath.replace(/^public\//, '');
    if (manifest[key] && manifest[key].secureUrl) {
      console.log(`[ALREADY UPLOADED] ${item.localPath} -> ${manifest[key].secureUrl}`);
      continue;
    }

    try {
      const res = await uploadFile(item);
      if (res) {
        manifest[res.localPath] = res;
      }
    } catch (err) {
      console.error(`Error uploading ${item.localPath}:`, err);
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`\n=== Upload Completed! Manifest saved to src/lib/cloudinary-manifest.json ===`);
  console.log(`Total assets tracked in manifest: ${Object.keys(manifest).length}`);
}

main().catch(console.error);
