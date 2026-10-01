import { categories, projects, type Category } from "../../data/projects";

type ProjectFiltersProps = {
  active: Category | "all";
  onChange: (category: Category | "all") => void;
};

export default function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5">
      {categories.map(({ id, label }) => {
        const count = id === "all" ? projects.length : projects.filter((project) => project.tags.includes(id)).length;
        const isActive = active === id;

        return (
          <button
            key={id}
            id={`filter-${id}`}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(id)}
            className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
              isActive ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-muted hover:text-fg"
            }`}
          >
            {label}
            <span className="ml-1.5 opacity-60 tabular-nums">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
