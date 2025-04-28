import { Project } from "@_types/project";

const ProjectCards = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 content-center justify-items-center gap-4">
      {projects.map((el: Project, index: number) => (
        <a
          key={index}
          href={el.url}
          target="_blank"
          rel="noreferrer"
          className="flex w-full p-4 mt-4 mx-4 grow flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col items-center justify-between h-full">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.name}
            </h5>
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="object-cover md:object-contain w-full rounded-t-lg h-52 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg "
                src={el.cover}
                alt="landing_page_img"
              />
              <div className="flex flex-col p-4 leading-normal">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {el.description}
                </p>
              </div>
            </div>
            <div className="box my-4">
              <u>stack:</u>{" "}
              {el.stack.map((el, index) => (
                <span className="mr-2" key={index}>
                  {el}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectCards;
