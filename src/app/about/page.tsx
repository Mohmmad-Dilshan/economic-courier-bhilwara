import type { Metadata } from 'next';
import { AboutView } from '@/components/about/AboutView';

export const metadata: Metadata = {
  title: 'About Us | Economic Courier & eCS World Wide Express Bhilwara',
  description:
    'Learn about Economic Courier and eCS World Wide Express in Bhilwara, Rajasthan. Established central hub Opposite New Cloth Market, Pur Road. Dedicated domestic express, worldwide air cargo transit, and specialized textile fabric sample logistics.',
  keywords: [
    'about economic courier bhilwara',
    'ecs world wide express bhilwara',
    'courier office bhilwara',
    'textile courier bhilwara history',
    'chandra shekhar panecha economic courier',
    'courier company bhilwara rajasthan',
    'pur road courier hub background',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Discover our Bhilwara hub operations, dedicated courier personnel, local textile trade focus, and international express forwarding under eCS World Wide Express.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'About Economic Courier & eCS World Wide Express Bhilwara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Bhilwara courier hub operations, local textile trade specialization, and global express air transit.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const aboutJsonLd = {
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
          name: 'About Us',
          item: 'https://economic-courier-bhilwara.vercel.app/about',
        },
      ],
    },
    {
      '@type': 'AboutPage',
      name: 'About Economic Courier & eCS World Wide Express Bhilwara',
      description:
        'Official background and operations profile of Economic Courier in Bhilwara, Rajasthan.',
      url: 'https://economic-courier-bhilwara.vercel.app/about',
      mainEntity: {
        '@type': 'DeliveryService',
        name: 'Economic Courier / eCS World Wide Express',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road',
          addressLocality: 'Bhilwara',
          addressRegion: 'Rajasthan',
          postalCode: '311001',
          addressCountry: 'IN',
        },
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutView />
    </>
  );
}
