import { createBrowserRouter } from "react-router-dom";

import WeatherDashboard from "@/pages/weather-dashboard";
import NotFound from "@/pages/NotFound";
import City from "@/pages/city";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <WeatherDashboard /> },
      { path: "/city/:cityName", element: <City /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
