import { Project } from "@_types";

export default function ProjectCard(project: Readonly<Project>) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="flex w-full p-4 mt-4 mx-4 grow flex-col items-center border border-quaternary rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-quinary"
    >
      <div className="flex flex-col items-center justify-between h-full w-full">
        <div className="flex flex-col items-center mb-2 text-xl md:text-2xl font-bold tracking-tight">
          {project.name}
          {project.status === "under maintenance" && (
            <div className="text-xs font-bold tracking-tight text-tertiary">
              (under maintenance)
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {project.status !== "coming soon" && (
            <img
              className="object-cover md:object-contain w-full rounded-t-lg h-52 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={project.cover}
              alt="landing_page_img"
            />
          )}

          <div className="flex flex-col p-4 leading-normal">
            <p className="font-normal">
              {project.status === "coming soon"
                ? "coming soon ..."
                : project.description}
            </p>
          </div>
        </div>

        <div className="box my-4">
          <u>stack:</u>{" "}
          {project.stack.map((el) => (
            <span className="mr-2" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
