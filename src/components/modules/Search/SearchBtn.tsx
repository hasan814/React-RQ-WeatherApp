import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const SearchBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button
    variant="outline"
    className="relative w-full justify-start text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
    onClick={onClick}
  >
    <Search className="mr-2 h-4 w-4" />
    Search cities...
  </Button>
);
