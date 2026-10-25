# Technical SEO & Local Search Strategy

**Project:** Economic Courier / eCS World Wide Express  
**Location Focus:** Bhilwara, Rajasthan, India  
**Document:** Search Engine Optimization, Local Citation & Structured Data  
**Status:** Approved for Implementation  

---

## 1. Local Search Engine Strategy (Bhilwara Region)

The primary search goal is to capture high-intent local commercial queries originating in and around Bhilwara district (the textile hub of Rajasthan).

### 1.1 Keyword Matrix

| Keyword Intent | Search Query | Target Section / Page |
| :--- | :--- | :--- |
| **Primary Brand** | `economic courier bhilwara` | Homepage (H1 / Title) |
| **Primary Network** | `ecs world wide express bhilwara` | Homepage (H1 / Title) |
| **High Intent Local** | `best courier service in bhilwara` | Homepage (Hero / Services) |
| **B2B Textile** | `textile sample courier bhilwara` | Textile Logistics Specialization |
| **International** | `international courier service bhilwara` | Worldwide Express Section |
| **Document Urgent** | `same day document courier bhilwara` | Services / Rate Inquiry |
| **Regional Transit** | `bhilwara to mumbai / surat courier` | Textile Trade Corridors Block |

---

## 2. On-Page Metadata Specifications

### 2.1 Master Homepage Meta
```html
<title>Economic Courier | eCS World Wide Express Bhilwara - Express Parcel & Textile Logistics</title>
<meta name="description" content="Official website for Economic Courier & eCS World Wide Express in Bhilwara, Rajasthan. Priority domestic express, worldwide air cargo, and specialized textile fabric sample courier." />
<meta name="keywords" content="economic courier bhilwara, ecs world wide express, courier service bhilwara, textile sample courier, international courier bhilwara rajasthan" />
<link rel="canonical" href="https://economiccourierbhilwara.com/" />
```

### 2.2 Social Open Graph & Twitter Cards
```html
<meta property="og:type" content="business.business" />
<meta property="og:title" content="Economic Courier | eCS World Wide Express Bhilwara" />
<meta property="og:description" content="Prompt, dependable domestic parcel delivery & worldwide express cargo serving Bhilwara's textile trade and retail community." />
<meta property="og:url" content="https://economiccourierbhilwara.com/" />
<meta property="og:image" content="https://economiccourierbhilwara.com/assets/brand/og-preview.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_IN" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Economic Courier | eCS World Wide Express Bhilwara" />
<meta name="twitter:description" content="Bhilwara's premier courier service for textile samples, domestic express, and worldwide air parcel delivery." />
<meta name="twitter:image" content="https://economiccourierbhilwara.com/assets/brand/og-preview.jpg" />
```

---

## 3. JSON-LD Structured Data Schema

Injected into the root layout head for rich search snippet indexing:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://economiccourierbhilwara.com/#business",
      "name": "Economic Courier / eCS World Wide Express",
      "image": "https://economiccourierbhilwara.com/assets/brand/ecs-logo.png",
      "telephone": "+91-XXXXXXXXXX",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Textile Market, Pur Road [Pending Client Address]",
        "addressLocality": "Bhilwara",
        "addressRegion": "Rajasthan",
        "postalCode": "311001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.3475,
        "longitude": 74.6361
      },
      "url": "https://economiccourierbhilwara.com/",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "20:30"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/economiccourierbhilwara [Pending Confirmation]"
      ]
    },
    {
      "@type": "Service",
      "name": "Textile Fabric Sample Express Courier",
      "provider": {
        "@id": "https://economiccourierbhilwara.com/#business"
      },
      "areaServed": "Bhilwara and Industrial Zones",
      "description": "Urgent same-day pickup and overnight dispatch of fabric swatches and mill samples to trade corridors."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Economic Courier Bhilwara provide international parcel delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through eCS World Wide Express, we provide worldwide express parcel and document delivery to over 220 international destinations with complete customs documentation assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer doorstep pickup in Bhilwara?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, doorstep pickup is available for commercial textile clients, corporate documents, and individual parcels across Bhilwara city and industrial areas."
          }
        }
      ]
    }
  ]
}
```

---

## 4. Core Web Vitals Targets

| Metric | Target | Optimization Tactic |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.8s` | Priority image preloading (`priority` on hero graphics), webp/avif compression. |
| **INP (Interaction to Next Paint)** | `< 80ms` | Deferring heavy client state; pure CSS hover states; lightweight input handlers. |
| **CLS (Cumulative Layout Shift)** | `< 0.02` | Explicit `width` and `height` attributes on all images and video containers. |
| **FCP (First Contentful Paint)** | `< 0.9s` | Inlined critical CSS tokens, zero render-blocking script tags. |

---

## 5. Robots & Sitemap Protocol

- **`robots.txt`**: Permit all legitimate crawler agents; point directly to canonical XML sitemap.
- **`sitemap.xml`**: Dynamically generated via Next.js `app/sitemap.ts` to index all active pages and priority routes with weekly modification frequency.
