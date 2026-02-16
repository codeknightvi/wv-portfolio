import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { education } from "@mock-data/education";
import { twMerge } from "tailwind-merge";
import CertificateCard from "./CertificateCard";
import { certificates } from "@mock-data/certificates";

export default function AboutPage() {
  const { hoveredId, handleOnMouseEnter } = useHoveredPoint();

  return (
    <>
      <div className="m-0 sm:m-4 p-2 sm:p-0 lg:p-10 text-base lg:text-3xl ">
        Frontend Software Engineer focused on React, Next.js, and TypeScript,
        building scalable, high-performance web applications. Experienced in
        real-time interfaces, data-driven dashboards, and structured business
        workflows across trading and enterprise systems. Strong in state
        management, API integration, and clean, maintainable architecture.
        Committed to delivering reliable, production-ready solutions in Agile
        environments.
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
        <ol className="relative border-l border-quaternary ml-4">
          {education.map((edu) => {
            return (
              <li key={edu.year} className="mb-10 ml-4">
                <div
                  onMouseEnter={() => handleOnMouseEnter(edu.id)}
                  onMouseLeave={() => handleOnMouseEnter(null)}
                  className={twMerge(
                    "absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -left-1.5 border border-quaternary",
                    [hoveredId === edu.id && "bg-primary"]
                  )}
                />
                <time
                  className={twMerge(
                    "mb-1 text-sm font-normal leading-none text-tertiary",
                    [hoveredId === edu.id && "text-primary"]
                  )}
                >
                  {edu.year}
                </time>
                <h3 className="text-lg font-semibold text-primary">
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
