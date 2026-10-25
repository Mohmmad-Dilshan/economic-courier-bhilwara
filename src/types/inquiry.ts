export interface RateInquiryPayload {
  serviceType: string;
  origin: string;
  destination: string;
  approxWeight: string;
  senderName?: string;
  contactPhone?: string;
  specialInstructions?: string;
}
