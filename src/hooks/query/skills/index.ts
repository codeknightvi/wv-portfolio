import { useQuery } from "@tanstack/react-query";
import { getSkills } from "api/skills";

export function useSkillsQuery(type?: string) {
  return useQuery({
    queryKey: ["skills", type],
    queryFn: () => getSkills(),
  });
}
