# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server with turbo mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

No test suite is configured.

## Architecture Overview

**mBio7** marketing website — a headless WordPress + Next.js 16 App Router site (React 19) with French/English internationalization. It began as the [next-wp](https://github.com/9d8dev/next-wp) starter, and a lot of that starter is still on disk but **no longer wired up** (see "Starter leftovers" below). Treat the starter's README as history, not as a description of this site.

The site is effectively a **three-page brochure**: a long single-page homepage plus three content sub-pages (fabrication / utilisations / expérience). There is no blog, and nothing renders arbitrary WordPress posts or pages.

### Actual routes
- `app/[locale]/page.tsx` — the homepage; a long single-page layout
- `app/[locale]/pages/[slug]/page.tsx` — the three sub-pages, dispatched by slug (see below)
- `app/[locale]/pages/page.tsx` — exists but its body is fully commented out; renders nothing
- `app/sitemap.ts` — only static URLs; the post-collection logic is commented out
- `/admin` redirects to the WordPress `wp-admin` panel (`next.config.ts`)

Every page lives under `app/[locale]/`; the locale segment (`fr` or `en`) is required.

### The sub-page router is slug-dispatch, not generic
`app/[locale]/pages/[slug]/page.tsx` looks like a generic WordPress page renderer but is not. It matches the decoded slug against **three hardcoded pairs** (one French, one English each) and renders a bespoke layout per page:

| Slug (fr / en) | Data fetched | Layout |
|---|---|---|
| `fabrication` / `manufacture` | `getFabricationSection` | alternating `Feature` / `FeatureInverted` |
| `utilisations` / `how-to-use` | `getUtilisationHeroSection`, `getUtilisationMainSection` | `Main` → `CarouselV2` → `Hero` |
| `expérience` / `experience` | `getExperienceHeroSection`, `getExperienceSection` | `ExperienceHero` + alternating features |

Adding a fourth sub-page means editing this file — a new `is<Name>` flag, a fetch branch, and a JSX branch — plus `getPageTitle`/`handleTranslateTitle`, which hold the fr↔en slug translation maps. Note the accented `expérience` slug is URL-encoded in links and must be `decodeURIComponent`'d. The section components (`Feature`, `FeatureInverted`, `Hero`, `Main`, `ExperienceHero`) are all defined inline at the bottom of that same file, and the images they display come from **hardcoded imports of `public/` assets** indexed by array position — not from WordPress.

### Data layer

**`lib/wp-fetch.ts` is the only live data source.** It reads a WordPress custom post type (`/mbio7`) with ACF fields, from `${process.env.WORDPRESS_URL}`.

The content model is one WordPress entry per page, with **locale baked into the ACF field names** rather than into separate posts. Fields are suffixed `_fr` / `_en` (e.g. `herosection_fr`, `herosection_en`), and the getters resolve them via a `getSection(acf, prefix, locale)` helper that concatenates `${prefix}_${locale}`. So every section getter takes a `locale` argument, and adding a section means adding both suffixed fields in WordPress.

- `fetchLandingPage()` fetches `?slug=landingpage` and backs the homepage's ~12 section getters (`getHeroSection`, `getAboutSection`, `getImpactSection`, …). **It has no mock fallback and throws** if WordPress is unreachable.
- `fetchFabricationPage()` / `fetchUtilisationsPage()` / `fetchExperiencePage()` back the sub-pages and each **silently fall back to a mock** (`mocks/fabrication.ts`, `mocks/utilisations.ts`, `mocks/experience.ts`) inside a bare `catch {}` on any error. A sub-page that renders stale or unexpected copy is usually WordPress failing quietly, not a rendering bug — check the network response before chasing the component.

`mocks/fetch-landingpage.ts` defines `MOCK_LANDING_PAGE` but never exports it; it is dead code and no fallback exists for the homepage.

### Starter leftovers (do not build on these)
`lib/wordpress.ts` (the generic REST client with `WordPressAPIError`, cache tags, and Posts/Categories/Tags/Authors support) is **dead code** — every call site is commented out (`app/sitemap.ts`, `app/[locale]/pages/page.tsx`). Likewise dead: `components/posts/` (`post-card`, `filter`, `search-input`), and `lib/wordpress.d.ts`. There is **no `app/api/og` route**, despite `generateMetadata` in the sub-page route pointing OG/Twitter image URLs at `${site_domain}/api/og` — those image URLs currently 404.

If a task needs posts, search, or OG generation, that machinery must be revived or rebuilt, not merely imported.

### Internationalization (next-intl)
- Routing config: `i18n/routing.ts` (locales `['fr', 'en']`, default `'fr'`); request handling in `i18n/request.ts`
- `middleware.ts` runs `next-intl/middleware`; matcher `['/', '/(fr|en)/:path*']`
- Import `Link`, `useRouter`, `usePathname`, `redirect` from `@/i18n/routing` — **not** from `next/link` / `next/navigation` — so locale prefixes are preserved
- `useTranslations('SectionKey')` reads from `messages/fr.json` / `messages/en.json`. Top-level keys: `Hero`, `Nav`, `Banner`, `mBio7`, `Carousel`, `About`, `Impact`, `Whyus`, `Reviews`, `FAQ`, `Fabrication`, `Experience`, `Blogs`, `UtilisationHero`, `UtilisationMain`
- **Two parallel translation systems coexist.** Static UI chrome (nav labels, and the nav/footer *hrefs* — `Nav.fabricationLink` etc.) lives in `messages/*.json`; page body copy comes from the locale-suffixed WordPress ACF fields. A copy change could belong in either — check both.
- Some strings are neither, and are inlined as `locale === 'fr' ? … : …` ternaries (e.g. the footer tagline in `app/[locale]/layout.tsx`).

### Layout, theming, styling
- `app/[locale]/layout.tsx` is the root layout: Poppins font, `ThemeProvider` with **`forcedTheme="light"`** (dark mode is disabled — `dark:` variants are inert), Sonner `Toaster`, the inline `Footer`, and Google Analytics via `@next/third-parties`.
- Layout primitives come from `components/craft.tsx` (`Section`, `Container`, `Prose`); UI components are shadcn/ui in `components/ui/`.
- Brand colors are custom Tailwind classes (`text-mbioPrimary`, `bg-mbioSecondary`, `text-mbioAccent`, plus `mbioTertiary`, `mbioQuaternary`, `mbioMuted`, `mbioMutedForeground`) mapping to CSS custom properties in `app/[locale]/globals.css`. Prefer these over raw hex — though note the existing code frequently hardcodes hex (`#2A6F6A`, `#6CC1BB`, `#084E4D`).
- Carousels use Embla (`carousel-hero.tsx`, `carousel-v1.tsx`, `carousel-v2.tsx`).

### Contact form
`components/contact-form.tsx` (client; React Hook Form + Zod, validation messages hardcoded in French) submits to the `utils/send-email.js` server action, which sends through nodemailer/Gmail. Feedback via Sonner toasts.

### Deployment
Deployed to **Netlify** (`netlify.toml`), not Vercel — despite `@vercel/analytics` still being a dependency. Analytics in production is Google Analytics, hardcoded in the root layout.

## Code Style
- React components PascalCase; functions/variables camelCase; types/interfaces PascalCase.
- Section components are commonly defined inline at the bottom of the page file that uses them, rather than extracted to `components/`. Follow the local convention of the file you're editing.

## Environment Variables
See `.env.example`. WordPress: `WORDPRESS_URL` (full URL, used as the fetch base), `WORDPRESS_HOSTNAME` (for `next/image` remote patterns and the `/admin` redirect), `WORDPRESS_WEBHOOK_SECRET` (revalidation webhook).

Contact form: `EMAIL_USER` (Gmail sender), `EMAIL_PASS` (Gmail app password), `EMAIL_TO` (recipient).

`next.config.ts` also whitelists `images.unsplash.com` for remote images.
