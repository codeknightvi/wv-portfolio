import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.tsx";
import HomePage from "./routes/HomePage.tsx";
import GreetingPage from "./routes/GreetingPage.tsx";
import WorkPage from "./routes/WorkPage.tsx";
import ProjectPage from "./routes/ProjectPage.tsx";
import AboutPage from "./routes/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <GreetingPage />, index: true },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/projects", element: <ProjectPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
