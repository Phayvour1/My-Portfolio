# Audit Report: Portfolio Website Revamp
**Date:** 2026-02-18
**Target:** Modern 2026 Standards (Premium, Minimalist, Performant)

## 1. Architecture & Structure
**Current Status:**
- Single `App.tsx` handling routing and layout.
- "Pages" are components inside `App.tsx`.
- No clear separation between "smart" pages and "dumb" components.
- Asset organization is basic.

**Issues:**
- **Scalability:** Hard to add new independent pages.
- **Maintenance:** `App.tsx` will grow indefinitely.
- **Routing:** Mixed usage of `react-scroll` and `react-router-dom` without a unifying abstraction.

**Improvement Plan:**
- Create `src/pages` (Home, Resume, 404).
- Create `src/layouts` (MainLayout with Navbar/Footer).
- Create `src/hooks` (useScroll, useWindowSize).
- Create `src/utils` (animation variants, helpers).

## 2. UI/UX & Design
**Current Status:**
- **Styling:** Basic Tailwind usage. Mixed inline styles in `App.tsx`.
- **Typography:** Uses "Panchang", "Roboto", "Pacifico". Inconsistent hierarchy.
- **Visuals:** `particles.js` background feels dated (early 2010s style).
- **Animations:** Basic Framer Motion logic defined inside components. GSAP used in `Projects.tsx`. Mixed animation libraries increase bundle size.

**Issues:**
- **Aesthetics:** Lacks the "premium" 2026 minimalist vibe. Particles are often distracting.
- **Consistency:** Spacing and typography vary.
- **Mobile:** Hamburger menu implementation is basic.

**Improvement Plan:**
- **Typography:** Switch to a premium sans-serif pairing (e.g., `Outfit` + `Inter` or keep `Panchang` for headers but refine usage).
- **Whitespace:** Implement a strict spacing system (4px grid).
- **Background:** Remove `particles.js`. Replace with subtle, modern, organic gradients or mesh gradients that morph on scroll.
- **Animations:** Standardize on **Framer Motion** for all scroll, reveal, and layout animations to reduce bundle size (remove GSAP unless strictly necessary for complex timelines).
- **Interaction:** Add magnetic buttons, smooth hover states, and custom cursor (optional but premium).

## 3. Performance
**Current Status:**
- **Bundle:** Both Framer Motion and GSAP are loaded.
- **Images:** No explicit optimization (WebP, srcset) visible.
- **Code Splitting:** No `React.lazy` usage.

**Improvement Plan:**
- **Libraries:** Drop `particles.js` (heavy canvas). Evaluate dropping GSAP if Framer Motion can handle the scope (likely yes).
- **Loading:** Lazy load below-the-fold components (`Projects`, `Contact`).
- **Images:** Use optimized formats.

## 4. SEO
**Current Status:**
- **Meta:** No dynamic metadata management.
- **Tags:** Semantic HTML is weak (`div` soup). `h1` usage needs verification.

**Improvement Plan:**
- **Tooling:** Install `react-helmet-async`.
- **Semantics:** Use `<main>`, `<section>`, `<header>`, `<nav>`, `<article>`.
- **Data:** Add JSON-LD structured data for "Person" and "CreativeWork".
- **Social:** Add Open Graph and Twitter Card tags.

## 5. Implementation Roadmap
1. **Setup:** Install tools, reorganize folders.
2. **Foundation:** Define Tailwind theme (colors, type).
3. **Core Components:** Build Navbar, Footer, Layout (with Lenis smooth scroll).
4. **Home Page Sections:**
    - **Hero:** Typography-led, high impact.
    - **About:** Clean text + subtle image.
    - **Projects:** Minimalist cards with hover reveals.
    - **Contact:** Clean form.
5. **SEO Integration:** Apply metadata.
6. **Polish:** Transitions and micro-interactions.
