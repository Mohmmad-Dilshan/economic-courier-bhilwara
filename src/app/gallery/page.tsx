import type { Metadata } from 'next';
import { GalleryView } from '@/components/gallery/GalleryView';

export const metadata: Metadata = {
  title: 'Operations Gallery & Video Reels',
  description:
    'Authentic video reels and operations archive from Economic Courier & eCS World Wide Express in Bhilwara: parcel intake counter, sorting crew, textile sample packaging, and express fleet dispatch.',
  keywords: [
    'economic courier gallery bhilwara',
    'ecs express reels',
    'courier operations bhilwara',
    'textile parcel packaging bhilwara',
    'courier booking counter bhilwara',
    'courier sorting team bhilwara',
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Operations Gallery & Video Reels | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Genuine ground operations archive: walk-in intake counter, parcel sorting, textile swatch packaging lab, and express fleet dispatch in Bhilwara.',
    url: '/gallery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Gallery & Video Reels | Economic Courier Bhilwara',
    description:
      'Authentic video reels and verified operations archive from Economic Courier Bhilwara.',
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
