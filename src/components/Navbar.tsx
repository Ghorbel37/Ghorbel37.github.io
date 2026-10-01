import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import type { Theme } from "../hooks/useTheme";

const links = ["about", "experience", "stack", "projects", "interests", "contact"];

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-10 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-mono text-sm font-bold">
          <span className="text-green">mahdi</span>
          <span className="text-muted">@</span>
          <span className="text-blue">sfax</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-4">
          <ul className="hidden items-center gap-4 font-mono text-xs md:flex">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`} className="text-muted transition-colors hover:text-fg">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a href="#projects" className="font-mono text-xs text-muted hover:text-fg md:hidden">
            projects
          </a>
          <button
            type="button"
            id="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="ml-2 rounded-md border border-line p-1.5 text-muted transition-colors hover:border-blue hover:text-fg"
          >
            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
