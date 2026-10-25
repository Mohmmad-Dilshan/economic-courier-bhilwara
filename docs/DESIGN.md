# Design System & UI Specifications

**Project:** Economic Courier / eCS World Wide Express  
**Document:** Design Tokens, Typography, Components & Responsive Standards  
**Status:** Canonical Design Guide  

---

## 1. Visual Philosophy & Identity Direction

The visual aesthetic for **Economic Courier / eCS World Wide Express** bridges corporate authority with modern express velocity. 

- **Canvas:** Clean, luminous white and crisp slate-tinted light backgrounds (`#FFFFFF` to `#F8FAFC`).
- **Authority (Primary Navy):** Deep corporate navy (`#0F172A` / `#1E293B`) gives structure, legibility, and an institutional sense of reliability and security.
- **Velocity (Brand Red Accent):** Vivid crimson red (`#DC2626` / `#EF4444`) delivers dynamic visual punch, urgency, and brand fidelity with the eCS identity.
- **Precision:** Clean geometric borders, 1px subtle divider lines, high-contrast typography, and generous negative space (preventing visual clutter common to legacy courier sites).

---

## 2. Design Tokens (CSS Custom Properties)

These tokens represent the single source of truth for all stylesheets and components.

```css
:root {
  /* =========================================
     1. COLOR PALETTE
     ========================================= */

  /* Canvas & Backgrounds */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8FAFC;
  --color-bg-tertiary: #F1F5F9;
  --color-bg-elevated: #FFFFFF;
  --color-bg-dark: #0A0F1D;
  --color-bg-dark-surface: #111827;

  /* Brand Primary: Deep Navy / Slate */
  --color-primary-900: #0B132B;
  --color-primary-800: #0F172A;
  --color-primary-700: #1E293B;
  --color-primary-600: #334155;
  --color-primary-500: #475569;

  /* Brand Accent: Courier Express Red */
  --color-accent-700: #B91C1C;
  --color-accent-600: #DC2626; /* Primary Action */
  --color-accent-500: #EF4444; /* Hover state */
  --color-accent-100: #FEE2E2; /* Subtle badge background */
  --color-accent-50:  #FEF2F2;

  /* Supporting Blues / Slate */
  --color-blue-700: #1D4ED8;
  --color-blue-600: #2563EB;
  --color-blue-100: #DBEAFE;
  --color-blue-50:  #EFF6FF;

  /* Text & Foreground */
  --color-text-primary: #0F172A;   /* 14.8:1 contrast on white */
  --color-text-secondary: #475569; /* 5.9:1 contrast on white */
  --color-text-muted: #64748B;     /* 4.6:1 contrast on white */
  --color-text-inverse: #FFFFFF;
  --color-text-inverse-muted: #94A3B8;

  /* Borders & Dividers */
  --color-border-subtle: #F1F5F9;
  --color-border-default: #E2E8F0;
  --color-border-strong: #CBD5E1;
  --color-border-accent: rgba(220, 38, 38, 0.25);

  /* Status Tokens */
  --color-success: #16A34A;
  --color-success-bg: #DCFCE7;
  --color-warning: #D97706;
  --color-warning-bg: #FEF3C7;
  --color-info: #0284C7;
  --color-info-bg: #E0F2FE;

  /* =========================================
     2. TYPOGRAPHY
     ========================================= */
  --font-family-sans: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Type Scale */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */

  /* Line Heights */
  --line-height-tight: 1.15;
  --line-height-snug: 1.3;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.65;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* =========================================
     3. SPACING & LAYOUT GRID
     ========================================= */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */

  --container-max-width: 1240px;
  --container-padding: 1.5rem;

  /* =========================================
     4. RADII (BORDER RADIUS)
     ========================================= */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* =========================================
     5. ELEVATIONS & SHADOWS
     ========================================= */
  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
  --shadow-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  --shadow-brand-glow: 0 10px 25px -5px rgba(220, 38, 38, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  /* =========================================
     6. TRANSITIONS & TIMING
     ========================================= */
  --transition-fast: 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 250ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 3. Typography Styles & Hierarchy

| Semantic Tag | Size / Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- |
| **Hero Display `H1`** | `2.75rem–3.75rem` / Bold (700) | `1.1` | Main hero value statement with accent red highlight |
| **Section Header `H2`** | `2rem–2.5rem` / Bold (700) | `1.2` | Core feature and service section titles |
| **Card Header `H3`** | `1.25rem–1.5rem` / Semibold (600) | `1.3` | Service card headings, feature block titles |
| **Feature Lead `P`** | `1.125rem` / Regular (400) | `1.6` | Hero subtitles, section introductory paragraphs |
| **Body Copy `P`** | `1rem` / Regular (400) | `1.55` | General card text, descriptions, disclaimers |
| **Eyebrow / Overline** | `0.8125rem` / Extrabold (800) | `1.2` | Uppercase badge with `letter-spacing: 0.08em` |
| **Caption & Note** | `0.75rem` / Medium (500) | `1.4` | Tracking disclaimer, timestamps, footer notes |

---

## 4. Component Design Patterns

### 4.1 Buttons
- **Primary Button (Action Red):**
  - Background: `var(--color-accent-600)`
  - Text: `var(--color-text-inverse)`
  - Padding: `0.75rem 1.5rem`
  - Border Radius: `var(--radius-md)`
  - Hover: Background `var(--color-accent-500)`, transforms `-1px` Y, box-shadow `var(--shadow-brand-glow)`.
- **Secondary Button (Corporate Navy):**
  - Background: `var(--color-primary-800)`
  - Text: `var(--color-text-inverse)`
  - Hover: Background `var(--color-primary-700)`.
- **Outline Button:**
  - Border: `1.5px solid var(--color-border-strong)`
  - Background: Transparent
  - Text: `var(--color-text-primary)`
  - Hover: Background `var(--color-bg-secondary)`, border `var(--color-primary-700)`.
- **Floating WhatsApp Action:**
  - Background: `#25D366`
  - Circular badge (`56px × 56px`), fixed bottom-right, pulsating subtle ring.

### 4.2 Cards
- **Base Style:**
  - Background: `var(--color-bg-elevated)`
  - Border: `1px solid var(--color-border-default)`
  - Border Radius: `var(--radius-lg)`
  - Padding: `var(--space-6)` to `var(--space-8)`
  - Shadow: `var(--shadow-sm)`
  - Hover State: Border shifts to `var(--color-border-strong)`, shadow elevates to `var(--shadow-lg)`, subtle translation `-3px` Y.
- **Textile Focus Highlight Card:**
  - Distinctive subtle top accent border (3px solid `var(--color-accent-600)`).
  - Background: Subtle gradient from `#FFFFFF` to `#FEF2F2`.

### 4.3 Tracking Simulator Component
- Large interactive input field (`54px` height) with clean monospace font.
- Embedded button: "Track Consignment".
- Dedicated disclaimer tag immediately beneath:
  ```
  [!] Demonstration Interface: Live real-time carrier tracking connects upon franchise API integration.
  ```

---

## 5. Responsive Grid & Breakpoints

```
xs: 0px – 639px    (Mobile: 1 column, stacked controls, full-width buttons)
sm: 640px – 767px  (Large Mobile: 2 column service cards)
md: 768px – 1023px (Tablet: 2 column layout, condensed header)
lg: 1024px – 1279px (Laptop: 3 column service cards, side-by-side hero)
xl: 1280px+        (Desktop: Max width 1240px centered, 4 column features)
```

- **Touch Target Sizes:** Minimum `48px × 48px` on all mobile interactive elements.
- **Mobile Sticky Bar:** Quick Call & WhatsApp sticky bottom bar on screens `< 640px`.
