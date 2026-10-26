export interface RateInquiryPayload {
  serviceType: string;
  origin: string;
  destination: string;
  approxWeight: string;
  senderName?: string;
  contactPhone?: string;
  specialInstructions?: string;
}

export type ServiceTypeOption =
  | 'domestic'
  | 'international'
  | 'documents'
  | 'textiles'
  | 'other';

export type WeightBracketOption =
  | 'under-0.5kg'
  | '0.5-2kg'
  | '2-5kg'
  | '5kg-plus'
  | 'commercial-freight';

export interface CustomerInquiryFormData {
  customerName: string;
  contact: string;
  serviceType: ServiceTypeOption | '';
  originCity?: string;
  destination?: string;
  approxWeight?: WeightBracketOption | '';
  message: string;
}

export interface InquiryFieldErrors {
  customerName?: string;
  contact?: string;
  serviceType?: string;
  originCity?: string;
  destination?: string;
  approxWeight?: string;
  message?: string;
  general?: string;
}

export type InquirySubmissionStatus =
  | 'idle'
  | 'submitting'
  | 'unconfigured'
  | 'success'
  | 'error';

export interface InquirySubmissionResult {
  status: InquirySubmissionStatus;
  message: string;
  submittedAt?: string;
  payload?: CustomerInquiryFormData;
  destinationType: 'none' | 'api' | 'whatsapp' | 'email';
}
