import { RemoveButtonProps } from "@/types/module";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { X } from "lucide-react";

const RemoveButton = ({ id, name, onRemove }: RemoveButtonProps) => {
  // ============= Remove Function =================
  const removeHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    onRemove(id);
    toast.error(`Removed ${name} from Favorites`);
  };

  // ============= Rendering =================
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={removeHandler}
      className="h-6 w-6 p-0 top-1 right-1 absolute rounded-full hover:text-destructive-foreground group-hover:opacity-100"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default RemoveButton;
