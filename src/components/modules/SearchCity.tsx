import { useLocationSearch } from "@/hooks/use-weather";
import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2, Search } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { useNavigate } from "react-router-dom";

const SearchCity = () => {
  // ============== Navigate ===============
  const navigate = useNavigate();

  // ============== State ===============
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // ============== Query ===============
  const { data: locations, isLoading } = useLocationSearch(query);
  console.log(locations);

  // ============== Select Function ===============
  const selectHandler = (cityData: string) => {
    const [lat, lon, name, country] = cityData.split("|");
    setOpen(false);
    navigate(`/city/${name}??lat=${lat}&lon=${lon}`);
  };

  // ============== Rendering ===============
  return (
    <>
      <Button
        variant={"outline"}
        className="relative w-full justify-start text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search mr-2 h-4 w-4 />
        Search cities...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search Cities..."
          onValueChange={setQuery}
          value={query}
        />
        <CommandList>
          {query.length > 2 && !isLoading && (
            <CommandEmpty>No Cities found.</CommandEmpty>
          )}
          <CommandGroup heading="Favorites">
            <CommandItem>Calnder</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent Searches">
            <CommandItem>Calnder</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {locations && locations.length > 0 && (
            <CommandGroup heading="Suggestions">
              {isLoading && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
              {locations.map((location) => (
                <CommandItem
                  key={`${location.lat}-${location.lon}`}
                  value={`${location.lat} | ${location.lon} | ${location.name} | ${location.country}`}
                  onSelect={selectHandler}
                >
                  <Search className="mr-2 h-4 w-4" />
                  <span>{location.name}</span>
                  {location.state && (
                    <span className="text-sm text0muted-foreground">
                      , {location.state}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    , {location.country}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchCity;
