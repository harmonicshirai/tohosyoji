import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tohosyoji',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
