export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "NeoSIM";

/**
 * Canonical route map.
 *
 * Rules:
 *   - Every nested route must have a navigable parent (no dead intermediate URLs).
 *   - Add routes here ONLY when the corresponding page.tsx exists.
 *   - Dynamic segments: `/coverage/[code]`, never `/c/[code]`.
 */
export const ROUTES = {
  home: "/",

  // Marketing
  coverage:     "/coverage",
  howItWorks:   "/how-it-works",
  getEsim:      "/get-esim",
  getEsimSuccess: "/get-esim/success",
  business:     "/business",
  partners:     "/partners",
  blog:         "/blog",
  faq:          "/faq",
  about:        "/about",
  topup:        "/topup",
  contact:      "/contact",
  appDownload:  "/app-download",
  privacy:      "/privacy",
  terms:        "/terms",

  // Auth
  login:  "/login",
  signup: "/signup",

  // App — protected
  dashboard: "/dashboard",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
