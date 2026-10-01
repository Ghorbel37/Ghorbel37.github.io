import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-10 font-mono text-xs text-muted sm:px-6">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>
        Built with React, TypeScript and Tailwind ·{" "}
        <a href={`${profile.github}/${profile.handle}.github.io`} className="text-blue hover:underline">
          source
        </a>
      </span>
    </footer>
  );
}
