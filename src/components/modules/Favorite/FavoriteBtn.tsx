import { IFavoriteBtnProps } from "@/types/module";
import { useFavorite } from "@/hooks/use-favorite";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Star } from "lucide-react";

const FavoriteBtn = ({ data }: IFavoriteBtnProps) => {
  console.log(data);
  // ============== Custom Hook ==============
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();
  const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);

  // ============== Toggle Function ==============
  const toggleFavoriteHandler = () => {
    if (isCurrentlyFavorite) {
      removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`);
      toast.error(`Removed ${data.name} from Favorites`);
    } else {
      const newFavorite = {
        name: data.name,
        AddedAt: Date.now(),
        lat: data.coord.lat,
        lon: data.coord.lon,
        country: data.sys.country,
        id: `${data.coord.lat}-${data.coord.lon}-${Date.now()}`,
      };

      addFavorite.mutate(newFavorite);
      toast.success(`Added ${data.name} to Favorites`);
    }
  };

  // ============== Rendering ==============
  return (
    <Button
      variant={isCurrentlyFavorite ? "default" : "outline"}
      size={"icon"}
      className={isCurrentlyFavorite ? "bg-yellow-500 hover:bg-yellow-600" : ""}
      onClick={toggleFavoriteHandler}
    >
      <Star
        className={`h-4 w-4 ${isCurrentlyFavorite ? "fill-current" : ""}`}
      />
    </Button>
  );
};

export default FavoriteBtn;
