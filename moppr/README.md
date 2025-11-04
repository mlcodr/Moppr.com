# Moppr (Frontend Prototype)

Modern, dynamic UI for a maid finder platform. Frontend-only (no backend), built with Vite + React + TypeScript + Tailwind + Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```
Open `http://localhost:5173`.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build (outputs `dist/`)
- `npm run preview` – preview production build
- `npm run deploy` – deploy to GitHub Pages (uses `gh-pages` package)

## Deploy

### GitHub Pages
1. Ensure `vite.config.ts` has `base: '/moppr/'` (repo name)
2. Build and deploy:
   ```bash
   npm run deploy
   ```
3. Enable Pages in GitHub: Settings → Pages → Deploy from branch (gh-pages)

### Vercel / Netlify
- Import GitHub repo
- Framework preset: Vite
- Build command: `npm run build`
- Output dir: `dist`

## Tech
- React 18, React Router
- Tailwind CSS (dark mode: class)
- Framer Motion
- Zustand (state)

## Structure
```
/moppr
  ├─ index.html
  ├─ src/
  │  ├─ main.tsx
  │  ├─ App.tsx
  │  ├─ index.css
  │  └─ routes/
  │     ├─ Home.tsx
  │     ├─ Browse.tsx
  │     ├─ Profile.tsx
  │     └─ Messages.tsx
  ├─ tailwind.config.ts
  ├─ vite.config.ts
  ├─ tsconfig*.json
  └─ package.json
```
