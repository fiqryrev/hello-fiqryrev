Phase 7 plan for Sprint 2: GitHub Actions CI/CD pipeline.

## Overview

The project has no `.github/` directory and no CI/CD pipeline. Vercel handles production deployment via GitHub connector, but there is no automated quality gate on pull requests — lint, type checking, build, and tests are only run manually. This phase creates a GitHub Actions workflow that runs on every PR and push to `main`.

## Tasks

### 7.1 — Create CI workflow

**New file:** `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Lint, Type Check, Test, Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npx tsc --noEmit

      - name: Test
        run: npm run test

      - name: Build
        run: npm run build
```

Key decisions:
- **Single job, sequential steps.** Lint → type check → test → build. Fail-fast — if lint fails, no point running tests.
- **`concurrency` with `cancel-in-progress`** — if you push again while CI is running, the previous run is cancelled.
- **`npm ci`** (not `npm install`) — deterministic installs from `package-lock.json`, faster in CI.
- **Node 20** — matches Vercel's default runtime.
- **No deployment step** — Vercel handles deployment via its GitHub integration. This workflow is purely a quality gate.

### 7.2 — Add type check script to `package.json`

```json
"scripts": {
  "type-check": "tsc --noEmit"
}
```

This allows running type checking independently of the build. The CI workflow can use either `npm run type-check` or `npx tsc --noEmit` directly.

### 7.3 — Create PR template

**New file:** `.github/pull_request_template.md`

```markdown
## Summary

<!-- Brief description of what this PR does -->

## Changes

<!-- List of key changes -->

## Testing

<!-- How was this tested? -->
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] `npm run test` passes
- [ ] Visually verified on localhost

## Screenshots

<!-- If applicable, add screenshots -->
```

### 7.4 — Verify workflow runs

After pushing the workflow file:
1. Create a test branch with a trivial change
2. Open a PR against `main`
3. Verify the CI workflow triggers and passes all steps
4. Verify the workflow also triggers on push to `main`

## Files Changed

| Action | File |
|---|---|
| Create | `.github/workflows/ci.yml` |
| Create | `.github/pull_request_template.md` |
| Modify | `package.json` — add `type-check` script |

## Verification

1. Push workflow to a feature branch
2. Open PR — CI should trigger automatically
3. All 4 steps pass: lint, type check, test, build
4. PR shows green check from GitHub Actions
5. Merge to `main` — CI runs again on push

## Commit

```
feat: add GitHub Actions CI pipeline with lint, type check, test, and build
```
