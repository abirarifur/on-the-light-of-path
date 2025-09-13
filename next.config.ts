import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/hadith/:path*",
        destination: process.env.NEXT_PUBLIC_HADITH_API_URL + "/api/:path*",
      },
      {
        source: "/api/quran/:path*",
        destination: process.env.NEXT_PUBLIC_QURAN_API_URL + "/api/:path*",
      },
    ];
  },
};

export default nextConfig;
