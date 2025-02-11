import { LocationButtonProps } from "@/types/module";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

const LocationButton = ({ onClick }: LocationButtonProps) => (
  <Button onClick={onClick} variant={"outline"} className="w-fit">
    <MapPin className="mr-2 h-4 w-4" />
    Enable Location
  </Button>
);

export default LocationButton;
