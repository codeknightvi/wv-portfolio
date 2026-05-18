export type ContactChannel = {
  src: string;
  via: string;
  url?: string;
};

export type Education = { id: number; year: string; place: string };

export type Experience = {
  id: number;
  position: string;
  place: string;
  start_date: string;
  end_date: string | null;
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

export type Certificate = {
  id: number;
  name: string;
  score: number;
  maxScore: number;
  date: string;
};
