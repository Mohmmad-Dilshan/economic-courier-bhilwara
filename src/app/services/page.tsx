import type { Metadata } from 'next';
import { ServicesView } from '@/components/services/ServicesView';

export const metadata: Metadata = {
  title: 'Best Courier & Air Cargo Services in Bhilwara | Economic Courier',
  description:
    'Top-rated courier & cargo services in Bhilwara, Rajasthan by Economic Courier (eCS Express): Domestic Priority Express across 19,000+ pin codes, 220+ Countries International Air Cargo, Textile Mill Swatches, Heavy Freight & Doorstep Pickup.',
  keywords: [
    'best courier in bhilwara',
    'best courier service in bhilwara',
    'economic courier bhilwara',
    'courier services bhilwara',
    'domestic air courier bhilwara',
    'international courier bhilwara',
    'textile sample delivery bhilwara',
    'air cargo bhilwara',
    'sea cargo bhilwara',
    'excess baggage shipping bhilwara',
    'medicine delivery courier bhilwara',
    'food item shipping abroad bhilwara',
    'ecs world wide express',
    'commercial b2b courier bhilwara',
    'courier charges per kg bhilwara',
    'doorstep parcel pickup bhilwara',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Best Courier & Air Cargo Services in Bhilwara | Economic Courier',
    description:
      'Explore confirmed courier and cargo services from Bhilwara: Priority domestic express, 220+ countries worldwide air cargo, textile mill samples, and heavy cargo linehauls.',
    url: '/services',
    type: 'website',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Courier Bhilwara Courier & Air Cargo Services Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Courier & Air Cargo Services in Bhilwara | Economic Courier',
    description:
      'Complete courier & air cargo services from Bhilwara: Domestic express, worldwide forwarding, and textile logistics.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.economiccourierbhilwara.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services Portfolio',
          item: 'https://www.economiccourierbhilwara.in/services',
        },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Courier & Logistics Services Portfolio',
      provider: {
        '@type': 'DeliveryService',
        name: 'Economic Courier / eCS World Wide Express',
        url: 'https://www.economiccourierbhilwara.in',
        telephone: '+91 89551 44444',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bhilwara',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bhilwara Courier & Logistics Portfolio',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Domestic Priority Air Courier',
              description: 'Next-flight-out and overnight delivery connecting Bhilwara to 19,000+ pin codes across India.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'eCS World Wide Express Air Cargo',
              description: 'Cross-border express parcel and document delivery to 220+ countries with customs clearance.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Textile Fabric Sample & Swatch Logistics',
              description: 'Urgent fabric swatch books, shade cards, and mill samples with tamper-evident poly packaging.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Heavy Commercial Cargo & Sea Freight',
              description: 'Heavyweight LCL/FCL ocean freight, surface linehauls, and excess baggage solutions.',
            },
          },
        ],
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesView />
    </>
  );
}
