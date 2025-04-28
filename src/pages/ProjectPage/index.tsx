import { projects } from "@mock-data/projects";
import ProjectCards from "@pages/ProjectPage/ProjectCards";

export default function ProjectPage() {
  return (
    <>
      <ProjectCards projects={projects} />
    </>
  );
}
