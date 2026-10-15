import { ArrowUpRightIcon, LockClosedIcon } from "@heroicons/react/24/outline";
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
    // The whole card links to the repo through the title's stretched link, so the demo link can sit on top of it.
    // Cards of private repos have no repo link.
    <article
      className={`@container group relative h-full min-w-0 rounded-xl border border-line bg-surface p-5 transition ${
        project.codePublic ? "focus-within:border-blue hover:-translate-y-0.5 hover:border-blue" : ""
      }`}
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
          <h3 className="text-lg font-semibold tracking-tight">
            {project.codePublic ? (
              <a
                href={`${profile.github}/${project.repo}`}
                className="outline-none after:absolute after:inset-0 after:rounded-xl after:content-['']"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          {project.highlight && (
            <span className="self-start rounded bg-raised px-2 py-0.5 font-mono text-xs">{project.highlight}</span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="relative z-10 inline-flex items-center gap-1 self-start font-mono text-xs text-green hover:underline"
            >
              Live demo <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          )}
          <p className={`mt-auto pt-2 font-mono text-xs text-blue ${project.codePublic ? "pr-6" : "pr-24"}`}>{project.tech.join(" · ")}</p>
        </div>
      </div>

      {project.codePublic ? (
        <ArrowUpRightIcon className="absolute right-4 bottom-4 h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue" />
      ) : (
        <span className="absolute right-4 bottom-4 inline-flex items-center gap-1 font-mono text-[0.7rem] text-muted">
          <LockClosedIcon className="h-3.5 w-3.5" aria-hidden="true" /> Private repo
        </span>
      )}
    </article>
  );
}
