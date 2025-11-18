import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router";
import { AuthContext } from "./Contexts/AuthContext.js";
import AuthProvidier from "./Provider/AuthProvidier.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvidier>
      <RouterProvider router={router} />
    </AuthProvidier>
  </StrictMode>
);
