import type { Metadata } from 'next';
import { ServicesView } from '@/components/services/ServicesView';

export const metadata: Metadata = {
  title: 'Courier & Freight Services | Economic Courier Bhilwara',
  description:
    'Dedicated express courier services in Bhilwara: Priority domestic delivery across India, worldwide air cargo via eCS World Wide Express, secure document transit, and textile fabric sample logistics.',
  keywords: [
    'courier services bhilwara',
    'domestic courier bhilwara',
    'international courier bhilwara',
    'textile sample shipping bhilwara',
    'document courier bhilwara',
    'ecs world wide express',
    'express cargo bhilwara',
  ],
  alternates: {
    canonical: 'https://economiccourierbhilwara.com/services',
  },
  openGraph: {
    title: 'Courier & Freight Services | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Explore dependable domestic express, international air cargo, document shipping, and textile swatch sample logistics in Bhilwara, Rajasthan.',
    url: 'https://economiccourierbhilwara.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courier & Freight Services | Economic Courier Bhilwara',
    description:
      'Reliable courier services for personal and business parcels, export shipments, and textile mill samples from Bhilwara.',
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
