export interface ServiceCategorySection {
  id: string;
  number: string;
  titlePrimary: string;
  titleHighlight: string;
  categoryTag: string;
  floatingBadge: string;
  floatingBadgeIcon: 'plane' | 'textile' | 'ship' | 'medicine' | 'food' | 'home';
  description: string;
  services: {
    name: string;
    description?: string;
  }[];
  imageSrc: string;
  imageAlt: string;
  layout: 'image-left' | 'image-right';
  inquiryKey: string;
  advisory?: string;
}

export const EDITORIAL_CATEGORIES: ServiceCategorySection[] = [
  {
    id: 'air-express',
    number: '01',
    titlePrimary: 'Air & Express',
    titleHighlight: 'Courier',
    categoryTag: 'FAST. GLOBAL. RELIABLE.',
    floatingBadge: 'Fast. Global. Reliable.',
    floatingBadgeIcon: 'plane',
    description:
      'Quick and secure delivery through air and express courier networks for domestic documents, urgent packets, and international express consignments.',
    services: [
      { name: 'Domestic Air Courier' },
      { name: 'International Air Express' },
      { name: 'Express Parcel Delivery' },
      { name: 'Document & Dossier Delivery' },
      { name: 'Priority Doorstep Pickup' },
    ],
    imageSrc: '/assets/services/card-international.webp',
    imageAlt: 'Cargo aircraft loading on airport tarmac for worldwide air express delivery',
    layout: 'image-left',
    inquiryKey: 'air-express',
  },
  {
    id: 'commercial-business',
    number: '02',
    titlePrimary: 'Commercial & Business',
    titleHighlight: 'Shipments',
    categoryTag: 'TEXTILE & INDUSTRIAL FOCUS',
    floatingBadge: 'Textile Focused',
    floatingBadgeIcon: 'textile',
    description:
      'Reliable logistics solutions for Bhilwara textile mills, fabric traders, manufacturers, garment exporters, and B2B commercial consignments.',
    services: [
      { name: 'Business-to-Business (B2B) Delivery' },
      { name: 'Business-to-Consumer (B2C) Delivery' },
      { name: 'Textile Sample & Swatch Delivery' },
      { name: 'Manufactured Item Delivery' },
      { name: 'Garments Export Shipments' },
    ],
    imageSrc: '/assets/services/textile-logistics-hero.webp',
    imageAlt: 'Bhilwara textile fabric rolls and commercial export cartons in warehouse',
    layout: 'image-right',
    inquiryKey: 'commercial-business',
  },
  {
    id: 'sea-cargo',
    number: '03',
    titlePrimary: 'Sea Cargo',
    titleHighlight: 'Service',
    categoryTag: 'GLOBAL OCEAN FREIGHT & HEAVY CARGO',
    floatingBadge: 'Global Ocean Freight',
    floatingBadgeIcon: 'ship',
    description:
      'Economical ocean freight and sea cargo forwarding for large-volume consignments, commercial container exports, and heavy commercial goods worldwide.',
    services: [
      { name: 'Worldwide Sea Cargo Forwarding' },
      { name: 'Express & Economy Sea Freight' },
      { name: 'LCL & FCL Container Forwarding' },
      { name: 'Free Doorstep Warehouse Pickup' },
      { name: 'On-Time Port & Destination Delivery' },
    ],
    imageSrc: '/assets/network/delivery-network-3d.webp',
    imageAlt: 'Multi-modal ocean freight and global cargo forwarding network routes',
    layout: 'image-left',
    inquiryKey: 'sea-cargo',
  },
  {
    id: 'medicine-delivery',
    number: '04',
    titlePrimary: 'Medicine & Healthcare',
    titleHighlight: 'Delivery',
    categoryTag: 'SECURE & COMPLIANT HEALTHCARE SHIPPING',
    floatingBadge: 'Care & Compliance',
    floatingBadgeIcon: 'medicine',
    description:
      'Safe, compliant courier handling for essential patient prescriptions, homeopathic formulations, ayurvedic remedies, and commercial healthcare shipments.',
    services: [
      { name: 'Personal Use Prescribed Medicine' },
      { name: 'Company to Personal Delivery' },
      { name: 'Homeopathy Medicine Delivery' },
      { name: 'Ayurvedic Medicine Delivery' },
      { name: 'Commercial Medicine Delivery' },
    ],
    imageSrc: '/assets/services/card-medicine.webp',
    imageAlt: 'Medical courier parcel with blister packs, glass medicine bottles, and temperature-controlled packaging',
    layout: 'image-right',
    inquiryKey: 'medicine-delivery',
    advisory: 'Medicine consignments are subject to a valid prescription, doctor certificate, approved medical invoice, and destination customs regulations.',
  },
  {
    id: 'food-delivery',
    number: '05',
    titlePrimary: 'Food Item & Eatables',
    titleHighlight: 'Delivery',
    categoryTag: 'HYGIENIC & PROTECTED PACKAGING',
    floatingBadge: 'Fresh & Sealed',
    floatingBadgeIcon: 'food',
    description:
      'Delivering regional homemade taste, festive sweets, and branded spices worldwide to family and loved ones with export-grade protective packaging.',
    services: [
      { name: 'Handmade & Homemade Food Delivery' },
      { name: 'Branded Eatables & Sweets Delivery' },
      { name: 'Traditional Spices & Seasoning Delivery' },
      { name: 'Economy Food Delivery Worldwide' },
      { name: 'Airtight Vacuum Moisture Barrier Packing' },
    ],
    imageSrc: '/assets/services/card-food.webp',
    imageAlt: 'Food parcel courier packaging with sealed mithai box, spice jars, and airtight namkeen pouches',
    layout: 'image-left',
    inquiryKey: 'food-delivery',
    advisory: 'Food consignments require standard commercial or certified airtight packaging conforming to destination country food import regulations.',
  },
  {
    id: 'household-baggage',
    number: '06',
    titlePrimary: 'Excess Baggage & Household',
    titleHighlight: 'Shipments',
    categoryTag: 'FOR PERSONAL & RELOCATION NEEDS',
    floatingBadge: 'For Your Relocation',
    floatingBadgeIcon: 'home',
    description:
      'Convenient doorstep shipping for student excess luggage, personal baggage, relocated household belongings, furniture, appliances, and personal effects.',
    services: [
      { name: 'Excess Airline Baggage Delivery' },
      { name: 'Scheduled Time & Next Day Delivery' },
      { name: 'Professional Baggage Packing' },
      { name: 'Furniture & Household Relocation' },
      { name: 'Used Clothing & Personal Effects' },
      { name: 'Electronic Appliances Delivery' },
      { name: 'Paintings & Framed Artwork Delivery' },
      { name: 'Home-Made & Handcrafted Items' },
    ],
    imageSrc: '/assets/hero/hero-courier.webp',
    imageAlt: 'Doorstep parcel delivery and personal household cargo transit van',
    layout: 'image-right',
    inquiryKey: 'household-baggage',
  },
];

export interface ProcessTimelineStep {
  number: string;
  title: string;
  description: string;
  iconName: 'chat' | 'file' | 'box' | 'truck';
}

export const PROCESS_TIMELINE_STEPS: ProcessTimelineStep[] = [
  {
    number: '01',
    title: 'Share Your Shipment Details',
    description: 'Tell us what you want to send, including shipment type, weight, and destination.',
    iconName: 'chat',
  },
  {
    number: '02',
    title: 'Discuss Service & Destination',
    description: 'Our team helps discuss the best-fit courier network, transit time, and custom documents.',
    iconName: 'file',
  },
  {
    number: '03',
    title: 'Confirm Packing and Booking',
    description: 'Confirm shipment details, tamper-evident packing guidance, and formal booking.',
    iconName: 'box',
  },
  {
    number: '04',
    title: 'Shipment Dispatch Through the Network',
    description: 'Your consignment is dispatched with prompt tracking updates straight to the receiver.',
    iconName: 'truck',
  },
];

export interface AllServicesFlattened {
  id: string;
  categoryName: string;
  serviceName: string;
}

export const ALL_CONFIRMED_SERVICES: AllServicesFlattened[] = [
  // 01 Air & Express Courier
  { id: 'domestic-air-courier', categoryName: '01. Air & Express Courier', serviceName: 'Domestic Air Courier' },
  { id: 'international-courier', categoryName: '01. Air & Express Courier', serviceName: 'International Air Express' },
  { id: 'express-delivery', categoryName: '01. Air & Express Courier', serviceName: 'Express Parcel Delivery' },
  { id: 'document-delivery', categoryName: '01. Air & Express Courier', serviceName: 'Document & Dossier Delivery' },
  { id: 'priority-pickup', categoryName: '01. Air & Express Courier', serviceName: 'Priority Doorstep Pickup' },

  // 02 Commercial & Business Shipments
  { id: 'b2b-delivery', categoryName: '02. Commercial & Business', serviceName: 'Business-to-Business (B2B) Delivery' },
  { id: 'b2c-delivery', categoryName: '02. Commercial & Business', serviceName: 'Business-to-Consumer (B2C) Delivery' },
  { id: 'textile-sample-delivery', categoryName: '02. Commercial & Business', serviceName: 'Textile Sample & Swatch Delivery' },
  { id: 'manufactured-item-delivery', categoryName: '02. Commercial & Business', serviceName: 'Manufactured Item Delivery' },
  { id: 'garment-exports', categoryName: '02. Commercial & Business', serviceName: 'Garments Export Shipments' },

  // 03 Sea Cargo Service
  { id: 'worldwide-sea-cargo', categoryName: '03. Sea Cargo Service', serviceName: 'Worldwide Sea Cargo Forwarding' },
  { id: 'express-sea-freight', categoryName: '03. Sea Cargo Service', serviceName: 'Express & Economy Sea Freight' },
  { id: 'container-forwarding', categoryName: '03. Sea Cargo Service', serviceName: 'LCL & FCL Container Forwarding' },
  { id: 'free-doorstep-pickup', categoryName: '03. Sea Cargo Service', serviceName: 'Free Doorstep Warehouse Pickup' },
  { id: 'port-destination-delivery', categoryName: '03. Sea Cargo Service', serviceName: 'On-Time Port & Destination Delivery' },

  // 04 Medicine Delivery
  { id: 'personal-medicine', categoryName: '04. Medicine & Healthcare', serviceName: 'Personal Use Prescribed Medicine' },
  { id: 'company-to-personal', categoryName: '04. Medicine & Healthcare', serviceName: 'Company to Personal Delivery' },
  { id: 'homeopathy-medicine', categoryName: '04. Medicine & Healthcare', serviceName: 'Homeopathy Medicine Delivery' },
  { id: 'ayurvedic-medicine', categoryName: '04. Medicine & Healthcare', serviceName: 'Ayurvedic Medicine Delivery' },
  { id: 'commercial-medicine', categoryName: '04. Medicine & Healthcare', serviceName: 'Commercial Medicine Delivery' },

  // 05 Food Item Delivery
  { id: 'handmade-food-delivery', categoryName: '05. Food Item & Eatables', serviceName: 'Handmade & Homemade Food Delivery' },
  { id: 'branded-eatables-delivery', categoryName: '05. Food Item & Eatables', serviceName: 'Branded Eatables & Sweets Delivery' },
  { id: 'traditional-spices-delivery', categoryName: '05. Food Item & Eatables', serviceName: 'Traditional Spices & Seasoning Delivery' },
  { id: 'economy-food-delivery', categoryName: '05. Food Item & Eatables', serviceName: 'Economy Food Delivery Worldwide' },
  { id: 'vacuum-packing', categoryName: '05. Food Item & Eatables', serviceName: 'Airtight Vacuum Moisture Barrier Packing' },

  // 06 Excess Baggage & Household Items
  { id: 'excess-baggage', categoryName: '06. Excess Baggage & Household', serviceName: 'Excess Airline Baggage Delivery' },
  { id: 'scheduled-baggage-delivery', categoryName: '06. Excess Baggage & Household', serviceName: 'Scheduled Time & Next Day Delivery' },
  { id: 'baggage-packing', categoryName: '06. Excess Baggage & Household', serviceName: 'Professional Baggage Packing' },
  { id: 'furniture-delivery', categoryName: '06. Excess Baggage & Household', serviceName: 'Furniture & Household Relocation' },
  { id: 'used-clothing-delivery', categoryName: '06. Excess Baggage & Household', serviceName: 'Used Clothing & Personal Effects' },
  { id: 'electronic-item-delivery', categoryName: '06. Excess Baggage & Household', serviceName: 'Electronic Appliances Delivery' },
  { id: 'painting-delivery', categoryName: '06. Excess Baggage & Household', serviceName: 'Paintings & Framed Artwork Delivery' },
  { id: 'homemade-item-delivery', categoryName: '06. Excess Baggage & Household', serviceName: 'Home-Made & Handcrafted Items' },
];
