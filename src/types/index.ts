export type ContactChannel = {
  src: string;
  via: string;
  url?: string;
};

export type Education = { id: number; year: string; place: string };

export type Experience = {
  id: number;
  period: string;
  position: string;
  place: string;
  work: string[];
};

export type Gallery = {
  src: string;
};

export type GalleryPropsType = {
  data: Gallery[];
  id: string;
  isVisible?: boolean;
  ref?: Node;
};

export type Skill = {
  name: string;
  url: string;
};

export type Project = {
  id: number;
  name: string;
  url: string;
  cover: string;
  stack: string[];
  description: string;
  status: "coming soon" | "under maintenance" | "available";
  updateDate: number;
};

export type SoftwareSkill = { name: string; skills: Skill[] };

export type Certificate = {
  name: string;
  score: number;
  maxScroe: number;
  date: string;
};
