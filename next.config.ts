import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Typed routes require every `Link` href to be a static route union. The
  // breadcrumb component builds paths at runtime, so keep this off in the template.
  typedRoutes: false,

  // Remote images must be explicitly allowed. Add your CDN / Supabase storage host here.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Security headers as a safety net — the proxy.ts also sets them, but
  // next.config.ts ensures they apply even for static assets served by Vercel.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
