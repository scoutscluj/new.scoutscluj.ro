# Scouts Cluj - Astro Starter (Content Collections)

This project uses:

- **Astro** for a fast static-first site
- **Astro Content Collections** for structured content management
- **Decap CMS** config under `public/admin/` (added for later use)

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Content Model

Content is stored in:

- `src/content/pages`
- `src/content/stories`
- `src/content/projects`

Schemas are defined in:

- `src/content/config.ts`

Homepage reads from:

- `src/content/pages/home.md`

## Decap CMS (optional, not activated yet)

Files:

- `public/admin/index.html`
- `public/admin/config.yml`

Current backend is set to `test-repo` so you can preview the CMS UI quickly.
Before production, switch to your real backend (for example `github` or `git-gateway`) and add auth/config for deployment.

Admin URL in dev:

- `http://localhost:4321/admin/`
