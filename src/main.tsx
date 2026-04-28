import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LandingPage from "@pages/landing";
import AboutPage from "@pages/about";
import HomePage from "@pages/home";
import WorkPage from "@pages/work";
import ProjectPage from "@pages/projects";
import { routes } from "@config/routes";
import NotFoundPage from "@pages/not-found";

import Root from "./Root";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: routes.about.path, element: <AboutPage /> },
      { path: routes.home.path, element: <HomePage /> },
      { path: routes.work.path, element: <WorkPage /> },
      { path: routes.projects.path, element: <ProjectPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
