import type { Metadata } from 'next';
import { BusinessSolutionsView } from '@/components/business/BusinessSolutionsView';

export const metadata: Metadata = {
  title: 'Business Courier & Commercial Solutions',
  description:
    'Commercial courier and business parcel logistics in Bhilwara: dedicated trade accounts, priority commercial corridors, fabric swatches, and confidential document dispatch.',
  keywords: [
    'business courier bhilwara',
    'commercial logistics bhilwara',
    'corporate parcel dispatch bhilwara',
    'b2b courier rajasthan',
    'trade account courier bhilwara',
    'economic courier business solutions',
  ],
  alternates: {
    canonical: '/business-solutions',
  },
  openGraph: {
    title: 'Business Courier & Commercial Solutions | Economic Courier Bhilwara',
    description:
      'Structured courier logistics for Bhilwara commerce: supporting textile weaving mills, garment units, retail merchants, and corporate offices.',
    url: '/business-solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Courier & Commercial Solutions | Economic Courier Bhilwara',
    description:
      'Structured courier logistics for Bhilwara commerce: sample swatches, commercial parcels, and confidential business documents.',
  },
};

export default function BusinessSolutionsPage() {
  return <BusinessSolutionsView />;
}

