# Phase 1 — Dependency Cleanup

Remove unused packages, externalize hardcoded secrets, strip debug logging, fix broken link.

## Tasks

### 1.1 Remove confirmed-unused dependencies

Each package below has **zero imports** across the entire codebase. Remove all in one command.

```bash
npm uninstall @xenova/transformers cobe react-spring express multer pdf-parse mongodb @qdrant/js-client-rest ai cors critters
```

| Package | Why unused | Approx size |
|---|---|---|
| `@xenova/transformers` | No imports. ONNX ML runtime never integrated. | ~100MB |
| `cobe` | No imports. 3D globe lib never used. | ~50KB |
| `react-spring` | No imports. Framer Motion handles all animations. | ~100KB |
| `express` | No imports. Next.js App Router handles all routing. | ~50KB |
| `multer` | No imports. No file upload API routes exist. | ~35KB |
| `pdf-parse` | No imports. No PDF processing code. | ~200KB |
| `mongodb` | No imports. No database connection code. | ~400KB |
| `@qdrant/js-client-rest` | No imports. No vector DB integration. | ~50KB |
| `ai` (Vercel AI SDK) | No imports. Chatbot uses raw fetch. | ~150KB |
| `cors` | No imports. Express CORS middleware, no Express. | ~10KB |
| `critters` | No imports. May conflict with Next.js CSS optimization. | ~20KB |

**Post-task:** Run `npm run build` to confirm nothing breaks.

---

### 1.2 Move chatbot endpoint to environment variable

**File:** `app/services/chatbot.ts`

**Current (lines 10-12):**
```typescript
const response = await fetch(
  "http://149.28.152.97:3000/api/v1/prediction/ae18fce5-eda7-4163-9eee-5cc5b7cd3a08",
```

**Replace with:**
```typescript
const CHATBOT_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

if (!CHATBOT_URL) {
  throw new Error("NEXT_PUBLIC_CHATBOT_API_URL is not configured");
}

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 10000);

try {
  const response = await fetch(CHATBOT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: message }),
    signal: controller.signal,
  });
  // ...
} finally {
  clearTimeout(timeout);
}
```

**Also:** Add to `.env.example`:
```
NEXT_PUBLIC_CHATBOT_API_URL=http://149.28.152.97:3000/api/v1/prediction/ae18fce5-eda7-4163-9eee-5cc5b7cd3a08
```

---

### 1.3 Move EmailJS keys to environment variables

**File:** `app/resources/contact-form/contact-form.tsx`

Find the hardcoded EmailJS `serviceId`, `templateId`, and `publicKey` values. Replace with:
```typescript
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
```

**Add to `.env.example`:**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 1.4 Remove console.log from production code

| File | Lines | Action |
|---|---|---|
| `app/resources/contact-form/page.tsx` | ~11 | Delete `console.log` |
| `app/resources/contact-form/contact-form.tsx` | ~7 | Delete `console.log` |
| `app/components/1-HeroSectionNew.tsx` | ~201, 230, 234, 236 | Delete all `console.log` calls |

Keep `console.error` in catch blocks — those are acceptable.

---

### 1.5 Fix broken footer link

**File:** `app/components/0-Footer.tsx` (line 56)

**Current:** `href="/resources/blogs"`
**Fix:** `href="/resources/blog"`

The actual blog route is `/resources/blog` (no trailing 's').

---

## Verification Checklist

- [ ] `npm run lint` — zero warnings
- [ ] `npm run build` — succeeds with no errors
- [ ] `npm run dev` — homepage loads correctly
- [ ] Chatbot input works (with env var configured in `.env.local`)
- [ ] Contact form renders (EmailJS keys in `.env.local`)
- [ ] Footer "Blog" link navigates to `/resources/blog`
- [ ] No `console.log` output in browser DevTools on page load
- [ ] `du -sh node_modules` — size decreased significantly
