# Animation & Interaction Specifications

**Project:** Economic Courier / eCS World Wide Express  
**Document:** Motion System, Physics Curves, Scroll Reveals & a11y Standards  
**Status:** Canonical Motion Guide  

---

## 1. Motion Philosophy

In logistics web design, animation serves two explicit purposes:
1. **Communicating Speed & Efficiency:** Crisp, energetic transitions reflect the velocity of an express air courier service.
2. **Focus & Hierarchy:** Subtle directional movement guides the visitor's eye directly to key decision triggers (Tracking input, WhatsApp booking, Service categories).

Animations must never feel sluggish, whimsical, or decorative for the sake of motion. They must be instantaneous, functional, and performant.

---

## 2. Easing Physics & Timing Tokens

```css
:root {
  /* Easing Curves */
  --ease-express-out: cubic-bezier(0.16, 1, 0.3, 1); /* Snappy deceleration */
  --ease-express-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce-soft: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Duration Standards */
  --duration-instant: 100ms;  /* Click, tap feedback */
  --duration-fast: 180ms;     /* Hover transitions, icon nudges */
  --duration-normal: 300ms;   /* Dropdowns, mobile menu slide, tab switches */
  --duration-deliberate: 550ms; /* Scroll reveal entrances */
  --duration-ambient: 3000ms; /* Ambient pulse / glowing aura */
}
```

---

## 3. Interaction Patterns

### 3.1 Button & CTA Micro-interactions
- **Hover State:**
  - `transform: translateY(-2px);`
  - Duration: `var(--duration-fast)` with `var(--ease-express-out)`
  - Shadow: Expands to `var(--shadow-brand-glow)` on primary red buttons.
- **Active / Pressed State:**
  - `transform: translateY(0px) scale(0.98);`
  - Duration: `var(--duration-instant)`
- **Icon Nudge on Hover:**
  - Chevron or arrow icons inside buttons translate `+3px` horizontally on hover:
    `transition: transform var(--duration-fast) var(--ease-express-out);`

### 3.2 Service Card Hover Physics
- **Resting:** `border: 1px solid var(--color-border-default); box-shadow: var(--shadow-sm); transform: translateY(0);`
- **Hover:**
  - `transform: translateY(-4px);`
  - `border-color: var(--color-border-strong);`
  - `box-shadow: var(--shadow-lg);`
  - Card icon container scales `1.08` with subtle background highlight.
  - Duration: `var(--duration-normal) var(--ease-express-out)`.

### 3.3 Floating WhatsApp Button (Ambient Pulse)
- Fixed at bottom-right viewport (`bottom: 24px; right: 24px;`).
- Gentle pulsating concentric ring:
  ```css
  @keyframes whatsapp-ring {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    70% { transform: scale(1); box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }
  ```

---

## 4. Scroll-Triggered Reveals

When sections enter the viewport (`IntersectionObserver` threshold at 15%):

1. **Section Headers (Eyebrow, Title, Subtitle):**
   - Initial: `opacity: 0; transform: translateY(16px);`
   - Triggered: `opacity: 1; transform: translateY(0);`
   - Duration: `500ms`, easing `var(--ease-express-out)`.
2. **Grid Items & Cards (Staggered Children):**
   - Card 1: Delay `0ms`
   - Card 2: Delay `80ms`
   - Card 3: Delay `160ms`
   - Card 4: Delay `240ms`
   - Stagger prevents jarring simultaneous shifts and creates a fluid cascading reveal.

---

## 5. Reduced-Motion Accessibility (`prefers-reduced-motion`)

To ensure compliance with accessibility regulations and comfort for vestibular-sensitive users:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .whatsapp-pulse-ring,
  .hero-animated-beam {
    animation: none !important;
  }
}
```

---

## 6. Performance & Rendering Guardrails

1. **Hardware Acceleration:** Only animate properties composite-handled by the GPU:
   - ✅ `transform` (translate, scale)
   - ✅ `opacity`
   - ❌ Never animate `width`, `height`, `margin`, `top`, or `padding` (causes expensive DOM reflow).
2. **Containment:** Use `will-change: transform, opacity;` sparingly, applied only on active transition states and released afterward.
3. **Framerate Budget:** Maintain a strict 60 FPS / 120 FPS render pipeline with zero frame drops during page scrolling.
