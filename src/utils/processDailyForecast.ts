import { IDailyForcastTypes } from "@/types/module";
import { format } from "date-fns";

export const processDailyForecast = (list: any[]): Record<string, IDailyForcastTypes> => {
  return list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        weather: forecast.weather[0],
        wind: forecast.wind.speed,
        date: forecast.dt,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
    }
    return acc;
  }, {} as Record<string, IDailyForcastTypes>);
};
