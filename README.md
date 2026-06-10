# AquaOps — Landing Page

Arabic-first (RTL) marketing landing page for **AquaOps**, the distribution-operations
platform built for Lebanese water distributors. Built with **Next.js (App Router)**.
Includes a one-click **عربي / English** language toggle that flips direction (RTL ⇄ LTR)
and swaps all copy.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. In Vercel, **Add New → Project** and import the repo.
3. If this folder is nested inside a larger repo, set **Root Directory** to `aquaops-next`.
4. Framework preset is auto-detected as **Next.js** — no extra config needed. Click **Deploy**.

Or from this folder with the CLI:

```bash
npm i -g vercel
vercel
```

## Structure

```
app/
  layout.js        Root layout, fonts, metadata, <html lang dir>
  page.js          Page composition (all sections in order)
  globals.css      Full design system + responsive + RTL logical properties
components/
  LanguageProvider.js   Context: lang state, t()/tHtml(), toggle, persistence
  dictionary.js         All bilingual copy (ar / en)
  ScrollReveal.js       Scroll-reveal animations
  LogoMark.js           AquaOps droplet mark (SVG)
  Navbar.js  Hero.js  Problem.js  Solution.js  Features.js
  HowItWorks.js  Revolution.js  Audience.js  CTA.js  Footer.js
public/
  AquaOps-icon-*.png/.svg
```

The language preference is stored in `localStorage` (`aquaops_lang`); default is Arabic.
