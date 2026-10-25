import { RateInquiryPayload } from '@/types/inquiry';
import { BUSINESS_INFO } from './constants';

export function buildWhatsAppInquiryLink(payload: RateInquiryPayload): string {
  if (!BUSINESS_INFO.whatsappConfigured || !BUSINESS_INFO.whatsappNumber) {
    // Neutralized: Return safe anchor to avoid dialing/messaging any unrelated party
    return '#pending-contact-notice';
  }

  const lines = [
    `*Inquiry from Website — Economic Courier / eCS Bhilwara*`,
    `📦 *Consignment Type:* ${payload.serviceType}`,
    `📍 *Origin:* ${payload.origin || 'Bhilwara, Rajasthan'}`,
    `🏁 *Destination:* ${payload.destination}`,
    `⚖️ *Approx Weight:* ${payload.approxWeight}`,
  ];

  if (payload.senderName) {
    lines.push(`👤 *Sender Name / Mill:* ${payload.senderName}`);
  }
  if (payload.contactPhone) {
    lines.push(`📞 *Contact Phone:* ${payload.contactPhone}`);
  }
  if (payload.specialInstructions) {
    lines.push(`📝 *Note:* ${payload.specialInstructions}`);
  }

  lines.push('');
  lines.push('Kindly provide estimated transit time and quotation.');

  const encodedMessage = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;
}

export function buildDirectWhatsAppLink(_purpose: string = 'Doorstep Pickup Inquiry'): string {
  if (!BUSINESS_INFO.whatsappConfigured || !BUSINESS_INFO.whatsappNumber) {
    // Neutralized: Return safe anchor to avoid dialing/messaging any unrelated party
    return '#pending-contact-notice';
  }

  const text = encodeURIComponent(
    `Hello Economic Courier Bhilwara,\nI would like to inquire about: *${_purpose}*.\nPlease share details.`
  );
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
}

export function buildTrackingInquiryLink(_consignmentId: string): string {
  if (!BUSINESS_INFO.whatsappConfigured || !BUSINESS_INFO.whatsappNumber) {
    // Neutralized: Return safe anchor to avoid dialing/messaging any unrelated party
    return '#pending-contact-notice';
  }

  const text = encodeURIComponent(
    `Hello Economic Courier Bhilwara,\nKindly share the current dispatch status for consignment ID: *${_consignmentId}*.`
  );
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
}
