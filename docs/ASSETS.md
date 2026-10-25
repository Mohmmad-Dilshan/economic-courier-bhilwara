# Asset Management & Media Strategy

**Project:** Economic Courier / eCS World Wide Express, Bhilwara<br/>
**Document:** Media Handling, Asset Inventory, Photography Protocols & Licensing Guardrails<br/>
**Status:** Canonical Media Registry (Updated for Data & Assets Foundation)

---

## 1. Asset Inventory & Status Audit

A rigorous inspection of the workspace (`d:\economic-courier-bhilwara`) was conducted. Below is the active asset inventory:

| Asset Category | Target Path | Required Files | Current Workspace Status | Licensing & Permission Status |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Logo (Primary)** | `public/assets/logo/` | `ecs-logo-primary.svg`, `ecs-logo-white.svg` | ⚠️ **MISSING** — Zero local vector files found. | Proposed SVG concept generated in code; requires official owner approval. |
| **Brand Favicon / Monogram** | `public/assets/logo/` | `favicon.ico`, `ecs-monogram.svg` | ⚠️ **MISSING** | Pending approved client mark. |
| **Storefront & Office Hub** | `public/assets/office/` | `exterior-storefront.webp`, `booking-counter.webp` | ⚠️ **MISSING** | Must be authentic photos taken at Bhilwara premises. Stock photos of rival couriers prohibited. |
| **Team & Delivery Staff** | `public/assets/team/` | `counter-staff.webp`, `delivery-rider.webp` | ⚠️ **MISSING** | Requires express consent from featured employees before public publishing. |
| **Parcels & Textile Swatches**| `public/assets/parcels/` | `textile-swatches.webp`, `tamper-evident-seal.webp`| ⚠️ **MISSING** | Labels must have customer private information (names, phones) redacted. |
| **Social Media Visuals** | `public/assets/social/` | Poster frames for video reels | ⚠️ **MISSING** | **Strict Rule:** No downloading or scraping from Instagram without explicit owner permission. |

---

## 2. File Organization Architecture

The `public/assets/` tree has been scaffolded to maintain strict separation of concerns:

```
public/assets/
├── logo/               # Vector SVGs, lockups, and emblems
│   └── README.md       # Target specs & approval criteria
├── office/             # Authentic Bhilwara hub storefront & counter photos
│   └── README.md
├── team/               # Counter staff and delivery personnel photos (with consent)
│   └── README.md
├── parcels/            # Packaging, tamper-evident seals & swatch dispatch photos
│   └── README.md
└── social/             # Authorized poster frames for Instagram video facade player
    └── README.md
```

---

## 3. Brand Logo Usage & Approval Protocol

1. **No Fabricated Logos as Official Assets:**
   - The geometric vector chevron currently utilized in [`BrandLogo.tsx`](../src/components/common/BrandLogo.tsx) is a **temporary placeholder concept**.
   - It must remain visibly tagged with:
     `[Proposed Concept Logo — Pending Official Asset Approval]`
   - It will only be transitioned to the permanent brand asset once the business owner formally supplies their official vector file or gives written authorization to adopt the design.

2. **Vector SVG Mandate:**
   - Raster JPEG/PNG screenshots of logos found on social media will not be used in the header due to pixelation on retina displays.
   - The client will be requested to supply original EPS/AI/SVG artwork or high-resolution vector assets.

---

## 4. Photography & Video Integration Protocols

### 4.1 Authentic Photography Acquisition (Phase 3 On-Site Checklist)
To be collected directly from the Economic Courier owner:
1. **Daytime Exterior:** Bhilwara storefront showing street entrance and eCS signage.
2. **Booking Counter:** Active desk with commercial scale and parcel dispatch register.
3. **Textile Sample Handling:** Packaged fabric swatches ready for evening air dispatch.
4. **Delivery Vehicle / Courier Rider:** Bhilwara local delivery setup.

### 4.2 Instagram Video Facade Pattern
For the user-supplied Instagram reference ([`instagram.com/economiccourierbhilwara`](https://www.instagram.com/economiccourierbhilwara/)):
- **Consent Gate:** Media from the Instagram profile may only be utilized once permission is granted by the account owner.
- **Performance Rule:** Do not embed heavy third-party Instagram iframes into the initial server render. When authorized, use a **Lite-Player Facade** (static poster image with an SVG play icon; clicking loads the video stream on demand).

---

## 5. File Formats & Compression Budgets

| Asset Type | Maximum Raw Size | Primary Format | Fallback Format |
| :--- | :--- | :--- | :--- |
| **Vector Logos & Icons** | `< 25 KB` | Clean SVG | WebP |
| **Hero Backgrounds** | `< 160 KB` | WebP / AVIF | Compressed JPEG |
| **Feature / Card Photos** | `< 75 KB` | WebP / AVIF | Compressed JPEG |
| **Video Reel Posters** | `< 90 KB` | WebP | Compressed JPEG |
