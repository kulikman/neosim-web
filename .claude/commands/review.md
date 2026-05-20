# Command: /review

Полный code review текущей или указанной области кода.

## Использование

```
/review                           # review текущего открытого файла
/review src/app/coverage/         # review папки
/review security                  # security-focused review
```

## Что делает

1. Читает целевые файлы целиком (не сниппетами).
2. Применяет правила из `CLAUDE.md`:
   - TypeScript strict (no `any`, no `@ts-ignore`)
   - Server Components по умолчанию, `"use client"` только когда нужно
   - Tailwind v4 (тема в `globals.css`)
   - `getServerEnv()` / `getClientEnv()` вместо `process.env`
   - Breadcrumbs на всех вложенных маршрутах
   - Каноничные `href` через `ROUTES`
3. Проверяет безопасность: XSS / injection / leaked secrets / RLS для DB.
4. Выдаёт структурированный отчёт.

## Формат отчёта

```
## Code Review: <scope>

### ❌ Блокирует merge
- [файл:строка] — описание + предложенный фикс

### ⚠️ Предупреждения
- [файл:строка] — описание

### ✅ Хорошо
- что сделано правильно (1-2 пункта)

### 📝 Итог
1-2 предложения о том, готов ли код к merge.
```
