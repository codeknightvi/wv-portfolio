import { Project } from "@_types";

export default function ProjectCard(project: Readonly<Project>) {
  return (
    <a
      className="border-quaternary hover:bg-quinary mx-4 mt-4 flex w-full grow flex-col items-center rounded-lg border p-4 shadow-sm md:max-w-xl md:flex-row"
      href={project.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex h-full w-full flex-col items-center justify-between">
        <div className="mb-2 flex flex-col items-center text-xl font-bold tracking-tight md:text-2xl">
          {project.name}
          {project.status === "under maintenance" && (
            <div className="text-tertiary text-xs font-bold tracking-tight">
              (under maintenance)
            </div>
          )}
        </div>

        <div className="flex flex-col items-center md:flex-row">
          {project.status !== "coming soon" && (
            <img
              className="h-52 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg md:object-contain"
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
