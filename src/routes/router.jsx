import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Covaerage from "../Pages/Covaerage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Covaerage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
]);
export default router;
