import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { education } from "@mock-data/education";
import { twMerge } from "tailwind-merge";

export default function AboutPage() {
  const { hoveredIndex, handleOnMouseEnter } = useHoveredPoint();

  return (
    <>
      <div className="m-0 sm:m-4 p-0 sm:p-2 lg:p-10 text-base lg:text-3xl ">
        A passionate front-end developer with the previous background in graphic
        designing, comprehensive aspects of real estate market analysis, project
        management for real estate development, feasibility, and facility
        management. For extent, having good interpersonal communication,
        professional attitude, hands-on with various software, adaptive in
        diverse environment with willingness to grow through continuous personal
        and professional development. Seeking for a challenging role to leverage
        myself within a career progressive.
      </div>
      <section className="">
        <h1 className="text-3xl section">Education</h1>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4">
          {education.map((edu, index) => {
            return (
              <li key={index} className="mb-10 ml-4">
                <div
                  onMouseEnter={() => handleOnMouseEnter(index)}
                  onMouseLeave={() => handleOnMouseEnter(null)}
                  className={twMerge(
                    "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-primary dark:border-gray-900 dark:bg-gray-700",
                    [hoveredIndex === index && "bg-secondary"]
                  )}
                />
                <time
                  className={twMerge(
                    "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                    [hoveredIndex === index && "text-secondary"]
                  )}
                >
                  {edu.year}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-primary">
                  {edu.place}
                </h3>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
