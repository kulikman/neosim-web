import type { KnipConfig } from "knip";

/**
 * Knip — dead code detector. Run: `pnpm knip`.
 * Docs: https://knip.dev/overview/configuration
 */
const config: KnipConfig = {
  entry: [
    "src/app/**/{page,layout,loading,error,not-found,route,opengraph-image,icon,sitemap,robots}.{ts,tsx}",
    "src/proxy.ts",
  ],
  project: ["src/**/*.{ts,tsx}"],
  ignoreDependencies: [
    "tailwindcss",
    "shadcn",
    "@tailwindcss/postcss",
    "prettier-plugin-tailwindcss",
    "tw-animate-css",
  ],
  ignoreExportsUsedInFile: true,
  paths: {
    "@/*": ["./src/*"],
  },
};

export default config;
