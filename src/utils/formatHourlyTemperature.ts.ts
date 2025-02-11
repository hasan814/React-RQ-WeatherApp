import { HourlyWeatherProps } from "@/types/module";
import { format } from "date-fns";

export const formatHourlyTemperature = (data: HourlyWeatherProps["data"]) => {
  return data.list.slice(0, 8).map((item) => ({
    time: format(new Date(item.dt * 1000), "ha"),
    temp: Math.round(item.main.temp),
    feels_like: Math.round(item.main.feels_like),
  }));
};
