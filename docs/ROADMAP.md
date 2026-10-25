# Phased Implementation Roadmap & Decisions Log

**Project:** Economic Courier / eCS World Wide Express Website  
**Location:** Bhilwara, Rajasthan, India  
**Document:** Phased Execution Plan, Milestone Gates & Client Decisions Log  
**Status:** Canonical Roadmap Guide  

---

## 1. Phased Delivery Roadmap

```
┌────────────────────────────────────────────────────────────────────────┐
│ Phase 0: Technical Specification & Planning (COMPLETED)               │
│ └── Comprehensive PRD, Design System, Architecture & Testing Specs    │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 1: Foundation Setup & Design System Tokens                       │
│ └── Next.js 14+ App Router, CSS tokens, layout shell, base components  │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 2: High-Impact Master Home Page                                  │
│ └── Hero, Tracking Simulator, Textile Focus, Services Grid, WhatsApp  │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 3: Client Review, Pitch & Asset Gathering                        │
│ └── Live walkthrough with business owner, authentic photo capture     │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 4: Multi-Page Expansion                                          │
│ └── Dedicated /services, /about, /track, /contact pages                │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 5: Final QA, SEO Verification & Production Deployment            │
│ └── Lighthouse 95+ score, custom domain linking, Google Business sync  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Detailed Phase Breakdown

### Phase 0: Technical Specification & Planning (Current Phase — Complete)
- [x] Inspect workspace state and define ground rules in [`AGENTS.md`](../AGENTS.md).
- [x] Author [`docs/PRD.md`](./PRD.md) establishing scope, personas, and user journeys.
- [x] Author [`docs/DESIGN.md`](./DESIGN.md) specifying design tokens, typography, and responsive rules.
- [x] Author [`docs/BRAND.md`](./BRAND.md) capturing eCS / Economic Courier dual identity.
- [x] Author [`docs/CONTENT.md`](./CONTENT.md) separating verified facts from unverified placeholders.
- [x] Author [`docs/ARCHITECTURE.md`](./ARCHITECTURE.md) defining Next.js RSC and state boundaries.
- [x] Author [`docs/ANIMATIONS.md`](./ANIMATIONS.md) detailing motion curves and reduced-motion standards.
- [x] Author [`docs/SEO.md`](./SEO.md) configuring local Bhilwara search keywords and JSON-LD schemas.
- [x] Author [`docs/ASSETS.md`](./ASSETS.md) defining logo usage, authentic photo guidelines, and video embed rules.
- [x] Author [`docs/TESTING.md`](./TESTING.md) detailing cross-device matrices and QA acceptance criteria.
- [x] Author [`docs/ROADMAP.md`](./ROADMAP.md) detailing implementation schedule and pending client decisions.

---

### Phase 1: Foundation Setup & Design System Tokens
- **Milestone Goal:** Establish clean, error-free Next.js App Router framework with foundational CSS design tokens.
- **Key Tasks:**
  1. Initialize Next.js project with TypeScript in root directory.
  2. Implement `tokens.css` with exact color palette, typography scales, radii, and elevations from [`docs/DESIGN.md`](./DESIGN.md).
  3. Create atomic UI components: `Button`, `Card`, `Badge`, `Input`, `NoticeBanner`.
  4. Build responsive `Header` and `Footer` layout shell.

---

### Phase 2: High-Impact Master Home Page
- **Milestone Goal:** Deliver a complete, stunning single-page prototype ready for immediate client demonstration.
- **Key Tasks:**
  1. Build **Hero Section** with dual-brand typography, rapid action triggers, and quick consignment tracking input.
  2. Implement **Bhilwara Textile Specialization Strip** highlighting fabric swatch urgency and garment trade lanes.
  3. Implement **Comprehensive Services Matrix** with interactive category filter (Domestic, Worldwide, Textile, Documents).
  4. Implement **Consignment Tracking Simulator (Demo Mode)** with explicit visual disclosure tags and sample lookups.
  5. Implement **Rate & Service Estimator** wired directly to WhatsApp URL builder.
  6. Implement **Office Location & Contact Hub** with click-to-call, business hours, and preliminary address card.
  7. Implement **Floating WhatsApp Action** with gentle ambient ring animation and mobile sticky call bar.

---

### Phase 3: Client Review, Pitch & Asset Gathering
- **Milestone Goal:** Present the working prototype to the Economic Courier business owner to win client approval and gather authentic assets.
- **Key Tasks:**
  1. Conduct client demonstration of the live prototype on mobile and desktop.
  2. Collect authentic photographs of the Bhilwara office, counter, staff, and delivery vehicles per [`docs/ASSETS.md`](./ASSETS.md).
  3. Resolve all pending business facts (official address, telephone numbers, operating hours, GSTIN).
  4. Ascertain tracking technical capability: Does the client have carrier API access, or do they utilize direct web links (e.g., tracking numbers routed to carrier portals)?

---

### Phase 4: Multi-Page Expansion
- **Milestone Goal:** Expand the single-page prototype into a comprehensive multi-page corporate web application.
- **Key Tasks:**
  1. Build `/services` with extensive guidelines for domestic air, surface cargo, international parcel restrictions, and packaging specifications.
  2. Build `/about` detailing the history of Economic Courier in Bhilwara, service values, and logistics capabilities.
  3. Build `/track` as a dedicated tracking destination with deep consignment milestone timelines.
  4. Build `/contact` with interactive Google Maps pin, branch directions, and corporate inquiry form.

---

### Phase 5: Final QA, Performance & Production Launch
- **Milestone Goal:** Achieve production launch readiness with zero defects and maximum local SEO authority.
- **Key Tasks:**
  1. Conduct full accessibility and responsiveness audit per [`docs/TESTING.md`](./TESTING.md).
  2. Execute Lighthouse audits to guarantee performance scores $\ge 90$ on mobile and $\ge 95$ on desktop.
  3. Deploy to production edge network (Vercel) with custom domain and SSL certificate.
  4. Register site in Google Search Console, submit `sitemap.xml`, and link with Google Business Profile.

---

## 3. Important Decisions Requiring Client Confirmation

Before transitioning from Phase 2 to Phase 3/4, the following business questions must be reviewed and answered by the business owner:

| ID | Decision Question | Current Assumption in Docs | Impact on Implementation |
| :---: | :--- | :--- | :--- |
| **Q1** | **Exact Physical Address & Location** | Assumed near Pur Road / Textile Market, Bhilwara | Affects Google Maps embed, JSON-LD schema, and footer contact block. |
| **Q2** | **Primary Phone & WhatsApp Business Number** | Using placeholder `+91 98XXX XXXXX` | Direct call and WhatsApp booking buttons depend entirely on real numbers. |
| **Q3** | **Official Tracking Mechanism** | Currently designed as a Demo Simulator with carrier routing | Determines whether we build a custom API integration, carrier redirect matrix, or phone/WhatsApp dispatch lookup. |
| **Q4** | **Franchise & Partner Affiliations** | Generic "Tier-1 Domestic & International Air Networks" | Determines whether logos of partners (e.g., DHL, FedEx, Aramex, Blue Dart) can be legally displayed. |
| **Q5** | **Exact Office Operating Timings** | Assumed 9:30 AM – 8:30 PM (Mon–Sat) | Displayed on the header status pill (`Open Now` / `Closed`) and contact block. |
| **Q6** | **Doorstep Pickup Coverage Area** | Assumed Bhilwara city and RIICO industrial zones | Defines service radius text on Textile logistics and Booking sections. |
| **Q7** | **Official Domain Name** | Prototype assumes `economiccourierbhilwara.com` | Affects canonical SEO tags, sitemaps, OpenGraph metadata, and email addresses. |
