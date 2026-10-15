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

## Show or hide projects

Cards link to their GitHub repo only when the repo is public: the build checks it, and a private repo gets a "Private repo" label instead. Make a repo public and its link appears on the next deploy.

To hide things without touching the code, set these in **Settings > Secrets and variables > Actions > Variables**, as comma-separated repo names:

- `HIDDEN_PROJECTS`: cards to leave out, from the grid and the terminal
- `HIDDEN_DEMOS`: projects whose "Live demo" link is left out

Then redeploy from **Actions > Deploy to GitHub Pages > Run workflow**. To preview the same thing locally, put the variables in a `.env.local` file (it isn't committed), e.g. `HIDDEN_PROJECTS=bledna,dinari-store`.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and publishes `dist/` to GitHub Pages. In the repo settings, set **Pages → Source** to **GitHub Actions** once.
