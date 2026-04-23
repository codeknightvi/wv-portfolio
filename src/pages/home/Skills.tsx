import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@components/ui/tooltip";
import { useSkillsQuery } from "@hooks/query/skills";
import { supabase } from "lib/supabase";
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

    const getUrl = (path: string) =>
      supabase.storage.from("skills").getPublicUrl(path).data.publicUrl;

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
              url: getUrl(skill.image_path),
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
          <h1 className="text-center text-lg lg:text-3xl my-4 md:my-12 capitalize">
            {group.name}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-y-2">
            {group.skills.map((skill) => (
              <Tooltip key={skill.id}>
                <TooltipTrigger>
                  <div className="mx-4 md:mx-10 hover:scale-125 transition ease-in-out">
                    <img
                      src={skill.url}
                      alt={skill.name}
                      className="w-10 md:w-20 object-contain"
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
