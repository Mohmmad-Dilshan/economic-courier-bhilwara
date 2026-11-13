import type { Metadata } from 'next';
import { ContactView } from '@/components/contact/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us & Office Location in Bhilwara | Economic Courier Desk',
  description:
    'Contact Economic Courier & eCS World Wide Express in Bhilwara: Counter Opposite New Cloth Market, Pur Road / Station Sector. Call +91 89551 44444 for doorstep parcel pickups, rate quotes & textile swatch booking.',
  keywords: [
    'contact economic courier bhilwara',
    'courier office bhilwara',
    'ecs express contact bhilwara',
    'economic courier office bhilwara',
    'textile courier inquiry bhilwara',
    'courier booking desk bhilwara',
    'courier phone number bhilwara',
    'pur road courier office contact',
    'opposite new cloth market courier',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us & Office Location in Bhilwara | Economic Courier Desk',
    description:
      'Direct customer inquiry desk in Bhilwara. Priority domestic parcels, international air cargo, and textile swatch sample shipping assistance.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Economic Courier Bhilwara Hub Counter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Office Location in Bhilwara | Economic Courier Desk',
    description:
      'Contact Economic Courier and eCS World Wide Express in Bhilwara: customer desk, consignment queries, and booking guidance.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const contactJsonLd = {
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
          name: 'Contact Us',
          item: 'https://www.economiccourierbhilwara.in/contact',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      name: 'Contact Economic Courier Bhilwara Central Desk',
      description: 'Official counter address, phone numbers, and inquiry desk for Economic Courier Bhilwara.',
      url: 'https://www.economiccourierbhilwara.in/contact',
      mainEntity: {
        '@type': 'DeliveryService',
        name: 'Economic Courier / eCS World Wide Express',
        telephone: '+91 89551 44444',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road / Station Sector',
          addressLocality: 'Bhilwara',
          addressRegion: 'Rajasthan',
          postalCode: '311001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 25.3444,
          longitude: 74.6366,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '20:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '16:00',
          },
        ],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactView />
    </>
  );
}
