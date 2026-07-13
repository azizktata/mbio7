import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // output: "export",

  images: {
    // Next's optimizer runs on Vercel's image CDN, whose quota this project has
    // exhausted (/_next/image returned 402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED).
    // Serve images directly instead, and rely on WordPress's own generated sizes
    // to keep payloads down — see getSizedImage() in lib/wp-image.ts.
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.WORDPRESS_HOSTNAME}`,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `https://${process.env.WORDPRESS_HOSTNAME}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
