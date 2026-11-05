import type { Metadata } from 'next';
import { ContactView } from '@/components/contact/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us & Consignment Inquiry',
  description:
    'Contact Economic Courier and eCS World Wide Express in Bhilwara, Rajasthan. Direct customer inquiry desk, parcel booking information, textile swatch forwarding guidance, and location details.',
  keywords: [
    'contact economic courier bhilwara',
    'courier office bhilwara',
    'ecs express contact bhilwara',
    'economic courier office bhilwara',
    'textile courier inquiry bhilwara',
    'courier booking desk bhilwara',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us & Consignment Inquiry | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Direct customer inquiry desk in Bhilwara. Priority domestic parcels, international air cargo, and textile swatch sample shipping assistance.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Consignment Inquiry | Economic Courier Bhilwara',
    description:
      'Contact Economic Courier and eCS World Wide Express in Bhilwara: customer desk, consignment queries, and booking guidance.',
  },
};

export default function ContactPage() {
  return <ContactView />;
}
