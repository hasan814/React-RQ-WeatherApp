import { WeatherInfoProps } from "@/types/module";

const WeatherInfo = ({ weather, name }: WeatherInfoProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}.png`}
          alt={weather.weather?.[0]?.description ?? "Weather icon"}
          className="h-8 w-8"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{weather.sys.country}</p>
        </div>
      </div>
      <div className="ml-auto text-right">
        <p className="text-xl font-bold">{Math.round(weather.main.temp)} °</p>
        <p className="text-xs capitalize text-muted-foreground">
          {weather.weather?.[0]?.description ?? "No description"}
        </p>
      </div>
    </>
  );
};

export default WeatherInfo;
