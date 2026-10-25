export interface ReferenceLink {
  url: string;
  provenance: 'user-provided-reference' | 'verified-by-owner';
  verified: boolean;
  notes: string;
}

export interface BusinessData {
  tradeName: string;
  brandIdentity: string;
  brandReferenceNote: string;
  primaryCity: string;

  // Phone & WhatsApp (with strict compliance flags)
  suppliedPhone: string;
  phoneDisplay: string;
  phoneConfigured: boolean;
  phoneRequiresOwnerConfirmation: boolean;

  suppliedWhatsApp: string | null;
  whatsappConfigured: boolean;
  whatsappRequiresOwnerConfirmation: boolean;

  // External references provided by user
  instagram: ReferenceLink;
  googleMaps: ReferenceLink;

  // Unverified attributes
  physicalAddressPlaceholder: string;
  addressVerified: boolean;

  operatingHoursPlaceholder: string;
  hoursVerified: boolean;

  trackingMethod: 'unknown' | 'carrier_link' | 'api_integration' | 'dispatch_desk';
  trackingMethodVerified: boolean;

  logoStatus: 'PROPOSED_CONCEPT_PENDING_APPROVAL' | 'OFFICIAL_ASSET_APPROVED';
  mediaAssetsStatus: 'PENDING_FILE_PROVISIONING' | 'LOCAL_ASSETS_COLLECTED';
}
