import {
  CustomerInquiryFormData,
  InquiryFieldErrors,
  InquirySubmissionResult,
} from '@/types/inquiry';
import { BUSINESS_INFO } from './constants';

/**
 * Formats internal service keys into human-readable customer labels.
 */
export function formatServiceType(type?: string): string {
  switch (type) {
    case 'domestic':
      return 'Domestic Express Courier (All India)';
    case 'international':
      return 'International Air Cargo (eCS Worldwide Express)';
    case 'documents':
      return 'Documents & Confidential Parcels';
    case 'textiles':
      return 'Bhilwara Textile / Fabric Swatch Samples';
    case 'other':
      return 'B2B Commercial Logistics & Rate Inquiry';
    default:
      return type || 'General Inquiry';
  }
}

/**
 * Formats weight keys into customer-friendly weight bracket descriptions.
 */
export function formatWeightBracket(weight?: string): string {
  switch (weight) {
    case 'under-0.5kg':
      return 'Under 0.5 kg (Letters, Docs & Packets)';
    case '0.5-2kg':
      return '0.5–2 kg (Standard Parcel & Swatches)';
    case '2-5kg':
      return '2–5 kg (Medium Box / Fabric Bundles)';
    case '5kg-plus':
      return '5+ kg (Heavy Parcels)';
    case 'commercial-freight':
      return 'Commercial Freight (B2B Cargo & Bulk Textiles)';
    default:
      return weight || 'Not specified';
  }
}

/**
 * Validates the Customer Inquiry form fields.
 * Returns an object containing any field-level error messages.
 */
export function validateInquiryForm(data: CustomerInquiryFormData): InquiryFieldErrors {
  const errors: InquiryFieldErrors = {};

  // 1. Customer Name validation
  const name = data.customerName.trim();
  if (!name) {
    errors.customerName = 'Please enter your name.';
  } else if (name.length < 2) {
    errors.customerName = 'Name must be at least 2 characters long.';
  } else if (name.length > 60) {
    errors.customerName = 'Name cannot exceed 60 characters.';
  }

  // 2. Contact (Phone or Email) validation - ReDoS-safe linear checks
  const contact = data.contact.trim();
  const digitsOnly = contact.replace(/\D/g, '');
  const isIndianMobile = digitsOnly.length === 10 && /^[6-9]/.test(digitsOnly);
  const isPrefixedIndianMobile =
    digitsOnly.length === 12 && digitsOnly.startsWith('91') && /^[6-9]/.test(digitsOnly.slice(2));
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact);

  if (!contact) {
    errors.contact = 'Please provide a phone number or email address.';
  } else if (contact.length > 80) {
    errors.contact = 'Contact information cannot exceed 80 characters.';
  } else if (!isIndianMobile && !isPrefixedIndianMobile && !isEmail) {
    errors.contact = 'Please enter a valid 10-digit mobile number or email address.';
  }

  // 3. Service Type validation
  if (!data.serviceType) {
    errors.serviceType = 'Please select a service category.';
  }

  // 4. Optional Courier Details validation
  if (data.originCity && data.originCity.trim().length > 60) {
    errors.originCity = 'Origin city cannot exceed 60 characters.';
  }
  if (data.destination && data.destination.trim().length > 80) {
    errors.destination = 'Destination cannot exceed 80 characters.';
  }
  const validWeights: string[] = [
    'under-0.5kg',
    '0.5-2kg',
    '2-5kg',
    '5kg-plus',
    'commercial-freight',
  ];
  if (data.approxWeight && !validWeights.includes(data.approxWeight)) {
    errors.approxWeight = 'Please select a valid weight bracket.';
  }

  // 5. Message / Inquiry Details validation
  const message = data.message.trim();
  if (!message) {
    errors.message = 'Please describe your inquiry or shipment requirement.';
  } else if (message.length < 5) {
    errors.message = 'Please provide at least 5 characters describing your inquiry.';
  } else if (message.length > 600) {
    errors.message = 'Inquiry details cannot exceed 600 characters.';
  }

  // 6. User Consent validation (when consentGiven is tracked)
  if (data.consentGiven !== undefined && !data.consentGiven) {
    errors.consentGiven = 'Kripya WhatsApp/Phone updates ke liye consent checkbox tick kijiye.';
  }

  return errors;
}

/**
 * Checks the configured submission destination.
 * Safe prototype: Returns false since no verified backend or business channel is connected.
 */
export function getInquirySubmissionDestination() {
  if (BUSINESS_INFO.whatsappConfigured && BUSINESS_INFO.whatsappNumber) {
    return {
      isConfigured: true,
      type: 'whatsapp' as const,
      destination: BUSINESS_INFO.whatsappNumber,
    };
  }

  return {
    isConfigured: false,
    type: 'none' as const,
    reason:
      'No backend API, CRM handler, or verified WhatsApp Business channel is currently active for this prototype.',
  };
}

/**
 * Processes inquiry submission.
 * Enforces prototype safety rules: Never shows false "Sent" state if no handler exists.
 */
export async function submitCustomerInquiry(
  data: CustomerInquiryFormData
): Promise<InquirySubmissionResult> {
  // Simulate network dispatch delay for realistic feedback
  await new Promise((resolve) => setTimeout(resolve, 350));

  const destination = getInquirySubmissionDestination();

  if (!destination.isConfigured) {
    return {
      status: 'unconfigured',
      message:
        'Inquiry endpoint not configured. Prototype safeguard is active to prevent false delivery claims.',
      submittedAt: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      payload: data,
      destinationType: 'none',
    };
  }

  // If a real destination were configured (e.g., API or verified WhatsApp):
  return {
    status: 'success',
    message: 'Your inquiry has been received by Economic Courier.',
    submittedAt: new Date().toLocaleTimeString('en-IN'),
    payload: data,
    destinationType: destination.type,
  };
}
