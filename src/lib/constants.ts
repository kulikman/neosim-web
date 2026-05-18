export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Neosim Web";

/**
 * Canonical route map.
 *
 * Rules:
 *   - Every nested route must have a navigable parent (no dead intermediate URLs).
 *   - Use descriptive nouns as segments, not abbreviations or numeric IDs alone.
 *   - Dynamic segments: `/projects/[id]`, never `/p/[id]`.
 *   - Add new routes here and in `SEGMENT_LABELS` (breadcrumbs.tsx).
 */
export const ROUTES = {
  home: "/",
  // Auth
  login: "/login",
  signup: "/signup",
  // App — top-level routes that exist as page.tsx
  dashboard: "/dashboard",
  // User-facing Neosim sections — add here only when page.tsx exists.
  // ⚠️ Do NOT add a route here until src/app/{section}/page.tsx exists.
  esim: "/esim",
  usage: "/usage",
  billing: "/billing",
  support: "/support",
} as const;
