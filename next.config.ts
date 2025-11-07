import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Cache Components (Next.js 16+)
  // This enables explicit opt-in caching with "use cache" directive
  // Routes are dynamic by default, opt into caching for better performance
  cacheComponents: true,
};

export default nextConfig;
