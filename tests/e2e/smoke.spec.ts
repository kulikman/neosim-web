import { test, expect } from "@playwright/test";

/**
 * Smoke tests — verify all top-level routes render without runtime errors
 * and that key pages contain expected content.
 */

const PAGES = [
  { path: "/",              heading: /eSIM|NeoSIM|Connect/i },
  { path: "/coverage",      heading: /coverage|countries/i },
  { path: "/how-it-works",  heading: /how it works|2 minutes/i },
  { path: "/get-esim",      heading: /free eSIM|get your/i },
  { path: "/business",      heading: /business|CFO|won/i },
  { path: "/partners",      heading: /partner/i },
  { path: "/blog",          heading: /blog|notes/i },
  { path: "/faq",           heading: /faq|questions/i },
  { path: "/about",         heading: /about/i },
  { path: "/contact",       heading: /contact/i },
  { path: "/app-download",  heading: /app|download/i },
  { path: "/topup",         heading: /top up|wallet/i },
  { path: "/login",         heading: /welcome|sign in/i },
  { path: "/signup",        heading: /create|connect/i },
  { path: "/coming-soon",   heading: /coming soon/i },
  { path: "/privacy",       heading: /privacy/i },
  { path: "/terms",         heading: /terms/i },
] as const;

for (const p of PAGES) {
  test(`${p.path} loads and has expected heading`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    const res = await page.goto(p.path);
    expect(res?.status(), `${p.path} returned non-2xx`).toBeLessThan(400);

    await expect(page.locator("h1, h2").first()).toContainText(p.heading);
    expect(errors, `runtime errors on ${p.path}`).toEqual([]);
  });
}

test("404 renders not-found page", async ({ page }) => {
  const res = await page.goto("/this-route-does-not-exist");
  expect(res?.status()).toBe(404);
});

test("dynamic /blog/[slug] resolves", async ({ page }) => {
  await page.goto("/blog/esim-vs-roaming-2026");
  await expect(page.locator("h1")).toBeVisible();
});

test("dynamic /coverage/[country] resolves", async ({ page }) => {
  await page.goto("/coverage/jp");
  await expect(page.locator("h1")).toContainText(/japan/i);
});
