import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";

const WeatherDashboardPage = () => {
  // =========== Hooks ===========
  const { coordinates, error, getLocation, isLoading } = useGeolocation();

  // =========== Refresh Function ===========
  const refreshHandler = () => {
    getLocation();
    if (coordinates) {
      // reload Data
    }
  };

  // =========== Rendering ===========
  return (
    <div className="space-y-4">
      {/* Favorite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={"outline"} size={"icon"} onClick={refreshHandler}>
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboardPage;
