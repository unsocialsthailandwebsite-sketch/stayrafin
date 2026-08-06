import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired blog posts. 301 to the blog index rather than 404 so any
      // accrued signal and inbound links are preserved.
      {
        source: "/blogs/ultimate-3-day-jaipur-luxury-itinerary",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/villa-vs-hotel-jaipur",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/best-farm-stays-jaipur",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/heritage-homes-jaipur",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/winter-in-jaipur",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/sustainable-tourism-rajasthan",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/jaipur-food-guide",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/weekend-getaways-from-delhi",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/private-pool-villas-jaipur",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/destination-wedding-villas-jaipur",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/group-villas-jaipur-birthdays-reunions",
        destination: "/blogs",
        permanent: true,
      },
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
