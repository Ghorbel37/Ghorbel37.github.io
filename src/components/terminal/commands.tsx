import type { ReactNode } from "react";
import Fastfetch from "./Fastfetch";
import { profile, interests } from "../../data/profile";
import { projects } from "../../data/projects";
import type { Theme } from "../../hooks/useTheme";

export type CommandContext = {
  setTheme: (theme: Theme) => void;
  clear: () => void;
};

type Command = {
  description: string;
  run: (args: string[], context: CommandContext) => ReactNode;
};

function goTo(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
}

export const commands: Record<string, Command> = {
  help: {
    description: "list the commands",
    run: () => (
      <div className="grid grid-cols-[7rem_1fr] gap-x-3">
        {Object.entries(commands).map(([name, command]) => (
          <div key={name} className="contents">
            <span className="text-green">{name}</span>
            <span className="text-muted">{command.description}</span>
          </div>
        ))}
      </div>
    ),
  },
  whoami: {
    description: "who is this",
    run: () => `${profile.name}, ${profile.role.toLowerCase()} from ${profile.location}.`,
  },
  fastfetch: {
    description: "show my system info",
    run: () => <Fastfetch />,
  },
  about: {
    description: "jump to about",
    run: () => {
      goTo("about");
      return "cd ~/about";
    },
  },
  experience: {
    description: "jump to experience",
    run: () => {
      goTo("experience");
      return "cd ~/experience";
    },
  },
  projects: {
    description: "jump to projects",
    run: () => {
      goTo("projects");
      return "cd ~/projects";
    },
  },
  ls: {
    description: "list my projects",
    run: () => (
      <div className="flex flex-wrap gap-x-4">
        {projects.map((project) =>
          project.codePublic ? (
            <a key={project.repo} href={`${profile.github}/${project.repo}`} className="text-blue hover:underline">
              {project.repo}/
            </a>
          ) : (
            <span key={project.repo} className="text-muted">
              {project.repo}/
            </span>
          ),
        )}
      </div>
    ),
  },
  interests: {
    description: "what I do off the clock",
    run: () => interests.map((interest) => interest.title.toLowerCase()).join("  "),
  },
  contact: {
    description: "how to reach me",
    run: () => {
      goTo("contact");
      return (
        <div className="flex flex-col">
          {[profile.github, profile.linkedin].filter(Boolean).map((url) => (
            <a key={url} href={url} className="text-blue hover:underline">
              {url}
            </a>
          ))}
        </div>
      );
    },
  },
  theme: {
    description: "theme light | dark",
    run: (args, { setTheme }) => {
      const value = args[0];
      if (value !== "light" && value !== "dark") return "usage: theme light | dark";
      setTheme(value);
      return `switched to ${value} theme`;
    },
  },
  clear: {
    description: "clear the screen",
    run: (_args, { clear }) => {
      clear();
      return null;
    },
  },
  sudo: {
    description: "try it",
    run: () => <span className="text-red">mahdi is not in the sudoers file. This incident will be reported.</span>,
  },
};
