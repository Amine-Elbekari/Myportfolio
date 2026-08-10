import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/Myportfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
