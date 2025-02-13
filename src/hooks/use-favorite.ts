import { IFavoriteItemProps } from "@/types/hooks";
import { useLocalStorage } from "./use-local-storage";
import { useMutation } from "@tanstack/react-query";

export const useFavorite = () => {
  const [favorites, setFavorites] = useLocalStorage<IFavoriteItemProps[]>("favorites", []);

  const isFavorite = (lat: number, lon: number) => {
    return favorites.some(item => item.lat === lat && item.lon === lon);
  };

  const addFavorite = useMutation({
    mutationFn: async (favorite: IFavoriteItemProps) => {
      const newFavorite = { ...favorite, id: `${favorite.lat}-${favorite.lon}-${Date.now()}` };

      if (isFavorite(favorite.lat, favorite.lon)) return favorites;

      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      return updatedFavorites;
    },
  });

  const removeFavorite = useMutation({
    mutationFn: async (favoriteId: string) => {
      const updatedFavorites = favorites.filter((item) => item.id !== favoriteId);
      setFavorites(updatedFavorites);
      return updatedFavorites;
    },
  });

  const clearFavorites = useMutation({
    mutationFn: async () => {
      setFavorites([]);
      return [];
    },
  });

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
};
