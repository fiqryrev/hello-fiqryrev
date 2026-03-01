# Git Commit Command

Create a well-formatted git commit following Hello Fiqryrev project conventions.

## Instructions

### Phase 1: Analyze Changes

1. Run these commands in parallel to understand current state:
   - `git status` — see all changes
   - `git diff --staged` — see staged changes
   - `git diff` — see unstaged changes
   - `git log --oneline -5` — see recent commit style

2. Analyze the changes and determine:
   - What files were modified/added/deleted
   - Which area is affected (component, page, style, config, content, lib, service)
   - The nature of changes (feat, fix, docs, refactor, style, chore, perf)

3. Stage appropriate files:
   - Use `git add <files>` for specific files
   - NEVER stage sensitive files (.env, .env.local, credentials)
   - NEVER stage generated files (.next/, node_modules/, *.tsbuildinfo)

### Phase 2: Pre-Commit Checks

4. Run validation checks on staged files:

   **Lint Check (if any .tsx, .ts, .css files staged):**
   ```bash
   npm run lint
   # If lint fails, report errors and STOP
   ```

   **Build Check (recommended for significant changes):**
   ```bash
   npm run build
   # If build fails, report errors and STOP
   ```

   **Security Checks:**
   ```bash
   # Check for potential secrets in staged files
   git diff --cached --name-only | xargs grep -l -E "(password|secret|api_key|token|private_key|NEXT_PUBLIC_)\s*[:=]\s*['\"][^'\"]+['\"]" 2>/dev/null

   # Check for hardcoded URLs (should be env vars)
   git diff --cached | grep -E "https?://[a-z].*\.(com|io|dev|app)" | grep -v "localhost" | grep -v "github.com" | grep -v "vercel" | grep -v "claude.com" | head -5

   # Check for console.log (not allowed in committed code)
   git diff --cached | grep -E "^\+.*console\.log" | head -5
   ```

5. Handle check results:
   - If lint fails, report errors and STOP (do not commit)
   - If build fails, report errors and STOP
   - If secrets detected, report and STOP
   - If console.log found, warn user (should be removed)
   - Hardcoded URLs are warnings (should use env vars)

### Phase 3: Commit

6. Create commit message following conventional commits:
   ```
   <type>: <subject>
   ```

   **Types**: feat, fix, docs, refactor, style, chore, perf
   **Subject**: imperative mood, lowercase, no period, max 72 chars

7. Commit using HEREDOC format:
   ```bash
   git commit -m "$(cat <<'EOF'
   <type>: <subject>

   <optional body — explain WHY, not WHAT>

   Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

8. Run `git status` to verify commit success.

## Examples

```
feat: add speaking engagement section to homepage
feat: add error boundary for solutions pages
fix: resolve hydration mismatch in ScrollToTopButton
fix: unescaped apostrophe breaking build in about page
docs: update CLAUDE.md with testing conventions
refactor: extract career data to app/data module
refactor: move inline tech stack to typed data file
style: reformat tailwind classes in Header component
chore: update framer-motion to v12
chore: add sitemap.ts and robots.ts
perf: lazy-load Spline 3D scene on hero section
```

## Area Detection

| Path Contains | Area |
|---------------|------|
| `app/components/` | component |
| `app/page.tsx`, `app/*/page.tsx` | page |
| `app/layout.tsx`, `app/*/layout.tsx` | layout |
| `app/data/` | data |
| `app/services/` | service |
| `app/styles/`, `app/globals.css` | style |
| `app/resources/blog/*.mdx` | content |
| `components/ui/` | ui |
| `components/magicui/` | animation |
| `lib/` | lib |
| `public/` | asset |
| `next.config.*`, `tsconfig.*`, `package.json` | config |
| `.claude/` | docs |

## Check Priority

| Check | Blocking | Auto-fix |
|-------|----------|----------|
| npm run lint | Yes | No |
| npm run build | Yes (for significant changes) | No |
| secrets scan | Yes | No |
| console.log detection | Warning | No |
| hardcoded URLs | Warning | No |

## Rules

- NEVER commit without reviewing changes first
- NEVER use `--no-verify` or skip hooks
- NEVER commit .env.local, secrets, or credentials
- NEVER amend pushed commits without explicit request
- NEVER skip failing lint or build
- If lint/build fails, fix errors and retry
- Ask user before committing if changes are ambiguous
