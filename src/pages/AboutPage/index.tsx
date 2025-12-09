import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { education } from "@mock-data/education";
import { twMerge } from "tailwind-merge";
import CertificateCard from "./CertificateCard";
import { certificates } from "@mock-data/certificates";

export default function AboutPage() {
  const { hoveredIndex, handleOnMouseEnter } = useHoveredPoint();

  return (
    <>
      <div className="m-0 sm:m-4 p-2 sm:p-0 lg:p-10 text-base lg:text-3xl ">
        I’m a React developer with hands-on experience building and maintaining
        decentralized finance (DeFi) trading platforms. My expertise spans
        debugging, implementing new features, and creating high-performance,
        user-friendly interfaces. I worked extensively with a range of modern
        libraries—including those for charting, form handling, and state
        management—to create high-performance, responsive, and user-friendly
        interfaces. I collaborated in Agile Scrum environments, work closely
        with QA, UX/UI, and backend teams to deliver clean, consistent, and
        efficient code. Driven by curiosity and precision, I’m passionate about
        crafting impactful digital experiences and contributing to innovative
        projects that make technology more human-centered.
      </div>

      <section className="mb-4">
        <h1 className="text-3xl section mb-2">Certificate</h1>
        <div className="grid grid-cols-3 gap-2">
          {certificates.map((cer) => {
            return cer.name !== "invalid" ? (
              <CertificateCard key={cer.name} {...cer} />
            ) : (
              <div className="flex p-5 border-1 flex-col justify-center items-center" />
            );
          })}
        </div>
      </section>

      <section>
        <h1 className="text-3xl section">Education</h1>
        <ol className="relative border-l border-quaternary dark:border-tertiary ml-4">
          {education.map((edu, index) => {
            return (
              <li key={edu.year} className="mb-10 ml-4">
                <div
                  onMouseEnter={() => handleOnMouseEnter(edu.id)}
                  onMouseLeave={() => handleOnMouseEnter(null)}
                  className={twMerge(
                    "absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -left-1.5 border border-primary dark:border-tertiary dark:bg-tertiary",
                    [hoveredIndex === index && "bg-secondary"]
                  )}
                />
                <time
                  className={twMerge(
                    "mb-1 text-sm font-normal leading-none text-quaternary dark:text-tertiary",
                    [hoveredIndex === index && "text-secondary"]
                  )}
                >
                  {edu.year}
                </time>
                <h3 className="text-lg font-semibold text-tertiary dark:text-primary">
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
