import { useMutation } from "@tanstack/react-query";
import { ISearchHoistoryProps } from "@/types/hooks";
import { useLocalStorage } from "./use-local-storage";

export const useSearchHistory = () => {
  const [history, setHistory] = useLocalStorage<ISearchHoistoryProps[]>("search-history", []);

  const addToHistory = useMutation({
    mutationFn: async (search: Omit<ISearchHoistoryProps, "id" | "searchAt">) => {
      const newSearch: ISearchHoistoryProps = {
        ...search,
        id: `${search.lat}-${search.lon}-${Date.now()}`,
        searchAt: Date.now(),
      };

      const filteredHistory = history.filter(
        (item) => !(item.lat === search.lat && item.lon === search.lon)
      );

      const newHistory = [newSearch, ...filteredHistory].slice(0, 10);
      setHistory(newHistory);
      return newHistory;
    },
  });

  const clearHistory = useMutation({
    mutationFn: async () => {
      setHistory([]);
      return [];
    },
  });

  return {
    history,
    addToHistory,
    clearHistory,
  };
};
