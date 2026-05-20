/**
 * Next.js instrumentation — loaded once on server startup.
 * Wires Sentry server config. No-op when NEXT_PUBLIC_SENTRY_DSN is unset.
 */
export async function register(): Promise<void> {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("../sentry.server.config");
  }
}
