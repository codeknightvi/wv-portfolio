import { backend } from "./backEnd";
import { database } from "./database";
import { frontEnd } from "./frontEnd";
import { tools } from "./tools";

export const softwareSkills = [
  { name: "front-end", skills: frontEnd },
  { name: "back-end", skills: backend },
  { name: "database", skills: database },
  { name: "tools", skills: tools },
];
