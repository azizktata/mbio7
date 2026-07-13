/**
 * Picks the smallest WordPress-generated image variant that still covers the
 * width we intend to display at.
 *
 * Next's image optimizer is disabled (`images.unoptimized`) because this project
 * exhausted the Vercel image CDN quota — /_next/image was returning 402. Without
 * it, an <Image src={wpUrl}> ships the *original* upload, and several of those
 * are 2560px wide. WordPress already generates resized copies on upload, so we
 * use those instead and get most of the benefit back for free.
 *
 * Variant filenames look like `name-1024x574.webp`, but they only exist when the
 * original was larger than that size — `hero-slide-11-1024x576.webp` is a 404
 * because that upload is smaller. So we never construct these URLs by string
 * surgery; we read the real list from the media endpoint and cache it.
 */

interface MediaSize {
  width: number;
  height: number;
  source_url: string;
}

interface MediaItem {
  source_url: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<string, MediaSize>;
  };
}

/** full-size source_url -> its available variants, widest last */
type SizeIndex = Map<string, MediaSize[]>;

const BASE_URL = process.env.WORDPRESS_URL;

let indexPromise: Promise<SizeIndex> | null = null;

async function fetchSizeIndex(): Promise<SizeIndex> {
  const index: SizeIndex = new Map();

  try {
    // ~127 items today; 100 per page keeps this to two requests, cached for an hour.
    for (let page = 1; page <= 5; page++) {
      const res = await fetch(
        `${BASE_URL}/media?per_page=100&page=${page}&_fields=source_url,media_details`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) break;

      const items: MediaItem[] = await res.json();
      if (!Array.isArray(items) || items.length === 0) break;

      for (const item of items) {
        const sizes = item.media_details?.sizes;
        if (!item.source_url || !sizes) continue;

        const variants = Object.values(sizes)
          .filter((s) => s?.source_url && s.width > 0)
          .sort((a, b) => a.width - b.width);

        if (variants.length) index.set(item.source_url, variants);
      }

      const total = Number(res.headers.get("x-wp-total-pages") ?? 1);
      if (page >= total) break;
    }
  } catch {
    // Network/CMS failure: fall back to serving originals rather than no images.
  }

  return index;
}

function getSizeIndex(): Promise<SizeIndex> {
  if (!indexPromise) indexPromise = fetchSizeIndex();
  return indexPromise;
}

/**
 * Returns the best variant URL for `url` at the given display width, or `url`
 * itself when the image is not a known WordPress upload, has no variants, or
 * none is large enough.
 *
 * `targetWidth` is the pixel width we want to serve — pass the widest the image
 * actually renders at, already accounting for any retina headroom you want. We
 * do not silently double it: on a full-bleed banner a 2x multiplier just selects
 * the 2048px variant of a 2560px original, which saves nothing.
 */
export async function getSizedImage<T extends string | false | undefined>(
  url: T,
  targetWidth: number
): Promise<T> {
  if (!url || typeof url !== "string") return url;

  const index = await getSizeIndex();
  const variants = index.get(url);
  if (!variants?.length) return url;

  const fit = variants.find((v) => v.width >= targetWidth);

  // Nothing big enough — the original is the closest we have.
  return (fit ? (fit.source_url as T) : url);
}

/** Maps getSizedImage over a list, preserving order. */
export async function getSizedImages(
  urls: string[],
  targetWidth: number
): Promise<string[]> {
  return Promise.all(urls.map((u) => getSizedImage(u, targetWidth)));
}
