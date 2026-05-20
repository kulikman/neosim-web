## Summary

What changes and why. One sentence.

## Type

- [ ] feat — new user-facing capability
- [ ] fix — bug fix
- [ ] refactor — internal cleanup, no behavior change
- [ ] chore — tooling, deps, CI
- [ ] docs

## Checklist

- [ ] `pnpm verify` passes locally
- [ ] New env vars added to `src/lib/env.ts` AND `.env.example`
- [ ] New routes registered in `ROUTES` and breadcrumb `SEGMENT_LABELS` if nested
- [ ] Page deeper than `/` has `<Breadcrumbs />`
- [ ] No `any`, no raw `process.env`, no `middleware.ts` (use `src/proxy.ts`)
- [ ] If the change is observable in the browser, screenshot or short test attached
