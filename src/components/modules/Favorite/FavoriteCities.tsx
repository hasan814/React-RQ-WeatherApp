// FavoriteCities.tsx
import { FavoriteCitiesProps } from "@/types/module";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const FavoriteCities = ({ onRefresh, isLoading }: FavoriteCitiesProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tight">My Location</h1>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={onRefresh}
        disabled={isLoading}
      >
        <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
      </Button>
    </div>
  );
};

export default FavoriteCities;
