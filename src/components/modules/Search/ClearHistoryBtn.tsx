import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ClearHistoryBtn: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <Button variant="ghost" size="sm" onClick={onClick}>
    <XCircle className="h-4 w-4" />
    Clear
  </Button>
);
