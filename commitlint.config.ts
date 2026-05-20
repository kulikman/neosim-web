import type { UserConfig } from "@commitlint/types";

/**
 * Commitlint — Conventional Commits gate.
 *
 * Types: feat | fix | refactor | chore | docs | test | perf | ci | style | build
 * Breaking changes: `feat!: ...` or `BREAKING CHANGE:` footer.
 */
const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "scope-enum": [
      1,
      "always",
      ["ui", "auth", "api", "db", "ci", "deps", "config", "docs", "blog", "coverage", "home"],
    ],
  },
};

export default config;
