# Quality Assurance & Testing Framework

**Project:** Economic Courier / eCS World Wide Express Website  
**Document:** Testing Standards, Cross-Device Matrix, a11y Audits & QA Protocol  
**Status:** Canonical Quality Guide  

---

## 1. Testing Scope & Quality Philosophy

Every interface developed for this project must pass rigorous validation before being demonstrated to the client. Because this serves as both a live business proposal and an engineering showcase, zero visual bugs, broken links, or misleading interactions are tolerated.

---

## 2. Responsive Viewport & Device Matrix

Testing must be executed across real device emulations covering the common mobile form factors prevalent in India:

| Viewport Profile | Width × Height | Representative Devices | Critical Inspection Points |
| :--- | :--- | :--- | :--- |
| **Compact Mobile** | `360px × 640px` | Budget Android (Redmi, Realme, Samsung A-series) | Text wrapping on H1, sticky bottom call bar, touch target sizing ($\ge 48\text{px}$) |
| **Standard Mobile** | `390px × 844px` | Apple iPhone 13/14/15, Pixel 7 | Hero layout balance, modal sheet animations, tracking input usability |
| **Large Mobile** | `412px × 915px` | Samsung Galaxy S23+, OnePlus | Spacing between service cards, WhatsApp float padding |
| **Tablet Portrait**| `768px × 1024px`| Apple iPad, Android Tablets | 2-column card grid transition, tablet navigation drawer |
| **Laptop / Desktop**| `1280px × 800px`| 13" MacBook, 14" Windows Laptop | Header navigation links, hero split layout, max container constraints |
| **Wide Desktop** | `1920px × 1080px`| 24"–27" External Monitors | Max container lock (`1240px`), background bleed cleanliness |

---

## 3. Cross-Browser Compatibility Matrix

| Engine | Primary Browsers | Support Target | Verification Focus |
| :--- | :--- | :--- | :--- |
| **Blink** | Google Chrome, Microsoft Edge, Brave | Latest 3 versions | CSS Grid, container queries, backdrop-filter blur |
| **WebKit** | Apple Safari (iOS & macOS) | Latest 2 versions | Flexbox gap support, sticky position rendering, smooth scrolling |
| **Gecko** | Mozilla Firefox | Latest 2 versions | Form styling, font rendering, CSS custom properties |
| **Chromium Mobile**| Chrome for Android, Samsung Internet | Latest 3 versions | Touch response, input zoom behavior, `tel:`/`wa.me` links |

---

## 4. Accessibility (a11y) Standards & WCAG 2.1 AA Audit

1. **Color Contrast:**
   - Normal text ($< 18\text{pt}$): Contrast ratio must exceed **4.5:1** against backgrounds.
   - Large text ($\ge 18\text{pt}$ or $\ge 14\text{pt}$ bold): Contrast ratio must exceed **3.0:1**.
   - Interactive borders and icons must exceed **3.0:1**.
2. **Keyboard Navigation:**
   - Logical tab progression across all interactive elements.
   - Visible, high-contrast focus rings (`outline: 2px solid var(--color-accent-600); outline-offset: 2px;`).
   - Modal dialogs and mobile menus must trap keyboard focus and dismiss upon pressing `Escape`.
3. **Screen Reader Compliance:**
   - Proper landmark structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - All interactive icons (close, search, menu, WhatsApp) must feature explicit `aria-label` or `sr-only` text.
   - Tracking status outputs must use `aria-live="polite"` to announce status changes without refreshing the page.

---

## 5. Functional Boundary & Integrity QA Checklist

This checklist specifically guards against deceptive UI practices:

- [ ] **Tracking Demo Validation:**
  - [ ] Entering `ECS-BHL-1001` renders the sample milestone timeline.
  - [ ] The tracking output prominently displays the *"Demonstration Record"* badge.
  - [ ] Entering an unknown or invalid number displays a polite guidance note offering direct phone/WhatsApp assistance rather than a generic HTTP crash.
- [ ] **Rate Inquiry & Contact Forms:**
  - [ ] Submitting the rate inquiry opens WhatsApp with correctly formatted and URL-encoded query strings.
  - [ ] No fake "Form submitted to server" success modals appear unless an actual email/database integration is present.
- [ ] **Business Information Truthfulness:**
  - [ ] No unconfirmed customer testimonials are presented without the `[PENDING CLIENT CONFIRMATION]` disclaimer.
  - [ ] No fake partnership badges (e.g., claiming official direct carrier status without authorization).

---

## 6. Performance & Lighthouse Thresholds

Automated audits via Chrome DevTools Lighthouse must meet the following strict minimum thresholds before client presentation:

| Metric Category | Minimum Mobile Score | Minimum Desktop Score | Critical Failure Condition |
| :--- | :--- | :--- | :--- |
| **Performance** | $\ge 90$ | $\ge 95$ | Any score $< 85$ |
| **Accessibility** | $\ge 95$ | $\ge 98$ | Any missing `alt` or contrast failure |
| **Best Practices**| $\ge 95$ | $\ge 95$ | Insecure scripts or console errors |
| **SEO** | $\ge 95$ | $\ge 100$ | Missing meta description or unindexed canonicals |
