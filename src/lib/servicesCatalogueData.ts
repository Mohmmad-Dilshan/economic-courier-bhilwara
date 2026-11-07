export interface BrochureServiceCard {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  filterCategory: 'air' | 'commercial' | 'cargo' | 'personal';
  tagline: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  advisoryNotice?: string;
  advisoryType?: 'warning' | 'info' | 'success';
  whatsappMessage: string;
}

export const BROCHURE_SERVICES: BrochureServiceCard[] = [
  {
    id: 'air-courier',
    number: '01',
    title: 'Air Courier Service',
    categoryTag: 'DOMESTIC & INTERNATIONAL AIR',
    filterCategory: 'air',
    tagline: 'Priority domestic air express & worldwide delivery to 220+ countries',
    description:
      'Fastest transit for urgent parcels and air packets. Dispatched via scheduled commercial flights and established global express delivery networks.',
    items: [
      'Express Delivery (Priority Same-Day & Next-Flight Dispatch)',
      'Aramex Express Delivery Network linehauls',
      'TNT Express Delivery Network linehauls',
      'UPS Express Delivery Network linehauls',
      'DPD Express Delivery Network linehauls',
    ],
    imageSrc: '/assets/services/card-international.webp',
    imageAlt: 'Boeing aircraft cargo loading at airport tarmac for air courier delivery',
    advisoryNotice: 'Door-to-door delivery with online milestone tracking across India and 220+ destination countries.',
    advisoryType: 'info',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Air Courier Service (Domestic / International).',
  },
  {
    id: 'commercial-shipment',
    number: '02',
    title: 'Commercial Shipment',
    categoryTag: 'B2B & TEXTILE SPECIALTY',
    filterCategory: 'commercial',
    tagline: 'Dedicated supply chain solutions for Bhilwara weaving mills, factories & traders',
    description:
      'Engineered specifically for Bhilwara’s synthetic textile and manufacturing sectors, connecting weaving mills to Surat, Ahmedabad, Mumbai, and Delhi.',
    items: [
      'Business to Business (B2B) Delivery',
      'Business to Consumer (B2C) Delivery',
      'Sample Delivery (Fabric swatch books & mill shade cards)',
      'Manufactured Item Delivery (Industrial machinery parts & spares)',
      'Garments Exports (Ready-to-wear apparel & uniform cartons)',
    ],
    imageSrc: '/assets/services/textile-logistics-hero.webp',
    imageAlt: 'Bhilwara textile fabric sample swatches and commercial export cartons',
    advisoryNotice: 'Daily factory/office doorstep pickup available in Bhilwara with monthly consolidated GST billing.',
    advisoryType: 'success',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Commercial / Textile Swatch Shipments.',
  },
  {
    id: 'food-item-delivery',
    number: '03',
    title: 'Food Item Delivery',
    categoryTag: 'NRI & OVERSEAS DISPATCH',
    filterCategory: 'cargo',
    tagline: 'Traditional Indian sweets, homemade savories & branded packaged spices abroad',
    description:
      'Send love and regional flavors to family members, students, and buyers overseas. Carefully packed and dispatched with international food customs guidance.',
    items: [
      'Handmade Food Item Delivery (Homemade sweets, namkeen & dry snacks)',
      'Economy Delivery Worldwide (Cost-effective air transit)',
      'Branded Eatables Delivery (Packaged food products & groceries)',
      'Branded Spices Delivery (Regional spices, condiments & tea)',
    ],
    imageSrc: '/assets/social/reel-1-inside-ecs.jpg',
    imageAlt: 'Packed parcel cartons being weighed and processed for food item shipping',
    advisoryNotice: 'Items must be non-perishable and dry. Airtight vacuum sealing & customs declaration guidance provided at hub.',
    advisoryType: 'warning',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Food Item Delivery abroad.',
  },
  {
    id: 'sea-cargo-service',
    number: '04',
    title: 'Sea Cargo Service',
    categoryTag: 'OCEAN FREIGHT & CONTAINER',
    filterCategory: 'cargo',
    tagline: 'Economical worldwide ocean freight for bulk cargo & large volumes',
    description:
      'Cost-effective sea container shipping for heavy commercial export orders, high-tonnage consignments, and bulk relocations via premier Indian ports (Mundra, Kandla, Nhava Sheva).',
    items: [
      'Express Ocean Freight Delivery',
      'Economy Delivery Worldwide (Substantial freight savings)',
      'Full Container Load (FCL) & Part Container Load (LCL)',
      'Free Hub Pickup Coordination in Bhilwara',
      'On-Timer Scheduled Linehaul Departures',
    ],
    imageSrc: '/assets/network/delivery-network-3d.webp',
    imageAlt: 'Sea freight cargo corridors and worldwide ocean trade routes',
    advisoryNotice: 'Bill of Lading (BL) handling and port clearance support for commercial exporters.',
    advisoryType: 'info',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Sea Cargo Service (Ocean Freight).',
  },
  {
    id: 'medicine-delivery',
    number: '05',
    title: 'Medicine Delivery',
    categoryTag: 'REGULATED HEALTHCARE DISPATCH',
    filterCategory: 'cargo',
    tagline: 'Prescription pharmaceuticals, Ayurvedic & Homeopathic medicines across India & abroad',
    description:
      'Specialized, strictly compliant courier dispatch for critical personal healthcare supplies, chronic medications, and verified Indian remedies.',
    items: [
      'Personal Use Medicine Delivery',
      'Company to Personal Delivery',
      'Homeopathy Medicine Delivery (Pills, dilutions & bio-chemist preparations)',
      'Ayurvedic Medicine Delivery (Herbal formulations, oils & churnas)',
      'Commercial Medicine Delivery (Chemist & distributor dispatches)',
    ],
    imageSrc: '/assets/social/reel-2-international.jpg',
    imageAlt: 'Medical parcel packaging with security seal for international courier',
    advisoryNotice: 'Mandatory Requirements: 1) Valid Doctor Prescription, 2) Chemist Tax Invoice, 3) Sender/Receiver KYC ID. Narcotics strictly prohibited.',
    advisoryType: 'warning',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Medicine Delivery (Prescription / Ayurvedic).',
  },
  {
    id: 'document-delivery',
    number: '06',
    title: 'Document Delivery (Air Express)',
    categoryTag: 'URGENT PAPERWORK & DOSSIERS',
    filterCategory: 'air',
    tagline: 'Waterproof tamper-evident satchels for confidential legal & trade paperwork',
    description:
      'Dedicated handling for original banking records, GST paperwork, property documents, Letters of Credit (LC), visa files, and corporate agreements.',
    items: [
      'Urgent Commercial Invoices & Export Manifests',
      'Trade Letters of Credit (LC) & Banking Documents',
      'Legal Affidavits, Deeds & Property Papers',
      'Passports, Visa Files & Student Application Dossiers',
      'Tamper-Evident Poly-Mailers with Signature Verification',
    ],
    imageSrc: '/assets/services/card-documents.webp',
    imageAlt: 'Document dossiers, business contracts, and courier envelopes on desk',
    advisoryNotice: 'Flat-rate domestic and international envelopes with sealed-in-presence security mailers.',
    advisoryType: 'info',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Document Delivery (Domestic / International).',
  },
  {
    id: 'excess-baggage',
    number: '07',
    title: 'Excess Baggage',
    categoryTag: 'LUGGAGE & STUDENT RELOCATION',
    filterCategory: 'personal',
    tagline: 'Skip expensive airline counter fees — ship extra luggage directly to your door',
    description:
      'Smart, affordable solution for international travelers, overseas students, and families moving with extra suitcases. Up to 60-70% cheaper than airport airline baggage rates.',
    items: [
      'Excess Baggage Delivery (Students & Tourists)',
      'Scheduled Time Delivery (Synchronized with your arrival date)',
      'Next Day Delivery Options for domestic corridors',
      'Baggage Packing (Heavy-duty strapping, bubble wrap & stretch film)',
    ],
    imageSrc: '/assets/hero/hero-courier.webp',
    imageAlt: 'Courier delivery van with suitcases and baggage ready for dispatch',
    advisoryNotice: 'Door-to-door delivery right to your overseas residence, hotel, or student hostel.',
    advisoryType: 'success',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Excess Baggage / Luggage Shipping.',
  },
  {
    id: 'household-items',
    number: '08',
    title: 'Household Items',
    categoryTag: 'RELOCATION & CAREFUL HANDLING',
    filterCategory: 'personal',
    tagline: 'Protective cushioned transit for furniture, clothing, electronics & artworks',
    description:
      'Reliable, cushioned transport for individuals relocating homes, moving cities, or sending personal furniture, wardrobe boxes, and fragile home articles across India.',
    items: [
      'Furniture Delivery (Desks, chairs, wooden cabinets & disassembled beds)',
      'Used Cloth Delivery (Economical wardrobe & seasonal clothing cartons)',
      'Electronic Item Delivery (Laptops, PCs, TVs & kitchen appliances)',
      'Painting Delivery (Hardboard sandwiching & rigid corner crating for art)',
      'Home Made Item Delivery (Handicrafts, brass idols & festival gift hampers)',
    ],
    imageSrc: '/assets/services/ecs-boxes-3d.webp',
    imageAlt: 'Sturdy stacked cardboard courier boxes and household cartons',
    advisoryNotice: '5-ply & 7-ply heavy-duty master cartons, bubble wrap, and cross-strapping available at Pur Road hub.',
    advisoryType: 'info',
    whatsappMessage: 'Hello Economic Courier Bhilwara, I want to inquire about Household Items / Furniture Shipping.',
  },
];
