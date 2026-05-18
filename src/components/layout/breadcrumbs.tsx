"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

/**
 * Route segment → human-readable label.
 * Extend this map when adding new static routes.
 * Dynamic segments (UUIDs, slugs) are resolved via the `resolveLabel` prop.
 */
const SEGMENT_LABELS: Record<string, string> = {
  // Navigation roots (needed as middle-crumb labels)
  dashboard: "Dashboard",
  settings: "Settings",

  // Neosim admin sections
  customers: "Customers",
  iccids: "ICCIDs",
  orders: "Orders",
  usage: "Usage",
  "tariff-rates": "Tariff Rates",
  coverage: "Coverage",
  cashback: "Cashback",
  invoices: "Invoices",
  reconciliation: "Reconciliation",
  "admin-users": "Admin Users",
  analytics: "Analytics",
  fulfillment: "Fulfillment",

  // Common action segments
  edit: "Edit",
  new: "New",
};

/** Pages that never show breadcrumbs (top-level / sidebar-nav entries). */
const NO_BREADCRUMB_PATHS = new Set(["/", "/dashboard", "/settings"]);

interface BreadcrumbsProps {
  /**
   * Resolve a dynamic segment (UUID, slug) to a human-readable label.
   * Return `null` to fall back to the default title-case formatter.
   *
   * @example
   * // /customers/abc-123 → Dashboard › Customers › Acme Corp
   * <Breadcrumbs resolveLabel={(seg) => customer?.fullName ?? null} />
   */
  resolveLabel?: (segment: string, allSegments: string[]) => string | null;
  className?: string;
}

/**
 * Breadcrumb navigation — auto-generates from the current URL path.
 *
 * Chain structure:
 *   Dashboard (link) › Section (link) › Current page (bold, no link)
 *
 * Not rendered on: list pages, /dashboard, /settings, root.
 * Must be placed as the **first element of content** on detail/edit/new pages.
 *
 * @example
 * // /customers/abc-123/edit → Dashboard › Customers › Acme Corp › Edit
 * <Breadcrumbs resolveLabel={(seg) => customer?.fullName ?? null} className="mb-4" />
 */
export function Breadcrumbs({
  resolveLabel,
  className,
}: BreadcrumbsProps): React.ReactElement | null {
  const pathname = usePathname();

  if (NO_BREADCRUMB_PATHS.has(pathname)) return null;

  // Strip Next.js route groups like (auth), (dashboard) — they are invisible in URLs
  const segments = pathname.split("/").filter((s) => s.length > 0 && !s.startsWith("("));

  // Single-segment paths are list pages — no breadcrumbs needed
  if (segments.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-muted-foreground flex items-center gap-1.5 text-sm", className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {/* Root crumb: always Dashboard */}
        <li>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            Dashboard
          </Link>
        </li>

        {segments.map((segment, index) => {
          // Build href from visible segments only.
          // Route groups are stripped, so this matches the real Next.js URL.
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label =
            SEGMENT_LABELS[segment] ?? resolveLabel?.(segment, segments) ?? formatSegment(segment);

          return (
            <Fragment key={href}>
              <li aria-hidden="true" className="text-muted-foreground/40 select-none">
                ›
              </li>
              <li>
                {isLast ? (
                  <span className="text-foreground font-semibold" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-foreground transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Converts a URL segment to a readable label.
 * - `getting-started` → `Getting Started`
 * - UUIDs are shortened: `abc123de-…` → `abc123de…` (use resolveLabel for real names)
 */
function formatSegment(segment: string): string {
  // UUID-like: shorten for display — caller should pass resolveLabel for real name
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(segment)) {
    return segment.slice(0, 8) + "…";
  }
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
