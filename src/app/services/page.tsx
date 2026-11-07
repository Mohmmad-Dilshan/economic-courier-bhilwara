import type { Metadata } from 'next';
import { ServicesView } from '@/components/services/ServicesView';

export const metadata: Metadata = {
  title: 'Courier, Air & Cargo Services Portfolio | Economic Courier Bhilwara',
  description:
    'Comprehensive logistics portfolio in Bhilwara: Domestic Air Courier, 220+ Countries International Express, Commercial B2B & Textile Swatch Transit, Heavy Air & Sea Cargo, Excess Baggage, and Regulated Food & Medicine Transport.',
  keywords: [
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
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Courier, Air & Cargo Services Portfolio | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Explore all 22 confirmed catalogue courier and cargo services: priority air express, commercial B2B textile corridors, heavyweight air and ocean freight, and personal household shipping.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courier, Air & Cargo Services Portfolio | Economic Courier Bhilwara',
    description:
      'Explore all 22 confirmed catalogue courier and cargo services from Bhilwara across 4 major logistics categories.',
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
