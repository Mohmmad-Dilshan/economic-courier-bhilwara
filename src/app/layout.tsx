import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://economiccourierbhilwara.com'),
  title: {
    default: 'Economic Courier | eCS World Wide Express Bhilwara',
    template: '%s | Economic Courier Bhilwara',
  },
  description:
    'Official website for Economic Courier & eCS World Wide Express in Bhilwara, Rajasthan. Priority domestic express, worldwide air cargo, and specialized textile fabric sample logistics.',
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
    url: 'https://economiccourierbhilwara.com',
    title: 'Economic Courier | eCS World Wide Express Bhilwara',
    description:
      'Prompt, dependable domestic parcel delivery & worldwide express cargo serving Bhilwara textile trade and community.',
    siteName: 'Economic Courier / eCS World Wide Express',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Economic Courier | eCS World Wide Express Bhilwara',
    description:
      'Bhilwara premier courier service for textile samples, domestic express, and worldwide air parcel delivery.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollObserver } from '@/components/common/ScrollObserver';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(plusJakarta.variable, jetbrainsMono.variable)}>
      <body className="font-sans min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <ScrollObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

