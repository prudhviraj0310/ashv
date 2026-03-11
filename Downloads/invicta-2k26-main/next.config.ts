import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/invicta-2k26' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/invicta-2k26' : '',
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
  turbopack: {
    root: path.resolve(__dirname),
  } as unknown as NextConfig["turbopack"],
};

export default nextConfig;
