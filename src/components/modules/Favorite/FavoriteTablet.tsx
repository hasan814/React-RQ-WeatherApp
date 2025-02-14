import { IFavoriteTabletProps } from "@/types/module";
import { useNavigateToCity } from "@/hooks/use-navigationToCity";
import { useWeatherQuery } from "@/hooks/use-weather";
import { Loader2 } from "lucide-react";

import RemoveButton from "./RemoveBtn";
import WeatherInfo from "./WeatherInfo";

const FavoriteTablet = ({
  id,
  lat,
  lon,
  name,
  onRemove,
}: IFavoriteTabletProps) => {
  const navigateToCity = useNavigateToCity();
  const { data: weather, isLoading } = useWeatherQuery({ lat, lon });

  return (
    <div
      onClick={() => navigateToCity(name, lat, lon)}
      role="button"
      tabIndex={0}
      className="p-4 pr-8 flex gap-3 border bg-card relative shadow-sm rounded-lg items-center min-w-[250px] cursor-pointer transition-all hover:shadow-md"
    >
      <RemoveButton id={id} name={name} onRemove={onRemove} />
      {isLoading ? (
        <div className="flex h-8 items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : (
        weather && <WeatherInfo weather={weather} name={name} />
      )}
    </div>
  );
};

export default FavoriteTablet;
