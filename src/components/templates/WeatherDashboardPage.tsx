import { useGeolocation } from "@/hooks/use-geolocation";

import WeatherErrorAlert from "../modules/Weather/WeatherErrorAlert";
import HourlyTemprature from "../modules/HourlyTemprature";
import WeatherSkeleton from "../modules/loading-skeleton";
import WeatherForecast from "../modules/Weather/WeatherForcast";
import FavoriteCities from "../modules/Favorite/FavoriteCities";
import CurrentWeather from "../modules/CurrentWeather";
import WeatherDetails from "../modules/Weather/WeatherDetails";
import LocationAlert from "../modules/LocationAlert";
import Favorites from "../modules/Favorite/Favorites";

import {
  useForcastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";

const WeatherDashboardPage = () => {
  // =========== Geolocation Hooks ===========
  const {
    coordinates,
    getLocation,
    error: locationError,
    isLoading: locationLoading,
  } = useGeolocation();

  // =========== Climate Hooks ===========
  const weatherQuery = useWeatherQuery(coordinates);
  const forcastQuery = useForcastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);
  const locationName = locationQuery.data?.[0];

  // =========== Refresh Function ===========
  const refreshHandler = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forcastQuery.refetch();
      locationQuery.refetch();
    }
  };

  // =========== Rendering ===========
  if (locationLoading) return <WeatherSkeleton />;

  if (locationError)
    return (
      <LocationAlert
        title="Location Error"
        description={locationError}
        onEnableLocation={getLocation}
      />
    );

  if (!coordinates)
    return (
      <LocationAlert
        title="Location Required"
        description="Please enable location access to see your local weather."
        onEnableLocation={getLocation}
      />
    );

  if (weatherQuery.error || forcastQuery.error)
    return <WeatherErrorAlert onRetry={refreshHandler} />;

  if (!weatherQuery || !forcastQuery.data) return <WeatherSkeleton />;

  return (
    <div className="space-y-4">
      {/* Favorite Cities */}
      <Favorites />
      <FavoriteCities
        onRefresh={refreshHandler}
        isLoading={weatherQuery.isFetching || forcastQuery.isFetching}
      />
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {weatherQuery.data && (
            <CurrentWeather
              data={weatherQuery.data}
              locationName={locationName}
            />
          )}
          {forcastQuery.data && <HourlyTemprature data={forcastQuery.data} />}
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {weatherQuery.data && <WeatherDetails data={weatherQuery.data} />}
          {forcastQuery.data && <WeatherForecast data={forcastQuery.data} />}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboardPage;
