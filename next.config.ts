import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // output: "export",

  images: {
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
