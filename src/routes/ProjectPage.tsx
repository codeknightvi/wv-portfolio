import ProjectCards from "../component/ProjectCards";
import { projects } from "../base_constant";

const ProjectPage = () => {
  return (
    <div className="pt-4 mx-3">
      <ProjectCards projects={projects} />
    </div>
  );
};

export default ProjectPage;
