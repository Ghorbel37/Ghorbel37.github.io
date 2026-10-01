# Ghorbel37.github.io

My portfolio: profile, experience, stack and projects, with a terminal in the hero that runs a few commands (type `help`). The colors come from my Tokyo Night starship prompt in [wsl-terminal-config](https://github.com/Ghorbel37/wsl-terminal-config).

Built with React, TypeScript, Tailwind CSS and Vite. Live at https://ghorbel37.github.io.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks and builds to dist/
```

## Edit the content

All the text lives in `src/data`:

- `profile.ts`: name, links, about, experience, stack and interests
- `projects.ts`: projects, their categories and screenshots (images go in `public/screenshots`)

Terminal commands are in `src/components/terminal/commands.tsx`.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and publishes `dist/` to GitHub Pages. In the repo settings, set **Pages → Source** to **GitHub Actions** once.
