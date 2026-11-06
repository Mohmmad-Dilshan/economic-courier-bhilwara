// ============================================================
// Partner Types — Single Source of Truth
// All type definitions live here. No circular re-exports.
// ============================================================

export type PartnerRole =
  | 'inbound-channel'
  | 'commercial-linehaul'
  | 'regional-network'
  | 'domestic-express'
  | 'international-air'
  | 'trade-corridor';

export type TrackingMode = 'direct-portal' | 'counter-verification';

export interface NetworkPartner {
  id: string;
  name: string;
  shortName: string;
  category: PartnerRole;
  categoryLabel: string;
  roleDescription: string;
  officialUrl?: string;
  trackingUrl?: string;
  trackingMode: TrackingMode;
  logoAsset: string;
}
