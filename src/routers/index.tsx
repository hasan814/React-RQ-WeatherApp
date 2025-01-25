import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
