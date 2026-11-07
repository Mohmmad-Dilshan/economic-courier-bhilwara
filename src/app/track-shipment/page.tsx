import type { Metadata } from 'next';
import { TrackShipmentView } from '@/components/tracking/TrackShipmentView';

export const metadata: Metadata = {
  title: 'Track Shipment & Consignment Status | Economic Courier Bhilwara',
  description:
    'Track your consignment, AWB number, or booking docket status with Economic Courier / eCS World Wide Express Bhilwara. Real-time carrier movement and dispatch lookup.',
  keywords: [
    'track courier bhilwara',
    'consignment tracking bhilwara',
    'economic courier tracking',
    'awb tracking bhilwara',
    'ecs tracking status',
    'parcel tracking rajasthan',
    'docket status lookup bhilwara',
    'courier delivery status pur road',
  ],
  alternates: {
    canonical: '/track-shipment',
  },
  openGraph: {
    title: 'Track Shipment & Consignment Status | Economic Courier Bhilwara',
    description:
      'Check consignment status, booking references, and carrier tracking advice for parcels dispatched via Economic Courier / eCS World Wide Express, Bhilwara.',
    url: '/track-shipment',
    type: 'website',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Courier Bhilwara Consignment Tracking Desk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Track Shipment & Consignment Status | Economic Courier Bhilwara',
    description:
      'Consignment status lookup and booking advice for Economic Courier / eCS World Wide Express Bhilwara.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const trackingJsonLd = {
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
          name: 'Track Shipment',
          item: 'https://economic-courier-bhilwara.vercel.app/track-shipment',
        },
      ],
    },
    {
      '@type': 'ItemPage',
      name: 'Consignment Tracking Desk',
      description: 'Official consignment and docket tracking desk for Economic Courier Bhilwara.',
      url: 'https://economic-courier-bhilwara.vercel.app/track-shipment',
    },
  ],
};

export default function TrackShipmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trackingJsonLd) }}
      />
      <TrackShipmentView />
    </>
  );
}

