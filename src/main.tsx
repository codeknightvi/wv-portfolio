import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WorkPage from "@pages/work";
import ProjectPage from "@pages/projects";
import HomePage from "@pages/home";
import Root from "./Root";
import AboutPage from "@pages/about";
import LandingPage from "@pages/landing";
import { routes } from "@config/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <LandingPage />, index: true },
      { path: routes.about.path, element: <AboutPage /> },
      { path: routes.home.path, element: <HomePage /> },
      { path: routes.work.path, element: <WorkPage /> },
      { path: routes.projects.path, element: <ProjectPage /> },
    ],
  },
  { path: "*", element: <>invalid page</> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
