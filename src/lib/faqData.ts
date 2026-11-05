export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'textiles' | 'international' | 'tracking' | 'rates' | 'location';
}

/**
 * Verified FAQ Items for Economic Courier Bhilwara
 *
 * FACTUAL VERIFICATION RULES:
 * 1. Every answer is strictly grounded in project documentation (servicesData.ts, constants.ts, CONTENT.md).
 * 2. No claims of guaranteed worldwide coverage or specific delivery timelines.
 * 3. Tracking notice honestly states that online tracking links are not configured yet.
 * 4. Location & pickup notice states that exact shop address and pickup availability are awaiting confirmation.
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-service-categories',
    question: 'What courier service categories are offered by Economic Courier in Bhilwara?',
    answer:
      'Economic Courier offers four primary service categories: Domestic Courier across India, International Courier & Air Cargo under the eCS World Wide Express identity, Important Documents & Dossiers transit, and specialized Textile & Fabric sample shipping.',
    category: 'services',
  },
  {
    id: 'faq-textile-samples',
    question: 'Can I send fabric swatches and textile trade samples?',
    answer:
      "Yes. Textile sample shipping is one of the service categories offered by Economic Courier, supporting Bhilwara's fabric trade with handling for swatch mailers, sample cuts, and trade correspondence.",
    category: 'textiles',
  },
  {
    id: 'faq-international',
    question: 'Is international courier service available?',
    answer:
      'Yes, international shipping is handled under the eCS World Wide Express identity for international parcels and document consignments. Customs requirements depend on destination regulations.',
    category: 'international',
  },
  {
    id: 'faq-tracking',
    question: 'How does shipment tracking work?',
    answer:
      'Official online carrier tracking links are currently not configured and are awaiting verification. Where a consignment reference or receipt has been issued, customers should retain that number until carrier tracking integrations are active.',
    category: 'tracking',
  },
  {
    id: 'faq-rates',
    question: 'How are courier rates determined?',
    answer:
      'Consignment quotations are provided upon parcel specification, depending on factors such as parcel weight, dimensions, and destination corridor.',
    category: 'rates',
  },
  {
    id: 'faq-location-pickup',
    question: 'Where is Economic Courier based, and is doorstep pickup available?',
    answer:
      'Economic Courier is based in Bhilwara, Rajasthan. The exact shop address and doorstep pickup availability are awaiting confirmation.',
    category: 'location',
  },
];

