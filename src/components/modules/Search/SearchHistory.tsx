import { ISearchHistoryProps } from "@/types/module";
import { ClearHistoryBtn } from "./ClearHistoryBtn";
import { format } from "date-fns";
import { Clock } from "lucide-react";

import {
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";

export const SearchHistory = ({
  history,
  clearHistory,
  selectHandler,
}: ISearchHistoryProps) =>
  history.length > 0 ? (
    <>
      <CommandSeparator />
      <CommandGroup>
        <div className="flex items-center justify-between px-2 my-2">
          <p className="text-xs text-muted-foreground">Recent Searches</p>
          <ClearHistoryBtn onClick={() => clearHistory.mutate()} />
        </div>
        {history.map((location) => (
          <CommandItem
            key={`${location.lat}-${location.lon}`}
            value={`${location.lat} | ${location.lon} | ${location.name} | ${location.country}`}
            onSelect={selectHandler}
          >
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{location.name}</span>
            {location.state && (
              <span className="text-sm text-muted-foreground">
                , {location.state}
              </span>
            )}
            <span className="text-sm text-muted-foreground">
              , {location.country}
            </span>
            <span className="ml-auto text-xs text-muted-foreground">
              {format(location.searchAt, "MMM d, h:mm a")}
            </span>
          </CommandItem>
        ))}
      </CommandGroup>
    </>
  ) : null;
