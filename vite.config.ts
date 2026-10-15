import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const githubUser = 'Ghorbel37'

// Names of the public repos, so cards only link to code people can open.
// If GitHub can't be reached, every repo counts as private: no links, but the build still works.
async function fetchPublicRepos(token?: string): Promise<string[]> {
  const names: string[] = []
  try {
    for (let page = 1; page <= 5; page++) {
      const response = await fetch(`https://api.github.com/users/${githubUser}/repos?type=owner&per_page=100&page=${page}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      if (!response.ok) throw new Error(`GitHub API answered ${response.status}`)
      const repos = (await response.json()) as { name: string; private: boolean }[]
      names.push(...repos.filter((repo) => !repo.private).map((repo) => repo.name))
      if (repos.length < 100) break
    }
    return names
  } catch (error) {
    console.warn(`Could not list public repos, showing every repo as private: ${error}`)
    return []
  }
}

function list(value?: string) {
  return (value ?? '').split(',').map((name) => name.trim()).filter(Boolean)
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  // Comes from the repo's Actions variables in CI, or from .env.local when previewing
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }

  return {
    plugins: [react(), tailwindcss()],
    // Relative paths so the build works on Ghorbel37.github.io and in any subfolder
    base: './',
    define: {
      __PUBLIC_REPOS__: JSON.stringify(await fetchPublicRepos(env.GITHUB_TOKEN)),
      __HIDDEN_PROJECTS__: JSON.stringify(list(env.HIDDEN_PROJECTS)),
      __HIDDEN_DEMOS__: JSON.stringify(list(env.HIDDEN_DEMOS)),
    },
  }
})
