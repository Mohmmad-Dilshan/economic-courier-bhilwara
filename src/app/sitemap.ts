import type { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generator
 *
 * PRODUCTION SAFEGUARD:
 * Per client verification requirements (ROADMAP.md Q7), the official production
 * domain is pending final confirmation by the business owner.
 *
 * If a verified domain environment variable (NEXT_PUBLIC_SITE_URL) is provided,
 * the sitemap generates verified URLs for existing indexable routes (/ and /services).
 * Otherwise, it defers publishing guessed URLs by returning an empty sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Defer sitemap URLs until official domain confirmation
  if (!baseUrl) {
    return [];
  }

  // Only include routes that actually exist and are ready to be indexed
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/textile-logistics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/track-shipment`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

