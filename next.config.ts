import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable React StrictMode in development to prevent swagger-ui-react warnings
  reactStrictMode: process.env.NODE_ENV === "production",
};

export default nextConfig;
