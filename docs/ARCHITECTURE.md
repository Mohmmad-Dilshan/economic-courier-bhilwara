# Technical Architecture Document

**Project:** Economic Courier / eCS World Wide Express Website  
**Framework:** Next.js (App Router) + TypeScript + Vanilla CSS Modules  
**Document:** System Architecture, Component Hierarchy & Data Flow  
**Status:** Approved for Implementation  

---

## 1. Architecture Philosophy & Design Patterns

The architecture is designed to fulfill two critical criteria:
1. **Speed & SEO Dominance:** Maximum use of React Server Components (RSC) for instantaneous initial server rendering, static asset generation, and zero runtime JavaScript bloat.
2. **Interactive Polish:** Deliberate "client island" encapsulation for animations, form validations, tab filters, and tracking simulations.

```
┌─────────────────────────────────────────────────────────────┐
│                       RootLayout (RSC)                      │
│   ├── Meta Tags, JSON-LD Schema & Font Preloading           │
│   ├── Global Navigation Header (Client Island for Mobile)    │
│   │                                                         │
│   ├── Page Content (RSC Container)                          │
│   │   ├── HeroSection (RSC + Client Quick Track Island)     │
│   │   ├── TextileSpecialization (RSC)                       │
│   │   ├── ServicesMatrix (Client Island for Filtering)      │
│   │   ├── TrackingSimulator (Client Island - Demo Mode)     │
│   │   ├── TrustSignals & Credentials (RSC)                  │
│   │   ├── RateEstimator (Client Island -> WhatsApp Link)    │
│   │   └── ContactAndMapSection (RSC)                        │
│   │                                                         │
│   ├── Global Footer (RSC)                                   │
│   ├── Floating WhatsApp Action (Client Island)              │
│   └── Mobile Emergency Call Bar (Client Island)             │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Directory Structure

```
economic-courier-bhilwara/
├── docs/                           # Architecture, design & project documentation
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── BRAND.md
│   ├── CONTENT.md
│   ├── ARCHITECTURE.md
│   ├── ANIMATIONS.md
│   ├── SEO.md
│   ├── ASSETS.md
│   ├── TESTING.md
│   └── ROADMAP.md
├── public/                         # Static production assets
│   ├── assets/
│   │   ├── brand/                 # SVG Logos, monograms, favicons
│   │   ├── hero/                  # Curated logistics & cargo imagery (WebP/AVIF)
│   │   ├── services/              # Service illustration & iconography
│   │   └── textile/               # Bhilwara textile & fabric sample imagery
│   ├── robots.txt
│   └── sitemap.xml
├── src/                            # Source code (Next.js App Router)
│   ├── app/
│   │   ├── layout.tsx             # Root layout with metadata and fonts
│   │   ├── page.tsx               # Master Homepage (Phase 1)
│   │   ├── services/page.tsx      # Services breakdown (Phase 4)
│   │   ├── about/page.tsx         # About company & heritage (Phase 4)
│   │   ├── contact/page.tsx       # Contact, map, branches (Phase 4)
│   │   └── track/page.tsx         # Consignment tracking portal (Phase 4)
│   ├── components/
│   │   ├── ui/                    # Atom design components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── sections/              # Page feature sections
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TextileFeature.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── TrackingDemo.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   ├── RateEstimator.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/                # Cross-cutting widgets
│   │       ├── WhatsAppFloat.tsx
│   │       ├── MobileActionBar.tsx
│   │       └── NoticeBanner.tsx
│   ├── lib/                       # Utility functions & helpers
│   │   ├── constants.ts           # Business info & token constants
│   │   ├── whatsapp.ts            # WhatsApp URL query generator
│   │   ├── trackingData.ts        # Mock demonstration tracking records
│   │   └── utils.ts               # Classnames & formatter helpers
│   ├── types/                     # TypeScript data interfaces
│   │   ├── tracking.ts
│   │   ├── service.ts
│   │   └── inquiry.ts
│   └── styles/                    # Global stylesheets & design tokens
│       ├── tokens.css             # CSS custom properties
│       ├── globals.css            # Base element resets
│       └── components/            # Scoped CSS modules
├── AGENTS.md                       # Developer & Agent collaboration rules
├── README.md                       # Project overview & roadmap
└── package.json                    # Dependencies & scripts (Phase 1)
```

---

## 3. Server vs. Client Component Strategy

| Component | Nature | Justification |
| :--- | :--- | :--- |
| `layout.tsx` | **Server** | Injects SEO headers, preloads Google Fonts, generates layout shell |
| `page.tsx` | **Server** | Renders static HTML structure for search indexing |
| `Header.tsx` | **Hybrid** | Static links in Server Component; mobile hamburger menu in Client Island |
| `Hero.tsx` | **Server** | Static LCP hero text, preloaded images, no JS needed for display |
| `TrackingDemo.tsx` | **Client** | Handles keystroke input, consignment validation, and mock status feedback |
| `ServicesGrid.tsx` | **Client** | Allows interactive category filtering (Domestic / International / Textile) |
| `RateEstimator.tsx`| **Client** | Computes estimated weight bracket and outputs structured WhatsApp query |
| `WhatsAppFloat.tsx`| **Client** | Scroll-visibility trigger, ripple pulse animation, mobile dismiss |

---

## 4. Consignment Tracking Architecture (Demo Mode)

To strictly enforce **Ground Rule 1 (No Deceptive UI)**:

```typescript
// src/types/tracking.ts
export interface ConsignmentDemoResult {
  consignmentId: string;
  senderCity: string;
  destinationCity: string;
  status: 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Booked';
  currentLocation: string;
  lastUpdated: string;
  isDemoRecord: true;
}

// Sample lookups for demonstration:
export const DEMO_SHIPMENTS: Record<string, ConsignmentDemoResult> = {
  'ECS-BHL-1001': {
    consignmentId: 'ECS-BHL-1001',
    senderCity: 'Bhilwara (Pur Road)',
    destinationCity: 'Mumbai (Andheri East)',
    status: 'In Transit',
    currentLocation: 'Hub Surat, Transit Center',
    lastUpdated: 'Today, 06:45 AM',
    isDemoRecord: true,
  },
  'ECS-BHL-2002': {
    consignmentId: 'ECS-BHL-2002',
    senderCity: 'Bhilwara (Textile Market)',
    destinationCity: 'Dubai, UAE',
    status: 'Out for Delivery',
    currentLocation: 'Dubai Cargo Terminal 2',
    lastUpdated: 'Today, 10:15 AM',
    isDemoRecord: true,
  }
};
```

**UI Behavior:**
1. If the user searches `ECS-BHL-1001`, display the timeline accompanied by a banner:
   > *"Demonstration Status: This sample record demonstrates the client tracking portal experience."*
2. If any other tracking number is entered, provide a fallback:
   > *"No active demo record found for this ID. Live tracking activates upon carrier API provisioning. In the meantime, contact our Bhilwara dispatch counter directly at [Phone / WhatsApp]."*

---

## 5. Rate Inquiry & Lead Capture Engine

Rather than submitting to an unconfigured backend, inquiries generate structured WhatsApp messages:

```typescript
// src/lib/whatsapp.ts
export function buildWhatsAppInquiryLink({
  serviceType,
  destination,
  weightBracket,
  name,
}: InquiryParams): string {
  const phone = '91XXXXXXXXXX'; // Client WhatsApp business phone
  const message = [
    `*Courier Inquiry via Website*`,
    `Service: ${serviceType}`,
    `From: Bhilwara, Rajasthan`,
    `To: ${destination}`,
    `Approx Weight: ${weightBracket}`,
    name ? `Customer Name: ${name}` : '',
    `Please provide rate and pickup availability.`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

This guarantees 100% operational lead flow with zero server dependency or risk of silent form failure.
