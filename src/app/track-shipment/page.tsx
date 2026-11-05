import type { Metadata } from 'next';
import { TrackShipmentView } from '@/components/tracking/TrackShipmentView';

export const metadata: Metadata = {
  title: 'Track Shipment',
  description:
    'Track your consignment and parcel status with Economic Courier / eCS World Wide Express Bhilwara. Enter your booking docket or AWB reference.',
  keywords: [
    'track courier bhilwara',
    'consignment tracking bhilwara',
    'economic courier tracking',
    'awb tracking bhilwara',
    'ecs tracking status',
    'parcel tracking rajasthan',
  ],
  alternates: {
    canonical: '/track-shipment',
  },
  openGraph: {
    title: 'Track Shipment | Economic Courier Bhilwara',
    description:
      'Check consignment status, booking references, and carrier tracking advice for parcels dispatched via Economic Courier / eCS World Wide Express, Bhilwara.',
    url: '/track-shipment',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Track Shipment | Economic Courier Bhilwara',
    description:
      'Consignment status lookup and booking advice for Economic Courier / eCS World Wide Express Bhilwara.',
  },
};

export default function TrackShipmentPage() {
  return <TrackShipmentView />;
}

