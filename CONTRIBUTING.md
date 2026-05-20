# Contributing

Quick notes for anyone working on this repo. The full ruleset lives in
[`CLAUDE.md`](./CLAUDE.md).

## Setup

```bash
pnpm install
cp .env.example .env.local   # fill in values
pnpm dev
```

Node 20+ and pnpm 10 required.

## Workflow

1. Branch from `main`: `git checkout -b feat/short-description`
2. Make small, focused commits using [Conventional Commits](https://www.conventionalcommits.org/).
   `commitlint` enforces this — see [`commitlint.config.ts`](./commitlint.config.ts).
3. Before pushing, `pnpm verify` must pass (typecheck + lint + tests).
   The `pre-push` hook runs it automatically.
4. Open a PR. Fill in the template. CI must be green to merge.

## Code rules (TL;DR)

- TypeScript strict, no `any`, no `@ts-ignore`.
- Server Components by default. `"use client"` only when needed.
- Tailwind v4 only. Theme tokens live in `src/app/globals.css` (`@theme`).
- Env vars go through `getServerEnv()` / `getClientEnv()`, never raw `process.env`.
- Every nested route gets a `<Breadcrumbs />`. First crumb is "Dashboard".
- New env vars: add to `.env.example` AND `src/lib/env.ts`.
- New routes: add to `ROUTES` in `src/lib/constants.ts`.

## Commit message format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

Examples:

```
feat(blog): add /blog/[slug] dynamic page
fix(coverage): handle country codes case-insensitively
chore(deps): bump next to 16.2.4
```

Lowercase subject, no trailing period, under 100 chars.

## Reporting bugs / security

- Bugs → GitHub Issues using the bug template
- Security vulnerabilities → see [`SECURITY.md`](./SECURITY.md)
