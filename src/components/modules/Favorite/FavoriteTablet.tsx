import { Button } from "@/components/ui/button";
import { useWeatherQuery } from "@/hooks/use-weather";
import { IFavoriteTabletProps } from "@/types/module";
import { Loader2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FavoriteTablet = ({
  id,
  lat,
  lon,
  name,
  onRemove,
}: IFavoriteTabletProps) => {
  // ============== Navigate ===============
  const navigate = useNavigate();

  // ============== Query ===============
  const { data: weather, isLoading } = useWeatherQuery({ lat, lon });

  // ============== Rendering ===============
  return (
    <div
      onClick={() => navigate(`/city/${name}?lat=${lat}&lon=${lon}`)}
      role="button"
      tabIndex={0}
      className="
            p-4 
            pr-8 
            flex 
            gap-3 
            border 
            bg-card 
            relative 
            shadow-sm 
            rounded-lg 
            items-center 
            min-w-[250px] 
            cursor-pointer 
            transition-all 
            hover:shadow-md
        "
    >
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={(event) => {
          event.stopPropagation();
          onRemove(id);
          toast.error(`Removed ${name} from Favorites`);
        }}
        className="
        h-6 
        w-6 
        p-0 
        top-1 
        right-1 
        absolute 
        rounded-full 
        hover:text-destructive-foreground 
        group-hover:opacity-100
      "
      >
        <X className="h-4 w-4" />
      </Button>
      {isLoading ? (
        <div className="flex h-8 items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : weather ? (
        <>
          <div className="flex items-center gap-2">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
              className="h-8 w-8"
            />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">
                {weather.sys.country}
              </p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xl font-bold">
              {Math.round(weather.main.temp)} °
            </p>
            <p className="text-xs capitalize text-muted-foreground">
              {weather.weather[0].description}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FavoriteTablet;
