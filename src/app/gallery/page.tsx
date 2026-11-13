import type { Metadata } from 'next';
import { GalleryView } from '@/components/gallery/GalleryView';

export const metadata: Metadata = {
  title: 'Operations Gallery & Video Reels | Economic Courier Bhilwara',
  description:
    'Authentic ground operations gallery and video reels from Economic Courier & eCS World Wide Express, Bhilwara. Central intake counter, sorting crew, textile sample packaging, and daily linehaul dispatch opposite New Cloth Market.',
  keywords: [
    'economic courier gallery bhilwara',
    'ecs express reels',
    'courier operations bhilwara',
    'textile parcel packaging bhilwara',
    'courier booking counter bhilwara',
    'courier sorting team bhilwara',
    'bhilwara courier photos',
    'economic courier video reels',
    'pur road courier hub',
    'new cloth market courier',
    'courier delivery rajasthan photos',
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Operations Gallery & Video Reels | Economic Courier Bhilwara',
    description:
      'Genuine ground operations archive: walk-in intake counter, parcel sorting, textile swatch packaging lab, and express fleet dispatch in Bhilwara.',
    url: '/gallery',
    type: 'website',
    images: [
      {
        url: '/assets/business-fleet-3d.webp',
        width: 1024,
        height: 512,
        alt: 'Economic Courier Bhilwara Operations Hub & Commercial Fleet Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Gallery & Video Reels | Economic Courier Bhilwara',
    description:
      'Authentic video reels and verified operations archive from Economic Courier Bhilwara.',
    images: ['/assets/business-fleet-3d.webp'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.economiccourierbhilwara.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Operations Gallery',
          item: 'https://www.economiccourierbhilwara.in/gallery',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.economiccourierbhilwara.in/#business',
      name: 'Economic Courier / eCS World Wide Express',
      alternateName: 'Economic Courier Bhilwara',
      image: 'https://www.economiccourierbhilwara.in/assets/business-fleet-3d.webp',
      telephone: '+91 89551 44444',
      url: 'https://www.economiccourierbhilwara.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite New Cloth Market, Railway Staff Quarter Area',
        addressLocality: 'Bhilwara',
        addressRegion: 'Rajasthan',
        postalCode: '311001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.3444,
        longitude: 74.6366,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:30',
        },
      ],
    },
    {
      '@type': 'ImageGallery',
      name: 'Economic Courier Bhilwara Operations Gallery',
      description:
        'Ground photographs and real video reels showcasing dispatch operations, parcel sorting, textile packaging, and linehaul fleet at Bhilwara Hub.',
      url: 'https://www.economiccourierbhilwara.in/gallery',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryView />
    </>
  );
}
