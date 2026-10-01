import { useState } from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { projects, type Category } from "../../data/projects";

export default function Projects() {
  const [category, setCategory] = useState<Category | "all">("all");

  const visible = projects.filter((project) => category === "all" || project.tags.includes(category));
  const featured = visible.filter((project) => project.featured);
  const others = visible.filter((project) => !project.featured);

  return (
    <Section id="projects" title="Projects" aside={<ProjectFilters active={category} onChange={setCategory} />}>
      {featured.length > 0 && (
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </div>
    </Section>
  );
}
