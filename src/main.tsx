import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.tsx";
import HomePage from "./routes/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/home", element: <HomePage /> }],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
