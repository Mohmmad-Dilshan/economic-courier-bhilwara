import type { Metadata } from 'next';
import Script from 'next/script';
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
    : 'https://www.economiccourierbhilwara.in');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Economic Courier Bhilwara | Best Courier Service in Bhilwara (Domestic & International)',
    template: '%s | Economic Courier Bhilwara',
  },
  description:
    'Economic Courier (eCS World Wide Express) is the best courier service in Bhilwara, Rajasthan. Priority domestic parcel delivery across 19,000+ Indian pin codes, worldwide air cargo to 220+ countries, specialized textile fabric sample logistics, and doorstep parcel pickup across Bhilwara. Central office Opposite New Cloth Market, Pur Road. Call +91 89551 44444.',
  keywords: [
    'economic courier bhilwara',
    'economic courier',
    'ecs world wide express bhilwara',
    'best courier service in bhilwara',
    'best courier in bhilwara',
    'top courier service in bhilwara',
    'courier service in bhilwara',
    'courier service bhilwara',
    'courier in bhilwara',
    'courier near me bhilwara',
    'courier services bhilwara rajasthan',
    'textile sample courier bhilwara',
    'fabric sample delivery bhilwara',
    'cloth sample courier bhilwara',
    'international courier service bhilwara',
    'international courier bhilwara',
    'domestic courier bhilwara',
    'domestic parcel delivery bhilwara',
    'parcel service in bhilwara',
    'doorstep courier pickup bhilwara',
    'parcel pickup service bhilwara',
    'air cargo service bhilwara',
    'sea cargo bhilwara',
    'courier office pur road bhilwara',
    'courier opposite new cloth market bhilwara',
    'cheap and best courier in bhilwara',
    'fastest courier service bhilwara',
    'overnight courier bhilwara to mumbai',
    'courier bhilwara to surat',
    'courier bhilwara to delhi ncr',
    'courier bhilwara to ahmedabad',
    'ecs courier bhilwara rajasthan',
    'commercial freight forwarding bhilwara',
    'b2b courier bhilwara',
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
    title: 'Economic Courier Bhilwara | Best Courier Service in Bhilwara',
    description:
      'Top-rated courier service in Bhilwara, Rajasthan. Priority domestic parcels across 19,000+ pin codes, international air cargo across 220+ countries, textile fabric samples, and doorstep pickup.',
    siteName: 'Economic Courier / eCS World Wide Express',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        secureUrl: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Economic Courier & eCS World Wide Express – Best Courier Service in Bhilwara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Economic Courier Bhilwara | Best Courier Service in Bhilwara',
    description:
      'Top-rated courier & air cargo service in Bhilwara, Rajasthan. Specialized textile fabric sample logistics, domestic express, and worldwide parcel delivery.',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
    'geo.country': 'IN',
    'DC.title': 'Economic Courier Bhilwara | Best Courier Service in Bhilwara',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/logo/ecs-logo-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/logo/ecs-logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo/ecs-logo-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['DeliveryService', 'LocalBusiness'],
      '@id': 'https://www.economiccourierbhilwara.in/#business',
      name: 'Economic Courier / eCS World Wide Express',
      legalName: 'Economic Courier',
      alternateName: [
        'Economic Courier Bhilwara',
        'Economic Courier',
        'eCS World Wide Express Bhilwara',
        'Best Courier in Bhilwara',
        'Best Courier Service in Bhilwara',
        'eCS Courier Bhilwara',
        'Economic Courier Service Bhilwara',
      ],
      description:
        'Economic Courier (eCS World Wide Express) is widely recognized as the best courier service in Bhilwara, Rajasthan. Operating from our central dispatch hub Opposite New Cloth Market on Pur Road, we offer fast domestic parcel express across 19,000+ Indian pin codes, worldwide air cargo to 220+ countries, specialized textile fabric sample logistics, and doorstep parcel pickup across Bhilwara.',
      slogan: "Moving Every Shipment Forward — Bhilwara's Best Courier & Cargo Hub",
      url: 'https://www.economiccourierbhilwara.in',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.economiccourierbhilwara.in/#logo',
        url: 'https://www.economiccourierbhilwara.in/assets/logo/ecs-logo-512.png',
        contentUrl: 'https://www.economiccourierbhilwara.in/assets/logo/ecs-logo-512.png',
        width: 512,
        height: 512,
        caption: 'Economic Courier & eCS World Wide Express Bhilwara Official Brand Logo',
      },
      image: 'https://www.economiccourierbhilwara.in/assets/og/economic-courier-social.jpg',
      telephone: '+91 89551 44444',
      email: 'economiccourierbhilwara@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road / Station Sector',
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
          opens: '09:30',
          closes: '20:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '10:00',
          closes: '16:00',
        },
      ],
      hasMap: 'https://maps.google.com/?q=25.3444,74.6366',
      priceRange: '₹₹',
      paymentAccepted: ['Cash', 'UPI', 'Bank Transfer', 'Credit Card', 'Debit Card'],
      currenciesAccepted: 'INR',
      areaServed: [
        { '@type': 'City', name: 'Bhilwara' },
        { '@type': 'AdministrativeArea', name: 'Pur Road Textile Corridor' },
        { '@type': 'AdministrativeArea', name: 'New Cloth Market Area' },
        { '@type': 'AdministrativeArea', name: 'RIICO Industrial Area' },
        { '@type': 'AdministrativeArea', name: 'Hamirgarh Industrial Area' },
        { '@type': 'AdministrativeArea', name: 'Mandpam' },
        { '@type': 'State', name: 'Rajasthan' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Place', name: 'Worldwide (220+ Countries)' },
      ],
      knowsAbout: [
        'Best Courier Service in Bhilwara',
        'Express Parcel Delivery',
        'International Air Cargo',
        'Textile Fabric Sample Logistics',
        'Doorstep Parcel Pickup',
        'Domestic Surface Transport',
        'Document Courier',
        'Bhilwara Logistics',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bhilwara Courier & Cargo Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Best Courier Service in Bhilwara',
              description:
                'Top-rated domestic and international express courier service for parcels, documents, and business shipments in Bhilwara.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Domestic Priority Express Parcel Delivery',
              description:
                'Daily scheduled air and surface linehauls covering 19,000+ pin codes across India with priority delivery.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'International Air & Sea Cargo (eCS Express)',
              description:
                'Global freight and express parcel delivery to 220+ countries including UAE, UK, USA, Europe, and Asia-Pacific.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Textile Fabric Sample & Swatch Courier',
              description:
                'Specialized express sample shipping with tamper-evident packaging for Bhilwara textile mills and fabric merchants.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Doorstep Parcel Pickup Service in Bhilwara',
              description:
                'Scheduled doorstep parcel collection from offices, mills, shops, and homes across Bhilwara & RIICO industrial zones.',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '396',
        bestRating: '5',
        worstRating: '1',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 89551 44444',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      serviceType: [
        'Best Courier Service in Bhilwara',
        'Textile Fabric Sample & Swatch Courier',
        'Domestic Priority Air Parcel Express',
        'Worldwide Air Cargo (220+ Countries)',
        'Commercial B2B Freight Logistics',
        'Doorstep Parcel & Sample Pickup',
        'Express Document & Trade Correspondence Courier',
        'Excess Baggage & Heavy Surface Cargo',
      ],
      sameAs: [
        'https://www.instagram.com/economiccourierbhilwara/',
        'https://share.google/XGfOCGnHDKHlCOUaw',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.economiccourierbhilwara.in/#website',
      url: 'https://www.economiccourierbhilwara.in',
      name: 'Economic Courier Bhilwara',
      alternateName: 'Best Courier Service in Bhilwara',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.economiccourierbhilwara.in/track-shipment?awb={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    process.env.NEXT_PUBLIC_GA_ID;

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />

        {/* Google Tag Manager & dataLayer Initialization */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MVPR57HJ');
            `,
          }}
        />

        {gaMeasurementId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVPR57HJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ScrollObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
