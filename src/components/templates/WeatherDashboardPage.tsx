import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

import WeatherErrorAlert from "../modules/WeatherErrorAlert";
import WeatherSkeleton from "../modules/loading-skeleton";
import LocationAlert from "../modules/LocationAlert";

import {
  useForcastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import CurrentWeather from "../modules/CurrentWeather";

const WeatherDashboardPage = () => {
  // =========== Geolocation Hooks ===========
  const {
    coordinates,
    error: locationError,
    getLocation,
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
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={refreshHandler}
          disabled={weatherQuery.isFetching || forcastQuery.isFetching}
        >
          <RefreshCw
            className={`h-4 w-4 ${
              weatherQuery.isFetching ? "animate-spin" : ""
            }`}
          />
        </Button>
      </div>
      <div className="grid gap-6">
        <div>
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboardPage;
