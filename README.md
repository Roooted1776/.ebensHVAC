# EBens Premium Website Demo

Flux Labs–caliber redesign concept for **Ebens Air Conditioning & Plumbing** (Port St. Lucie / Treasure Coast).

## Run

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Booking flow: `/book`.

## Creative direction

**Business:** Family-owned HVAC + plumbing since 2002 on NW Enterprise Dr — same corridor as Elite Electric / Miranda / Lindstrom. Dual-trade strength, BBB accredited, strong review volume that the live site barely shows.

**Live-site gaps closed in this demo:** star rating + review count, urgency / same-day language (without over-promising), booking-first CTAs, financing/maintenance messaging, named service-area cities, multi-service testimonials, BBB + licensed trust strip.

**Positioning:** The Treasure Coast dual-trade home comfort team — cool air, clear plumbing, bookable in minutes. Compete on clarity and conversion, not coupon clutter.

**Visual direction:** Cool coastal navy + ice cyan (Florida comfort), restrained teal CTAs, Fraunces + Plus Jakarta Sans, full-bleed Florida home hero, editorial service list (not icon grids), mist/ink section rhythm. Ambition level modeled on austin.fluxlab.agency — not a clone.

## Sitemap

| Route | Purpose |
|-------|---------|
| `/` | Conversion homepage |
| `/book` | Online booking / quote lead form |

## Homepage sections

1. Hero (brand-led + Book / Call)
2. Urgency band
3. Services (AC · Plumbing · IAQ)
4. Why EBens
5. Process
6. Reviews
7. Financing / quotes / maintenance
8. Service area cities
9. FAQ
10. Final CTA
11. Footer

## Design system (tokens in `src/app/globals.css`)

- **Surfaces:** ink `#071820`, mist, paper — atmospheric gradients, soft grid texture
- **Accent:** ice / ice-deep / teal (no purple SaaS, no cream+terracotta cluster)
- **Type:** Fraunces (display), Plus Jakarta Sans (UI)
- **Radius:** 4 / 10 / 16 / 24 — restrained
- **Motion:** Framer Motion reveal + hero entrance; respects `prefers-reduced-motion`

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion

## Assumptions / placeholders

- Review aggregate `4.9★ · 200+` marked as demo figure from public platforms
- Financing partner names not invented — CTA + disclaimer only
- License number not displayed (not verified) — licensed/insured + BBB used instead
- Booking form is front-end demo only (no CRM)
- Stock photography via Unsplash (replace with EBens crew / job photos)
- Phone `(772) 213-9902` from current schedule page; hours from live site

## QA checklist

- [x] Mobile + desktop layouts
- [x] Skip link, semantic landmarks, focus-visible
- [x] Primary conversion path: Book Online
- [x] Trust signals in hero + reviews
- [x] Named Treasure Coast cities
- [x] FAQ + process clarity
- [x] Production build passes
