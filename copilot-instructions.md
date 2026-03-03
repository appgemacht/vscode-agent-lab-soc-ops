# Workspace Instructions

## 🛠 Mandatory dev checklist
- [ ] `npm run lint` (fix ESLint/TS warnings)
- [ ] `npm run build` (tsc + vite) succeeds
- [ ] `npm run test` passes all Vitest suites
- [ ] Commit in small steps; use chat’s checkpoint/undo features

## What’s here
Single-page **React + TypeScript** app built with **Vite**. UI is styled
exclusively with **Tailwind CSS v4** (see `@theme` tokens). No backend/API;
state persists in `localStorage`.

Key directories:
- `src/components` – all React components (StartScreen, GameScreen, etc.)
- `src/hooks/useBingoGame.ts` – core game state & side effects
- `src/utils` – pure helpers + tests (`bingoLogic.ts`)
- `src/types` – shared interfaces
- `src/data/questions.ts` – bingo question list
- `public/` – static assets

Pushes to `main` deploy via `.github/workflows/deploy.yml` (GitHub Pages).

## Common workflows
```bash
npm install        # once
npm run dev         # dev server (5173)
npm run build       # prod build
npm run lint        # linting
npm run test        # run Vitest
```
Tests focus on logic; add new specs before implementation (TDD).
UI tests may use `@testing-library/react` if needed – see `src/test/setup.ts`.

## Styling & design rules
- Tailwind utilities only; no extra CSS except `@import 'tailwindcss'`.
- Configure with `@theme` tokens (v4) not via config file.
- Follow `.github/instructions/tailwind-4.instructions.md` for v4 tips.
- Design: playful/retro, **no purple gradients**. Use tokens like
  `bg-accent` and `active:bg-accent-light`.
- Use responsive (`@md:`) and container (`@container`) variants.

## Design guide

- **Purpose:** Keep UI cohesive, accessible, and on-brand across the app.
- **Colors:** Prefer theme tokens like `bg-accent`, `bg-accent-light`, and their text-contrast tokens. Avoid purple gradients; use single-tone accents or subtle layered transparencies when needed.
- **Typography:** Use the project `font-sans` stack for body and scale headings with Tailwind utilities (e.g. `text-lg`, `text-2xl`). Keep line-height comfortable (approx. 1.4–1.6).
- **Spacing & layout:** Follow a 4px/8px rhythm via Tailwind spacing (`p-4`, `gap-4`, `mx-6`). Use containers and responsive variants for layout adjustments.
- **Components:** Build lightweight, reusable patterns (buttons, cards, modals). Buttons should use consistent padding, `rounded-md`, and `transition-colors` for hover/active states.
- **Icons & imagery:** Prefer optimized SVG icons, sized consistently (e.g. 16–24px). Provide accessible labels/alt text for images.
- **Motion:** Keep motion subtle: `transition-colors duration-150 ease-in-out` and avoid large, attention-grabbing animations.
- **Accessibility:** Maintain >=4.5:1 contrast for body text, keyboard-focus visible (`ring` utilities), and ensure interactive elements have accessible names/roles.
- **When in doubt:** Open a quick PR describing the design decision and ask for a brief review — consistency matters more than novelty.

## Project quirks to watch
- `useBingoGame.ts` serializes state with versioning; validation logic
detects schema drift and clears storage.
- Free space is index 12, marked by default; `toggleSquare` skips it.
- Bingo detection returns the first winning line; state updates use
  `queueMicrotask` to avoid synchronous React setState.
- `BingoSquare` has `aria-pressed` and disables the free-space button.

## Dependencies & agents
Only core libs (React, Tailwind plugin, ESLint, Vitest). Agents should avoid
adding dependencies without a strong rationale.
Various agent prompts live under `.github/agents` and usage examples are in
`.lab/GUIDE.md`. Keep this file updated after major changes.

