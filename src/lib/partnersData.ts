import type { NetworkPartner } from '../types/partner';

/**
 * Verified Logistics Network Partners & Dispatch Operators
 *
 * Sourced directly from Economic Courier / eCS World Wide Express client materials:
 * 1. Physical office poster ("COURIERS PARTNERS")
 * 2. Operational handwritten dispatch & channel notes
 * 3. Founder business brochure
 *
 * Rules:
 * - External operators are kept strictly separate from eCS Worldwide Express identity.
 * - Blue Dart is specifically designated as an Inbound Channel Partner.
 * - UPS is documented as an international air courier option.
 * - AFEX Express India provides direct online tracking via afexline.com.
 * - Every tracking URL is verified to provide an active tracking facility.
 */
export const ACTIVE_NETWORK_PARTNERS: NetworkPartner[] = [
  {
    id: 'bluedart',
    name: 'Blue Dart Express Limited',
    shortName: 'Blue Dart',
    category: 'inbound-channel',
    categoryLabel: 'Inbound Channel Partner',
    roleDescription:
      'Designated inbound channel partner for commercial enterprise accounts (including Reliance Digital and JioMart) across Bhilwara, Chittorgarh, Nimbahera, and Vijayanagar.',
    officialUrl: 'https://www.bluedart.com',
    trackingUrl: 'https://www.bluedart.com/how-to-track',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/bluedart.png',
  },
  {
    id: 'akash-ganga',
    name: 'Akash Ganga Courier Limited',
    shortName: 'Akash Ganga',
    category: 'commercial-linehaul',
    categoryLabel: 'National Road Linehaul',
    roleDescription:
      'Extensive national road linehaul network and commercial parcel logistics, providing dedicated multi-city linehauls for industrial freight.',
    officialUrl: 'https://agcgroup.in',
    trackingUrl: 'https://agcgroup.in/track-now/',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/akash-ganga.png',
  },
  {
    id: 'airstar',
    name: 'Air Star Xpress Couriers',
    shortName: 'Air Star Xpress',
    category: 'regional-network',
    categoryLabel: 'Regional & West India Express',
    roleDescription:
      'Regional air and surface express parcel connectivity across Rajasthan and western commercial manufacturing centers.',
    officialUrl: 'https://www.airstarxpress.com',
    trackingUrl: 'https://www.airstarxpress.com',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/airstar.svg',
  },
  {
    id: 'shree-mahavir',
    name: 'Shree Mahavir Express Services Pvt. Ltd.',
    shortName: 'Shree Mahavir',
    category: 'domestic-express',
    categoryLabel: 'Pan-India Domestic Courier',
    roleDescription:
      'Nationwide domestic parcel and commercial document forwarding network connecting regional retail and trade centers.',
    officialUrl: 'https://shreemahavircourier.com',
    trackingUrl: 'https://shreemahavircourier.com',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/shree-mahavir.jpg',
  },
  {
    id: 'afex',
    name: 'AFEX Express India Pvt. Ltd.',
    shortName: 'AFEX Express',
    category: 'trade-corridor',
    categoryLabel: 'Trade Corridors & Cargo',
    roleDescription:
      'Specialized trade parcel and cargo service connecting western commercial trade corridors, textile freight, and industrial hubs.',
    officialUrl: 'https://afexline.com',
    trackingUrl: 'https://afexline.com/shipment-tracking/',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/afex.png',
  },
  {
    id: 'gms',
    name: 'GMS Worldwide Express',
    shortName: 'GMS Worldwide',
    category: 'domestic-express',
    categoryLabel: 'Express Parcel Network',
    roleDescription:
      'Domestic express cargo and courier network for commercial consignments, documents, and express trade parcels.',
    officialUrl: 'https://www.gmsworldwide.com/',
    trackingUrl: 'https://www.gmsworldwide.com/',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/gms.svg',
  },
  {
    id: 'ups',
    name: 'United Parcel Service (UPS)',
    shortName: 'UPS',
    category: 'international-air',
    categoryLabel: 'International Air Courier Option',
    roleDescription:
      'Global air logistics channel referenced for cross-border commercial exports, international documents, and priority air cargo.',
    officialUrl: 'https://www.ups.com',
    trackingUrl: 'https://www.ups.com/track',
    trackingMode: 'direct-portal',
    logoAsset: '/assets/partners/ups.svg',
  },
];
