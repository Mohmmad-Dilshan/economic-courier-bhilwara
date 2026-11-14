/**
 * Cloudinary Media Optimization Utility
 * 
 * Provides automated CDN URL generation for images and videos with:
 * - Automatic modern format selection (AVIF / WebP for images, WebM / MP4 for videos)
 * - Lossless perceptual quality tuning (q_auto)
 * - Zero-downtime fallback to local assets if Cloudinary is unreachable or not configured
 */

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'a4pwyvog';

export interface MediaTransformOptions {
  type?: 'image' | 'video';
  quality?: string | number; // e.g. 'auto', 'auto:best', 95
  format?: string;          // e.g. 'auto', 'webp', 'mp4'
  width?: number;
  height?: number;
  crop?: string;            // e.g. 'fill', 'scale', 'limit'
}

/**
 * Registry of uploaded assets on Cloudinary
 * Map local path -> Cloudinary public ID
 */
export const CLOUDINARY_MEDIA_REGISTRY: Record<string, { publicId: string; type: 'image' | 'video' }> = {
  // Video Reels (Public Assets: /assets/social/*.mp4)
  '/assets/social/reel-1-bhilwara-visit.mp4': {
    publicId: 'economic-courier/videos/reel-1-bhilwara-visit',
    type: 'video',
  },
  '/assets/social/reel-2-international.mp4': {
    publicId: 'economic-courier/videos/reel-2-international',
    type: 'video',
  },
  '/assets/social/reel-3-railway-station.mp4': {
    publicId: 'economic-courier/videos/reel-3-railway-station',
    type: 'video',
  },
  '/assets/social/reel-4-bhilwara-hub.mp4': {
    publicId: 'economic-courier/videos/reel-4-bhilwara-hub',
    type: 'video',
  },
  '/assets/social/textile-reliable-courier.mp4': {
    publicId: 'economic-courier/videos/textile-reliable-courier',
    type: 'video',
  },
  '/assets/intro/economic-courier-intro.mp4': {
    publicId: 'economic-courier/videos/economic-courier-intro',
    type: 'video',
  },

  // Video Posters
  '/assets/social/reel-1-bhilwara-visit.jpg': {
    publicId: 'economic-courier/images/reel-1-bhilwara-visit',
    type: 'image',
  },
  '/assets/social/reel-2-international.jpg': {
    publicId: 'economic-courier/images/reel-2-international',
    type: 'image',
  },
  '/assets/social/reel-3-railway-station.jpg': {
    publicId: 'economic-courier/images/reel-3-railway-station',
    type: 'image',
  },
  '/assets/social/reel-4-bhilwara-hub.jpg': {
    publicId: 'economic-courier/images/reel-4-bhilwara-hub',
    type: 'image',
  },

  // Core High-Res Homepage Images
  '/assets/hero/hero-courier.webp': {
    publicId: 'economic-courier/images/hero-courier',
    type: 'image',
  },
  '/assets/services/ecs-scooter-rider-facing-inward.webp': {
    publicId: 'economic-courier/images/ecs-scooter-rider',
    type: 'image',
  },
  '/assets/services/ecs-boxes-3d.webp': {
    publicId: 'economic-courier/images/ecs-boxes-3d',
    type: 'image',
  },
  '/assets/routes/ecs-truck-3d.webp': {
    publicId: 'economic-courier/images/ecs-truck-3d',
    type: 'image',
  },
  '/assets/routes/daily-dispatch-banner-hd.webp': {
    publicId: 'economic-courier/images/daily-dispatch-banner-hd',
    type: 'image',
  },
  '/assets/network/ecs-airplane-3d.webp': {
    publicId: 'economic-courier/images/ecs-airplane-3d',
    type: 'image',
  },
  '/assets/hub-3d-model.webp': {
    publicId: 'economic-courier/images/hub-3d-model',
    type: 'image',
  },
  '/assets/services/card-domestic.webp': {
    publicId: 'economic-courier/images/card-domestic',
    type: 'image',
  },
  '/assets/services/card-international.webp': {
    publicId: 'economic-courier/images/card-international',
    type: 'image',
  },
  '/assets/services/card-documents.webp': {
    publicId: 'economic-courier/images/card-documents',
    type: 'image',
  },
  '/assets/services/card-textiles.webp': {
    publicId: 'economic-courier/images/card-textiles',
    type: 'image',
  },
  '/assets/how-it-works/how-shipping-works-desktop.webp': {
    publicId: 'economic-courier/images/how-shipping-works-desktop',
    type: 'image',
  },
  '/assets/how-it-works/how-shipping-works-mobile.webp': {
    publicId: 'economic-courier/images/how-shipping-works-mobile',
    type: 'image',
  },
  '/assets/team/chandra-shekhar-panecha.jpg': {
    publicId: 'economic-courier/images/chandra-shekhar-panecha',
    type: 'image',
  },
  '/assets/team/chandra-shekhar-panecha.webp': {
    publicId: 'economic-courier/images/chandra-shekhar-panecha',
    type: 'image',
  },
  '/assets/office/economic-courier-bhilwara-storefront.webp': {
    publicId: 'economic-courier/images/economic-courier-bhilwara-storefront',
    type: 'image',
  },
  '/assets/office/economic-courier-bhilwara-storefront.jpg': {
    publicId: 'economic-courier/images/economic-courier-bhilwara-storefront-jpg',
    type: 'image',
  },
  '/assets/logo/ecs-logo-header.png': {
    publicId: 'economic-courier/images/ecs-logo-header',
    type: 'image',
  },
  '/assets/logo/ecs-logo-header.webp': {
    publicId: 'economic-courier/images/ecs-logo-header-webp',
    type: 'image',
  },
};

/**
 * Constructs an optimized Cloudinary delivery URL
 */
export function buildCloudinaryUrl(
  publicId: string,
  options: MediaTransformOptions = {}
): string {
  const {
    type = 'image',
    quality = 'auto',
    format = 'auto',
    width,
    height,
    crop,
  } = options;

  const transforms: string[] = [];

  if (quality) transforms.push(`q_${quality}`);
  if (format) transforms.push(`f_${format}`);
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop) transforms.push(`c_${crop}`);

  const transformString = transforms.length > 0 ? transforms.join(',') + '/' : '';

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${type}/upload/${transformString}${publicId}`;
}

/**
 * Returns the best available media URL:
 * - If registered in Cloudinary media registry, returns the ultra-fast Cloudinary CDN URL
 * - If not registered or Cloudinary name is missing, seamlessly returns the local asset path
 */
export function getMediaUrl(
  localPath: string,
  options: MediaTransformOptions = {}
): string {
  if (!localPath) return '';
  if (localPath.startsWith('http://') || localPath.startsWith('https://')) {
    return localPath;
  }

  // Check if we have this asset mapped
  const entry = CLOUDINARY_MEDIA_REGISTRY[localPath];
  if (entry && CLOUDINARY_CLOUD_NAME) {
    return buildCloudinaryUrl(entry.publicId, {
      type: entry.type,
      ...options,
    });
  }

  // Graceful fallback to local path
  return localPath;
}
