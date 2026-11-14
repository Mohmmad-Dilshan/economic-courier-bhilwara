import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Economic Courier Bhilwara',
    short_name: 'Economic Courier',
    description:
      'Best Courier Service in Bhilwara — Domestic Priority Express & Worldwide Air Cargo by Economic Courier & eCS World Wide Express.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#DC2626',
    icons: [
      {
        src: '/assets/logo/ecs-logo-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/logo/ecs-logo-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/logo/ecs-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

