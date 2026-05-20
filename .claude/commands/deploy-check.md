# Command: /deploy-check

Финальная проверка перед деплоем в production.

## Использование

```
/deploy-check
```

## Чеклист

### Code Quality
- [ ] `pnpm typecheck` — TypeScript без ошибок
- [ ] `pnpm lint` — ESLint чист (`--max-warnings 0`)
- [ ] `pnpm format:check` — Prettier чист
- [ ] `pnpm test` — vitest зелёный
- [ ] `pnpm test:e2e` — Playwright smoke зелёный
- [ ] `pnpm knip` — нет dead code
- [ ] `pnpm build` — сборка успешна

### Security
- [ ] `pnpm audit` — нет HIGH/CRITICAL CVEs
- [ ] Нет захардкоженных секретов (`git grep -E "sk_live|service_role|api_key" -- src/`)
- [ ] `.env.local` не закоммичен (`git ls-files | grep -E "^\.env"`)
- [ ] Security headers выставлены в `next.config.ts` и `src/proxy.ts`
- [ ] RLS включён на всех production таблицах Supabase

### Environment
- [ ] Все required env vars настроены в Vercel Dashboard
- [ ] `NEXT_PUBLIC_APP_URL` указывает на production домен
- [ ] `NEXT_PUBLIC_SENTRY_DSN` указан (или явно решено не использовать Sentry)
- [ ] `public/robots.txt` — Sitemap URL обновлён
- [ ] `public/llms.txt` — заполнен

### UX
- [ ] `app/not-found.tsx` рендерится корректно
- [ ] `app/error.tsx` рендерится корректно
- [ ] `<Breadcrumbs />` на всех вложенных маршрутах
- [ ] Mobile responsiveness проверена (≤640px)

## Формат отчёта

```
## Deploy Check — <YYYY-MM-DD>

### ✅ Готово к деплою
<список того, что прошло>

### ❌ Блокирует деплой (исправить обязательно)
<блокеры с командами для воспроизведения>

### ⚠️ Рекомендуется исправить
<warnings — можно отложить>
```
