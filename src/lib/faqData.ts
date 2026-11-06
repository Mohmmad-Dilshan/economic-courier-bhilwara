export type FAQCategoryKey = 'all' | 'hub' | 'textiles' | 'network' | 'tracking';

export interface FAQCategoryTab {
  key: FAQCategoryKey;
  label: string;
}

export const FAQ_CATEGORIES: FAQCategoryTab[] = [
  { key: 'all', label: 'All Questions' },
  { key: 'hub', label: 'Hub & Timings' },
  { key: 'textiles', label: 'Textiles & Swatches' },
  { key: 'network', label: 'Domestic & Global' },
  { key: 'tracking', label: 'Tracking & Rates' },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'hub' | 'textiles' | 'network' | 'tracking';
  categoryLabel: string;
  highlight?: string;
}

/**
 * Verified FAQ Items for Economic Courier Bhilwara & eCS World Wide Express
 * 
 * Strict factual accuracy aligned with verified business facts:
 * - Opposite New Cloth Market, Bhilwara
 * - Hours: Mon–Sat 9:30 AM – 8:30 PM, Sun 10:00 AM – 4:00 PM
 * - Phone: +91 89551 44444
 * - Textile sample specialist, 19,000+ pin codes India, 220+ countries international
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-location-timings',
    category: 'hub',
    categoryLabel: 'Hub Location & Hours',
    question: 'Where is the main Economic Courier hub in Bhilwara, and what are counter timings?',
    answer:
      'Our central dispatch counter is located Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road / Station Sector, Bhilwara (Rajasthan 311001). Operating hours are Monday to Saturday: 9:30 AM – 8:30 PM, and Sunday: 10:00 AM – 4:00 PM for walk-in bookings and same-day linehaul dispatches.',
    highlight: 'Opposite New Cloth Market · Open Mon–Sat 9:30 AM – 8:30 PM',
  },
  {
    id: 'faq-doorstep-pickup',
    category: 'hub',
    categoryLabel: 'Pickup Service',
    question: 'Is doorstep parcel and sample pickup available across Bhilwara industrial belts?',
    answer:
      'Yes. We arrange doorstep pickup across Bhilwara city, Pur Road textile market, RIICO Industrial Area, Mandpam, and Hamirgarh corridors. You can schedule a pickup by calling our helpline at +91 89551 44444 or messaging us on WhatsApp with your parcel weight and destination.',
    highlight: 'Doorstep pickup available across Pur Road & RIICO industrial areas',
  },
  {
    id: 'faq-textile-samples',
    category: 'textiles',
    categoryLabel: 'Textile Logistics',
    question: 'Can I send fabric swatches, mill shade cards, and bulk sample catalogs?',
    answer:
      "Yes! As Bhilwara is Rajasthan’s textile capital, our counter specializes in fabric swatch shipping. We provide tamper-evident poly-mailer packing, moisture-resistant strapping, and express delivery to apparel manufacturers and trade buyers across India and worldwide.",
    highlight: 'Specialized poly-mailer packing for swatch mailers & mill contracts',
  },
  {
    id: 'faq-network-destinations',
    category: 'network',
    categoryLabel: 'Domestic Corridors',
    question: 'Which domestic cities and corridors does Economic Courier cover?',
    answer:
      'We offer daily scheduled linehauls across Rajasthan (Jaipur, Jodhpur, Udaipur, Kota, Chittorgarh) and air/surface express connectivity across major industrial corridors including Delhi NCR, Mumbai, Surat, Ahmedabad, Bengaluru, Chennai, Kolkata, and 19,000+ pin codes nationwide.',
    highlight: 'Daily Rajasthan linehauls + 19,000+ pin codes across India',
  },
  {
    id: 'faq-international-shipping',
    category: 'network',
    categoryLabel: 'International Cargo',
    question: 'How does international shipping work under eCS World Wide Express?',
    answer:
      'Worldwide consignments are routed through eCS World Wide Express across 220+ countries including UAE, UK, USA, Europe, and Asia-Pacific. Our team provides complete guidance on customs documentation, commercial invoices, and tariff codes for seamless export clearance.',
    highlight: 'eCS World Wide Express connectivity to 220+ countries',
  },
  {
    id: 'faq-tracking-system',
    category: 'tracking',
    categoryLabel: 'Tracking & AWB',
    question: 'How do I track my shipment booked at the Bhilwara counter?',
    answer:
      'Every booked consignment is issued an official counter receipt with a unique Airway Bill (AWB) number. You can enter this AWB on our website to access direct tracking status or click through to partner carrier networks (Trackon, Blue Dart, and global linehaul feeds).',
    highlight: 'Official counter AWB receipt + instant partner tracking portal',
  },
  {
    id: 'faq-rate-calculation',
    category: 'tracking',
    categoryLabel: 'Rates & Pricing',
    question: 'How are courier rates calculated for parcels and documents?',
    answer:
      'Charges are determined transparently at our counter based on dead weight or volumetric weight (length × width × height ÷ 5000 in cm), whichever is higher, destination corridor, and delivery speed (Standard Surface vs Priority Air).',
    highlight: 'Transparent dead weight vs volumetric pricing at our intake scale',
  },
];
