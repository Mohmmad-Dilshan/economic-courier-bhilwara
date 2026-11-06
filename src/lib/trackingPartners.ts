/**
 * Verified Logistics Network Partners & Tracking Resolvers
 *
 * Sourced directly from Economic Courier / eCS World Wide Express, Bhilwara:
 * - Inbound Channel: Blue Dart Express Limited
 * - Road Linehauls: Akash Ganga Courier, Shree Mahavir, AFEX Express
 * - Regional & Air: Air Star Xpress, GMS Worldwide, UPS International
 * - Local Hub: Bhilwara Dispatch Counter (Opposite New Cloth Market)
 *
 * Rules:
 * - Every URL is a verified genuine tracking portal ("Link Pate Ka").
 * - Where carrier supports direct URL query parameters (UPS, Blue Dart), we build direct deep links.
 * - Where carrier requires manual pasting (Akash Ganga, AFEX, Shree Mahavir, Air Star, GMS),
 *   we automatically copy the AWB to the clipboard and guide the user.
 * - For Bhilwara counter receipts (ECS-*, local numbers), we route to 1-click WhatsApp counter verification.
 */

export interface TrackingCarrier {
  id: string;
  name: string;
  shortName: string;
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  logoAsset: string;
  officialUrl: string;
  trackingMode: 'deep-link' | 'portal-copy' | 'counter-whatsapp';
  prefixHints: string[];
  sampleAwb: string;
  description: string;
  trackingTip: string;
  getTrackingUrl: (awb: string) => string;
}

export const VERIFIED_TRACKING_CARRIERS: TrackingCarrier[] = [
  {
    id: 'bluedart',
    name: 'Blue Dart Express Limited',
    shortName: 'Blue Dart',
    categoryLabel: 'Inbound Channel Partner',
    badge: 'Direct Deep Link',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    logoAsset: '/assets/partners/bluedart.png',
    officialUrl: 'https://www.bluedart.com',
    trackingMode: 'deep-link',
    prefixHints: ['BD', '9-11 DIGITS'],
    sampleAwb: 'BD908234123',
    description:
      'Designated commercial inbound channel partner for enterprise dispatches across Bhilwara, Chittorgarh, Nimbahera, and Vijayanagar.',
    trackingTip: 'Direct Blue Dart tracking query with your AWB reference.',
    getTrackingUrl: (awb: string) =>
      `https://www.bluedart.com/tracking?numbers=${encodeURIComponent(awb.trim())}`,
  },
  {
    id: 'ups',
    name: 'United Parcel Service (UPS)',
    shortName: 'UPS Express',
    categoryLabel: 'International Air Courier',
    badge: 'Direct Deep Link',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    logoAsset: '/assets/partners/ups.svg',
    officialUrl: 'https://www.ups.com',
    trackingMode: 'deep-link',
    prefixHints: ['1Z', '18 CHARS'],
    sampleAwb: '1Z9999999999999999',
    description:
      'Global air logistics channel for cross-border commercial textile swatches, overseas documents, and priority air cargo to 220+ countries.',
    trackingTip: 'Direct UPS worldwide tracking prefilled with your consignment number.',
    getTrackingUrl: (awb: string) =>
      `https://www.ups.com/track?loc=en_IN&tracknum=${encodeURIComponent(awb.trim())}`,
  },
  {
    id: 'akash-ganga',
    name: 'Akash Ganga Courier Limited',
    shortName: 'Akash Ganga',
    categoryLabel: 'National Road Linehaul',
    badge: 'Auto-Copy & Portal',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    logoAsset: '/assets/partners/akash-ganga.png',
    officialUrl: 'https://agcgroup.in',
    trackingMode: 'portal-copy',
    prefixHints: ['AG', 'AGC', '7-9 DIGITS'],
    sampleAwb: 'AG88349102',
    description:
      'High-capacity national road linehaul network and commercial parcel logistics, carrying industrial textile bales and retail trade consignments.',
    trackingTip: 'AWB auto-copied to clipboard. Opens official AGC tracking portal in 1 click.',
    getTrackingUrl: () => 'https://agcgroup.in/track-now/',
  },
  {
    id: 'afex',
    name: 'AFEX Express India Pvt. Ltd.',
    shortName: 'AFEX Express',
    categoryLabel: 'Trade Corridors & Cargo',
    badge: 'Auto-Copy & Portal',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    logoAsset: '/assets/partners/afex.png',
    officialUrl: 'https://afexline.com',
    trackingMode: 'portal-copy',
    prefixHints: ['AF', 'AFX'],
    sampleAwb: 'AFX550192',
    description:
      'Specialized trade parcel and cargo service connecting western commercial corridors, textile fabric freight, and Gujarat/Maharashtra hubs.',
    trackingTip: 'AWB auto-copied to clipboard. Opens AFEX India shipment tracking.',
    getTrackingUrl: () => 'https://afexline.com/shipment-tracking/',
  },
  {
    id: 'shree-mahavir',
    name: 'Shree Mahavir Express Services Pvt. Ltd.',
    shortName: 'Shree Mahavir',
    categoryLabel: 'Pan-India Domestic Courier',
    badge: 'Auto-Copy & Portal',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    logoAsset: '/assets/partners/shree-mahavir.jpg',
    officialUrl: 'https://shreemahavircourier.com',
    trackingMode: 'portal-copy',
    prefixHints: ['SM', 'SHREE'],
    sampleAwb: 'SM7729104',
    description:
      'Pan-India domestic parcel and commercial document forwarding network connecting regional retail centers and tier-2/3 trade towns.',
    trackingTip: 'AWB auto-copied to clipboard. Opens Shree Mahavir domestic tracking portal.',
    getTrackingUrl: () => 'https://shreemahavircourier.com/',
  },
  {
    id: 'airstar',
    name: 'Air Star Xpress Couriers',
    shortName: 'Air Star Xpress',
    categoryLabel: 'Regional & West India Express',
    badge: 'Auto-Copy & Portal',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    logoAsset: '/assets/partners/airstar.svg',
    officialUrl: 'https://www.airstarxpress.com',
    trackingMode: 'portal-copy',
    prefixHints: ['AS', 'ASX'],
    sampleAwb: 'AS339812',
    description:
      'Regional air and surface express parcel connectivity across Rajasthan, Gujarat, and western manufacturing corridors.',
    trackingTip: 'AWB auto-copied to clipboard. Opens Air Star Xpress tracking interface.',
    getTrackingUrl: () => 'https://www.airstarxpress.com/',
  },
  {
    id: 'gms',
    name: 'GMS Worldwide Express',
    shortName: 'GMS Worldwide',
    categoryLabel: 'Express Parcel Network',
    badge: 'Auto-Copy & Portal',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    logoAsset: '/assets/partners/gms.svg',
    officialUrl: 'https://www.gmsworldwide.com/',
    trackingMode: 'portal-copy',
    prefixHints: ['GM', 'GMS'],
    sampleAwb: 'GMS642109',
    description:
      'Domestic express cargo and courier network for commercial consignments, documents, and retail trade parcels.',
    trackingTip: 'AWB auto-copied to clipboard. Opens GMS Worldwide tracking portal.',
    getTrackingUrl: () => 'https://www.gmsworldwide.com/',
  },
  {
    id: 'ecs-counter',
    name: 'Bhilwara Central Hub (Local Corridors)',
    shortName: 'Bhilwara Desk',
    categoryLabel: 'Counter Booking & Highway Corridors',
    badge: 'WhatsApp Instant Verification',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold',
    logoAsset: '/assets/logo/ecs-logo-header.png',
    officialUrl: 'https://wa.me/918955144444',
    trackingMode: 'counter-whatsapp',
    prefixHints: ['ECS', 'EC', 'LOCAL SLIP'],
    sampleAwb: 'ECS-BHL-4912',
    description:
      'Dedicated Rajasthan highway linehauls (Jaipur, Jodhpur, Kota, Udaipur, Ahmedabad) booked directly at our counter opposite New Cloth Market.',
    trackingTip: 'Instant status check on WhatsApp with Bhilwara dispatch operations desk.',
    getTrackingUrl: (awb: string) =>
      `https://wa.me/918955144444?text=${encodeURIComponent(
        `Hello Economic Courier Bhilwara, please verify status for consignment docket: ${awb.trim() || 'New Docket'}`
      )}`,
  },
];

/**
 * Intelligent Carrier Detector based on Bhilwara counter receipt formats
 */
export function detectCarrier(awb: string): TrackingCarrier | null {
  const clean = awb.trim().toUpperCase();
  if (!clean || clean.length < 3) return null;

  // 1. UPS 1Z international air format
  if (clean.startsWith('1Z') || (/^[A-Z0-9]{18}$/.test(clean) && clean.startsWith('1'))) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'ups') || null;
  }

  // 2. Blue Dart (BD prefix or standard 8-11 digit numeric airway bill)
  if (clean.startsWith('BD') || clean.startsWith('BLUEDART')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'bluedart') || null;
  }

  // 3. Akash Ganga Courier (AG, AGC, or 7-9 digit consignment format)
  if (clean.startsWith('AG') || clean.startsWith('AGC')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'akash-ganga') || null;
  }

  // 4. AFEX Express India
  if (clean.startsWith('AF') || clean.startsWith('AFX')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'afex') || null;
  }

  // 5. Air Star Xpress
  if (clean.startsWith('AS') || clean.startsWith('ASX')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'airstar') || null;
  }

  // 6. GMS Worldwide
  if (clean.startsWith('GM') || clean.startsWith('GMS')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'gms') || null;
  }

  // 7. Shree Mahavir Express
  if (clean.startsWith('SM') || clean.startsWith('SHREE')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'shree-mahavir') || null;
  }

  // 8. Economic Courier / Bhilwara internal receipt docket
  if (clean.startsWith('ECS') || clean.startsWith('EC') || clean.startsWith('BHL')) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'ecs-counter') || null;
  }

  // 9. Numeric length fallbacks common in Indian couriers:
  // 8-11 digits without letters -> Blue Dart is primary provider in Bhilwara hub
  if (/^\d{8,11}$/.test(clean)) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'bluedart') || null;
  }

  // 4-6 digits -> Local Bhilwara counter slip number
  if (/^\d{4,6}$/.test(clean)) {
    return VERIFIED_TRACKING_CARRIERS.find((c) => c.id === 'ecs-counter') || null;
  }

  return null;
}
