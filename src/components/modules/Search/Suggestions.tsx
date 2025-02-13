import { CommandGroup, CommandItem } from "@/components/ui/command";
import { ISuggestionsProps } from "@/types/module";
import { Loader2 } from "lucide-react";
import { Search } from "lucide-react";

export const Suggestions = ({
  locations,
  isLoading,
  selectHandler,
}: ISuggestionsProps) =>
  locations.length > 0 ? (
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
            <span className="text-sm text-muted-foreground">
              , {location.state}
            </span>
          )}
          <span className="text-sm text-muted-foreground">
            , {location.country}
          </span>
        </CommandItem>
      ))}
    </CommandGroup>
  ) : null;
