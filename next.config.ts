import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The Kukas Villa is no longer part of the Stayra collection.
        // 301 rather than 404: it is currently the only indexed property URL,
        // so the signal passes to the collection page instead of being lost.
        source: "/properties/the-kukas-villa",
        destination: "/properties",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
