import { Project } from "@_types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Exerzise",
    url: "https://github.com/codeknightvi/exerzise",
    cover: "projects/exerzise.png",
    stack: ["react", "redux toolkit", "nodejs", "postgresql"],
    description:
      "P(PostgreSQL)ERN Stack two-sided, role-based web application project built under Redux environment with Redux Toolkit for state management and RTK Query for handling the fetched data. The funcitionality is between user and coach to book the schedule by time availability.",
    status: "available",
    updateDate: new Date("2024-02-01").getTime(),
  },
  {
    id: 2,
    name: "buyem",
    url: "https://buyem.pages.dev/",
    cover: "projects/buyem.png",
    stack: ["react", "redux", "localStorage"],
    description:
      "E-commerce platform which data is fetched from Fake Store API and some were imitated within localStorage and services (as API), using other library such as React Router for routing, React Toolkit for state management, and Bootstrap for CSS. *p.s.ID and Password is bubblegummy",
    status: "under maintenance",
    updateDate: new Date("2025-12-09").getTime(),
  },
  {
    id: 3,
    name: "pokedex starter",
    url: "https://pokedex-starter.pages.dev/",
    cover: "projects/pokedex.png",
    stack: ["react", "zustand"],
    description:
      "Servicing pokemon basic detail, element, abilities and stats from PokéAPI",
    status: "under maintenance",
    updateDate: new Date("2025-12-09").getTime(),
  },
  {
    id: 4,
    name: "xyz",
    url: "https://xyz-social-media.pages.dev/",
    cover: "projects/xyz.png",
    stack: ["react", "localStorage"],
    description:
      "Basic text-based social media for posts and user data fetched from JSONPlaceholder with user`s previous posts matched within the API and liked posts history from localStorage",
    status: "under maintenance",
    updateDate: new Date("2025-12-09").getTime(),
  },
  {
    id: 5,
    name: "Countdown Date Picker",
    url: "https://countdown-datepicker.pages.dev/",
    cover: "projects/datepicker.png",
    stack: ["react"],
    description:
      "Countdown app calculated by current time and date selected from date-picker",
    status: "available",
    updateDate: new Date("2024-07-01").getTime(),
  },
  {
    id: 6,
    name: "techNotes",
    url: "https://github.com/codeknightvi/technotes",
    cover: "",
    stack: ["react", "redux toolkit", "nodejs", "mongodb"],
    description: "",
    status: "coming soon",
    updateDate: new Date("2024-06-01").getTime(),
  },
];
