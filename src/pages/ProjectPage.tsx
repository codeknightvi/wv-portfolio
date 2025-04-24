import { projects } from "@mock-data/projects";
import ProjectCards from "@components/ProjectCards";

const ProjectPage = () => {
  return (
    <div className="pt-4 px-4 max-w-fit	mx-auto ">
      <ProjectCards projects={projects} />
    </div>
  );
};

export default ProjectPage;
