# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server with turbo mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is the **mBio7** marketing website — a headless WordPress + Next.js 15 App Router site with internationalization (French/English). It's built on the [next-wp](https://github.com/9d8dev/next-wp) starter template.

### Internationalization (next-intl)
- All pages live under `app/[locale]/` — the locale segment (`fr` or `en`) is required
- Routing config: `i18n/routing.ts` (locales: `['fr', 'en']`, default: `'fr'`)
- Locale request handling: `i18n/request.ts`
- Translation files: `messages/fr.json` and `messages/en.json`
- Middleware (`middleware.ts`) uses `next-intl/middleware` to handle locale detection/redirect; matcher: `['/', '/(fr|en)/:path*']`
- Use `Link`, `useRouter`, `usePathname` from `@/i18n/routing` (not from `next/link` or `next/navigation`) for locale-aware navigation
- Use `useTranslations('SectionKey')` in components to access translated strings
- Translation top-level keys: `Hero`, `Nav`, `Banner`, `mBio7`, `Carousel`, `About`, `Impact`, `Whyus`, `Reviews`, `FAQ`, `Fabrication`, `Experience`, `Blogs`, `UtilisationHero`, `UtilisationMain`

### Data Layer

**Two separate fetching systems coexist:**

1. **`lib/wp-fetch.ts`** — fetches structured section data from WordPress custom endpoints. Used by the homepage and section-based pages. Returns typed section interfaces: `HeroSection`, `AboutSection`, `ProcessSection`, `VideoSection`, `ImpactSection`, `WhyUsSection`, `ComparativeSection`, `BlogsSection`, `ActualitesSection`, `ReviewsSection`, `FAQSection`. Base URL is `https://www.mbio7.com/index.php/wp-json/wp/v2`.

2. **`lib/wordpress.ts`** — generic WordPress REST API client with `WordPressAPIError` class. Handles Posts, Pages, Categories, Tags, Authors, and FeaturedMedia. Functions use Next.js cache tags for granular revalidation (e.g., `tags: ['posts', 'post-${slug}']`). Default cache: 1 hour (`revalidate: 3600`).

Type definitions: `lib/wordpress.d.ts` (Post, Page, Category, Tag, Author, FeaturedMedia). Utility: `lib/utils.ts` exports `cn()` (clsx + tailwind-merge).

### Routing Structure
- Localized pages: `app/[locale]/page.tsx` (homepage), `app/[locale]/posts/[slug]/page.tsx`, `app/[locale]/pages/[slug]/page.tsx`
- Archive pages: `app/[locale]/posts/`, `app/[locale]/posts/authors/`, `app/[locale]/posts/categories/`, `app/[locale]/posts/tags/`
- API routes (not localized): `app/api/og/route.tsx` (OG image generation via Edge runtime)
- Sitemap: `app/sitemap.ts`
- `/admin` redirects to the WordPress admin panel (configured in `next.config.ts`)

### Homepage Structure
The homepage (`app/[locale]/page.tsx`) is a long single-page layout. Data is fetched in parallel via `Promise.all()` using functions from `lib/wp-fetch.ts`. Section components are defined inline in the page file: Hero (with carousel), Banner, Mbio7, CarouselCmp, About, Impact, WhyUs, ComparativeStudy, Blogs, Actualites, Reviews, FAQ, Contact. Uses Poppins font (loaded via `next/font/google`).

### Key Configuration Files
- `site.config.ts` — site name (`mBio7`), description, domain (`https://mbio7.com`)
- `menu.config.ts` — `mainMenu` links to `/pages/fabrication`, `/pages/utilisation`, `/pages/experiences`; `contentMenu` links to posts archive sub-pages
- `tailwind.config.ts` — custom brand colors (`mbioPrimary`, `mbioSecondary`, `mbioTertiary`, `mbioQuaternary`, `mbioAccent`, `mbioMuted`, `mbioMutedForeground`) as CSS custom properties; container max: 1400px; plugins: `tailwindcss-animate`, `@tailwindcss/typography`

### Navigation
- `components/nav/desktop-nav.tsx` — sticky, transparent, backdrop blur; menu items sourced from `messages/[locale].json` under `Nav` key
- `components/nav/mobile-nav.tsx` — Sheet drawer for mobile
- `components/lang-toggle.tsx` — locale switcher

### Contact Form
- Client component: `components/contact-form.tsx` (React Hook Form + Zod; validation messages in French)
- Email sending: `utils/send-email.js` (nodemailer server action, Gmail service)
- Toast feedback via Sonner (`sonner` package)

### Component Patterns
- Server Components for data fetching with parallel `Promise.all()` calls
- Layout components from `components/craft.tsx` (`Section`, `Container`, `Prose`, plus `cn()`, `BREAKPOINTS`, responsive type utilities)
- UI components from shadcn/ui in `components/ui/`
- Carousel implementations: `components/carousel-hero.tsx`, `components/carousel-v1.tsx`, `components/carousel-v2.tsx` (Embla Carousel + autoplay)
- URL-based state management for search/filters with debounced search (`use-debounce`, 300ms)
- Analytics: `@vercel/analytics` in root layout

## Code Style

### Naming Conventions
- React components: PascalCase (e.g., `PostCard.tsx`)
- Functions and variables: camelCase
- Types and interfaces: PascalCase

### Brand Colors
Use the custom Tailwind classes `text-mbioPrimary`, `bg-mbioSecondary`, `text-mbioAccent`, etc. — these map to CSS custom properties defined in `globals.css`.

## Environment Variables
Required (see `.env.example`):
- `WORDPRESS_URL` - Full URL of WordPress site
- `WORDPRESS_HOSTNAME` - Domain for image optimization
- `WORDPRESS_WEBHOOK_SECRET` - Secret for webhook validation

Required for contact form email sending:
- `EMAIL_USER` - Gmail address used as sender
- `EMAIL_PASS` - Gmail app password
- `EMAIL_TO` - Recipient email address
