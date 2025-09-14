# Build Standards & Code Quality Guide
## Fiqryrev Portfolio Website

This document outlines the build standards, linting rules, and code quality guidelines to ensure error-free builds and consistent code quality across the project.

---

## 🚀 Quick Build Checklist

Before committing or deploying, ensure:

- [ ] Run `npm run build` successfully
- [ ] No ESLint errors or warnings
- [ ] No TypeScript errors
- [ ] All imports are used
- [ ] All apostrophes are properly escaped
- [ ] No `any` types without proper typing
- [ ] All React components have proper types

---

## 📋 Common Build Errors & Solutions

### 1. Apostrophe/Quote Errors

#### ❌ INCORRECT
```tsx
// In JSX/TSX files
<p>Let's build something amazing</p>
<p>I'll help you with that</p>
<p>It's working perfectly</p>
<span>Don't worry about it</span>
```

#### ✅ CORRECT
```tsx
// Use HTML entities in JSX
<p>Let&apos;s build something amazing</p>
<p>I&apos;ll help you with that</p>
<p>It&apos;s working perfectly</p>
<span>Don&apos;t worry about it</span>

// Or use backticks for strings
<p>{`Let's build something amazing`}</p>

// Or extract to variables
const message = "Let's build something amazing";
<p>{message}</p>
```

### 2. Unused Imports

#### ❌ INCORRECT
```tsx
import { Search, Database, Server, Code } from 'lucide-react';
// But only using Search and Database in the component
```

#### ✅ CORRECT
```tsx
import { Search, Database } from 'lucide-react';
// Only import what you actually use
```

### 3. TypeScript `any` Type

#### ❌ INCORRECT
```tsx
interface Tool {
  icon: any;  // ESLint will flag this
  data: any;
}

const handleClick = (event: any) => {
  // ...
}
```

#### ✅ CORRECT
```tsx
import { LucideIcon } from 'lucide-react';

interface Tool {
  icon: LucideIcon;           // For Lucide icons
  // or
  icon: React.ElementType;    // For any React component
  // or
  icon: React.FC;            // For functional components
  data: Record<string, unknown>; // For objects
}

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // ...
}
```

### 4. Missing Return Types

#### ❌ INCORRECT
```tsx
const MyComponent = () => {
  return <div>Content</div>;
};
```

#### ✅ CORRECT
```tsx
const MyComponent: React.FC = () => {
  return <div>Content</div>;
};

// Or with props
interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};
```

---

## 🛠 Pre-Build Validation Script

Add this to your `package.json`:

```json
{
  "scripts": {
    "prebuild": "npm run lint && npm run type-check",
    "build": "next build",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 📝 ESLint Configuration

Ensure your `.eslintrc.json` has these rules:

```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "@typescript-eslint/no-explicit-any": "error",
    "react/no-unescaped-entities": "error",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error"
  }
}
```

---

## 🔍 Common Patterns for Clean Builds

### Import Organization

```tsx
// 1. React/Next imports
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Brain, Zap, Shield } from 'lucide-react';

// 3. Local components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 4. Types/Interfaces
import type { Tool, Project } from '@/types';

// 5. Styles/Assets
import styles from './Component.module.css';
```

### Component Structure

```tsx
// Define interfaces at the top
interface ComponentProps {
  title: string;
  description?: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Component with proper typing
const MyComponent: React.FC<ComponentProps> = ({
  title,
  description = 'Default description',
  items
}) => {
  // Hooks first
  const [selected, setSelected] = useState<string>('');
  const router = useRouter();

  // Handler functions
  const handleSelect = (id: string): void => {
    setSelected(id);
  };

  // Render
  return (
    <div className="container">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} onClick={() => handleSelect(item.id)}>
            <Icon className="w-6 h-6" />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MyComponent;
```

---

## 🎨 String Content Guidelines

### Text Content in Components

```tsx
// ❌ AVOID: Inline text with apostrophes
<p>Let's get started with today's project</p>

// ✅ PREFERRED: Use constants for text content
const CONTENT = {
  heading: "Let's get started with today's project",
  // Or use template literals
  subheading: `We'll help you build amazing things`,
  // Or use HTML entities directly
  description: "Let&apos;s build together"
};

// Then use in component
<p>{CONTENT.heading}</p>

// ✅ ALTERNATIVE: Extract to content files
// content/homepage.ts
export const homepageContent = {
  hero: {
    title: "Build Amazing Products",
    subtitle: "Let's transform your ideas into reality"
  }
};
```

### Dynamic Text Handling

```tsx
// For dynamic content with potential apostrophes
const formatMessage = (text: string): string => {
  return text
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

// Or use a utility function
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};
```

---

## 🧪 Pre-commit Hooks

Install husky and lint-staged:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Add to `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

---

## 📊 Build Verification Commands

### Complete Build Check
```bash
# Run all checks
npm run lint && npm run type-check && npm run build

# Fix linting issues automatically
npm run lint:fix

# Check types only
npm run type-check

# Build production
npm run build
```

### Quick Validation Script

Create `scripts/validate-build.sh`:

```bash
#!/bin/bash

echo "🔍 Running build validation..."

# Check for unescaped apostrophes
echo "Checking for unescaped apostrophes..."
grep -r ">[^<]*'[^<]*<" --include="*.tsx" --include="*.jsx" app/ components/

# Check for unused imports
echo "Checking for unused imports..."
npm run lint

# Check TypeScript
echo "Checking TypeScript..."
npm run type-check

# Test build
echo "Testing build..."
npm run build

echo "✅ Build validation complete!"
```

---

## 🚨 Troubleshooting Build Errors

### Error: `'Component' is defined but never used`

**Solution:**
```tsx
// Remove the import
// import { UnusedComponent } from './components';

// Or prefix with underscore if intentionally unused
import { _UnusedComponent } from './components';
```

### Error: `Unexpected any. Specify a different type`

**Solution:**
```tsx
// Instead of
const data: any = fetchData();

// Use proper typing
interface DataType {
  id: string;
  value: number;
}
const data: DataType = fetchData();

// Or if type is truly unknown
const data: unknown = fetchData();

// For events
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
```

### Error: `can be escaped with &apos;`

**Solution:**
```tsx
// Search and replace in your IDE
// Find: '
// Replace with: &apos;

// Common replacements:
"don't" → "don&apos;t"
"it's" → "it&apos;s"
"we'll" → "we&apos;ll"
"I'm" → "I&apos;m"
"let's" → "let&apos;s"
```

---

## 📁 File Naming Conventions

```
app/
  solutions/
    web-development/
      page.tsx          ✅ Lowercase with hyphens
    DataAnalytics/
      page.tsx          ❌ Avoid PascalCase for folders

components/
  Header.tsx           ✅ PascalCase for components
  header.tsx           ❌ Avoid lowercase for components

lib/
  utils.ts             ✅ Lowercase for utilities
  api-client.ts        ✅ Hyphenated for multi-word

types/
  index.ts             ✅ Main types file
  user.types.ts        ✅ Specific type files
```

---

## 🔄 CI/CD Build Configuration

### GitHub Actions Example

`.github/workflows/build.yml`:

```yaml
name: Build and Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Build
        run: npm run build

      - name: Check for unescaped entities
        run: |
          if grep -r ">[^<]*'[^<]*<" --include="*.tsx" app/; then
            echo "Found unescaped apostrophes!"
            exit 1
          fi
```

---

## ✅ Build Success Checklist

Before pushing to production:

1. **Code Quality**
   - [ ] No ESLint errors (`npm run lint`)
   - [ ] No TypeScript errors (`npm run type-check`)
   - [ ] All imports are used
   - [ ] No `any` types without justification

2. **Content**
   - [ ] All apostrophes escaped with `&apos;`
   - [ ] All quotes properly handled
   - [ ] No hardcoded strings with special characters in JSX

3. **Performance**
   - [ ] Images optimized and using Next.js Image component
   - [ ] No console.log statements in production code
   - [ ] Bundle size checked

4. **Testing**
   - [ ] `npm run build` succeeds
   - [ ] `npm run dev` runs without errors
   - [ ] No browser console errors

5. **Deployment**
   - [ ] Environment variables set
   - [ ] API endpoints configured
   - [ ] Build tested on staging

---

## 📚 Resources

- [Next.js ESLint](https://nextjs.org/docs/basic-features/eslint)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🔄 Version History

- **v1.0.0** (2024-01-14): Initial build standards documentation
- Created to prevent common build errors and ensure code quality
- Companion to `design-pattern.md`

---

*Follow these standards to ensure smooth builds and deployments across all environments.*