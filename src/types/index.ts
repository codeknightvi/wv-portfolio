export type ContactChannel = {
  src: string;
  via: string;
  url?: string;
};
export type Education = { year: string; place: string };

export type Experience = {
  period: string;
  position: string;
  place: string;
  work: string[];
};

export type Gallery = {
  src: string;
};

export type Skill = {
  name: string;
  url: string;
};

export type Project = {
  name: string;
  url: string;
  cover: string;
  stack: string[];
  description: string;
};

export type SoftwareSkill = { name: string; skills: Skill[] };
