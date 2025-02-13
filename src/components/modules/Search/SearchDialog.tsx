import { ISearchDialogProps } from "@/types/module";
import { FavoritesGroup } from "../Favorite/FavoritesGroup";
import { SearchHistory } from "./SearchHistory";
import { Suggestions } from "./Suggestions";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export const SearchDialog = ({
  open,
  setOpen,
  query,
  setQuery,
  locations,
  isLoading,
  history,
  clearHistory,
  selectHandler,
}: ISearchDialogProps) => (
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
      <FavoritesGroup />
      <SearchHistory
        history={history}
        clearHistory={clearHistory}
        selectHandler={selectHandler}
      />
      <CommandSeparator />
      <Suggestions
        locations={locations}
        isLoading={isLoading}
        selectHandler={selectHandler}
      />
    </CommandList>
  </CommandDialog>
);
