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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Economic Courier | eCS World Wide Express – Bhilwara',
    template: '%s | Economic Courier Bhilwara',
  },
  description:
    'Domestic and international courier, air cargo, sea cargo and business logistics services from Bhilwara, Rajasthan. Explore Economic Courier\'s shipping solutions.',
  keywords: [
    'economic courier bhilwara',
    'ecs world wide express',
    'courier service bhilwara',
    'textile sample courier bhilwara',
    'international courier bhilwara rajasthan',
    'air cargo bhilwara',
  ],
  authors: [{ name: 'Economic Courier Bhilwara' }],
  creator: 'eCS World Wide Express',
  publisher: 'Economic Courier Bhilwara',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Economic Courier | eCS World Wide Express',
    description:
      'Domestic, international courier and complete logistics solutions from Bhilwara, Rajasthan.',
    siteName: 'Economic Courier / eCS World Wide Express',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Courier – eCS World Wide Express, Bhilwara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Economic Courier | eCS World Wide Express',
    description:
      'Courier, cargo and logistics services from Bhilwara, Rajasthan.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
