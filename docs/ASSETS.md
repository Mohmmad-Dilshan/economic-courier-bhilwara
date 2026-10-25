# Asset Management & Media Strategy

**Project:** Economic Courier / eCS World Wide Express  
**Document:** Media Handling, Photography Protocols, Video Embedding & Asset Registry  
**Status:** Approved for Implementation  

---

## 1. Logo Asset Strategy

The visual brand identity relies on the provided **eCS World Wide Express** emblem combined with the **Economic Courier** trade lockup.

### 1.1 Digital Asset Inventory
| Asset Filename | Format | Dimensions | Purpose |
| :--- | :--- | :--- | :--- |
| `ecs-logo-primary.svg` | SVG (Vector) | Scalable | Primary navigation bar & hero branding (Navy + Express Red) |
| `ecs-logo-white.svg` | SVG (Vector) | Scalable | Dark surfaces, footer, inverted banners |
| `ecs-emblem.svg` | SVG (Vector) | 64×64 | Monogram icon for favicon, mobile headers, map pins |
| `favicon.ico` | ICO | 32×32 | Standard browser tab icon |
| `apple-touch-icon.png` | PNG | 180×180 | iOS home screen bookmark icon |

### 1.2 Preservation Rules
- Vector SVGs are the mandatory format for logos to prevent raster pixelation on high-DPI displays.
- All SVGs must be sanitized and optimized (removing unnecessary Illustrator/Inkscape metadata).

---

## 2. Business Photography Protocols

The credibility of the website relies heavily on authentic local imagery rather than stock photos.

### 2.1 Authentic On-Site Photography Checklist (To Request from Client)
1. **Bhilwara Office Exterior:** Daytime shot of the storefront displaying the eCS / Economic Courier signage.
2. **Dispatch & Booking Counter:** Friendly staff member assisting a customer or weighing a parcel on the commercial scale.
3. **Packaging Station:** Highlighting secure parcel taping, barcode labeling, and waterproof plastic outer pouches.
4. **Textile Sample Dispatch:** Real fabric swatches, sample cardboard folders, and neatly stacked sample boxes ready for air dispatch.
5. **Local Delivery Fleet:** Courier delivery personnel with branded bags or vehicles in front of the Bhilwara hub.

### 2.2 Curated Stock Photography Guardrails
Until authentic photos are collected during the client review phase:
- Use only clean, neutral commercial logistics imagery (e.g., cargo freighter aircraft taxiing at dusk, highway express transit at sunrise, clean parcels on modern conveyor systems).
- **Prohibited:** Never use stock imagery showing couriers wearing branded uniforms of multinational rivals (e.g. UPS, DHL, FedEx, Royal Mail) or non-Indian urban settings.

---

## 3. Instagram Video & Reel Content Integration

Couriers frequently leverage Instagram reels to showcase daily dispatches, customer unboxings, and branch activities.

### 3.1 Rules of Engagement for Video Assets
1. **Authorization Mandatory:** Only embed videos, reels, or clips explicitly authorized or created by the business owner.
2. **No Performance Degradation:**
   - Never embed heavy, unoptimized third-party Instagram iframe scripts directly into the initial page load.
   - Use a **Facade / Lite-Player Pattern**: Display a high-resolution, static poster frame with a play button overlay.
   - The actual video player or iframe loads *only* when the user clicks the play button.
3. **Playback Constraints:**
   - Video must be muted by default (`muted: true`).
   - Autoplay is prohibited unless video is an ambient background loop with `playsinline` and no audio track.
   - Must support responsive aspect ratios (`16:9` for landscape videos, `9:16` for Instagram Reels / vertical clips).

---

## 4. File Optimization & Storage Architecture

```
public/assets/
├── brand/
│   ├── ecs-logo-primary.svg
│   ├── ecs-logo-white.svg
│   ├── ecs-emblem.svg
│   └── og-preview.jpg         (1200×630, < 180 KB)
├── hero/
│   ├── express-air-cargo.webp (1920×1080, < 160 KB)
│   └── express-mobile-hero.webp(800×1000, < 90 KB)
├── services/
│   ├── domestic-express.webp  (800×600, < 75 KB)
│   ├── international-cargo.webp(800×600, < 75 KB)
│   ├── document-courier.webp  (800×600, < 70 KB)
│   └── textile-logistics.webp (800×600, < 80 KB)
└── video/
    └── poster-reel-preview.webp(720×1280, < 95 KB)
```

### 4.1 Compression Standards
- All raster photographs must be encoded in **WebP** or **AVIF** format with quality factor between `80–85%`.
- Max raw file sizes:
  - Hero banners: `< 180 KB`
  - Service card images: `< 80 KB`
  - Icons and badges: `< 15 KB`
