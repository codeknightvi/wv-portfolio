import { supabase } from "lib/supabase";

// the bucket is public
export const getSkillsUrl = (path: string) =>
  supabase.storage.from("skills").getPublicUrl(path).data.publicUrl;
