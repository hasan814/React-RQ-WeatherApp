import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import router from "./routers/index";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
