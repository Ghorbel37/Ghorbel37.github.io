import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { categoryLabel, type Project } from "../../data/projects";
import { profile } from "../../data/profile";

export default function ProjectCard({ project }: { project: Project }) {
  const hasScreenshots = Boolean(project.screenshots?.length);

  return (
    <a
      href={`${profile.github}/${project.repo}`}
      className={`group relative flex min-w-0 gap-5 rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-blue ${
        hasScreenshots ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <div className="flex justify-between gap-4 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
          <span className="text-green">{categoryLabel[project.category]}</span>
          <span>{project.year}</span>
        </div>
        <h3 className={`font-semibold tracking-tight ${project.featured ? "text-xl" : "text-lg"}`}>{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        {project.highlight && (
          <span className="self-start rounded bg-raised px-2 py-0.5 font-mono text-xs">{project.highlight}</span>
        )}
        <p className="mt-auto pt-2 pr-6 font-mono text-xs text-blue">{project.tech.join(" · ")}</p>
      </div>

      {/* Screenshots */}
      {project.screenshots && (
        <div className="flex shrink-0 items-start gap-2 self-start sm:self-center">
          {project.screenshots.map((shot, index) => (
            <img
              key={shot.file}
              src={`./screenshots/${shot.file}`}
              alt={shot.alt}
              loading="lazy"
              className={[
                project.wideScreenshots
                  ? "w-full rounded-md border border-line sm:w-48"
                  : "w-24 rounded-2xl border-[3px] border-fg sm:w-28",
                index > 0 && !shot.theme ? "mt-6" : "",
                shot.theme === "light" ? "dark:hidden" : "",
                shot.theme === "dark" ? "hidden dark:block" : "",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      <ArrowUpRightIcon className="absolute right-4 bottom-4 h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue" />
    </a>
  );
}
