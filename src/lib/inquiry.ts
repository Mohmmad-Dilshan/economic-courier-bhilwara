import {
  CustomerInquiryFormData,
  InquiryFieldErrors,
  InquirySubmissionResult,
} from '@/types/inquiry';
import { BUSINESS_INFO } from './constants';

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

  // 2. Contact (Phone or Email) validation
  const contact = data.contact.trim();
  const phoneRegex = /^(?:\+?\d{1,3}[\s-]?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$|^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!contact) {
    errors.contact = 'Please provide a phone number or email address.';
  } else if (contact.length > 80) {
    errors.contact = 'Contact information cannot exceed 80 characters.';
  } else if (!phoneRegex.test(contact.replace(/\s+/g, '')) && !emailRegex.test(contact)) {
    errors.contact = 'Please enter a valid 10-digit mobile number or email address.';
  }

  // 3. Service Type validation
  if (!data.serviceType) {
    errors.serviceType = 'Please select a service category.';
  }

  // 4. Message / Inquiry Details validation
  const message = data.message.trim();
  if (!message) {
    errors.message = 'Please describe your inquiry or shipment requirement.';
  } else if (message.length < 10) {
    errors.message = 'Please provide at least 10 characters describing your inquiry.';
  } else if (message.length > 600) {
    errors.message = 'Inquiry details cannot exceed 600 characters.';
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
