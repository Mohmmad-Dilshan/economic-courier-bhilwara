import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollObserver } from '@/components/common/ScrollObserver';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://economic-courier-bhilwara.vercel.app');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Economic Courier Bhilwara | Domestic, International & Textile Sample Courier',
    template: '%s | Economic Courier Bhilwara',
  },
  description:
    'Economic Courier & eCS World Wide Express Bhilwara. Trusted courier service specializing in textile fabric samples, priority domestic parcel delivery, worldwide air cargo to 220+ countries, and doorstep pickup across Bhilwara, Rajasthan.',
  keywords: [
    'economic courier bhilwara',
    'ecs world wide express bhilwara',
    'courier service in bhilwara',
    'best courier service bhilwara',
    'textile sample courier bhilwara',
    'fabric sample delivery bhilwara',
    'international courier service bhilwara',
    'domestic parcel delivery bhilwara',
    'air cargo service bhilwara',
    'economic courier pur road bhilwara',
    'parcel pickup service bhilwara',
    'ecs courier bhilwara rajasthan',
  ],
  authors: [{ name: 'Economic Courier Bhilwara' }],
  creator: 'eCS World Wide Express',
  publisher: 'Economic Courier Bhilwara',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Economic Courier Bhilwara | Domestic, International & Textile Courier',
    description:
      'Reliable courier service in Bhilwara, Rajasthan. Priority textile fabric sample delivery, fast domestic parcels, worldwide air cargo across 220+ countries, and doorstep pickup.',
    siteName: 'Economic Courier / eCS World Wide Express',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        secureUrl: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Economic Courier & eCS World Wide Express – Bhilwara Logistics Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Economic Courier Bhilwara | Domestic & International Courier Service',
    description:
      'Fast courier & air cargo services from Bhilwara, Rajasthan. Specialized textile fabric sample logistics, domestic express, and worldwide parcel delivery.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/logo/ecs-logo.png', sizes: '150x150', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo/ecs-logo.png', sizes: '150x150', type: 'image/png' },
    ],
    shortcut: '/assets/logo/ecs-logo.png',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'DeliveryService',
  name: 'Economic Courier / eCS World Wide Express',
  alternateName: 'Economic Courier Bhilwara',
  description:
    'Dedicated domestic express courier, worldwide air cargo, and specialized textile fabric sample logistics hub based in Bhilwara, Rajasthan.',
  url: 'https://economic-courier-bhilwara.vercel.app',
  logo: 'https://economic-courier-bhilwara.vercel.app/assets/logo/ecs-logo.png',
  image: 'https://economic-courier-bhilwara.vercel.app/assets/og/economic-courier-social.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Textile Market / Pur Road Corridor',
    addressLocality: 'Bhilwara',
    addressRegion: 'Rajasthan',
    postalCode: '311001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3475,
    longitude: 74.6366,
  },
  areaServed: [
    { '@type': 'City', name: 'Bhilwara' },
    { '@type': 'State', name: 'Rajasthan' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Place', name: 'Worldwide (220+ Countries)' },
  ],
  serviceType: [
    'Textile Sample Courier',
    'Domestic Express Parcel Delivery',
    'International Air Cargo',
    'Commercial Freight Forwarding',
    'Doorstep Parcel Pickup',
  ],
  priceRange: '₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(plusJakarta.variable, jetbrainsMono.variable)}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero/hero-courier.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <ScrollObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
