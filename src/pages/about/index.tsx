import { useHoveredPoint } from "@hooks/useHoveredPoint";
import { education } from "@mock-data/education";
import CertificateCard from "./CertificateCard";
import { certificates } from "@mock-data/certificates";
import { cn } from "@utils/cn";

export default function AboutPage() {
  const { hoveredId, handleOnMouseEnter } = useHoveredPoint();

  return (
    <>
      <div className="m-0 p-2 text-base sm:m-4 sm:p-0 lg:p-10 lg:text-3xl ">
        Frontend Developer focused on React, Next.js, and TypeScript, building
        scalable, high-performance web applications. Experienced in real-time
        interfaces, data-driven dashboards, and structured business workflows
        across trading and enterprise systems. Strong in state management, API
        integration, and clean, maintainable architecture. Committed to
        delivering reliable, production-ready solutions in Agile environments.
      </div>
      <section className="mb-4">
        <h1 className="section mb-2 text-3xl">Certificate</h1>
        <div className="grid grid-cols-3 gap-2">
          {certificates.map((cer) => {
            return cer.name === "invalid" ? (
              <div className="flex flex-col items-center justify-center border p-5" />
            ) : (
              <CertificateCard key={cer.name} {...cer} />
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="section text-3xl">Education</h1>
        <ol className="border-quaternary relative ml-4 border-l">
          {education.map((edu) => (
            <li key={edu.year} className="mb-10 ml-4">
              <button
                aria-label={`Timeline point for ${edu.id}`}
                onMouseEnter={() => handleOnMouseEnter(edu.id)}
                onMouseLeave={() => handleOnMouseEnter(null)}
                className={cn(
                  "bg-quaternary absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white",
                  [hoveredId === edu.id && "bg-primary"],
                )}
              />

              <time
                className={cn(
                  "mb-1 text-sm leading-none font-normal",
                  hoveredId === edu.id && "text-tertiary",
                )}
              >
                {edu.year}
              </time>
              <h3 className="text-lg font-semibold">{edu.place}</h3>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
