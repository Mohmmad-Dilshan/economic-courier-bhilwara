# AGENTS.md — Persistent Developer & Agent Guidelines

> **Project:** Economic Courier / eCS World Wide Express, Bhilwara  
> **Workspace:** `d:\economic-courier-bhilwara`  
> **Audience:** AI Coding Assistants (Antigravity), Human Engineers, and Collaborators.

---

## 1. Core Operating Principles

1. **Absolute Truthfulness on Business Facts:**
   - Never invent or fabricate business claims, office addresses, telephone numbers, GSTIN numbers, partner network claims (e.g. DHL/FedEx/Blue Dart partnership claims), rates, or customer reviews.
   - Any data that has not been directly validated by the business owner must be cataloged in [`docs/CONTENT.md`](./docs/CONTENT.md) and labeled clearly in code and copy as `[PENDING CLIENT CONFIRMATION]`.

2. **No Deceptive Functional Interfaces:**
   - **Shipment Tracking:** Never pretend a consignment is actively being fetched from a carrier API if no integration exists. If a mock tracking UI is presented for client demonstration, it must carry a clear indicator: *"Demonstration Tracking UI — Live carrier tracking connects upon API activation"*.
   - **Contact & Inquiry Forms:** Forms must never show a false "Message Sent Successfully" toast if no backend handler or email dispatch service exists. Instead, wire forms to legitimate channels (e.g., prefilled WhatsApp Business API message, direct `tel:`/`mailto:` links, or a functional verified API endpoint).

3. **Client-Facing & Portfolio Standards:**
   - This site will be reviewed directly by the courier business owner as a client proposal.
   - The visual craft must feel custom, bespoke, and authoritative. Generic bootstrap-like courier templates are strictly unacceptable. Follow the design system outlined in [`docs/DESIGN.md`](./docs/DESIGN.md).

---

## 2. Technology & Architecture Standards

1. **Framework:** Next.js (App Router). Use TypeScript in strict mode.
2. **Server Components First:**
   - Keep page containers, structural layouts, and static content as React Server Components (RSC).
   - Only add `'use client'` to interactive islands (e.g., dynamic calculators, interactive tabs, animated carousels, mobile navigation toggles).
3. **Styling Paradigm:**
   - Use Vanilla CSS / Modern CSS Modules with tokens defined as CSS Custom Properties in a root stylesheet.
   - Do NOT install or use TailwindCSS unless explicitly instructed by the user.
   - All colors, fonts, spacing, shadows, and radii must reference the tokens defined in [`docs/DESIGN.md`](./docs/DESIGN.md). Never hardcode ad-hoc hex values or magic pixel numbers.
4. **Icons:** Use `lucide-react` for clean, consistent geometric iconography.

---

## 3. Visual Craft & Motion Guidelines

1. **Aesthetic Standards:**
   - Clean, luminous light background (`#FFFFFF` / `#F8FAFC`).
   - Deep navy/slate authority for typography and structure (`#0F172A` / `#1E293B`).
   - High-energy brand red accent (`#DC2626` / `#E11D48`) for primary CTAs, alerts, and focal points.
   - Generous spacing (minimum 64px–96px padding on desktop section breaks).
   - Refined card borders (`1px solid #E2E8F0`) with subtle hover elevation and ambient drop shadows.
2. **Animation Discipline:**
   - Motion must be purposeful and subtle—enhancing comprehension, never causing distraction or lag.
   - All animations must respect `prefers-reduced-motion: reduce`.
   - Refer to [`docs/ANIMATIONS.md`](./docs/ANIMATIONS.md) for approved spring physics and transition curves.

---

## 4. Media & Asset Rules

1. **Logo Usage:**
   - Use vector SVG format for the primary eCS and Economic Courier logos.
   - Maintain clear-space rules and forbid color skewing or aspect ratio distortion as detailed in [`docs/BRAND.md`](./docs/BRAND.md).
2. **Imagery:**
   - Prioritize real photos of Bhilwara operations, parcel sorting, and delivery staff over generic stock photography.
   - When using conceptual imagery (cargo jets, shipping hubs), ensure it aligns with realistic Indian commercial freight standards.
   - All media assets must be cataloged in [`docs/ASSETS.md`](./docs/ASSETS.md).

---

## 5. Workflow & Phase Discipline

- **Phase 0 (Current):** Planning & documentation only. Do not install npm packages, create package.json, or write application components until this phase is formally signed off.
- Before proposing any architectural change, check against [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).
- Any ambiguity regarding business logic must be flagged as an **Unresolved Decision** rather than silently decided.

---

## 6. Pre-Commit / Pre-Completion Verification Checklist

Before considering any task complete, verify:
- [ ] No unconfirmed business metrics or hallucinated reviews were added.
- [ ] Tracking components clearly state their integration status.
- [ ] Responsive layouts are tested across mobile (360px–390px), tablet (768px), and desktop (1280px+).
- [ ] Accessibility contrast conforms to WCAG 2.1 AA.
- [ ] Links and file references are valid markdown links using relative paths or `file://` URIs.
