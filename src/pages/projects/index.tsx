import { projects } from "@mock-data/projects";
import ProjectCard from "@pages/projects/ProjectCard";
import { Project } from "@_types";

export default function ProjectPage() {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {projects.map((project: Project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
