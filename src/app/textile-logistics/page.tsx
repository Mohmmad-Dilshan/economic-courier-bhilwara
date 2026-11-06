import type { Metadata } from 'next';
import { TextileLogisticsView } from '@/components/textiles/TextileLogisticsView';

export const metadata: Metadata = {
  title: 'Textile & Fabric Sample Logistics',
  description:
    'Dedicated courier services for Bhilwara weaving mills, garment exporters, and fabric merchants: sample swatches, shade cards, suiting cuts, and trade correspondence.',
  keywords: [
    'textile courier bhilwara',
    'fabric sample shipping bhilwara',
    'suiting sample courier bhilwara',
    'swatch book logistics bhilwara',
    'garment export samples rajasthan',
    'economic courier textile logistics',
  ],
  alternates: {
    canonical: '/textile-logistics',
  },
  openGraph: {
    title: 'Textile & Fabric Sample Logistics | Economic Courier Bhilwara',
    description:
      'Grounded in Bhilwara’s fabric and garment trade. Express courier handling for fabric sample swatches, shade books, cut-length pieces, and commercial trade paperwork.',
    url: '/textile-logistics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textile & Fabric Sample Logistics | Economic Courier Bhilwara',
    description:
      'Express courier handling for fabric swatch cards, sample books, and trade documents from Bhilwara.',
  },
};

export default function TextileLogisticsPage() {
  return <TextileLogisticsView />;
}
