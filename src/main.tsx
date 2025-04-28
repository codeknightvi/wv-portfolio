import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WorkPage from "@pages/WorkPage";
import ProjectPage from "@pages/ProjectPage";
import HomePage from "@pages/HomePage";
import Root from "./Root";
import AboutPage from "@pages/AboutPage";
import LandingPage from "@pages/LandingPage";
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
