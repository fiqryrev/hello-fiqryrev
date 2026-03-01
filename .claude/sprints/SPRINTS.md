# Sprint Management

Index of all sprints for the Hello Fiqryrev project.

## Sprint History

| Sprint | Folder | Status | Start Date | End Date | Goal | Phases |
|---|---|---|---|---|---|---|
| 1 | `sprint-1_2026-03-01/` | COMPLETED | 2026-03-01 | 2026-03-01 | Website revamp — dependency cleanup, performance, SEO, code quality | 8 (5 completed, 2 not started, 1 known issues) |
| 2 | `sprint-2_2026-03-02/` | COMPLETED | 2026-03-02 | 2026-03-02 | Production env vars, PortfolioShowcase, accessibility, CSS cleanup, shared components, testing, CI/CD | 7 (all completed) |
| 3 | `sprint-3/` | NOT STARTED | TBD | TBD | TBD | TBD |

## Sprint 1 Summary

Full website revamp covering dependency cleanup, Next.js 14→16 upgrade, image optimization, component performance, code architecture, and SEO/metadata. See [sprint-1_2026-03-01/000-progress-report.md](sprint-1_2026-03-01/000-progress-report.md) for full details.

**Completed phases:**
1. Dependency Cleanup — removed 10 packages, env vars for secrets
2. Image & Asset Optimization — compressed 7 images (~16MB→~850KB)
3. Component Performance — dynamic imports, visibility hooks, reduced motion
4. Code Quality & Architecture — data extraction, shared components, type safety
5. SEO & Metadata — sitemap, robots, OpenGraph, JSON-LD, per-page metadata

**Not started (moved to Sprint 2):**
- Phase 6: Accessibility — ARIA, keyboard nav, focus management
- Phase 7: CSS Cleanup & Infra — dedup CSS, error boundaries, security headers

## Sprint 2 Summary

Full-scope sprint covering production deployment fix, homepage redesign, accessibility, infrastructure, testing, and CI/CD. See [sprint-2_2026-03-02/000-progress-report.md](sprint-2_2026-03-02/000-progress-report.md) for full details.

**Completed phases:**
1. Environment Variables & Security — clean `.env.example`, document Vercel env var setup
2. Portfolio Marketplace — archive RolePortfolio, create Apple-style PortfolioShowcase, reorder sections
3. Accessibility — ARIA labels, keyboard nav, focus management, skip link, reduced-motion guards
4. CSS Cleanup & Infra — dedup CSS, error boundaries, security headers, image pattern restriction
5. Solution Shared Components — extract SolutionHeader, MetricsGrid, GradientSeparator, SolutionCTA
6. Test Framework — bootstrap Vitest + React Testing Library, initial test suite (19 tests)
7. CI/CD Pipeline — GitHub Actions CI workflow, PR template, type-check script

## Sprint 3 Summary

Upcoming sprint. See [sprint-3/000-progress-report.md](sprint-3/000-progress-report.md) for template.

**Status:** Not started. Run "Plan sprint 3" to define scope and create phase files.

## Folder Convention

```
.claude/sprints/
├── SPRINTS.md                        ← this file (sprint index)
├── sprint-{N}_{YYYY-MM-DD}/          ← completed/active sprints (date = start date)
│   ├── 000-progress-report.md        ← status tracker and detailed log
│   ├── 001-{phase-name}.md           ← phase plan files
│   ├── ...
│   └── NNN-known-issues.md           ← bugs discovered during sprint
└── sprint-{N}/                       ← upcoming sprints (no date until started)
    ├── 000-progress-report.md        ← template with TBD fields
    └── 001-known-issues.md           ← carried over issues
```

**When starting a new sprint:**
1. Rename `sprint-{N}/` → `sprint-{N}_{YYYY-MM-DD}/` with the start date
2. Fill in the progress report fields (goal, baseline metrics)
3. Create phase plan files (`002-*.md`, `003-*.md`, etc.)
4. Update this SPRINTS.md with status and goal
