Phase 1 plan for Sprint 2: sanitize exposed credentials and enable production deployment.

## Overview

The chatbot (`app/services/chatbot.ts`) and contact form (`app/resources/contact-form/contact-form.tsx`) don't work in Vercel production because `NEXT_PUBLIC_*` environment variables only exist in `.env.local`. Additionally, `.env.example` has real credentials committed to the public GitHub repository.

No code changes needed — the app already reads from `process.env.NEXT_PUBLIC_*` correctly (resolved in Sprint 1). The fix is purely operational.

## Tasks

### 1.1 — Clean `.env.example`

**File:** `.env.example`

Replace real credential values with descriptive placeholders:

| Variable | Current (real value) | New (placeholder) |
|---|---|---|
| `GEMINI_API_KEY` | `your_api_key_here` | `your_gemini_api_key_here` (already OK) |
| `NEXT_PUBLIC_CHATBOT_API_URL` | `http://149.28.152.97:3000/api/v1/prediction/ae18fce5-...` | `https://your-flowise-host/api/v1/prediction/your-flow-id` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `hellofiqryrev_email` | `your_emailjs_service_id` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `hellofiqryrev_contactme` | `your_emailjs_template_id` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `znZf-mzsyCBJ9qDzb` | `your_emailjs_public_key` |

Add inline comments with where to find each value (Flowise dashboard, EmailJS dashboard, Google AI Studio).

### 1.2 — Add environment variables to Vercel dashboard (user manual step)

This is a manual step performed by the project owner:

1. Go to Vercel dashboard → select `hello-fiqryrev` project
2. Navigate to **Settings > Environment Variables**
3. Add each variable with the real value from `.env.local`:
   - `NEXT_PUBLIC_CHATBOT_API_URL` — scope: Production + Preview
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — scope: Production + Preview
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — scope: Production + Preview
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — scope: Production + Preview
4. Trigger a redeploy (push to `main` or click Redeploy in Vercel dashboard)

**Important:** `NEXT_PUBLIC_*` variables are baked into the JavaScript bundle at `next build` time. They must exist in the Vercel environment _before_ the build runs. Changing a value later requires a new deployment.

## Verification

- `.env.example` contains no real credentials (visual inspection)
- `npm run build` still passes (no code changes, but confirm no regressions)
- After Vercel env vars are set + redeployed: chatbot responds, contact form sends email

## Commit

```
fix: replace real credentials with placeholders in .env.example
```
