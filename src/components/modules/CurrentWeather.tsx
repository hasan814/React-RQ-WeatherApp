import { CurrentWeatherProps } from "../../types/module";
import { Card, CardContent } from "../ui/card";

import WeatherDetailsLocation from "./Weather/WeatherDetailsLocation";
import TemperatureInfo from "./Weather/TempratureInfo";
import WeatherLocation from "./Weather/WeatherLocation";
import WeatherIcon from "./Weather/WeatherIcon";

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  // ================ Destructures ================
  const {
    weather = [],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  const currentWeather = weather[0] ?? { icon: "", description: "No data" };

  // ================ Rendering ================
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <WeatherLocation locationName={locationName} />
            <TemperatureInfo
              temp={temp}
              feels_like={feels_like}
              temp_min={temp_min}
              temp_max={temp_max}
            />
            <WeatherDetailsLocation humidity={humidity} windSpeed={speed} />
          </div>
          <WeatherIcon
            icon={currentWeather.icon}
            description={currentWeather.description}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
