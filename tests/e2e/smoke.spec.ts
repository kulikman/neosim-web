import { test, expect } from "@playwright/test";

/**
 * Smoke tests — verify all top-level routes render without runtime errors
 * and that key pages contain expected content.
 */

const PAGES = [
  "/",
  "/coverage",
  "/how-it-works",
  "/get-esim",
  "/get-esim/success",
  "/business",
  "/partners",
  "/blog",
  "/faq",
  "/about",
  "/contact",
  "/app-download",
  "/topup",
  "/login",
  "/signup",
  "/coming-soon",
  "/privacy",
  "/terms",
] as const;

for (const path of PAGES) {
  test(`${path} renders without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    const res = await page.goto(path);
    expect(res?.status(), `${path} returned non-2xx`).toBeLessThan(400);

    // every page must have a visible h1 with non-trivial text
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    const text = (await h1.textContent()) ?? "";
    expect(text.trim().length, `${path} h1 is empty`).toBeGreaterThan(3);

    expect(errors, `runtime errors on ${path}`).toEqual([]);
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
