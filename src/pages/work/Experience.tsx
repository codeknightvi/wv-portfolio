import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { experience } from "@mock-data/experience";
import { cn } from "@utils/cn";
import { formatPeriod } from "@utils/formatPeriod";
import { getDurationFromISO } from "@utils/getDurationFromISO";

const Experience = () => {
  const { hoveredId, handleOnMouseEnter } = useHoveredPoint();

  return (
    <section className="pt-5 md:pt-10">
      <h1 className="section text-3xl">Experience</h1>
      <ol className="border-quaternary relative ml-4 border-l">
        {experience.map((exp) => {
          return (
            <li key={exp.id} className="mb-10 ml-4">
              <button
                aria-label={`Timeline point for ${exp.id}`}
                onMouseEnter={() => handleOnMouseEnter(exp.id)}
                onMouseLeave={() => handleOnMouseEnter(null)}
                className={cn(
                  "bg-quaternary absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white",
                  [hoveredId === exp.id && "bg-primary"],
                )}
              />
              <time
                className={cn("text-sm leading-none font-normal", [
                  hoveredId === exp.id && "text-tertiary",
                ])}
              >
                {formatPeriod(exp.start_date, exp.end_date)} ·
                {getDurationFromISO(exp.start_date, exp.end_date ?? undefined)}
              </time>
              <h3 className="text-tertiary text-lg font-semibold">
                {exp.position} | @ {exp.place}
              </h3>
              <ul>
                {exp.work.map((w) => (
                  <li key={w}>- {w}</li>
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
