export type ConsignmentStatus = 'Booked' | 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Exception';

export interface TrackingMilestone {
  timestamp: string;
  location: string;
  status: string;
  description: string;
  completed: boolean;
}

export interface ConsignmentDemoResult {
  consignmentId: string;
  senderCity: string;
  destinationCity: string;
  serviceType: string;
  status: ConsignmentStatus;
  currentLocation: string;
  lastUpdated: string;
  estimatedDelivery: string;
  pieceCount: number;
  weightKg: string;
  isDemoRecord: true;
  milestones: TrackingMilestone[];
}
