import { useParams, useSearchParams } from "react-router-dom";

import HourlyTemperature from "../modules/HourlyTemprature";
import WeatherErrorAlert from "../modules/WeatherErrorAlert";
import WeatherSkeleton from "../modules/loading-skeleton";
import WeatherForecast from "../modules/WeatherForcast";
import CurrentWeather from "../modules/CurrentWeather";
import WeatherDetails from "../modules/WeatherDetails";

import {
  useForcastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import FavoriteBtn from "../modules/FavoriteBtn";

const CityPage = () => {
  // ============ Params =============
  const [searchParams] = useSearchParams();
  const params = useParams();
  const name = params.cityName;

  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  // ============ Query =============
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForcastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);
  const locationName = locationQuery.data?.[0];

  const country = weatherQuery.data?.sys.country;

  // ============ Rendering =============
  if (weatherQuery.error || forecastQuery.error || !params.cityName)
    return <WeatherErrorAlert />;
  if (!weatherQuery || !forecastQuery.data) return <WeatherSkeleton />;

  return (
    <div className="space-y-4">
      {/* Favorite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          {name}, {country}
        </h1>
        <div>
          {/* Favorites Btn */}
          <FavoriteBtn data={{ ...weatherQuery.data, name: params.cityName }} />
        </div>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {weatherQuery.data && (
            <CurrentWeather
              data={weatherQuery.data}
              locationName={locationName}
            />
          )}
          {forecastQuery.data && (
            <HourlyTemperature data={forecastQuery.data} />
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {weatherQuery.data && <WeatherDetails data={weatherQuery.data} />}
          {forecastQuery.data && <WeatherForecast data={forecastQuery.data} />}
        </div>
      </div>
    </div>
  );
};

export default CityPage;
