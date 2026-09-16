# DESIGN.md Catalog (74 bundled brand design systems)

> Source: `awesome-design-md` by VoltAgent (MIT) - https://github.com/VoltAgent/awesome-design-md
> DESIGN.md is a Google Stitch convention: a plain-markdown design system doc that agents read
> to generate visually consistent UI. See ATTRIBUTION.md.

## What these are

Each entry is a full extracted design system for a real product: color tokens, type scale,
spacing, elevation, shape, component specs, and do's/don'ts. Each file is 25-45 KB.
**Read at most one or two per task.** They are large; loading five will crowd out the actual work.

## How to use one

1. Match the user's stated reference ("make it feel like Linear", "Vercel-style", "Stripe-clean")
   to a slug below. If the user names a brand that is NOT in this list, do not substitute a
   different brand silently - say so and either pick the nearest match with the reason stated,
   or author a fresh DESIGN.md from `assets/DESIGN.template.md`.
2. Read `references/design-md/<slug>/DESIGN.md`.
3. Treat it as **token source, not layout source**. Take colors, type scale, radii, elevation,
   and component rules. Do NOT clone the brand's page structure or copy its copywriting, logo,
   or proprietary assets. The output must be the user's product, not a reskin of someone else's.
4. Layout, section rhythm, and motion still come from `references/01-direction.md`. A DESIGN.md
   tells you what things look like; the direction reference tells you how the page is composed.
5. If the project is real client work, write the resolved tokens into the project's own
   `DESIGN.md` at repo root so later sessions and other agents stay consistent.

## Licensing caution

These files describe publicly observable design languages. Brand names, logos, trademarks, and
proprietary typefaces belong to their owners. Use them as **direction**, never ship a
pixel-clone of a competitor's site or reuse their marks.

## Index

Slug is the folder under `references/design-md/`.

### AI & LLM Platforms

- `claude` - **Claude**. Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
- `cohere` - **Cohere**. Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
- `elevenlabs` - **ElevenLabs**. AI voice platform. Dark cinematic UI, audio-waveform aesthetics
- `minimax` - **Minimax**. AI model provider. Bold dark interface with neon accents
- `mistral.ai` - **Mistral AI**. Open-weight LLM provider. French-engineered minimalism, purple-toned
- `ollama` - **Ollama**. Run LLMs locally. Terminal-first, monochrome simplicity
- `opencode.ai` - **OpenCode AI**. AI coding platform. Developer-centric dark theme
- `replicate` - **Replicate**. Run ML models via API. Clean white canvas, code-forward
- `runwayml` - **Runway**. AI creative-tools platform with an editorial film-festival aesthetic - cinematic dark heroes, paper-white reading bands, single proprietary sans, and pure black pill CTAs.
- `together.ai` - **Together AI**. Open-source AI infrastructure. Technical, blueprint-style design
- `voltagent` - **VoltAgent**. AI agent framework. Void-black canvas, emerald accent, terminal-native
- `x.ai` - **xAI**. Elon Musk's AI lab. Stark monochrome, futuristic minimalism

### Developer Tools & IDEs

- `cursor` - **Cursor**. AI-first code editor. Sleek dark interface, gradient accents
- `expo` - **Expo**. React Native platform. Dark theme, tight letter-spacing, code-centric
- `lovable` - **Lovable**. AI full-stack builder. Playful gradients, friendly dev aesthetic
- `raycast` - **Raycast**. Productivity launcher. Sleek dark chrome, vibrant gradient accents
- `superhuman` - **Superhuman**. Fast email client. Premium dark UI, keyboard-first, purple glow
- `vercel` - **Vercel**. Frontend deployment platform. Black and white precision, Geist font
- `warp` - **Warp**. Modern terminal. Dark IDE-like interface, block-based command UI

### Backend, Database & DevOps

- `clickhouse` - **ClickHouse**. Fast analytics database. Yellow-accented, technical documentation style
- `composio` - **Composio**. Tool integration platform. Modern dark with colorful integration icons
- `hashicorp` - **HashiCorp**. Infrastructure automation. Enterprise-clean, black and white
- `mongodb` - **MongoDB**. Document database. Green leaf branding, developer documentation focus
- `posthog` - **PostHog**. Product analytics. Playful hedgehog branding, developer-friendly dark UI
- `sanity` - **Sanity**. Headless content platform with a dark-first editorial marketing surface - 112px display type, IBM Plex Mono technical eyebrows, and a single coral-red accent reserved for the highest-priority CTA.
- `sentry` - **Sentry**. Error monitoring. Dark dashboard, data-dense, pink-purple accent
- `supabase` - **Supabase**. Open-source Firebase alternative. Dark emerald theme, code-first

### Productivity & SaaS

- `cal` - **Cal.com**. Open-source scheduling. Clean neutral UI, developer-oriented simplicity
- `intercom` - **Intercom**. Customer messaging. Friendly blue palette, conversational UI patterns
- `linear.app` - **Linear**. Project management for engineers. Ultra-minimal, precise, purple accent
- `mintlify` - **Mintlify**. Documentation platform. Clean, green-accented, reading-optimized
- `notion` - **Notion**. All-in-one workspace. Warm minimalism, serif headings, soft surfaces
- `resend` - **Resend**. Email API for developers. Minimal dark theme, monospace accents
- `zapier` - **Zapier**. Automation platform. Warm orange, friendly illustration-driven

### Design & Creative Tools

- `airtable` - **Airtable**. Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic
- `clay` - **Clay**. Creative agency. Organic shapes, soft gradients, art-directed layout
- `figma` - **Figma**. Collaborative design tool. Vibrant multi-color, playful yet professional
- `framer` - **Framer**. Website builder. Bold black and blue, motion-first, design-forward
- `miro` - **Miro**. Visual collaboration. Bright yellow accent, infinite canvas aesthetic
- `webflow` - **Webflow**. Visual web builder. Blue-accented, polished marketing site aesthetic

### Fintech & Crypto

- `binance` - **Binance**. Crypto exchange. Bold Binance Yellow on monochrome, trading-floor urgency
- `coinbase` - **Coinbase**. Crypto exchange. Clean blue identity, trust-focused, institutional feel
- `kraken` - **Kraken**. Crypto trading platform. Purple-accented dark UI, data-dense dashboards
- `mastercard` - **Mastercard**. Global payments network. Warm cream canvas, orbital pill shapes, editorial warmth
- `revolut` - **Revolut**. Digital banking. Sleek dark interface, gradient cards, fintech precision
- `stripe` - **Stripe**. Payment infrastructure. Signature purple gradients, weight-300 elegance
- `wise` - **Wise**. International money transfer. Bright green accent, friendly and clear

### E-commerce & Retail

- `airbnb` - **Airbnb**. Travel marketplace. Warm coral accent, photography-driven, rounded UI
- `meta` - **Meta**. Tech retail store. Photography-first, binary light/dark surfaces, Meta Blue CTAs
- `nike` - **Nike**. Athletic retail. Monochrome UI, massive uppercase Futura, full-bleed photography
- `shopify` - **Shopify**. E-commerce platform. Dark-first cinematic, neon green accent, ultra-light display type
- `starbucks` - **Starbucks**. Coffee retail flagship. Four-tier earth-green system, warm cream canvas, proprietary SoDoSans typography

### Media & Consumer Tech

- `apple` - **Apple**. Consumer electronics. Premium white space, SF Pro, cinematic imagery
- `hp` - **HP**. PC and printer maker. Pure white canvas, HP Electric Blue signal CTA, geometric Forma DJR Micro, blue chevron decorations
- `ibm` - **IBM**. Enterprise technology. Carbon design system, structured blue palette
- `nvidia` - **NVIDIA**. GPU computing. Green-black energy, technical power aesthetic
- `pinterest` - **Pinterest**. Visual discovery platform. Red accent, masonry grid, image-first
- `playstation` - **PlayStation**. Gaming console retail. Three-surface channel layout, cyan hover-scale interaction
- `spacex` - **SpaceX**. Space technology. Stark black and white, full-bleed imagery, futuristic
- `spotify` - **Spotify**. Music streaming. Vibrant green on dark, bold type, album-art-driven
- `theverge` - **The Verge**. Tech editorial media. Acid-mint and ultraviolet accents, Manuka display type
- `uber` - **Uber**. Mobility platform. Bold black and white, tight type, urban energy
- `vodafone` - **Vodafone**. Global telecom brand. Monumental uppercase display, Vodafone Red chapter bands
- `wired` - **WIRED**. Tech magazine. Paper-white broadsheet density, custom serif, ink-blue links

### Automotive

- `bmw` - **BMW**. Luxury automotive. Dark premium surfaces, precise German engineering aesthetic
- `bmw-m` - **BMW M**. Performance automotive. Motorsport-inspired contrast, M color accents, precision-driven layout
- `bugatti` - **Bugatti**. Luxury hypercar. Cinema-black canvas, monochrome austerity, monumental display type
- `ferrari` - **Ferrari**. Luxury automotive. Chiaroscuro black-white editorial, Ferrari Red with extreme sparseness
- `lamborghini` - **Lamborghini**. Luxury automotive. True black cathedral, gold accent, LamboType custom Neo-Grotesk
- `renault` - **Renault**. French automotive. Vivid aurora gradients, NouvelR proprietary typeface, zero-radius buttons
- `tesla` - **Tesla**. Electric vehicles. Radical subtraction, cinematic full-viewport photography, Universal Sans

### Retro Web · DESIGN.md Nostalgia

- `dell-1996` - **Dell (1996)**. Catalog-era enterprise web. Literal black page frame, flat color-block "ribbon cards", chunky Helvetica-Black titles over Times Roman body, and hand-cut GIF stickers (NEW! bursts, award seals, beveled product photos).
- `nintendo-2001` - **Nintendo.com (2001)**. Y2K "console chrome" web. Brushed-periwinkle beveled metal panels, a halftone-dotted carbon nav glowing amber, outlined Arial-Black box-art wordmarks over circuit-board hero fields, and a pixel Mario welcome bubble.

### Also bundled (not categorised upstream)

- `slack`

## Authoring a new DESIGN.md

When no bundled brand fits, generate one first, then build against it. Use
`assets/DESIGN.template.md`. Required shape:

- YAML frontmatter: `version`, `name`, `description`, then `colors:`, `typography:`,
  `spacing:`, `radius:`, `elevation:` as flat token maps (hex values and px, not vague words).
- Markdown body: `## Overview`, `## Colors`, `## Typography`, `## Layout`,
  `## Elevation & Depth`, `## Shapes`, `## Components`, `## Do's and Don'ts`.

Every token must be a concrete value. "Muted grey" is not a token; `#888888` is.
