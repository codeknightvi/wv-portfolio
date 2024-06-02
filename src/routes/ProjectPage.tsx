import ProjectCards from "../component/ProjectCards";
import { projects } from "../base_constant";

const ProjectPage = () => {
  return (
    <div className="pt-4 px-4 max-w-fit	mx-auto ">
      <ProjectCards projects={projects} />
    </div>
  );
};

export default ProjectPage;
