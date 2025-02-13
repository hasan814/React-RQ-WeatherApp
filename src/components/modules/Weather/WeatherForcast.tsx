import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processDailyForecast } from "@/utils/processDailyForecast";
import { WeatherForcastProps } from "@/types/module";

import WeatherForecastCard from "./WeatherForecastCard";

const WeatherForecast = ({ data }: WeatherForcastProps) => {
  const dailyForcasts = processDailyForecast(data.list);
  const nextDays = Object.values(dailyForcasts).slice(0, 6);

  return (
    <Card>
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {nextDays.map((day) => (
            <WeatherForecastCard key={day.date} day={day} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
