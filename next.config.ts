import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/hadith/:path*",
        destination: process.env.NEXT_PUBLIC_HADITH_API_URL + "/api/:path*",
      },
    ];
  },
};

export default nextConfig;
