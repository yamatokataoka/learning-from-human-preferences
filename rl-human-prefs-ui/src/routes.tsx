import React from "react";
import Home from "./pages/home";
import Comparison from "./pages/comparison";

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Comparison />,
    path: "/comparison",
  },
];

export default routes;
