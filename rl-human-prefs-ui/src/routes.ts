import Home from "./pages/home";
import Comparison from "./pages/comparison";

const routes = [
  {
    component: Home,
    path: "/",
    exact: true,
    key: "home",
  },
  {
    component: Comparison,
    path: "/comparison",
    exact: true,
    key: "comparison",
  },
];

export default routes;
