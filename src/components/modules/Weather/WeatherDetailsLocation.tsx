import { WeatherDetailsLocationProps } from "@/types/module";
import { Droplets, Wind } from "lucide-react";

const WeatherDetailsLocation = ({
  humidity,
  windSpeed,
}: WeatherDetailsLocationProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <Droplets className="h-4 w-4 text-blue-500" />
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Humidity</p>
          <p className="text-sm text-muted-foreground">{humidity} %</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Wind className="h-4 w-4 text-blue-500" />
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Wind Speed</p>
          <p className="text-sm text-muted-foreground">{windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailsLocation;
