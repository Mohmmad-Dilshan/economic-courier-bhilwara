import type { Metadata } from 'next';
import { AboutView } from '@/components/about/AboutView';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Economic Courier and eCS World Wide Express in Bhilwara, Rajasthan. Dedicated domestic express courier, worldwide air cargo transit, and specialized textile fabric sample logistics.',
  keywords: [
    'about economic courier bhilwara',
    'ecs world wide express bhilwara',
    'courier office bhilwara',
    'textile courier bhilwara history',
    'chandra shekhar panecha economic courier',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Economic Courier & eCS World Wide Express Bhilwara',
    description:
      'Bhilwara courier hub operations, local textile trade specialization, and global express air transit.',
  },
};

export default function AboutPage() {
  return <AboutView />;
}
