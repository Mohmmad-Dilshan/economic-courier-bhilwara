import { BusinessData } from '@/types/business';

export const BUSINESS_DATA: BusinessData = {
  tradeName: 'Economic Courier',
  brandIdentity: 'eCS World Wide Express',
  brandReferenceNote: 'Official lockup still requires asset approval from business owner.',
  primaryCity: 'Bhilwara, Rajasthan, India',

  // Phone supplied by user: 8955144444; requires final owner confirmation
  suppliedPhone: '8955144444',
  phoneDisplay: '+91 89551 44444 [Pending Confirmation]',
  phoneConfigured: false, // Safeguard: Keep disabled until owner signs off
  phoneRequiresOwnerConfirmation: true,

  // WhatsApp: Kept null and inactive until owner explicitly configures business number
  suppliedWhatsApp: null,
  whatsappConfigured: false, // Safeguard: Keep disabled until owner signs off
  whatsappRequiresOwnerConfirmation: true,

  // User-provided reference links
  instagram: {
    url: 'https://www.instagram.com/economiccourierbhilwara/',
    provenance: 'user-provided-reference',
    verified: false,
    notes: 'User-provided Instagram reference. No media may be scraped without authorization.',
  },

  googleMaps: {
    url: 'https://share.google/qFnFe077dnj6QUEwb',
    provenance: 'user-provided-reference',
    verified: false,
    notes: 'User-provided Google Maps link. Listing ownership, address, and timings not independently verified.',
  },

  // Unconfirmed placeholders
  physicalAddressPlaceholder:
    'Shop No. [X], Near Textile Market / Pur Road, Bhilwara, Rajasthan 311001',
  addressVerified: false,

  operatingHoursPlaceholder:
    'Monday – Saturday: 9:30 AM – 8:30 PM [Pending Client Confirmation]',
  hoursVerified: false,

  trackingMethod: 'unknown',
  trackingMethodVerified: false,

  logoStatus: 'PROPOSED_CONCEPT_PENDING_APPROVAL',
  mediaAssetsStatus: 'PENDING_FILE_PROVISIONING',
};

// Maintained for backward compatibility across components
export const BUSINESS_INFO = {
  name: BUSINESS_DATA.tradeName,
  altName: BUSINESS_DATA.brandIdentity,
  fullName: `${BUSINESS_DATA.tradeName} & ${BUSINESS_DATA.brandIdentity}`,
  tagline: 'Rapid, Reliable Express Logistics Across India & Worldwide',
  location: BUSINESS_DATA.primaryCity,

  addressPlaceholder: BUSINESS_DATA.physicalAddressPlaceholder,
  addressPendingConfirmation: !BUSINESS_DATA.addressVerified,

  // Displays supplied phone with explicit pending confirmation tag
  phonePlaceholder: BUSINESS_DATA.phoneDisplay,
  phoneConfigured: BUSINESS_DATA.phoneConfigured,
  phonePendingConfirmation: BUSINESS_DATA.phoneRequiresOwnerConfirmation,

  whatsappNumber: BUSINESS_DATA.suppliedWhatsApp,
  whatsappNumberFormatted: '+91 [WhatsApp Pending Confirmation]',
  whatsappConfigured: BUSINESS_DATA.whatsappConfigured,
  whatsappPendingConfirmation: BUSINESS_DATA.whatsappRequiresOwnerConfirmation,

  instagramUrl: BUSINESS_DATA.instagram.url,
  googleMapsUrl: BUSINESS_DATA.googleMaps.url,

  emailPlaceholder: 'info@economiccourierbhilwara.com [Pending Setup]',
  emailConfigured: false,
  emailPendingConfirmation: true,

  gstinPlaceholder: '[GSTIN Pending Client Validation]',
  gstinPendingConfirmation: true,

  operatingHours: BUSINESS_DATA.operatingHoursPlaceholder,
  operatingHoursPendingConfirmation: !BUSINESS_DATA.hoursVerified,

  coverageZones: 'Bhilwara Urban & Industrial Sectors [Pending Client Confirmation]',
  coverageZonesPendingConfirmation: true,
};

export const DEMO_TRACKING_DISCLAIMER =
  'Demonstration Tracking UI — Live carrier tracking connects upon API activation. [Pending Client Integration]';

export const CARRIER_TRADEMARK_DISCLAIMER =
  'All third-party trademarks, carrier names, and service marks (e.g., DHL, FedEx, Blue Dart, Aramex) are the property of their respective owners and referenced solely to describe standard forwarding channels.';

export const CONTACT_ACTION_NOTICE =
  'Direct calling and WhatsApp actions are safely disabled in this client prototype. Live messaging connects immediately upon official client phone verification.';
