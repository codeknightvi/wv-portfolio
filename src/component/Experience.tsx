import { experience } from "../base_constant";

const Experience = () => {
  return (
    <section className="exp">
      <h1 className="text-3xl section">Experience</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4">
        {experience.map((exp, index) => {
          return (
            <li className="mb-10 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {exp.period}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
