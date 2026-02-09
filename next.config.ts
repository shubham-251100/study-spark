import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
    // Enable modern image formats
    formats: ["image/avif", "image/webp"],
  },

  // Enable React strict mode for better debugging
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Enable optimized package imports for better tree-shaking
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
