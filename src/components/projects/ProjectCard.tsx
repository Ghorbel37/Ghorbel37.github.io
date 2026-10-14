import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { categoryLabel, type Project } from "../../data/projects";
import { profile } from "../../data/profile";

function iconSrc(icon: string) {
  return icon.startsWith("https://") ? icon : `./icons/${icon}`;
}

function ProjectIcon({ icon: Icon, large = false }: { icon: Project["icon"]; large?: boolean }) {
  const box = large ? "h-16 w-16 rounded-2xl" : "h-8 w-8 rounded-lg";

  if (typeof Icon === "string") {
    return <img src={iconSrc(Icon)} alt="" className={box} />;
  }

  return (
    <span
      className={`flex items-center justify-center bg-raised text-blue transition-colors group-hover:bg-blue group-hover:text-bg ${box} ${large ? "bg-surface" : ""}`}
    >
      <Icon className={large ? "h-8 w-8" : "h-[1.1rem] w-[1.1rem]"} aria-hidden="true" />
    </span>
  );
}

// Same size on every card: the screenshots, or the project icon when there are none.
// On top when the card is narrow, on the right once the card is wide enough for text beside it.
const media =
  "flex h-44 shrink-0 items-center justify-center rounded-lg bg-raised @[26rem]:order-last @[26rem]:h-auto @[26rem]:w-52";

function ProjectMedia({ project }: { project: Project }) {
  if (!project.screenshots?.length) {
    return (
      <div className={media}>
        <ProjectIcon icon={project.icon} large />
      </div>
    );
  }

  return (
    <div className={`${media} gap-2 overflow-hidden`}>
      {project.screenshots.map((shot) => (
        <img
          key={shot.file}
          src={`./screenshots/${shot.file}`}
          alt={shot.alt}
          loading="lazy"
          className={[
            project.wideScreenshots
              ? "h-full w-full object-cover @[26rem]:object-contain"
              : "h-40 w-auto rounded-xl border-[3px] border-fg",
            shot.theme === "light" ? "dark:hidden" : "",
            shot.theme === "dark" ? "hidden dark:block" : "",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={`${profile.github}/${project.repo}`}
      className="@container group relative block h-full min-w-0 rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-blue"
    >
      <div className="flex h-full flex-col gap-4 @[26rem]:flex-row @[26rem]:gap-5">
        <ProjectMedia project={project} />

        <div className="flex min-w-0 flex-1 flex-col gap-2.5">
          <div className="flex items-center justify-between gap-4 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
            <div className="flex items-center gap-2.5">
              <ProjectIcon icon={project.icon} />
              <span className="text-green">{categoryLabel[project.category]}</span>
            </div>
            <span>{project.year}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          {project.highlight && (
            <span className="self-start rounded bg-raised px-2 py-0.5 font-mono text-xs">{project.highlight}</span>
          )}
          <p className="mt-auto pt-2 pr-6 font-mono text-xs text-blue">{project.tech.join(" · ")}</p>
        </div>
      </div>

      <ArrowUpRightIcon className="absolute right-4 bottom-4 h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue" />
    </a>
  );
}
