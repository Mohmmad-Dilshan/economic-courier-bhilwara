import { BUSINESS_INFO } from './constants';

export interface GalleryVideo {
  id: string;
  title: string;
  tag: string;
  category: 'hub' | 'team' | 'packing' | 'dispatch';
  subtitle: string;
  detailedNote: string;
  videoUrl: string;
  posterUrl: string;
  instagramUrl: string;
  duration: string;
  keyAspects: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  tag: string;
  category: 'hub' | 'team' | 'packing' | 'dispatch' | 'textiles' | 'domestic' | 'documents';
  imageSrc: string;
  caption: string;
  details: string;
}

export const FEATURED_VIDEO: GalleryVideo = {
  id: 'featured-hub',
  title: 'Inside the Bhilwara Hub: Counter Intake & Weight Verification',
  tag: 'FEATURED HUB HIGHLIGHT',
  category: 'hub',
  subtitle: 'Direct walk-in intake, calibrated electronic scale verification, and parcel logging at Bhilwara hub.',
  detailedNote:
    'A transparent look at daily intake inside our Bhilwara facility. Every commercial carton, envelope, and fabric sample undergoes digital weighing on clear-display scales, physical inspection, and immediate barcode manifesting before sorting into evening linehauls.',
  videoUrl: '/assets/social/reel-1-inside-ecs.mp4',
  posterUrl: '/assets/social/reel-inside-ecs.jpg',
  instagramUrl: BUSINESS_INFO.instagramUrl,
  duration: '0:18',
  keyAspects: [
    'Digital scale weight verified in front of customer',
    'Barcode manifest entry for domestic and international routing',
    'Walk-in customer assistance at Bhilwara hub',
    'Immediate staging for scheduled evening express linehauls',
  ],
};

export const OPERATIONAL_REELS: GalleryVideo[] = [
  {
    id: 'reel-1',
    title: 'Hub Intake & Booking Counter',
    tag: 'COUNTER INTAKE',
    category: 'hub',
    subtitle: 'Walk-in parcel registration and commercial digital weighing at Bhilwara hub.',
    detailedNote:
      'Commercial traders and walk-in clients drop off documents, textile swatches, and retail parcels directly at our Bhilwara counter. Consignments are weighed on digital scales with full customer visibility before receipt generation.',
    videoUrl: '/assets/social/reel-1-inside-ecs.mp4',
    posterUrl: '/assets/social/reel-inside-ecs.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
    duration: '0:18',
    keyAspects: [
      'Digital scale weight verified at booking desk',
      'Instant barcode assignment and intake registration',
      'Walk-in service for Bhilwara trade and residents',
    ],
  },
  {
    id: 'reel-2',
    title: '#TeamECS Ground Crew & Parcel Sorting',
    tag: 'SORTING & LOGISTICS CREW',
    category: 'team',
    subtitle: 'Hands-on manifest inspection and destination sorting before evening linehaul cutoffs.',
    detailedNote:
      'Our dedicated Bhilwara operations crew categorizes incoming packages by priority lane and destination. Every bag is scanned and cross-referenced with manifest slips to ensure seamless handoff to regional transit hubs.',
    videoUrl: '/assets/social/reel-2-team.mp4',
    posterUrl: '/assets/social/reel-team.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
    duration: '0:32',
    keyAspects: [
      'Route-by-route consignment sorting (Jaipur, Delhi, Mumbai, Ahmedabad)',
      'Manifest barcode verification for complete audit trail',
      'Careful manual handling to prevent parcel damage',
    ],
  },
  {
    id: 'reel-3',
    title: 'Tamper-Evident Packaging & Moisture Sealing',
    tag: 'PACKING LAB',
    category: 'packing',
    subtitle: 'Specialized poly-mailers, moisture-proof wrapping, and high-tension strapping.',
    detailedNote:
      'Engineered specifically for Bhilwara textile swatches, trade catalogs, and high-priority business correspondence. Consignments receive moisture-proof inner lining, heavy-gauge poly-wrap, and reinforced strapping.',
    videoUrl: '/assets/social/reel-3-packing.mp4',
    posterUrl: '/assets/social/reel-packing.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
    duration: '0:15',
    keyAspects: [
      'Heavy-gauge waterproof poly-wrap barrier',
      'High-tension cross-strapping on heavier swatch parcels',
      'Tamper-evident sealing preventing unrecorded access',
    ],
  },
  {
    id: 'reel-4',
    title: 'Daily Express Fleet Dispatch',
    tag: 'FLEET DISPATCH',
    category: 'dispatch',
    subtitle: 'Consignments loaded into delivery vans and linehauls for immediate highway transit.',
    detailedNote:
      'Every evening, sorted packages are stowed into express delivery vans and linehaul transport vehicles connecting Bhilwara directly to air express gateways and major industrial distribution networks.',
    videoUrl: '/assets/social/reel-4-dispatch.mp4',
    posterUrl: '/assets/social/reel-dispatch.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
    duration: '0:21',
    keyAspects: [
      'Scheduled departure windows aligned with national air cargo cutoffs',
      'Secured van cargo stowage protecting consignment integrity',
      'Direct highway linehaul connections from Bhilwara',
    ],
  },
];

export const AUTHENTIC_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Express Delivery Fleet & Dispatch Logistics',
    tag: 'FLEET DISPATCH',
    category: 'dispatch',
    imageSrc: '/assets/hero/hero-courier.webp',
    caption: 'Courier driver inside express vehicle preparing consignments for Bhilwara dispatch.',
    details:
      'Our delivery vehicles handle local parcel collection across Bhilwara industrial areas, textile mills, and commercial sectors before evening linehaul transfer.',
  },
  {
    id: 'photo-2',
    title: 'Textile Fabric Sample Consignments',
    tag: 'TEXTILE SPECIALIZATION',
    category: 'textiles',
    imageSrc: '/assets/services/card-textiles.webp',
    caption: 'Protected fabric swatch books and yarn sample packages prepared for priority transit.',
    details:
      'Bhilwara suiting, shirting, and yarn samples packed in weather-resistant poly-mailers for overnight sample review by buyers in Mumbai, Surat, and Delhi NCR.',
  },
  {
    id: 'photo-3',
    title: 'Bhilwara Hub Overview & Branding',
    tag: 'HUB HEADQUARTERS',
    category: 'hub',
    imageSrc: '/assets/office/about-collage.jpg',
    caption: 'Economic Courier and eCS World Wide Express hub branding, front counter, and operations overview.',
    details:
      'Centrally located in Bhilwara, our hub serves as the central receiving and dispatch node for trade correspondence and commercial freight.',
  },
  {
    id: 'photo-4',
    title: 'Ground Logistics Team at Manifest Deck',
    tag: 'GROUND CREW',
    category: 'team',
    imageSrc: '/assets/social/reel-team.jpg',
    caption: 'Operations personnel sorting and barcode-verifying parcels before transit bag consolidation.',
    details:
      'Hands-on consignment processing ensures each package is routed through the fastest verified domestic corridor or international air forwarding route.',
  },
  {
    id: 'photo-5',
    title: 'Packaging Deck & Protective Sealing',
    tag: 'PACKING LAB',
    category: 'packing',
    imageSrc: '/assets/social/reel-packing.jpg',
    caption: 'Application of moisture-resistant poly-wrap and reinforced strapping for textile swatches.',
    details:
      'Sample integrity is paramount in the textile industry; our packing protocols safeguard delicate cloth samples against dirt, moisture, and handling strain.',
  },
  {
    id: 'photo-6',
    title: 'Bhilwara Booking Counter & Intake Desk',
    tag: 'BOOKING COUNTER',
    category: 'hub',
    imageSrc: '/assets/social/reel-inside-ecs.jpg',
    caption: 'Commercial intake desk with digital weighing scale and customer registration terminal.',
    details:
      'Walk-in counter for immediate consignment drop-off, electronic weight verification, and express shipping rate guidance.',
  },
  {
    id: 'photo-7',
    title: 'Priority Domestic Parcel Consignments',
    tag: 'DOMESTIC EXPRESS',
    category: 'domestic',
    imageSrc: '/assets/services/card-domestic.webp',
    caption: 'Securely sealed cartons and parcels staged for highway linehaul connection.',
    details:
      'Commercial parcels connecting Bhilwara businesses with metropolitan trade hubs across Rajasthan and India.',
  },
  {
    id: 'photo-8',
    title: 'Confidential Document Envelope Prep',
    tag: 'DOCUMENT SECURITY',
    category: 'documents',
    imageSrc: '/assets/services/card-documents.webp',
    caption: 'Reinforced document envelopes for legal, business, and financial correspondence.',
    details:
      'Tear-resistant, tamper-evident document pouches designed for confidential legal agreements, GST documents, and export paperwork.',
  },
];

