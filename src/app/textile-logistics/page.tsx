import type { Metadata } from 'next';
import { TextileLogisticsView } from '@/components/textiles/TextileLogisticsView';

export const metadata: Metadata = {
  title: 'Textile Fabric Sample Courier Bhilwara | Swatch & Shade Card Delivery',
  description:
    'Dedicated textile courier service for Bhilwara weaving mills, garment exporters & fabric traders: express delivery of sample swatches, shade cards, suiting cuts & trade paperwork to Mumbai, Surat, Delhi & 220+ countries.',
  keywords: [
    'textile courier bhilwara',
    'fabric sample shipping bhilwara',
    'suiting sample courier bhilwara',
    'swatch book logistics bhilwara',
    'garment export samples rajasthan',
    'economic courier textile logistics',
    'mill shade card courier',
    'pur road textile courier',
    'new cloth market swatch booking',
    'bhilwara to mumbai fabric courier',
    'bhilwara to surat cloth sample courier',
  ],
  alternates: {
    canonical: '/textile-logistics',
  },
  openGraph: {
    title: 'Textile Fabric Sample Courier Bhilwara | Swatch & Shade Card Delivery',
    description:
      'Engineered for Bhilwara fabric & garment trade. Priority courier handling for fabric swatches, shade books, cut-length pieces, and commercial trade paperwork.',
    url: '/textile-logistics',
    type: 'website',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Courier Bhilwara Textile & Fabric Sample Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textile Fabric Sample Courier Bhilwara | Swatch & Shade Card Delivery',
    description:
      'Express courier handling for fabric swatch cards, sample books, and trade documents from Bhilwara.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const textileJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://economic-courier-bhilwara.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Textile Logistics',
          item: 'https://economic-courier-bhilwara.vercel.app/textile-logistics',
        },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Textile Fabric Sample & Swatch Logistics',
      provider: {
        '@type': 'DeliveryService',
        name: 'Economic Courier / eCS World Wide Express',
        url: 'https://economic-courier-bhilwara.vercel.app',
        telephone: '+91 89551 44444',
      },
      areaServed: [
        { '@type': 'City', name: 'Bhilwara' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Surat' },
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Ahmedabad' },
      ],
      description:
        'Specialized courier corridor for Bhilwara textile weaving and process houses. Tamper-evident poly mailers, shade card handling, and overnight priority flights to key Indian garment manufacturing hubs.',
    },
  ],
};

export default function TextileLogisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(textileJsonLd) }}
      />
      <TextileLogisticsView />
    </>
  );
}
