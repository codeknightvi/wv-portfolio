import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { experience } from "@mock-data/experience";
import { twMerge } from "tailwind-merge";

const Experience = () => {
  const { hoveredId, handleOnMouseEnter } = useHoveredPoint();

  return (
    <section className="pt-5 md:pt-10">
      <h1 className="text-3xl section">Experience</h1>
      <ol className="relative border-l border-quaternary ml-4">
        {experience.map((exp) => {
          return (
            <li className="mb-10 ml-4" key={exp.id}>
              <div
                onMouseEnter={() => handleOnMouseEnter(exp.id)}
                onMouseLeave={() => handleOnMouseEnter(null)}
                className={twMerge(
                  "absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -left-1.5 border border-white",
                  [hoveredId === exp.id && "bg-primary"]
                )}
              />
              <time
                className={twMerge(
                  "mb-1 text-sm font-normal leading-none text-tertiary",
                  [hoveredId === exp.id && "text-primary"]
                )}
              >
                {" "}
                {exp.period}
              </time>
              <h3 className="text-lg font-semibold text-tertiary">
                {exp.position} | @ {exp.place}
              </h3>
              <ul>
                {exp.work.map((w, index) => (
                  <li key={index}>- {w}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
