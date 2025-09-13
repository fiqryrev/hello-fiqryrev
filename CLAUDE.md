# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `npm run dev` - Start the Next.js development server
- **Build**: `npm run build` - Build the production application
- **Production**: `npm start` - Start the production server
- **Lint**: `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 14 portfolio website using the App Router architecture with the following structure:

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Content**: MDX for blog posts and articles
- **Animation**: Framer Motion for interactive animations
- **UI Components**: Custom components in `components/magicui/` and `components/ui/`

### Site Structure
- **Homepage**: Main landing page with hero, career highlights, work experience, and AI-built sections
- **Resources Section**: 
  - `/resources/blog/` - Blog posts written in MDX format
  - `/resources/academics/` - Academic content
  - `/resources/case-studies/` - Technical case studies
  - `/resources/contact-form/` - Contact form functionality
  - `/resources/speakership/` - Speaking engagements
- **Solutions Section**: Service offerings with individual pages for different data/AI solutions
- **About Page**: Additional information

### Component Architecture
- **Layout Components**: `Header`, `Footer`, `ScrollToTopButton` used in root layout
- **Page Components**: Located in `app/components/` for main page sections
- **Reusable UI**: Located in `components/ui/` and `components/magicui/`
- **Nested Layouts**: Each major section has its own layout component

### Styling System
- Uses Tailwind CSS with custom color variables and animations
- Dark theme with black background and white text as primary design
- Custom animations defined in `tailwind.config.ts` for special effects
- Component-specific CSS modules for specialized styling (e.g., `AIBuiltSection.module.css`)

### Content Management
- Blog posts are MDX files with frontmatter
- Images stored in `/public/images/` organized by category
- Static assets include videos and fonts in `/public/`

### Key Features
- MDX content rendering with GitHub Flavored Markdown
- Email integration via EmailJS
- Responsive design optimized for various screen sizes
- Custom UI components with animations and interactive elements