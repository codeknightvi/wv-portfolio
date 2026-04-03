import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WorkPage from "@pages/work-page";
import ProjectPage from "@pages/project-page";
import HomePage from "@pages/home-page";
import Root from "./Root";
import AboutPage from "@pages/about-page";
import LandingPage from "@pages/landing-page";
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
  </React.StrictMode>
);
