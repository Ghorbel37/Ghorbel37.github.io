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
      {/* Featured projects first; every card has the same size, two per row from tablets up */}
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
        {[...featured, ...others].map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </div>
    </Section>
  );
}
