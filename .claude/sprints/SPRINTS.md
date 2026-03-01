# Sprint Management

Index of all sprints for the Hello Fiqryrev project.

## Sprint History

| Sprint | Folder | Status | Start Date | End Date | Goal | Phases |
|---|---|---|---|---|---|---|
| 1 | `sprint-1_2026-03-01/` | COMPLETED | 2026-03-01 | 2026-03-01 | Website revamp — dependency cleanup, performance, SEO, code quality | 8 (5 completed, 2 not started, 1 known issues) |
| 2 | `sprint-2/` | NOT STARTED | TBD | TBD | TBD | — |

## Sprint 1 Summary

Full website revamp covering dependency cleanup, Next.js 14→16 upgrade, image optimization, component performance, code architecture, and SEO/metadata. See [sprint-1_2026-03-01/000-progress-report.md](sprint-1_2026-03-01/000-progress-report.md) for full details.

**Completed phases:**
1. Dependency Cleanup — removed 10 packages, env vars for secrets
2. Image & Asset Optimization — compressed 7 images (~16MB→~850KB)
3. Component Performance — dynamic imports, visibility hooks, reduced motion
4. Code Quality & Architecture — data extraction, shared components, type safety
5. SEO & Metadata — sitemap, robots, OpenGraph, JSON-LD, per-page metadata

**Not started (carried to Sprint 2 backlog):**
- Phase 6: Accessibility — ARIA, keyboard nav, focus management
- Phase 7: CSS Cleanup & Infra — dedup CSS, error boundaries, security headers

## Sprint 2 Backlog

Pending items from Sprint 1 to consider:
- Phase 6 (Accessibility): ARIA labels, keyboard navigation, focus management, reduced-motion
- Phase 7 (CSS Cleanup & Infra): CSS deduplication, error boundaries, security headers
- Solution page shared components (documented in `.claude/docs/001-solution-page-template-analysis.md`)
- Test framework setup (Vitest + React Testing Library)
- CI/CD pipeline (`.github/workflows/`)

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
