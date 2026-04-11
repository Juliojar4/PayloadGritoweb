# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Start dev server (port 3000)
pnpm build         # Production build (also runs next-sitemap postbuild)
pnpm start         # Serve production build
pnpm lint          # Run ESLint
pnpm lint:fix      # Fix lint errors

# Payload-specific
pnpm generate:types      # Regenerate payload-types.ts after schema changes (REQUIRED)
pnpm generate:importmap  # Regenerate admin import map after adding/modifying components

# Tests
pnpm test:int      # Run integration tests (Vitest)
pnpm test:e2e      # Run end-to-end tests (Playwright)
pnpm test          # Run both

# Single integration test
pnpm vitest run --config ./vitest.config.mts path/to/test.ts

# TypeScript check (no emit)
npx tsc --noEmit
```

## Environment

Copy `.env.example` to `.env`. Required variables:
- `DATABASE_URL` — MongoDB connection string
- `PAYLOAD_SECRET` — Payload CMS secret key
- `CRON_SECRET` — Used to authorize Vercel Cron job calls to the jobs endpoint

## Architecture

This is a **Payload CMS + Next.js App Router monorepo** — backend and frontend run as a single Next.js application.

### Key config files
- `src/payload.config.ts` — Main Payload config (collections, globals, plugins, DB adapter)
- `src/plugins/index.ts` — All Payload plugins: redirects, nested-docs, SEO, form-builder, search
- `src/fields/defaultLexical.ts` — Shared Lexical editor config

### Route groups
- `src/app/(frontend)/` — Public-facing website routes
- `src/app/(payload)/` — Payload admin panel (`/admin`)

### Collections (`src/collections/`)
- `Pages` — Layout-builder pages with draft/live-preview support
- `Posts` — Blog posts with layout builder, drafts, and search indexing
- `Media` — Uploads with pre-configured sizes and focal point
- `Categories` — Nested taxonomy (via `nestedDocsPlugin`)
- `Users` — Auth-enabled; gates admin access and draft visibility

### Globals (`src/Footer/`, `src/Header/`)
Each global has a `config.ts` (Payload schema) and a `Component.tsx` (React frontend component).

### Layout Builder blocks (`src/blocks/`)
Each block has a `config.ts` (Payload field schema) and a `Component.tsx` (React component).
`RenderBlocks.tsx` maps `blockType` slugs to their components.

Currently registered blocks: `archive`, `content`, `cta`, `homeHero`, `formBlock`, `mediaBlock`.

**Adding a new block:**
1. Create `src/blocks/MyBlock/config.ts` and `src/blocks/MyBlock/Component.tsx`
2. Add the block to the `layout` field in `src/collections/Pages/index.ts` and/or `Posts`
3. Register the component in `src/blocks/RenderBlocks.tsx`
4. Run `pnpm generate:types && pnpm generate:importmap`

### Heros (`src/heros/`)
Page-level hero components separate from layout blocks.

## Payload-specific rules (from AGENTS.md)

- **Always run `generate:types`** after any schema change
- **Always run `generate:importmap`** after adding or modifying admin components
- **Always pass `req`** to nested Payload operations inside hooks (for transaction atomicity)
- **Always set `overrideAccess: false`** when passing `user` to Local API calls that should respect permissions
- **Use context flags** (`context.skipHooks`) to prevent infinite hook loops

## Database

Uses MongoDB via `@payloadcms/db-mongodb`. Docker Compose is provided for local development:
```bash
docker-compose up
```

## Type safety

Generated types live in `src/payload-types.ts` — do not edit manually. Import types from there:
```ts
import type { Page, Post, User } from '@/payload-types'
```
