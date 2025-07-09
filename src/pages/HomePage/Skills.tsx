import { softwareSkills } from "@mock-data/softwareSkills";

export default function Skills() {
  return (
    <section className="softwareskill">
      {softwareSkills.map((el, index) => (
        <div key={index}>
          <h1 className="text-center text-lg lg:text-3xl my-4 md:my-12 ">
            {el.name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-y-2">
            {el.skills.map((language, index) => (
              <div
                key={index}
                className="mx-4 md:mx-10 hover:scale-125 transition transition ease-in-out"
              >
                <img
                  src={language.url}
                  alt={language.name}
                  className="w-10 md:w-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
