import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"], // Without this it was working
  images: {
    remotePatterns: [{ hostname: "aceternity.com" }],
  },
};

export default nextConfig;
