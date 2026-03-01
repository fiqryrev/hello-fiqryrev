# Claude Code Commands for Hello Fiqryrev

Reusable prompt commands (slash commands) for Claude Code, tailored to the Next.js portfolio project.

## Available Commands

### Git Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/commit` | Create standardized git commit | After making changes |
| `/pr` | Create GitHub Pull Request | Ready to merge to main |
| `/pre-commit` | Validate changes without committing | Before committing |

---

## Command Details

### `/commit`

Creates a well-formatted git commit following conventional commit conventions.

**Process:**
1. Analyzes git changes and detects affected area
2. Runs `npm run lint` validation
3. Checks for secrets, console.log, and hardcoded URLs
4. Creates commit with proper format

**Commit Format:**
```
<type>: <subject>
```

**Examples:**
```
feat: add speaking engagement section to homepage
fix: resolve hydration mismatch in ScrollToTopButton
refactor: extract career data to app/data module
chore: update framer-motion to v12
```

---

### `/pr`

Creates a GitHub Pull Request with documentation and test plan.

**Process:**
1. Checks for uncommitted changes
2. Runs `npm run lint` and `npm run build`
3. Pushes branch to remote
4. Creates PR with formatted body (summary, changes, test plan, checklist)

**PR Body Includes:**
- Summary of changes
- Components/pages affected
- Test plan checklist (lint, build, responsive, hydration)
- Convention compliance checklist

---

### `/pre-commit`

Validates changes without committing. Runs all quality gates and reports results.

**Checks Performed:**
- `npm run lint` — ESLint (next/core-web-vitals + next/typescript)
- `npm run build` — TypeScript, Next.js validation, MDX syntax
- Secrets scan — credentials and API keys
- console.log detection — not allowed in committed code
- Hardcoded URL detection — should use env vars
- Raw `<img>` tag detection — must use `next/image`
- Unescaped apostrophe detection — breaks build

---

## Typical Workflows

### Adding a New Homepage Section

```
1. Create component in app/components/{N}-{Name}.tsx
2. Add to app/page.tsx
3. /pre-commit              # Validate
4. /commit                  # Commit changes
5. /pr                      # Create PR
```

### Bug Fix

```
1. Identify and fix the issue
2. Verify on localhost:3000
3. /pre-commit              # Validate
4. /commit                  # Commit fix
5. /pr                      # Create PR
```

### Adding a New Page/Route

```
1. Create app/{route}/page.tsx (and layout.tsx if needed)
2. Add navigation link in Header
3. /pre-commit              # Validate
4. /commit                  # Commit changes
5. /pr                      # Create PR
```

### Content Update (Blog Post)

```
1. Create/edit .mdx file in app/resources/blog/
2. Add images to public/images/articles/
3. /pre-commit              # Validate
4. /commit                  # Commit content
5. /pr                      # Create PR
```

---

## Commit Type Reference

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature or section | `feat: add testimonials section` |
| `fix` | Bug fix | `fix: hydration mismatch in header` |
| `docs` | Documentation | `docs: update CLAUDE.md conventions` |
| `refactor` | Code improvement | `refactor: extract data to typed module` |
| `style` | Formatting/styling | `style: reformat tailwind classes` |
| `chore` | Config/dependencies | `chore: update dependencies` |
| `perf` | Performance | `perf: lazy-load Spline 3D scene` |

---

## Quality Gates

| Gate | Command | Blocking |
|------|---------|----------|
| ESLint | `npm run lint` | Yes |
| Build | `npm run build` | Yes |
| Secrets | grep scan | Yes |
| console.log | grep scan | Warning |

---

## File Structure

```
.claude/
├── CLAUDE.md                    # Project coding standards
└── commands/
    ├── README.md                # This file
    ├── commit.md                # Git commit command
    ├── pr.md                    # Pull request command
    └── pre-commit.md            # Pre-commit validation
```

---

## Related Documentation

| Document | Purpose |
|----------|---------|
| `.claude/CLAUDE.md` | Project coding standards and architecture rules |
| `README.md` | Project overview and setup |
| `eslint.config.mjs` | ESLint configuration |
| `tsconfig.json` | TypeScript configuration |

---

*Last updated: March 2026*
