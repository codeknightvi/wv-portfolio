import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { experience } from "@mock-data/experience";
import { twMerge } from "tailwind-merge";

const Experience = () => {
  const { hoveredIndex, handleOnMouseEnter } = useHoveredPoint();

  return (
    <section className="pt-5 md:pt-10">
      <h1 className="text-3xl section">Experience</h1>
      <ol className="relative border-l border-quaternary dark:border-tertiary ml-4">
        {experience.map((exp, index) => {
          return (
            <li className="mb-10 ml-4" key={index}>
              <div
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => handleOnMouseEnter(null)}
                className={twMerge(
                  "absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -left-1.5 border border-white dark:border-tertiary dark:bg-tertiary",
                  [hoveredIndex === index && "bg-secondary"]
                )}
              />
              <time
                className={twMerge(
                  "mb-1 text-sm font-normal leading-none text-tertiary dark:text-tertiary",
                  [hoveredIndex === index && "text-secondary"]
                )}
              >
                {" "}
                {exp.period}
              </time>
              <h3 className="text-lg font-semibold text-tertiary dark:text-primary">
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
