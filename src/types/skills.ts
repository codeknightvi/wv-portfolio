export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export type Skill = {
  id: string;
  name: string;
  image_path: string; //URL
  category: SkillCategory;
  created_at: string;
};
