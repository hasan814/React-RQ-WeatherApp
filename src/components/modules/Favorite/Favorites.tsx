import { useFavorite } from "@/hooks/use-favorite";
import { ScrollArea } from "@/components/ui/scroll-area";

import FavoriteTablet from "./FavoriteTablet";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorite();
  if (!favorites.length) return null;
  return (
    <>
      <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
      <ScrollArea className="w-full pb-4">
        <div className="flex gap-4">
          {favorites.map((city) => (
            <FavoriteTablet
              key={city.id}
              {...city}
              onRemove={() => removeFavorite.mutate(city.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default Favorites;
