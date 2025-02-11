import { Compass, Gauge, Sunrise, Sunset } from "lucide-react";
import { getWindDirection } from "@/utils/getWindDirection";
import { WeatherData } from "@/types";
import { formatTime } from "@/utils/formatTime";

export const weatherDetailsData = (data: WeatherData) => {
  const { sys, main, wind } = data;

  return [
    {
      title: "Sunrise",
      value: formatTime(sys.sunrise),
      Icon: Sunrise,
      color: "text-orange-500",
    },
    {
      title: "Sunset",
      value: formatTime(sys.sunset),
      Icon: Sunset,
      color: "text-blue-500",
    },
    {
      title: "Wind Direction",
      value: `${getWindDirection(wind.deg)} (${wind.deg} °)`,
      Icon: Compass,
      color: "text-green-500",
    },
    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
      Icon: Gauge,
      color: "text-green-500",
    },
  ];
};
