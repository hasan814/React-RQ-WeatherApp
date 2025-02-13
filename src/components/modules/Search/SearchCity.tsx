import { useLocationSearch } from "@/hooks/use-weather";
import { useSearchHistory } from "@/hooks/use-search-history";
import { SearchDialog } from "./SearchDialog";
import { useNavigate } from "react-router-dom";
import { SearchBtn } from "./SearchBtn";
import { ILocation } from "@/types/module";
import { useState } from "react";

const SearchCity = () => {
  // ============ Navigate ===============
  const navigate = useNavigate();

  // ============ State ===============
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  // ============ Custom Hook ===============
  const { history, clearHistory, addToHistory } = useSearchHistory();
  const { data: locations, isLoading } = useLocationSearch(query);

  // ============ History Map ===============
  const transformedHistory: ILocation[] = history.map((item) => ({
    lat: item.lat,
    lon: item.lon,
    name: item.name,
    state: item.state,
    country: item.country,
    searchAt: new Date(item.searchAt).toISOString(),
  }));

  // ============ select Function ===============
  const selectHandler = (cityData: string) => {
    const [lat, lon, name, country] = cityData.split("|");
    addToHistory.mutate({
      query,
      name,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      country,
    });
    setOpen(false);
    navigate(`/city/${name}??lat=${lat}&lon=${lon}`);
  };

  // ============ Rendering ===============
  return (
    <>
      <SearchBtn onClick={() => setOpen(true)} />
      <SearchDialog
        open={open}
        setOpen={setOpen}
        query={query}
        setQuery={setQuery}
        locations={locations || []}
        isLoading={isLoading}
        history={transformedHistory}
        clearHistory={clearHistory}
        selectHandler={selectHandler}
      />
    </>
  );
};

export default SearchCity;
