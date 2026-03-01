Phase 6 plan for Sprint 2: bootstrap Vitest + React Testing Library test framework.

## Overview

The project has zero test files, no test runner, and no testing dependencies. CLAUDE.md specifies Vitest + React Testing Library as the target stack with tests in `__tests__/` mirroring `app/` structure. This phase installs the framework, creates the config, adds initial test files for critical paths, and adds a `test` script to `package.json`.

## Tasks

### 6.1 — Install test dependencies

```bash
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

| Package | Purpose |
|---|---|
| `vitest` | Test runner (Vite-native, fast, ESM-first) |
| `@vitejs/plugin-react` | React JSX transform for Vitest |
| `@testing-library/react` | `render`, `screen`, `fireEvent` for React components |
| `@testing-library/jest-dom` | Custom matchers (`toBeInTheDocument`, `toHaveAttribute`, etc.) |
| `@testing-library/user-event` | Simulates real user interactions (click, type, tab) |
| `jsdom` | Browser environment for component tests |

### 6.2 — Create Vitest config

**New file:** `vitest.config.ts`

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./__tests__/setup.ts"],
    include: ["__tests__/**/*.test.{ts,tsx}"],
    css: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
```

Key decisions:
- `globals: true` — allows `describe`, `it`, `expect` without explicit import (matches Jest convention, reduces boilerplate)
- `css: false` — skip CSS processing in tests (Tailwind classes don't need to resolve)
- `@` alias matches `tsconfig.json` path alias

### 6.3 — Create test setup file

**New file:** `__tests__/setup.ts`

```typescript
import "@testing-library/jest-dom/vitest";
```

Registers custom matchers (`toBeInTheDocument`, `toHaveTextContent`, `toBeVisible`, etc.) globally.

### 6.4 — Add `test` scripts to `package.json`

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

### 6.5 — Create initial test files

Target: utility functions and one service function. No component rendering tests yet (those depend on Phase 3 accessibility fixes for meaningful assertions).

**`__tests__/lib/utils.test.ts`** — test `cn()` utility:
- Merges classes correctly
- Handles conditional classes
- Resolves Tailwind conflicts via twMerge

**`__tests__/app/services/chatbot.test.ts`** — test `queryChatbot()`:
- Returns parsed response on success (mock fetch)
- Throws on missing env var
- Throws on HTTP error status
- Aborts on timeout (mock AbortController)

**`__tests__/app/data/portfolio-projects.test.ts`** — test data integrity:
- All projects have required fields
- Exactly 1 featured project per category
- All slugs are unique
- `detailRoute` values are valid paths or null

### 6.6 — Add `__tests__/` to `.eslintignore` or ESLint config

Update `eslint.config.mjs` to include test files with appropriate rules (allow `any` in test mocks if needed, recognize `describe`/`it`/`expect` globals).

### 6.7 — Update `tsconfig.json`

Add Vitest types so `describe`, `it`, `expect` are recognized by TypeScript:

```json
"compilerOptions": {
  "types": ["vitest/globals"]
}
```

The existing `include: ["**/*.ts", "**/*.tsx"]` already covers `__tests__/`.

## Files Changed

| Action | File |
|---|---|
| Modify | `package.json` — add test deps + scripts |
| Create | `vitest.config.ts` |
| Create | `__tests__/setup.ts` |
| Create | `__tests__/lib/utils.test.ts` |
| Create | `__tests__/app/services/chatbot.test.ts` |
| Create | `__tests__/app/data/portfolio-projects.test.ts` |
| Modify | `eslint.config.mjs` — test file support |
| Modify | `tsconfig.json` — Vitest globals type |

## Verification

1. `npm run test` — all tests pass
2. `npm run lint` — zero warnings (including test files)
3. `npm run build` — must still pass (test files should not affect build)

## Commit

```
feat: bootstrap Vitest + React Testing Library with initial test suite
```
