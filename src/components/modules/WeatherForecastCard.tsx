import { ArrowDown, ArrowUp, Droplet, Wind } from "lucide-react";
import { IDailyForcastTypes } from "@/types/module";
import { formatTemp } from "@/utils/formatTemp";
import { format } from "date-fns";

const WeatherForecastCard = ({ day }: { day: IDailyForcastTypes }) => {
  return (
    <div
      key={day.date}
      className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4"
    >
      <div>
        <p className="font-medium">
          {format(new Date(day.date * 1000), "EEE, MMM d")}
        </p>
        <p className="text-sm text-muted-foreground capitalize">
          {day.weather.description}
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <span className="flex items-center text-blue-500">
          <ArrowDown className="mr-1 w-4" />
          {formatTemp(day.temp_min)}
        </span>
        <span className="flex items-center text-red-500">
          <ArrowUp className="mr-1 h-4 w-4" />
          {formatTemp(day.temp_max)}
        </span>
      </div>
      <div className="flex justify-end gap-4">
        <span className="flex items-center gap-1">
          <Droplet className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{day.humidity}%</span>
        </span>
        <span className="flex items-center gap-1">
          <Wind className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{day.wind}m/s</span>
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastCard;
