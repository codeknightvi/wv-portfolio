export type ContactChannel = {
  src: string;
  via: string;
  url?: string;
};

export const contactChannel: ContactChannel[] = [
  {
    src: "github",
    via: "codeknightvi",
    url: "https://github.com/codeknightvi",
  },
  {
    src: "linkedin",
    via: "woramjvic",
    url: "https://www.linkedin.com/in/woramjvic/",
  },
  {
    src: "gmail",
    via: "johnvforwork@gmail.com",
  },
  {
    src: "call",
    via: "+66 806495969",
  },
];
