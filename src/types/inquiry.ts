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

export interface CustomerInquiryFormData {
  customerName: string;
  contact: string;
  serviceType: ServiceTypeOption | '';
  message: string;
}

export interface InquiryFieldErrors {
  customerName?: string;
  contact?: string;
  serviceType?: string;
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
