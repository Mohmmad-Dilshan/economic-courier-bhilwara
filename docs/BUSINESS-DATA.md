# Company Business Data Inventory & Verification Registry

**Project:** Economic Courier / eCS World Wide Express, Bhilwara  
**Document:** Verified vs. Unverified Data, Source Provenance & Confirmation Registry  
**Status:** Living Canonical Registry (Phase 1 Baseline)  

---

## 1. Core Identity & Reference Inventory

This registry tracks all business attributes, their exact origin/provenance, and their verification status prior to client presentation.

| Business Attribute | Value / Reference | Source / Provenance | Verification Status | Operational Handling in Code |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Trade Name** | Economic Courier | Client Brief & Working Name | Verified Working Title | Displayed prominently across branding |
| **Brand Reference / Arm** | eCS World Wide Express | Client Reference & Monogram Brief | Pending Official Lockup Approval | Displayed with `[Proposed Concept Logo — Pending Approval]` |
| **Primary Operating City** | Bhilwara, Rajasthan, India | User Project Scope | Verified Baseline | Pre-filled origin in calculators & forms |
| **User-Supplied Phone** | `+91 89551 44444` (`8955144444`) | Supplied by User | ⚠️ **Pending Final Owner Confirmation** | Kept inactive (`phoneConfigured: false`). Not wired to live `tel:` dialing. |
| **User-Supplied Instagram** | [`instagram.com/economiccourierbhilwara`](https://www.instagram.com/economiccourierbhilwara/) | Supplied by User | ⚠️ **User-Provided Reference** | Recorded as reference. No images/videos scraped without authorization. |
| **User-Supplied Google Maps Link** | [`share.google/qFnFe077dnj6QUEwb`](https://share.google/qFnFe077dnj6QUEwb) | Supplied by User | ⚠️ **User-Provided Reference** | Recorded as reference. Address, pin, and listing ownership not independently verified. |
| **Physical Shop Address** | *Near Textile Market / Pur Road Corridor, Bhilwara 311001* | Working Assumption | ⚠️ **Unverified Placeholder** | Displayed with visible `[PENDING CLIENT CONFIRMATION]` tag. |
| **Official Email Address** | `info@economiccourierbhilwara.com` | Provisional Architecture Domain | ⚠️ **Unverified Placeholder** | Marked as placeholder pending domain setup. |
| **GSTIN Registration** | `08AAAAA0000A1Z5` [Sample Format] | Placeholder Architecture Model | ⚠️ **Unverified Placeholder** | Hidden from public claims until GST certificate provided. |
| **Operating Hours** | Mon–Sat: 9:30 AM – 8:30 PM (Sun: Closed) | Industry Working Model | ⚠️ **Unverified Placeholder** | Tagged with `[Pending Confirmation]`. Hardcoded "Open Now" prohibited. |
| **Doorstep Pickup Radius** | Bhilwara City & RIICO Industrial Zones | Working Assumption | ⚠️ **Unverified Scope** | Tagged as `[Coverage Radius Pending Confirmation]`. |
| **Consignment Tracking Method** | **Unknown** (Awaiting Client Specification) | Technical Audit Finding | ❓ **Unknown** | Prototype strictly operates in **Demonstration Mode** (`DEMO-` prefix). |
| **Original Real Photos / Videos** | Status: Known to exist, but files not in repo | User Brief | ⚠️ **Pending File Handover** | Folders scaffolded under `public/assets/`. Zero placeholders published. |

---

## 2. Verification Protocol & Guardrails

To strictly obey **[`AGENTS.md`](../AGENTS.md) Rule 1 (Absolute Truthfulness)** and **Rule 2 (No Deceptive UI)**:

### 2.1 The Four Data Commandments
1. **Never Wire Unconfirmed Phone Numbers:**  
   The phone number `8955144444` must never be wired to automatic dialers, click-to-call links, or live WhatsApp messaging until the business owner directly signs off on it. In the prototype, all call and WhatsApp triggers safely route to an explanatory in-page notice (`#pending-contact-notice`).
2. **Never Claim Third-Party Verification for Maps or Socials:**  
   The supplied Google Maps link (`https://share.google/qFnFe077dnj6QUEwb`) and Instagram handle are recorded solely as user-provided references. We make no public claim that the physical location, branch timings, or user reviews have been verified or audited.
3. **No Image / Video Scraping Without Permission:**  
   Under no circumstances may images or videos be scraped, downloaded, or reused from Instagram or Google Maps without the express written permission of the content owner.
4. **Tracking System Transparency:**  
   Because the business tracking method is officially **Unknown**, no component may simulate live carrier polling or pretend to check a courier database. All sample records must carry `DEMO-` prefixes and explicit simulation disclaimers.

---

## 3. Approved Claims vs. Pending Confirmations

### 3.1 Approved Working Claims (Permitted in UI Copy)
- ✅ Bhilwara is the primary operational hub and center for Economic Courier services.
- ✅ The business specializes in express fabric swatches and textile trade logistics.
- ✅ Dual brand identity: Economic Courier (domestic & local trade) + eCS World Wide Express (international air cargo positioning).
- ✅ Priority domestic delivery connections to key textile markets (Mumbai, Surat, Delhi NCR, Ahmedabad).

### 3.2 Pending Owner Confirmations (Prohibited as Facts Without Confirmation Tags)
- ❌ Exact storefront room/shop number and landmark pin on Pur Road.
- ❌ Whether `8955144444` is the public WhatsApp Business number or personal line.
- ❌ Official daily dispatch cutoff times (e.g. 7:00 PM for overnight Jaipur/Delhi flight connections).
- ❌ List of formal forwarder franchise partnerships (e.g., whether shipments are forwarded through DHL, FedEx, Blue Dart, or private air cargo).
- ❌ Official commercial freight rate cards and volume discounts.
- ❌ Consignment tracking method: Carrier web links vs. custom API vs. manual phone/WhatsApp dispatch lookup.

---

## 4. Owner Sign-Off Checklist (Phase 3 Milestone Gate)

Before launching or publishing this site for production, the business owner must formally validate:
- [ ] Confirm official trade phone number (`8955144444` vs. alternate desk number).
- [ ] Confirm official WhatsApp Business account and automated greeting preference.
- [ ] Approve physical address and Google Maps location pin.
- [ ] Provide original vector logo asset or formally approve the proposed concept lockup.
- [ ] Provide authentic photographs of the Bhilwara hub, counter, and parcel packing station.
- [ ] Specify consignment tracking workflow for customers.
