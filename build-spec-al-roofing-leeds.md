# Build Spec: A & L Roofing Leeds — demo site

> **Claude Code: build this site in ONE SHOT from THIS FILE ONLY.** No other context exists in this repo. Every fact, color, and build rule you need is in this file. Do not invent business facts, contact details, or accreditations. Where a value reads `UNKNOWN — needs operator input`, render a sensible neutral placeholder (or omit) — never fabricate.

---

## 0. What this is

A single demo marketing site for a real Leeds roofing contractor, replacing their dated, non-mobile Weebly site. Goal: a credible, fast, mobile-first one-pager that could pass as a real agency build for **this specific roofer** — established/no-nonsense Yorkshire trade, not a flashy SaaS landing page. It is a **demo** (no backend, inert forms).

---

## 1. Business facts

- **Business name:** A & L Roofing Leeds Ltd
- **One-liner:** Family-run roofing contractor serving Leeds and the whole of Yorkshire — domestic & commercial re-roofs, repairs, flat roofs, slating, tiling, leadwork and guttering, with 24/7 emergency callout.
- **Years in business / "since":** Established **1996** — **over 25 years' experience** (headline trust line). Limited company since 9 Oct 2018; **company no. 11611941**.
- **Locations / service area:** Based in **Scholes, Leeds (LS15)**; covers **the whole of Yorkshire**. Representative towns for the service-area section: Leeds, Wetherby, Garforth, Scholes, Barwick-in-Elmet, Pudsey, Morley, Otley, Harrogate, York.
- **Licences / certs / affiliations:** All tradesmen fully qualified — **NVQ Levels 1, 2 & 3**, **City & Guilds**, **Health & Safety trained**. **20-year guarantee** on flat-roof re-roofs (SBS torch-on systems).
  - `UNVERIFIED — needs operator input:` trade-body membership (e.g. CORC / Competent Roofer / NFRC). Do **not** display any accreditation badge/logo unless the operator confirms it.
- **Phone / email / address shown on site:**
  - Landline: **0113 2644 705** (intl `+44 113 264 4705`)
  - Mobile: **07514 555 808** (intl `+44 7514 555808`)
  - Email: **info@alroofingleeds.co.uk** (confirmed on their site and Facebook)
  - Registered office: **1A Lynnfield Gardens, Scholes, Leeds, West Yorkshire, LS15 4BW** *(residential registered office — prefer showing "Scholes, Leeds — covering all of Yorkshire" in the body; full postal address optional in the footer at operator's discretion)*
- **Hours:** `UNKNOWN — needs operator input` for standard opening hours. They advertise **24/7 Emergency Callout** — surface that prominently instead of (or alongside) office hours.

---

## 2. Positioning

- **Primary customer goal:** **Call now.** Roofing is need-driven and often urgent (leaks, storm damage, emergency callout). The clickable phone number is the hero action.
- **Secondary goal:** **Request a free quote** (they "try to beat any genuine like-for-like quotation"). Wire to `mailto:` / inert form per §7.
- **Trust signals to surface (high on the page):**
  - Established **1996** · **25+ years**
  - **Family-run** Yorkshire business
  - **All tradesmen NVQ 1–3, City & Guilds, H&S trained**
  - **20-year guarantee** on flat-roof re-roofs
  - **"We beat any genuine like-for-like quote"**
  - **Skips and scaffold included** in the price; **domestic & commercial**; start dates typically **1–2 weeks**
  - Reviews: they have a Facebook following (600+) and Google reviews. **Do NOT invent a star rating or review count.** Either pull a real Google rating at build time, or use a qualitative line ("Trusted across Yorkshire since 1996"). `UNKNOWN — needs operator input:` exact rating/count if a number is to appear.
- **Tone:** **Established + reassuring, rugged + no-nonsense.** Yorkshire trade craftsmanship. Confident, plain-spoken. **Not** premium/luxury, **not** trendy-startup.

---

## 3. Required sections (in this order)

1. **Emergency strip + header / nav** — slim top strip noting 24/7 emergency callout with clickable phone; below it a sticky **navy** nav: wordmark/logo left; links (Services · Why Us · About · Reviews · Areas · Contact); **clickable `tel:` landline in the header**, a primary **"Call now"** button and a secondary **"Free quote"** button.
2. **Hero** — left-aligned, editorial. Who they are (Leeds & Yorkshire roofers, **est. 1996**), one-line value prop, **primary CTA = call**, secondary CTA = quote, compact trust strip (25+ yrs · family-run · 20-yr guarantee · NVQ/City & Guilds). Real roofing photo, not abstract shapes.
3. **Services** — full list from §4, grouped (pitched/slate & tile · flat roofing · repairs & extras · emergency). Real labels, no fluff.
4. **Why us / trust** — years, qualifications, 20-yr guarantee, beat-any-quote, skips+scaffold included, domestic & commercial, fixed start dates.
5. **About** — short: family-run, since 1996, qualified tradesmen, Yorkshire-wide.
6. **Reviews** — real or qualitative (no fabricated numbers).
7. **Service area** — Leeds + Yorkshire towns (§1); no live map embed required.
8. **Contact** — landline + mobile (`tel:`), email (`mailto:`), service area, hours/24-7, and an **inert quote form** (Name, Phone, Postcode, Job type, Message) wired to `mailto:` or non-submitting per §7.
9. **Footer** — company name + **company no. 11611941**, phone, email, service area, year.

---

## 4. Services (verbatim — real list from their site)

Pitched roofing:
- **Re-roofs** (full roof replacement)
- **Roof repairs** (tile/slate replacement, leaks)
- **Slating** — Natural & Man-Made: **Welsh Slate**, **Spanish Slate**
- **Tiling** — **Clay** and **Concrete** roof tiles
- **Yorkshire Stone** (stone slating)

Flat roofing:
- **Felting / flat roof systems** — **SBS torch-on** membrane (**20-year guarantee**)
- **GRP fibreglass flat roofs**

Repairs & extras:
- **Lead work**
- **Guttering** — repairs through to replacement (incl. leaking gutter joints)
- **Velux / roof windows**
- **Door canopies**

Service model (supporting copy):
- **24/7 emergency callout**
- **Domestic & commercial**
- Free survey → agreed, fixed start dates (typically 1–2 weeks)
- **Skips and scaffold provided** within the quoted price
- Will **beat any genuine like-for-like quotation**

---

## 5. Design direction (real brand, sampled from their logo)

> Their real brand is **blue + yellow** (sampled from the supplied logo). The logo executes the blue as a cyan→deep gradient with bevel/drop-shadow — i.e. the exact look the NEVER list bans. **Emulate the brand, not the cheap execution:** flatten to solid colors, use yellow as a *disciplined accent/CTA only* (large yellow fills fail contrast and fatigue the eye), and lean on navy for depth (it echoes the logo's own dark backdrop). Do not introduce unrelated hues.

**Palette (solid, no gradients — these ARE their brand):**
- **Brand blue** — primary buttons (white text), links, key UI: `#15639E` *(their logo azure `#2E81C5` deepened to clear ≥4.5:1 with white text — white-on-`#15639E` ≈ 6.4:1 ✓)*
- **Brand azure** — exact logo blue, decorative only: large heading accents, icon strokes, 1px borders, rule lines on light backgrounds: `#2E81C5` *(do NOT put white body text on this — ~4.2:1, fails AA for small text)*
- **Deep navy** — dark sections, header/nav bar, footer, primary text on light: `#12283D`
- **Brand yellow** — accent + **primary CTA fill**, always with **navy `#12283D` text, never white**: `#F8E929` *(yellow+navy ≈ 12:1 ✓; reserve for the "Call now" button, key highlights, accents on navy)*
- **Cool off-white** — page background / light sections: `#F4F7FA`
- **Slate grey** — secondary text, muted labels, borders: `#5A6B7A`
- White `#FFFFFF` — cards/surfaces.
- Verify **every** text/background pairing meets **≥4.5:1**.

**CTA hierarchy (use exactly):**
- Primary **"Call now"** → **yellow `#F8E929` fill, navy `#12283D` text** (maximum pop, fully on-brand).
- Secondary **"Free quote"** → solid brand blue `#15639E`, white text (or navy outline on light bg).
- Header: **navy `#12283D` nav bar**, white links, yellow "Call now" button — lets the real logo sit cleanly on-brand (see §6).

**Type (intentional pairing — NOT Inter-only; load via `next/font/google`):**
- Headings: a sturdy slab/transitional serif — **"Roboto Slab"** or **"Bitter"** (fallback `Georgia, 'Times New Roman', serif`). Reads established/trade.
- Body & UI: a clean grotesque sans — **"Source Sans 3"** or **"Work Sans"** (fallback `system-ui, -apple-system, Arial, sans-serif`).

**Feel:** classic / modern-conservative. Established, trustworthy, solid. Sharp detailing, real borders, restrained shadows. Editorial and asymmetric, not centered-everything.

**References / strong competitors (real Leeds roofers — study content & trust framing):** The Family Roofing Company, Pickles Roofing, VJR Roofing, Roundhay Roofing, Yorkshire Roofing (all Leeds).
**Design references (layout/quality, not to copy):** https://dribbble.com/search/roofing-website · https://dribbble.com/search/construction-company-landing-page · https://mobbin.com

**Hard no's beyond §7:** no "corporate handshake"/stock-boardroom imagery; no everything-centered layout; and although their brand *is* blue, avoid the generic flat-blue-gradient SaaS look — use **their specific navy `#12283D` + azure `#2E81C5` + yellow `#F8E929`**, solid, not a tech-startup blue wash.

---

## 6. Assets

- **Logo:** **Operator has supplied the real logo** (blue/yellow "A & L ROOFING LEEDS LTD", roof + roofer mark). Use the real logo — do **not** redraw or substitute a wordmark. Place it at `public/logo.png`.
  - The supplied file is a *mockup* (logo composited on a dark office-glass scene), not a clean cutout. Best: operator provides a **transparent-background PNG or vector (SVG)**. `needs operator input:` transparent/vector logo asset.
  - If only the mockup is available, the **navy `#12283D` header** (per §5) lets the logo's own dark backdrop blend in, so it reads cleanly without background removal. Otherwise tightly crop or knock out the background.
- **Photos:** `NONE provided` → use **tasteful, local-looking roofing photography**: pitched **slate** roofs, a **re-roof in progress with scaffolding**, a **GRP/flat-roof** finish, a **leadwork** detail, and a **Leeds/Yorkshire terraced-street** roofline. Include a **before/after** pair (they market this).
  - Source priority: (1) operator's real project photos (their Before/After page + Facebook), (2) Unsplash UK slate-roof imagery, (3) AI-generated iterated against a real Yorkshire-roof reference.
  - **All images MUST be downloaded/generated and committed into `public/images/`**, referenced as `/images/hero.jpg`. **Do NOT hotlink remote image URLs** (Unsplash/CDN/etc.) in the final build — Unsplash is a *source to download from*, not a live `src`.
  - **NEVER** abstract shapes, gradient blobs, or obvious-AI filler. All images sized + lazy-loaded, with descriptive `alt` text.

---

## 7. Build rules (apply exactly — this is what stops it looking AI-generated)

**Stack — Next.js (App Router) with static export:**
- Scaffold **Next.js** (`npm create next-app@latest`, latest; App Router). **Node 20 LTS or newer.**
- **Static export:** in `next.config.js` set `output: 'export'` and `images: { unoptimized: true }`. Build produces a fully static `out/` — **no server, no backend, no Netlify functions.**
- React components under `app/` (`app/layout.tsx`, `app/page.tsx`, components in `components/`). Global CSS in `app/globals.css` and/or CSS Modules.
- **Preview with `npm run dev`.** Production build: **`next build` → `out/`**; preview it with **`npx serve out`** (`next start` does NOT serve an exported site).
- **Keep client JS minimal** — add `"use client"` only for the mobile-nav toggle / smooth scroll. No backend.
- Fonts via **`next/font/google`** (self-hosts at build time).

**Forms / interactive UI:** any quote form, callback, or chat UI is **VISUAL-ONLY** — inert markup or wired to `mailto:` / `tel:`. **Never** a live backend; CRM/booking integrations are out of scope (they need a backend regardless of stack).

**Hosting (GitHub → Netlify):**
- **All assets local & committed** under `public/` (`public/images/…`, `public/logo.png`). **No hotlinked remote media URLs** in the final build. With static export, use plain `<img>` or `next/image` with `unoptimized: true`.
- The built `out/` must **render with no broken assets offline** (web fonts self-hosted via `next/font`, or fall back). Verify: `next build && npx serve out`, DevTools → Network → Offline → reload.
- **netlify.toml** at repo root:
  ```toml
  [build]
    command = "next build"
    publish = "out"
  ```

**NEVER:** violet/indigo→blue gradients, gradient text/buttons; mesh/aurora/blob backgrounds; uniform large border-radius; glassmorphism / backdrop-blur; default Inter-only with no type personality; emoji-as-icons; the centered hero→3-icon-cards→testimonial→CTA skeleton; "Elevate / Empower / Seamless / Unlock / Transform" copy; neon-glow pill buttons; everything center-aligned.

**ALWAYS:** solid palette from §5 (every pairing **≥4.5:1**); intentional type pairing; **editorial, left-aligned, asymmetric** layout; real local content (**clickable `tel:` in header**, address/area, hours/24-7, **full service list**, **company no. 11611941**); trust signals high (**est. 1996 / 25+ yrs**, reviews real/qualitative, 20-yr guarantee, qualifications); real or local-looking roofing photos — never abstract shapes; sharp detailing (**0–6px** radius, real 1px borders, restrained shadows); **one clear primary CTA = Call now**.

**A11y / performance:** semantic HTML (`header`/`nav`/`main`/`section`/`footer`); `alt` text; visible focus states; keyboard-navigable nav; images sized + lazy-loaded; responsive at **360 / 768 / 1280px**; tap targets **≥44px**.

**Out of scope (demo):** no backend, no real form submission, no CMS, no analytics, no tracking.

---

## 8. Definition of done

- [ ] `npm run dev` serves cleanly; **`next build` completes with no errors and produces `out/`**; `npx serve out` has **no console errors**.
- [ ] `next.config.js` has `output: 'export'` and `images: { unoptimized: true }`.
- [ ] **All images are local committed files** in `public/`; zero remote image URLs; `out/` renders with no broken assets **offline** (web fonts may fall back).
- [ ] `netlify.toml` present (build `next build`, publish `out`).
- [ ] **Zero** NEVER-list items present.
- [ ] Palette + type from §5 (not framework defaults).
- [ ] Phone (clickable `tel:`), service area, hours/24-7, full service list, trust signals all present and prominent; company no. 11611941 in footer.
- [ ] Any quote/contact/chat UI is **inert** (no live backend).
- [ ] Responsive at 360 / 768 / 1280; mobile nav works.
- [ ] No fabricated review numbers or unverified accreditation badges.
- [ ] Could pass as a real agency build for **A & L Roofing Leeds** specifically.
