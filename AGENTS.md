# EBens Premium Website Demo

See [README.md](README.md) for creative direction and [web/README.md](web/README.md) for the file map.

## Cursor Cloud specific instructions

The entire app lives in `web/` (Next.js 16 App Router + Turbopack, React 19, Tailwind 4, TypeScript). It is a front-end-only marketing/booking demo with no backend, database, or external services.

- Run all commands from `web/`. Standard scripts are in `web/package.json`: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Dev server: `npm run dev` serves on `http://localhost:3000`. Routes are `/` (homepage) and `/book` (booking form). The booking form is a client-side demo only — submit shows a "Request received" confirmation and never calls a CRM/API.
- `npm run lint` currently fails with 2 pre-existing `react-hooks/set-state-in-effect` errors in `src/components/sections/Header.tsx`. This is existing code, not an environment problem — don't treat it as a setup regression.
- Running `next dev` or `next build` regenerates the `nextjs-agent-rules` comment block in `web/AGENTS.md`. This shows up as an uncommitted change; committing it alongside your work keeps the tree clean (as noted in that file).
