import { Skill } from "@_types/skills";
import { supabase } from "lib/supabase";

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase.from("skills").select("*");

  if (error) {
    throw error;
  }

  return (data ?? []) as Skill[];
}
