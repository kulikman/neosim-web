/**
 * User dashboard — entry point after login.
 * No breadcrumbs on this page (top-level, accessible from nav).
 * TODO: show wallet balance, active ICCID, current country, recent usage.
 */
export default function DashboardPage(): React.ReactElement {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-foreground text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        Your Neosim account — wallet, eSIM status, and usage history.
      </p>
    </main>
  );
}
