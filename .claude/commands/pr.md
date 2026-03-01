# Create Pull Request Command

Create GitHub Pull Requests following Hello Fiqryrev project conventions.

## Quick Workflow

```
feature/xyz  →  main
    ↑            ↑
  Work here    Production (Vercel auto-deploys)
```

## Instructions

### 1. Pre-Requisite: Check GitHub Account

Ensure you're on the correct GitHub account:

```bash
gh auth status
# If needed: gh auth switch or gh auth login
```

### 2. Analyze Branch State

```bash
git branch --show-current      # Current branch
git status                      # Uncommitted changes?
git log --oneline -10           # Recent commits
git fetch origin                # Sync with remote
```

**Determine target branch:**
| Current Branch | Target Branch |
|----------------|---------------|
| `feature/*` | `main` |
| `fix/*` | `main` |
| `refactor/*` | `main` |
| `chore/*` | `main` |

### 3. Run Quality Gates

Before creating the PR, ensure the code passes all checks:

```bash
# Lint check (zero warnings policy)
npm run lint

# Build check (primary quality gate)
npm run build
```

If either fails, fix the issues before creating the PR.

### 4. Prepare and Create PR

**If uncommitted changes exist:**
- Ask user to commit first (use `/commit` command) or stash

**Push branch if needed:**
```bash
git push -u origin $(git branch --show-current)
```

**Get PR commits:**
```bash
# List commits that will be in PR
git log origin/main..HEAD --oneline

# Get diff summary
git diff origin/main...HEAD --stat
```

**Create PR:**
```bash
gh pr create --base main --head $(git branch --show-current) \
  --title "<type>: <subject>" \
  --body "$(cat <<'EOF'
## Summary

<1-3 bullet points summarizing changes>

## Changes

### Components Added/Modified
- `ComponentName` — description of change

### Pages/Routes Affected
- `/route-path` — description of change

### Other Changes
- Config, styling, content, or infrastructure changes

## Screenshots

<If UI changes, add before/after screenshots or describe visual changes>

## Test Plan

- [ ] `npm run lint` passes (zero warnings)
- [ ] `npm run build` succeeds
- [ ] Verified on localhost:3000
- [ ] Responsive: tested on mobile, tablet, desktop viewports
- [ ] No hydration warnings in browser console
- [ ] Images have meaningful alt text

## Checklist

- [ ] Follows project conventions (CLAUDE.md)
- [ ] No `console.log` in committed code
- [ ] No hardcoded API URLs or credentials
- [ ] `"use client"` only where necessary
- [ ] `cn()` used for all class merging
- [ ] `next/image` used for all images

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**PR Title Format:** `<type>: <subject>`
- Types: feat, fix, docs, refactor, style, chore, perf
- Subject: imperative mood, lowercase, no period, max 72 chars

### 5. After PR Creation

```bash
gh pr view --web  # Open PR in browser
```

Return the PR URL to the user.

## Examples

**Adding new homepage section:**
```
feat: add testimonials section to homepage
```

**Fixing a component bug:**
```
fix: resolve hydration mismatch in career highlights
```

**Updating styling:**
```
style: redesign mobile navigation menu
```

**Multiple areas:**
```
feat: add case study page with MDX support
```

## PR Body Examples

### Adding a New Component

```markdown
## Summary
- Add AI-built portfolio section (section 5) to homepage
- Includes animated grid pattern and project cards
- Responsive layout with glassmorphism cards

## Changes

### Components Added
- `5-AIBuiltSection.tsx` — new homepage section showcasing AI-built projects

### Pages/Routes Affected
- `/` (homepage) — added section 5 below RolePortfolio

## Test Plan
- [x] `npm run lint` passes
- [x] `npm run build` succeeds
- [x] Responsive layout verified (mobile, tablet, desktop)
- [x] Animations respect prefers-reduced-motion
```

### Fixing a Bug

```markdown
## Summary
- Fix unescaped apostrophe causing build failure in about page
- Update text to use `&apos;` entity

## Changes

### Pages/Routes Affected
- `/about` — fixed JSX text escaping

## Test Plan
- [x] `npm run build` succeeds (was failing before)
- [x] Text renders correctly on page
```

## Rules

- NEVER create PR with uncommitted changes
- ALWAYS run `npm run lint` and `npm run build` before creating PR
- ALWAYS analyze ALL commits in the PR, not just the latest
- ALWAYS include components/pages affected in PR body
- ALWAYS mention UI/visual changes with description
- Pushing to `main` triggers Vercel production deployment — PRs are the safety net
- Ask user before creating PR if changes are ambiguous

## Quick Reference

| Command | Description |
|---------|-------------|
| `gh pr create` | Create new PR |
| `gh pr list` | List open PRs |
| `gh pr view` | View current PR |
| `gh pr view --web` | Open PR in browser |
| `gh pr merge --merge` | Merge PR |
| `gh pr close` | Close PR without merging |
