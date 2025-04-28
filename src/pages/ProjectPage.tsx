import { projects } from "@mock-data/projects";
import ProjectCards from "@components/ProjectCards";

export default function ProjectPage() {
  return (
    <>
      <ProjectCards projects={projects} />
    </>
  );
}
