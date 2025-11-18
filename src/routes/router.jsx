import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Covaerage from "../Pages/Covaerage";
import AuthLayout from "../Auth/AuthLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

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

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "logIn",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
