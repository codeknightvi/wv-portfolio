import { Project } from "@_types";

export const projects: Project[] = [
  {
    name: "Exerzise",
    url: "https://github.com/Purrrgrammer/exerzise",
    cover: "projects/exerzise.png",
    stack: ["react", "redux toolkit", "nodejs", "postgresql"],
    description:
      "P(PostgreSQL)ERN Stack two-sided, role-based web application project built under Redux environment with Redux Toolkit for state management and RTK Query for handling the fetched data. The funcitionality is between user and coach to book the schedule by time availability.",
  },
  {
    name: "buyem",
    url: "https://buyem.pages.dev/",
    cover: "projects/buyem.png",
    stack: ["react", "redux", "localStorage"],
    description:
      "E-commerce platform which data is fetched from Fake Store API and some were imitated within localStorage and services (as API), using other library such as React Router for routing, React Toolkit for state management, and Bootstrap for CSS. *p.s.ID and Password is bubblegummy",
  },
  {
    name: "pokedex starter",
    url: "https://pokedex-starter.pages.dev/",
    cover: "projects/pokedex.png",
    stack: ["react", "zustand"],
    description:
      "Servicing pokemon basic detail, element, abilities and stats from PokéAPI",
  },
  {
    name: "xyz",
    url: "https://xyz-social-media.pages.dev/",
    cover: "projects/xyz.png",
    stack: ["react", "localStorage"],
    description:
      "Basic text-based social media for posts and user data fetched from JSONPlaceholder with user`s previous posts matched within the API and liked posts history from localStorage",
  },
  {
    name: "Countdown Date Picker",
    url: "https://countdown-datepicker.pages.dev/",
    cover: "projects/datepicker.png",
    stack: ["react"],
    description:
      "Countdown app calculated by current time and date selected from date-picker",
  },
  {
    name: "techNotes",
    url: "https://github.com/Purrrgrammer/technotes",
    cover: "",
    stack: ["react", "redux toolkit", "nodejs", "mongodb"],
    description: "coming soon..",
  },
  // { name: "middle man", url: "", cover: "", description: "" },
];
