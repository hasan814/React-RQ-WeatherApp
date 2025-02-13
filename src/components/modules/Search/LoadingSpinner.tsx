import { Loader2 } from "lucide-react";

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-4">
    <Loader2 className="h-4 w-4 animate-spin" />
  </div>
);
