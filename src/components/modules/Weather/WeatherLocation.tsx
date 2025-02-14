import { WeatherLocationProps } from "@/types/module";

const WeatherLocation = ({ locationName }: WeatherLocationProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1">
        <h2 className="text-2xl font-bold tracking-tighter">
          {locationName?.name}
        </h2>
        {locationName?.state && (
          <span className="text-muted-foreground">, {locationName.state}</span>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{locationName?.country}</p>
    </div>
  );
};

export default WeatherLocation;
