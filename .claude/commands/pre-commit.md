# Pre-Commit Check Command

Run pre-commit validation without committing. Use this to check code quality before running `/commit`.

## Instructions

1. Get list of changed files:
   ```bash
   git diff --cached --name-only --diff-filter=ACM
   git diff --name-only
   git status --short
   ```

2. Identify file types changed:
   ```bash
   # TypeScript/React files
   git diff --cached --name-only | grep -E "\.(tsx?|jsx?)$"

   # Style files
   git diff --cached --name-only | grep -E "\.(css|module\.css)$"

   # Content files
   git diff --cached --name-only | grep -E "\.mdx?$"

   # Config files
   git diff --cached --name-only | grep -E "(next\.config|tsconfig|package\.json|eslint)"
   ```

3. Run validation checks:

   **ESLint Check:**
   ```bash
   npm run lint
   ```

   **TypeScript + Build Check:**
   ```bash
   npm run build
   ```

   **Security Checks:**
   ```bash
   # Check for potential secrets in staged files
   git diff --cached --name-only | xargs grep -l -E "(password|secret|api_key|token|private_key|NEXT_PUBLIC_)\s*[:=]\s*['\"][^'\"]+['\"]" 2>/dev/null

   # Check for hardcoded API URLs (should be env vars)
   git diff --cached | grep -E "^\+.*https?://[a-z].*\.(com|io|dev|app)" | grep -v "localhost" | grep -v "github.com" | grep -v "vercel" | grep -v "claude.com" | head -5

   # Check for console.log (not allowed in committed code)
   git diff --cached | grep -E "^\+.*console\.log" | head -5

   # Check for raw <img> tags (must use next/image)
   git diff --cached | grep -E "^\+.*<img " | head -5

   # Check for unescaped apostrophes in JSX
   git diff --cached | grep -E "^\+.*>[^<]*'[^<]*<" | head -5
   ```

4. Report results in a structured format:

   ```
   Pre-Commit Check Results
   ========================

   ✓ ESLint .................. PASS / FAIL
   ✓ Build ................... PASS / FAIL
   ✓ Secrets scan ............ PASS / FAIL
   ✓ Console.log check ....... PASS / WARNING
   ✓ Hardcoded URLs .......... PASS / WARNING
   ✓ Raw img tags ............ PASS / WARNING
   ✓ Unescaped apostrophes ... PASS / WARNING

   Overall: READY TO COMMIT / ISSUES FOUND
   ```

5. If ALL checks pass:
   - Report "Pre-commit checks passed"
   - Suggest running `/commit` to proceed

6. If ANY blocking check fails:
   - Report specific failures with file references
   - Provide fix suggestions
   - Do NOT suggest committing

## Check Priority

| Check | Blocking | Description |
|-------|----------|-------------|
| npm run lint | Yes | ESLint with next/core-web-vitals + next/typescript |
| npm run build | Yes | TypeScript compilation, Next.js validation, MDX syntax |
| secrets scan | Yes | Credentials and API keys in source code |
| console.log | Warning | Must be removed before commit |
| hardcoded URLs | Warning | Should use environment variables |
| raw img tags | Warning | Must use next/image component |
| unescaped apostrophes | Warning | Will break build (react/no-unescaped-entities) |

## Common Issues and Fixes

### ESLint: Unescaped entities
```
Error: `'` can be escaped with `&apos;`
```
**Fix:** Replace `'` with `&apos;` in JSX text content, or move the string to a variable.

### Build: Hydration mismatch
```
Error: Text content does not match server-rendered HTML
```
**Fix:** Add `isMounted` guard pattern (see CLAUDE.md Architecture Rule 7).

### Build: Missing "use client" directive
```
Error: useState/useEffect only works in Client Components
```
**Fix:** Add `"use client"` at the top of the file. Only add it if the component genuinely needs client-side interactivity.

### Build: Image optimization
```
Error: Using `<img>` is not allowed. Use `next/image` instead.
```
**Fix:** Import `Image` from `next/image` and replace `<img>` tags with `<Image>` component, including `alt`, `width`, and `height` props.

### TypeScript: Implicit any
```
Error: Parameter 'x' implicitly has an 'any' type
```
**Fix:** Add explicit type annotation. If truly unavoidable, use `// eslint-disable-next-line @typescript-eslint/no-explicit-any` with a justification comment.

## Rules

- NEVER skip failing lint or build checks
- NEVER ignore secrets detection
- Console.log must be removed before committing
- Hardcoded URLs should be converted to environment variables
- All images must use `next/image` with meaningful `alt` text
