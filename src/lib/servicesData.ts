import { ServiceItem } from '@/types/service';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'domestic',
    title: 'Domestic Express Courier',
    tagline: 'Reliable surface & priority air courier across India',
    category: 'domestic',
    categoryLabel: 'Domestic Courier',
    turnaroundTime: 'Corridor dependent [Timelines pending client confirmation]',
    coverage: 'All-India commercial centers & regional pin codes',
    description:
      'Prompt domestic parcel and freight transit connecting Bhilwara across Rajasthan and key Indian commercial centers. Tailored for commercial dispatches, urgent packets, and retail parcels with individualized handling.',
    features: [
      'Priority domestic connectivity linking Bhilwara to major trade corridors (Delhi NCR, Mumbai, Surat, Ahmedabad, Jaipur)',
      'Doorstep pickup coordination across Bhilwara urban & industrial sectors [Coverage Radius Pending Confirmation]',
      'Tamper-evident packaging options for business parcels and retail consignments',
      'Consignment number assigned for transit tracking [Demo tracking mode active in prototype]',
    ],
    idealFor: [
      'Commercial goods & spare parts',
      'Retail consumer parcels',
      'Urgent business paperwork',
      'Inter-city sample packets',
    ],
    iconName: 'Truck',
    image: '/assets/services/service-domestic.jpg',
    inquiryServiceKey: 'domestic',
    ctaLabel: 'Inquire for Domestic Courier',
    complianceNote:
      '* Transit schedules and freight slabs depend on parcel weight, volume dimensions, and destination hub. Formal quotation provided upon inquiry.',
  },
  {
    id: 'international',
    title: 'International Courier & Air Cargo',
    tagline: 'Global air express connectivity reaching 220+ countries',
    category: 'international',
    categoryLabel: 'International Courier',
    turnaroundTime: 'Corridor & customs dependent [Pending carrier confirmation]',
    coverage: '220+ countries and global international cargo hubs',
    description:
      'Worldwide air cargo and international courier transit under the eCS World Wide Express brand identity. Designed for overseas sample dispatches, personal gifts, and commercial export parcels with proper documentation guidance.',
    features: [
      'Global air courier transit reaching 220+ destination countries and territories',
      'Export invoice assistance and customs documentation guidance for compliant clearance',
      'Protective multi-layer packaging for overseas air transit protection',
      'Forwarded through recognized global carrier networks [Carrier franchise confirmation pending]',
    ],
    idealFor: [
      'Export textile & commercial samples',
      'Overseas personal parcels & gifts',
      'International university dossiers',
      'Cross-border business correspondence',
    ],
    iconName: 'Globe',
    image: '/assets/services/service-international.jpg',
    inquiryServiceKey: 'international',
    ctaLabel: 'Inquire for International Courier',
    complianceNote:
      '* All international consignments are routed via standard forwarding channels. Third-party carrier trademarks (e.g. DHL, FedEx) remain property of their respective owners.',
  },
  {
    id: 'documents',
    title: 'Documents & Important Parcels',
    tagline: 'High-priority, secure transit for time-critical paperwork',
    category: 'documents',
    categoryLabel: 'Documents & Parcels',
    turnaroundTime: 'Priority desk-to-desk dispatch [Corridor dependent]',
    coverage: 'Domestic priority and global destination centers',
    description:
      'Dedicated protective courier handling for confidential paperwork, academic transcripts, legal contracts, and sensitive dossiers requiring verifiable chain-of-custody handling.',
    features: [
      'Reinforced water-resistant document mailers and tamper-evident poly sleeves',
      'High-priority desk-to-desk handling for academic admissions and visa paperwork',
      'Direct coordination to consulates, universities, government offices, and corporate headquarters',
      'Proof of dispatch documentation and milestone tracking [Prototype Demo Mode]',
    ],
    idealFor: [
      'University applications & academic transcripts',
      'Passport & visa application dossiers',
      'Legal agreements, court deeds & tenders',
      'Corporate bank guarantees & financial briefs',
    ],
    iconName: 'FileText',
    image: '/assets/services/service-documents.jpg',
    inquiryServiceKey: 'documents',
    ctaLabel: 'Inquire for Document Courier',
    complianceNote:
      '* Senders are advised to verify that non-standard international documents meet foreign consulate and destination guidelines prior to sealed packaging.',
  },
  {
    id: 'textiles',
    title: 'Textile & Fabric Sample Logistics',
    tagline: 'Engineered specifically for Bhilwara’s weaving mills & trade corridors',
    category: 'textile',
    categoryLabel: 'Textile & Business Shipping',
    turnaroundTime: 'Priority textile corridor dispatch [Schedule pending confirmation]',
    coverage: 'Bhilwara textile cluster to national & international trade centers',
    description:
      'Specialized express logistics connecting Bhilwara’s textile mills, process houses, and yarn merchants to buyers, fashion exporters, and garment manufacturing centers across India.',
    features: [
      'Scheduled collection from RIICO Industrial Areas (Hamirgarh, Mandpam) and city trade corridors',
      'Specialized swatch and sample roll packaging preserving fabric finish, texture, and labels',
      'High-speed express routes to key garment production centers: Surat, Mumbai, Delhi NCR, Ahmedabad',
      'Multi-packet commercial consignment consolidation for trade market distribution',
    ],
    idealFor: [
      'Fabric swatch cards & shade books',
      'Suiting & shirting cut-length samples',
      'Yarn cones & weave proof swatches',
      'Apparel design catalogs & merchandiser packages',
    ],
    iconName: 'Layers',
    image: '/assets/office/about-collage.jpg',
    inquiryServiceKey: 'textiles',
    ctaLabel: 'Inquire for Textile Shipping',
    complianceNote:
      '* Tailored pickup schedules and commercial sample volume terms are coordinated directly with Bhilwara mills and trading firms.',
  },
];
