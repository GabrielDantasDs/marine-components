# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**marine-components** is a React 19 component library published as an npm package with CJS, ESM, and bundled type declaration outputs. Styling uses styled-components.

## Commands

```bash
# Build the library (CJS + ESM bundles)
npm run build

# Run Jest unit tests (watch mode)
npm test

# Run a single test file
npx jest src/components/Page/Page.test.tsx

# Run Storybook dev server
npm run storybook

# Run Vitest story tests (Storybook addon-vitest, uses Playwright browser)
npx vitest

# Lint and auto-fix
npm run lint

# Build Rollup in watch mode for development
npm run dev
```

## Architecture

- **Entry point:** `src/index.ts` — re-exports all public components.
- **Component structure:** Each component lives in `src/components/<Name>/` with:
  - `index.tsx` — component implementation
  - `types.ts` — prop types
  - `styled.ts` — styled-components
  - `<Name>.stories.tsx` — Storybook story (CSF3 format, under `MyComponents/` title prefix)
  - `<Name>.test.tsx` — Jest unit test using @testing-library/react
- **Build:** Rollup produces `dist/cjs/`, `dist/esm/`, and `dist/index.d.ts`.
- **Testing:** Two test systems coexist — Jest for unit tests (`npm test`) and Vitest for Storybook interaction tests via `@storybook/addon-vitest` with Playwright browser mode.
- **Storybook:** v10 with react-vite framework, addons: a11y, docs, vitest, mcp, chromatic.
- **Stories in `src/stories/`** are default Storybook scaffolding (Button, Header, Page) — not part of the published library.

## Conventions

- Peer dependency: React >=19.2.6
- TypeScript strict mode with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- Tests import `@testing-library/jest-dom` for DOM matchers
- ESLint flat config (`eslint.config.mts`)
- Husky manages git hooks

## Available Skills

- `/code-review` — Review the current diff for correctness bugs (low/medium/high effort levels). Use `--comment` to post findings as inline PR comments.
- `/simplify` — Review changed code for reuse, simplification, efficiency, and altitude cleanups, then apply fixes. Quality only — does not hunt for bugs.
- `/verify` — Verify that a code change actually works by running the app and observing behavior. Use to confirm a fix, test a feature, or validate before pushing.
- `/run` — Launch and drive the project's app to see a change working. Use to start Storybook, confirm a change in the real app, or take screenshots.
- `/review` — Review a pull request.
- `/security-review` — Complete a security review of pending changes on the current branch.
- `/init` — Initialize or update the CLAUDE.md file with codebase documentation.
- `/schedule` — Create or update a scheduled task that runs automatically (e.g., "every day", "remind me in an hour").
- `/ui-ux-pro-max` — UI/UX design intelligence. Use when designing new pages, creating/refactoring components, choosing colors/typography/spacing, reviewing UI for accessibility or visual consistency, or implementing animations. Includes 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types. See `SKILL.md` for full reference and search commands.