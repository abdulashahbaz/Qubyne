# Qubyne — marketing site

Marketing website for **Qubyne**, a product studio that designs, builds and launches modern software.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · self-hosted Geist fonts.
Four production dependencies (`next`, `react`, `react-dom`, `geist`) and nothing else. Every page is prerendered at build time, so it deploys to Vercel with no configuration.

| Page | Route |
| --- | --- |
| Home | `/` |
| Services | `/services` |
| Work (index) | `/work` |
| Case study (one reusable template) | `/work/[slug]` |
| Process | `/process` |
| About | `/about` |
| Contact | `/contact` |

---

## Run it

Requires **Node 20.9 or newer**.

```bash
npm install
npm run dev        # http://localhost:3000 with hot reload
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build locally (run `build` first) |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` |

> `next dev` writes `AGENTS.md` / `CLAUDE.md` (a pointer for AI coding tools to Next's bundled docs). They are committed so your working tree stays clean. To stop generating them, set `agentRules: false` in `next.config.ts`.

---

## Deploy to Vercel

1. Push this repo to GitHub (it is already on `feature/initial-site`; open a pull request and merge to `main` when you're happy).
2. In Vercel: **Add New → Project → import the repository**. Vercel detects Next.js; leave every setting at its default.
3. Click **Deploy**. That's it.

Or from the terminal: `npx vercel` (preview) / `npx vercel --prod`.

**Domain and canonical URLs.** On Vercel, canonical links, the sitemap, `robots.txt` and Open Graph tags automatically use your project's production domain (`VERCEL_PROJECT_PRODUCTION_URL`). Once your real domain is attached, you can pin it explicitly:

```
NEXT_PUBLIC_SITE_URL=https://qubyne.com
```

Set that under **Project → Settings → Environment Variables** (see `src/content/site.ts`). Locally it falls back to `http://localhost:3000`.

---

## Restyle the whole site (design tokens)

**Edit `src/styles/tokens.css`.** It is the single source of truth for the look of the site:

| Section | What you control |
| --- | --- |
| 1. Theme colors | Every color, per theme (`dark` is default, `light` via the toggle). **One accent:** change `--accent`, `--accent-hover`, `--accent-ink` and the whole site follows. |
| 2. Tailwind color map | Exposes those variables as utilities (`bg-canvas`, `text-ink`, `border-line`, `bg-accent`…). The default Tailwind palette is deliberately removed, so only brand tokens exist. |
| 3. Fonts | Font stacks (`font-sans`, `font-display`, `font-mono`). |
| 4. Type scale | Fluid sizes with built-in line-height and tracking (`text-display`, `text-h1`…`text-lead`, `text-eyebrow`). |
| 5. Spacing & shape | Section rhythm (`py-section`), page gutter (`px-gutter`), max width (`max-w-site`), radii (`rounded-card`, `rounded-control`). |
| 6. Motion | Easing and durations. |

Components never contain raw colors; they only use the utilities above. This was verified by swapping the accent and background in `tokens.css` and crawling every page: no element kept an old color.

**Things that live outside CSS** (they can't read CSS variables), so update them if you change the dark palette or accent:

- `src/lib/brand.ts` — colors used by the generated share images (Open Graph), the Apple touch icon and the mobile `theme-color`.
- `src/app/icon.svg` — the favicon.
- `public/work/*.svg` — placeholder case study artwork (replace with real screenshots anyway).

**Changing the typeface:** swap the imports in `src/lib/fonts.ts` and update the `--font-*` stacks in `tokens.css`. `next/font/google` works too.

**Theme behavior:** dark-first. Visitors get dark unless they choose light; the choice is saved in `localStorage` (`qubyne-theme`) and applied before first paint, so there's no flash. To follow the visitor's OS setting by default instead, edit `src/lib/theme.ts`.

---

## Edit the content

All copy that repeats across the site lives in typed files in `src/content/`:

| File | Controls |
| --- | --- |
| `site.ts` | Name, description, contact email, social links, nav |
| `services.ts` | The four services (Services page, footer, case study tags) |
| `process.ts` | The 4 process steps (Home + Process page), principles, FAQ |
| `work.ts` | Case studies |

Page-specific copy (Home sections, About, Contact) is written directly in the page and component files.

### Add a case study

1. Add an object to `caseStudies` in `src/content/work.ts` (copy an existing one).
2. Drop a 16:10 cover image (PNG/JPG/WebP, ~1600×1000) in `public/work/` and point `cover.src` at it, with real `alt` text.

The detail page, card on Home and `/work`, footer link, sitemap entry and social share image are all generated from that one entry. There is nothing else to wire up.

---

## Contact form

The form is UI only. On submit it validates, then opens a prefilled `mailto:` to `site.email` and says plainly that nothing has been sent from the page, so no enquiry is silently lost.

To connect a real backend, replace the body of `submitInquiry()` in `src/lib/contact.ts` (for example, `fetch("/api/contact", …)` to a Next.js route handler, or a form service such as Formspree or Resend) and update the status message in `src/components/contact-form.tsx`. When you do, also add a privacy notice and consider spam protection.

---

## Placeholder content

Everything that's invented is marked in code with `TODO(placeholder)` (and `TODO(backend)` for the form). List every one:

```bash
grep -rn "TODO(placeholder)\|TODO(backend)" src
```

The big ones: fictional case studies (client names, metrics, quotes), the fictional logo strip, the contact email, the cube logo, About-page stats and founding story, and the commitments in the process/FAQ copy. **Do not launch with these in place.**

---

## Quality notes

- **Accessibility.** Semantic landmarks, a skip link, one visible focus ring everywhere, labelled form fields with inline errors (`aria-invalid` / `aria-describedby`, focus moves to the first error), keyboard-operable menu (Escape closes), native `<details>` FAQ, `prefers-reduced-motion` respected, contrast checked to WCAG AA in both themes. Axe-core reports zero violations (WCAG 2.2 AA + best-practice) on every route at widths from 320 to 1440 px in both themes.
- **Performance.** Server Components by default; only four small client components (theme toggle, header menu, scroll-reveal, contact form). Fonts are self-hosted and preloaded. Images go through `next/image`. Above-the-fold content animates with CSS only, so it never waits on JavaScript. Lighthouse (mobile, production build, run locally): Performance 91–95, Accessibility 100, Best Practices 100, SEO 100.
- **SEO.** Per-page title, description and canonical; Open Graph and Twitter cards with generated 1200×630 images (site-wide and per case study); `sitemap.xml` and `robots.txt` generated from content; Organization and FAQ structured data; branded 404 with `noindex`.
- **Motion.** Subtle fade-up on scroll with a ~1 KB IntersectionObserver. No animation library. Content is fully visible with JavaScript disabled.

## Project layout

```
src/
  app/            routes, layout, sitemap/robots, OG + icon generators, globals.css
  components/     header, footer, logo, forms, cards; ui/ = primitives; home/ = Home sections
  content/        typed site content (see above)
  lib/            seo helper, theme bootstrap, fonts, brand colors, contact logic
  styles/
    tokens.css    ← the design tokens
public/work/      placeholder case study artwork
```
