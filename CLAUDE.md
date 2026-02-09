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
- Middleware (`middleware.ts`) uses `next-intl/middleware` to handle locale detection/redirect
- Use `Link`, `useRouter`, `usePathname` from `@/i18n/routing` (not from `next/link` or `next/navigation`) for locale-aware navigation
- Use `useTranslations('SectionKey')` in components to access translated strings

### Data Layer
- WordPress API interactions: `lib/wordpress.ts` with `WordPressAPIError` class
- Type definitions: `lib/wordpress.d.ts` (Post, Page, Category, Tag, Author, FeaturedMedia)
- Functions use Next.js cache tags for granular revalidation (e.g., `tags: ['posts', 'post-${slug}']`)
- Default cache duration: 1 hour (`revalidate: 3600`)

### Routing Structure
- Localized pages: `app/[locale]/page.tsx` (homepage), `app/[locale]/posts/[slug]/page.tsx`, `app/[locale]/pages/[slug]/page.tsx`
- Archive pages: `app/[locale]/posts/`, `app/[locale]/posts/authors/`, `app/[locale]/posts/categories/`, `app/[locale]/posts/tags/`
- API routes (not localized): `app/api/revalidate/route.ts` (webhook), `app/api/og/route.tsx` (OG images)
- Sitemap: `app/sitemap.ts`

### Homepage Structure
The homepage (`app/[locale]/page.tsx`) is a long single-page layout with multiple sections defined as local components: Hero (with carousel), Banner, Mbio7, CarouselCmp, About, Impact, WhyUs, ComparativeStudy, Blogs, Actualites, Reviews, FAQ, Contact.

### Key Configuration Files
- `site.config.ts` - Site name, description, domain
- `menu.config.ts` - Navigation menu items
- `tailwind.config.ts` - Custom brand colors (`mbioPrimary`, `mbioSecondary`, `mbioTertiary`, `mbioAccent`, etc.) as CSS custom properties

### Contact Form
- Client component: `components/contact-form.tsx` (React Hook Form + Zod validation)
- Email sending: `utils/send-email.js` (uses nodemailer)

### Component Patterns
- Server Components for data fetching with parallel `Promise.all()` calls
- Layout components from `components/craft.tsx` (`Section`, `Container`, `Prose`)
- UI components from shadcn/ui in `components/ui/`
- URL-based state management for search/filters with debounced search (300ms)

### Revalidation System
- WordPress plugin sends webhooks on content changes
- `app/api/revalidate/route.ts` validates webhook secret and calls `revalidateTag()`

## Code Style

### Naming Conventions
- React components: PascalCase (e.g., `PostCard.tsx`)
- Functions and variables: camelCase
- Types and interfaces: PascalCase

### Brand Colors
Use the custom Tailwind classes `text-mbioPrimary`, `bg-mbioSecondary`, `text-mbioAccent`, etc. — these map to CSS custom properties defined in globals.css.

## Environment Variables
Required (see `.env.example`):
- `WORDPRESS_URL` - Full URL of WordPress site
- `WORDPRESS_HOSTNAME` - Domain for image optimization
- `WORDPRESS_WEBHOOK_SECRET` - Secret for webhook validation
