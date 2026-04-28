import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip";
import { useSkillsQuery } from "@hooks/query/skills";
import { getSkillsUrl } from "@utils/getUrl";
import { useMemo } from "react";

type GroupedSkill = {
  name: string;
  skills: {
    id: string;
    name: string;
    url: string;
  }[];
};

export default function Skills() {
  const { data: skills } = useSkillsQuery();

  const groupedSkills = useMemo(() => {
    if (!skills?.length) return {};

    return skills.reduce<Record<string, GroupedSkill>>((acc, skill) => {
      const key = skill.category ?? "other";

      const group = acc[key] ?? {
        name: key,
        skills: [],
      };

      return {
        ...acc,
        [key]: {
          ...group,
          skills: [
            ...group.skills,
            {
              id: skill.id,
              name: skill.name,
              url: getSkillsUrl(skill.image_path),
            },
          ],
        },
      };
    }, {});
  }, [skills]);

  return (
    <section>
      {Object.values(groupedSkills).map((group) => (
        <div key={group.name}>
          <h1 className="my-4 text-center text-lg capitalize md:my-12 lg:text-3xl">{group.name}</h1>

          <div className="flex flex-wrap items-center justify-center gap-y-2">
            {group.skills.map((skill) => (
              <Tooltip key={skill.id}>
                <TooltipTrigger>
                  <div className="mx-4 transition ease-in-out hover:scale-125 md:mx-10">
                    <img
                      src={skill.url}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                      className="w-10 object-contain md:w-20"
                    />
                  </div>
                </TooltipTrigger>

                <TooltipContent>{skill.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
