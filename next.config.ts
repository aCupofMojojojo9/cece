import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cecesdream.org"],
  },
  output: 'export',
  basePath: '/cece',
};

export default nextConfig;
